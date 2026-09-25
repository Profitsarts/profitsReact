# Dual-Engine Animation Specification: Vanilla Canvas 2D vs. Three.js WebGL (SHYLENCE VIBRAS)

You are an Elite Creative Technologist and Graphics Programmer specializing in generative animation, mathematical curves, particle systems, and high-performance WebGL.

## Reference Source
- **Kinetic Vector Reference**: Analysis of [`Screen Recording 2026-09-25 at 03.35.11.mp4`](file:///Users/condres/Documents/Docs/Captures/Screen%20Recording%202026-09-25%20at%2003.35.11.mp4).
- **Core Visual DNA**: Continuous parametric ribbon tracks formed by parallel line segments that fan out radially around curves (slinky / accordion kinetics, optical moiré patterns, high-contrast flat color blocks).
- **Product Subject**: **SHYLENCE VIBRAS Modular Headphones** (diadema headband arc, dual ear cups, MOD-01 to MOD-04 modular subsystems).

---

## Dual Deliverable Objective
Provide two separate, complete, fully working single-file HTML implementations:
1. **Output 1 (`index-canvas2d.html`)**: **Vanilla JavaScript + HTML5 Canvas 2D** (Zero dependencies, pure native API, sub-millisecond execution).
2. **Output 2 (`index-threejs.html`)**: **Three.js + WebGL 3D** (Spatial depth, 3D point cloud, volumetric vector ribbons, and mouse-driven parallax).

---

## Common Visual Sequences (Both Versions Must Execute)

### Phase 1: Sparkling Particle Ingestion & Convergence (00:00 – 00:05)
- Thousands of glowing, multi-colored sparkling micro-particles (Safety Orange `#FF5722`, Hot Pink `#FF80BF`, Electric Cyan `#00E5FF`, White `#FFFFFF`) disperse across the viewport.
- Magnetic physics attract the particles inward toward the structural contour coordinates of the VIBRAS headphones (headband arch, circular ear cups, volume dial, battery base).
- Particles oscillate and lock into place, defining the recognizable headphone silhouette.

### Phase 2: Vector Contour Ignition & The Fanned Ribbon Replica (00:05 – 00:15)
- The contour lines ignite into **fanned parallel-line ribbons** directly replicating the motion in `Screen Recording 2026-09-25 at 03.35.11.mp4`.
- **Kinematic Rule**: Along straight lines, segments remain parallel. As the path curves around the headband and ear cups, the line segments fan out radially into accordion/slinky folds with mathematical precision.
- **Rhythmic Color Snaps**:
  - State 1: Background **Safety Orange** (`#FF5722`) with soft blossom-pink (`#FFB6C1`) and white slats.
  - State 2: Background **Electric Cobalt Blue** (`#0018F0`) with razor-sharp stark white (`#FFFFFF`) fanned slats.
  - State 3: Background **Velvet Eggplant** (`#1C0818`) with glowing rose-pink (`#FF9ED2`) slats.

### Phase 3: Hardware Manifestation & Brand Lockup (00:15 – 00:20)
- The fanned vector lines compress and solidify into the physical headphone geometry.
- The `SHYLENCE` brandmark draws itself above the headphones using the same fanned-line technique before turning solid white.
- Telemetry lockup at the bottom: `SHYLENCE // VIBRAS MODULAR // ARCHITECTURE LAB 2026`.

---

## Technical Architecture Requirements

### Output 1: `index-canvas2d.html` (Vanilla HTML5 Canvas 2D)
- **Zero Libraries**: 100% native JavaScript and Canvas 2D context (`ctx`).
- **High-DPI Support**: Automatically scales with `window.devicePixelRatio`.
- **Vector Algorithm**:
  - Sample 2D parametric Bézier curves representing the VIBRAS headphone profile.
  - For each sample point $(x, y)$, calculate the normal unit vector $(-dy, dx)$.
  - Draw line segments extending outward along the normal: from $(x - N_x \cdot w, y - N_y \cdot w)$ to $(x + N_x \cdot w, y + N_y \cdot w)$.
  - Modulate width $w$ and density dynamically to reproduce the fanning and breathing effect of the reference video.
- **Particle System**: Object pool of 3,000 particle objects updating velocities, drag, and sparkling alpha flicker at 60fps.

### Output 2: `index-threejs.html` (Three.js WebGL 3D)
- **Modern CDN Import**: Use ES module imports via `<script type="module">` (e.g. `import * as THREE from 'https://esm.sh/three'`).
- **3D Particle Cloud**:
  - Use `THREE.Points` with `THREE.BufferGeometry`.
  - Point positions sampled from a 3D parametric headphone wireframe (torus segments for earcups, spline tube for headband).
  - Custom vertex/fragment shaders or point materials with additive blending (`THREE.AdditiveBlending`) for realistic sparkling depth.
- **Volumetric Ribbon Trails**:
  - Construct 3D ribbons using `THREE.InstancedMesh` or dynamic `THREE.LineSegments`.
  - As the camera rotates or mouse moves, the ribbons exhibit true 3D spatial parallax while maintaining the fanned accordion appearance.
- **Interaction**: Gentle mouse orbit / parallax that tilts the 3D headphone assembly in space.

---

## Deliverables Expected from Claude
Deliver the complete, standalone code for both files inside separate markdown code blocks:
1. Complete code for `index-canvas2d.html`.
2. Complete code for `index-threejs.html`.
Both files must be 100% ready to save and open directly in a web browser with zero additional setup or build steps.
