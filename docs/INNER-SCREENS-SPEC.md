# Specification: Inner Project Screens Alignment (Screenprint Brutalism + Medium Reading Layout)

**Target Files:**
1. `src/pages/ProjectDetail.jsx` ([ProjectDetail.jsx](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/src/pages/ProjectDetail.jsx))
2. `src/pages/ProjectDetail.module.css` ([ProjectDetail.module.css](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/src/pages/ProjectDetail.module.css))
3. `src/components/ProjectNavBar.jsx` ([ProjectNavBar.jsx](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/src/components/ProjectNavBar.jsx))

**Design System References:**
- Spec: `profits-2026-screenprint-brutalist-1.0.0`
- Architecture: [DESIGN.md](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/DESIGN.md)
- Tokens: [tokens.css](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/src/styles/tokens.css)
- Button & Form Archetypes: [globals.css](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/src/globals.css)
- Home Page Blueprint: [Portfolio.jsx](file:///Users/condres/Dev/Projects/Profits_portfolio-legacy/web/src/pages/Portfolio.jsx)

---

## 1. Core Architectural Requirements

1. **Ground Tone (Lienzo Amarillento / Bone Paper)**:
   - Purge `#f8f8f8` from all containers, wrappers, and navigation bars.
   - Root wrapper uses `.ground-paper` (`--ground: var(--paper)` = `oklch(0.95 0.018 85)`), matching the practice and index sections of the home page.
   - Text color resolves to `var(--fg)` (`var(--on-paper)` = `oklch(0.14 0.008 60)`).

2. **Project Header & Footer (Brutalist System)**:
   - **Kicker**: `font-family: var(--font-sans)`, `font-size: var(--t-meta)`, uppercase, letter-spacing `var(--track-meta)`, color `var(--fg-dim)`.
   - **H1 Title**: `font-family: var(--font-display)` (MOD font), uppercase, `font-size: var(--t-3xl)`, line-height `var(--lh-display)`, tracking `var(--track-display)`, color `var(--fg)`.
   - **Subtitle**: `font-family: var(--font-serif)` (Charter), `font-size: var(--t-lg)`, color `var(--fg-dim)`.
   - **Cover Image**: Remove 4px rounded corners (`border-radius: 0`). Solid frame border: `border: var(--frame) solid var(--rule-color)`.

3. **Reading Body (Medium Layout — Strictly Preserved)**:
   - Max reading width: `max-width: 680px; margin: 0 auto;`.
   - Body font: `font-family: var(--font-serif)` (Charter, Georgia, serif).
   - Metrics: `font-size: 19px; line-height: 1.62; margin-bottom: 1.5rem; letter-spacing: normal;`.
   - Section Headings in content:
     - H2/H3/H4: Preserved in Charter serif reading scale (`font-family: var(--font-serif)`).
     - H5 (Technical Metadata): `font-family: var(--font-sans)`, sentence case / uppercase initial, tracked.
   - Blockquotes: Medium indent, italic Charter, `border-left: 3px solid var(--signal)` (replacing legacy `#f61067`), padding-left 20px, margin-left -23px.

4. **Navigation Controls (`ProjectNavBar.jsx`)**:
   - Align button components with `.btn` from `globals.css`:
     - Shape: `border-radius: 0` (zero radius), border `var(--frame) solid var(--fg)`.
     - Typography: `font: 700 var(--t-meta)/1 var(--font-sans)`, uppercase, `letter-spacing: var(--track-meta)`.
     - States:
       - Default: background transparent or `var(--paper-raised)`.
       - Hover: `background: var(--signal); border-color: var(--signal); color: var(--on-ink);`.
       - Active: `transform: translate(2px, 2px);`.
   - Sticky bar background: `background: color-mix(in srgb, var(--paper) 92%, transparent); backdrop-filter: blur(8px);` with `border-bottom: var(--frame) solid var(--rule-color)` (purging dotted borders).
   - Grid Icon (Back to Index): 3x3 square blocks (0px radius) in `var(--fg)` switching to `var(--on-ink)` on button hover.

---

## 2. Concrete Code Specifications

### A. `src/pages/ProjectDetail.module.css` Replacement

```css
/* ============================================================================
   PROJECT DETAIL — SCREENPRINT BRUTALIST & MEDIUM READING SPEC
   Spec: profits-2026-screenprint-brutalist-1.0.0
   ========================================================================= */

.pageWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--s-6) 0 var(--s-10) 0;
  background-color: var(--ground);
  color: var(--fg);
}

.article {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--s-4);
}

/* --- HEADER: BRUTALIST ARCHETYPE --- */
.kicker {
  font-family: var(--font-sans);
  font-size: var(--t-meta);
  font-weight: 700;
  color: var(--signal);
  text-transform: uppercase;
  letter-spacing: var(--track-meta);
  margin-bottom: var(--s-2);
}

.h1 {
  font-family: var(--font-display);
  font-size: var(--t-3xl);
  font-weight: 400;
  line-height: var(--lh-display);
  letter-spacing: var(--track-display);
  text-transform: uppercase;
  color: var(--fg);
  margin-bottom: var(--s-3);
}

.subtitle {
  font-family: var(--font-serif);
  font-size: var(--t-lg);
  font-weight: 400;
  line-height: var(--lh-body);
  color: var(--fg-dim);
  margin-bottom: var(--s-8);
  max-width: 720px;
}

/* --- FIGURE & COVER --- */
.figure {
  width: 100%;
  margin: 0 0 var(--s-8) 0;
}

.figureImg {
  width: 100%;
  height: auto;
  border-radius: var(--radius); /* 0px */
  border: var(--frame) solid var(--rule-color);
  cursor: pointer !important;
}

.caption {
  font-family: var(--font-serif);
  font-size: var(--t-sm);
  font-style: italic;
  color: var(--fg-dim);
  text-align: center;
  margin-top: var(--s-2);
  line-height: var(--lh-body);
}

/* --- MEDIUM READING COLUMN (680px) --- */
.contentWrapper {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  font-family: var(--font-serif);
}

.contentWrapper p,
.contentWrapper div,
.contentWrapper span,
.contentWrapper strong {
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 1.62;
  color: var(--fg);
  margin-bottom: 1.5rem;
  letter-spacing: normal;
}

.contentWrapper strong {
  font-weight: 700;
}

.contentWrapper h1,
.contentWrapper h2,
.contentWrapper h3,
.contentWrapper h4,
.contentWrapper h6 {
  font-family: var(--font-serif);
  color: var(--fg);
  letter-spacing: -0.02em;
  margin-top: 1.8em;
  margin-bottom: 0.3em;
}

.contentWrapper h1 {
  font-size: 38px;
  line-height: 1.15;
}

.contentWrapper h2 {
  font-size: 28px;
  line-height: 1.22;
}

.contentWrapper h3 {
  font-size: 22px;
  line-height: 1.25;
}

/* Meta Labels inside content (H5) */
.contentWrapper h5 {
  font-family: var(--font-sans);
  font-size: var(--t-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--track-meta);
  color: var(--signal);
  margin-top: 2em;
  margin-bottom: 0.5em;
}

.contentWrapper blockquote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 19px;
  line-height: 1.62;
  border-left: 3px solid var(--signal);
  padding-left: 20px;
  margin-left: -23px;
  margin-bottom: 1.5rem;
  color: var(--fg-dim);
}

@media (max-width: 768px) {
  .h1 {
    font-size: clamp(36px, 10vw, 54px);
  }
  .contentWrapper p,
  .contentWrapper blockquote {
    font-size: 18px;
    line-height: 1.6;
  }
}
```

### B. `src/components/ProjectNavBar.jsx` Implementation

```jsx
import React from react;
import { Link } from react-router-dom;
import { ChevronLeft, ChevronRight } from lucide-react;

const ProjectNavBar = ({ prevProject, nextProject, isFirst, isLast, sticky = true }) => {
  return (
    <div className={`w-full ${sticky ? "sticky top-0 z-[99] bg-[var(--paper)]/95 backdrop-blur-sm border-b border-[var(--rule-color)]" : "border-y border-[var(--rule-color)]"}`}>
      <div className="flex items-center justify-between py-3">
        {/* Left: Previous Project */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          {!isFirst && prevProject ? (
            <Link
              to={`/project/${prevProject.id}`}
              className="btn group !min-h-[40px] !px-3"
              title={`Previous: ${prevProject.title}`}
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline truncate max-w-[180px] font-sans text-xs tracking-wider">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="min-h-[40px]" />
          )}
        </div>

        {/* Center: Back to Index (Ruled Grid Icon) */}
        <div className="flex-shrink-0 mx-4">
          <Link
            to="/"
            state={{ scrollTo: "see" }}
            className="btn !min-h-[40px] !w-[40px] !p-0 group"
            title="Back to Works Index"
          >
            <div className="grid grid-cols-3 gap-[3px]">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] h-[3px] bg-current transition-colors"
                />
              ))}
            </div>
          </Link>
        </div>

        {/* Right: Next Project */}
        <div className="flex-1 flex items-center justify-end min-w-0">
          {!isLast && nextProject ? (
            <Link
              to={`/project/${nextProject.id}`}
              className="btn group !min-h-[40px] !px-3"
              title={`Next: ${nextProject.title}`}
            >
              <span className="hidden sm:inline truncate max-w-[180px] font-sans text-xs tracking-wider">
                {nextProject.title}
              </span>
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          ) : (
            <div className="min-h-[40px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectNavBar;
```
