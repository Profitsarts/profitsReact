import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 767px)').matches;

// 1. Lenis smooth scroll (skipped under reduced motion)
const lenis = reduceMotion ? null : new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -64 });
    else target.scrollIntoView();
  });
});

// 2. Image-sequence engine (frames extracted from the teardown video)
const SEQ = isMobile
  ? { dir: './seq/mobile', count: 48 }
  : { dir: './seq/desktop', count: 97 };

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const frames = new Array(SEQ.count);

// Stage state driven by the scroll timeline: frame progress, horizontal offset, scale.
// x/s only apply on wide screens; below 768 px the product stays centred (checked per frame, so resizes follow).
const stage = { f: 0, x: 0.22, s: 0.86 };
const wideStage = window.matchMedia('(min-width: 768px)');

const frameSrc = (i) => `${SEQ.dir}/${String(i + 1).padStart(3, '0')}.webp`;

function loadFrame(i) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      frames[i] = img;
      resolve();
    };
    img.onerror = resolve;
    img.src = frameSrc(i);
  });
}

// Nearest already-decoded frame, so scrubbing never blanks while the set streams in
function nearestFrame(i) {
  for (let d = 0; d < SEQ.count; d++) {
    if (frames[i - d]) return frames[i - d];
    if (frames[i + d]) return frames[i + d];
  }
  return null;
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.imageSmoothingQuality = 'high';
}

function render() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  ctx.clearRect(0, 0, width, height);

  const img = nearestFrame(Math.round(stage.f * (SEQ.count - 1)));
  if (!img) return;

  const imgAspect = img.naturalWidth / img.naturalHeight;
  let w = width;
  let h = width / imgAspect;
  if (h > height) {
    h = height;
    w = height * imgAspect;
  }
  const wide = wideStage.matches;
  const s = wide ? stage.s : 1;
  w *= s;
  h *= s;

  const x = (width - w) / 2 + (wide ? stage.x * width : 0);
  const y = (height - h) / 2;
  ctx.drawImage(img, x, y, w, h);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  render();
});

// 3. Telemetry HUD
const telemetryMm = document.getElementById('telemetry-mm');
const telemetryPct = document.getElementById('telemetry-pct');
const telemetryBar = document.getElementById('telemetry-bar');
const telemetryStatus = document.getElementById('telemetry-status');
const progressLine = document.getElementById('teardown-progress');

function updateTelemetry(p) {
  const mm = (p * 48.0).toFixed(1);
  telemetryMm.textContent = `${mm.padStart(4, '0')} MM`;
  telemetryPct.textContent = `${Math.round(p * 100).toString().padStart(3, '0')}%`;
  telemetryBar.style.width = `${p * 100}%`;

  if (p === 0) {
    telemetryStatus.textContent = 'ASSEMBLED';
    telemetryStatus.className = 'text-neutral-400';
  } else if (p < 1) {
    telemetryStatus.textContent = 'SEPARATING';
    telemetryStatus.className = 'text-orange-500 font-bold';
  } else {
    telemetryStatus.textContent = 'EXPLODED (100%)';
    telemetryStatus.className = 'text-emerald-400 font-bold';
  }
}

// 4. Scroll timeline. Positions are fractions of the pinned scroll (0..1).
function chapterIn(tl, id, at) {
  tl.fromTo(id, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, at);
}
function chapterOut(tl, id, at) {
  tl.to(id, { opacity: 0, y: -24, duration: 0.04, ease: 'power2.in' }, at);
}
// Product glides away from the side that holds the copy
function shift(tl, x, s, at, duration = 0.08) {
  tl.to(stage, { x, s, duration, ease: 'power2.inOut' }, at);
}

function initScrollTimeline() {
  const tl = gsap.timeline({
    defaults: { immediateRender: false },
    onUpdate: render,
    scrollTrigger: {
      trigger: '#teardown',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        const p = gsap.utils.clamp(0, 1, (self.progress - 0.08) / 0.84);
        updateTelemetry(p);
        progressLine.style.transform = `scaleX(${self.progress})`;
      },
    },
  });

  // Intro leaves while the product travels from the right edge to centre stage
  tl.to('#hero-intro', { opacity: 0, y: -24, duration: 0.1, ease: 'power1.out' }, 0);
  shift(tl, 0, 0.94, 0, 0.14);

  // Parts separate across the middle of the scroll, then hold
  tl.to(stage, { f: 1, duration: 0.84, ease: 'none' }, 0.08);

  shift(tl, 0.17, 0.8, 0.14);
  chapterIn(tl, '#chapter-1', 0.18);
  chapterOut(tl, '#chapter-1', 0.36);

  shift(tl, -0.17, 0.8, 0.38);
  chapterIn(tl, '#chapter-2', 0.42);
  chapterOut(tl, '#chapter-2', 0.58);

  shift(tl, 0.17, 0.8, 0.6);
  chapterIn(tl, '#chapter-3', 0.64);
  chapterOut(tl, '#chapter-3', 0.8);

  shift(tl, 0, 0.92, 0.82);
  chapterIn(tl, '#chapter-4', 0.88);

  // Pad the timeline to exactly 1 so positions map 1:1 to scroll progress
  tl.set({}, {}, 1);
}

async function initStage() {
  resizeCanvas();
  const first = reduceMotion ? SEQ.count - 1 : 0;
  await loadFrame(first);

  if (reduceMotion) {
    Object.assign(stage, { f: 1, x: 0, s: 0.94 });
    render();
    updateTelemetry(1);
    return;
  }

  render();
  initScrollTimeline();

  // Stream the rest in order so early scroll positions resolve first
  for (let i = 1; i < SEQ.count; i++) {
    await loadFrame(i);
    if (Math.abs(i - stage.f * (SEQ.count - 1)) < 2) render();
  }
}

initStage();

if (!reduceMotion) {
  const reveal = { trigger: '#front', start: 'top 75%' };
  gsap.from('#front-figure', { opacity: 0, y: 48, scale: 0.96, duration: 1.2, ease: 'power3.out', scrollTrigger: reveal });
  gsap.from('#front-copy', { opacity: 0, y: 24, duration: 1, delay: 0.15, ease: 'power3.out', scrollTrigger: reveal });
}

// Lifestyle loop: plays only while on screen; WCAG 2.2.2 needs a pause control for motion over 5 s
const lifestyleVideo = document.getElementById('lifestyle-video');
const lifestyleToggle = document.getElementById('lifestyle-toggle');
let lifestylePaused = reduceMotion;
let lifestyleVisible = false;

function syncLifestyle() {
  if (!lifestylePaused && lifestyleVisible) lifestyleVideo.play().catch(() => {});
  else lifestyleVideo.pause();
  lifestyleToggle.textContent = lifestylePaused ? 'PLAY' : 'PAUSE';
  lifestyleToggle.setAttribute('aria-pressed', String(lifestylePaused));
  lifestyleToggle.setAttribute('aria-label', lifestylePaused ? 'Play background video' : 'Pause background video');
}

lifestyleToggle.addEventListener('click', () => {
  lifestylePaused = !lifestylePaused;
  syncLifestyle();
});

new IntersectionObserver(([entry]) => {
  lifestyleVisible = entry.isIntersecting;
  syncLifestyle();
}, { threshold: 0.25 }).observe(lifestyleVideo);

syncLifestyle();

// 5. Interactive Finish Selector
const finishButtons = document.querySelectorAll('.finish-btn');
const finishImages = document.querySelectorAll('[data-finish-img]');
finishButtons.forEach((btn) => {
  btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));
  btn.addEventListener('click', () => {
    finishImages.forEach((img) => {
      img.classList.toggle('opacity-0', img.dataset.finishImg !== btn.dataset.finish);
    });
    finishButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    finishButtons.forEach((b) => {
      b.classList.remove('active', 'border-orange-500', 'bg-white/5', 'text-white');
      b.classList.add('border-white/10', 'bg-black', 'text-neutral-400');
      const badge = b.querySelector(':scope > span:last-child');
      if (badge) {
        badge.textContent = 'SELECT';
        badge.className = 'text-neutral-600';
      }
    });

    btn.classList.add('active', 'border-orange-500', 'bg-white/5', 'text-white');
    btn.classList.remove('border-white/10', 'bg-black', 'text-neutral-400');
    const badge = btn.querySelector(':scope > span:last-child');
    if (badge) {
      badge.textContent = 'ACTIVE';
      badge.className = 'text-orange-500 font-bold';
    }
  });
});
