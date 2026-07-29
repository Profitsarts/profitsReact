import React from 'react';
import * as geometry from '../geometry-tokens';

/**
 * Geometry of Design — React Layout Components
 * Based on Kimberly Elam's principles
 */

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate golden section split for a container
 * @param {number} total - Total pixels
 * @returns {{major: number, minor: number}}
 */
function getGoldenSplit(total) {
    const major = Math.round((total / geometry.PHI) * 100) / 100;
    const minor = Math.round((total - major) * 100) / 100;
    return { major, minor };
}

/**
 * Get CSS grid template from column config
 * @param {object} columns - Column configuration
 * @returns {string} CSS grid-template-columns value
 */
function getGridTemplate(columns) {
    const total = columns.main + columns.sidebar;
    return `repeat(${total}, 1fr)`;
}

// ============================================================================
// GRID CONTAINERS
// ============================================================================

/**
 * Golden Section Grid Container
 * Main content + sidebar in golden ratio (13:8 or 21:13)
 */
export function GoldenGrid({
    children,
    variant = 'default', // 'default' | 'large' | 'two-thirds'
    gap = 'md',
    className = ''
}) {
    const gridClass = {
        default: 'grid-golden-main-sidebar',
        large: 'grid-golden-large',
        'two-thirds': 'grid-golden-two-thirds'
    }[variant];

    return (
        <div className={`${gridClass} ${className}`} data-geometry="golden">
            {children}
        </div>
    );
}

/**
 * Root-2 Grid Container
 * Wide + narrow columns in √2 ratio
 */
export function Root2Grid({
    children,
    gap = 'md',
    className = ''
}) {
    return (
        <div className={`grid-root2-wide-narrow ${className}`} data-geometry="root2">
            {children}
        </div>
    );
}

/**
 * Fibonacci Responsive Grid
 * Automatically adapts columns based on container width
 */
export function FibonacciGrid({
    children,
    className = ''
}) {
    return (
        <div className={`grid-fib-desktop ${className}`} data-geometry="fibonacci">
            {children}
        </div>
    );
}

/**
 * Classic 3×3 Grid (Rossi)
 */
export function ThreeByThreeGrid({
    children,
    className = ''
}) {
    return (
        <div className={`grid-three-by-three ${className}`} data-geometry="ternary">
            {children}
        </div>
    );
}

/**
 * Classic 6×8 Grid (Cassandre)
 */
export function CassandreGrid({
    children,
    className = ''
}) {
    return (
        <div className={`grid-cassandre ${className}`} data-geometry="cassandre">
            {children}
        </div>
    );
}

/**
 * Classic 5×5 Grid (Bauhaus)
 */
export function BauhausGrid({
    children,
    className = ''
}) {
    return (
        <div className={`grid-bauhaus ${className}`} data-geometry="bauhaus">
            {children}
        </div>
    );
}

// ============================================================================
// GRID CELLS
// ============================================================================

/**
 * Main content cell for golden grid
 */
export function GoldenMain({ children, className = '' }) {
    return (
        <div className={`col-main ${className}`} data-geometry-cell="golden-main">
            {children}
        </div>
    );
}

/**
 * Sidebar cell for golden grid
 */
export function GoldenSidebar({ children, className = '' }) {
    return (
        <div className={`col-sidebar ${className}`} data-geometry-cell="golden-sidebar">
            {children}
        </div>
    );
}

/**
 * Full-width cell
 */
export function GridFull({ children, className = '' }) {
    return (
        <div className={`col-full ${className}`} data-geometry-cell="full">
            {children}
        </div>
    );
}

/**
 * Half-width cell
 */
export function GridHalf({ children, className = '' }) {
    return (
        <div className={`col-half ${className}`} data-geometry-cell="half">
            {children}
        </div>
    );
}

/**
 * Two-thirds cell
 */
export function GridTwoThirds({ children, className = '' }) {
    return (
        <div className={`col-two-thirds ${className}`} data-geometry-cell="two-thirds">
            {children}
        </div>
    );
}

/**
 * One-third cell
 */
export function GridOneThird({ children, className = '' }) {
    return (
        <div className={`col-third ${className}`} data-geometry-cell="third">
            {children}
        </div>
    );
}

// ============================================================================
// FOCAL POINT COMPONENTS
// ============================================================================

/**
 * Container for golden focal point positioning
 */
export function GoldenFocalContainer({
    children,
    className = ''
}) {
    return (
        <div className={`golden-focal-container ${className}`}>
            {children}
        </div>
    );
}

/**
 * Element positioned at golden focal point
 */
export function GoldenFocalPoint({
    children,
    position = 'tl', // 'tl' | 'tr' | 'bl' | 'br'
    className = ''
}) {
    const positionClass = {
        tl: 'golden-focal-point',
        tr: 'golden-focal-point-tr',
        bl: 'golden-focal-point-bl',
        br: 'golden-focal-point-br'
    }[position];

    return (
        <div className={`${positionClass} ${className}`} data-geometry-focal={position}>
            {children}
        </div>
    );
}

// ============================================================================
// SCALE WRAPPER COMPONENTS
// ============================================================================

/**
 * Wrapper that applies a geometric scale to its children
 */
export function GeometryScale({
    children,
    scale = 'golden', // 'golden' | 'root2' | 'fibonacci'
    className = ''
}) {
    const scaleClass = `scale-${scale}`;

    return (
        <div className={`${scaleClass} ${className}`} data-geometry-scale={scale}>
            {children}
        </div>
    );
}

/**
 * Container with geometric max-width
 */
export function GeometryContainer({
    children,
    type = 'golden', // 'golden' | 'root2' | 'fibonacci'
    className = ''
}) {
    const containerClass = `container-${type}`;

    return (
        <div className={`${containerClass} ${className}`} data-geometry-container={type}>
            {children}
        </div>
    );
}

// ============================================================================
// TYPOGRAPHY COMPONENTS
// ============================================================================

/**
 * Typography with golden rhythm
 */
export function GoldenType({ children, className = '' }) {
    return (
        <div className={`type-golden ${className}`} data-geometry-type="golden">
            {children}
        </div>
    );
}

/**
 * Typography with root-2 rhythm
 */
export function Root2Type({ children, className = '' }) {
    return (
        <div className={`type-root2 ${className}`} data-geometry-type="root2">
            {children}
        </div>
    );
}

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

/**
 * Regulating lines overlay (debug/alignment guide)
 */
export function RegulatingLines({ className = '' }) {
    return (
        <div className={`regulating-lines ${className}`} aria-hidden="true" />
    );
}

/**
 * Golden subdivision pattern
 */
export function GoldenSubdivision({
    children,
    className = ''
}) {
    return (
        <div className={`golden-subdivision ${className}`}>
            {children}
        </div>
    );
}

/**
 * Golden square cell
 */
export function GoldenSquare({ children, className = '' }) {
    return (
        <div className={`golden-square ${className}`}>
            {children}
        </div>
    );
}

/**
 * Golden horizontal rectangle (1.618:1)
 */
export function GoldenRectangleH({ children, className = '' }) {
    return (
        <div className={`golden-rectangle-h ${className}`}>
            {children}
        </div>
    );
}

/**
 * Golden vertical rectangle (1:1.618)
 */
export function GoldenRectangleV({ children, className = '' }) {
    return (
        <div className={`golden-rectangle-v ${className}`}>
            {children}
        </div>
    );
}

// ============================================================================
// HOOKS
// ============================================================================

/**
 * Hook to calculate golden section for a given dimension
 * @param {number} total - Total dimension
 * @returns {{major: number, minor: number, ratio: number}}
 */
export function useGoldenSection(total) {
    return geometry.goldenSection(total);
}

/**
 * Hook to generate a type scale
 * @param {string} type - 'golden' | 'root2' | 'fibonacci' | 'majorThird' | 'minorThird'
 * @param {number} base - Base font size
 * @returns {number[]} Type scale array
 */
export function useTypeScale(type = 'golden', base = 10) {
    const scales = {
        golden: geometry.typeScaleGolden,
        root2: geometry.typeScaleRoot2,
        fibonacci: geometry.typeScaleFibonacci,
        majorThird: geometry.typeScaleMajorThird,
        minorThird: geometry.typeScaleMinorThird
    };
    return scales[type] || scales.golden;
}

/**
 * Hook to get spacing scale
 * @param {string} type - 'golden' | 'root2' | 'fibonacci' | 'harmonic'
 * @param {number} base - Base spacing
 * @returns {number[]} Spacing scale array
 */
export function useSpacingScale(type = 'golden', base = 4) {
    const scales = {
        golden: geometry.spacingGolden,
        root2: geometry.spacingRoot2,
        fibonacci: geometry.spacingFibonacci,
        harmonic: geometry.spacingHarmonic
    };
    return scales[type] || scales.golden;
}

// ============================================================================
// PAGE LAYOUT TEMPLATES
// ============================================================================

/**
 * Classic hero + content layout with golden proportions
 */
export function HeroLayout({
    hero,
    children,
    sidebar = null,
    className = ''
}) {
    return (
        <div className={`scale-golden ${className}`}>
            {/* Hero section at golden height */}
            {hero && (
                <section
                    className="golden-subdivision"
                    style={{ minHeight: '61.8vh' }}
                >
                    <div className="golden-square">{hero}</div>
                </section>
            )}

            {/* Main content area */}
            <GoldenGrid>
                <GoldenMain>{children}</GoldenMain>
                {sidebar && <GoldenSidebar>{sidebar}</GoldenSidebar>}
            </GoldenGrid>
        </div>
    );
}

/**
 * Cassandre-style poster layout
 */
export function PosterLayout({
    topLeft,
    topRight,
    center,
    bottomLeft,
    bottomRight,
    className = ''
}) {
    return (
        <div className={`grid-cassandre ${className}`}>
            {topLeft && <div className="pos-top-left">{topLeft}</div>}
            {topRight && <div className="pos-top-right">{topRight}</div>}
            {center && <div className="pos-center">{center}</div>}
            {bottomLeft && <div className="pos-bottom-left">{bottomLeft}</div>}
            {bottomRight && <div className="pos-bottom-right">{bottomRight}</div>}
        </div>
    );
}

/**
 * Bauhaus-style modular layout
 */
export function BauhausLayout({
    topLeft,
    topRight,
    center,
    bottomLeft,
    bottomRight,
    className = ''
}) {
    return (
        <div className={`grid-bauhaus ${className}`}>
            {topLeft && <div className="quadrant-tl">{topLeft}</div>}
            {topRight && <div className="quadrant-tr">{topRight}</div>}
            {center && <div className="cell-center">{center}</div>}
            {bottomLeft && <div className="quadrant-bl">{bottomLeft}</div>}
            {bottomRight && <div className="quadrant-br">{bottomRight}</div>}
        </div>
    );
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default {
    // Grids
    GoldenGrid,
    Root2Grid,
    FibonacciGrid,
    ThreeByThreeGrid,
    CassandreGrid,
    BauhausGrid,
    // Cells
    GoldenMain,
    GoldenSidebar,
    GridFull,
    GridHalf,
    GridTwoThirds,
    GridOneThird,
    // Focal points
    GoldenFocalContainer,
    GoldenFocalPoint,
    // Scales
    GeometryScale,
    GeometryContainer,
    // Typography
    GoldenType,
    Root2Type,
    // Utilities
    RegulatingLines,
    GoldenSubdivision,
    GoldenSquare,
    GoldenRectangleH,
    GoldenRectangleV,
    // Hooks
    useGoldenSection,
    useTypeScale,
    useSpacingScale,
    // Layouts
    HeroLayout,
    PosterLayout,
    BauhausLayout
};