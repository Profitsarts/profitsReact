import React from 'react'; // eslint-disable-line
import { projects } from '../data/projects_v2';
import ProjectCard from '../components/ProjectCard';
import HeroHeader from '../components/HeroHeader';
import ScaleStrip from '../components/ScaleStrip';
import ExpertisePillars from '../components/ExpertisePillars';

const Portfolio = () => {
    return (
        <div>
            {/* 1 — Hero */}
            <HeroHeader />

            {/* 2 — Scale: clients + metrics */}
            <ScaleStrip />

            {/* 3 — Expertise: 4 pillars */}
            <ExpertisePillars />

            {/* 4 — Case Studies */}
            <div id="see" className="mt-0">
                <div className="bg-[#323a45] py-12">
                    <h2
                        className="text-[1.8rem] md:text-[2.6rem] tracking-[0.1em] text-white text-center uppercase"
                        style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                    >
                        Case Studies
                    </h2>
                </div>
                <div className="container mx-auto px-6 mt-16 pb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>

            {/* 5 — Touch */}
            <div id="touch" className="mt-20">
                <div className="bg-[#323a45] py-12">
                    <h2
                        className="text-[1.8rem] md:text-[2.6rem] tracking-[0.1em] text-white text-center uppercase"
                        style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                    >
                        Touch
                    </h2>
                </div>
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
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
                        <div className="md:col-span-9">
                            <h4 className="text-[1.8rem] md:text-[2.8rem] mb-8 font-light">Write me something!</h4>
                            <form className="space-y-6" action="https://formspree.io/f/xrgprokr" method="POST">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" name="name" required placeholder="Full Name" className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-[#f61067] bg-[#f8f8f8] text-[#323a45]" />
                                    <input type="email" name="email" required placeholder="Email Address" className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-[#f61067] bg-[#f8f8f8] text-[#323a45]" />
                                </div>
                                <textarea name="message" required placeholder="Your Message" rows={8} className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-[#f61067] bg-[#f8f8f8] text-[#323a45] resize-none" />
                                <button type="submit" className="bg-[#323a45] hover:bg-[#f61067] text-[#f8f8f8] font-medium px-10 py-4 rounded transition-colors uppercase tracking-widest text-sm">
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
