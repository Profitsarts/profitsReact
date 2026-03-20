import React from 'react';
import { motion } from 'framer-motion';

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
                            <svg 
                                className="w-16 h-16 text-[#b0b0b0]" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={1.5} 
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
                                />
                            </svg>
                        </div>

                        {/* Name & Title */}
                        <h2
                            className="text-[2rem] md:text-[2.4rem] leading-tight mb-3 text-center lg:text-left"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                        >
                            I'm Luis Sierra
                        </h2>
                        <p
                            className="text-[1rem] md:text-[1.1rem] text-[#555] leading-relaxed text-center lg:text-left"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            Digital Product Designer &amp; Design Systems Owner.
                            <br />
                            <span className="text-[#777]">
                                Specialized in Enterprise B2B SaaS, Backoffice &amp; Operations.
                            </span>
                        </p>
                    </motion.div>

                    {/* Right Column: Value Proposition & CTA */}
                    <motion.div
                        className="lg:col-span-8 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    >
                        {/* Main Headline */}
                        <h1
                            className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.15] tracking-[-0.02em] mb-8 text-[#323a45]"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                        >
                            Orchestrating scalable design systems for data-dense, Enterprise B2B products.
                        </h1>

                        {/* Paragraph 1: DesignOps Focus */}
                        <p
                            className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75] mb-5"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            I specialize in designing complex, industrial interfaces where clarity is critical. Beyond the pixels, I drive DesignOps processes—establishing governance, defining metrics, and leading cross-functional orchestration to ensure design and engineering operate as one.
                        </p>

                        {/* Paragraph 2: AI & Execution */}
                        <p
                            className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75] mb-10"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            By integrating emerging AI tools into this ecosystem, I build pipelines that turn design data into machine-readable assets. My goal is to ship functional prototypes that validate business logic from day one, ensuring a seamless, interpretation-free handoff straight to the IDE.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:profitsarts@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#323a45] text-[#f8f8f8] rounded-full text-sm font-medium tracking-wider uppercase hover:bg-[#f61067] hover:!text-white transition-all duration-300 shadow-md hover:shadow-lg"
                                style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                            >
                                Let's Talk
                            </a>
                            <button
                                onClick={handleScrollToWork}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#323a45] text-[#323a45] rounded-full text-sm font-medium tracking-wider uppercase hover:bg-[#323a45] hover:text-white transition-all duration-300"
                                style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                            >
                                SEE ↓
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;
