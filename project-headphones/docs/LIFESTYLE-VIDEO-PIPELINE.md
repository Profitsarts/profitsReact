# Vibras Headphones — Lifestyle Video Pipeline Specification

## Context
- Video 1 (exploded teardown) was rendered and integrated as a canvas image sequence in the hero section.
- Video 2 (lifestyle video banner with model wearing the headphones) failed previously due to Higgsfield API balance exhaustion.
- The user has subscribed to ArtCraft (Basic tier, getartcraft.com) running ByteDance Seedance 2.0 / Kling.
- The web currently uses a static fallback section (#front) in index.html; the planned Section 4 ("Full-Bleed Cinematic Lifestyle Video Banner") remains pending.

## Master PNG Input Assets (Do NOT use WebP derivatives)
The master high-resolution PNG source assets are located on disk at:
- `Profits_portfolio-legacy/web/project-headphones/assets/source/frame-a.png` (Master closed headphones, 30 deg left)
- `Profits_portfolio-legacy/web/project-headphones/assets/source/frame-a-padded.png` (Padded master frame)
- `Profits_portfolio-legacy/web/project-headphones/assets/generated/vibras-left-three-quarter.png` (Crisp three-quarter angle)
- `Profits_portfolio-legacy/web/project-headphones/assets/generated/vibras-front-elevation-big.png` (Front elevation)

## Technical Architecture & Workflow for Claude Code
1. **Asset Selection**: Provide the user with the exact absolute paths to the master PNG files above to use as visual inputs.
2. **Two-Stage Generation Protocol**:
   - **Stage 1 (Anchor Still)**: Generate or compose a master still image of the human subject wearing the exact VIBRAS headphones (matching bead-blasted aluminum shells, circular grille perforations, and the safety-orange switch).
   - **Stage 2 (Motion Animation in ArtCraft)**: Feed the anchor still into ArtCraft with Seedance 2.0 (Image-to-Video) to animate subtle head rotation, eye focus, and cinematic camera tracking without product distortion.
3. **Post-Processing & Integration**:
   - Collect the exported MP4 from user Downloads.
   - Compress and optimize using `ffmpeg` (H.264 MP4 and WebM, <3MB target, unsharp mask).
   - Mount video into `index.html` under Section 4 with autoplay, loop, muted, playsinline, and verify in LiveHub.
