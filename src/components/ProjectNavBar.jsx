import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

const ProjectNavBar = ({ prevProject, nextProject, isFirst, isLast, sticky = true }) => {
    return (
        <div className={`${sticky ? 'sticky top-0 z-[99] bg-[#f8f8f8]/95 backdrop-blur-sm' : ''} border-y border-dotted border-[#939fb0]`}>
            <div className="flex items-center justify-between py-4">
                {/* Left Group: Previous */}
                <div className="flex-1 flex items-center justify-start min-w-0">
                    {!isFirst && prevProject ? (
                        <Link
                            to={`/project/${prevProject.id}`}
                            className="group flex items-center gap-4 hover:opacity-75 transition-opacity max-w-full"
                        >
                            {/* Arrow Box */}
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#e1e1e1] rounded-[2px] group-hover:bg-[#323a45] group-hover:text-[#f8f8f8] transition-colors">
                                <ChevronLeft className="w-4 h-4 text-inherit" strokeWidth={2.5} />
                            </div>
                            {/* Text Label */}
                            <div className="hidden sm:flex flex-col items-start truncate">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#939fb0] mb-0.5">Previous</div>
                                <div className="font-['ITCAVANTGARDEGOTHICLTMEDIUM'] font-medium text-[#323a45] text-sm md:text-base truncate">{prevProject.title}</div>
                            </div>
                        </Link>
                    ) : (
                        <div className="w-10 h-10" /> /* Spacer */
                    )}
                </div>

                {/* Center Group: Grid/Home */}
                <div className="flex-shrink-0 mx-4">
                    <Link
                        to="/"
                        state={{ scrollTo: 'see' }}
                        className="w-10 h-10 flex items-center justify-center border border-[#323a45] rounded-[2px] hover:bg-[#323a45] hover:text-[#f8f8f8] transition-all group"
                        title="Back to Portfolio"
                    >
                        <div className="grid grid-cols-3 gap-[2px]">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-[3px] h-[3px] bg-[#323a45] group-hover:bg-[#f8f8f8] transition-colors" />
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Right Group: Next */}
                <div className="flex-1 flex items-center justify-end min-w-0">
                    {!isLast && nextProject ? (
                        <Link
                            to={`/project/${nextProject.id}`}
                            className="group flex items-center gap-4 hover:opacity-75 transition-opacity max-w-full"
                        >
                            {/* Text Label */}
                            <div className="hidden sm:flex flex-col items-end truncate">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#939fb0] mb-0.5">Next</div>
                                <div className="font-['ITCAVANTGARDEGOTHICLTMEDIUM'] font-medium text-[#323a45] text-sm md:text-base truncate">{nextProject.title}</div>
                            </div>
                            {/* Arrow Box */}
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#e1e1e1] rounded-[2px] group-hover:bg-[#323a45] group-hover:text-[#f8f8f8] transition-colors">
                                <ChevronRight className="w-4 h-4 text-inherit" strokeWidth={2.5} />
                            </div>
                        </Link>
                    ) : (
                        <div className="w-10 h-10" /> /* Spacer */
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectNavBar;
