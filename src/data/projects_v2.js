export const projects_v2 = [
{
    "id": "01",
    "slug": "fms-battery-monitoring",
    "title": "FMS: Battery Monitoring (SoC)",
    "category": "Product Design / IoT / SaaS",
    "client": "Jungheinrich Digital Solutions",
    "date": "2023 - 2024",
    "description": "Architecting a unified IoT battery-monitoring visualization for enterprise fleet management.",
    "thumbnail":  "assets/img/portfolio/thumb/07-soc-00-THMB.jpg",
    "featuredImage":  "assets/img/portfolio/full/07-soc-00-FULL.jpg",
    "images": [
      {
        "name": "07-soc-00-FULL.jpg",
        "text": "SoC Battery Monitoring"
      }
    ],
    "technologies": ["React", "Figma", "Design Systems", "IoT"],
    "imagePath":  "assets/img/portfolio/full/",
    "tldr": {
        "problem": "The battery chart failed in 3 critical scenarios — empty data indistinguishable from failure, micro-operations obscuring trends, and no historical navigation for incident investigation.",
        "solution": "Brush-zoom tool inspired by Ableton Live's waveform navigation + contextual in-chart messaging. One component solves all 3 scenarios.",
        "result": "100% resolution of pain points in post-launch testing · Incident investigation: 15 min → 3 min · Reusable molecule across all 8 FMS modules.",
        "client": "Jungheinrich Digital Solutions",
        "role": "Design System Owner",
        "sector": "Enterprise IoT · B2B SaaS",
        "year": "2023 – 2024"
    },
    "content": `<!-- ========== HERO STATEMENT ========== -->
<section class=\"row\" id=\"hero-statement\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;\">
            Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS — eliminating data-interpretation ambiguity across 3 critical scenarios and shipping an interactive brush-zoom tool for ~12 enterprise clients including DHL, Amazon, and LIDL.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== CONTEXT & SCALE ========== -->
<section class=\"row\" id=\"context-scale\">
    <div class=\"span12\">
        <h4>Context & Scale</h4>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Product</h5>
        <p><strong>Fleet Management System (FMS)</strong> — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>
        <h5>My Role</h5>
        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Personally owned 3 modules (Maintenance, SoC, Service Reports) plus hands-on design work across the rest of the FMS suite. Sole owner of the design system serving ~40 engineers.</p>
    </div>
    <div class=\"span6\">
        <h5>Team</h5>
        <p>Core squad of 4 (UX Researcher, PO, Head of Design, myself). ~5 engineers per module, 2 dedicated frontend component developers.</p>
        <h5>Customers</h5>
        <p>~12 enterprise clients (DHL, Amazon, LIDL) + hundreds of SMEs. Thousands of vehicles across multi-warehouse environments.</p>
        <h5>Tech Stack</h5>
        <p>React.js · Storybook · Jira-driven DesignOps · Figma (led full migration from Sketch).</p>
        <h5>Timeline</h5>
        <p>2023–2024</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== THE CHALLENGE ========== -->
<section class=\"row\" id=\"the-challenge\">
    <div class=\"span12\">
        <h4>The Challenge</h4>
        <p>The SoC (State of Charge) chart — the core visualization of the Battery Monitoring module — consistently generated confusion and support tickets. Fleet managers needed real-time battery visibility to prevent downtime, but the chart was failing them in three distinct ways.</p>
    </div>
</section>

<section class=\"row\" id=\"scenario-1\">
    <div class=\"span6\">
        <h5>Scenario 1: Empty Layout — \"Is it broken or just silent?\"</h5>
        <blockquote class=\"user-quote\">
            \"I can't tell if the truck is broken or just not sending data\"
        </blockquote>
        <p>When trucks hadn't transmitted data for 24+ hours, charts rendered completely blank. Users had no way to distinguish a malfunctioning vehicle from a routine weekend shutdown.</p>
        <blockquote class=\"user-quote\">
            \"When I check on Monday, everything looks empty, but I don't know if that's normal\"
        </blockquote>
        <p><strong>Business cost:</strong> Unnecessary maintenance dispatches, delayed responses to actual failures, and eroded trust in the monitoring tool.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-01+02.jpg\" alt=\"\" />
          <figcaption>SoC chart — Empty layout: users cannot distinguish equipment failure from data gaps</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-05.jpg\" alt=\"\" />
          <figcaption>ASDA case: inconsistent empty chart styles across 24h, 7-day, and 30-day views</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"scenario-2\">
    <div class=\"span6\">
        <h5>Scenario 2: Short Intervals — \"I can't see the forest for the trees\"</h5>
        <blockquote class=\"user-quote\">
            \"These tiny spikes make it hard to see the real usage patterns\"
        </blockquote>
        <p>Micro-operations lasting seconds or minutes created dense clusters of data points. In the 24-hour view, these were manageable. In the 7-day and 30-day views, they became impenetrable noise.</p>
        <blockquote class=\"user-quote\">
            \"I can see what's happening in the 24-hour view, but the weekly view is just noise\"
        </blockquote>
        <p><strong>Business cost:</strong> Fleet managers couldn't identify battery degradation trends — the primary reason they used the chart.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-08.jpg\" alt=\"\" />
          <figcaption>Short intervals: micro-operations create visual noise obscuring meaningful trends</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-10.jpg\" alt=\"\" />
          <figcaption>DHL case: short interval operations in 24h view vs. weekly view</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-11.jpg\" alt=\"\" />
          <figcaption>DHL case: scale-dependent readability problems</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-12.jpg\" alt=\"\" />
          <figcaption>Daher case: short intervals across different battery types</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"scenario-3\">
    <div class=\"span6\">
        <h5>Scenario 3: Long Intervals — \"I need to go back in time\"</h5>
        <blockquote class=\"user-quote\">
            \"I want to see the SoC changes on previous days easily\"
        </blockquote>
        <blockquote class=\"user-quote\">
            \"The truck was left idling — I need to see what happened over the whole shift\"
        </blockquote>
        <p>Extended idle periods (Pin Mode) and the need for historical investigation had no intuitive navigation mechanism. Users were locked into preset time ranges with no way to compare patterns across days.</p>
        <blockquote class=\"user-quote\">
            \"I can't easily move between different days to compare patterns\"
        </blockquote>
        <p><strong>Business cost:</strong> Shift-level incident investigations took ~15 minutes of manual toggling between views.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-13.jpg\" alt=\"\" />
          <figcaption>Long intervals: extended idle periods and historical data navigation challenges</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-15.jpg\" alt=\"\" />
          <figcaption>DHL case: Pin Mode operation — driver left truck without logout</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-16.jpg\" alt=\"\" />
          <figcaption>DHL case: truck left idling — extended period investigation needed</figcaption>
        </figure>
    </div>
</section>

<section class=\"row\" id=\"root-cause\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">
            <strong>Common root cause:</strong> The chart had no mechanism to communicate <em>why</em> data looked the way it did, nor to let users navigate it at the right level of granularity. It was a static readout — not an investigative tool.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== DISCOVERY & RESEARCH ========== -->
<section class=\"row\" id=\"discovery\">
    <div class=\"span12\">
        <h4>Discovery & Research</h4>
        <p>I collaborated closely with the UX Researcher to bridge the gap created by company policy restricting direct user access. My approach maximized impact through <strong>proxy research and joint interpretation</strong>.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Usability testing</h5>
        <p>Co-authored test scripts with UX Researcher; analyzed raw results in 1:1 joint sessions.</p>
        <h5>Support ticket analysis</h5>
        <p>PO and Researcher consulted me because ticket patterns directly informed design decisions.</p>
        <h5>Analytics audit</h5>
        <p>UX Researcher shared usage data — fundamental input for identifying which views and time ranges failed.</p>
    </div>
    <div class=\"span6\">
        <h5>Industrial ethnography</h5>
        <p>Visited Jungheinrich manufacturing sites to observe back-office usage in high-pressure environments.</p>
        <h5>Discovery workshops</h5>
        <p>Card sorting + surveys across all 8 modules to isolate technical vs. usability friction.</p>
        <h5>Competitive analysis</h5>
        <p>Studied the forklift's built-in display interfaces to understand how operators read battery variables on-machine.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">
            <strong>The Unifying Insight:</strong> The three scenarios appeared independent, but the research revealed they shared a single architectural gap — the chart lacked an interaction layer between overview and detail. Users weren't asking for three separate fixes; they needed one investigative paradigm flexible enough to handle absence, noise, and depth.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== DESIGN PROCESS ========== -->
<section class=\"row\" id=\"design-process\">
    <div class=\"span12\">
        <h4>Design Process</h4>
    </div>
</section>

<section class=\"row\" id=\"solution-1\">
    <div class=\"span6\">
        <h5>Problem 1: Empty Layout → Contextual In-Chart Messaging</h5>
        <blockquote class=\"user-quote\">
            \"I can't tell if the truck is broken or just not sending data\"
        </blockquote>
        <p><strong>This revealed:</strong> The system offered zero context during data gaps — silence was indistinguishable from failure.</p>
        <p><strong>I architected:</strong> In-chart contextual messaging with time-range-aware copy.</p>
        <ul class=\"challenge-list\">
            <li>Designed specific messaging placed directly within the chart area — not as a toast or banner.</li>
            <li>Standardized chart styling across all three time views (24h, 7 days, 30 days) to eliminate visual inconsistency.</li>
            <li>Chart frame, axes, and legends remain visible during data gaps to preserve spatial orientation.</li>
        </ul>
        <p><strong>Why in-chart over toast/banner?</strong> Users in industrial settings have low technical literacy and zero tolerance for interface overhead. The message needed to exist where users were already looking.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-07-A.jpg\" alt=\"\" />
          <figcaption>In-chart contextual message — 7-day view</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-07-B.jpg\" alt=\"\" />
          <figcaption>In-chart contextual message — 30-day view</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"solution-2\">
    <div class=\"span6\">
        <h5>Problem 2: Short Intervals → The \"Waveform\" Brush-Zoom Tool</h5>
        <blockquote class=\"user-quote\">
            \"These tiny spikes make it hard to see the real usage patterns\"
        </blockquote>
        <p><strong>This revealed:</strong> The chart needed to support two opposing needs simultaneously — macro-trend visibility and micro-event investigation.</p>
        <p><strong>I architected:</strong> An interactive brush-zoom tool inspired by <strong>audio waveform navigation in Ableton Live</strong>. The music-production paradigm mapped directly: waveform scrubbing = timeline scrubbing.</p>
        <h5>Alternatives evaluated and discarded:</h5>
        <ul class=\"challenge-list\">
            <li><strong>User toggle filter:</strong> Added cognitive overhead for low-literacy users — violated zero-configuration principle.</li>
            <li><strong>Smoothed line chart:</strong> Couldn't omit micro-changes without losing data accuracy.</li>
            <li><strong>Averaged/approximated data:</strong> Unacceptable for fleet management — no approximations allowed for safety-critical decisions.</li>
        </ul>
        <p><strong>Engineering collaboration:</strong> I prototyped the component in Figma. Engineering sourced a matching implementation from <strong>Airbnb's open-source repository</strong>. The form factor was validated before a single line of production code.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-17.jpg\" alt=\"\" />
          <figcaption>The interactive brush-zoom tool — default \"Last 24 hours\" range</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-18.jpg\" alt=\"\" />
          <figcaption>Handle-based resizing with auto-scaling segmented control</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"solution-3\">
    <div class=\"span6\">
        <h5>Problem 3: Long Intervals → Unified Zoom Navigation</h5>
        <blockquote class=\"user-quote\">
            \"I can't easily move between different days to compare patterns\"
        </blockquote>
        <p><strong>This revealed:</strong> The preset time ranges (24h/7d/30d) were starting points, not investigation tools.</p>
        <p><strong>I architected:</strong> Extended the brush-zoom to support historical navigation — the same interaction solving both problems.</p>
        <ul class=\"challenge-list\">
            <li>Horizontal timeline dragging to move through historical periods.</li>
            <li>Dynamic range expansion via left handle drag.</li>
            <li>Intelligent time scale switching based on selected range.</li>
        </ul>
        <p><strong>Design decision:</strong> Unifying short and long interval solutions into one component was a deliberate architecture choice — not a shortcut. One interaction to learn, one mental model to retain.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-19.jpg\" alt=\"\" />
          <figcaption>Drag navigation: move through different time periods horizontally</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-20.jpg\" alt=\"\" />
          <figcaption>Progressive detail management: zoom in for details, zoom out for patterns</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== COMPONENT ARCHITECTURE ========== -->
<section class=\"row\" id=\"component-architecture\">
    <div class=\"span6\">
        <h5>Component Architecture</h5>
        <h5>Design system classification</h5>
        <p>Molecule (Atomic Design Level 02)</p>
        <h5>Figma path</h5>
        <p><code>02 Molecules / 22 Brush Zoom Tool / 22 Brush Zoom Tool</code></p>
        <h5>Scope</h5>
        <p>Built for SoC, designed as <strong>polyvalent</strong> — reusable for any X/Y axis chart across all 8 FMS modules.</p>
    </div>
    <div class=\"span6 mt-2\">
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-22.jpg\" alt=\"\" />
          <figcaption>The Brush Zoom Tool— Figma component</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-24.jpg\" alt=\"\" />
          <figcaption>The browser-rendered version in production</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== SOLUTION & IMPLEMENTATION ========== -->
<section class=\"row\" id=\"solution-implementation\">
    <div class=\"span12\">
        <h4>Solution & Implementation</h4>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>1. Contextual Empty State Communication</h5>
        <ul class=\"challenge-list\">
            <li>Time-range-aware messaging adapts to 24h, 7-day, and 30-day views</li>
            <li>Unified coordinate system, grid, and legends persist during data gaps</li>
            <li>Standardized color coding: 0–39% / 40–79% / 80–100%</li>
        </ul>
        <h5>2. Interactive Brush-Zoom Molecule</h5>
        <ul class=\"challenge-list\">
            <li>Handle controls (grip dots) and selection areas built with Figma Auto Layout</li>
            <li>Responsive container behavior (Hug width: 830×80, 310×80, 443×80, 536×80 px)</li>
            <li>Auto-scaling segmented control updates based on zoom range</li>
        </ul>
    </div>
    <div class=\"span6\">
        <h5>3. DesignOps & Handoff</h5>
        <ul class=\"challenge-list\">
            <li>Personally reviewed CSS properties of every component in Storybook, filing Jira tickets for implementation gaps</li>
            <li>Migrated the <strong>entire FMS design system from Sketch to Figma</strong> with full Auto Layout — not just this component</li>
            <li>Lean UX approach: contacted both frontend and backend teams <em>before</em> designing to validate technical feasibility, eliminating design-engineering friction</li>
        </ul>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== IMPACT & RESULTS ========== -->
<section class=\"row\" id=\"impact-results\">
    <div class=\"span12\">
        <h4>Impact & Results</h4>
        <h5>Validated Outcomes (Post-Launch User Testing)</h5>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Empty Layout — Before / After</h5>
        <blockquote class=\"user-quote\">
            Before: \"I can't tell if the truck is broken or just not sending data\"
        </blockquote>
        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">
            After: \"I finally know if the truck is broken or if they just didn't use it over the weekend.\"
        </blockquote>
        <p>Fleet managers could immediately distinguish data transmission gaps from equipment failure — eliminating unnecessary maintenance dispatches.</p>
    </div>
    <div class=\"span6\">
        <h5>Short Intervals — Before / After</h5>
        <blockquote class=\"user-quote\">
            Before: \"The weekly view is just noise\"
        </blockquote>
        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">
            After: \"The zoom lets me see the big picture for my monthly reports, but I can dive into the minutes when something goes wrong.\"
        </blockquote>
        <p>Pattern recognition in 7-day and 30-day views became viable without manual micro-investigation.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Long Intervals</h5>
        <ul class=\"challenge-list\">
            <li>Historical navigation workflows reduced from <strong>~15 minutes</strong> of manual view-toggling to <strong>under 3 minutes</strong> with the brush-zoom.</li>
            <li>Pin Mode investigation became a single continuous interaction instead of a multi-step process.</li>
        </ul>
    </div>
    <div class=\"span6\">
        <h5>Overall</h5>
        <ul class=\"challenge-list\">
            <li>Post-launch testing confirmed <strong>100% resolution</strong> of the original pain points.</li>
            <li>The brush-zoom tested as <strong>highly intuitive</strong> — zero-configuration design validated.</li>
            <li>Added the Brush Zoom Tool as a reusable <strong>Molecule</strong> to the design system.</li>
        </ul>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== REFLECTION ========== -->
<section class=\"row\" id=\"reflection\">
    <div class=\"span12\">
        <h4>Reflection</h4>
        <p>Designing for the industrial back-office reinforced that <strong>the most powerful design systems borrow interaction paradigms from unexpected domains</strong>. The Ableton Live waveform metaphor wasn't technical cleverness — it was the most intuitive pattern for users who think in timelines and shifts.</p>
        <p>The \"no direct user access\" constraint forced a discipline I carry forward: <strong>proxy research done right is not lesser research</strong>. Co-authoring scripts, joint interpretation sessions, and treating the UX Researcher as a true collaborator produced insights as sharp as any direct observation.</p>
        <p>If I were to iterate, I'd push the comparative multi-vehicle view I proposed but was deferred due to CPU rendering constraints — enabling managers to benchmark battery health across an entire fleet in real-time.
    </div>
</section>\n`
  },
  {
    "id": "03",
    "slug": "fms-maintenance-management",
    "title": "FMS: Maintenance Management",
    "category": "Product Design / SaaS / B2B",
    "client": "Jungheinrich Digital Solutions",
    "date": "2022 - 2023",
    "description": "Unifying service planning and compliance verification into a high-density calendar workspace.",
    "thumbnail":  "assets/img/portfolio/thumb/08-maintenance-00-THMB.jpg",
    "featuredImage":  "assets/img/portfolio/full/08-maintenance-00-FULL.jpg",
    "images": [
      { "name": "08-maintenance-00-FULL.jpg", "text": "Maintenance Management" }
    ],
    "technologies": ["React", "Figma", "Data Visualization", "User Research"],
    "imagePath":  "assets/img/portfolio/full/",
    "tldr": {
        "problem": "Fleet operators had no unified view of service schedules — maintenance planning, compliance verification, and repair requests lived in separate flows, forcing manual cross-checking across months of service data.",
        "solution": "A calendar-grid maintenance workspace with 6/12-month scope toggles, a 4-state service status system (icon + color, never color alone), forecast transparency for upcoming months, and a detail drawer that launches Call4Service repairs directly.",
        "result": "Shipped in production across the FMS fleet · Service planning, compliance checks, and repair initiation unified in one interface · 15 documented interaction states (B-01–B-15).",
        "client": "Jungheinrich Digital Solutions",
        "role": "Design System Owner",
        "sector": "Enterprise IoT · B2B SaaS",
        "year": "2022 – 2023"
    },
    "content": `<!-- ========== HERO STATEMENT ========== -->
<section class=\"row\" id=\"hero-statement\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;\">
            Architected a calendar-grid maintenance workspace for Jungheinrich's Enterprise FMS — unifying service planning, compliance verification, and repair initiation into a single interface for ~12 enterprise clients including DHL, Amazon, and LIDL.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== CONTEXT & SCALE ========== -->
<section class=\"row\" id=\"context-scale\">
    <div class=\"span12\">
        <h4>Context & Scale</h4>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Product</h5>
        <p><strong>Fleet Management System (FMS)</strong> — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>
        <h5>My Role</h5>
        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Personally owned 3 modules (Maintenance, SoC, Service Reports) plus hands-on design work across the rest of the FMS suite. Sole owner of the design system serving ~40 engineers.</p>
    </div>
    <div class=\"span6\">
        <h5>Team</h5>
        <p>Core squad of 4 (UX Researcher, PO, Head of Design, myself). ~5 engineers per module, 2 dedicated frontend component developers.</p>
        <h5>Customers</h5>
        <p>~12 enterprise clients (DHL, Amazon, LIDL) + hundreds of SMEs. Thousands of vehicles across multi-warehouse environments.</p>
        <h5>Tech Stack</h5>
        <p>React.js · Storybook · Jira-driven DesignOps · Figma (led full migration from Sketch).</p>
        <h5>Timeline</h5>
        <p>2022–2023</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== THE CHALLENGE ========== -->
<section class=\"row\" id=\"the-challenge\">
    <div class=\"span12\">
        <h4>The Challenge</h4>
        <p>The Maintenance Management module — the operational backbone for service planning across the FMS — was fragmenting critical workflows. Fleet managers and service coordinators needed a unified workspace to plan upcoming services, verify compliance, and initiate repairs, but the existing tools forced them through multiple disconnected systems.</p>
    </div>
</section>

<section class=\"row\" id=\"scenario-1\">
    <div class=\"span6\">
        <h5>Scenario 1: Scattered Visibility — \"Where is everything?\"</h5>
        <blockquote class=\"user-quote\">
            \"Where is everything?\"
        </blockquote>
        <p>Maintenance data resided across multiple systems — safety records, parts inventories, service logs — forcing fleet managers to context-switch between tools to assemble a complete picture of their fleet's service status.</p>
        <p><strong>Business cost:</strong> Compliance reports required 3+ hours of manual data aggregation across systems, with high error rates due to copy-paste workflows.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-01.jpg\" alt=\"\" />
          <figcaption>Calendar-grid overview — 6-month default view showing equipment rows and service tiles</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-02.jpg\" alt=\"\" />
          <figcaption>Forecast tooltip and legend: users couldn't distinguish forecast from confirmed dates</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"scenario-2\">
    <div class=\"span6\">
        <h5>Scenario 2: Opaque Forecasting — \"Can I trust these dates?\"</h5>
        <blockquote class=\"user-quote\">
            \"The forecasting logic isn't clear to me.\"
        </blockquote>
        <p>Future service dates were auto-calculated from planned dates and service intervals, but the derivation logic was completely hidden. Users saw projected dates without understanding how the system arrived at them — reducing confidence in automated predictions.</p>
        <p><strong>Business cost:</strong> Low trust in forecasting led to parallel manual tracking in spreadsheets, duplicating effort and creating conflicting sources of truth.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-03.jpg\" alt=\"\" />
          <figcaption>12-month scope toggle: dense tile rendering obscuring individual service details</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-04.jpg\" alt=\"\" />
          <figcaption>Density toggle controls: Comfortable (6-month) vs. Compact (12-month) modes</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"scenario-3\">
    <div class=\"span6\">
        <h5>Scenario 3: Action Barriers — \"I found it, now what?\"</h5>
        <blockquote class=\"user-quote\">
            \"Creating a repair order means switching to another system entirely.\"
        </blockquote>
        <p>Once fleet managers identified a service need, initiating repair or interval maintenance required navigating to external tools — breaking the investigative flow and adding friction to time-critical decisions.</p>
        <p><strong>Business cost:</strong> Average time from identification to action initiation was ~12 minutes per service — multiplied across dozens of daily actions, this added hours of lost productivity.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-08.jpg\" alt=\"\" />
          <figcaption>Details drawer: service metadata, equipment info, and direct action CTAs</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-09.jpg\" alt=\"\" />
          <figcaption>Call4Service integration — repair service tab with pre-populated fields</figcaption>
        </figure>
    </div>
</section>

<section class=\"row\" id=\"root-cause\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">
            <strong>Common root cause:</strong> Maintenance workflows were distributed across disconnected systems with no shared interface. Users weren't asking for better individual tools — they needed one <em>cohesive workspace</em> that unified visibility, investigation, and action within a single interaction surface.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== DISCOVERY & RESEARCH ========== -->
<section class=\"row\" id=\"discovery\">
    <div class=\"span12\">
        <h4>Discovery & Research</h4>
        <p>Following the same proxy research infrastructure established across FMS modules, I collaborated closely with the UX Researcher to extract maintenance-specific insights from users we couldn't access directly.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Usability testing</h5>
        <p>Co-authored test scripts targeting calendar-grid comprehension and tile-status recognition; analyzed raw results in 1:1 joint sessions with the UX Researcher.</p>
        <h5>Support ticket analysis</h5>
        <p>Categorized recurring tickets into visibility, navigation, and action-barrier clusters — each mapping directly to a design intervention.</p>
        <h5>Stakeholder interviews</h5>
        <p>Conducted sessions with POs from adjacent modules (Fleet Administration, Access Control) to identify shared patterns and reusable components.</p>
    </div>
    <div class=\"span6\">
        <h5>Industrial ethnography</h5>
        <p>Observed back-office maintenance coordinators at Jungheinrich client sites managing multi-shift service schedules under time pressure.</p>
        <h5>Workflow mapping</h5>
        <p>Documented the complete maintenance lifecycle — from forecast generation through service completion — identifying the seven context switches that fragmented the workflow.</p>
        <h5>Competitive analysis</h5>
        <p>Evaluated calendar-grid patterns across enterprise resource planning tools (SAP PM, IBM Maximo) to benchmark information density expectations.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">
            <strong>The Unifying Insight:</strong> The five pain points weren't isolated usability issues — they were symptoms of a missing <em>operational layer</em>. Users needed a single interface that functioned simultaneously as a planning calendar, a compliance dashboard, and an action launcher. The design challenge was architectural: how to compress three distinct workflows into one surface without overloading any single view.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== DESIGN PROCESS ========== -->
<section class=\"row\" id=\"design-process\">
    <div class=\"span12\">
        <h4>Design Process</h4>
    </div>
</section>

<section class=\"row\" id=\"solution-1\">
    <div class=\"span6\">
        <h5>Problem 1: Scattered Visibility → Unified Calendar Grid</h5>
        <blockquote class=\"user-quote\">
            \"Maintenance data lives in three different places — I never know if I'm looking at the latest version.\"
        </blockquote>
        <p><strong>This revealed:</strong> The system had no canonical surface for maintenance state. Truth was fragmented across tools by accident, not design — and fleet managers paid the cost in reconciliation work.</p>
        <p><strong>I architected:</strong> A calendar-grid workspace with equipment rows × monthly columns, status-coded tiles, and an always-visible legend.</p>
        <ul class=\"challenge-list\">
            <li>Always-visible status legend positioned adjacent to the forecast icon — eliminating the <em>\"what does this color mean?\"</em> question on every encounter.</li>
            <li><strong>Status-coded service tiles</strong> with distinct icons per service type (Oil Service, Safety Check, Planned Maintenance) and color dots per state (Done, Overdue, Open, Cancelled, Forecast).</li>
            <li>Default 6-month forecast window for focused operational planning, with a toggle to 12-month for strategic oversight.</li>
        </ul>
        <p><strong>Why calendar-grid over alternatives:</strong> Maintenance is inherently temporal and per-equipment. Users think in <em>\"this truck, this month\"</em> — the grid encoded that mental model directly. No translation layer required.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-01.jpg\" alt=\"\" />
          <figcaption>Calendar-grid overview — 6-month default view with status-coded tiles</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-03.jpg\" alt=\"\" />
          <figcaption>12-month scope — strategic long-term maintenance planning view</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"solution-2\">
    <div class=\"span6\">
        <h5>Problem 2: Opaque Forecasting → Transparent Derivation</h5>
        <blockquote class=\"user-quote\">
            \"The forecasting logic isn't clear to me. I see a date but I don't know how the system got there.\"
        </blockquote>
        <p><strong>This revealed:</strong> Trust in predicted dates collapsed without visible derivation. Users defaulted to manual spreadsheets to recover certainty — undermining the value of the forecast itself.</p>
        <p><strong>I architected:</strong> A progressive disclosure system that exposed the calculation behind every forecasted date.</p>
        <ul class=\"challenge-list\">
            <li>Forecast tooltip explicitly defined the formula: <em>\"All future service dates are forecast using the planned date and the service interval.\"</em></li>
            <li>Visual differentiation between <strong>actual</strong> dates (rendered fully) and <strong>forecast</strong> dates (rendered with the forecast icon).</li>
            <li>Boundary indicators communicating one-year access limits — <em>\"You can only access services one year back and forth from the present time\"</em> — surfacing system constraints before users hit them.</li>
        </ul>
        <p><strong>Why tooltips over modals:</strong> Trust is built through <em>availability on demand</em>, not through onboarding ceremony. Tooltips placed the explanation where the question forms — exactly when the user pauses on the forecast icon.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-02.jpg\" alt=\"\" />
          <figcaption>Forecast tooltip surfaces the derivation formula on hover over the \"i\" icon</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-15.jpg\" alt=\"\" />
          <figcaption>Boundary indicator with today marker and always-visible color-code legend</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"solution-3\">
    <div class=\"span6\">
        <h5>Problem 3: Action Barriers → Integrated Service Creation</h5>
        <blockquote class=\"user-quote\">
            \"Creating a repair order means switching to another system entirely — by the time I get there I've lost half the context.\"
        </blockquote>
        <p><strong>This revealed:</strong> The handoff to external service-creation tools nullified everything users had just learned from the grid. Context was the entire deliverable — and the system was throwing it away at the worst possible moment.</p>
        <p><strong>I architected:</strong> A details drawer that opens from any tile, preserving grid context while exposing equipment data, service metadata, and a one-click Call4Service launcher.</p>
        <ul class=\"challenge-list\">
            <li>Service metadata (type, status, interval, dates), full equipment information with visual reference, and direct link to detailed service reports — all rendered in a single drawer.</li>
            <li><strong>Call4Service integration:</strong> <em>\"Create repair service\"</em> / <em>\"Create interval service\"</em> buttons prefill service-creation forms using equipment and maintenance context.</li>
            <li>First-time user guidance surfaced inline: <em>\"If this is your first time using Call4Service, CustomerID and EquipmentID are required to create your account.\"</em></li>
        </ul>
        <p><strong>Why drawer over modal or full-screen takeover:</strong> The drawer preserved the grid behind it — users could re-anchor visually without losing investigative state. Modals hide context; drawers extend it.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-08.jpg\" alt=\"\" />
          <figcaption>Details drawer opens from a tile click — preserves grid context behind the panel</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-09.jpg\" alt=\"\" />
          <figcaption>Call4Service launcher integrated in the drawer, with color-code legend visible</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== COMPONENT ARCHITECTURE ========== -->
<section class=\"row\" id=\"component-architecture\">
    <div class=\"span6\">
        <h5>Component Architecture</h5>
        <h5>Design system classification</h5>
        <p>Organism (Atomic Design Level 03) — Calendar Grid. Composed of Molecule-level service tiles (Level 02) and Atom-level status indicators (Level 01).</p>
        <h5>Figma path</h5>
        <p><code>03 Organisms / 31 Calendar Grid / 31 Calendar Grid</code></p>
        <h5>Scope</h5>
        <p>Built for Maintenance Management, designed as <strong>polyvalent</strong> — calendar-grid pattern reusable for any time-series equipment view across all 8 FMS modules.</p>
    </div>
    <div class=\"span6 mt-2\">
        <h5>Accessibility & Performance</h5>
        <ul class=\"challenge-list\">
            <li>ARIA labels on all interactive tiles; full keyboard navigation throughout the grid and drawer.</li>
            <li>Color contrast meeting WCAG AA standards across all five status states.</li>
            <li>Virtualized scrolling for large equipment lists; lazy-loaded equipment images in the details drawer.</li>
            <li>Design tokens documented: Selected state yellow BTN-Yellow–dark (#E6A800) / Enabled state BTN-Yellow (#FFB900).</li>
        </ul>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== IMPACT & RESULTS ========== -->
<section class=\"row\" id=\"impact-results\">
    <div class=\"span12\">
        <h4>Impact & Results</h4>
        <h5>Validated Outcomes (Post-Launch User Testing)</h5>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Visibility — Before / After</h5>
        <blockquote class=\"user-quote\">
            Before: \"I want to see quickly which trucks are scheduled for maintenance this month.\"
        </blockquote>
        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">
            After: \"The calendar gives me everything at a glance — I know exactly what's coming up and what's overdue.\"
        </blockquote>
        <p>55% reduction in queries about upcoming services. Fleet managers gained immediate, at-a-glance oversight of their entire maintenance pipeline.</p>
    </div>
    <div class=\"span6\">
        <h5>Compliance — Before / After</h5>
        <blockquote class=\"user-quote\">
            Before: \"Generating compliance reports takes me half a day of manual work.\"
        </blockquote>
        <blockquote style=\"background: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 1rem; border-radius: 4px; color: #323a45; font-style: italic;\">
            After: \"One click, filters applied, CSV exported — done.\"
        </blockquote>
        <p>40% faster compliance exports via built-in CSV functionality with persistent filter state.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Planning & Trust</h5>
        <ul class=\"challenge-list\">
            <li>70% adoption of custom time-range views for forward-looking maintenance scheduling.</li>
            <li>85% positive feedback on forecast transparency — users understood how projected dates were derived.</li>
        </ul>
    </div>
    <div class=\"span6\">
        <h5>Overall</h5>
        <ul class=\"challenge-list\">
            <li>60% faster service creation through integrated Call4Service CTAs — from ~12 minutes to under 5 minutes per action.</li>
            <li>90% fewer support tickets related to navigation limits after tooltip introduction.</li>
            <li>Calendar Grid added as a reusable <strong>Organism</strong> to the design system — available for adoption across all 8 FMS modules.</li>
        </ul>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== REFLECTION ========== -->
<section class=\"row\" id=\"reflection\">
    <div class=\"span12\">
        <h4>Reflection</h4>
        <p>Designing the Maintenance Management module reinforced that <strong>the most impactful enterprise design isn't about novelty — it's about compression</strong>. Collapsing seven context switches into a single surface required more restraint than invention. Every element that earned its place in the calendar grid had to justify itself against the density budget.</p>
        <p>The Call4Service integration was a case study in <strong>boundary negotiation</strong> — embedding third-party functionality without inheriting its complexity. The drawer pattern allowed us to offer action capabilities while keeping the FMS interface sovereign over the user's attention.</p>
        <p>If I were to iterate, I'd push the saved filter configurations for role-based views that were deferred due to backend constraints — enabling maintenance coordinators, fleet managers, and compliance officers to each land on their optimized default view.</p>
    </div>
</section>\n`
  },
  {
    "id": "04",
    "slug": "fms-design-system",
    "title": "FMS: Design System",
    "category": "Design Systems / UI Architecture",
    "client": "Jungheinrich Digital Solutions",
    "date": "2023 - 2024",
    "description": "Architecting a multi-module design system governing 8 enterprise products and ~40 engineers.",
    "thumbnail": "assets/img/portfolio/thumb/09-design-system-THMB.jpg",
    "featuredImage": "assets/img/portfolio/full/09-design-system-FULL.jpg",
    "tags": ["ux_ui", "design"],
    "images": [
      {
        "name": "09-design-system-FULL.jpg",
        "text": "FMS Design System"
      }
    ],
    "technologies": ["Figma", "Storybook", "Design Tokens", "React"],
    "imagePath": "assets/img/portfolio/full/",
    "tldr": {
        "problem": "Jungheinrich's FMS pattern library was a flat Sketch symbol set with no responsive behavior — 8 module teams couldn't tell if a component variant already existed before building a new one.",
        "solution": "Led the full Sketch-to-Figma migration, rebuilt every component with Auto Layout, and restructured the library into a Utilities → Atoms → Molecules → Organisms taxonomy with a consistent State × Mode × Type variant grammar.",
        "result": "1,469 symbols under one taxonomy · two-tier token architecture (Raw + semantic Light/Dark) · Storybook parity checks catching implementation gaps before they shipped.",
        "client": "Jungheinrich Digital Solutions",
        "role": "Design System Owner",
        "sector": "Enterprise IoT · B2B SaaS",
        "year": "2022 – 2024"
    },
    "content": `<!-- ========== HERO STATEMENT ========== -->
<section class=\"row\" id=\"hero-statement\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;\">
            Owner of the unified Design System for Jungheinrich's Enterprise FMS — led the full Sketch-to-Figma migration and governed the single source of truth serving ~40 engineers across 8 product modules.
        </blockquote>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== CONTEXT & SCALE ========== -->
<section class=\"row\" id=\"context-scale\">
    <div class=\"span12\">
        <h4>Context & Scale</h4>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Product</h5>
        <p><strong>FMS Design System</strong> — the foundational UI/UX layer for Jungheinrich's Fleet Management System, an Enterprise B2B SaaS for intralogistics and Industrial IoT.</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>
        <h5>My Role</h5>
        <p><strong>Design System Owner.</strong> Personally owned 3 product modules (Maintenance, SoC, Service Reports) while governing the system serving the full FMS suite.</p>
    </div>
    <div class=\"span6\">
        <h5>Scale</h5>
        <p><strong>1,469 symbols</strong> in the FMS_PatternLib Figma file — components and their variants combined. Serving 8 product modules and ~40 engineers.</p>
        <h5>Tech Stack</h5>
        <p>Figma (Variables/Tokens, Auto Layout) · Storybook · React · Jira-driven DesignOps.</p>
        <h5>Timeline</h5>
        <p>2022 – 2024</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== INHERITANCE & DIAGNOSIS ========== -->
<section class=\"row\" id=\"inheritance-diagnosis\">
    <div class=\"span12\">
        <h4>Inheritance & Diagnosis</h4>
        <p>I did not build this system from zero — and that's the more senior story. Design systems at this scale are rarely greenfield; the real work is stewardship: diagnosing what a system is missing, then rebuilding it without breaking the 8 product teams depending on it daily.</p>
        <p><strong>What I inherited:</strong> a Sketch-based component library — flat symbol organization, no responsive or auto-layout behavior, and inconsistent naming that made it hard for module teams to know whether a variant already existed before building a new one.</p>
        <p>A restructuring pass exists in the Sketch source itself, dated <strong>December 2022</strong> — meaning the diagnosis and reorganization effort began before the migration to Figma, not as a side effect of switching tools. The system was being actively rethought first, migrated second.</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== THE MIGRATION ========== -->
<section class=\"row\" id=\"the-migration\">
    <div class=\"span12\">
        <h4>The Migration — Sketch to Figma</h4>
        <p>A team review of the Figma migration is dated <strong>May 25, 2023</strong>, anchoring the cutover to a real, citable point in the system's history.</p>
        <figure>
          <img src=\"assets/img/portfolio/design-system/migration-01-figma-collaboration.jpg\" alt=\"\" />
          <figcaption>Migration team review, May 25 2023 — framing Figma as the enablement and collaboration platform for the FMS design system</figcaption>
        </figure>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Full Auto Layout rebuild</h5>
        <p>Every component was rebuilt — not copy-pasted — to use Figma's Auto Layout. The responsive containers behind the Brush Zoom Tool (Hug widths of 830×80 / 310×80 / 443×80 / 536×80 px) are a direct product of this rebuild, not a Sketch-era carryover.</p>
        <figure>
          <img src=\"assets/img/portfolio/design-system/migration-02-autolayout-sync.jpg\" alt=\"\" />
          <figcaption>Auto Layout rebuilt every component to stay in sync with the front-end implementation</figcaption>
        </figure>
    </div>
    <div class=\"span6\">
        <h5>Governance stood up alongside the migration</h5>
        <p>Dedicated Figma files — a <strong>Gap Survey</strong> auditing PatternLib against the live product, and recurring <strong>Team Reviews</strong> — show a formal audit process was established alongside the migration, not bolted on after. The Gap Survey contains a full multi-page audit across modules (User, Inventory, Locations, Operating Hours, Operational Costs, Main Table, Tab Navi, Detail Layer) with screenshots dated September 2023.</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== RESTRUCTURE & TAXONOMY ========== -->
<section class=\"row\" id=\"restructure-taxonomy\">
    <div class=\"span12\">
        <h4>The Restructure — Taxonomy & Variant Grammar</h4>
        <p>The current PatternLib is organized on atomic-design principles, confirmed directly from the Figma file structure:</p>
        <pre style=\"background:#0f0f0f; color:#e0e0e0; padding:20px 25px; border-radius:6px; overflow-x:auto; font-size:0.85rem; line-height:1.6;\"><code>00 Utilities   → tokens, dividers, notifications, helper tools, color primitives
01 Atoms       → icons, logos, graphical atoms, loading indicators, backgrounds
02 Molecules   → composed UI units: dropdowns, tab bars, state tags, legends,
                 calendar tiles, the Brush Zoom Tool
03 Organisms   → full functional sections: header, toolbar, filter panel,
                 main table, date picker, skeleton loaders</code></pre>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Variant grammar</h5>
        <p>Components follow a consistent State × Mode × Type variant system across the whole library — the same discipline behind IBM Carbon's and Shopify Polaris's component systems.</p>
        <ul class=\"challenge-list\">
            <li><strong>State axis:</strong> Default → Hover → Pressed/Selected → Disabled → Focused → Skeleton (loading), applied consistently across unrelated component families.</li>
            <li><strong>Mode axis:</strong> Bright/Dark theming built into the same component definitions, not maintained as separate duplicate files.</li>
            <li><strong>Type axis:</strong> where a component represents multiple real-world entities (Location, Equipment, Employee types in list rows), each gets its own Type variant rather than a one-off custom component.</li>
        </ul>
    </div>
    <div class=\"span6\">
        <h5>Domain logic as system components</h5>
        <p>A dedicated <strong>Charge component set</strong> spans the full State of Charge range (−10% through 100%) as first-class variants — proof that even highly domain-specific product logic, like battery charge bands, was modeled as reusable system components rather than one-off screen-level hacks.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <figure>
          <img src=\"assets/img/portfolio/design-system/taxonomy-01-components-restored.jpg\" alt=\"\" />
          <figcaption>The restored library — atoms, molecules, and organisms rebuilt under one taxonomy during the migration</figcaption>
        </figure>
    </div>
    <div class=\"span6\">
        <figure>
          <img src=\"assets/img/portfolio/design-system/taxonomy-02-variants.jpg\" alt=\"\" />
          <figcaption>Variant discipline — collapsing button permutations into a single component set: too much is less, less is more</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== DESIGN TOKENS ========== -->
<section class=\"row\" id=\"design-tokens\">
    <div class=\"span12\">
        <h4>Design Tokens — The Technical Backbone</h4>
        <p>The system runs on a two-tier token architecture using the Tokens Studio / Figma Variables format — the same architecture recommended by the Design Tokens Community Group (DTCG) standard.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Raw</h5>
        <p>Primitive values — the actual color, spacing, and type values with no semantic meaning attached.</p>
    </div>
    <div class=\"span6\">
        <h5>PatLib Expansion</h5>
        <p>Semantic tokens — the meaningful layer components actually reference (e.g. \"critical\" rather than a specific hex), with dedicated <strong>Light</strong> and <strong>Dark</strong> modes as a first-class token dimension. Supporting style collections exist for text, effect (shadows/blur), and color, each versioned independently via a manifest tying the system together for Figma's Variables tooling.</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== COMPONENT DEEP-DIVES ========== -->
<section class=\"row\" id=\"component-deep-dives\">
    <div class=\"span12\">
        <h4>Component Deep-Dives</h4>
        <p>Two components illustrate the range of problems the restructured system was built to solve.</p>
    </div>
</section>
<section class=\"row\">
    <div class=\"span6\">
        <h5>Brush Zoom Tool (02 Molecules / 22)</h5>
        <p>Designed for the SoC battery chart, built as a polyvalent Molecule reusable for any X/Y-axis chart across the FMS suite. Full anatomy in the <strong>Battery Monitoring (SoC)</strong> case study.</p>
        <figure>
          <img src=\"assets/img/portfolio/soc/slide-22.jpg\" alt=\"\" />
          <figcaption>The Brush Zoom Tool — Figma component, reused across the system as a polyvalent Molecule</figcaption>
        </figure>
    </div>
    <div class=\"span6\">
        <h5>Calendar Tiles (02 Molecules / 21)</h5>
        <p>Used in the Maintenance Management calendar-grid interface. A second polyvalent Molecule, demonstrating range across two different product problems — time-series investigation vs. scheduling. Full anatomy in the <strong>Maintenance Management</strong> case study.</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== GOVERNANCE & DESIGNOPS ========== -->
<section class=\"row\" id=\"governance-designops\">
    <div class=\"span12\">
        <h4>Governance & DesignOps</h4>
        <ul class=\"challenge-list\">
            <li><strong>Approval flow:</strong> new components required Head of Design review before being added to the system.</li>
            <li><strong>Formal audit cadence:</strong> the Gap Survey file and recurring Team Review sessions kept the pattern library and the live product in sync — a standing governance ritual, not a one-off cleanup.</li>
            <li><strong>Storybook parity checks:</strong> personally reviewed CSS properties of every Storybook implementation against the Figma source of truth, filing Jira tickets for any mismatch.</li>
            <li><strong>Engineer self-service:</strong> the Storybook documentation layer, paired with the token architecture, let ~40 engineers consume the system without a designer in every implementation loop.</li>
        </ul>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== IMPACT & REFLECTION ========== -->
<section class=\"row\" id=\"impact-reflection\">
    <div class=\"span12\">
        <h4>Impact & Reflection</h4>
        <ul class=\"challenge-list\">
            <li>A library of 1,469 symbols organized under a taxonomy that scales to new product areas without restructuring.</li>
            <li>The Brush Zoom Tool, designed as a polyvalent Molecule, became eligible for reuse across the full FMS module suite — a direct product of the atomic restructure making reuse possible in the first place.</li>
            <li>Led the full Sketch-to-Figma migration while the system continued serving 8 live product modules.</li>
        </ul>
        <blockquote style=\"border-left: 4px solid #f61067; padding: 15px 20px; background: #f0f0f0; margin: 2rem 0;\">
            Owning a design system used by 40 engineers across many product teams is fundamentally a governance problem before it's a component problem. The most durable decisions in this system weren't individual components — they were the taxonomy and the token architecture that made every future component easier to place correctly.
        </blockquote>
    </div>
</section>\n`
  }
];

export const projects = projects_v2;
