# Profits 2026 — Design Architecture & Governance

**Design Spec version:** `profits-2026-screenprint-brutalist-1.0.0`
**Direction:** Screenprint brutalism
**Supersedes:** the 2026 "Swiss Graphic / Architectural" governance in the legacy repository

---

## 0. What changed, and why

The previous governance document locked the portfolio to one typeface
(ITC Avant Garde Gothic, weight 500), one three-column card grid, and a
palette built around `#323a45` slate and `#f61067` magenta. That system
produced a competent enterprise-SaaS portfolio and undersold twenty years of
print, illustration and art direction work.

Two rules from the old document are **explicitly revoked**:

| Old rule | Status | Replacement |
|---|---|---|
| "Any use of other weights or system fonts is strictly forbidden" | Revoked | MOD carries display; Avant Garde carries structure; Charter carries narrative |
| Uniform 24px-gap card grids across all components | Revoked | One ruled, numbered index line — no cards |

Two rules are **retained**:

- **Workspace-wide implementation.** A stylistic or structural change lands
  globally. No per-project stylesheet forks.
- **Anti-fragmentation.** Values live in `tokens.css` once. A component that
  hard-codes a colour, size, step or duration is a bug.

---

## 1. Where the direction comes from

The palette is not chosen; it is **measured off the Mandrilizate MINIFEST
poster** — ink-black ground, bone display type, hot-red overprint. The
display face is the same face that set that poster: MOD, by Svetoslav Simov
for Fontfabric, 2009. It sat unused in the repository at
`public/assets/css/fonts/MOD.otf`, never declared in `fonts.css`.

Structure is bound from the active **Brutalism** design system: zero corner
radius, hard borders, offset solid shadows, extreme typographic scale.

**Departure on record:** the Brutalism system's default `--bg: #f5f1e8` cream
ground is *not* used. A warm beige page ground is a documented anti-pattern,
and the poster's own ink ground is both more authentic and higher contrast.
Everything else in that system binds as-is.

---

## 2. Token architecture

Source of truth: **`src/styles/tokens.css`**. `index.html` inlines a mirror of
the same block for the no-build prototype; only the font paths differ.

All colour is **oklch**. No raw hex outside `:root`.

### Ground pairs

Sections flip five variables and nothing else. A component reads `--ground`
and `--fg` and needs no light/dark variant of its own.

| Token | Value | Role |
|---|---|---|
| `--ink` | `oklch(0.14 0.008 60)` | Poster ground |
| `--ink-raised` | `oklch(0.20 0.010 60)` | Raised surface on ink |
| `--ink-rule` | `oklch(0.32 0.010 60)` | Hairline on ink |
| `--on-ink` | `oklch(0.95 0.018 85)` | Bone type on ink |
| `--on-ink-dim` | `oklch(0.76 0.012 85)` | Secondary type on ink |
| `--paper` | `oklch(0.95 0.018 85)` | Bone ground |
| `--paper-raised` | `oklch(0.98 0.010 85)` | Raised surface on paper |
| `--paper-rule` | `oklch(0.86 0.016 85)` | Hairline on paper |
| `--on-paper` | `oklch(0.14 0.008 60)` | Ink type on paper |
| `--on-paper-dim` | `oklch(0.42 0.008 60)` | Secondary type on paper |

Apply with `.ground-ink` or `.ground-paper` on the section.

### Signal and secondaries

| Token | Value | Permitted use |
|---|---|---|
| `--signal` | `oklch(0.58 0.22 27)` | Display type ≥18px, rules, markers, focus |
| `--signal-deep` | `oklch(0.50 0.20 27)` | Pressed / hover on solid signal |
| `--mandrill-blue` | `oklch(0.55 0.13 240)` | Reserved secondary |
| `--mandrill-rose` | `oklch(0.68 0.19 5)` | Reserved secondary |

> **Hard constraint.** `--signal` clears roughly 3:1 against both grounds, not
> 4.5:1. It is therefore forbidden on body copy and small labels. Essential
> text is always `--fg` or `--fg-dim` on `--ground`.

### Type

| Role | Family | Rule |
|---|---|---|
| Display | `MOD` | Flagship headline, project H1, specimen only. Limited glyph coverage — never body copy. |
| Structure | `ITCAVANTGARDEGOTHICLTMEDIUM` | Navigation, labels, metadata, titles, section markers (`.marker-t`), buttons |
| Narrative | `Charter`, Georgia | Long-form case-study prose only |
| Data | `IBM Plex Mono`, Courier New | Numerals, IDs, captions, eyebrows |

Scale: `--t-meta` 12px → `--t-display` `clamp(4.5rem, 16vw, 15rem)`.
Body never below 16px. Line height 1.5–1.75. Measure 68ch desktop.

### Spacing, borders, motion

- **Spacing:** multiples of 4 — `4 / 8 / 12 / 16 / 24 / 32 / 48 / 80 / 128`.
  Section padding 128 desktop, 80 tablet, 48 phone.
- **Borders:** radius `0` everywhere. `--rule` 1px for grid structure,
  `--frame` 3px for modules, `--offset-shadow` `10px 10px 0` on the flagship
  only. No soft shadow, no gradient, no glass.
- **Motion:** 140ms state feedback, 280ms transitions, 180ms exits, 40ms list
  stagger. `ease-out` on enter, `ease-in` on exit. Stepped easing
  (`--ease-step`) is allowed **only** for the accent colour flip on hover,
  never for motion that communicates position. Animate `transform` and
  `opacity` only. Every duration collapses to 1ms under
  `prefers-reduced-motion`.

### Measured media ratios

Read from the files, never guessed:

```
--ratio-poster: 1600 / 900;   /* master_frame_16x9.png       */
--ratio-plate:  1170 / 780;   /* mandril-0X-FULL.jpg         */
--ratio-thumb:   600 / 399;   /* *-THMB.jpg                  */
```

Content-bearing artwork renders its full frame (`object-fit: contain`).
`cover` is reserved for the deliberately cropped 56px index thumbnail.

---

## 3. Layout discipline

- **The grid is visible.** 12 columns on desktop, 8 at ≤1023px, 4 at ≤639px.
  Hairline rules and numbered gutter ticks. The rules sit on the grid the
  content actually uses; they are `aria-hidden` and `pointer-events: none`.
- **One index, not two grids.** The old page rendered `ProjectCard` twice in
  the same three-column layout (Case Studies + See). There is now one ruled
  index with working filters.
- **No cards.** No `aspect-[4/3]` tile, no rounded corner, no colour-wash
  hover overlay. `ProjectIndexRow` is the only project affordance.
- **Overlays are decorative only.** The hover peek is anchored on two axes
  inside a positioned row, sized independently, and gated behind
  `@media (hover: hover) and (min-width: 1024px)`. Content regions never
  overlap.
- **Stacked text is stacked elements.** Two pieces of information are two
  block-level elements. `width`, `height` and `min-height` go only on
  elements already declared block or flex.

---

## 4. Component inventory

| Component | File | Replaces |
|---|---|---|
| Ruled masthead shell | `src/components/Layout.jsx` | centred logo + pill nav |
| Flagship hero | `src/components/FlagshipMandrilizate.jsx` | `HeroHeader` + `HeroCarousel` |
| Project index line | `src/components/ProjectIndexRow.jsx` | `ProjectCard` |
| Landing composition | `src/pages/Portfolio.jsx` | previous `Portfolio` |
| Global stylesheet | `src/globals.css` | previous `globals.css` |
| Token block | `src/styles/tokens.css` | new |

**Untouched and still in force:** `ProjectDetail.jsx`,
`ProjectDetail.module.css`, `ProjectNavBar.jsx`, `src/data/projects_v2.js`,
the `HashRouter` routes, the `#see` / `#touch` anchor ids and the Formspree
endpoint. Tailwind directives stay in `globals.css` because
`ProjectDetail` and `ProjectNavBar` still use utility classes.

---

## 5. Content rules

- Real repository content only. No invented clients, metrics, feature
  promises or credentials.
- Real images for real referents. The Mandrilizate artwork, the six plates
  and the thumbnails are the actual files, localised and referenced
  relatively. Nothing is hotlinked, nothing is generated as a stand-in.
- A placeholder is labelled as a placeholder in the interface. The audio
  transport says "No track loaded" because no audio file ships with the
  repository — it does not fake a waveform.
- Poster text is quoted, not paraphrased. Only text legible in
  `master_frame_16x9.png` is reproduced: MINIFEST, Tempus Fugit Fanzine,
  Aviles.

---

## 6. Anti-patterns

Banned by default. A selected visual style does not exempt them.

- Warm beige, cream or peach page grounds.
- Purple-gradient washes, or gradients on background layers at all.
- Stock UI faces (Inter, Roboto, Arial) as display type.
- The rounded card with a coloured left-border accent.
- An icon beside every heading; two solid buttons for the same action in one
  viewport.
- Hover states that turn text grey or lighter.
- Hand-drawn SVG people as decoration — including the grey avatar SVG the old
  `HeroHeader` shipped.
- Invented metrics and filler copy.
- Designer chrome in product UI: viewport pickers, platform toggles, demo
  panels, generated-design metadata.

---

## 7. Accessibility floor

- Body text ≥4.5:1 on its ground; display ≥18px and essential graphics ≥3:1.
  Dark ground audited independently, not inferred from light.
- Every interactive element has a visible focus state (`--focus-ring`) and an
  accessible name.
- Status never carried by colour alone — the transport pairs its colour with
  a text label and a shape.
- Tap targets ≥44×44 with ≥8px between neighbours.
- No horizontal scroll at 375px. Zoom is never disabled. Layout survives
  system font scaling.
- `prefers-reduced-motion` stops the flagship video, removes stagger and
  collapses every duration.

---

## 8. Porting into the legacy repository

The React files here are portable structure. To land them:

1. Copy `src/styles/tokens.css`, `src/globals.css`, the two new components
   and `src/pages/Portfolio.jsx` into `Profits_portfolio-legacy/web/src/`.
2. Add the MOD `@font-face` block to `public/assets/css/fonts.css`, or let
   `tokens.css` declare it — the paths in `tokens.css` already match the
   legacy layout.
3. Delete `src/components/ProjectCard.jsx`, `HeroHeader.jsx` and
   `HeroCarousel.jsx` once nothing imports them. `swiper` and `framer-motion`
   then become removable dependencies.
4. Run `npm run dev`.

**Known repository debt, out of scope and untouched:** five `.cjs` repair
scripts at the root, the duplicated `public/assets/assets/` tree, and a
committed `dist/`.
