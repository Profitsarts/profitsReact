import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects_v2';
import ProjectCard from '../components/ProjectCard';
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

    // First 7 projects for Case Studies
    const caseStudies = projects.slice(0, 7);

    return (
        <div>
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Case Studies Section */}
            <div className="my-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase tracking-widest">Case Studies</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {caseStudies.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* SEE Section */}
            <div className="my-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase tracking-widest">See</h2>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`
                relative px-4 py-2 rounded-full text-sm font-medium tracking-wider transition-colors
                ${activeFilter === filter.value ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}
              `}
                        >
                            {activeFilter === filter.value && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-neutral-800 rounded-full"
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
