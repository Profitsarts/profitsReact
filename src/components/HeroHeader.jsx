import { motion } from 'framer-motion';

const ROLES = [
    'Design System Owner · Design Engineer',
    'Digital Product Designer',
    'UX Research → UI',
    'AI-Augmented DesignOps',
];

const HeroHeader = () => {
    const handleScrollToWork = () => {
        const element = document.getElementById('see');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="bg-[#f8f8f8] py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Identity */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col items-center lg:items-start"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Photo */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white overflow-hidden mb-8 shadow-sm">
                            <img
                                src="assets/img/avatar-luis-sierra.jpg"
                                alt="Luis Sierra, Senior Digital Product Designer"
                                className="w-full h-full object-cover"
                                width="448"
                                height="448"
                            />
                        </div>

                        {/* Name */}
                        <h2
                            className="text-[2rem] md:text-[2.4rem] leading-tight mb-4 text-center lg:text-left"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                        >
                            Luis Sierra
                        </h2>

                        {/* Role Tags */}
                        <div className="flex flex-col gap-2 w-full">
                            {ROLES.map((role, i) => (
                                <motion.span
                                    key={role}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                    className="text-[0.7rem] uppercase tracking-[0.14em] text-[#323a45] border border-[#323a45]/30 px-3 py-1.5 rounded-[2px] text-center lg:text-left"
                                    style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                                >
                                    {role}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Value Proposition */}
                    <motion.div
                        className="lg:col-span-8 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    >
                        {/* Manifesto Headline */}
                        <h1
                            className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.15] tracking-[-0.02em] mb-4 text-[#323a45]"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                        >
                            Designing systems for data-dense digital products —
                            <span className="text-[#f61067]"> where complexity demands architectural thinking and clarity is never negotiable.</span>
                        </h1>

                        {/* Divider */}
                        <div className="w-16 h-[2px] bg-[#f61067] mb-8" />

                        {/* Paragraph 1: Surgeon + Scale */}
                        <p
                            className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75] mb-5"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            I operate at the hardest end of the spectrum — multi-module, operationally critical products where a misread data point has real consequences. As Design System Owner for Jungheinrich's Enterprise FMS, I built and governed 150+ components across 8 product modules alongside multiple software engineering teams, establishing the single source of truth between design and production. That level of precision transfers to any product.
                        </p>

                        {/* Paragraph 2: Bridge + AI */}
                        <p
                            className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75] mb-10"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            Beyond the pixels, I bridge Design, Product, and Engineering — translating UX research and complex discovery into precise, high-density interfaces. I ship functional prototypes that validate business logic from day one, and close the loop with AI-augmented pipelines that convert design data into machine-readable assets for interpretation-free handoffs direct to the IDE.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:profitsarts@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#323a45] text-[#f8f8f8] rounded-full text-sm font-medium tracking-wider uppercase hover:bg-[#f61067] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                                style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                            >
                                Let's Talk
                            </a>
                            <button
                                onClick={handleScrollToWork}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#323a45] text-[#323a45] rounded-full text-sm font-medium tracking-wider uppercase hover:bg-[#323a45] hover:text-white transition-all duration-300"
                                style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                            >
                                See Work ↓
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;
