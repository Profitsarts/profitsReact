export const projects_v2 = [
  {
    "id": "01",
    "slug": "fms-battery-monitoring",
    "title": "FMS: Battery Monitoring (SoC)",
    "category": "Product Design / IoT / SaaS",
    "client": "Jungheinrich Digital Solutions",
    "date": "2023 - 2024",
    "description": "Architecting a unified IoT battery-monitoring visualization for enterprise fleet management.",
    "thumbnail": "assets/img/portfolio/thumb/07-soc-00-THMB.jpg",
    "featuredImage": "assets/img/portfolio/full/07-soc-00-FULL.jpg",
    "tags": ["ux_ui", "design"],
    "images": [
      {
        "name": "07-soc-00-FULL.jpg",
        "text": "SoC Battery Monitoring"
      }
    ],
    "technologies": ["React", "Figma", "Design Systems", "IoT"],
    "imagePath": "assets/img/portfolio/full/",
    "content": `<!-- ========== HERO STATEMENT ========== -->
<section class="row" id="hero-statement">
    <div class="span12">
        <blockquote style="border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;">
            Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS — eliminating data-interpretation ambiguity across 3 critical scenarios and shipping an interactive brush-zoom tool for ~12 enterprise clients including DHL, Amazon, and LIDL.
        </blockquote>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== CONTEXT & SCALE ========== -->
<section class="row" id="context-scale">
    <div class="span12">
        <h4>Context & Scale</h4>
    </div>
</section>
<section class="row">
    <div class="span6">
        <h5>Product</h5>
        <p><strong>Fleet Management System (FMS)</strong> — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>
        <h5>My Role</h5>
        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.</p>
    </div>
    <div class="span6">
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

<div class="slide-separator"></div>

<!-- ========== THE CHALLENGE ========== -->
<section class="row" id="the-challenge">
    <div class="span12">
        <h4>The Challenge</h4>
        <p>The SoC (State of Charge) chart — the core visualization of the Battery Monitoring module — consistently generated confusion and support tickets. Fleet managers needed real-time battery visibility to prevent downtime, but the chart was failing them in three distinct ways.</p>
    </div>
</section>

<section class="row" id="scenario-1">
    <div class="span6">
        <h5>Scenario 1: Empty Layout — "Is it broken or just silent?"</h5>
        <blockquote class="user-quote">
            "I can't tell if the truck is broken or just not sending data"
        </blockquote>
        <p>When trucks hadn't transmitted data for 24+ hours, charts rendered completely blank. Users had no way to distinguish a malfunctioning vehicle from a routine weekend shutdown.</p>
        <p><strong>Business cost:</strong> Unnecessary maintenance dispatches, delayed responses to actual failures, and eroded trust in the monitoring tool.</p>
    </div>
    <div class="span6 mt-3">
        <figure>
          <img src="assets/img/portfolio/soc/slide-01+02.jpg" alt="" />
          <figcaption>SoC chart — Empty layout: users cannot distinguish equipment failure from data gaps</figcaption>
        </figure>
    </div>
</section>

<div class="slide-separator"></div>

<section class="row" id="scenario-2">
    <div class="span6">
        <h5>Scenario 2: Short Intervals — "I can't see the forest for the trees"</h5>
        <blockquote class="user-quote">
            "These tiny spikes make it hard to see the real usage patterns"
        </blockquote>
        <p>Micro-operations lasting seconds or minutes created dense clusters of data points. In the 24-hour view, these were manageable. In the 7-day and 30-day views, they became impenetrable noise.</p>
        <p><strong>Business cost:</strong> Fleet managers couldn't identify battery degradation trends — the primary reason they used the chart.</p>
    </div>
    <div class="span6 mt-3">
        <figure>
          <img src="assets/img/portfolio/soc/slide-08.jpg" alt="" />
          <figcaption>Short intervals: micro-operations create visual noise obscuring meaningful trends</figcaption>
        </figure>
    </div>
</section>

<div class="slide-separator"></div>

<section class="row" id="scenario-3">
    <div class="span6">
        <h5>Scenario 3: Long Intervals — "I need to go back in time"</h5>
        <blockquote class="user-quote">
            "I want to see the SoC changes on previous days easily"
        </blockquote>
        <p>Extended idle periods (Pin Mode) and the need for historical investigation had no intuitive navigation mechanism. Users were locked into preset time ranges with no way to compare patterns across days.</p>
        <p><strong>Business cost:</strong> Shift-level incident investigations took ~15 minutes of manual toggling between views.</p>
    </div>
    <div class="span6 mt-3">
        <figure>
          <img src="assets/img/portfolio/soc/slide-13.jpg" alt="" />
          <figcaption>Long intervals: extended idle periods and historical data navigation challenges</figcaption>
        </figure>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== DISCOVERY & RESEARCH ========== -->
<section class="row" id="discovery">
    <div class="span12">
        <h4>Discovery & Research</h4>
        <p>I collaborated closely with the UX Researcher to bridge the gap created by company policy restricting direct user access. My approach maximized impact through <strong>proxy research and joint interpretation</strong>.</p>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== IMPACT & RESULTS ========== -->
<section class="row" id="impact-results">
    <div class="span12">
        <h4>Impact & Results</h4>
        <ul class="challenge-list">
            <li>Historical navigation workflows reduced from <strong>~15 minutes</strong> to <strong>under 3 minutes</strong>.</li>
            <li>Post-launch testing confirmed <strong>100% resolution</strong> of the original pain points.</li>
            <li>The Brush Zoom Tool added as a reusable <strong>Molecule</strong> to the design system.</li>
        </ul>
    </div>
</section>
`
  },
  {
    "id": "03",
    "slug": "fms-maintenance-management",
    "title": "FMS: Maintenance Management",
    "category": "Product Design / SaaS / B2B",
    "client": "Jungheinrich Digital Solutions",
    "date": "2023 - 2024",
    "description": "Unifying service planning and compliance verification into a high-density calendar workspace.",
    "thumbnail": "assets/img/portfolio/thumb/08-maintenance-00-THMB.jpg",
    "featuredImage": "assets/img/portfolio/full/08-maintenance-00-FULL.jpg",
    "tags": ["ux_ui", "design"],
    "images": [
      {
        "name": "08-maintenance-00-FULL.jpg",
        "text": "Maintenance Management"
      }
    ],
    "technologies": ["React", "Figma", "Data Visualization", "User Research"],
    "imagePath": "assets/img/portfolio/full/",
    "content": `<!-- ========== HERO STATEMENT ========== -->
<section class="row" id="hero-statement">
    <div class="span12">
        <blockquote style="border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;">
            Architected a calendar-grid maintenance workspace for Jungheinrich's Enterprise FMS — unifying service planning, compliance verification, and repair initiation into a single interface for ~12 enterprise clients including DHL, Amazon, and LIDL.
        </blockquote>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== CONTEXT & SCALE ========== -->
<section class="row" id="context-scale">
    <div class="span12">
        <h4>Context & Scale</h4>
    </div>
</section>
<section class="row">
    <div class="span6">
        <h5>Product</h5>
        <p><strong>Fleet Management System (FMS)</strong> — Enterprise B2B SaaS for intralogistics and Industrial IoT (MHE Telematics).</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong> — global leader in Material Handling Equipment.</p>
        <h5>My Role</h5>
        <p><strong>Senior Digital Product Designer & Design System Owner.</strong> Autonomous design authority across 4 of 8 modules. Sole owner of the design system serving all 8 modules and ~40 engineers.</p>
    </div>
    <div class="span6">
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

<div class="slide-separator"></div>

<!-- ========== CONTEXTUAL DISCOVERY ========== -->
<section class="row" id="discovery">
    <div class="span12">
        <h4>Discovery & Research</h4>
        <p>The design challenge was architectural: how to compress three distinct workflows (planning, compliance, action) into one surface without overloading the view.</p>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== IMPACT & RESULTS ========== -->
<section class="row" id="impact-results">
    <div class="span12">
        <h4>Impact & Results</h4>
        <ul class="challenge-list">
            <li>55% reduction in queries about upcoming services.</li>
            <li>90% fewer support tickets related to navigation limits.</li>
            <li>Calendar Grid added as a reusable <strong>Organism</strong> to the design system.</li>
        </ul>
    </div>
</section>
`
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
<section class="row" id="hero-statement">
    <div class="span12">
        <blockquote style="border-left: 4px solid #f61067; padding: 20px 25px; background: #f0f0f0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;">
            Architected and governed the unified Design System for Jungheinrich's Enterprise FMS — establishing a single source of truth for ~40 engineers across 8 product modules and reducing time-to-market for new features by 40%.
        </blockquote>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== CONTEXT & SCALE ========== -->
<section class="row" id="context-scale">
    <div class="span12">
        <h4>Context & Scale</h4>
    </div>
</section>
<section class="row">
    <div class="span6">
        <h5>Product</h5>
        <p><strong>FMS Design System</strong> — The foundational UI/UX layer for a multi-product enterprise ecosystem.</p>
        <h5>Company</h5>
        <p><strong>Jungheinrich Digital Solutions</strong></p>
        <h5>My Role</h5>
        <p><strong>Design System Architect & Owner</strong>. Responsible for token strategy, component governance, and engineering alignment.</p>
    </div>
    <div class="span6">
        <h5>Scale</h5>
        <p>150+ components, 8 modules, ~40 engineers, 2 dedicated DS developers.</p>
        <h5>Tech Stack</h5>
        <p>Figma (Variables/Tokens) · Storybook · React · Jira.</p>
    </div>
</section>

<div class="slide-separator"></div>

<!-- ========== WORK IN PROGRESS ========== -->
<section class="row" id="wip-template">
    <div class="span12 text-center" style="padding: 100px 0;">
        <h2 style="font-weight: 300; letter-spacing: 0.2em; text-transform: uppercase; color: #323a45;">Case Study Under Development</h2>
        <p style="color: #666; max-width: 600px; margin: 20px auto;">This section is currently being architected to match the narrative depth of the SoC and Maintenance case studies. Stay tuned for the full breakdown of token governance and component orchestration.</p>
    </div>
</section>
`
  }
];

export const projects = projects_v2;