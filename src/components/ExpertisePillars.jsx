import { motion } from 'framer-motion';

const PILLARS = [
    {
        index: '01',
        title: 'Design Systems Architect',
        body: 'Sole owner of a 150+ component system governing 8 enterprise modules and ~40 engineers. Token strategy, Storybook governance, Figma Variables, and Figma-to-React pipelines — from atom to organism, from token to production.',
        tags: ['Design Tokens', 'Storybook', 'Figma Variables', 'Governance'],
    },
    {
        index: '02',
        title: 'UX Research → UI',
        body: 'Translating complex discovery into high-density industrial interfaces. Proxy research, contextual inquiry, heuristic analysis, and insight-to-screen conversion — bridging the gap between what users need and what engineers ship.',
        tags: ['Contextual Inquiry', 'Heuristic Analysis', 'Data Visualization', 'Backoffice'],
    },
    {
        index: '03',
        title: 'AI-Augmented DesignOps',
        body: 'Integrating AI tooling into design pipelines — converting Figma data into machine-readable assets and shipping interpretation-free handoffs direct to the IDE. Agentic orchestration as a design lever, not a gimmick.',
        tags: ['AI Tooling', 'Design Pipelines', 'Handoff Automation', 'DesignOps'],
    },
    {
        index: '04',
        title: 'Enterprise B2B · Industrial',
        body: 'Designing for scale under operational pressure. FMS, intralogistics, IoT telematics — products where a misread data point has fleet-level consequences. Clarity is a safety requirement. Ambiguity is a liability.',
        tags: ['FMS', 'Industrial IoT', 'Intralogistics', 'B2B SaaS'],
    },
];

const ExpertisePillars = () => (
    <section className="bg-[#f8f8f8] py-20">
        <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="mb-14">
                <span
                    className="text-[0.65rem] uppercase tracking-[0.2em] text-[#f61067]"
                    style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                >
                    Expertise
                </span>
                <h2
                    className="text-[1.8rem] md:text-[2.4rem] text-[#323a45] mt-2 leading-tight"
                    style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                >
                    Four disciplines. One integrated pipeline.
                </h2>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[#323a45]/10">
                {PILLARS.map((pillar, i) => (
                    <motion.div
                        key={pillar.index}
                        className="bg-[#f8f8f8] p-8 flex flex-col gap-6 group hover:bg-[#323a45] transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        {/* Index */}
                        <span
                            className="text-[0.65rem] uppercase tracking-[0.2em] text-[#f61067]"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                        >
                            {pillar.index}
                        </span>

                        {/* Title */}
                        <h3
                            className="text-[1rem] md:text-[1.1rem] text-[#323a45] group-hover:text-white leading-snug transition-colors duration-300"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                        >
                            {pillar.title}
                        </h3>

                        {/* Divider */}
                        <div className="w-8 h-[1px] bg-[#f61067]" />

                        {/* Body */}
                        <p
                            className="text-[0.85rem] text-[#666] group-hover:text-[#ccc] leading-[1.7] flex-1 transition-colors duration-300"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            {pillar.body}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {pillar.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-[0.6rem] uppercase tracking-[0.12em] border border-[#323a45]/30 group-hover:border-white/20 text-[#555] group-hover:text-[#aaa] px-2 py-1 rounded-[2px] transition-colors duration-300"
                                    style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ExpertisePillars;
