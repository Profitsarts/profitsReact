# Geometry of Design — Implementation Guide

## Overview

This implementation translates Kimberly Elam's *Geometry of Design* principles into a working design system with tokens, CSS Grid patterns, and React components.

## Core Geometric Constants

| Constant | Value | Use Case |
|----------|-------|----------|
| φ (PHI) | 1.618 | Golden section, maximum aesthetic harmony |
| √2 (ROOT2) | 1.414 | DIN-compatible grids, practical layouts |
| √3 (ROOT3) | 1.732 | Ternary subdivisions |
| √5 (ROOT5) | 2.236 | Fibonacci relationships |

## Three Parallel Scales

### 1. Golden Section Scale (φ = 1.618)
**Use for:** Brand elements, hero sections, focal points

```
Spacing: 4 → 6.5 → 10.5 → 17 → 27.5 → 44.5 → 72 → 116.5px
Type:    10 → 16 → 26 → 42 → 68 → 110px
```

### 2. Root-2 Scale (√2 = 1.414)
**Use for:** Content grids, responsive layouts, documentation

```
Spacing: 4 → 5.7 → 8 → 11.3 → 16 → 22.6 → 32 → 45.3 → 64px
Type:    10 → 14 → 20 → 28 → 40 → 56 → 80px
```

### 3. Fibonacci Scale
**Use for:** Organic progressions, spacing that "feels right"

```
Spacing: 4 → 8 → 12 → 20 → 32 → 52 → 84 → 136 → 220px
Type:    10 → 13 → 23 → 36 → 59 → 95px
```

## File Structure

```
src/
├── geometry-tokens.js          # Math utilities + token definitions
├── geometry-grid.css           # CSS Grid patterns + utility classes
├── components/
│   └── GeometryLayout.jsx      # React layout components
└── globals.css                 # Integration with existing design
```

## Usage Examples

### 1. Golden Section Layout

```jsx
import { GoldenGrid, GoldenMain, GoldenSidebar } from '@/components/GeometryLayout';

function PageLayout() {
  return (
    <GoldenGrid>
      <GoldenMain>
        {/* Main content at 61.8% width */}
      </GoldenMain>
      <GoldenSidebar>
        {/* Sidebar at 38.2% width */}
      </GoldenSidebar>
    </GoldenGrid>
  );
}
```

### 2. Focal Point Positioning

```jsx
import { GoldenFocalContainer, GoldenFocalPoint } from '@/components/GeometryLayout';

function HeroSection() {
  return (
    <GoldenFocalContainer className="relative h-[60vh]">
      <img src="hero.jpg" className="w-full h-full object-cover" />
      <GoldenFocalPoint position="tl">
        <h1 className="text-golden-text-2xl">Title at Golden Point</h1>
      </GoldenFocalPoint>
    </GoldenFocalContainer>
  );
}
```

### 3. Scale Switching

```jsx
import { GeometryScale } from '@/components/GeometryLayout';

// Apply root-2 scale to a section
<GeometryScale scale="root2">
  <div className="p-space-md"> {/* Uses root2 spacing */}</div>
</GeometryScale>

// Apply golden scale
<GeometryScale scale="golden">
  <div className="p-space-lg"> {/* Uses golden spacing */}</div>
</GeometryScale>
```

### 4. Classic Design Grids

```jsx
import { CassandreGrid, BauhausGrid } from '@/components/GeometryLayout';

// 6×8 Cassandre poster grid
<CassandreGrid>
  <div className="pos-top-left">Logo</div>
  <div className="pos-center">Main content</div>
  <div className="pos-bottom-right">Footer</div>
</CassandreGrid>

// 5×5 Bauhaus modular grid
<BauhausGrid>
  <div className="quadrant-tl">Nav</div>
  <div className="cell-center">Hero</div>
  <div className="quadrant-br">CTA</div>
</BauhausGrid>
```

### 5. Using Hooks

```jsx
import { useGoldenSection, useTypeScale, useSpacingScale } from '@/components/GeometryLayout';

function ResponsiveComponent() {
  const { major, minor } = useGoldenSection(1200); // { major: 741.6, minor: 458.4 }
  const typeScale = useTypeScale('golden');        // [10, 16, 26, 42, 68, 110]
  const spacing = useSpacingScale('root2');        // [4, 5.7, 8, 11.3, 16...]
  
  return (
    <div style={{ width: `${major}px` }}>
      <h1 style={{ fontSize: `${typeScale[4]}px` }}>Content</h1>
      <p style={{ marginBottom: `${spacing[3]}px` }}>Text</p>
    </div>
  );
}
```

## CSS Utility Classes

### Grid Systems
- `.grid-golden-main-sidebar` — 13:8 ratio
- `.grid-golden-large` — 21:13 ratio
- `.grid-root2-wide-narrow` — 10:7 ratio
- `.grid-fib-desktop` — 13 columns
- `.grid-three-by-three` — ternary grid
- `.grid-cassandre` — 6×8 poster grid
- `.grid-bauhaus` — 5×5 modular grid

### Scale Classes
- `.scale-golden` — Apply golden section tokens
- `.scale-root2` — Apply root-2 tokens
- `.scale-fibonacci` — Apply Fibonacci tokens

### Container Classes
- `.container-golden` — Max-width 1170px
- `.container-root2` — Max-width 1131px
- `.container-fibonacci` — Max-width 1152px

### Focal Points
- `.golden-focal-point` — Top-left focal point
- `.golden-focal-point-tr` — Top-right
- `.golden-focal-point-bl` — Bottom-left
- `.golden-focal-point-br` — Bottom-right

### Corner Radii
- `.radius-none` through `.radius-full`
- Based on golden progression: 0, 2, 4, 6.5, 10.5, 17, 27.5px

## Math Utilities (geometry-tokens.js)

```js
import geometry, { goldenSection, subdivideGolden } from '@/geometry-tokens';

// Golden section calculation
const { major, minor, ratio } = geometry.goldenSection(1000);
// { major: 618.03, minor: 381.97, ratio: 1.618 }

// Golden rectangle subdivision
const rects = geometry.subdivideGolden(800, 494.4);
// Returns array of nested squares + reciprocal rectangles

// Generate custom progressions
const myScale = geometry.geometricProgression(8, geometry.PHI, 7);
// [8, 12.94, 20.94, 33.88, 54.82, 88.7, 143.52]

const myFib = geometry.fibonacciLike(5, 8, 8);
// [5, 8, 13, 21, 34, 55, 89, 144]
```

## Design Principles (from Kimberly Elam)

### 1. Regulating Lines (Le Corbusier)
> "The regulating lines do not bring in any poetic or lyrical ideas... they merely establish a balance."

Use diagonal alignments and golden section divisions to create visual order.

### 2. The 3×3 Grid
Used by Rossi (Il Conico kettle) — simple ternary division creates inherent harmony.

### 3. The 6×8 Cassandre Grid
48 square visual fields — used in L'Intransigéant poster for structured composition.

### 4. The 5×5 Bauhaus Grid
Modular square grid — used by Schleifer and Mies van der Rohe.

### 5. Golden Section Focal Points
Place key elements (CTA, hero center, logo) at the 38.2% intersection points.

## Integration with Tailwind

The geometric tokens work alongside Tailwind:

```jsx
// Mix geometric spacing with Tailwind utilities
<div className="grid-golden-main-sidebar">
  <div className="col-main p-space-md bg-white rounded-lg shadow-sm">
    <h1 className="text-golden-text-2xl font-sans">
      Golden typography + Tailwind font utilities
    </h1>
  </div>
</div>
```

## When to Use Each Scale

| Scale | Best For | Avoid |
|-------|----------|-------|
| Golden | Hero sections, brand moments, marketing pages | Dense data tables, technical docs |
| Root-2 | Content-heavy pages, documentation, dashboards | Decorative layouts |
| Fibonacci | Organic content flows, blogs, editorial | Precise technical layouts |

## References

- Kimberly Elam, *Geometry of Design* (2001)
- Le Corbusier, *The Modulor* (1948)
- Adolf Zeising, *Der goldene Schnitt* (1884)