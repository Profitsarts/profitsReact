import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects_v2';
import ProjectCard from '../components/ProjectCard';
import HeroHeader from '../components/HeroHeader';
import HeroCarousel from '../components/HeroCarousel';

const FILTERS = [
    { label: 'All Projects', value: 'all' },
    { label: 'UX/UI', value: 'ux_ui' },
    { label: 'Design', value: 'design' },
    { label: 'Illustration', value: 'illustration' },
    { label: 'Layout', value: 'layout' },
    { label: 'Branding', value: 'branding' },
    { label: 'Web', value: 'web' },
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projects;
        return projects.filter(project => project.tags.includes(activeFilter));
    }, [activeFilter]);

    // First 8 projects for Case Studies
    const caseStudies = projects.slice(0, 8);

    return (
        <div>
            {/* Hero Header */}
            <HeroHeader />

            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Case Studies Section - SEE anchor */}
            <div id="see" className="mt-16 container mx-auto px-6">
                <div className="border-y border-[#323a45] py-4 mb-16">
                    <h2 className="text-[1.8rem] md:text-[2.6rem] tracking-[0.1em] text-center uppercase">
                        Case Studies
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {caseStudies.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* SEE Section - Portfolio Grid */}
            <div className="my-16 container mx-auto px-6">
                <div className="border-y border-[#323a45] py-4 mb-12">
                    <h2 className="text-[1.8rem] md:text-[2.6rem] tracking-[0.1em] text-center uppercase">
                        See
                    </h2>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`
                relative px-4 py-2 rounded-full text-sm font-medium tracking-wider transition-colors
                ${activeFilter === filter.value ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'}
              `}
                        >
                            {activeFilter === filter.value && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-[#323a45] rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{filter.label}</span>
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* TOUCH Section - Contact Form */}
            <div id="touch" className="mt-20">
                {/* Header Banner */}
                <div className="bg-[#323a45] py-12">
                    <h2 className="text-[1.8rem] md:text-[2.6rem] tracking-[0.1em] text-white text-center uppercase">
                        Touch
                    </h2>
                </div>

                {/* Contact Form Container */}
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
                        {/* Contact Details (span3) */}
                        <div className="md:col-span-3 md:pt-[5rem]">
                            <div className="contact-details border-y-2 border-[#323a45] py-6 text-center md:text-left">
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Contact Details</h4>
                                <h3 className="text-[1.3rem] mb-2">Profits Arts'n'Grafx</h3>
                                <p className="text-[#3aafb9] mb-1">
                                    <a href="mailto:profitsarts@gmail.com" className="hover:text-[#f61067]">profitsarts@gmail.com</a>
                                </p>
                                <p>+34 656 559 570</p>
                            </div>
                        </div>

                        {/* Form (span9) */}
                        <div className="md:col-span-9">
                            <h4 className="text-[1.8rem] md:text-[2.8rem] mb-8 font-light">Write me something!</h4>
                            <form
                                className="space-y-6"
                                action="https://formspree.io/f/xrgprokr"
                                method="POST"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-[#f61067] bg-[#f8f8f8] text-[#323a45]"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-[#f61067] bg-[#f8f8f8] text-[#323a45]"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Your Message"
                                    rows={8}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-[#f61067] bg-[#f8f8f8] text-[#323a45] resize-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#323a45] hover:bg-[#f61067] text-[#f8f8f8] font-medium px-10 py-4 rounded transition-colors uppercase tracking-widest text-sm"
                                >
                                    Send Your Email
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
