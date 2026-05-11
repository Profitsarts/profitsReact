export const projects_v2 = [
{
    "id": "01",
    "slug": "fms-battery-monitoring",
    "title": "FMS: Battery Monitoring (SoC)",
    "category": "Product Design / IoT / SaaS",
    "client": "Jungheinrich Digital Solutions",
    "date": "2022 - 2023",
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
        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.</p>
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
        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.</p>
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
        <h5>Problem 1: Grid Overload → Consolidated Legend & Scope Controls</h5>
        <blockquote class=\"user-quote\">
            \"I want to see quickly which trucks are scheduled for maintenance this month.\"
        </blockquote>
        <p><strong>This revealed:</strong> On first load, the 6-month grid displayed dense rows of status-coded tiles without context for forecasted dates. Forecast tooltips and legend information were hidden behind icon hovers, delaying comprehension.</p>
        <p><strong>I architected:</strong> A consolidated visual system with always-visible status legend and intuitive scope controls.</p>
        <ul class=\"challenge-list\">
            <li>Designed an always-visible status legend positioned adjacent to the forecast icon — eliminating the hover-to-discover pattern.</li>
            <li>Established <strong>status-coded service tiles</strong> with distinct icons per service type (Oil Service, Safety Check, Planned Maintenance, Other Services) and color dots per state (Done, Overdue, Open, Cancelled, Forecast).</li>
            <li>Default 6-month window for focused planning, with a prominent toggle to 12-month for long-term strategic oversight.</li>
        </ul>
        <p><strong>Why always-visible over hover?</strong> Industrial back-office users scan dashboards under time pressure. Information architecture must respect glanceability — critical context cannot be gated behind interactions.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-01.jpg\" alt=\"\" />
          <figcaption>Calendar-grid overview — 6-month default view with status-coded tiles</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-03.jpg\" alt=\"\" />
          <figcaption>12-month scope: strategic long-term maintenance planning view</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"solution-2\">
    <div class=\"span6\">
        <h5>Problem 2: Density Mismatch → Adaptive Density Controls</h5>
        <blockquote class=\"user-quote\">
            \"The grid is either too compressed or too sparse depending on how many trucks I'm managing.\"
        </blockquote>
        <p><strong>This revealed:</strong> Fleet sizes varied dramatically across clients — from 30 vehicles (SMEs) to 500+ (DHL, Amazon). A fixed grid density served neither extreme well.</p>
        <p><strong>I architected:</strong> A two-mode density system with persistent user preference.</p>
        <ul class=\"challenge-list\">
            <li><strong>Comfortable mode:</strong> 6-month scope with larger tiles optimized for fleets under 100 vehicles — maximizing readability per cell.</li>
            <li><strong>Compact mode:</strong> 12-month scope with smaller tiles for large-fleet overview — prioritizing pattern recognition over individual cell detail.</li>
            <li>Density preference persisted per session — users don't re-adjust on every visit.</li>
        </ul>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-04.jpg\" alt=\"\" />
          <figcaption>Density toggle: Comfortable (6-month, larger tiles) vs. Compact (12-month, smaller tiles)</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-12.jpg\" alt=\"\" />
          <figcaption>Flexible time-range controls with custom date selectors</figcaption>
        </figure>
    </div>
</section>

<div class=\"slide-separator\"></div>

<section class=\"row\" id=\"solution-3\">
    <div class=\"span6\">
        <h5>Problem 3: Navigation Dead Ends → Transparent Boundary Communication</h5>
        <blockquote class=\"user-quote\">
            \"The arrows just disappeared — I thought the system was broken.\"
        </blockquote>
        <p><strong>This revealed:</strong> When navigating beyond one-year limits, forward/back arrows disappeared without explanation. Users interpreted this as a bug rather than an intentional data boundary.</p>
        <p><strong>I architected:</strong> A progressive disclosure system for navigation boundaries.</p>
        <ul class=\"challenge-list\">
            <li>Out-of-range months rendered with reduced opacity — visually communicating unavailability without removing spatial context.</li>
            <li>Hovering unavailable months triggers an explanatory tooltip: <em>\"You can only access services one year back and forth from present time.\"</em></li>
            <li>Added a custom range picker enabling arbitrary date selection for investigations beyond the standard window.</li>
        </ul>
        <p><strong>Design decision:</strong> Keeping greyed-out months visible rather than hiding them was deliberate — it preserved the user's mental model of the timeline and avoided the \"where did it go?\" confusion that triggered support tickets.</p>
    </div>
    <div class=\"span6 mt-3\">
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-13.jpg\" alt=\"\" />
          <figcaption>Timeline navigation at limit — arrows removed with no explanation (before)</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-14.jpg\" alt=\"\" />
          <figcaption>Disabled months with reduced opacity — preserved spatial context (after)</figcaption>
        </figure>
        <figure>
          <img src=\"assets/img/portfolio/maintenance/slide-15.jpg\" alt=\"\" />
          <figcaption>Navigation boundary tooltip explaining the one-year constraint</figcaption>
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
    "thumbnail": "assets/img/portfolio/thumb/01-wordfinder-THMB.jpg",
    "featuredImage": "assets/img/portfolio/full/01-wordfinder-FULL.jpg",
    "tags": ["ux_ui", "design"],
    "images": [
      {
        "name": "01-design-system-FULL.jpg",
        "text": "FMS Design System"
      }
    ],
    "technologies": ["Figma", "Storybook", "Design Tokens", "React"],
    "imagePath": "assets/img/portfolio/full/",
    "content": `<!-- ========== HERO STATEMENT ========== -->
<section class=\"row\" id=\"hero-statement\">
    <div class=\"span12\">
        <blockquote style=\"border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;\">
            Architected and governed the unified Design System for Jungheinrich's Enterprise FMS — establishing a single source of truth for ~40 engineers across 8 product modules and reducing time-to-market for new features by 40%.
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
        <p><strong>FMS Design System</strong> — The foundational UI/UX layer for a multi-product enterprise ecosystem.</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong></p>
        <h5>My Role</h5>
        <p><strong>Design System Architect & Owner</strong>. Responsible for token strategy, component governance, and engineering alignment.</p>
    </div>
    <div class=\"span6\">
        <h5>Scale</h5>
        <p>150+ components, 8 modules, ~40 engineers, 2 dedicated DS developers.</p>
        <h5>Tech Stack</h5>
        <p>Figma (Variables/Tokens) · Storybook · React · Jira.</p>
    </div>
</section>

<div class=\"slide-separator\"></div>

<!-- ========== WORK IN PROGRESS ========== -->
<section class=\"row\" id=\"wip-template\">
    <div class=\"span12 text-center\" style=\"padding: 100px 0;\">
        <h2 style=\"font-weight: 300; letter-spacing: 0.2em; text-transform: uppercase; color: #323a45;\">Case Study Under Development</h2>
        <p style=\"color: #666; max-width: 600px; margin: 20px auto;\">This section is currently being architected to match the narrative depth of the SoC and Maintenance case studies. Stay tuned for the full breakdown of token governance and component orchestration.</p>
    </div>
</section>\n`
  }
];

export const projects = projects_v2;
