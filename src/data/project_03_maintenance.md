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
> *"Maintenance data lives in three different places — I never know if I'm looking at the latest version."*

Maintenance data resided across multiple systems — safety records, parts inventories, service logs — forcing fleet managers to context-switch between tools to assemble a complete picture of their fleet's service status. Compliance season turned into a multi-day data-aggregation exercise.

**Business cost:** Compliance reports required 3+ hours of manual data aggregation across systems, with high error rates due to copy-paste workflows.

### Scenario 2: Opaque Forecasting — "Can I trust these dates?"
> *"The forecasting logic isn't clear to me. I see a date but I don't know how the system got there."*

Future service dates were auto-calculated from planned dates and service intervals, but the derivation logic was completely hidden. Users saw projected dates without understanding how the system arrived at them — eroding confidence in automated predictions to the point of irrelevance.

**Business cost:** Low trust in forecasting led to parallel manual tracking in spreadsheets, duplicating effort and creating conflicting sources of truth.

### Scenario 3: Action Barriers — "I found it, now what?"
> *"Creating a repair order means switching to another system entirely — by the time I get there I've lost half the context."*

Once fleet managers identified a service need, initiating repair or interval maintenance required navigating to external tools — breaking the investigative flow and adding friction to time-critical decisions.

**Business cost:** Average time from identification to action initiation was ~12 minutes per service — multiplied across dozens of daily actions, this added hours of lost productivity.

---

> **Common root cause:** Maintenance workflows were distributed across disconnected systems with no shared interface. Users weren't asking for better individual tools — they needed one cohesive workspace that unified visibility, investigation, and action within a single interaction surface.

---

## Discovery & Research
I collaborated closely with the UX Researcher to extract maintenance-specific insights from users we couldn't access directly. My approach maximized impact through **proxy research and joint interpretation**:

| Method | My Involvement |
|--------|---------------|
| **Usability testing** | Co-authored test scripts targeting calendar-grid comprehension and tile-status recognition; joint interpretation sessions with the UX Researcher |
| **Support ticket analysis** | Categorized recurring tickets into visibility, navigation, and action-barrier clusters — directly informed the 3-scenario taxonomy |
| **Industrial ethnography** | Observed back-office maintenance coordinators at Jungheinrich client sites managing multi-shift service schedules |
| **Task-flow mapping** | Mapped end-to-end user stories — from future-service browsing through past-activity export — identifying 6–8 discrete user actions per workflow with critical friction at filtering, sorting, and cross-system handoffs |
| **Structured question capture** | Documented 15+ open questions surfaced during stakeholder reviews (multi-column sort behavior, status expiration triggers, navigation boundary communication) — fed directly into design requirements |
| **Competitive analysis** | Evaluated calendar-grid patterns across enterprise resource planning tools (SAP PM, IBM Maximo) |

### The Unifying Insight

The pain points weren't isolated usability issues — they were symptoms of a missing operational layer. Users needed a single interface that functioned simultaneously as a planning calendar, an equipment monitoring grid, and an action launcher. Treating these as three separate features would have produced three half-solutions; collapsing them into one workspace was the architectural move.

---

## Design Process

### Problem 1: Scattered Visibility → Unified Calendar Grid

**User said:** *"Maintenance data lives in three different places — I never know if I'm looking at the latest version."*
**This revealed:** The system had no canonical surface for maintenance state. Truth was fragmented across tools by accident, not design.
**I architected:** A calendar-grid workspace with equipment rows × monthly columns, status-coded tiles, and an always-visible legend.

- Always-visible status legend positioned adjacent to the forecast icon — eliminating the *"what does this color mean?"* question on every encounter
- Status-coded service tiles with distinct icons per service type (Oil, Safety, Planned Maintenance) and color dots per state (Done, Overdue, Open, Cancelled, Forecast)
- Default 6-month forecast window for focused operational planning, with a toggle to 12-month for strategic oversight

**Alternatives evaluated and discarded:**

| Alternative | Why Discarded |
|-------------|--------------|
| **List view with timeline column** | Forced linear reading; killed at-a-glance pattern recognition |
| **Multi-tab interface (current / upcoming / overdue)** | Hid relationships across categories; replicated the context-switching problem we were solving |
| **Heatmap calendar** | Density-coded color blocks lost the per-service detail required for compliance audits |

**Why calendar-grid over alternatives:** Maintenance is inherently temporal and per-equipment. Users think in *"this truck, this month"* — the grid encoded that mental model directly. No translation layer required.

---

### Problem 2: Opaque Forecasting → Transparent Derivation

**User said:** *"The forecasting logic isn't clear to me. I see a date but I don't know how the system got there."*
**This revealed:** Trust in predicted dates collapsed without visible derivation. Users defaulted to manual spreadsheets to recover certainty.
**I architected:** A progressive disclosure system that exposed the calculation behind every forecasted date.

- Forecast tooltip explicitly defined the formula: *"All future service dates are forecast using the planned date and the service interval"*
- Visual differentiation between **actual** dates (rendered fully) and **forecast** dates (rendered with the forecast icon)
- Boundary indicators communicating one-year access limits — *"You can only access services one year back and forth from the present time"* — surfacing system constraints before users hit them

**Alternatives evaluated and discarded:**

| Alternative | Why Discarded |
|-------------|--------------|
| **Modal explaining the algorithm on first visit** | Dismissed once and never revisited — context dies on dismissal |
| **Inline formula displayed permanently per tile** | Visual noise; broke the density budget |
| **Help-center article link** | Pushed users out of the workflow — exact friction the redesign was meant to eliminate |

**Why tooltips over modals:** Trust is built through *availability on demand*, not through onboarding ceremony. Tooltips placed the explanation where the question forms — exactly when the user pauses on the forecast icon.

---

### Problem 3: Action Barriers → Integrated Service Creation

**User said:** *"Creating a repair order means switching to another system entirely — by the time I get there I've lost half the context."*
**This revealed:** The handoff to external service-creation tools nullified everything users had just learned from the grid. Context was the entire deliverable.
**I architected:** A details drawer that opens from any tile, preserving grid context while exposing equipment data, service metadata, and a one-click Call4Service launcher.

- Service metadata (type, status, interval, dates), full equipment information with visual reference, and direct link to detailed service reports — all rendered in a single drawer
- **Call4Service integration:** *"Create repair service"* / *"Create interval service"* buttons prefill service-creation forms using equipment and maintenance context
- First-time user guidance surfaced inline: *"If this is your first time using Call4Service, CustomerID and EquipmentID are required to create your account"*

**Alternatives evaluated and discarded:**

| Alternative | Why Discarded |
|-------------|--------------|
| **Deep-link to Call4Service with prefilled URL parameters** | Required Call4Service redesign; politically impractical and slower to ship |
| **Inline service-creation form expanded within the tile** | Tile clicks would do too many things — broke single-responsibility expectations |
| **Bulk-action panel above the grid** | Solved a different problem (multi-service workflows) at the expense of the dominant single-service path |

**Why drawer over modal or full-screen takeover:** The drawer preserved the grid behind it — users could re-anchor visually without losing investigative state. Modals hide context; drawers extend it.

---

### Component Architecture

```
Calendar Grid (Organism)
  ├─ Equipment row × month columns
  ├─ Status-coded service tiles (Molecule × 5 states)
  ├─ Scope toggle (6mo / 12mo)
  ├─ Density toggle (Comfortable / Compact)
  └─ Persistent filter panel (Molecule)
       └─ Details drawer (Organism)
            └─ Call4Service launcher (Atom)
```

**Design system classification:** Organism (Atomic Design Level 03) — Calendar Grid.
**Figma path:** `03 Organisms / 31 Calendar Grid`
**Scope:** Built for Maintenance, designed as **polyvalent** — calendar-grid pattern reusable for any time-series equipment view across the other 7 FMS modules.

---

## Solution & Implementation

### Delivered System

**1. Unified Calendar Grid**
- Equipment rows × monthly columns with status-coded tiles (Done / Overdue / Open / Cancelled / Forecast)
- Scope selector (6mo / 12mo) and density toggle (Comfortable / Compact) with persistent user preference
- Out-of-range months rendered with reduced opacity + tooltip explaining the one-year constraint, replacing the "arrows disappear" dead-end

**2. Transparent Forecasting Layer**
- Visual differentiation between actual and forecasted dates
- Forecast tooltip with the full derivation formula
- Boundary indicators preventing navigation surprises

**3. Persistent Filter Panel**
- Location selector, service type, status with real-time result counts, segment classification
- Instant filter application — no apply button, no submit cycle

**4. Details Drawer + Call4Service Integration**
- Service metadata + equipment data + report link in one surface
- Prefilled service-creation CTAs eliminated the handoff to external tools

**5. DesignOps & Handoff**
- Reviewed every component's CSS properties in Storybook, filing Jira tickets for implementation gaps
- Documented color tokens (BTN-Yellow `#FFB900`, BTN-Yellow dark `#E6A800`) and interaction states for downstream consistency
- WCAG AA contrast and ARIA labels validated jointly with the Head of Design

---

## Impact & Results

### Visibility

> **Before:** *"Maintenance data lives in three different places."*
> **After:** *"The calendar gives me everything at a glance — I know exactly what's coming up and what's overdue."*

55% reduction in queries about upcoming services. Compliance reporting collapsed from a multi-day exercise to a within-session export.

### Forecasting Trust

> **Before:** *"The forecasting logic isn't clear to me."*
> **After:** *"Now I can see why a date was predicted — I trust the system enough to plan around it."*

Parallel spreadsheets quietly disappeared from operational meetings. The forecast became the source of truth.

### Action Speed

> **Before:** *"Creating a repair order means switching to another system entirely."*
> **After:** *"One click, filters applied, CSV exported — done."*

- 60% faster service creation through integrated Call4Service CTAs
- 90% fewer support tickets related to navigation limits
- 40% faster compliance exports via built-in CSV functionality
- Calendar Grid added as a reusable **Organism** to the design system

---

## Reflection

Designing the Maintenance Management module reinforced that **the most impactful enterprise design isn't about novelty — it's about compression**. Collapsing seven context switches into a single surface required more restraint than invention. Every element that earned its place in the calendar grid had to justify itself against the density budget — and most candidate features didn't survive.

The harder lesson was about **trust as a designed property**, not a side effect. The forecasting feature was technically correct before the redesign — the algorithm worked. What was missing was the visible derivation. Users had stopped trusting an output they couldn't explain to themselves. Surfacing the formula in a tooltip wasn't a UI polish item; it was the entire feature.

If I were to iterate, I'd push harder on **predictive surfacing** — having the grid highlight clusters of overdue activity proactively, instead of relying on the user to discover them through scanning. That capability was scoped for v2 but never reached the roadmap; with more leverage I'd have made it a v1 anchor.
