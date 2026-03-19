export const projects = [
  {
    "id": "01",
    "title": "Wordfinder",
    "description": "Proof of concept \"Improving and implementing of functionalities of the Wordfinder app\".",
    "tags": [
      "design",
      "ux_ui"
    ],
    "thumbnail": "assets/img/portfolio/thumb/01-wordfinder-THMB.jpg",
    "images": [
      {
        "name": "01-wordfinder-00-FULL.jpg",
        "text": "Wordfinder"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": "<div class=\"row\">\n    <div class=\"span12\">\n      <h5 class=\"work-def psep\">Moving things around and going to the beauty salon.</h5>\n\n      <p class=\"work-def-sm psep\">How would you add a new feature that allow\n        users to enter the letter (tiles) into the rack (input bar)?.\n        This was the initial proposal to reform the app's usability, making it easier to generate such a task.\n        On the other hand, a redesign of the app was required to give it a more modern look and replace the current one, which belonged to another era.</p>\n      \n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-01-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-02-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-03-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-04-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-05-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-06-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-07-FULL.jpg\"></div>\n\n        <div class=\"sep\"><img src=\"../assets/img/portfolio/full/01-wordfinder-08-FULL.jpg\"></div>\n    </div>\n\n</div>\n"
  },
  {
      "id": "02",
      "title": "FMS: Maintenance Management",
      "description": "Architected a calendar-grid maintenance workspace for Jungheinrich's Enterprise FMS — unifying service planning, compliance verification, and repair initiation into a single interface for ~12 enterprise clients.",
      "tags": [
          "design",
          "ux_ui",
          "enterprise",
          "design-systems"
      ],
      "thumbnail": "assets/img/portfolio/thumb/02-maintenance-00-THMB.jpg",
      "images": [
          {
              "name": "02-maintenance-00-FULL.jpg",
              "text": "Maintenance Management"
          }
      ],
      "imagePath": "/assets/img/portfolio/full/",
      "content": "<!-- ========== HERO STATEMENT ========== -->\n<section class=\"row\" id=\"hero-statement\">\n    <div class=\"span12\">\n        <blockquote style=\"border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;\">\n            Architected a calendar-grid maintenance workspace for Jungheinrich's Enterprise FMS — unifying service planning, compliance verification, and repair initiation into a single interface for ~12 enterprise clients including DHL, Amazon, and LIDL.\n        </blockquote>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== CONTEXT & SCALE ========== -->\n<section class=\"row\" id=\"context-scale\">\n    <div class=\"span12\">\n        <h4>Context & Scale</h4>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Product</h6>\n        <p><strong>Fleet Management System (FMS)</strong> — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).</p>\n        <h6>Company</h6>\n        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>\n        <h6>My Role</h6>\n        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.</p>\n    </div>\n    <div class=\"span6\">\n        <h6>Team</h6>\n        <p>Core squad of 4 (UX Researcher, PO, Head of Design, myself). ~5 engineers per module, 2 dedicated frontend component developers.</p>\n        <h6>Customers</h6>\n        <p>~12 enterprise clients (DHL, Amazon, LIDL) + hundreds of SMEs. Thousands of vehicles across multi-warehouse environments.</p>\n        <h6>Tech Stack</h6>\n        <p>React.js · Storybook · Jira-driven DesignOps · Figma (led full migration from Sketch).</p>\n        <h6>Timeline</h6>\n        <p>2022–2023</p>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== THE CHALLENGE ========== -->\n<section class=\"row\" id=\"the-challenge\">\n    <div class=\"span12\">\n        <h4>The Challenge</h4>\n        <p>The Maintenance Management module — the operational backbone for service planning across the FMS — was fragmenting critical workflows. Fleet managers and service coordinators needed a unified workspace to plan upcoming services, verify compliance, and initiate repairs, but the existing tools forced them through multiple disconnected systems.</p>\n    </div>\n</section>\n\n<section class=\"row\" id=\"scenario-1\">\n    <div class=\"span6\">\n        <h5>Scenario 1: Scattered Visibility — \"Where is everything?\"</h5>\n        <blockquote class=\"user-quote\">\n            \"I want to see quickly which trucks are scheduled for maintenance this month.\"\n        </blockquote>\n        <p>Maintenance data resided across multiple systems — safety records, parts inventories, service logs — forcing fleet managers to context-switch between tools to assemble a complete picture of their fleet's service status.</p>\n        <blockquote class=\"user-quote\">\n            \"I need to identify trucks with outstanding annual maintenance and export that data.\"\n        </blockquote>\n        <p><strong>Business cost:</strong> Compliance reports required 3+ hours of manual data aggregation across systems, with high error rates due to copy-paste workflows.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-01.jpg\" alt=\"\" />\n          <figcaption>Calendar-grid overview — 6-month default view showing equipment rows and service tiles</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-02.jpg\" alt=\"\" />\n          <figcaption>Forecast tooltip and legend: users couldn't distinguish forecast from confirmed dates</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"scenario-2\">\n    <div class=\"span6\">\n        <h5>Scenario 2: Opaque Forecasting — \"Can I trust these dates?\"</h5>\n        <blockquote class=\"user-quote\">\n            \"The forecasting logic isn't clear to me.\"\n        </blockquote>\n        <p>Future service dates were auto-calculated from planned dates and service intervals, but the derivation logic was completely hidden. Users saw projected dates without understanding how the system arrived at them — reducing confidence in automated predictions.</p>\n        <blockquote class=\"user-quote\">\n            \"I want an overview of maintenance jobs due in the next three months.\"\n        </blockquote>\n        <p><strong>Business cost:</strong> Low trust in forecasting led to parallel manual tracking in spreadsheets, duplicating effort and creating conflicting sources of truth.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-03.jpg\" alt=\"\" />\n          <figcaption>12-month scope toggle: dense tile rendering obscuring individual service details</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-04.jpg\" alt=\"\" />\n          <figcaption>Density toggle controls: Comfortable (6-month) vs. Compact (12-month) modes</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"scenario-3\">\n    <div class=\"span6\">\n        <h5>Scenario 3: Action Barriers — \"I found it, now what?\"</h5>\n        <blockquote class=\"user-quote\">\n            \"Creating a repair order means switching to another system entirely.\"\n        </blockquote>\n        <p>Once fleet managers identified a service need, initiating repair or interval maintenance required navigating to external tools — breaking the investigative flow and adding friction to time-critical decisions.</p>\n        <blockquote class=\"user-quote\">\n            \"By the time I've opened the external tool, I've lost the context of what I was looking at.\"\n        </blockquote>\n        <p><strong>Business cost:</strong> Average time from identification to action initiation was ~12 minutes per service — multiplied across dozens of daily actions, this added hours of lost productivity.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-08.jpg\" alt=\"\" />\n          <figcaption>Details drawer: service metadata, equipment info, and direct action CTAs</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-09.jpg\" alt=\"\" />\n          <figcaption>Call4Service integration — repair service tab with pre-populated fields</figcaption>\n        </figure>\n    </div>\n</section>\n\n<section class=\"row\" id=\"root-cause\">\n    <div class=\"span12\">\n        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">\n            <strong>Common root cause:</strong> Maintenance workflows were distributed across disconnected systems with no shared interface. Users weren't asking for better individual tools — they needed one <em>cohesive workspace</em> that unified visibility, investigation, and action within a single interaction surface.\n        </blockquote>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== DISCOVERY & RESEARCH ========== -->\n<section class=\"row\" id=\"discovery\">\n    <div class=\"span12\">\n        <h4>Discovery & Research</h4>\n        <p>Following the same proxy research infrastructure established across FMS modules, I collaborated closely with the UX Researcher to extract maintenance-specific insights from users we couldn't access directly.</p>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Usability testing</h6>\n        <p>Co-authored test scripts targeting calendar-grid comprehension and tile-status recognition; analyzed raw results in 1:1 joint sessions with the UX Researcher.</p>\n        <h6>Support ticket analysis</h6>\n        <p>Categorized recurring tickets into visibility, navigation, and action-barrier clusters — each mapping directly to a design intervention.</p>\n        <h6>Stakeholder interviews</h6>\n        <p>Conducted sessions with POs from adjacent modules (Fleet Administration, Access Control) to identify shared patterns and reusable components.</p>\n    </div>\n    <div class=\"span6\">\n        <h6>Industrial ethnography</h6>\n        <p>Observed back-office maintenance coordinators at Jungheinrich client sites managing multi-shift service schedules under time pressure.</p>\n        <h6>Workflow mapping</h6>\n        <p>Documented the complete maintenance lifecycle — from forecast generation through service completion — identifying the seven context switches that fragmented the workflow.</p>\n        <h6>Competitive analysis</h6>\n        <p>Evaluated calendar-grid patterns across enterprise resource planning tools (SAP PM, IBM Maximo) to benchmark information density expectations.</p>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span12\">\n        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">\n            <strong>The Unifying Insight:</strong> The five pain points weren't isolated usability issues — they were symptoms of a missing <em>operational layer</em>. Users needed a single interface that functioned simultaneously as a planning calendar, a compliance dashboard, and an action launcher. The design challenge was architectural: how to compress three distinct workflows into one surface without overloading any single view.\n        </blockquote>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== DESIGN PROCESS ========== -->\n<section class=\"row\" id=\"design-process\">\n    <div class=\"span12\">\n        <h4>Design Process</h4>\n    </div>\n</section>\n\n<section class=\"row\" id=\"solution-1\">\n    <div class=\"span6\">\n        <h5>Problem 1: Grid Overload → Consolidated Legend & Scope Controls</h5>\n        <blockquote class=\"user-quote\">\n            \"I want to see quickly which trucks are scheduled for maintenance this month.\"\n        </blockquote>\n        <p><strong>This revealed:</strong> On first load, the 6-month grid displayed dense rows of status-coded tiles without context for forecasted dates. Forecast tooltips and legend information were hidden behind icon hovers, delaying comprehension.</p>\n        <p><strong>I architected:</strong> A consolidated visual system with always-visible status legend and intuitive scope controls.</p>\n        <ul class=\"challenge-list\">\n            <li>Designed an always-visible status legend positioned adjacent to the forecast icon — eliminating the hover-to-discover pattern.</li>\n            <li>Established <strong>status-coded service tiles</strong> with distinct icons per service type (Oil Service, Safety Check, Planned Maintenance, Other Services) and color dots per state (Done, Overdue, Open, Cancelled, Forecast).</li>\n            <li>Default 6-month window for focused planning, with a prominent toggle to 12-month for long-term strategic oversight.</li>\n        </ul>\n        <p><strong>Why always-visible over hover?</strong> Industrial back-office users scan dashboards under time pressure. Information architecture must respect glanceability — critical context cannot be gated behind interactions.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-01.jpg\" alt=\"\" />\n          <figcaption>Calendar-grid overview — 6-month default view with status-coded tiles</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-03.jpg\" alt=\"\" />\n          <figcaption>12-month scope: strategic long-term maintenance planning view</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"solution-2\">\n    <div class=\"span6\">\n        <h5>Problem 2: Density Mismatch → Adaptive Density Controls</h5>\n        <blockquote class=\"user-quote\">\n            \"The grid is either too compressed or too sparse depending on how many trucks I'm managing.\"\n        </blockquote>\n        <p><strong>This revealed:</strong> Fleet sizes varied dramatically across clients — from 30 vehicles (SMEs) to 500+ (DHL, Amazon). A fixed grid density served neither extreme well.</p>\n        <p><strong>I architected:</strong> A two-mode density system with persistent user preference.</p>\n        <ul class=\"challenge-list\">\n            <li><strong>Comfortable mode:</strong> 6-month scope with larger tiles optimized for fleets under 100 vehicles — maximizing readability per cell.</li>\n            <li><strong>Compact mode:</strong> 12-month scope with smaller tiles for large-fleet overview — prioritizing pattern recognition over individual cell detail.</li>\n            <li>Density preference persisted per session — users don't re-adjust on every visit.</li>\n        </ul>\n        <h6>Alternatives evaluated and discarded:</h6>\n        <ul class=\"challenge-list\">\n            <li><strong>Continuous zoom slider:</strong> Added unnecessary cognitive load — users needed discrete, predictable states, not infinite variability.</li>\n            <li><strong>Auto-density based on fleet size:</strong> Removed user agency. Testing showed coordinators switched modes depending on task, not fleet size.</li>\n        </ul>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-04.jpg\" alt=\"\" />\n          <figcaption>Density toggle: Comfortable (6-month, larger tiles) vs. Compact (12-month, smaller tiles)</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-12.jpg\" alt=\"\" />\n          <figcaption>Flexible time-range controls with custom date selectors</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"solution-3\">\n    <div class=\"span6\">\n        <h5>Problem 3: Navigation Dead Ends → Transparent Boundary Communication</h5>\n        <blockquote class=\"user-quote\">\n            \"The arrows just disappeared — I thought the system was broken.\"\n        </blockquote>\n        <p><strong>This revealed:</strong> When navigating beyond one-year limits, forward/back arrows disappeared without explanation. Users interpreted this as a bug rather than an intentional data boundary.</p>\n        <p><strong>I architected:</strong> A progressive disclosure system for navigation boundaries.</p>\n        <ul class=\"challenge-list\">\n            <li>Out-of-range months rendered with reduced opacity — visually communicating unavailability without removing spatial context.</li>\n            <li>Hovering unavailable months triggers an explanatory tooltip: <em>\"You can only access services one year back and forth from present time.\"</em></li>\n            <li>Added a custom range picker enabling arbitrary date selection for investigations beyond the standard window.</li>\n        </ul>\n        <p><strong>Design decision:</strong> Keeping greyed-out months visible rather than hiding them was deliberate — it preserved the user's mental model of the timeline and avoided the \"where did it go?\" confusion that triggered support tickets.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-13.jpg\" alt=\"\" />\n          <figcaption>Timeline navigation at limit — arrows removed with no explanation (before)</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-14.jpg\" alt=\"\" />\n          <figcaption>Disabled months with reduced opacity — preserved spatial context (after)</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-15.jpg\" alt=\"\" />\n          <figcaption>Navigation boundary tooltip explaining the one-year constraint</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"solution-4\">\n    <div class=\"span6\">\n        <h5>Problem 4: Filter Fragmentation → Persistent Contextual Filtering</h5>\n        <blockquote class=\"user-quote\">\n            \"I need to filter by service type and status without losing my calendar position.\"\n        </blockquote>\n        <p><strong>This revealed:</strong> Users needed to slice the calendar by multiple dimensions simultaneously — service type, status, location, segment — but any filtering action disrupted their spatial context within the grid.</p>\n        <p><strong>I architected:</strong> A persistent left sidebar filter system with real-time application.</p>\n        <ul class=\"challenge-list\">\n            <li>Persistent sidebar position maintains calendar view context during filter manipulation.</li>\n            <li>Each filter category displays live item counts — users see the impact of their selection before committing.</li>\n            <li>Filter categories: Location (dropdown), Service type (Planned Maintenance, Oil Service, Other Services, Safety Check), Status, and Segment classification.</li>\n            <li>Integrated export button in header for one-click CSV generation with applied filters — directly addressing compliance reporting needs.</li>\n        </ul>\n        <p><strong>Engineering collaboration:</strong> Implemented virtualized scrolling for equipment lists exceeding 200 rows to maintain sub-100ms filter response times across large fleets.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-05.jpg\" alt=\"\" />\n          <figcaption>Persistent filter panel — service type categories with live item counts</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-06.jpg\" alt=\"\" />\n          <figcaption>Active filters with instant feedback — result counts update in real-time</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"solution-5\">\n    <div class=\"span6\">\n        <h5>Problem 5: Action Fragmentation → Integrated Details Drawer with Call4Service</h5>\n        <blockquote class=\"user-quote\">\n            \"Creating a repair order means switching to another system entirely.\"\n        </blockquote>\n        <p><strong>This revealed:</strong> The investigation-to-action pipeline was broken. Users identified service needs within the FMS but had to leave it entirely to initiate repairs — losing context and adding ~12 minutes per action.</p>\n        <p><strong>I architected:</strong> A comprehensive details drawer with embedded Call4Service integration.</p>\n        <ul class=\"challenge-list\">\n            <li>Clicking any maintenance tile opens a slide-in drawer presenting service metadata, equipment information, and direct CTAs — no page navigation required.</li>\n            <li>Embedded <strong>Call4Service tabs</strong> for \"Repair service\" and \"Interval service\" with pre-populated fields from the selected tile's data.</li>\n            <li>First-use onboarding tooltip: <em>\"If this is your first time using Call4Service, CustomerID and EquipmentID are required to create your account.\"</em></li>\n            <li>\"Go to service reports\" link for detailed historical logs when deeper investigation is needed.</li>\n        </ul>\n        <p><strong>Why slide-in drawer over modal?</strong> Drawers maintain spatial awareness of the calendar grid behind them. Users can reference the grid context while reviewing service details — modals would have severed that connection.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-08.jpg\" alt=\"\" />\n          <figcaption>Details drawer: service metadata, equipment info, and action CTAs</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-10.jpg\" alt=\"\" />\n          <figcaption>Call4Service — interval service tab with pre-populated equipment data</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/maintenance/slide-11.jpg\" alt=\"\" />\n          <figcaption>Call4Service onboarding tooltip for first-time users</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== COMPONENT ARCHITECTURE ========== -->\n<section class=\"row\" id=\"component-architecture\">\n    <div class=\"span6\">\n        <h5>Component Architecture</h5>\n        <h6>Design system classification</h6>\n        <p>Organism (Atomic Design Level 03) — Calendar Grid. Composed of Molecule-level service tiles (Level 02) and Atom-level status indicators (Level 01).</p>\n        <h6>Figma path</h6>\n        <p><code>03 Organisms / 31 Calendar Grid / 31 Calendar Grid</code></p>\n        <h6>Scope</h6>\n        <p>Built for Maintenance Management, designed as <strong>polyvalent</strong> — calendar-grid pattern reusable for any time-series equipment view across all 8 FMS modules.</p>\n    </div>\n    <div class=\"span6 mt-2\">\n        <h6>Accessibility & Performance</h6>\n        <ul class=\"challenge-list\">\n            <li>ARIA labels on all interactive tiles; full keyboard navigation throughout the grid and drawer.</li>\n            <li>Color contrast meeting WCAG AA standards across all five status states.</li>\n            <li>Virtualized scrolling for large equipment lists; lazy-loaded equipment images in the details drawer.</li>\n            <li>Design tokens documented: Selected state yellow BTN-Yellow–dark (#E6A800) / Enabled state BTN-Yellow (#FFB900).</li>\n        </ul>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== IMPACT & RESULTS ========== -->\n<section class=\"row\" id=\"impact-results\">\n    <div class=\"span12\">\n        <h4>Impact & Results</h4>\n        <h5>Validated Outcomes (Post-Launch User Testing)</h5>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Visibility — Before / After</h6>\n        <blockquote class=\"user-quote\">\n            Before: \"I want to see quickly which trucks are scheduled for maintenance this month.\"\n        </blockquote>\n        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">\n            After: \"The calendar gives me everything at a glance — I know exactly what's coming up and what's overdue.\"\n        </blockquote>\n        <p>55% reduction in queries about upcoming services. Fleet managers gained immediate, at-a-glance oversight of their entire maintenance pipeline.</p>\n    </div>\n    <div class=\"span6\">\n        <h6>Compliance — Before / After</h6>\n        <blockquote class=\"user-quote\">\n            Before: \"Generating compliance reports takes me half a day of manual work.\"\n        </blockquote>\n        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">\n            After: \"One click, filters applied, CSV exported — done.\"\n        </blockquote>\n        <p>40% faster compliance exports via built-in CSV functionality with persistent filter state.</p>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Planning & Trust</h6>\n        <ul class=\"challenge-list\">\n            <li>70% adoption of custom time-range views for forward-looking maintenance scheduling.</li>\n            <li>85% positive feedback on forecast transparency — users understood how projected dates were derived.</li>\n        </ul>\n    </div>\n    <div class=\"span6\">\n        <h6>Overall</h6>\n        <ul class=\"challenge-list\">\n            <li>60% faster service creation through integrated Call4Service CTAs — from ~12 minutes to under 5 minutes per action.</li>\n            <li>90% fewer support tickets related to navigation limits after tooltip introduction.</li>\n            <li>Calendar Grid added as a reusable <strong>Organism</strong> to the design system — available for adoption across all 8 FMS modules.</li>\n        </ul>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== REFLECTION ========== -->\n<section class=\"row\" id=\"reflection\">\n    <div class=\"span12\">\n        <h4>Reflection</h4>\n        <p>Designing the Maintenance Management module reinforced that <strong>the most impactful enterprise design isn't about novelty — it's about compression</strong>. Collapsing seven context switches into a single surface required more restraint than invention. Every element that earned its place in the calendar grid had to justify itself against the density budget.</p>\n        <p>The Call4Service integration was a case study in <strong>boundary negotiation</strong> — embedding third-party functionality without inheriting its complexity. The drawer pattern allowed us to offer action capabilities while keeping the FMS interface sovereign over the user's attention.</p>\n        <p>If I were to iterate, I'd push the saved filter configurations for role-based views that were deferred due to backend constraints — enabling maintenance coordinators, fleet managers, and compliance officers to each land on their optimized default view.</p>\n    </div>\n</section>\n"
  },
  {
    "id": "03",
    "title": "Fork",
    "description": "",
    "tags": [
      "ux_ui",
      "design"
    ],
    "thumbnail": "assets/img/portfolio/thumb/03-fork-THMB.jpg",
    "images": [
      {
        "name": "03-fork-01-FULL.jpg",
        "text": "Fork"
      },
      {
        "name": "03-fork-04-FULL.jpg",
        "text": "Fork"
      },
      {
        "name": "03-fork-03.5-FULL.jpg",
        "text": "Fork"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": "<div class=\"row\">\n    <div class=\"span12\">\n      <small class=\"work-def-sm\">Prototype video made with Principle for MacOS app</small>\n      <h5 class=\"work-def\">Imagine Git for Food</h5>\n\n      <p class=\"work-def\">\n      FORK is a collaborative recipe system inspired by Git version control, where users create personal recipes and make them freely available for others to develop their own versions, improving or completely transforming them. </p>\n      \n      <p class= \"advice\">For the complete context and final outcome, please download the full case study PDF attached above.</p>\n\n      <h5 class=\"work-def\">Create a Fork</h5>\n\n      <p class=\"work-def\">\n      Create your personal copy of any community recipe. This generates an independent version that connects your culinary creativity to the original dish while maintaining full creative freedom.</p>\n\n      <h5 class=\"work-def\">Make Changes</h5>\n      \n      <p class=\"work-def\">Experiment and improve recipes without affecting the original. Add ingredients, modify techniques, or completely reimagine the dish. This distributed approach allows unlimited culinary innovation while preserving recipe lineage.</p>\n\n      <h5 class=\"work-def\">Submit Pull Request</h5>\n\n      <p class=\"work-def\">Share your culinary improvements back to the community. If your enhanced version adds value, it can be merged into the main recipe, enriching the collective database and inspiring new creative directions.</p>\n\n      <p class=\"work-def\">The platform features an extensive social system with powerful functionalities for creating teams, competing for scores, and organizing culinary competitions. This process allows original ideas to evolve into something completely different, automatically growing the existing database of dishes to be prepared.</p>\n   \n      <h5 class=\"work-def \">Main Finalized App screens</h5>\n\n      <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-01-FULL.jpg\"></div>\n\n      <h5 class=\"work-def \">Pen and paper main user flow</h5>\n      <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-03-FULL.jpg\"></div>\n\n      <h5 class=\"work-def \">Lean UX user survey data</h5>\n\n      <div class=\"row\">\n        <div class=\"span6\">\n          \n          <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-06-FULL.jpg\"></div>\n          <small class=\"work-def-sm\">Age of participants</small>  \n        </div>\n        <div class=\"span6\">\n          \n          <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-07-FULL.jpg\"></div>\n          <small class=\"work-def-sm\">Preferred media</small>\n        </div>\n      </div>\n\n    <h5 class=\"work-def\">Empathy</h5>\n    <div class=\"row\">\n      <div class=\"span6\">\n        \n        <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-08-FULL.jpg\"></div>\n        <small class=\"work-def-sm\">User Personas analysis</small >\n      </div>\n      <div class=\"span6\">\n        \n        <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-09-FULL.jpg\"></div>\n        <small class=\"work-def-sm\">Empathy Maps analysis</small>\n      </div>\n    </div>\n    <h5 class=\"work-def\">Happy path or best User flow possible</h5>\n    <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-10-FULL.jpg\"></div>\n\n    <h5 class=\"work-def\">The moscow method for prioritising functionalities.</h5>\n    <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-11-FULL.jpg\"></div>\n\n    <h5 class=\"work-def\">Hi-Fi Wireframes</h5>\n    <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-04-FULL.jpg\"></div>\n\n    <h5 class=\"work-def\">Moodboard</h5>\n    <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-05-FULL.jpg\"></div>\n\n    <h5 class=\"work-def\">Icon grid</h5>\n    <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-03.5-FULL.jpg\"></div>\n\n    <h5 class=\"work-def\">Recipe steps screen</h5>\n    <div class=\"\"><img src=\"../assets/img/portfolio/full/03-fork-02-FULL.jpg\"></div>\n\n  </div>\n</div>\n"
  },
  {
    "id": "04",
    "title": "Auro",
    "description": "",
    "tags": [
      "ux_ui",
      "design"
    ],
    "thumbnail": "assets/img/portfolio/thumb/04-auro-THMB.jpg",
    "images": [
      {
        "name": "04-Auro-01-FULL.jpg",
        "text": "Rentr"
      },
      {
        "name": "04-Auro-08-FULL.jpg",
        "text": "Rentr"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": "<div class=\"row\">\n    <div class=\"span12\">\n      <br>\n      <h5 class=\"work-def psep\">The third man</h5>\n\n      <h5 class=\"work-def sep\">Auro asked me for a way to be able to hire a taxi in the name of a third party, as at the time, it was only possible to order a taxi under the name of the user who owned the mobile phone assigned to the app.\n      After several exercises, tests and surveys, I came to the conclusion that the best way was to generate a pop-up that would allow to choose to make a quick change of user from an avatar icon that, when pressed, would access a shortcut, similar to sharing, where you could access both the agenda and a contact manager by groups: family, friends and work, being these completely renameable and configurable even in number.</h5>\n\n      <h5 class=\"work-def\">Pen and paper initial wireframes</h5>\n      <img src=\"../assets/img/portfolio/full/04-Auro-08-FULL.jpg\">\n\n      <h5 class=\"work-def\">Comparison of wireframes and final screens</h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-07-FULL.jpg\"></div>\n\n      <h5 class=\"work-def\">Main screen, search and recent and saved searches screens</h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-01-FULL.jpg\"></div>\n\n      <h5 class=\"work-def\">Destination, stops and More button screens</h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-02-FULL.jpg\"></div>\n\n      <h5 class=\"work-def\">Change and passenger grouping screens</h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-03-FULL.jpg\"></div>\n\n      <h5 class=\"work-def\">Traveller edit screen and trip detail screen with extended trip information.</h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-04-FULL.jpg\"></div>\n\n      <h5 class=\"work-def\">Design system\n      </h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-05-FULL.jpg\"></div>\n\n      <h5 class=\"work-def\">More of the Design system</h5>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/04-Auro-06-FULL.jpg\"></div>\n    </div>\n</div>\n"
  },
  {
    "id": "05",
    "title": "BanQz",
    "description": "",
    "tags": [
      "ux_ui",
      "design"
    ],
    "thumbnail": "assets/img/portfolio/thumb/05-banQz-THMB.jpg",
    "images": [
      {
        "name": "05-Banqz-22-FULL.jpg",
        "text": "BanQz"
      },
      {
        "name": "05-Banqz-14-FULL.jpg",
        "text": "BanQz"
      },
      {
        "name": "05-Banqz-19-FULL.jpg",
        "text": "BanQz"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": "<div class=\"row\">\n    <div class=\"span12\">\n      \n      <h5 class=\"work-def\">Kids deserve easier</h5>\n\n      <p class=\"work-def\">BanQz is a banking platform aimed solely at the under-age public (in this case generation Z, starting at the age of 14 and covering only the 4-year age range that separates them from the age of majority).\n      </p>\n      <p class=\"advice\">I strongly recommend downloading the full case study attached above as a PDF to fully understand the final result.</p>\n\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-02-FULL.jpg\"></div>\n      \n      <p class=\"work-def\">The main objective is to overcome the legal problem of the autonomous administration of a minor's capital, a point that would be overcome by adding the intervention of a legal guardian who would act as a judge, outlining the limits of the scope that the minor in his or her charge would have, always within the law and adjusting a variable threshold of functionalities, according to the situation or \"maturity\" of the user, thus always being able to offer a hyper- adjusted user experience. \n      Other ludic and aesthetic issues also appear, which in hierarchical terms would occupy lower-ranking positions.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-01-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-03-FULL.jpg\"></div>\n      \n\n      <p class=\"work-def\">In order to better understand this somehow new market area, I have been researching in different media, trying to get some clarification and find out what are the main problems to be solved.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-04-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-05-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-06-FULL.jpg\"></div>\n      \n      <p class=\"work-def\">When looking at the health of the market and the competition, I realised that this is a product that is not yet independent of its parents: banking for minors is still attached to its parents and I have not come across a digital product that is not a section or\nappendix of the \"parent\" app, without its own autonomous features.\nThese are some of the functionalities that, by intuition and the empathy exercises that follow, I consider most necessary in the development of the app.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-07-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-08-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-09-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-10-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-11-FULL.jpg\"></div>\n      \n\n      <p class=\"work-def\">Leaving rational behaviour to one side and focusing on emotional behaviour, I have composed different user archetypes that will help us to better understand the\nproduct's adolescent target, getting into the blind spots in their heads and outlining answers to various hypotheses.\n\nNormally, in this section of the research, the survey tends to be more in-depth, using tools such as the \"Lean Survey Canvas\", for example, to obtain specific questions and disseminate them in bursts of surveys and face-to-face interviews with \"real\" end-users.\n\nEmpathy maps, which, emerging from the archetypes we will see below, would map out on a scale the emotions they would experience through the sensitive channels.\nSensitive channels. Since this research is a test, we will have to dispense with such precious tools and stick of such precious tools and we will stick to flying over the minds of some archetypes, which, not for being archetypes, which do not lack argumentative validity because they are immaterial.\n\nThe following \"user personas\" are representations of a group of users with similar behaviours, objectives and motivations, which will help us to identify and get to know the end users of the product.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-12-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-13-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-14-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-15-FULL.jpg\"></div>\n      \n\n      <p class=\"work-def\">We continue with the \"Customer Journeys\", a model that allows us to follow the behaviour, needs and problems of our end user, and a \"User Flow\" scheme, defining what would be one of the possible successful interactions with our product.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-16-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-17-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-18-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-19-FULL.jpg\"></div>\n      \n      \n      <p class=\"work-def\">One of the idyllic \"User Flows\" possible.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-20-FULL.jpg\"></div>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-21-FULL.jpg\"></div>\n\n      <p class=\"work-def\">Finally, a demonstration of the possible registration on the platform using the form. In the homepage, we strip away everything that is not essential, indicate the target, give an overview of the services, offer help in various ways and move on to onboarding without getting lost in details, “horror vacuis” or several screens of the same process. Everything is executed from the same place.</p>\n      \n\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-22-FULL.jpg\"></div>\n\n\n\n\n      <p class=\"work-def\">The login gives us the opportunity to do it twice. The Sign-Up would be unique, as the guardian, manager and administrator of the account in legal terms, would be the one who would generate the account and later we would always find two logins for access, one for the guardian to enter and manage all the controls, and the other for the minor to enjoy the service, according to the parameters set by the guardian.</p>\n      \n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-23-FULL.jpg\"></div>\n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-24-FULL.jpg\"></div>\n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-25-FULL.jpg\"></div>\n\n      <p class=\"work-def\">The child's \"tab\" is shown here.</p>\n      \n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-26-FULL.jpg\"></div>\n\n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-27-FULL.jpg\"></div>\n\n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-28-FULL.jpg\"></div>\n\n\n      <div class=\"sep sep\"><img src=\"../assets/img/portfolio/full/05-Banqz-29-FULL.jpg\"></div>\n\n\n      <p class=\"work-def\">And that was it, with no inclination to reinvent the wheel or re-revolve a system that already works and that we make functional by simply adding a double user layer, inspired by network systems, where we have several types of users, some with administrative powers and others with limited or practically no powers, depending on the situation to be dealt with.</p>\n    </div>  \n</div>\n\n"
  },
  {
    "id": "06",
    "title": "Rentr",
    "description": "",
    "tags": [
      "ux_ui",
      "design"
    ],
    "thumbnail": "assets/img/portfolio/thumb/06-rentr-THMB.jpg",
    "images": [
      {
        "name": "06-rentr-21-FULL.jpg",
        "text": "Rentr"
      },
      {
        "name": "06-rentr-33-FULL.jpg",
        "text": "Rentr"
      },
      {
        "name": "06-rentr-30-FULL.jpg",
        "text": "Rentr"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": "<div class=\"row\">\n    <div class=\"span12\">\n      \n      <h5 class=\"work-def psep\">Don't thow anything away, make it profitable.</h5>\n\n      <p class=\"work-def psep\">\n        Rentr is a project that seeks to increase the sustainability of the planet and the pocket of its users, providing them with rental materials that, if they were to be purchased, would probably not be used more than a couple of times in their lifetime. By managing a wide range of categories, which would be open to user suggestions, throug a system of self-assimilation by accumulation of new stock on a daily basis, it would be possible to have any type of tool available for rent for a period of time decided by both parties, thus giving the user the opportunity of not having to contribute a huge financial burden for something that will not be used for a long time.\n        It is based on a geolocalised system by proximity and price filtering by hour, quality and condition of the tool, date of purchase, etc...\n        \n        <SPAN STYLE=\"font-weight:800\">PROBLEMS:</SPAN>\n        \n        waste of money\n        \n        accumulation of tools that we use little or not at all\n        \n        protection of the planet\n          \n        <SPAN STYLE=\"font-weight:800\"> SOLUTIONS:</SPAN>\n        \n        to stop others from spending so much\n        \n        to be able to get other people to reuse our tools without having to buy a new one.\n        \n        slowing down the planet's degenerative process.\n        \n        \n        </p>\n        <p class=\"advice\">I strongly recommend downloading the full case study attached above as a PDF to fully understand the final result.</p>\n\n        \n      <div class=\"row\">\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-02-FULL.jpg\"></div></div>\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-03-FULL.jpg\"></div></div>\n      </div>\n      <p class=\"work-def psep\">Using Lean Survey Canvas to understand what questions to ask in surveys.</p>\n      \n\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-04-FULL.jpg\"></div>\n\n      \n      <p class=\"work-def psep\">Survey results.</p>\n      \n      <div class=\"row\">\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-05-FULL.jpg\"></div></div>\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-06-FULL.jpg\"></div></div>\n      </div>\n\n      \n\n      <div class=\"row\">\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-07-FULL.jpg\"></div></div>\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-08-FULL.jpg\"></div></div>\n      </div>\n\n      \n\n      <p class=\"work-def psep\">Market research to see competition, set priorities and make a difference.</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-09-FULL.jpg\"></div>\n\n      \n\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-10-FULL.jpg\"></div>\n\n      \n\n      <p class=\"work-def psep\">Validate your hypotheses in the marketplace with your potential customers.\n</p>\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-11-FULL.jpg\"></div>\n\n      \n\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-12-FULL.jpg\"></div>\n\n      \n\n      <p class=\"work-def psep\">Creating personas will help you to understand your users’ needs, experiences, behaviours and goals.</p>\n      \n      <div class=\"row\">\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-13-FULL.jpg\"></div></div>\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-14-FULL.jpg\"></div></div>\n      </div>\n\n      \n\n      <p class=\"work-def psep\">The moscow method for prioritising functionalities.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-15-FULL.jpg\"></div>\n\n      \n\n      <p class=\"work-def psep\"> A user journey map tracks what a user does, thinks and feels when they come to different touch points in their journey.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-16-FULL.jpg\"></div>\n\n      \n\n      <p class=\"work-def psep\">I have used crazy 8 method to improvise the architecture of the screens.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-17-FULL.jpg\"></div>\n\n      \n\n      <p class=\"work-def spep\">Two different journeys throughout the app's structure.</p>\n      <div class=\"row\">\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-18-FULL.jpg\"></div></div>\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-19-FULL.jpg\"></div></div>\n      </div>\n      \n\n      <p class=\"work-def psep\">The resolution of the logo was very funny, metaphorical and absolutely crazy.\n      There were several coincidences:   \n      Doraemon carries all his belongings in his magic bag, Mary Poppins too.\n\n      The logo is Doraemon's expression of not having to keep everything in her bag and being able to dispose of things without having to buy and hold them.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-20-FULL.jpg\"></div>\n\n\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-21-FULL.jpg\"></div>\n      \n\n      <p class=\"work-def psep\">Colour palette.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-22-FULL.jpg\"></div>\n      \n        <p class=\"work-def sep\">Typography.</p>\n      <div class=\"row\">\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-23-FULL.jpg\"></div></div>\n          <div class=\"span6\"><div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-24-FULL.jpg\"></div></div>\n      </div>\n      \n\n      <p class=\"work-def psep\">The use of the 8 px grid makes everything fit together and the elaboration of the screens a delight.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-25-FULL.jpg\"></div>\n\n   \n        <p class=\"work-def psep\">User Interface Design</p>\n      <div class=\"row\">\n          <div class=\"span6\">\n            <p class=\"work-def-sm sep\">Selected section enlarged. Scroll suggestion for the following products.</p>\n            <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-26-FULL.jpg\"></div></div>\n          <div class=\"span6\">\n            <p class=\"work-def-sm sep\">Use of second tab bar to facilitate tasks and dispense with 3 dot menus or hamburger menu.</p>\n            <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-27-FULL.jpg\"></div></div>\n      </div>\n      \n      <div class=\"row\">\n          <div class=\"span6\">\n            <p class=\"work-def-sm sep\">Geolocated search by map showing nearest items.</p>\n            <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-28-FULL.jpg\"></div></div>\n          <div class=\"span6\">\n            <p class=\"work-def-sm sep\">Accessible tab bar with the main necessary shortcuts.</p>\n            <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-29-FULL.jpg\"></div></div>\n      </div>\n      \n      <p class=\"work-def psep\">Item detail with all the necessary information without showing too much of it.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-30-FULL.jpg\"></div>\n\n      \n      <p class=\"work-def psep\">Item detail in second tab bar, map section.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-31-FULL.jpg\"></div>\n\n      <p class=\"work-def spep\">More detailed information with the item selected.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-32-FULL.jpg\"></div>\n\n      \n      <p class=\"work-def psep\">Last section ready for booking.</p>\n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-33-FULL.jpg\"></div>\n\n      \n      <div class=\"sep\"><img src=\"../assets/img/portfolio/full/06-rentr-34-FULL.jpg\"></div>\n\n  </div>\n</div>\n"
  },
  {
    "id": "07",
    "title": "FMS: Battery Monitoring (SoC)",
    "description": "Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS — eliminating data-interpretation ambiguity across 3 critical scenarios and shipping an interactive brush-zoom tool.",
    "tags": [
      "design",
      "ux_ui",
      "data-visualization",
      "enterprise",
      "design-systems"
    ],
    "thumbnail": "assets/img/portfolio/thumb/07-soc-00-THMB.jpg",
    "images": [
      {
        "name": "07-soc-00-FULL.jpg",
        "text": "Battery Monitoring – SoC"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": "<!-- ========== HERO STATEMENT ========== -->\n<section class=\"row\" id=\"hero-statement\">\n    <div class=\"span12\">\n        <blockquote style=\"border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;\">\n            Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS — eliminating data-interpretation ambiguity across 3 critical scenarios and shipping an interactive brush-zoom tool for ~12 enterprise clients including DHL, Amazon, and LIDL.\n        </blockquote>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== CONTEXT & SCALE ========== -->\n<section class=\"row\" id=\"context-scale\">\n    <div class=\"span12\">\n        <h4>Context & Scale</h4>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Product</h6>\n        <p><strong>Fleet Management System (FMS)</strong> — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).</p>\n        <h6>Company</h6>\n        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>\n        <h6>My Role</h6>\n        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.</p>\n    </div>\n    <div class=\"span6\">\n        <h6>Team</h6>\n        <p>Core squad of 4 (UX Researcher, PO, Head of Design, myself). ~5 engineers per module, 2 dedicated frontend component developers.</p>\n        <h6>Customers</h6>\n        <p>~12 enterprise clients (DHL, Amazon, LIDL) + hundreds of SMEs. Thousands of vehicles across multi-warehouse environments.</p>\n        <h6>Tech Stack</h6>\n        <p>React.js · Storybook · Jira-driven DesignOps · Figma (led full migration from Sketch).</p>\n        <h6>Timeline</h6>\n        <p>2023–2024</p>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== THE CHALLENGE ========== -->\n<section class=\"row\" id=\"the-challenge\">\n    <div class=\"span12\">\n        <h4>The Challenge</h4>\n        <p>The SoC (State of Charge) chart — the core visualization of the Battery Monitoring module — consistently generated confusion and support tickets. Fleet managers needed real-time battery visibility to prevent downtime, but the chart was failing them in three distinct ways.</p>\n    </div>\n</section>\n\n<section class=\"row\" id=\"scenario-1\">\n    <div class=\"span6\">\n        <h5>Scenario 1: Empty Layout — \"Is it broken or just silent?\"</h5>\n        <blockquote class=\"user-quote\">\n            \"I can't tell if the truck is broken or just not sending data\"\n        </blockquote>\n        <p>When trucks hadn't transmitted data for 24+ hours, charts rendered completely blank. Users had no way to distinguish a malfunctioning vehicle from a routine weekend shutdown.</p>\n        <blockquote class=\"user-quote\">\n            \"When I check on Monday, everything looks empty, but I don't know if that's normal\"\n        </blockquote>\n        <p><strong>Business cost:</strong> Unnecessary maintenance dispatches, delayed responses to actual failures, and eroded trust in the monitoring tool.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-01+02.jpg\" alt=\"\" />\n          <figcaption>SoC chart — Empty layout: users cannot distinguish equipment failure from data gaps</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-05.jpg\" alt=\"\" />\n          <figcaption>ASDA case: inconsistent empty chart styles across 24h, 7-day, and 30-day views</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"scenario-2\">\n    <div class=\"span6\">\n        <h5>Scenario 2: Short Intervals — \"I can't see the forest for the trees\"</h5>\n        <blockquote class=\"user-quote\">\n            \"These tiny spikes make it hard to see the real usage patterns\"\n        </blockquote>\n        <p>Micro-operations lasting seconds or minutes created dense clusters of data points. In the 24-hour view, these were manageable. In the 7-day and 30-day views, they became impenetrable noise.</p>\n        <blockquote class=\"user-quote\">\n            \"I can see what's happening in the 24-hour view, but the weekly view is just noise\"\n        </blockquote>\n        <p><strong>Business cost:</strong> Fleet managers couldn't identify battery degradation trends — the primary reason they used the chart.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-08.jpg\" alt=\"\" />\n          <figcaption>Short intervals: micro-operations create visual noise obscuring meaningful trends</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-10.jpg\" alt=\"\" />\n          <figcaption>DHL case: short interval operations in 24h view vs. weekly view</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-11.jpg\" alt=\"\" />\n          <figcaption>DHL case: scale-dependent readability problems</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-12.jpg\" alt=\"\" />\n          <figcaption>Daher case: short intervals across different battery types</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"scenario-3\">\n    <div class=\"span6\">\n        <h5>Scenario 3: Long Intervals — \"I need to go back in time\"</h5>\n        <blockquote class=\"user-quote\">\n            \"I want to see the SoC changes on previous days easily\"\n        </blockquote>\n        <blockquote class=\"user-quote\">\n            \"The truck was left idling — I need to see what happened over the whole shift\"\n        </blockquote>\n        <p>Extended idle periods (Pin Mode) and the need for historical investigation had no intuitive navigation mechanism. Users were locked into preset time ranges with no way to compare patterns across days.</p>\n        <blockquote class=\"user-quote\">\n            \"I can't easily move between different days to compare patterns\"\n        </blockquote>\n        <p><strong>Business cost:</strong> Shift-level incident investigations took ~15 minutes of manual toggling between views.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-13.jpg\" alt=\"\" />\n          <figcaption>Long intervals: extended idle periods and historical data navigation challenges</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-15.jpg\" alt=\"\" />\n          <figcaption>DHL case: Pin Mode operation — driver left truck without logout</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-16.jpg\" alt=\"\" />\n          <figcaption>DHL case: truck left idling — extended period investigation needed</figcaption>\n        </figure>\n    </div>\n</section>\n\n<section class=\"row\" id=\"root-cause\">\n    <div class=\"span12\">\n        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">\n            <strong>Common root cause:</strong> The chart had no mechanism to communicate <em>why</em> data looked the way it did, nor to let users navigate it at the right level of granularity. It was a static readout — not an investigative tool.\n        </blockquote>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== DISCOVERY & RESEARCH ========== -->\n<section class=\"row\" id=\"discovery\">\n    <div class=\"span12\">\n        <h4>Discovery & Research</h4>\n        <p>I collaborated closely with the UX Researcher to bridge the gap created by company policy restricting direct user access. My approach maximized impact through <strong>proxy research and joint interpretation</strong>.</p>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Usability testing</h6>\n        <p>Co-authored test scripts with UX Researcher; analyzed raw results in 1:1 joint sessions.</p>\n        <h6>Support ticket analysis</h6>\n        <p>PO and Researcher consulted me because ticket patterns directly informed design decisions.</p>\n        <h6>Analytics audit</h6>\n        <p>UX Researcher shared usage data — fundamental input for identifying which views and time ranges failed.</p>\n    </div>\n    <div class=\"span6\">\n        <h6>Industrial ethnography</h6>\n        <p>Visited Jungheinrich manufacturing sites to observe back-office usage in high-pressure environments.</p>\n        <h6>Discovery workshops</h6>\n        <p>Card sorting + surveys across all 8 modules to isolate technical vs. usability friction.</p>\n        <h6>Competitive analysis</h6>\n        <p>Studied the forklift's built-in display interfaces to understand how operators read battery variables on-machine.</p>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span12\">\n        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">\n            <strong>The Unifying Insight:</strong> The three scenarios appeared independent, but the research revealed they shared a single architectural gap — the chart lacked an interaction layer between overview and detail. Users weren't asking for three separate fixes; they needed one investigative paradigm flexible enough to handle absence, noise, and depth.\n        </blockquote>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== DESIGN PROCESS ========== -->\n<section class=\"row\" id=\"design-process\">\n    <div class=\"span12\">\n        <h4>Design Process</h4>\n    </div>\n</section>\n\n<section class=\"row\" id=\"solution-1\">\n    <div class=\"span6\">\n        <h5>Problem 1: Empty Layout → Contextual In-Chart Messaging</h5>\n        <blockquote class=\"user-quote\">\n            \"I can't tell if the truck is broken or just not sending data\"\n        </blockquote>\n        <p><strong>This revealed:</strong> The system offered zero context during data gaps — silence was indistinguishable from failure.</p>\n        <p><strong>I architected:</strong> In-chart contextual messaging with time-range-aware copy.</p>\n        <ul class=\"challenge-list\">\n            <li>Designed specific messaging placed directly within the chart area — not as a toast or banner.</li>\n            <li>Standardized chart styling across all three time views (24h, 7 days, 30 days) to eliminate visual inconsistency.</li>\n            <li>Chart frame, axes, and legends remain visible during data gaps to preserve spatial orientation.</li>\n        </ul>\n        <p><strong>Why in-chart over toast/banner?</strong> Users in industrial settings have low technical literacy and zero tolerance for interface overhead. The message needed to exist where users were already looking.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-07-A.jpg\" alt=\"\" />\n          <figcaption>In-chart contextual message — 7-day view</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-07-B.jpg\" alt=\"\" />\n          <figcaption>In-chart contextual message — 30-day view</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"solution-2\">\n    <div class=\"span6\">\n        <h5>Problem 2: Short Intervals → The \"Waveform\" Brush-Zoom Tool</h5>\n        <blockquote class=\"user-quote\">\n            \"These tiny spikes make it hard to see the real usage patterns\"\n        </blockquote>\n        <p><strong>This revealed:</strong> The chart needed to support two opposing needs simultaneously — macro-trend visibility and micro-event investigation.</p>\n        <p><strong>I architected:</strong> An interactive brush-zoom tool inspired by <strong>audio waveform navigation in Ableton Live</strong>. The music-production paradigm mapped directly: waveform scrubbing = timeline scrubbing.</p>\n        <h6>Alternatives evaluated and discarded:</h6>\n        <ul class=\"challenge-list\">\n            <li><strong>User toggle filter:</strong> Added cognitive overhead for low-literacy users — violated zero-configuration principle.</li>\n            <li><strong>Smoothed line chart:</strong> Couldn't omit micro-changes without losing data accuracy.</li>\n            <li><strong>Averaged/approximated data:</strong> Unacceptable for fleet management — no approximations allowed for safety-critical decisions.</li>\n        </ul>\n        <p><strong>Engineering collaboration:</strong> I prototyped the component in Figma. Engineering sourced a matching implementation from <strong>Airbnb's open-source repository</strong>. The form factor was validated before a single line of production code.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-17.jpg\" alt=\"\" />\n          <figcaption>The interactive brush-zoom tool — default \"Last 24 hours\" range</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-18.jpg\" alt=\"\" />\n          <figcaption>Handle-based resizing with auto-scaling segmented control</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<section class=\"row\" id=\"solution-3\">\n    <div class=\"span6\">\n        <h5>Problem 3: Long Intervals → Unified Zoom Navigation</h5>\n        <blockquote class=\"user-quote\">\n            \"I can't easily move between different days to compare patterns\"\n        </blockquote>\n        <p><strong>This revealed:</strong> The preset time ranges (24h/7d/30d) were starting points, not investigation tools.</p>\n        <p><strong>I architected:</strong> Extended the brush-zoom to support historical navigation — the same interaction solving both problems.</p>\n        <ul class=\"challenge-list\">\n            <li>Horizontal timeline dragging to move through historical periods.</li>\n            <li>Dynamic range expansion via left handle drag.</li>\n            <li>Intelligent time scale switching based on selected range.</li>\n        </ul>\n        <p><strong>Design decision:</strong> Unifying short and long interval solutions into one component was a deliberate architecture choice — not a shortcut. One interaction to learn, one mental model to retain.</p>\n    </div>\n    <div class=\"span6 mt-3\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-19.jpg\" alt=\"\" />\n          <figcaption>Drag navigation: move through different time periods horizontally</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-20.jpg\" alt=\"\" />\n          <figcaption>Progressive detail management: zoom in for details, zoom out for patterns</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== COMPONENT ARCHITECTURE ========== -->\n<section class=\"row\" id=\"component-architecture\">\n    <div class=\"span6\">\n        <h5>Component Architecture</h5>\n        <h6>Design system classification</h6>\n        <p>Molecule (Atomic Design Level 02)</p>\n        <h6>Figma path</h6>\n        <p><code>02 Molecules / 22 Brush Zoom Tool / 22 Brush Zoom Tool</code></p>\n        <h6>Scope</h6>\n        <p>Built for SoC, designed as <strong>polyvalent</strong> — reusable for any X/Y axis chart across all 8 FMS modules.</p>\n    </div>\n    <div class=\"span6 mt-2\">\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-22.jpg\" alt=\"\" />\n          <figcaption>The Brush Zoom Tool— Figma component</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/assets/img/portfolio/soc/slide-24.jpg\" alt=\"\" />\n          <figcaption>The browser-rendered version in production</figcaption>\n        </figure>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== IMPACT & RESULTS ========== -->\n<section class=\"row\" id=\"impact-results\">\n    <div class=\"span12\">\n        <h4>Impact & Results</h4>\n        <h5>Validated Outcomes (Post-Launch User Testing)</h5>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Empty Layout — Before / After</h6>\n        <blockquote class=\"user-quote\">\n            Before: \"I can't tell if the truck is broken or just not sending data\"\n        </blockquote>\n        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">\n            After: \"I finally know if the truck is broken or if they just didn't use it over the weekend.\"\n        </blockquote>\n        <p>Fleet managers could immediately distinguish data transmission gaps from equipment failure — eliminating unnecessary maintenance dispatches.</p>\n    </div>\n    <div class=\"span6\">\n        <h6>Short Intervals — Before / After</h6>\n        <blockquote class=\"user-quote\">\n            Before: \"The weekly view is just noise\"\n        </blockquote>\n        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">\n            After: \"The zoom lets me see the big picture for my monthly reports, but I can dive into the minutes when something goes wrong.\"\n        </blockquote>\n        <p>Pattern recognition in 7-day and 30-day views became viable without manual micro-investigation.</p>\n    </div>\n</section>\n<section class=\"row\">\n    <div class=\"span6\">\n        <h6>Long Intervals</h6>\n        <ul class=\"challenge-list\">\n            <li>Historical navigation workflows reduced from <strong>~15 minutes</strong> of manual view-toggling to <strong>under 3 minutes</strong> with the brush-zoom.</li>\n            <li>Pin Mode investigation became a single continuous interaction instead of a multi-step process.</li>\n        </ul>\n    </div>\n    <div class=\"span6\">\n        <h6>Overall</h6>\n        <ul class=\"challenge-list\">\n            <li>Post-launch testing confirmed <strong>100% resolution</strong> of the original pain points.</li>\n            <li>The brush-zoom tested as <strong>highly intuitive</strong> — zero-configuration design validated.</li>\n            <li>Added the Brush Zoom Tool as a reusable <strong>Molecule</strong> to the design system.</li>\n        </ul>\n    </div>\n</section>\n\n<div class=\"slide-separator\"></div>\n\n<!-- ========== REFLECTION ========== -->\n<section class=\"row\" id=\"reflection\">\n    <div class=\"span12\">\n        <h4>Reflection</h4>\n        <p>Designing for the industrial back-office reinforced that <strong>the most powerful design systems borrow interaction paradigms from unexpected domains</strong>. The Ableton Live waveform metaphor wasn't technical cleverness — it was the most intuitive pattern for users who think in timelines and shifts.</p>\n        <p>The \"no direct user access\" constraint forced a discipline I carry forward: <strong>proxy research done right is not lesser research</strong>. Co-authoring scripts, joint interpretation sessions, and treating the UX Researcher as a true collaborator produced insights as sharp as any direct observation.</p>\n        <p>If I were to iterate, I'd push the comparative multi-vehicle view I proposed but was deferred due to CPU rendering constraints — enabling managers to benchmark battery health across an entire fleet in real-time.</p>\n    </div>\n</section>\n"
  },
  {
    "id": "08",
    "title": "Lecture App",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "/assets/img/portfolio/thumb/Lecture-THMB.jpg",
    "images": [
      {
        "name": "Lecture-01-FULL.jpg",
        "text": "Lecture iOS App"
      },
      {
        "name": "Lecture-02-FULL.jpg",
        "text": "Lecture iOS App"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "09",
    "title": "FIVB",
    "description": "",
    "tags": [
      "design",
      "ux_ui"
    ],
    "thumbnail": "assets/img/portfolio/thumb/FVB-THMB.jpg",
    "images": [
      {
        "name": "FVB-01-FULL.jpg",
        "text": "FIVB"
      },
      {
        "name": "FVB-02-FULL.jpg",
        "text": "FIVB"
      },
      {
        "name": "FVB-03-FULL.jpg",
        "text": "FIVB"
      },
      {
        "name": "FVB-04-FULL.jpg",
        "text": "FIVB"
      },
      {
        "name": "FVB-05-FULL.jpg",
        "text": "FIVB"
      },
      {
        "name": "FVB-06-FULL.jpg",
        "text": "FIVB"
      },
      {
        "name": "FVB-07-FULL.jpg",
        "text": "FIVB"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "10",
    "title": "iVoox Redesign",
    "description": "",
    "tags": [
      "design",
      "ux_ui"
    ],
    "thumbnail": "assets/img/portfolio/thumb/iVoox-01-THMB.jpg",
    "images": [
      {
        "name": "iVoox-01-FULL.jpg",
        "text": "iVoox iOS app redesign concept"
      },
      {
        "name": "iVoox-02-FULL.jpg",
        "text": "iVoox iOS app redesign concept"
      },
      {
        "name": "iVoox-03-FULL.jpg",
        "text": "iVoox iOS app redesign concept"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "11",
    "title": "Jewwe",
    "description": "",
    "tags": [
      "design",
      "ux_ui"
    ],
    "thumbnail": "assets/img/portfolio/thumb/jewwe-THMB.jpg",
    "images": [
      {
        "name": "jewwe-03-FULL.jpg",
        "text": "Jewwe Social App"
      },
      {
        "name": "jewwe-01-FULL.jpg",
        "text": "Jewwe Social App"
      },
      {
        "name": "jewwe-02-FULL.jpg",
        "text": "Jewwe Social App"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "12",
    "title": "Loft Publications",
    "description": "",
    "tags": [
      "layout",
      "design"
    ],
    "thumbnail": "assets/img/portfolio/thumb/loft-THMB.jpg",
    "images": [
      {
        "name": "loft-01-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-02-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-03-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-04-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-05-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-06-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-07-FULL.jpg",
        "text": "Loft"
      },
      {
        "name": "loft-08-FULL.jpg",
        "text": "Loft"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "13",
    "title": "This Is Hair Care",
    "description": "",
    "tags": [
      "design",
      "illustration",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/hair_care-THMB.jpg",
    "images": [
      {
        "name": "hair_care-01-FULL.jpg",
        "text": "This is Hair Care"
      },
      {
        "name": "hair_care-02-FULL.jpg",
        "text": "This is Hair Care"
      },
      {
        "name": "hair_care-03-FULL.jpg",
        "text": "This is Hair Care"
      },
      {
        "name": "hair_care-04-FULL.jpg",
        "text": "This is Hair Care"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "14",
    "title": "Trabe",
    "description": "",
    "tags": [
      "web",
      "ux_ui"
    ],
    "thumbnail": "assets/img/portfolio/thumb/trabe-THMB.jpg",
    "images": [
      {
        "name": "trabe-01-FULL.jpg",
        "text": "Trabe Site"
      },
      {
        "name": "trabe-02-FULL.jpg",
        "text": "Trabe Site"
      },
      {
        "name": "trabe-03-FULL.jpg",
        "text": "Trabe Site"
      },
      {
        "name": "trabe-04-FULL.jpg",
        "text": "Trabe Site"
      },
      {
        "name": "trabe-05-FULL.jpg",
        "text": "Trabe Site"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "15",
    "title": "C.R.A.C.K.",
    "description": "",
    "tags": [
      "design",
      "illustration",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/cocaine-THMB.jpg",
    "images": [
      {
        "name": "cocaine-01-FULL.jpg",
        "text": "Cocaine Rocks As Cooked Kind"
      },
      {
        "name": "cocaine-02-FULL.jpg",
        "text": "Cocaine Rocks As Cooked Kind"
      },
      {
        "name": "cocaine-03-FULL.jpg",
        "text": "Cocaine Rocks As Cooked Kind"
      },
      {
        "name": "cocaine-04-FULL.jpg",
        "text": "Cocaine Rocks As Cooked Kind"
      },
      {
        "name": "cocaine-05-FULL.jpg",
        "text": "Cocaine Rocks As Cooked Kind"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "16",
    "title": "Biodance",
    "description": "",
    "tags": [
      "design",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/biodance-THMB.jpg",
    "images": [
      {
        "name": "biodance-01-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-02-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-03-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-04-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-05-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-06-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-07-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      },
      {
        "name": "biodance-08-FULL.jpg",
        "text": "CRISOPA \"BIODANCE\""
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "17",
    "title": "Mechanik",
    "description": "",
    "tags": [
      "design",
      "illustration",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/mechanik-THMB.jpg",
    "images": [
      {
        "name": "mechanik-front-FULL.jpg",
        "text": "Mechanik"
      },
      {
        "name": "mechanik-inner-FULL.jpg",
        "text": "Mechanik"
      },
      {
        "name": "mechanik-outter-FULL.jpg",
        "text": "Mechanik"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "18",
    "title": "Reset",
    "description": "",
    "tags": [
      "design",
      "branding"
    ],
    "thumbnail": "assets/img/portfolio/thumb/reset-THMB.jpg",
    "images": [
      {
        "name": "reset-01-FULL.jpg",
        "text": "Reset"
      },
      {
        "name": "reset-02-FULL.jpg",
        "text": "Reset"
      },
      {
        "name": "reset-03-FULL.jpg",
        "text": "Reset"
      },
      {
        "name": "reset-04-FULL.jpg",
        "text": "Reset"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "19",
    "title": "Logos",
    "description": "",
    "tags": [
      "design",
      "branding"
    ],
    "thumbnail": "assets/img/portfolio/thumb/logo_reset-04-THMB.jpg",
    "images": [
      {
        "name": "logo_reset-01-FULL.jpg",
        "text": "Logo Reset"
      },
      {
        "name": "logo_reset-02-FULL.jpg",
        "text": "Logo Reset"
      },
      {
        "name": "logo_reset-04-FULL.jpg",
        "text": "Logo Reset"
      },
      {
        "name": "logo_fragua-01-FULL.jpg",
        "text": "Logo Fragua"
      },
      {
        "name": "logo_fragua-02-FULL.jpg",
        "text": "Logo Fragua"
      },
      {
        "name": "logo_bulbs-01-FULL.jpg",
        "text": "Logo Bulbs"
      },
      {
        "name": "logo_bulbs-02-FULL.jpg",
        "text": "Logo Bulbs"
      },
      {
        "name": "logo_holistic-FULL.jpg",
        "text": "Logo Holistic"
      },
      {
        "name": "logo_lofi-01-FULL.jpg",
        "text": "Logo Lo-fi"
      },
      {
        "name": "logo_lofi-02-FULL.jpg",
        "text": "Logo Lo-fi"
      },
      {
        "name": "logo_sofia-black-FULL.jpg",
        "text": "Logo Sofia"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "20",
    "title": "Mandrilizate",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/mandril-THMB.jpg",
    "images": [
      {
        "name": "mandril-01-FULL.jpg",
        "text": "Mandrilizate"
      },
      {
        "name": "mandril-02-FULL.jpg",
        "text": "Mandrilizate"
      },
      {
        "name": "mandril-03-FULL.jpg",
        "text": "Mandrilizate"
      },
      {
        "name": "mandril-04-FULL.jpg",
        "text": "Mandrilizate"
      },
      {
        "name": "mandril-05-FULL.jpg",
        "text": "Mandrilizate"
      },
      {
        "name": "mandril-06-FULL.jpg",
        "text": "Mandrilizate"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "21",
    "title": "Gianni Girrose",
    "description": "",
    "tags": [
      "design",
      "illustration",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/gianni-THMB.jpg",
    "images": [
      {
        "name": "gianni-01-FULL.jpg",
        "text": "Gianni Girrose"
      },
      {
        "name": "gianni-02-FULL.jpg",
        "text": "Gianni Girrose"
      },
      {
        "name": "gianni-03-FULL.jpg",
        "text": "Gianni Girrose"
      },
      {
        "name": "gianni-04-FULL.jpg",
        "text": "Gianni Girrose"
      },
      {
        "name": "gianni-05-FULL.jpg",
        "text": "Gianni Girrose"
      },
      {
        "name": "gianni-06-FULL.jpg",
        "text": "Gianni Girrose"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "22",
    "title": "Caballo Loco",
    "description": "",
    "tags": [
      "design",
      "illustration",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/caballo_loco-first-THMB.jpg",
    "images": [
      {
        "name": "caballo_loco-first-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "caballo_loco-front-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "caballo_loco-inner-FULL.jpg",
        "text": "Grams"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "23",
    "title": "Other (Wordly)",
    "description": "",
    "tags": [
      "design",
      "illustration",
      "layout"
    ],
    "thumbnail": "assets/img/portfolio/thumb/other-THMB.jpg",
    "images": [
      {
        "name": "other-condres-01-FULL.jpg",
        "text": "Condres Artwork"
      },
      {
        "name": "other-julardo-02-FULL.jpg",
        "text": "Lo-Fi Poster"
      },
      {
        "name": "other-tamimarket-03-FULL.jpg",
        "text": "Tamimarket"
      },
      {
        "name": "other-Tarta-04-FULL.jpg",
        "text": "Lo-Fi Poster"
      },
      {
        "name": "other-unsorted-05-FULL.jpg",
        "text": "Other Stuff"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "24",
    "title": "Rinko",
    "description": "",
    "tags": [
      "design"
    ],
    "thumbnail": "assets/img/portfolio/thumb/rinko_bass-THMB.jpg",
    "images": [
      {
        "name": "rinko_bass-05-FULL.jpg",
        "text": "Rinko"
      },
      {
        "name": "rinko_bass-02-FULL.jpg",
        "text": "Rinko"
      },
      {
        "name": "rinko_bass-03-FULL.jpg",
        "text": "Rinko"
      },
      {
        "name": "rinko_bass-04-FULL.jpg",
        "text": "Rinko"
      },
      {
        "name": "rinko_bass-05-FULL.jpg",
        "text": "Rinko"
      },
      {
        "name": "rinko_bass-06-FULL.jpg",
        "text": "Rinko"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "25",
    "title": "Hyper Simbiosis",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/hyper-THMB.jpg",
    "images": [
      {
        "name": "hyper-01-FULL.jpg",
        "text": "Hyper Simbiosis Fest"
      },
      {
        "name": "hyper-02-FULL.jpg",
        "text": "Hyper Simbiosis Fest"
      },
      {
        "name": "hyper-03-FULL.jpg",
        "text": "Hyper Simbiosis Fest"
      },
      {
        "name": "hyper-04-FULL.jpg",
        "text": "Hyper Simbiosis Fest"
      },
      {
        "name": "hyper-05-FULL.jpg",
        "text": "Hyper Simbiosis Fest"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "26",
    "title": "Before",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/before-THMB.jpg",
    "images": [
      {
        "name": "before-01-FULL.jpg",
        "text": "Before"
      },
      {
        "name": "before-02-FULL.jpg",
        "text": "Before"
      },
      {
        "name": "before-03-FULL.jpg",
        "text": "Before"
      },
      {
        "name": "before-04-FULL.jpg",
        "text": "Before"
      },
      {
        "name": "before-05-FULL.jpg",
        "text": "Before"
      },
      {
        "name": "before-06-FULL.jpg",
        "text": "Before"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "27",
    "title": "Grams",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/grams-THMB.jpg",
    "images": [
      {
        "name": "grams-01-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-02-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-03-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-04-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-05-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-06-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-07-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-08-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-09-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-10-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-11-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-12-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-13-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-14-FULL.jpg",
        "text": "Grams"
      },
      {
        "name": "grams-15-FULL.jpg",
        "text": "Grams"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "28",
    "title": "Huevos De Oro",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/huevos-THMB.jpg",
    "images": [
      {
        "name": "huevos-01-FULL.jpg",
        "text": "Huevos de Oro"
      },
      {
        "name": "huevos-02-FULL.jpg",
        "text": "Huevos de Oro"
      },
      {
        "name": "huevos-03-FULL.jpg",
        "text": "Huevos de Oro"
      },
      {
        "name": "huevos-04-FULL.jpg",
        "text": "Huevos de Oro"
      },
      {
        "name": "huevos-05-FULL.jpg",
        "text": "Huevos de Oro"
      },
      {
        "name": "huevos-06-FULL.jpg",
        "text": "Huevos de Oro"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "29",
    "title": "Posters",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/poster-destroy-THMB.jpg",
    "images": [
      {
        "name": "poster-01-FULL.jpg",
        "text": "Destroy Semana Santa"
      },
      {
        "name": "poster-02-FULL.jpg",
        "text": "Holistic Party"
      },
      {
        "name": "poster-03-FULL.jpg",
        "text": "Lo-Fi You Black"
      },
      {
        "name": "poster-04-FULL.jpg",
        "text": "Lo-Fi You White"
      },
      {
        "name": "poster-05-FULL.jpg",
        "text": "Penyarrubia On Fire"
      },
      {
        "name": "poster-06-FULL.jpg",
        "text": "Ramblona"
      },
      {
        "name": "poster-07-FULL.jpg",
        "text": "Selfie"
      },
      {
        "name": "poster-08-FULL.jpg",
        "text": "Socorro"
      },
      {
        "name": "poster-09-FULL.jpg",
        "text": "Bday"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "30",
    "title": "Abrete De Orejas",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/orejas-THMB.jpg",
    "images": [
      {
        "name": "orejas-01-FULL.jpg",
        "text": "ABRETE DE OREJAS"
      },
      {
        "name": "orejas-02-FULL.jpg",
        "text": "ABRETE DE OREJAS"
      },
      {
        "name": "orejas-03-FULL.jpg",
        "text": "ABRETE DE OREJAS"
      },
      {
        "name": "orejas-04-FULL.jpg",
        "text": "ABRETE DE OREJAS"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "31",
    "title": "Esplendor",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/esplendor-THMB.jpg",
    "images": [
      {
        "name": "esplendor-01-FULL.jpg",
        "text": "Esplendor"
      },
      {
        "name": "esplendor-02-FULL.jpg",
        "text": "Esplendor"
      },
      {
        "name": "esplendor-03-FULL.jpg",
        "text": "Esplendor"
      },
      {
        "name": "esplendor-04-FULL.jpg",
        "text": "Esplendor"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "32",
    "title": "Sr Fulano",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/sr_fulano-THMB.jpg",
    "images": [
      {
        "name": "sr_fulano-01-FULL.jpg",
        "text": "SR. FULANO"
      },
      {
        "name": "sr_fulano-02-FULL.jpg",
        "text": "SR. FULANO"
      },
      {
        "name": "sr_fulano-03-FULL.jpg",
        "text": "SR. FULANO"
      },
      {
        "name": "sr_fulano-04-FULL.jpg",
        "text": "SR. FULANO"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "33",
    "title": "Gimme Indie Rock",
    "description": "",
    "tags": [
      "design",
      "illustration"
    ],
    "thumbnail": "assets/img/portfolio/thumb/gimme-THMB.jpg",
    "images": [
      {
        "name": "gimme-01-FULL.jpg",
        "text": "Gimme Indie Rock"
      },
      {
        "name": "gimme-02-FULL.jpg",
        "text": "Gimme Indie Rock"
      },
      {
        "name": "gimme-03-FULL.jpg",
        "text": "Gimme Indie Rock"
      },
      {
        "name": "gimme-04-FULL.jpg",
        "text": "Gimme Indie Rock"
      },
      {
        "name": "gimme-05-FULL.jpg",
        "text": "Gimme Indie Rock"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  },
  {
    "id": "34",
    "title": "Jeanba",
    "description": "",
    "tags": [
      "ux_ui",
      "web"
    ],
    "thumbnail": "assets/img/portfolio/thumb/jeanba-THMB.jpg",
    "images": [
      {
        "name": "jeanba-01-FULL.jpg",
        "text": "Jeanba Site"
      },
      {
        "name": "jeanba-02-FULL.jpg",
        "text": "Jeanba Site"
      },
      {
        "name": "jeanba-03-FULL.jpg",
        "text": "Jeanba Site"
      },
      {
        "name": "jeanba-04-FULL.jpg",
        "text": "Jeanba Site"
      },
      {
        "name": "jeanba-05-FULL.jpg",
        "text": "Jeanba Site"
      },
      {
        "name": "jeanba-06-FULL.jpg",
        "text": "Jeanba Site"
      }
    ],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ""
  }
];