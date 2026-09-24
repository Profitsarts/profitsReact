# Design Skills Governance & Vibras Project Architecture

> **Document Type:** Architectural Standard & Project Handover
> **Author & Design Director:** Luis Sierra
> **Project Target:** `Profits_portfolio-legacy/web/project-headphones`
> **Target Audience:** Design Directors, Hiring Managers, Senior Product Engineers

---

## PART 1: Design Skills Architecture & Operating Doctrine

### 1. The Design Skills Inventory & Specialization Matrix
All curated design skills are installed in `~/.claude/skills/` and `~/.gemini/config/skills/`, indexed in `CODEX-SKILLS.md`:

| Skill | Core Domain & Specialization | Boundary & Anti-Scope | Primary Trigger / When to Call |
|---|---|---|---|
| **`impeccable`** | **Sovereign Lead for Web UI Architecture.** Production-grade components, layout systems, DOM structure, responsiveness, accessibility (WCAG AA), token consistency, and visual critique. | Not for raw backend code or standalone graphic illustration. | `/impeccable`, `/impeccable shape`, UI layout, audits, design system tokens. |
| **`tastemaker`** | **Aesthetic Direction & Anti-Slop Filter.** Extracts visual DNA from references, defines material palettes, builds aesthetic memory, and enforces anti-AI-slop visual gates. | Does not write component code or layout DOM. | "Match this vibe", art direction, visual DNA extraction, style calibration. |
| **`animate`** | **Physics-Based Kinematics Engine.** Calculates spring constants, stiffness, damping ratios, interruptible physics, and exit transitions (Emil Kowalski kinematics). | Not for static layout or typography. | Physics springs, motion timing, interactive gesture animations. |
| **`emil-design-eng`** | **Tactile Component Craft.** Sub-pixel borders, translucent depth shadows, physical knurling, mechanical feedback, and material realism on interactive elements. | Not for full-page layout architecture. | Button polish, dialog tactile details, knurled dials, micro-interactions. |
| **`apple-design`** | **System Discipline (HIG Principles).** Spatial breath, generous negative space, product-as-protagonist hierarchy, and fluid modal sheet mechanics. | Strictly forbidden from copying Cupertino cosmetic cliches (no black backgrounds with rainbow gradient text or "Pro" naming). | Spacing balance, product focus, modal sheet kinematics. |
| **`animation-vocabulary`** | **Reverse-Lookup Motion Glossary.** Translates conceptual movement descriptions into exact industry kinematic terms. | Naming only; does not implement code. | "What is the name for this animation effect?", motion vocabulary queries. |
| **`landing-page-design`** | **Commercial Conversion Architecture.** Marketing hero structuring, intake funnels, conversion copywriting, and proof placement. | Not for web app dashboards or complex component libraries. | Marketing landing pages, conversion funnels, waitlist pages. |
| **`skill-router`** | **Semantic Switchboard & Collision Arbiter.** Evaluates prompt intent, resolves skill overlaps, and enforces single-leader dispatch. | Router only; contains no design instructions. | Ambiguous design requests, skill conflict resolution. |

---

### 2. The Collision Problem: Progressive Disclosure & Semantic Drift
* **The Root Cause**: Large Language Models (LLMs) do not keep all skill manuals loaded in active context memory. Instead, they scan the `name` and `description` headers of `SKILL.md` files (*Progressive Disclosure*). When multiple installed skills share overlapping phrases (*"design UI"*, *"style components"*, *"polish design"*, *"motion"*), the agent experiences semantic confusion and attention fragmentation.
* **The Failure Mode**: The model either tries to satisfy 4 skills simultaneously (bloating the code with defensive styles) or picks a skill at random based on arbitrary keyword matches.

---

### 3. The Optimal Governance Directive: The Single-Leader Protocol
To achieve publication-grade design quality without cognitive pollution:

1. **Strict Single-Leader Rule**: Exactly **ONE** design skill holds execution leadership per task turn.
   - For UI architecture, layout, and component building: **`impeccable` is the absolute sovereign**.
   - Auxiliary skills (`tastemaker`, `animate`, `emil-design-eng`) act strictly as data donors or sub-routines; they NEVER compete for layout authority.
2. **Negative Boundaries Mandate**: Every skill description must explicitly define what it does NOT do. (e.g., `tastemaker` provides aesthetic tokens but hands off implementation directly to `impeccable`).
3. **Phased Dispatch Lifecycle**:
   - **Phase 1 (Discovery & Scoping)**: Run `/impeccable shape` or `/impeccable init`. Cero production code. Maximum 2–3 questions per round across purpose, users, and constraints. Output: `PRODUCT.md`.
   - **Phase 2 (Art Direction & Material DNA)**: Led by `tastemaker`. Defines the visual world, materials, and reference extraction.
   - **Phase 3 (Core UI Architecture & DOM)**: Led exclusively by `impeccable`. Builds semantic HTML, CSS tokens, and responsive layout. All other skills stay suppressed.
   - **Phase 4 (Tactile Polish & Kinematics)**: Joint delegation to `emil-design-eng` (sub-pixel borders, knurled textures) and `animate` (spring physics, ScrollTrigger scrub calibration).
   - **Phase 5 (Audit & Review)**: Evaluated through `impeccable critique` and accessibility standards.

---

## PART 2: Vibras Portfolio Project — Technical Master State

### 1. Product Positioning & Value Proposition
* **Project Name**: **Vibras**
* **Creator / Design Director**: **Luis Sierra**
* **Repository Path**: `/Users/condres/Dev/Projects/Profits_portfolio-legacy/web/project-headphones`
* **Durable Specification**: [PRODUCT.md](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/project-headphones/PRODUCT.md)
* **Audience**: Design Directors, Creative Technologists, and Technical Recruiters.
* **The Inviolable Product Truth**: Vibras headphones are **100% modular and repairable without tools**. The repairability is proved mechanically through a real-time scroll-scrubbed teardown, not through marketing rhetoric.

---

### 2. Hardware Industrial Design: Teenage Engineering DNA
The physical headphone embodies high-precision industrial design (inspired by TE TP-7, CM-15, TX-6, and FREKVENS):

* **Tool-Free Snap-Fit Modularity**:
  * `MOD-01`: Machined bead-blasted aluminum cup shells with bayonet twist-and-click locking rings.
  * `MOD-02`: Quick-swap lithium battery cartridge with pull-tab and exposed gold pogo pins.
  * `MOD-03`: Acoustic ear cushions with memory foam and magnetic auto-centering mounts.
  * `MOD-04`: Spring-steel headband wrapped in a braided wire-mesh sleeve, housing the core ANC electronics.
* **Tactile Hardware Controls**:
  * Precision diamond-knurled aluminum volume wheel (TP-7 jog-dial heritage).
  * Mechanical 3-position slide switch in safety orange (`#FF5722` / `#FF3E00`) for active noise control: `0 (Off) | I (Transparency) | II (ANC Active)`.
  * Flush-counterbored Torx fasteners visible on mechanical joints, celebrating precision assembly.
  * Laser-etched technical dot-matrix micro-labels: `VIBRAS // MOD-01..04 // 40MM BERYLLIUM // 32Ω`.

---

### 3. Web Interaction Architecture: The VELUM ONE Paradigm
The landing page translates the physical teardown into an interactive cinematic experience:

* **Stage Atmosphere**: Deep matte black canvas (`#000000` / `#080808`), razor-sharp studio lighting, and zero generic marketing gradients.
* **Interactive Scroll-Scrubbed Hero (~350vh pinned)**:
  * Driven by **Lenis smooth scroll** synchronized with **GSAP ScrollTrigger**.
  * Scrubbed `<canvas>` WebP image sequence (never scrubbed raw video) for butter-smooth 60fps performance on desktop and mobile.
  * **Live Technical Telemetry (bottom-right fixed)**:
    `EXPLODED VIEW: 00.0 MM | DISASSEMBLY: 0%` -> `31.7 MM | 66%` -> `48.0 MM | 100%`
  * **Synchronized Callout Cards**: Dynamic text cards enter and exit in lockstep with the mechanical stages (Structure -> Acoustics -> Modular Power).
* **Narrative Sequence**:
  1. Hero Pinned Teardown (~350vh)
  2. Laboratory Specs & Audio Metrics
  3. Modular Component Breakdown & Swap Times (MOD-01 to MOD-04)
  4. Full-Bleed Cinematic Lifestyle Video Banner (Higgsfield integration)
  5. Interactive Colorway Selector (changes physical materials in real-time)
  6. Concept Notice & Author Footer Credit: *"Concept project — design & motion by Luis Sierra"*

---

### 4. Visual References Mounted on Disk
Seven official Teenage Engineering hardware reference images are stored in `docs/references/`:
1. `01-ko2.jpg`: EP-133 K.O. II (mechanical keycaps, circular speaker grille, safety orange accents).
2. `02-tx6.png`: TX-6 (unibody CNC aluminum block, diamond-knurled dials).
3. `03-frekvens-lego.png`: FREKVENS / IKEA x TE (modular interlocking cube grammar and pegboard mechanics).
4. `04-sidekick.png`: K.O. Sidekick (proportions, rocker switches, layout hierarchy).
5. `05-tp7.png`: TP-7 (knurled jog wheel, laser-etched circular compass markings).
6. `06-cm15-back.png`: CM-15 Back (3-position slide switch `0 I II` with orange indicator dot, woven steel mesh).
7. `07-cm15-side.png`: CM-15 Side (flush Torx hardware, recessed pill-shaped USB-C port).

---

### 5. Higgsfield Generation Pipeline Status
* **Authentication**: CLI fully authenticated via OAuth PKCE (`~/.local/bin/higgsfield`).
* **Active Workspace**: ID `3839fd5a-1034-4b6e-9e1a-fd93b401641d` (Private, 10 active credits).
* **Generation Models & Plan Compatibility**:
  * **Primary Target (User-Specified)**: **Marketing Studio Image 2.5 Sunburst** (`gpt_image_2_5 --variant sunburst`).
    * *Technical Note*: On Free plans, the Higgsfield backend enforces `job_minimum_basic_plan_required`. If running without the Basic Plan ($20/mo subscription), the verified fallback is:
  * **Verified Fallback Model**: **`z_image`** (Tongyi-MAI engine). Fully operational on Free plan, tested in 24 seconds, generated [assets/source/alternates/test-zimage.png](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/project-headphones/assets/source/alternates/test-zimage.png) at ~0.25 credits.
  * **Video Generation Model**: **Seedance 2.5** (`seedance_2_5` / `bytedance/seedance-2.5/image-to-video`). Verified and operational via Python SDK and `HF_KEY` credentials in `.env`.
* **Master Generation Prompts Ready**:
  * Pre-compiled master prompts for **Frame A** (assembled) and **Frame B** (exploded) are stored in [docs/prompts/frames.md](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/project-headphones/docs/prompts/frames.md).

---

### 6. Immediate Next Milestone (Paso 3 Execution)
* Execute Frame A (closed) and Frame B (exploded) generation via Higgsfield.
* Produce intermediate frame sequence / Seedance 2.5 transition between Frame A and Frame B.
* Scaffold Vite + Vanilla JS + Lenis + GSAP project structure in `Profits_portfolio-legacy/web/project-headphones/`.
