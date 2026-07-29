/**
 * Geometry of Design — Token System
 * Based on Kimberly Elam's principles: golden section (φ=1.618), Fibonacci, root rectangles (√2, √3, √5)
 * 
 * Three parallel token scales for different use cases:
 * - Golden: Maximum aesthetic harmony, brand/hero elements
 * - Root-2: Practical grids, DIN-compatible, responsive layouts
 * - Fibonacci: Organic growth progressions, spacing that "feels right"
 */

// ============================================================================
// CONSTANTS & MATH UTILITIES
// ============================================================================

const PHI = 1.618033988749895; // Golden ratio φ
const ROOT2 = 1.414213562373095; // √2
const ROOT3 = 1.732050807568877; // √3
const ROOT4 = 2.0; // √4 = 2
const ROOT5 = 2.23606797749979; // √5

/**
 * Generate a geometric progression
 * @param {number} base - Starting value
 * @param {number} ratio - Growth ratio (PHI, ROOT2, etc.)
 * @param {number} steps - Number of steps to generate
 * @returns {number[]} Array of values rounded to 2 decimals
 */
export function geometricProgression(base, ratio, steps) {
    return Array.from({ length: steps }, (_, i) =>
        Math.round(base * Math.pow(ratio, i) * 100) / 100
    );
}

/**
 * Generate Fibonacci sequence starting from custom base
 * @param {number} a - First value
 * @param {number} b - Second value  
 * @param {number} steps - Total values to generate
 * @returns {number[]} Fibonacci-like sequence
 */
export function fibonacciLike(a, b, steps) {
    const seq = [a, b];
    for (let i = 2; i < steps; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    return seq;
}

/**
 * Subdivide a golden rectangle into squares + reciprocal rectangles
 * @param {number} width - Rectangle width
 * @param {number} height - Rectangle height (should be width/PHI or width*PHI)
 * @returns {Array} Array of subdivision coordinates [{x, y, w, h, type}]
 */
export function subdivideGolden(width, height) {
    const rects = [];
    let x = 0, y = 0, w = width, h = height;
    let depth = 0;
    const maxDepth = 8;

    while (depth < maxDepth && Math.min(w, h) > 1) {
        if (w > h) {
            // Horizontal rectangle: carve square from left
            rects.push({ x, y, w: h, h, type: depth % 2 === 0 ? 'square' : 'reciprocal' });
            x += h;
            w -= h;
        } else {
            // Vertical rectangle: carve square from top
            rects.push({ x, y, w, h: w, type: depth % 2 === 0 ? 'square' : 'reciprocal' });
            y += w;
            h -= w;
        }
        depth++;
    }
    return rects;
}

// ============================================================================
// SPACING SCALES
// ============================================================================

/**
 * Base-4 Fibonacci spacing (organic, "feels right")
 * Sequence: 4, 8, 12, 20, 32, 52, 84, 136, 220, 356...
 */
export const spacingFibonacci = fibonacciLike(4, 8, 10);

/**
 * Base-4 Golden Section spacing (maximum harmony)
 * Each step = previous × 1.618
 * Sequence: 4, 6.5, 10.5, 17, 27.5, 44.5, 72, 116.5, 188.5, 305...
 */
export const spacingGolden = geometricProgression(4, PHI, 10);

/**
 * Base-4 Root-2 spacing (DIN-compatible, practical grids)
 * Each step = previous × √2
 * Sequence: 4, 5.7, 8, 11.3, 16, 22.6, 32, 45.3, 64, 90.5...
 */
export const spacingRoot2 = geometricProgression(4, ROOT2, 10);

/**
 * Harmonic spacing based on musical intervals (root-2 subdivision)
 * Useful for rhythm in UI: 4, 6, 8, 12, 16, 24, 32, 48...
 */
export const spacingHarmonic = [
    4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128
];

// ============================================================================
// TYPE SCALES
// ============================================================================

/**
 * Base-10 Golden Section type scale
 * 10, 16, 26, 42, 68, 110... (body → display)
 */
export const typeScaleGolden = geometricProgression(10, PHI, 6);

/**
 * Base-10 Root-2 type scale (DIN-like, web-safe)
 * 10, 14, 20, 28, 40, 56, 80...
 */
export const typeScaleRoot2 = geometricProgression(10, ROOT2, 7);

/**
 * Fibonacci type scale (natural growth)
 * 10, 13, 23, 36, 59, 95...
 */
export const typeScaleFibonacci = fibonacciLike(10, 13, 6);

/**
 * Major Third type scale (1.25 ratio — common in typography)
 * 14, 17.5, 21.9, 27.4, 34.2, 42.7, 53.4...
 */
export const typeScaleMajorThird = geometricProgression(14, 1.25, 7);

/**
 * Minor Third type scale (1.2 ratio — more conservative)
 * 14, 16.8, 20.2, 24.2, 29, 34.8, 41.8...
 */
export const typeScaleMinorThird = geometricProgression(14, 1.2, 7);

// ============================================================================
// GRID PROPORTIONS
// ============================================================================

/**
 * Golden section column ratios for responsive grids
 * Use as: grid-template-columns: repeat(goldenColumns.main, 1fr) repeat(goldenColumns.sidebar, 1fr)
 */
export const goldenColumns = {
    main: 13,    // 13 parts for main content
    sidebar: 8,  // 8 parts for sidebar (13:8 ≈ 1.618:1)
    // Alternative finer divisions:
    mainLarge: 21,
    sidebarLarge: 13,
    mainSmall: 8,
    sidebarSmall: 5
};

/**
 * Root-2 column ratios (DIN paper proportions)
 * Creates grids that scale cleanly across breakpoints
 */
export const root2Columns = {
    // 1:√2 ratio ≈ 1:1.414
    wide: 10,    // 10 parts
    narrow: 7    // 7 parts (10:7 ≈ 1.43:1, close to √2)
};

/**
 * Fibonacci column system
 * Each breakpoint uses adjacent Fibonacci numbers
 */
export const fibonacciColumns = {
    mobile: 5,      // 5 columns
    tablet: 8,      // 8 columns  
    desktop: 13,    // 13 columns
    wide: 21        // 21 columns
};

// ============================================================================
// LAYOUT MATHEMATICS
// ============================================================================

/**
 * Calculate golden section point within a dimension
 * @param {number} total - Total dimension (width or height)
 * @returns {{major: number, minor: number}} Major and minor segments
 */
export function goldenSection(total) {
    const major = Math.round(total / PHI * 100) / 100;
    const minor = Math.round((total - major) * 100) / 100;
    return { major, minor, ratio: PHI };
}

/**
 * Calculate root-2 subdivision
 * @param {number} total - Total dimension
 * @returns {{half: number, root2Segment: number}} Halves and √2-based segment
 */
export function root2Subdivide(total) {
    const half = total / 2;
    const root2Segment = Math.round((total / ROOT2) * 100) / 100;
    return { half, root2Segment, ratio: ROOT2 };
}

/**
 * Generate a golden rectangle from a square
 * @param {number} squareSize - Size of the initial square
 * @returns {{square: number, extension: number, total: number}}
 */
export function goldenRectangleFromSquare(squareSize) {
    const extension = Math.round((squareSize / PHI) * 100) / 100;
    return {
        square: squareSize,
        extension,
        total: squareSize + extension,
        ratio: PHI
    };
}

/**
 * Calculate the optimal "focal point" using golden section
 * For placing key UI elements (CTA, hero image center, etc.)
 * @param {number} width - Container width
 * @param {number} height - Container height
 * @returns {{x: number, y: number}} Coordinates of golden focal point
 */
export function goldenFocalPoint(width, height) {
    const { minor: minorW } = goldenSection(width);
    const { minor: minorH } = goldenSection(height);
    return {
        x: Math.round(minorW * 100) / 100,
        y: Math.round(minorH * 100) / 100
    };
}

/**
 * Generate a 3×3 grid with golden section divisions
 * Classic design grid (used in Rossi's Il Conico kettle, etc.)
 * @param {number} width - Total width
 * @param {number} height - Total height
 * @returns {{columns: number[], rows: number[]}} Grid line positions
 */
export function threeByThreeGrid(width, height) {
    const thirdW = width / 3;
    const thirdH = height / 3;
    return {
        columns: [0, thirdW, thirdW * 2, width],
        rows: [0, thirdH, thirdH * 2, height]
    };
}

/**
 * Generate a 6×8 Cassandre-style grid
 * 48 square visual fields (used in L'Intransigéant poster)
 * @param {number} width - Total width
 * @param {number} height - Total height
 * @returns {{columns: number[], rows: number[]}} Grid line positions
 */
export function cassandreGrid(width, height) {
    const colW = width / 8;
    const rowH = height / 6;
    return {
        columns: Array.from({ length: 9 }, (_, i) => Math.round(i * colW * 100) / 100),
        rows: Array.from({ length: 7 }, (_, i) => Math.round(i * rowH * 100) / 100)
    };
}

/**
 * Generate a 5×5 Bauhaus-style grid
 * Used by Schleifer, Mies van der Rohe
 * @param {number} width - Total width
 * @param {number} height - Total height
 * @returns {{columns: number[], rows: number[]}} Grid line positions
 */
export function bauhausGrid(width, height) {
    const unit = Math.min(width, height) / 5;
    return {
        columns: Array.from({ length: 6 }, (_, i) => Math.round(i * unit * 100) / 100),
        rows: Array.from({ length: 6 }, (_, i) => Math.round(i * unit * 100) / 100)
    };
}

// ============================================================================
// CORNER RADIUS SYSTEM
// ============================================================================

/**
 * Corner radii in golden proportion to element size
 * Based on Eames' proportional radii method
 */
export const cornerRadii = {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6.5,      // 4 × PHI ≈ 6.5
    lg: 10.5,     // 6.5 × PHI ≈ 10.5
    xl: 17,       // 10.5 × PHI ≈ 17
    xxl: 27.5,    // 17 × PHI ≈ 27.5
    full: 9999
};

/**
 * Crouwel method: radius = 1/5 of grid unit
 * @param {number} gridUnit - Base grid unit
 * @returns {number} Corner radius
 */
export function crouwelRadius(gridUnit) {
    return Math.round((gridUnit / 5) * 100) / 100;
}

// ============================================================================
// CSS CUSTOM PROPERTIES EXPORT
// ============================================================================

/**
 * Generate CSS custom properties string for use in :root
 * @param {string} scaleType - 'golden' | 'root2' | 'fibonacci'
 * @returns {string} CSS variable declarations
 */
export function generateCSSVariables(scaleType = 'golden') {
    const spacing = scaleType === 'golden' ? spacingGolden
        : scaleType === 'root2' ? spacingRoot2
            : spacingFibonacci;

    const typeScale = scaleType === 'golden' ? typeScaleGolden
        : scaleType === 'root2' ? typeScaleRoot2
            : typeScaleFibonacci;

    let css = `/* Geometry of Design — ${scaleType.toUpperCase()} Scale */\n\n`;

    // Spacing variables
    css += `/* Spacing */\n`;
    spacing.forEach((value, i) => {
        css += `--space-${i}: ${value}px;\n`;
    });

    // Named spacing shortcuts
    css += `\n--space-xs: ${spacing[1]}px;\n`;
    css += `--space-sm: ${spacing[2]}px;\n`;
    css += `--space-md: ${spacing[3]}px;\n`;
    css += `--space-lg: ${spacing[4]}px;\n`;
    css += `--space-xl: ${spacing[5]}px;\n`;
    css += `--space-2xl: ${spacing[6]}px;\n`;

    // Type scale variables
    css += `\n/* Type Scale */\n`;
    typeScale.forEach((value, i) => {
        css += `--text-${i}: ${value}px/${Math.round(value * 1.5)}px;\n`;
    });

    // Named type shortcuts
    css += `\n--text-xs: ${typeScale[0]}px;\n`;
    css += `--text-sm: ${typeScale[1]}px;\n`;
    css += `--text-base: ${typeScale[2]}px;\n`;
    css += `--text-lg: ${typeScale[3]}px;\n`;
    css += `--text-xl: ${typeScale[4]}px;\n`;
    css += `--text-2xl: ${typeScale[5]}px;\n`;
    if (typeScale[6]) css += `--text-3xl: ${typeScale[6]}px;\n`;

    return css;
}

/**
 * Full CSS export with all three scales available as classes
 */
export function generateFullCSS() {
    return `/* ==========================================================================
   GEOMETRY OF DESIGN — Token System
   Based on Kimberly Elam's principles
   ========================================================================== */

:root {
  /* Golden Section Scale (φ = 1.618) — Maximum aesthetic harmony */
  --golden-space-0: 4px;
  --golden-space-1: 6.5px;
  --golden-space-2: 10.5px;
  --golden-space-3: 17px;
  --golden-space-4: 27.5px;
  --golden-space-5: 44.5px;
  --golden-space-6: 72px;
  
  --golden-text-xs: 10px;
  --golden-text-sm: 16px;
  --golden-text-base: 26px;
  --golden-text-lg: 42px;
  --golden-text-xl: 68px;
  --golden-text-2xl: 110px;
  
  /* Root-2 Scale (√2 = 1.414) — Practical, DIN-compatible */
  --root2-space-0: 4px;
  --root2-space-1: 5.7px;
  --root2-space-2: 8px;
  --root2-space-3: 11.3px;
  --root2-space-4: 16px;
  --root2-space-5: 22.6px;
  --root2-space-6: 32px;
  --root2-space-7: 45.3px;
  --root2-space-8: 64px;
  
  --root2-text-xs: 10px;
  --root2-text-sm: 14px;
  --root2-text-base: 20px;
  --root2-text-lg: 28px;
  --root2-text-xl: 40px;
  --root2-text-2xl: 56px;
  --root2-text-3xl: 80px;
  
  /* Fibonacci Scale — Organic growth */
  --fib-space-0: 4px;
  --fib-space-1: 8px;
  --fib-space-2: 12px;
  --fib-space-3: 20px;
  --fib-space-4: 32px;
  --fib-space-5: 52px;
  --fib-space-6: 84px;
  --fib-space-7: 136px;
  
  --fib-text-xs: 10px;
  --fib-text-sm: 13px;
  --fib-text-base: 23px;
  --fib-text-lg: 36px;
  --fib-text-xl: 59px;
  --fib-text-2xl: 95px;
  
  /* Corner Radii (Golden progression) */
  --radius-none: 0;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6.5px;
  --radius-lg: 10.5px;
  --radius-xl: 17px;
  --radius-xxl: 27.5px;
  --radius-full: 9999px;
}

/* Scale classes for dynamic switching */
.scale-golden {
  --space-xs: var(--golden-space-1);
  --space-sm: var(--golden-space-2);
  --space-md: var(--golden-space-3);
  --space-lg: var(--golden-space-4);
  --space-xl: var(--golden-space-5);
  --space-2xl: var(--golden-space-6);
  
  --text-xs: var(--golden-text-xs);
  --text-sm: var(--golden-text-sm);
  --text-base: var(--golden-text-base);
  --text-lg: var(--golden-text-lg);
  --text-xl: var(--golden-text-xl);
  --text-2xl: var(--golden-text-2xl);
}

.scale-root2 {
  --space-xs: var(--root2-space-1);
  --space-sm: var(--root2-space-2);
  --space-md: var(--root2-space-3);
  --space-lg: var(--root2-space-4);
  --space-xl: var(--root2-space-5);
  --space-2xl: var(--root2-space-6);
  
  --text-xs: var(--root2-text-xs);
  --text-sm: var(--root2-text-sm);
  --text-base: var(--root2-text-base);
  --text-lg: var(--root2-text-lg);
  --text-xl: var(--root2-text-xl);
  --text-2xl: var(--root2-text-2xl);
  --text-3xl: var(--root2-text-3xl);
}

.scale-fibonacci {
  --space-xs: var(--fib-space-1);
  --space-sm: var(--fib-space-2);
  --space-md: var(--fib-space-3);
  --space-lg: var(--fib-space-4);
  --space-xl: var(--fib-space-5);
  --space-2xl: var(--fib-space-6);
  
  --text-xs: var(--fib-text-xs);
  --text-sm: var(--fib-text-sm);
  --text-base: var(--fib-text-base);
  --text-lg: var(--fib-text-lg);
  --text-xl: var(--fib-text-xl);
  --text-2xl: var(--fib-text-2xl);
}
`;
}

// ============================================================================
// DEFAULT EXPORTS
// ============================================================================

export default {
    constants: { PHI, ROOT2, ROOT3, ROOT4, ROOT5 },
    spacing: {
        fibonacci: spacingFibonacci,
        golden: spacingGolden,
        root2: spacingRoot2,
        harmonic: spacingHarmonic
    },
    type: {
        golden: typeScaleGolden,
        root2: typeScaleRoot2,
        fibonacci: typeScaleFibonacci,
        majorThird: typeScaleMajorThird,
        minorThird: typeScaleMinorThird
    },
    grid: {
        goldenColumns,
        root2Columns,
        fibonacciColumns
    },
    utilities: {
        geometricProgression,
        fibonacciLike,
        subdivideGolden,
        goldenSection,
        root2Subdivide,
        goldenRectangleFromSquare,
        goldenFocalPoint,
        threeByThreeGrid,
        cassandreGrid,
        bauhausGrid,
        crouwelRadius
    },
    cornerRadii,
    generateCSSVariables,
    generateFullCSS
};