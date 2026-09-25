import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Buttons reuse the home .btn archetype (globals.css): 0 radius, --frame border,
// uppercase Avant Garde, --signal hover, 2px press offset.
const ProjectNavBar = ({ prevProject, nextProject, isFirst, isLast, sticky = true }) => {
    return (
        <div className={sticky
            ? 'sticky top-0 z-[99] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-[8px] border-b-[3px] border-solid border-[var(--rule-color)]'
            : 'border-y-[3px] border-solid border-[var(--rule-color)]'}>
            <div className="flex items-center justify-between py-4">
                {/* Left Group: Previous */}
                <div className="flex-1 flex items-center justify-start min-w-0">
                    {!isFirst && prevProject ? (
                        <Link
                            to={`/project/${prevProject.id}`}
                            className="btn max-w-full"
                            title={`Previous: ${prevProject.title}`}
                            aria-label={`Previous project: ${prevProject.title}`}
                        >
                            <ChevronLeft strokeWidth={2.5} />
                            <span className="hidden sm:inline truncate max-w-[220px]">{prevProject.title}</span>
                        </Link>
                    ) : (
                        <div className="w-11 h-11" /> /* Spacer */
                    )}
                </div>

                {/* Center Group: Grid/Home */}
                <div className="flex-shrink-0 mx-4">
                    <Link
                        to="/"
                        state={{ scrollTo: 'see' }}
                        className="btn !px-0"
                        title="Back to Portfolio"
                        aria-label="Back to Portfolio"
                    >
                        <div className="grid grid-cols-3 gap-[2px]">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-[3px] h-[3px] bg-current" />
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Right Group: Next */}
                <div className="flex-1 flex items-center justify-end min-w-0">
                    {!isLast && nextProject ? (
                        <Link
                            to={`/project/${nextProject.id}`}
                            className="btn max-w-full"
                            title={`Next: ${nextProject.title}`}
                            aria-label={`Next project: ${nextProject.title}`}
                        >
                            <span className="hidden sm:inline truncate max-w-[220px]">{nextProject.title}</span>
                            <ChevronRight strokeWidth={2.5} />
                        </Link>
                    ) : (
                        <div className="w-11 h-11" /> /* Spacer */
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectNavBar;
