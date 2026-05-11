# Design Architecture & Governance

## Global Governance Rule
- **Workspace-Wide Implementation**: Any stylistic or structural order (Typography, Spacing, Navigation, Zoom behavior) MUST be executed globally across the entire workspace. 
- **Anti-Fragmentation**: Do NOT apply changes only to specific project modules (e.g., SoC or Maintenance). All modifications must propagate to `globals.css`, `index.css`, and the shared `ProjectDetail` components to ensure absolute portfolio consistency.
- **Typography Standard**: All Sans-serif elements must use **ITC Avant Garde Gothic LTM**. Standard headings (h1, h2, h3, h4, h6) follow a **500** weight. **H5 (Meta Labels)** must use a **700** weight with **0.05em tracking**. Any use of other weights or system fonts is strictly forbidden.

## Portfolio Strategy: Profits Portfolio 2026

## 1. Visual Theme & Atmosphere
The identity is **Architectural, Authoritative, and Geometric**. It follows a "Swiss Graphic" approach: minimal, high-contrast, and governed by strict typographic grids. It blends **ITC Avant Garde Gothic** (Sans) for structure with **Charter/Georgia** (Serif) for narrative clarity. The interface feels like a high-end designer's studio—clean, structured, and premium.

## 2. Color Palette & Roles
* **Dark Slate Gray (#323a45):** Primary structure. Headings, borders, buttons. Precision and authority.
* **Vibrant Magenta-Pink (#f61067):** Interaction energy. Exclusively for hover states, active links, and focus boundaries.
* **Studio White (#f8f8f8):** Studio canvas. A premium off-white that feels warmer than raw digital white.

## 3. Mandatory Typography System
- **Headers (h1-h4, h6)**: `ITC Avant Garde Gothic LTM`. Weight: `500`. 
- **Headers (h5 - Meta Labels)**: `ITC Avant Garde Gothic LTM`. Weight: `700`, `letter-spacing: 0.05em`, color: `rgba(0, 0, 0, 0.84)`.
- **System Consolidation**: Museo Slab and all system-default font stacks (-apple-system, Segoe UI, Roboto) are **removed**.
- **The Narrative (Serif)**: Charter or Georgia is used ONLY for long-form case study body text to ensure high readability.
- **Metadata (h6/Kickers)**: All-caps, ultra-wide tracking, `text-xs`. Always `ITC Avant Garde Gothic`.

## 4. Layout & Rhythm
* **Border Dividers**: Horizontal lines (#323a45) frame section titles, creating a "leveled" structure.
* **Uniform Grids**: 24px gaps standard.
* **Scale**: All components must scale uniformly across the 20+ project ecosystem.
