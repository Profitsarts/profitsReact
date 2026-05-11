# FMS: Battery Monitoring (SoC)
**Context & Scale**

> Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS — eliminating data-interpretation ambiguity across 3 critical scenarios and shipping an interactive brush-zoom tool for ~12 enterprise clients including DHL, Amazon, and LIDL.

## Product
**Fleet Management System (FMS)** — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).

## Company
**Jungheinrich Digital Solutions** — global leader in Material Handling Equipment.

## My Role
**Senior Digital Product Designer & Design System Owner.** Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.

## Team
Core squad of 4 (UX Researcher, PO, Head of Design, myself). ~5 engineers per module, 2 dedicated frontend component developers.

## Customers
~12 enterprise clients (DHL, Amazon, LIDL) + hundreds of SMEs. Thousands of vehicles across multi-warehouse environments.

## Tech Stack
React.js · Storybook · Jira-driven DesignOps · Figma (led full migration from Sketch).

## Timeline
2023–2024

---

## The Challenge
The SoC (State of Charge) chart — the core visualization of the Battery Monitoring module — consistently generated confusion and support tickets. Fleet managers needed real-time battery visibility to prevent downtime, but the chart was failing them in three distinct ways.

### Scenario 1: Empty Layout — "Is it broken or just silent?"
> "I can't tell if the truck is broken or just not sending data"
When trucks hadn't transmitted data for 24+ hours, charts rendered completely blank. Users had no way to distinguish a malfunctioning vehicle from a routine weekend shutdown.

**Business cost:** Unnecessary maintenance dispatches, delayed responses to actual failures, and eroded trust in the monitoring tool.

### Scenario 2: Short Intervals — "I can't see the forest for the trees"
> "These tiny spikes make it hard to see the real usage patterns"
Micro-operations lasting seconds or minutes created dense clusters of data points. In the 24-hour view, these were manageable. In the 7-day and 30-day views, they became impenetrable noise.

**Business cost:** Fleet managers couldn't identify battery degradation trends — the primary reason they used the chart.

### Scenario 3: Long Intervals — "I need to go back in time"
> "I want to see the SoC changes on previous days easily"
Extended idle periods (Pin Mode) and the need for historical investigation had no intuitive navigation mechanism. Users were locked into preset time ranges with no way to compare patterns across days.

**Business cost:** Shift-level incident investigations took ~15 minutes of manual toggling between views.

> **Common root cause:** The chart had no mechanism to communicate *why* data looked the way it did, nor to let users navigate it at the right level of granularity. It was a static readout — not an investigative tool.

---

## Discovery & Research
I collaborated closely with the UX Researcher to bridge the gap created by company policy restricting direct user access. My approach maximized impact through **proxy research and joint interpretation**.

- **Usability testing:** Co-authored test scripts with UX Researcher; analyzed raw results in 1:1 joint sessions.
- **Support ticket analysis:** PO and Researcher consulted me because ticket patterns directly informed design decisions.
- **Analytics audit:** UX Researcher shared usage data — fundamental input for identifying which views and time ranges failed.
- **Industrial ethnography:** Visited Jungheinrich manufacturing sites to observe back-office usage in high-pressure environments.
- **Discovery workshops:** Card sorting + surveys across all 8 modules to isolate technical vs. usability friction.
- **Competitive analysis:** Studied the forklift's built-in display interfaces to understand how operators read battery variables on-machine.

> **The Unifying Insight:** The three scenarios appeared independent, but the research revealed they shared a single architectural gap — the chart lacked an interaction layer between overview and detail. Users weren't asking for three separate fixes; they needed one investigative paradigm flexible enough to handle absence, noise, and depth.

---

## Design Process

### Problem 1: Empty Layout → Contextual In-Chart Messaging
> "I can't tell if the truck is broken or just not sending data"
**This revealed:** The system offered zero context during data gaps — silence was indistinguishable from failure.
**I architected:** In-chart contextual messaging with time-range-aware copy.
- Designed specific messaging placed directly within the chart area — not as a toast or banner.
- Standardized chart styling across all three time views (24h, 7 days, 30 days) to eliminate visual inconsistency.
- Chart frame, axes, and legends remain visible during data gaps to preserve spatial orientation.

### Problem 2: Short Intervals → The "Waveform" Brush-Zoom Tool
> "These tiny spikes make it hard to see the real usage patterns"
**This revealed:** The chart needed to support two opposing needs simultaneously — macro-trend visibility and micro-event investigation.
**I architected:** An interactive brush-zoom tool inspired by **audio waveform navigation in Ableton Live**. The music-production paradigm mapped directly: waveform scrubbing = timeline scrubbing.

### Problem 3: Long Intervals → Unified Zoom Navigation
> "I can't easily move between different days to compare patterns"
**This revealed:** The preset time ranges (24h/7d/30d) were starting points, not investigation tools.
**I architected:** Extended the brush-zoom to support historical navigation — the same interaction solving both problems.
- Horizontal timeline dragging to move through historical periods.
- Dynamic range expansion via left handle drag.
- Intelligent time scale switching based on selected range.

---

## Component Architecture
- **Design system classification:** Molecule (Atomic Design Level 02)
- **Figma path:** `02 Molecules / 22 Brush Zoom Tool`
- **Scope:** Built for SoC, designed as **polyvalent** — reusable for any X/Y axis chart across all 8 FMS modules.

---

## Impact & Results

### Empty Layout
> **Before:** "I can't tell if the truck is broken or just not sending data"
> **After:** "I finally know if the truck is broken or if they just didn't use it over the weekend."
Fleet managers could immediately distinguish data transmission gaps from equipment failure — eliminating unnecessary maintenance dispatches.

### Short Intervals
> **Before:** "The weekly view is just noise"
> **After:** "The zoom lets me see the big picture for my monthly reports, but I can dive into the minutes when something goes wrong."
Pattern recognition in 7-day and 30-day views became viable without manual micro-investigation.

### Overall
- Historical navigation workflows reduced from **~15 minutes** to **under 3 minutes**.
- Post-launch testing confirmed **100% resolution** of the original pain points.
- The Brush Zoom Tool added as a reusable **Molecule** to the design system.

---

## Reflection
Designing for the industrial back-office reinforced that **the most powerful design systems borrow interaction paradigms from unexpected domains**. The Ableton Live waveform metaphor wasn't technical cleverness — it was the most intuitive pattern for users who think in timelines and shifts.
