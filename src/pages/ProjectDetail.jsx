import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects_v2';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const projectIndex = projects.findIndex(p => p.id === id);
    const project = projects[projectIndex];

    const nextProject = projects[(projectIndex + 1) % projects.length];
    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div>Project not found</div>;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">{project.description}</p>
                <div className="flex justify-center gap-2 mt-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-wider text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content or Gallery */}
            {project.content ? (
                <div
                    className="prose prose-invert max-w-none prose-img:rounded-lg prose-img:shadow-2xl prose-headings:text-white prose-p:text-neutral-300"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />
            ) : (
                <div className="space-y-8">
                    {project.images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={`${project.imagePath || '/assets/img/portfolio/full/'}${img.name}`}
                                alt={img.text || project.title}
                                className="w-full rounded-lg shadow-2xl"
                            />
                            {img.text && img.text !== project.title && (
                                <p className="text-center text-neutral-500 mt-2 text-sm italic">{img.text}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Navigation */}
            <div className="mt-20 border-t border-neutral-800 pt-10 flex justify-between items-center">
                <Link
                    to={`/project/${prevProject.id}`}
                    className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                    <div className="text-left">
                        <div className="text-xs uppercase tracking-widest text-neutral-600">Previous</div>
                        <div className="font-medium">{prevProject.title}</div>
                    </div>
                </Link>

                <Link
                    to={`/project/${nextProject.id}`}
                    className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors text-right"
                >
                    <div className="text-right">
                        <div className="text-xs uppercase tracking-widest text-neutral-600">Next</div>
                        <div className="font-medium">{nextProject.title}</div>
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
