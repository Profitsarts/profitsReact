# Frontend Build Specification: Vibras Portfolio Piece
**Target Directory**: `/Users/condres/Dev/Projects/Profits_portfolio-legacy/web/project-headphones`
**Architect & Auditor**: Gemini Pro (VS Code Native Orchestrator)
**Lead Implementation Framework**: `impeccable` (Sovereign UI) + `animate` (Kinematics) + `emil-design-eng` (Tactility)
**Status**: Ready for Implementation (Closed-Box Technical Spec)

---

## 1. Project Scaffolding & Dependencies

### `package.json`
```json
{
  "name": "vibras-headphones",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.12.5",
    "lenis": "^1.1.18"
  },
  "devDependencies": {
    "vite": "^6.4.2"
  }
}
```

### `vite.config.js`
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
```

---

## 2. File & Directory Topology

```
project-headphones/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       ├── frame-a.png          (copied from assets/source/frame-a-padded.png)
│       └── frame-b.png          (copied from assets/source/frame-b-padded.png)
├── src/
│   ├── main.js                  (Lenis + GSAP timeline + telemetry + interactive controls)
│   ├── style.css                (VELUM ONE pure black theme, typography, knurled textures)
│   └── components/
│       ├── hud.js               (Live telemetry counter logic)
│       └── selector.js          (Interactive finish/colorway switcher)
└── docs/
    └── SPECS-FRONTEND-BUILD.md
```

---

## 3. UI Architecture & DOM Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width="device-width, initial-scale=1.0" />
  <title>Vibras — Ultra-Modular Industrial Headphones</title>
  <meta name="description" content="Concept industrial audio design engineered for 100% tool-free modularity and lifetime repairability. By Luis Sierra." />
  
  <!-- Monospace & Technical Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="./src/style.css" />
</head>
<body class="bg-black text-neutral-100 antialiased selection:bg-orange-500 selection:text-black">

  <!-- Technical Top Header -->
  <header class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/80 backdrop-blur-md text-xs font-mono tracking-wider">
    <div class="flex items-center gap-3">
      <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
      <span class="font-bold tracking-widest text-sm font-sans text-white">VIBRAS</span>
      <span class="text-neutral-500 hidden sm:inline">// ARCHITECTURE LAB 2026</span>
    </div>
    <nav class="hidden md:flex items-center gap-8 text-neutral-400">
      <a href="#teardown" class="hover:text-white transition-colors">01. TEARDOWN</a>
      <a href="#modules" class="hover:text-white transition-colors">02. MODULARITY</a>
      <a href="#telemetry" class="hover:text-white transition-colors">03. ACOUSTICS</a>
      <a href="#materials" class="hover:text-white transition-colors">04. MATERIALS</a>
    </nav>
    <div class="flex items-center gap-4">
      <span class="text-neutral-500 font-mono text-[11px]">CONCEPT ONLY</span>
      <a href="#concept-notice" class="btn-tactile text-[11px] px-3 py-1.5 rounded-sm bg-white/10 hover:bg-orange-500 hover:text-black transition-all">
        SPEC SHEET [PDF]
      </a>
    </div>
  </header>

  <main id="smooth-wrapper">
    <div id="smooth-content">

      <!-- SECTION 1: Pinned Teardown Hero (350vh) -->
      <section id="teardown" class="relative w-full h-[350vh] bg-black">
        
        <!-- Pinned Stage Viewport -->
        <div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          
          <!-- Interactive High-DPI Stage Canvas -->
          <canvas id="hero-canvas" class="absolute inset-0 w-full h-full object-contain pointer-events-none"></canvas>

          <!-- Stage Ambient Gradient Mask -->
          <div class="absolute inset-0 bg-radial-vignette pointer-events-none"></div>

          <!-- Hero Identity (Fades out early) -->
          <div id="hero-intro" class="absolute top-28 left-6 md:left-12 max-w-xl z-20 pointer-events-none transition-opacity duration-300">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 mb-3">
              <span class="text-orange-500">●</span> HARDWARE DISCLOSURE V1.0
            </div>
            <h1 class="text-4xl md:text-6xl font-sans font-light tracking-tight text-white uppercase">
              Vibras <span class="font-bold">Modular</span>
            </h1>
            <p class="mt-4 text-sm md:text-base text-neutral-400 font-sans leading-relaxed">
              Ultra-precision over-ear monitor built from CNC bead-blasted aluminum. 100% modular architecture. Zero proprietary screws. Infinite lifecycle repairability.
            </p>
            <div class="mt-6 flex items-center gap-3 text-xs font-mono text-neutral-500">
              <span class="animate-bounce">↓</span> SCROLL TO INITIATE MECHANICAL EXPLODED VIEW
            </div>
          </div>

          <!-- Phased Callout Overlays (Synchronized with scrub progress) -->
          <div id="callout-stage" class="absolute inset-0 pointer-events-none z-30">
            
            <!-- Callout 1: Driver & Acoustic Chamber (0.15 - 0.40) -->
            <div id="callout-1" class="callout-card absolute top-[35%] left-[8%] md:left-[15%] max-w-xs opacity-0">
              <div class="text-[10px] font-mono text-orange-400 mb-1">[01] BAYONET SYSTEM</div>
              <h3 class="text-lg font-sans font-semibold text-white">MOD-01 Acoustic Chamber</h3>
              <p class="text-xs text-neutral-400 font-mono mt-1 leading-relaxed">
                Bayonet twist-and-lock coupling with index notches. Solid CNC 6061 bead-blasted aluminum shell. Swapped in under 4 seconds without tools.
              </p>
              <div class="callout-metric mt-2 text-[11px] font-mono text-neutral-300 border-t border-white/10 pt-1">
                TOLERANCE: ±0.02MM // 40MM BERYLLIUM
              </div>
            </div>

            <!-- Callout 2: Swappable Battery Cartridge (0.45 - 0.70) -->
            <div id="callout-2" class="callout-card absolute bottom-[25%] right-[8%] md:right-[15%] max-w-xs opacity-0">
              <div class="text-[10px] font-mono text-orange-400 mb-1">[02] POWER CORE</div>
              <h3 class="text-lg font-sans font-semibold text-white">MOD-02 Li-Ion Cartridge</h3>
              <p class="text-xs text-neutral-400 font-mono mt-1 leading-relaxed">
                Quick-release pull-tab with spring-loaded gold pogo-pin bus. Instant hot-swap capability. 42-hour continuous ANC playback.
              </p>
              <div class="callout-metric mt-2 text-[11px] font-mono text-neutral-300 border-t border-white/10 pt-1">
                CAPACITY: 850MAH // 5V BUS // 0 TOOLS
              </div>
            </div>

            <!-- Callout 3: Ergonomics & Tactile Controls (0.75 - 1.00) -->
            <div id="callout-3" class="callout-card absolute top-[28%] right-[10%] md:right-[18%] max-w-xs opacity-0">
              <div class="text-[10px] font-mono text-orange-400 mb-1">[03] TACTILE INTERFACE</div>
              <h3 class="text-lg font-sans font-semibold text-white">MOD-04 Control Yoke</h3>
              <p class="text-xs text-neutral-400 font-mono mt-1 leading-relaxed">
                Diamond-knurled volume dial, woven stainless steel-mesh headband, and 3-position mechanical ANC slider: [0] Off, [I] Transparency, [II] Active ANC.
              </p>
              <div class="callout-metric mt-2 text-[11px] font-mono text-neutral-300 border-t border-white/10 pt-1">
                SWITCH: SAFETY ORANGE // TORX ACCENTS
              </div>
            </div>

          </div>

          <!-- Fixed Live Telemetry Readout (Bottom-Right HUD) -->
          <div class="absolute bottom-8 right-6 md:right-12 z-40 bg-black/60 border border-white/10 backdrop-blur-md px-4 py-3 rounded font-mono text-xs text-neutral-300 min-w-[260px]">
            <div class="flex items-center justify-between text-[10px] text-neutral-500 mb-1">
              <span>TEARDOWN TELEMETRY</span>
              <span id="telemetry-status" class="text-orange-500">READY</span>
            </div>
            <div class="flex items-baseline justify-between">
              <span class="text-neutral-400">DISPLACEMENT:</span>
              <span id="telemetry-mm" class="text-white font-bold text-sm tracking-wider">00.0 MM</span>
            </div>
            <div class="flex items-baseline justify-between mt-1">
              <span class="text-neutral-400">DISASSEMBLY:</span>
              <span id="telemetry-pct" class="text-orange-400 font-bold text-sm">000%</span>
            </div>
            <div class="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
              <div id="telemetry-bar" class="bg-orange-500 h-full w-0 transition-all duration-75"></div>
            </div>
          </div>

          <!-- Axis Calibration HUD (Bottom-Left) -->
          <div class="hidden md:block absolute bottom-8 left-12 z-40 font-mono text-[10px] text-neutral-500 space-y-1">
            <div>SYS.ID: VIBRAS-REF-01..07-TE</div>
            <div>CAMERA: 85MM // ISOMETRIC 30° AZIMUTH</div>
            <div>STAGE: PURE BLACK (#000000)</div>
          </div>

        </div>
      </section>

      <!-- SECTION 2: Laboratory Specifications Grid -->
      <section id="telemetry" class="relative w-full py-32 px-6 md:px-16 border-t border-white/10 bg-black">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span class="text-xs font-mono text-orange-500 uppercase tracking-widest">// TECHNICAL METROLOGY</span>
              <h2 class="text-3xl md:text-5xl font-sans font-light text-white mt-2">Engineered for Pure Transparency.</h2>
            </div>
            <p class="text-neutral-400 font-mono text-xs max-w-md mt-4 md:mt-0">
              Laboratory acoustic measurements and physical tolerance benchmarks calibrated to reference studio monitors.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            <div class="p-6 rounded border border-white/10 bg-neutral-950/60">
              <div class="text-neutral-500 text-xs mb-2">TRANSDUCER ARCHITECTURE</div>
              <div class="text-3xl font-sans font-bold text-white">40<span class="text-orange-500 text-lg">MM</span></div>
              <div class="text-xs text-neutral-400 mt-2">Pure Beryllium diaphragm with NdFeB grade N52 magnetic circuit.</div>
            </div>
            <div class="p-6 rounded border border-white/10 bg-neutral-950/60">
              <div class="text-neutral-500 text-xs mb-2">TOTAL HARMONIC DISTORTION</div>
              <div class="text-3xl font-sans font-bold text-white">&lt;0.02<span class="text-orange-500 text-lg">%</span></div>
              <div class="text-xs text-neutral-400 mt-2">Measured at 1kHz, 100dB SPL across the full operational bandwidth.</div>
            </div>
            <div class="p-6 rounded border border-white/10 bg-neutral-950/60">
              <div class="text-neutral-500 text-xs mb-2">FREQUENCY RESPONSE</div>
              <div class="text-3xl font-sans font-bold text-white">4<span class="text-orange-500 text-lg">HZ</span> - 44<span class="text-orange-500 text-lg">KHZ</span></div>
              <div class="text-xs text-neutral-400 mt-2">Ultra-wide acoustic spectrum exceeding Hi-Res Audio certification standards.</div>
            </div>
            <div class="p-6 rounded border border-white/10 bg-neutral-950/60">
              <div class="text-neutral-500 text-xs mb-2">DISASSEMBLY TIME</div>
              <div class="text-3xl font-sans font-bold text-white">12<span class="text-orange-500 text-lg">SEC</span></div>
              <div class="text-xs text-neutral-400 mt-2">100% field swappable. Zero glue, zero adhesives, zero specialized tools.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: The 4 Autonomous Modules Grid -->
      <section id="modules" class="relative w-full py-32 px-6 md:px-16 border-t border-white/10 bg-neutral-950">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16">
            <span class="text-xs font-mono text-orange-500 uppercase tracking-widest">// MODULAR TAXONOMY</span>
            <h2 class="text-3xl md:text-5xl font-sans font-light text-white mt-2">Four Decoupled Subsystems.</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            
            <!-- Module 1 -->
            <div class="p-6 rounded border border-white/10 bg-black flex flex-col justify-between hover:border-orange-500/50 transition-colors group">
              <div>
                <div class="flex items-center justify-between text-neutral-500 mb-4">
                  <span class="text-orange-500 font-bold">MOD-01</span>
                  <span>BAYONET-LOK</span>
                </div>
                <h3 class="text-base font-sans font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Acoustic Chamber</h3>
                <p class="text-neutral-400 leading-relaxed text-[11px]">
                  CNC-machined aluminum shell containing the 40mm driver and micro-perforated acoustic grille. Twists off in 90 degrees.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-white/5 text-[10px] text-neutral-500 flex justify-between">
                <span>TOOL REQUIRED: NONE</span>
                <span class="text-white font-bold">SWAP: 3S</span>
              </div>
            </div>

            <!-- Module 2 -->
            <div class="p-6 rounded border border-white/10 bg-black flex flex-col justify-between hover:border-orange-500/50 transition-colors group">
              <div>
                <div class="flex items-center justify-between text-neutral-500 mb-4">
                  <span class="text-orange-500 font-bold">MOD-02</span>
                  <span>HOT-SWAP</span>
                </div>
                <h3 class="text-base font-sans font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Power Cell</h3>
                <p class="text-neutral-400 leading-relaxed text-[11px]">
                  Recessed lithium cartridge with textile pull-tab and gold pogo-pin interconnect. Swap without interrupting ANC.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-white/5 text-[10px] text-neutral-500 flex justify-between">
                <span>LIFECYCLE: 1200 CYC</span>
                <span class="text-white font-bold">SWAP: 2S</span>
              </div>
            </div>

            <!-- Module 3 -->
            <div class="p-6 rounded border border-white/10 bg-black flex flex-col justify-between hover:border-orange-500/50 transition-colors group">
              <div>
                <div class="flex items-center justify-between text-neutral-500 mb-4">
                  <span class="text-orange-500 font-bold">MOD-03</span>
                  <span>MAG-CENTRAL</span>
                </div>
                <h3 class="text-base font-sans font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Knit Cushion Stack</h3>
                <p class="text-neutral-400 leading-relaxed text-[11px]">
                  High-density acoustic memory foam encased in breathable charcoal textile. Auto-centers via 8 neodymium magnets.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-white/5 text-[10px] text-neutral-500 flex justify-between">
                <span>HYGIENIC RECYCLABLE</span>
                <span class="text-white font-bold">SWAP: 1S</span>
              </div>
            </div>

            <!-- Module 4 -->
            <div class="p-6 rounded border border-white/10 bg-black flex flex-col justify-between hover:border-orange-500/50 transition-colors group">
              <div>
                <div class="flex items-center justify-between text-neutral-500 mb-4">
                  <span class="text-orange-500 font-bold">MOD-04</span>
                  <span>INTEGRATED</span>
                </div>
                <h3 class="text-base font-sans font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Headband Core & ANC</h3>
                <p class="text-neutral-400 leading-relaxed text-[11px]">
                  Spring-steel yoke encased in braided steel mesh. Houses dual digital signal processors and the orange 3-position toggle.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-white/5 text-[10px] text-neutral-500 flex justify-between">
                <span>PROCESSOR: DUAL DSP</span>
                <span class="text-white font-bold">SWAP: 6S</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SECTION 4: Interactive Finish / Material Selector -->
      <section id="materials" class="relative w-full py-32 px-6 md:px-16 border-t border-white/10 bg-black">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="max-w-xl">
            <span class="text-xs font-mono text-orange-500 uppercase tracking-widest">// SURFACE METALLURGY</span>
            <h2 class="text-3xl md:text-5xl font-sans font-light text-white mt-2">Tactile Raw Finishes.</h2>
            <p class="text-neutral-400 text-sm mt-4 font-sans leading-relaxed">
              Solid aluminum billet machined on 5-axis CNC mills and bead-blasted with microscopic glass spheres to eliminate surface glare. Sealed with a 15-micron hard-anodized oxide layer.
            </p>
            
            <!-- Finish Selector Controls -->
            <div class="mt-8 space-y-3 font-mono text-xs">
              <button class="finish-btn active w-full flex items-center justify-between p-4 rounded border border-orange-500 bg-white/5 text-white transition-all" data-finish="natural">
                <div class="flex items-center gap-3">
                  <span class="w-4 h-4 rounded-full bg-neutral-300 border border-white/30"></span>
                  <span>01 // NATURAL BEAD-BLASTED ALUMINUM</span>
                </div>
                <span class="text-orange-500 font-bold">ACTIVE</span>
              </button>
              <button class="finish-btn w-full flex items-center justify-between p-4 rounded border border-white/10 bg-black text-neutral-400 hover:text-white hover:border-white/30 transition-all" data-finish="stealth">
                <div class="flex items-center gap-3">
                  <span class="w-4 h-4 rounded-full bg-neutral-900 border border-white/20"></span>
                  <span>02 // STEALTH ANODIZED GRAPHITE</span>
                </div>
                <span class="text-neutral-600">SELECT</span>
              </button>
            </div>
          </div>

          <div class="w-full lg:w-1/2 p-8 rounded border border-white/10 bg-neutral-950 font-mono text-xs space-y-4">
            <div class="flex justify-between border-b border-white/10 pb-2 text-neutral-400">
              <span>SUBSTRATE SPECIFICATION</span>
              <span class="text-white font-bold">AL6061-T6</span>
            </div>
            <div class="flex justify-between border-b border-white/10 pb-2 text-neutral-400">
              <span>SURFACE ROUGHNESS (Ra)</span>
              <span class="text-white font-bold">0.8 µM</span>
            </div>
            <div class="flex justify-between border-b border-white/10 pb-2 text-neutral-400">
              <span>ANODIZING COATING DEPTH</span>
              <span class="text-white font-bold">MIL-A-8625 TYPE III</span>
            </div>
            <div class="flex justify-between border-b border-white/10 pb-2 text-neutral-400">
              <span>VOLUME DIAL KNURLING</span>
              <span class="text-white font-bold">DIN 82 DIAMOND RAA 0.6</span>
            </div>
            <div class="flex justify-between border-b border-white/10 pb-2 text-neutral-400">
              <span>TOGGLE SWITCH ACTUATION</span>
              <span class="text-white font-bold">1.8 N MECHANICAL DETENT</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: Concept Framing & Portfolio Footer -->
      <footer id="concept-notice" class="relative w-full py-20 px-6 md:px-16 border-t border-white/10 bg-black text-xs font-mono text-neutral-500">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div class="flex items-center gap-2 text-white font-bold mb-2">
              <span class="text-orange-500">■</span> VIBRAS INDUSTRIAL AUDIO
            </div>
            <p class="max-w-md text-neutral-400 text-[11px] leading-relaxed">
              Concept project designed and engineered by <strong>Luis Sierra</strong>. All imagery, industrial geometry, and motion choreography generated and coded as an international portfolio flagship piece. Not for commercial production.
            </p>
          </div>
          <div class="flex flex-col md:items-end gap-2 text-[11px]">
            <div>FRAME A/B: HIGGSFIELD STUDIO ENGINE</div>
            <div>MOTION: LENIS + GSAP SCROLLTRIGGER</div>
            <div class="text-neutral-400">DESIGN SYSTEM: IMPECCABLE + TASTEMAKER + EMIL-ENG</div>
          </div>
        </div>
      </footer>

    </div>
  </main>

  <script type="module" src="./src/main.js"></script>
</body>
</html>
```

---

## 4. Visual Styles & Micro-Craft (`src/style.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-stage: #000000;
  --color-surface: #0a0a0a;
  --color-surface-raised: #121212;
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-focus: rgba(255, 255, 255, 0.20);
  --color-accent-orange: #ff5722;
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  background-color: var(--color-stage);
  color: #ededed;
  font-family: var(--font-sans);
  overflow-x: hidden;
}

/* Background Radial Vignette for Deep Black Seamless Blending */
.bg-radial-vignette {
  background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.85) 85%, #000000 100%);
}

/* Emil Kowalski Tactile Button Craft */
.btn-tactile {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid var(--color-border-subtle);
  transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease, border-color 0.15s ease;
}

.btn-tactile:active {
  transform: scale(0.97);
}

/* Phased Callout Cards Styling */
.callout-card {
  background: rgba(10, 10, 10, 0.85);
  border: 1px solid var(--color-border-subtle);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 1.25rem;
  border-radius: 4px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(16px);
  transition: border-color 0.2s ease;
}

.callout-card:hover {
  border-color: var(--color-border-focus);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #000000;
}
::-webkit-scrollbar-thumb {
  background: #222222;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-orange);
}

/* Accessibility: Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  #teardown {
    height: auto !important;
  }
  .sticky {
    position: relative !important;
  }
  .callout-card {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 5. Motion Kinematics & Scrub Synchronization (`src/main.js`)

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// 1. Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});

// Synchronize Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. High-DPI Canvas Teardown Engine
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

const imgA = new Image();
const imgB = new Image();

imgA.src = './assets/frame-a.png';
imgB.src = './assets/frame-b.png';

let imagesLoaded = 0;
const onImageLoad = () => {
  imagesLoaded++;
  if (imagesLoaded === 2) {
    resizeCanvas();
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
  const imgWidth = 3200;
  const imgHeight = 1800;
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
```

---

## 6. Implementation Handoff & Execution Protocol
- **Executor Recommendation**: **Claude 3.5 Sonnet / Opus 5** via Claude Code or **Codex (Terra)**.
- **Copy Mandate**: Strictly 100% in English.
- **Next Operational Command**:
  ```zsh
  cd /Users/condres/Dev/Projects/Profits_portfolio-legacy/web/project-headphones
  npm install
  npm run dev
  ```
