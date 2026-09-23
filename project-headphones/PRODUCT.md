# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite dev server with hot reload + vanilla JS (no UI framework). Motion stack from npm, not CDN: GSAP + ScrollTrigger, Lenis smooth scroll, synced via `lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t * 1000))`, `gsap.ticker.lagSmoothing(0)`. Scroll-scrubbed hero renders a WebP image sequence on `<canvas>` (desktop + lighter mobile set), never a scrubbed MP4. User asked for current, leading-edge tooling within that stack.

## Users

Recruiters, hiring managers and design directors reviewing the author's portfolio. They arrive from a portfolio case-study link, skim fast, and judge craft within seconds. Success: they leave convinced the author masters product storytelling, scroll-driven motion and production-grade front-end craft.

## Product Purpose

Concept landing page for **Vibras**, a fictional premium over-ear headphone. Its job is to demonstrate motion and product-page craft through a believable product launch. The purchase flow is not real.

## Positioning

Vibras headphones are **repairable and modular**: every part (shells, drivers, PCB, battery, cushions, cables) separates and can be replaced. The scroll-driven exploded view is the proof of this claim, not decoration. Apple, Sony and Bose cannot claim this.

## Capabilities and Constraints

- Pinned hero: scroll down opens the headphones into an exploded view, scroll up closes them. Overlays name each component as it appears.
- Sections: hero sequence, key specs (3–4 large figures), materials/design, colours/versions (selector changes something real), purchase CTA + footer.
- Anchor navigation through `lenis.scrollTo`. The CTA has hover, focus and active states.
- Product hardware (user-confirmed, fictional): aluminium ear cups with bayonet lock (twist and click), removable battery cartridge, magnetic ear cushions, utility-orange toggle switch, knurled control wheel, laser-etched module labels MOD-01 to MOD-04. Tool-free, 100% repairable. Exact MOD-01–04 mapping: open decision.
- All visible copy in English.
- Undecided: spec figures, price and colourways. They are fiction, defined in the direction phase and never presented as real-world measurements.

## Brand Commitments

- Name: **Vibras** (chosen by the user).
- Honest concept framing: everything looks real, but the footer credits it as "Concept project — design & motion by [author]". The purchase CTA opens a concept notice, not a checkout. Author credit text: open decision.
- Anti-references (binding): Apple clone (giant white type, gradients, "Pro" naming); generic tech template (neon glow, glassmorphism, card grids). Apple-grade *discipline* (air, product as protagonist, precise motion) is welcome. Apple's *look* is not.
- Pinned direction (user, 2026-09-23): "VELUM ONE" style web — pure black cinematic stage (#000000), pinned hero where scroll drives a millimetric exploded view with live telemetry readout, contextual callouts per phase, full-bleed lifestyle video section — fused with Teenage Engineering hardware DNA (utilitarian industrial design, technical micro-labelling, rigorous type, functional colour accents, utility orange).

## Evidence on Hand

None yet. All imagery is generated through Higgsfield: Frame A (closed), Frame B (exploded, same camera/light/background), 2–3 section images, and a Seedance 2.5 video between A and B. No testimonials, press, reviews or retailer logos may be fabricated.

## Product Principles

1. The exploded view is the argument: repairability must read from the motion itself, before any copy.
2. Product first, effect second. Motion serves the product story, never the other way round.
3. A believable fiction, honestly framed.
4. Mechanical precision: every movement feels engineered, never floaty or abrupt.

## Accessibility & Inclusion

WCAG AA contrast for all text over video/canvas. `prefers-reduced-motion`: no scrub, static images instead. Responsive at 375, 768 and 1440 px with no horizontal scroll. LCP < 2.5 s, no jank during scrub.
