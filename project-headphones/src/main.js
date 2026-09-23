import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. Initialize Lenis Smooth Scroll (skipped under reduced motion)
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

// 2. High-DPI Canvas Teardown Engine
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

const imgA = new Image();
const imgB = new Image();

imgA.src = './assets/frame-a.webp';
imgB.src = './assets/frame-b.webp';

let imagesLoaded = 0;
const onImageLoad = () => {
  imagesLoaded++;
  if (imagesLoaded === 2) {
    resizeCanvas();
    if (reduceMotion) {
      renderStage(1);
      telemetryMm.textContent = '48.0 MM';
      telemetryPct.textContent = '100%';
      telemetryBar.style.width = '100%';
      telemetryStatus.textContent = 'EXPLODED (100%)';
      telemetryStatus.className = 'text-emerald-400 font-bold';
      return;
    }
    renderStage(0);
    initScrollTimeline();
  }
};

imgA.onload = onImageLoad;
imgB.onload = onImageLoad;

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  renderStage(currentProgress);
});

// State tracker
let currentProgress = 0;

// Render Canvas Stage: Blends Frame A (closed) to Frame B (exploded)
function renderStage(progress) {
  currentProgress = progress;
  const width = window.innerWidth;
  const height = window.innerHeight;

  ctx.clearRect(0, 0, width, height);

  if (imagesLoaded < 2) return;

  // Preserve Aspect Ratio (Contain mode)
  const imgWidth = imgA.naturalWidth;
  const imgHeight = imgA.naturalHeight;
  const imgAspect = imgWidth / imgHeight;
  const screenAspect = width / height;

  let renderW, renderH, renderX, renderY;

  if (screenAspect > imgAspect) {
    renderH = height;
    renderW = height * imgAspect;
  } else {
    renderW = width;
    renderH = width / imgAspect;
  }

  renderX = (width - renderW) / 2;
  renderY = (height - renderH) / 2;

  // Base Layer: Frame A
  ctx.globalAlpha = 1.0;
  ctx.drawImage(imgA, renderX, renderY, renderW, renderH);

  // Overlay Layer: Frame B (Exploded)
  if (progress > 0) {
    ctx.globalAlpha = Math.min(1, Math.max(0, progress));
    ctx.drawImage(imgB, renderX, renderY, renderW, renderH);
  }

  ctx.globalAlpha = 1.0;
}

// 3. Telemetry HUD Elements
const telemetryMm = document.getElementById('telemetry-mm');
const telemetryPct = document.getElementById('telemetry-pct');
const telemetryBar = document.getElementById('telemetry-bar');
const telemetryStatus = document.getElementById('telemetry-status');

// 4. GSAP ScrollTrigger Master Timeline
function initScrollTimeline() {
  const stageTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#teardown',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        renderStage(p);

        // Update Live Telemetry
        const mm = (p * 48.0).toFixed(1);
        const pct = Math.round(p * 100).toString().padStart(3, '0');
        telemetryMm.textContent = `${mm.padStart(4, '0')} MM`;
        telemetryPct.textContent = `${pct}%`;
        telemetryBar.style.width = `${p * 100}%`;

        if (p === 0) {
          telemetryStatus.textContent = 'ASSEMBLED';
          telemetryStatus.className = 'text-neutral-400';
        } else if (p < 1) {
          telemetryStatus.textContent = 'SCRUBBING';
          telemetryStatus.className = 'text-orange-500 font-bold';
        } else {
          telemetryStatus.textContent = 'EXPLODED (100%)';
          telemetryStatus.className = 'text-emerald-400 font-bold';
        }
      }
    }
  });

  // Intro fadeout
  stageTimeline.to('#hero-intro', { opacity: 0, y: -20, ease: 'power1.out', duration: 0.15 }, 0);

  // Callout 1: MOD-01 (enters at 0.15, exits at 0.40)
  stageTimeline.to('#callout-1', { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.15);
  stageTimeline.to('#callout-1', { opacity: 0, y: -16, duration: 0.08, ease: 'power2.in' }, 0.38);

  // Callout 2: MOD-02 (enters at 0.45, exits at 0.70)
  stageTimeline.to('#callout-2', { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.45);
  stageTimeline.to('#callout-2', { opacity: 0, y: -16, duration: 0.08, ease: 'power2.in' }, 0.68);

  // Callout 3: MOD-04 (enters at 0.75, stays till end)
  stageTimeline.to('#callout-3', { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.75);
}

// 5. Interactive Finish Selector
const finishButtons = document.querySelectorAll('.finish-btn');
finishButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    finishButtons.forEach((b) => {
      b.classList.remove('active', 'border-orange-500', 'bg-white/5', 'text-white');
      b.classList.add('border-white/10', 'bg-black', 'text-neutral-400');
      const badge = b.querySelector('span:last-child');
      if (badge) {
        badge.textContent = 'SELECT';
        badge.className = 'text-neutral-600';
      }
    });

    btn.classList.add('active', 'border-orange-500', 'bg-white/5', 'text-white');
    btn.classList.remove('border-white/10', 'bg-black', 'text-neutral-400');
    const badge = btn.querySelector('span:last-child');
    if (badge) {
      badge.textContent = 'ACTIVE';
      badge.className = 'text-orange-500 font-bold';
    }
  });
});
