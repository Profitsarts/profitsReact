# FMS: Maintenance Management
**Context & Scale**

> Architected a calendar-grid maintenance workspace for Jungheinrich's Enterprise FMS — unifying service planning, compliance verification, and repair initiation into a single interface for ~12 enterprise clients including DHL, Amazon, and LIDL.

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
2022–2023

---

## The Challenge
The Maintenance Management module — the operational backbone for service planning across the FMS — was fragmenting critical workflows. Fleet managers and service coordinators needed a unified workspace to plan upcoming services, verify compliance, and initiate repairs, but the existing tools forced them through multiple disconnected systems.

### Scenario 1: Scattered Visibility — "Where is everything?"
> "Where is everything?"
Maintenance data resided across multiple systems — safety records, parts inventories, service logs — forcing fleet managers to context-switch between tools to assemble a complete picture of their fleet's service status.

**Business cost:** Compliance reports required 3+ hours of manual data aggregation across systems, with high error rates due to copy-paste workflows.

### Scenario 2: Opaque Forecasting — "Can I trust these dates?"
> "The forecasting logic isn't clear to me."
Future service dates were auto-calculated from planned dates and service intervals, but the derivation logic was completely hidden. Users saw projected dates without understanding how the system arrived at them — reducing confidence in automated predictions.

**Business cost:** Low trust in forecasting led to parallel manual tracking in spreadsheets, duplicating effort and creating conflicting sources of truth.

### Scenario 3: Action Barriers — "I found it, now what?"
> "Creating a repair order means switching to another system entirely."
Once fleet managers identified a service need, initiating repair or interval maintenance required navigating to external tools — breaking the investigative flow and adding friction to time-critical decisions.

**Business cost:** Average time from identification to action initiation was ~12 minutes per service — multiplied across dozens of daily actions, this added hours of lost productivity.

> **Common root cause:** Maintenance workflows were distributed across disconnected systems with no shared interface. Users weren't asking for better individual tools — they needed one cohesive workspace that unified visibility, investigation, and action within a single interaction surface.

---

## Discovery & Research
I collaborated closely with the UX Researcher to extract maintenance-specific insights from users we couldn't access directly.

- **Usability testing:** Co-authored test scripts targeting calendar-grid comprehension and tile-status recognition.
- **Support ticket analysis:** Categorized recurring tickets into visibility, navigation, and action-barrier clusters.
- **Industrial ethnography:** Observed back-office maintenance coordinators at Jungheinrich client sites managing multi-shift service schedules.
- **Task-flow mapping:** Mapped end-to-end user stories — from future-service browsing through past-activity export — identifying 6–8 discrete user actions per workflow, with critical friction at filtering, sorting, and cross-system handoffs.
- **Structured question capture:** Documented 15+ open questions surfaced during stakeholder reviews (e.g., *“How are mult-column sorts handled?”*, *“What is the trigger for status expiration?”*, *“How do we communicate navigation boundaries beyond the 1-year forecast?”*) — feeding directly into design requirements for scope controls and navigation logic.
- **Competitive analysis:** Evaluated calendar-grid patterns across enterprise resource planning tools (SAP PM, IBM Maximo).

> **The Unifying Insight:** The pain points weren't isolated usability issues — they were symptoms of a missing operational layer. Users needed a single interface that functioned simultaneously as a planning calendar, an equipment monitoring grid, and an action launcher.

---

## Design Process

### Problem 1: Grid Overload → Consolidated Legend & Scope Controls
> "I want to see quickly which trucks are scheduled for maintenance this month."
**This revealed:** On first load, the 6-month grid displayed dense rows of status-coded tiles without context for forecasted dates. 
**I architected:** A consolidated visual system with always-visible status legend and intuitive scope controls.
- Designed an always-visible status legend positioned adjacent to the forecast icon.
- Established **status-coded service tiles** with distinct icons per service type (Oil, Safety, PM) and color dots per state.
- Default 6-month window for focused planning, with a toggle to 12-month for strategic oversight.

### Problem 2: Density Mismatch → Adaptive Density Controls
> "The grid is either too compressed or too sparse depending on how many trucks I'm managing."
**This revealed:** Fleet sizes varied dramatically across clients. A fixed grid density served neither extreme well.
**I architected:** A two-mode density system with persistent user preference.
- **Comfortable mode:** 6-month scope with larger tiles optimized for fleets under 100 vehicles.
- **Compact mode:** 12-month scope with smaller tiles for large-fleet overview.

### Problem 3: Navigation Dead Ends → Transparent Boundary Communication
> "The arrows just disappeared — I thought the system was broken."
**This revealed:** When navigating beyond one-year limits, forward/back arrows disappeared without explanation.
**I architected:** A progressive disclosure system for navigation boundaries.
- Out-of-range months rendered with reduced opacity — communicating unavailability without removing context.
- Hovering triggers an explanatory tooltip regarding the one-year constraint.
- Added a custom range picker for investigations beyond the standard window.

---

## Component Architecture
- **Design system classification:** Organism (Atomic Design Level 03) — Calendar Grid.
- **Figma path:** `03 Organisms / 31 Calendar Grid`
- **Scope:** Built for Maintenance, designed as **polyvalent** — calendar-grid pattern reusable for any time-series equipment view.

---

## Impact & Results

### Visibility
> **Before:** "I want to see quickly which trucks are scheduled for maintenance this month."
> **After:** "The calendar gives me everything at a glance — I know exactly what's coming up and what's overdue."
55% reduction in queries about upcoming services.

### Compliance
> **Before:** "Generating compliance reports takes me half a day of manual work."
> **After:** "One click, filters applied, CSV exported — done."
40% faster compliance exports via built-in CSV functionality.

### Overall
- 60% faster service creation through integrated Call4Service CTAs.
- 90% fewer support tickets related to navigation limits.
- Calendar Grid added as a reusable **Organism** to the design system.

---

## Reflection
Designing the Maintenance Management module reinforced that **the most impactful enterprise design isn't about novelty — it's about compression**. Collapsing seven context switches into a single surface required more restraint than invention. Every element that earned its place in the calendar grid had to justify itself against the density budget.
