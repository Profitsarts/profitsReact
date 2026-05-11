# FMS: Battery Monitoring (SoC)
**Jungheinrich Fleet Management System — Case Study**
*Luis Sierra — Senior Digital Product Designer & Design System Owner*

---

## 1. Hero Statement

> **Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS — eliminating data-interpretation ambiguity across 3 critical scenarios and shipping an interactive brush-zoom tool for ~12 enterprise clients including DHL, Amazon, and LIDL.**

---

## 2. Context & Scale

| Attribute | Detail |
|-----------|--------|
| **Product** | **Fleet Management System (FMS)** — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics). |
| **Company** | **Jungheinrich Digital Solutions** — global leader in Material Handling Equipment. |
| **My Role** | **Senior Digital Product Designer & Design System Owner.** Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers. |
| **Team** | Core squad of 4 (UX Researcher, PO, Head of Design, myself). ~5 engineers per module, 2 dedicated frontend component developers. |
| **Customers** | ~12 enterprise clients (DHL, Amazon, LIDL) + hundreds of SMEs. Thousands of vehicles across multi-warehouse environments. |
| **Tech Stack** | React.js · Storybook · Jira-driven DesignOps · Figma (led full migration from Sketch). |
| **Timeline** | 2023–2024 |

---

## 3. The Challenge

The SoC (State of Charge) chart — the core visualization of the Battery Monitoring module — consistently generated confusion and support tickets. Fleet managers needed real-time battery visibility to prevent downtime, but the chart was failing them in three distinct ways.

### Scenario 1: Empty Layout — "Is it broken or just silent?"

> *"I can't tell if the truck is broken or just not sending data"*

When trucks hadn't transmitted data for 24+ hours, charts rendered completely blank. Users had no way to distinguish a malfunctioning vehicle from a routine weekend shutdown. Monday mornings were particularly problematic:

> *"When I check on Monday, everything looks empty, but I don't know if that's normal"*

**Business cost:** Unnecessary maintenance dispatches, delayed responses to actual failures, and eroded trust in the monitoring tool.

### Scenario 2: Short Intervals — "I can't see the forest for the trees"

> *"These tiny spikes make it hard to see the real usage patterns"*

Micro-operations lasting seconds or minutes created dense clusters of data points. In the 24-hour view, these were manageable. In the 7-day and 30-day views, they became impenetrable noise:

> *"I can see what's happening in the 24-hour view, but the weekly view is just noise"*

**Business cost:** Fleet managers couldn't identify battery degradation trends — the primary reason they used the chart.

### Scenario 3: Long Intervals — "I need to go back in time"

> *"I want to see the SoC changes on previous days easily"*
>
> *"The truck was left idling — I need to see what happened over the whole shift"*

Extended idle periods (Pin Mode) and the need for historical investigation had no intuitive navigation mechanism. Users were locked into preset time ranges with no way to compare patterns across days.

> *"I can't easily move between different days to compare patterns"*

**Business cost:** Shift-level incident investigations took ~15 minutes of manual toggling between views.

---

> **Common root cause:** The chart had no mechanism to communicate *why* data looked the way it did, nor to let users navigate it at the right level of granularity. It was a static readout — not an investigative tool.

---

## 4. Discovery & Research

I collaborated closely with the UX Researcher to bridge the gap created by company policy restricting direct user access. My approach maximized impact through **proxy research and joint interpretation**:

| Method | My Involvement |
|--------|---------------|
| **Usability testing** | Co-authored test scripts with UX Researcher; analyzed raw results in 1:1 joint sessions |
| **Support ticket analysis** | PO and Researcher consulted me because ticket patterns directly informed design decisions |
| **Analytics audit** | UX Researcher shared usage data — fundamental input for identifying which views and time ranges failed |
| **Industrial ethnography** | Visited Jungheinrich manufacturing sites to observe back-office usage in high-pressure environments |
| **Discovery workshops** | Card sorting + surveys across all 8 modules to isolate technical vs. usability friction |
| **Competitive analysis** | Studied the forklift's built-in display interfaces to understand how operators read battery variables on-machine |

### The Unifying Insight

The three scenarios appeared independent, but the research revealed they shared a single architectural gap: **the chart lacked an interaction layer between overview and detail**. Users weren't asking for three separate fixes — they needed one investigative paradigm flexible enough to handle absence, noise, and depth.

---

## 5. Design Process

### Problem 1: Empty Layout → Contextual In-Chart Messaging

**User said:** *"I can't tell if the truck is broken or just not sending data"*
**This revealed:** The system offered zero context during data gaps — silence was indistinguishable from failure.
**I architected:** In-chart contextual messaging with time-range-aware copy.

- Designed specific messaging (e.g., *"No information has been received for the past 24 hours"*) placed directly within the chart area — not as a toast or banner
- Standardized chart styling across all three time views (24h, 7 days, 30 days) to eliminate visual inconsistency
- Chart frame, axes, and legends remain visible during data gaps to preserve spatial orientation

**Why in-chart over toast/banner?** Users in industrial settings have low technical literacy and zero tolerance for interface overhead. The message needed to exist where users were already looking — inside the chart — requiring zero additional interaction.

**Engineering alignment:** Validated data transmission logic with backend teams *before* designing, ensuring messaging accurately reflected system state versus equipment state.

---

### Problem 2: Short Intervals → The "Waveform" Brush-Zoom Tool

**User said:** *"These tiny spikes make it hard to see the real usage patterns"*
**This revealed:** The chart needed to support two opposing needs simultaneously — macro-trend visibility and micro-event investigation.
**I architected:** An interactive brush-zoom tool inspired by **audio waveform navigation in Ableton Live**.

The music-production paradigm mapped directly: waveform scrubbing = timeline scrubbing. Users could "zoom into" specific time windows while maintaining the overview below.

**Alternatives evaluated and discarded:**

| Alternative | Why Discarded |
|-------------|--------------|
| **User toggle filter** ("Hide short events") | Added cognitive overhead for low-literacy users — violated zero-configuration principle |
| **Smoothed line chart** | Couldn't omit micro-changes without losing data accuracy — fleet decisions require real data |
| **Averaged/approximated data** | Unacceptable for fleet management — no approximations allowed for safety-critical decisions |

**Engineering collaboration:** I prototyped the component in Figma. Engineering sourced a matching implementation from **Airbnb's open-source repository** to build upon. The form factor was validated before a single line of production code.

---

### Problem 3: Long Intervals → Unified Zoom Navigation

**User said:** *"I need to check what happened last Tuesday, but I can only see preset ranges"*
**This revealed:** The preset time ranges (24h/7d/30d) were starting points, not investigation tools.
**I architected:** Extended the brush-zoom to support historical navigation — the same interaction solving both problems.

- Horizontal timeline dragging to move through historical periods
- Dynamic range expansion via left handle drag
- Intelligent time scale switching (24h → 7 days → 30 days) based on selected range

**Decision:** Unifying short and long interval solutions into one component was a deliberate architecture choice — not a shortcut. One interaction to learn, one mental model to retain.

---

### Component Architecture

```
Default state (Last 24h)
  └─ User drags left handle → range expands → auto-switches to Last 30 days
       └─ User drags selected area → scrubs through timeline
            └─ Fine-tune with handles → precise investigation
```

**Design system classification:** Molecule (Atomic Design Level 02)
**Figma path:** `02 Molecules / 22 Brush Zoom Tool / 22 Brush Zoom Tool`
**Scope:** Built for SoC, designed as **polyvalent** — reusable for any X/Y axis chart across all 8 FMS modules.

---

## 6. Solution & Implementation

### Delivered System

**1. Contextual Empty State Communication**
- Time-range-aware messaging adapts to 24h, 7-day, and 30-day views
- Unified coordinate system, grid, and legends persist during data gaps
- Standardized color coding: 0–39% / 40–79% / 80–100%

**2. Interactive Brush-Zoom Molecule**
- Handle controls (grip dots) and selection areas built with Figma Auto Layout
- Responsive container behavior (Hug width: 830×80, 310×80, 443×80, 536×80 px)
- Auto-scaling segmented control updates based on zoom range

**3. DesignOps & Handoff**
- I personally reviewed CSS properties of every component in Storybook, filing Jira tickets for implementation gaps
- Migrated the **entire FMS design system from Sketch to Figma** with full Auto Layout — not just this component
- Lean UX approach: I contacted both frontend and backend teams *before* designing to validate technical feasibility, eliminating design-engineering friction

---

## 7. Impact & Results

### Validated Outcomes (Post-Launch User Testing)

**Empty Layout:**

> Before: *"I can't tell if the truck is broken or just not sending data"*
> After: *"I finally know if the truck is broken or if they just didn't use it over the weekend."*

Fleet managers could immediately distinguish data transmission gaps from equipment failure — eliminating unnecessary maintenance dispatches.

**Short Intervals:**

> Before: *"The weekly view is just noise"*
> After: *"The zoom lets me see the big picture for my monthly reports, but I can dive into the minutes when something goes wrong."*

Pattern recognition in 7-day and 30-day views became viable without manual micro-investigation.

**Long Intervals:**
- Historical navigation workflows reduced from ~15 minutes of manual view-toggling to under 3 minutes with the brush-zoom
- Pin Mode investigation became a single continuous interaction instead of a multi-step process

**Overall:**
- Post-launch testing confirmed **100% resolution of the original pain points**
- The brush-zoom tested as **highly intuitive** — zero-configuration design validated
- Added the Brush Zoom Tool as a reusable Molecule to the design system

---

## 8. Reflection

Designing for the industrial back-office reinforced that **the most powerful design systems borrow interaction paradigms from unexpected domains**. The Ableton Live waveform metaphor wasn't technical cleverness — it was the most intuitive pattern for users who think in timelines and shifts.

The "no direct user access" constraint forced a discipline I carry forward: **proxy research done right is not lesser research**. Co-authoring scripts, joint interpretation sessions, and treating the UX Researcher as a true collaborator produced insights as sharp as any direct observation.

If I were to iterate, I'd push the comparative multi-vehicle view I proposed but was deferred due to CPU rendering constraints — enabling managers to benchmark battery health across an entire fleet in real-time.

---

*Case study — Luis Sierra · Senior Digital Product Designer & Design System Owner*
