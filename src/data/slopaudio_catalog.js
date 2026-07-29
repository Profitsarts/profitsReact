// SlopAudio catalog — distilled from the Obsidian wiki (projects/slopaudio/)
// and the SlopAudio-recap-completo.md on the Desktop.
//
// Each plugin carries:
//   id, name, codename, category, tags[], status, version,
//   description, longDescription, keyFeatures[], designNotes,
//   references[], repoUrl (if any), bugs[] (if any), roadmap[] (if any)
//
// Categories are the primary filter axis; tags are the secondary,
// cross-cutting labels that appear as "etiquetas" in the UI.

export const categories = [
    { id: 'console', label: 'Console', description: 'Channel-strip emulations & analog console character' },
    { id: 'delay', label: 'Delay', description: 'Time-based echoes, random delays, ping-pong' },
    { id: 'pitch', label: 'Pitch', description: 'Pitch correction, shifting, harmonic processing' },
    { id: 'ambient', label: 'Ambient', description: 'Reverbs, atmospheric processors, dreamy spaces' },
    { id: 'lofi', label: 'Lo-Fi', description: 'Degradation, character, vintage texture' },
    { id: 'utility', label: 'Utility', description: 'Routing, metering, A/B, signal tools' },
];

export const allTags = [
    'stereo',
    'random',
    'dual-mono',
    'modulation',
    'reverb',
    'dreamy',
    'analog-emulation',
    'knob-based',
    'automatable',
    'advanced-mode',
    'simple-mode',
    'reset-to-default',
    'brand-original',
    'clone',
    'experimental',
    'work-in-progress',
    'released',
    'needs-review',
    'pitch-correction',
    'utility',
    'routing',
    'lofi',
];

export const plugins = [
    {
        id: 'crema-console',
        name: 'Crema Console',
        codename: 'cremaConsole',
        category: 'console',
        tags: ['analog-emulation', 'knob-based', 'automatable', 'advanced-mode', 'simple-mode', 'reset-to-default', 'brand-original', 'released'],
        status: 'released',
        version: 'V1.1',
        repoUrl: 'git.o0-0o.eu/O-O/SLOPAUDIO-CREAMYCONSOLE',
        description: 'Analog console emulation with candy-style knobs — the first plugin to land the full V1.1 scope.',
        longDescription:
            'Crema Console (formerly "Creamy Console") is an analog console emulation channel-strip. ' +
            'V1.1 is confirmed finished by dotcranky: "todo configurable en advanced + reverb más dreamy en space". ' +
            'It is the first plugin in the suite to fully implement the V1.1 design philosophy — advanced automatable ' +
            'knobs, reset-to-default, and a simple/advanced mode switcher with a persistent LED indicator.',
        keyFeatures: [
            'Full advanced mode with all parameters automatable',
            'Dreamier "space" reverb in V1.1',
            'Reset-to-default button per effect',
            'Simple / Advanced mode switcher with LED indicator',
            'Module reordering (partially working — edge-case bug pending)',
        ],
        designNotes:
            'Identity is based on candy-style knobs. Built fresh, not as a reskin of OSCSENDER (which is a ' +
            'text-field utility, not a knob-based plugin). Designs are done one-by-one by hand, passed through ' +
            'Figma for manual retouch, then handed to the AI for implementation. The AI does not design alone — ' +
            'darkneto said literally "no se le puede dejar hacer los diseños porque no molan nada".',
        references: [],
        bugs: [
            {
                title: 'Module reordering broken at edges',
                detail: 'The outward-facing switch button on an edge module does nothing. Proposed fix: both switch buttons on every module should always advance to the next module in sequence, regardless of position.',
                severity: 'medium',
            },
            {
                title: 'No persistent visual reference for available effects',
                detail: 'Users need to see, at all times, which effects are available in each module. Without it "el usuario está en territorio randomness".',
                severity: 'medium',
            },
            {
                title: '"Effect Vol" vs "Amount" — naming and behavior mismatch',
                detail: 'Unclear whether these are the same control. "Effect Vol" does not behave as a dry/wet mix — even at the "dry" setting, substantial effect bleeds through. Needs a fix, not just a rename.',
                severity: 'high',
            },
            {
                title: 'Secondary controls should always be visible',
                detail: 'No need to hide secondary controls — show everything at all times. There is no hardware space constraint in software.',
                severity: 'low',
            },
        ],
        mergeBlockers: [
            'Explicit stop until a clean merge of three simultaneous work lines is decided: V1 graphics, V1.1 DSP, and V1.1 new parameters.',
        ],
    },
    {
        id: 'gremlin-delay',
        name: 'GremlinDelay',
        codename: 'gremlinDelay',
        category: 'delay',
        tags: ['stereo', 'random', 'dual-mono', 'modulation', 'knob-based', 'automatable', 'brand-original', 'work-in-progress'],
        status: 'work-in-progress',
        version: 'V1.0 (design phase)',
        repoUrl: 'git.o0-0o.eu/O-O/SLOPAUDIO-GREMLINDELAY',
        description: 'Dual-mono random delay inspired by the Apparat/Modeselektor aesthetic — not a joke.',
        longDescription:
            'GremlinDelay is a stereo random delay genuinely inspired by the style of Apparat/Modeselektor (confirmed by dotcranky, not a joke). ' +
            'The architecture was redesigned: instead of a single shared engine that made "everything jump together", ' +
            'there are now two independent delay units — left fed by left input, right fed by right input — each with ' +
            'its own time/feedback/cutoff randomness and its own RNG. Random pan is no longer a shared balance; ' +
            'each output lands at a random point in the stereo field on every throw.',
        keyFeatures: [
            'Two independent delay units (dual-mono architecture)',
            'Per-unit random time, feedback, and cutoff',
            'Per-unit RNG — no shared "everything jumps" behaviour',
            'Stereo placement per unit (not a shared balance)',
            'Toggles were explicitly rejected as controls — "son paleros" (they feel cheap/generic)',
        ],
        designNotes:
            'Toggles were rejected as a control ("son paleros"). UI reference cited by the user: Audio Damage AD054 ' +
            '"Other Desert Cities" — "a nivel UI es dios".',
        references: ['Audio Damage AD054 "Other Desert Cities"'],
        roadmap: [
            'Freeze one side while the other continues running',
            'Different note grids per side (e.g. left in 1/16, right in 1/4T) for polyrhythmic ping-pong',
            'Dark lowpass on one side vs resonant highpass on the other',
            'LINK control that auto-automates itself: linked/coherent in verses, unlinked/drifting in choruses. While linked, right knob values are preserved (not overwritten, just ignored) — on unlink they restore exactly as they were.',
        ],
    },
    {
        id: 'tuneauto',
        name: 'TuneAuto',
        codename: 'tuneAuto',
        category: 'pitch',
        tags: ['pitch-correction', 'automatable', 'brand-original', 'needs-review'],
        status: 'needs-review',
        version: 'Experimental',
        repoUrl: null,
        description: 'Auto-tune / pitch correction — the exception to the template\'s speed/quality pattern.',
        longDescription:
            'TuneAuto is a pitch-correction plugin that still sounds wrong after 3 build sessions and 2 reference ' +
            'examples. It is the notable exception to the template\'s normal speed/quality pattern — pitch correction ' +
            'appears to be a harder DSP problem than the delay/reverb/gate plugins that went smoothly.',
        keyFeatures: [
            'Pitch correction / auto-tune',
            'Pending: sound quality still not acceptable after 3 builds',
            'Reference suggested: Autotalent (open-source implementation)',
        ],
        designNotes:
            'This is the DSP-difficulty outlier. The template\'s usual workflow (fast clang++ engine loop → JUCE build ' +
            '→ pluginval) produced good results for delay, reverb, and gate, but pitch correction remains unresolved. ' +
            'It may require studying existing open-source implementations like Autotalent more deeply.',
        references: ['Autotalent (tombaran.info/autotalent.html)'],
    },
    {
        id: 'enol',
        name: 'enol',
        codename: 'enol',
        category: 'ambient',
        tags: ['reverb', 'dreamy', 'experimental', 'brand-original', 'needs-review'],
        status: 'needs-review',
        version: 'Experimental',
        repoUrl: null,
        description: 'A "dornificador" in the style of Brian Eno — 4 interchangeable reverbs chained and summed.',
        longDescription:
            'enol is a Brian Eno-style "dornificador": 4 interchangeable reverbs, chained and summed with a single ' +
            'knob. It came out notably worse than its batch siblings (delay, granny, lofi, smurfer). The attributed ' +
            'cause: it was built with GLM instead of the usual workflow ("built by GLM in hours, a disaster"). ' +
            'It was reassigned to Fable, which ran unsupervised for ~15 minutes. No confirmed result yet.',
        keyFeatures: [
            '4 interchangeable reverb algorithms',
            'Chained and summed with a single knob',
            'Brian Eno-inspired ambient processor',
        ],
        designNotes:
            'Anecdotal but concrete precedent: if GLM continues to be used in the plugin batch, this is a data point ' +
            'to keep in mind. Not a controlled comparison, but a real quality signal. The workflow change from GLM ' +
            'to Fable was attempted as a remedy.',
        references: ['Brian Eno ambient aesthetic'],
    },
    {
        id: 'granny',
        name: 'Granny',
        codename: 'granny',
        category: 'lofi',
        tags: ['lofi', 'knob-based', 'brand-original', 'work-in-progress'],
        status: 'work-in-progress',
        version: 'Experimental',
        repoUrl: null,
        description: 'Lo-fi character plugin — part of the batch that came out well (unlike enol).',
        longDescription:
            'Granny is a lo-fi character plugin from the same batch as delay, enol, lofi, and smurfer. ' +
            'It came out well — unlike enol, which was the batch outlier attributed to the GLM workflow.',
        keyFeatures: [
            'Lo-fi degradation / character',
            'Part of the successful batch (delay, granny, lofi, smurfer)',
        ],
        designNotes: '',
        references: [],
    },
    {
        id: 'smurfer',
        name: 'Smurfer',
        codename: 'smurfer',
        category: 'lofi',
        tags: ['lofi', 'knob-based', 'brand-original', 'work-in-progress'],
        status: 'work-in-progress',
        version: 'Experimental',
        repoUrl: null,
        description: 'Lo-fi character plugin — part of the successful batch.',
        longDescription:
            'Smurfer is a lo-fi character plugin from the same batch as delay, granny, enol, and lofi. ' +
            'It came out well — part of the batch that worked, unlike the GLM-built enol.',
        keyFeatures: [
            'Lo-fi degradation / character',
            'Part of the successful batch',
        ],
        designNotes: '',
        references: [],
    },
    {
        id: 'lofi',
        name: 'Lofi',
        codename: 'lofi',
        category: 'lofi',
        tags: ['lofi', 'knob-based', 'brand-original', 'work-in-progress'],
        status: 'work-in-progress',
        version: 'Experimental',
        repoUrl: null,
        description: 'Lo-fi character plugin — part of the successful batch.',
        longDescription:
            'Lofi is a lo-fi character plugin from the same batch as delay, granny, enol, and smurfer. ' +
            'Came out well alongside its siblings.',
        keyFeatures: [
            'Lo-fi degradation / character',
            'Part of the successful batch',
        ],
        designNotes: '',
        references: [],
    },
    {
        id: 'delay',
        name: 'Delay',
        codename: 'delay',
        category: 'delay',
        tags: ['knob-based', 'automatable', 'brand-original', 'work-in-progress'],
        status: 'work-in-progress',
        version: 'Experimental',
        repoUrl: null,
        description: 'Delay plugin — part of the successful batch (the baseline that went smoothly).',
        longDescription:
            'A delay plugin from the batch that worked well (delay, granny, lofi, smurfer). ' +
            'Part of the standard template workflow that produces good results for time-based effects.',
        keyFeatures: [
            'Time-based delay',
            'Part of the successful batch',
        ],
        designNotes: '',
        references: [],
    },
    {
        id: 'ab-router',
        name: 'A/B Router',
        codename: 'abRouter',
        category: 'utility',
        tags: ['utility', 'routing', 'brand-original', 'work-in-progress'],
        status: 'work-in-progress',
        version: 'QA tool',
        repoUrl: null,
        description: 'A/B routing plugin for QA and level-matching — used internally for the 6-variant tienda test.',
        longDescription:
            'An A/B router utility plugin used for QA and level-matching during the 6-variant design test ' +
            'of the SlopAudio tienda (React + Vite + Tailwind). Not a commercial product — an internal tool ' +
            'for the design process.',
        keyFeatures: [
            'A/B signal routing',
            'Level-matching for fair comparison',
            'Used in the 6-variant tienda design test',
        ],
        designNotes: '',
        references: [],
    },
];

// --- Design system tokens (from slopaudio-editorial-minimalism-redesign.md) ---

export const designTokens = {
    palette: {
        base950: '#121618',
        base900: '#171c1f',
        base800: '#1e2427',
        base700: '#2a3236',
        base600: '#3a4448',
        base400: '#6d787c',
        base200: '#b6bec0',
        base050: '#e9eded',
        accentGold: '#d6a24e',
    },
    fonts: {
        primary: 'Archivo',
        valueHero: '34px',
    },
    metrics: {
        grid: '4px',
        canvasW: 960,
        canvasH: 744,
        radiusPanel: '2px',
        radiusCard: '2px',
        radiusCtrl: '2px',
        indexTick: '14×2px',
    },
    signature: 'Index tick — a 14×2px amber bar at the top-left corner of every surface',
    signatureDetail:
        'The only repeated detail with its own name. By always anchoring top-left, it makes the composition ' +
        'deliberately asymmetric. It appears on every module card, the display panel, and the footer.',
    controlMorphology: {
        title: 'Vertical bar encoders — no dials, no rings, no radial ticks',
        description:
            'Every rotary is a thin vertical track filled from the bottom, capped by a 2px "index cap" line that ' +
            'overshoots the track. This is committed system-wide — it is the mandated differentiation from any ' +
            'circular-knob reference. Zero dials, zero rings, zero radial ticks.',
        macroControls: 'Carry the amber accent',
        moduleControls: 'Stay neutral (no accent)',
        linearSliders: 'Flat slot + neutral thumb',
        toggles: 'Small square checkbox (base800 fill / base600 outline / amber tick mark)',
        deleted: 'Dead drawMacroKnob / drawModuleKnob methods were deleted during the redesign',
    },
    surfacePhilosophy: {
        title: 'Air separates surfaces, not borders',
        description:
            'Cards carry no outline at all. The space between surfaces creates the visual separation. ' +
            'This is a deliberate principle — not a missing border.',
        monochrome:
            'All 3 demo cards + the type selector share a single slate hue. Identity comes from content ' +
            '(icon + label + index tick), never from card background colour.',
    },
    temperatureBias:
        'The base ramp is deliberately biased cool (blue-green), not a neutral grey ramp. ' +
        'This cool temperature bias is the stated differentiator — it is not grey, it is cold.',
    accentRationale:
        'Amber-gold (#d6a24e) was chosen to be deliberately distinct from Slate & Ash\'s coral (#e8543f). ' +
        'It appears only in: primary control, index ticks, toggle marks, and the live scope trace.',
    radiiNote:
        'Radii are almost square: 2px (down from the previous 6-8px). Slate & Ash uses ~0px — SlopAudio stays ' +
        'at 2px to keep a hint of softness without going round.',
    prohibitions: [
        'ADSR drawn as strokes',
        'The luminance circle',
        'Venn / overlap circles',
        'Colour-per-channel encoding',
        'Slate & Ash coral #e8543f',
        'Edge / side stripes',
        'Wordmark-style footer',
        'E/D/S/A pad grid + crosshair',
        'Any saturated chassis',
    ],
    reusablePrinciples: [
        'Flat surfaces',
        '1px hairlines',
        'Opacity to indicate state',
        'Value always represented as text',
        'Air instead of borders',
    ],
    verification: {
        engineTests: '2465 checks, 0 failures',
        build: 'VST3 + Standalone build clean. VST3 installed at ~/Library/Audio/Plug-Ins/VST3/NewPlugin.vst3',
        pluginval: 'pluginval --strictness-level 8 = SUCCESS',
    },
    pendingIssues: [
        'The GUI has never been seen running with your own eyes next to a real reference — two screenshot attempts failed. "Compiles" ≠ "looks premium".',
        'Negative space is high but uneven (scope band empty, gap right of macro DRY/WET, footer centre empty).',
        'Card-vs-panel contrast is subtle by design (air, not borders) — risk of looking "dirty" on low brightness.',
        'valueHero (34px) defined but not yet connected to a real parameter.',
        'A design/tokens.json bridge (W3C/Tokens Studio format, for editing from Figma instead of the .h file) was proposed but not built — pending green light.',
    ],
    repoState: {
        repo: 'slopAudio/SLOPAUDIO-TEMPLATE',
        commits: [
            { hash: '950f5c7', date: '18/07 16:10', message: 'Look&Feel+Design_system-01 (the full redesign)' },
            { hash: '2dde2c6', date: '18/07 19:47', message: 'feat(ui): editable value readout under every control — newer than all wiki docs' },
        ],
        note: '2 commits ahead of origin/main, not pushed. Per project rule, the agent must ask before pushing.',
    },
};

// --- Architecture (from slopaudio-gui-design-system-rc20-inspired-architecture.md) ---

export const architecture = {
    title: 'Four-layer architecture (vigente — solo cambió la piel encima)',
    layers: [
        {
            name: 'SlopTokens.h',
            role: 'The only file where a hex value is allowed. Colours, typography (Archivo, embedded), metrics (4px grid), fixed canvas 960×744, motion constants.',
        },
        {
            name: 'SlopLookAndFeel.h',
            role: 'Renders standard JUCE widgets from tokens. Never positions anything.',
        },
        {
            name: 'SlopComponents.h',
            role: 'Structural components: ModuleCard, MacroSlot, HeaderBar, UtilityFooter, GlyphCanvas (audio-reactive), WaveformScope (real signal).',
        },
        {
            name: 'PluginEditor',
            role: 'Layout only, inside resized().',
        },
    ],
    layoutRules: {
        location: 'docs/LAYOUT-RULES.md',
        approach: 'Position rules live apart from the code, framed mostly as exclusion rules (negatives) plus one positive rule.',
        positiveRule: 'The DSP signal chain reads left to right.',
        scope: 'Applies only to brand-original plugins — real pedal clones follow the original pedal\'s design.',
    },
    uiFeed: {
        name: 'UiFeed',
        description:
            'Atomic, lock-free, no memory allocation on the audio thread. Feeds the GlyphCanvas and the WaveformScope, ' +
            'which draws the real normalized post-process signal — not a synthetic animation. So a compressor looks ' +
            'compressed in its own drawing.',
    },
};

// --- Catalog philosophy (from slopaudio-plugin-suite-v1.1-design-philosophy.md) ---

export const catalogPhilosophy = {
    title: 'V1.1 Design Philosophy',
    scope: '~120 exposed parameters total across the suite',
    principles: [
        'Advanced, automatable knobs for all effects — power users go deep and build their signature sound.',
        'Every parameter is saved with the session like the rest of the plugin state.',
        'Each effect gets its own "reset to default" button — today\'s sound is always recoverable.',
        'Simple mode + Advanced mode with a switcher that marks the current position with a lit LED — not just a toggle.',
    ],
    stance: 'Inspired, not a copy. The "dreamy" sound character is worth taking as inspiration; the reverb/modulation chain underneath does not need to match exactly. Chasing an identical sound goes against the fun of building it.',
    neuromarketing: 'A plugin\'s commercial success is driven as much by visual appeal as by sound quality — treated as a deliberate design lever, not an afterthought.',
    parityCounterargument: 'Exposing ~120 tweakable parameters lets users recreate a similar sound themselves if they want, without us having to do exact reverse engineering.',
};

// --- Infrastructure (from slopaudio-server-hosting-and-licensing-plan.md) ---

export const infrastructure = {
    licensing: {
        provider: 'Moonbase (moonbase.sh/docs/licensing)',
        status: 'Account created, testing if the demo tier works against our VSTs before committing further.',
        eula: 'The web needs a specific EULA because Moonbase requires it to create licenses — a draft text was shared.',
    },
    hosting: {
        current: 'Raspberry Pi 4 (confirmed EXT4-fs corruption on SD card — migrating to SSD)',
        planned: 'HP EliteDesk 800 G3 SFF (~25€ refurbished) to run all of SlopAudio under Ubuntu',
        status: 'Git pushes paused during migration window.',
    },
    openQuestions: [
        'Does the Moonbase demo tier suffice for launch, or is a paid tier needed?',
        'Has the EliteDesk migration happened, or is the Pi (now SSD) still the interim host?',
    ],
};

// --- Workflow (from the template CLAUDE.md + meeting notes) ---

export const workflowRules = [
    'Fast loop before CMake: the engine is JUCE-free, tested with a 2-second clang++.',
    'Source/engine/ is always JUCE-free — new DSP goes there as header-only structs.',
    'Donate back rigorously, but not mandatory. Ask before pushing to remote.',
    'UI discipline: colours/fonts/metrics always as named tokens, never loose in code.',
    'Verify before saying "done": engine tests → full build → pluginval level 8.',
    'Every new effect carries a "knob at 0 = signal intact" test — it has caught real bugs.',
    'Measure the output, never trust the derivation: a ×2 pitch shifter must measure ~2× frequency, not just "look correct".',
];

export const workflowPhilosophy = {
    sourceOfTruth: {
        title: 'The repo IS the source of truth',
        description:
            'A single repo (SLOPAUDIO-TEMPLATE) is simultaneously: style manual, code guide, best practices, ' +
            'AND the real template source code. It carries a CLAUDE.md that the AI reads automatically. ' +
            'Your flow: open a new conversation → give the repo link → the AI clones and digests it (~1 min) → ' +
            'then you commission the specific plugin. Everything that improves during a plugin gets "donated" back ' +
            'to the template (not mandatory — most plugins produce nothing donable, and that is normal).',
    },
    catalogReference: {
        title: 'BLEASS — catalog cohesion reference',
        description:
            'BLEASS (bleass.com) cited as a reference of a catalog with cohesive look-and-feel across all plugins ' +
            'of the brand ("te dan ganas de coleccionarlos todos") — distinct from the Crema Console approach, ' +
            'which has a more unique individual identity.',
    },
    designProcess: {
        title: 'Designs are made by hand, one by one',
        description:
            'The AI does not design alone. Designs are done one-by-one by hand, pass through Figma for manual retouch, ' +
            'then are handed to the AI for implementation. The AI places colours/fonts/metrics as tokens, but the ' +
            'visual decisions are human. darkneto: "no se le puede dejar hacer los diseños porque no molan nada".',
    },
    toolSeparation: {
        title: 'Tool separation rule',
        description:
            'General/research questions → normal chat, NEVER in Claude Code. In Code, only ask to *make* things, ' +
            'or very specific questions about what is being built ("this low-pass filter is wrong"). ' +
            'Reason: context cleanliness and token savings.',
    },
    figmaFlow: {
        title: 'Figma → AI implementation',
        description: 'You prefer to design in Figma and pass it to the AI ("si le das un Figma es manteca") — ' +
            'it picks it up as-is and corrects by iterating.',
    },
};

// --- Technical decisions (from vstgui-vs-juce-gui-integration-tradeoff.md) ---

export const technicalDecisions = [
    {
        id: 'vstgui-vs-juce',
        title: 'VSTGUI vs. JUCE GUI',
        status: 'unresolved',
        summary:
            'Steinberg\'s VSTGUI toolkit was raised as an option for building plugin GUIs. Counterpoint: combining ' +
            'VSTGUI with JUCE for DSP creates integration friction — the two frameworks were not designed to compose; ' +
            'JUCE already has its own GUI layer that VSTGUI would duplicate.',
        options: [
            'VSTGUI only for standalone/non-JUCE tooling',
            'Accept DSP-integration friction as the cost of VSTGUI\'s GUI capabilities',
        ],
        connection: 'Whichever GUI approach is chosen must support the planned simple/advanced mode switch with LED state indication.',
        relatedRisk: 'Existing JUCE build pain points on macOS 15 (BinaryData, LookAndFeel) referenced via juce-build-gotchas.',
    },
];

// --- LFO debate (from meeting 2026-07-17) ---

export const lfoDebate = {
    title: 'Internal LFOs vs. DAW automation',
    status: 'unresolved',
    summary:
        'The Chroma Console\'s "LFO" is actually motion recording (you move the knob, it records, it plays back) — ' +
        'dotcranky argues that is not a real LFO. Open question: do the plugins need internal LFOs, or is DAW ' +
        'automation (e.g. Ableton) enough?',
    practicalProblem:
        'The plugin has ~130 parameters in Advance mode — putting an assignable LFO per parameter would be ' +
        'inviable at the UI level.',
};

// --- Web / Tienda (from journal + ab-router-and-notion-qa) ---

export const webTienda = {
    title: 'Web / Tienda — 6-variant A/B test',
    techStack: 'React + Vite + Tailwind',
    description:
        '6 interchangeable A/B variants (/v/a…/v/f) were built for the VST store. 4 are layout-only variants on the ' +
        'same token system (centred/stacked, editorial asymmetric with numbered rails, fixed sidebar + list rows, ' +
        'full-bleed bands with scroll-snap). 2 are full redesigns from reference captures (with their own isolated ' +
        'token sets in .ve/.vf classes, to avoid breaking the "no loose hex in JSX" rule).',
    accessibility: {
        title: 'Accessibility — real WCAG fix',
        description:
            'When cloning slateandash.com, their hero in chartreuse was found to fail WCAG (~2:1 contrast). ' +
            'Fixed by keeping the hue identity but darkening text/other blocks to pass 4.5:1, verified with a real ' +
            'luminance calculation, not by eye.',
    },
    rule: 'When the text brief and reference captures disagree, the captures win, and the divergence is reported — do not follow text blindly.',
    notionQA: {
        title: 'Notion QA Pass 01',
        source: 'Notion database — SlopAudio QA',
        databaseUrl: 'https://app.notion.com/p/profitsarts/3a47b29200d180918039d5c194d7a95a?v=6737b29200d1820da993883767fbf5be',
        commit: '17bb578',
        status: 'All 9 issues fixed',
        issues: [
            {
                num: 1,
                component: 'Header (All)',
                issue: 'Cart/User button placement and alignment',
                fix: 'Reordered buttons: Cart sits to the left, Login/User profile sits to the right of it.',
            },
            {
                num: 2,
                component: 'Header (All)',
                issue: 'User login button missing on variant headers',
                fix: 'Restored UserButton (auth state + Link to account) across all headers: A-D, E corner, and F overlay.',
            },
            {
                num: 3,
                component: 'Variant B',
                issue: 'Plugin cards misaligned due to staggered columns',
                fix: 'Removed the staggered 2-column styling. Set product description to flex-1 so card actions line up vertically.',
            },
            {
                num: 4,
                component: 'SpecRow',
                issue: 'Table cell data touching boundaries on mobile',
                fix: 'Added horizontal padding (px-md) to separate labels and values from the edges.',
            },
            {
                num: 5,
                component: 'Store Hero (G)',
                issue: 'HALO art rotate animation on hover was not fluid',
                fix: 'Deactivated the hover rotation transition.',
            },
            {
                num: 6,
                component: 'ProductCard',
                issue: 'Hover zoom felt too mechanical/abrupt',
                fix: 'Added smoother transition constants to tailwind.config.js: duration-slow (400ms) + ease-emphasized.',
            },
            {
                num: 7,
                component: 'AuthModal',
                issue: 'Security risk: sign up has no password matching check',
                fix: 'Restored the repeat-password field with validation matching logic.',
            },
            {
                num: 8,
                component: 'Account Page',
                issue: 'License items list spacing was cramped',
                fix: 'Added pl-md/pb-md (12px) padding to list containers.',
            },
            {
                num: 9,
                component: 'Icon (Apple)',
                issue: 'Apple logo leaf/top was clipped on Safari/Chrome',
                fix: 'Replaced the raw SVG paths to draw the full Apple mark properly.',
            },
        ],
    },
    unverified: 'The 6 variants have not been visually reviewed on a running dev server — only lint/build/contrast pass.',
};

// --- Meeting notes (2026-07-22) ---

export const meetingNotes = {
    date: '2026-07-22 (Reunión 02)',
    participants: ['frusler (user)', 'dotcranky'],
    reflections: [
        'Prioritizing release & Figma design system over over-engineering: avoid getting overwhelmed by complex multi-tasking (wiki ingestion, Discord chats). Focus on hands-on design in Figma, assisted by AI.',
        'Visual identity update: MonoLookAndFeel renamed locally to SlopLookAndFeel with strict black & white monochrome styling (no unnecessary colorinchis).',
        'JUCE UI Component Taxonomy: extracted full DSP/JUCE UI component taxonomy via Gemini and injected into Claude to align AI codegen with designer workflow.',
        'Figma ↔ Claude MCP integration: leveraging Figma + Claude Design (Code Connect) to extract structural tokens and map UI components bidirectionally.',
    ],
    actionItems: [
        { responsible: 'frusler', task: 'Build core UI components in Figma based on JUCE taxonomy and feed design system rules to Claude.' },
        { responsible: 'frusler', task: 'Finish Design Systems Master modules for portfolio deadline in September.' },
        { responsible: 'dotcranky / frusler', task: 'Test Figma + Claude MCP Code Connect workflow to extract tokens directly into codebase.' },
    ],
};