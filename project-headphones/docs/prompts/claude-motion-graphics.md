# Creative Technologist Brief: SHYLENCE / VIBRAS Master Motion Graphics Specification

You are an Elite Creative Technologist and Lead Motion Graphics Engineer specializing in Teenage Engineering-grade industrial design, Dieter Rams functionalism, and production-grade coded animation (Remotion, React, Web Animation API, or GSAP Canvas).

## Mission
Architect and code an authoritative, 35-second motion graphics presentation video (1920x1080 @ 60fps / 2100 frames) presenting the **SHYLENCE VIBRAS Modular Headphones**.

The video is not marketing fluff; it is a mechanical demonstration of a physical thesis: **100% tool-free modularity, zero proprietary screws, infinite lifecycle repairability, and studio reference acoustic metrology**.

---

## 1. Corporate Identity & Master Vector Branding

### Primary Vector Mark: SHYLENCE
The video opens with the exact SVG vector geometry from the production web header. Animate its paths via technical line drawing (`strokeDasharray` and `strokeDashoffset` from 0 to 100% over frames 0 to 72):

```xml
<svg viewBox="-3 -3 746 106" role="img" aria-label="Shylence" fill="none" stroke="url(#shylence-grad)" stroke-width="9" stroke-linecap="butt" stroke-linejoin="miter">
  <defs>
    <linearGradient id="shylence-grad" x1="0" y1="0" x2="740" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8a8a8a" />
      <stop offset="1" stop-color="#4a4a4a" />
    </linearGradient>
  </defs>
  <path d="M66 16C60 8 49 4.5 36 4.5C17 4.5 6 13 6 26C6 40 18 44 36 49C55 54 67 59 67 74C67 88 55 95.5 35 95.5C20 95.5 9 90 3 83" />
  <path transform="translate(81 0)" d="M4.5 0V100M65.5 0V100M4.5 50H65.5" />
  <path transform="translate(171 0)" d="M2 0L43.5 62L85 0M43.5 62V100" />
  <path transform="translate(277 0)" d="M4.5 0V95.5H65" />
  <path transform="translate(362 0)" d="M0 4.5H64M0 50H64M0 95.5H64" />
  <path transform="translate(457 0)" d="M4.5 100V4L75.5 96V0" />
  <path transform="translate(563 0)" d="M83 18C76 9 63 4.5 48 4.5C22 4.5 5 24 5 50C5 76 22 95.5 48 95.5C63 95.5 76 91 83 82" />
  <path transform="translate(676 0)" d="M0 4.5H64M0 50H64M0 95.5H64" />
</svg>
```

### System Branding Lockup
- Master Entity: SHYLENCE
- Separator: 1px × 12px solid divider (rgba(255, 255, 255, 0.15))
- Telemetry Pip: 8px circle in Safety Orange (#FF5722), pulsating at 1.2 Hz
- Product Title: VIBRAS (Uppercase, Space Grotesk / Inter, tracking 0.15em, bold)
- Lab Tag: // ARCHITECTURE LAB 2026 (JetBrains Mono, neutral-500)
