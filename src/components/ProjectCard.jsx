import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-900"
        >
            <Link to={`/project/${project.id}`} className="block w-full h-full">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs uppercase tracking-wider text-neutral-300 bg-neutral-800/50 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
