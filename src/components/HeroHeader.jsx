import React from 'react';
import { motion } from 'framer-motion';

const ROLES = [
    'Design Systems Architect',
    'UX Research → UI',
    'AI-Augmented DesignOps',
    'Enterprise B2B · Backoffice · Industrial',
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
                        {/* Photo Placeholder */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-[#e8e8e8] border-2 border-[#d0d0d0] overflow-hidden mb-8 flex items-center justify-center shadow-sm">
                            <svg className="w-16 h-16 text-[#b0b0b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
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
                            Building the systems that make enterprise operations legible —
                            <span className="text-[#f61067]"> where design precision is a safety requirement, not an aesthetic choice.</span>
                        </h1>

                        {/* Divider */}
                        <div className="w-16 h-[2px] bg-[#f61067] mb-8" />

                        {/* Paragraph 1 */}
                        <p
                            className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75] mb-5"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            Design Engineering Lead and sole Design System Architect for Jungheinrich's Enterprise FMS — a multi-module platform serving DHL, Amazon, and LIDL across thousands of industrial vehicles. I govern 150+ components across 8 product modules and ~40 engineers, establishing the single source of truth between design and production.
                        </p>

                        {/* Paragraph 2 */}
                        <p
                            className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75] mb-10"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            I translate UX research and complex discovery into high-density industrial interfaces — then close the loop by integrating AI tooling into the DesignOps pipeline, converting Figma data into machine-readable assets and shipping interpretation-free handoffs direct to the IDE.
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
