import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects_v2';
import mediumZoom from 'medium-zoom';
import ProjectNavBar from '../components/ProjectNavBar';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const articleRef = useRef(null);

    const projectIndex = projects.findIndex(p => p.id === id);
    const project = projects[projectIndex];

    const isFirst = projectIndex === 0;
    const isLast = projectIndex === projects.length - 1;

    const nextProject = !isLast ? projects[projectIndex + 1] : null;
    const prevProject = !isFirst ? projects[projectIndex - 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        // Medium zoom initialization
        const images = articleRef.current?.querySelectorAll('img[data-zoomable]');
        if (!images || images.length === 0) return;
        
        const zoom = mediumZoom(images, {
          margin: 24,
          background: '#111111e6',
          scrollOffset: 60,
        });
        
        return () => zoom.detach();
    }, [id]);

    useEffect(() => {
        const handleZoomOpened = () => document.body.classList.add('is-zooming');
        const handleZoomClosed = () => document.body.classList.remove('is-zooming');
        document.addEventListener('medium-zoom:open', handleZoomOpened);
        document.addEventListener('medium-zoom:close', handleZoomClosed);
        return () => {
            document.removeEventListener('medium-zoom:open', handleZoomOpened);
            document.removeEventListener('medium-zoom:close', handleZoomClosed);
        };
    }, []);

    if (!project) return <div className="container mx-auto px-6 py-20 text-center">Project not found</div>;

    // Determine Cover Image
    let coverImageSrc = project.featuredImage;
    if (!coverImageSrc && project.images && project.images.length > 0) {
        const basePath = project.imagePath || 'assets/img/portfolio/full/';
        coverImageSrc = `${basePath}${project.images[0].name}`;
    }
    const coverImageAt2x = coverImageSrc ? coverImageSrc.replace(/\.(jpg|png|webp)/, '@2x.$1') : '';

    return (
        <div className="bg-[#f8f8f8] min-h-screen pb-20">
            {/* Sticky Navigation */}
            <div className="sticky top-0 z-[99] bg-[#f8f8f8]/95 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6">
                    <ProjectNavBar
                        prevProject={prevProject}
                        nextProject={nextProject}
                        isFirst={isFirst}
                        isLast={isLast}
                        sticky={false}
                    />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className={styles.pageWrapper}>
                    <article ref={articleRef} className={styles.article}>

                        {/* HEADER: Medium Styled, Full Width */}
                        <p className={styles.kicker}>
                            {(project.tags || (project.category ? project.category.split(/\s*\/\s*/) : [])).join(' · ')}
                        </p>
                        <h1 className={styles.h1}>{project.title}</h1>
                        <p className={styles.subtitle}>{project.description}</p>

                        {/* COVER IMAGE: Full Width */}
                        {coverImageSrc && (
                            <figure className={styles.figure}>
                                <img
                                    src={coverImageSrc}
                                    srcSet={coverImageAt2x ? `${coverImageSrc} 1x, ${coverImageAt2x} 2x` : undefined}
                                    alt={project.title}
                                    data-zoomable
                                    className={styles.figureImg}
                                />
                                {project.description && (
                                    <figcaption className={styles.caption}>
                                        {project.description}
                                    </figcaption>
                                )}
                            </figure>
                        )}

                        {/* MEDIUM READING COLUMN: Constrained to 680px */}
                        <div className={styles.contentWrapper}>
                            {project.content ? (
                                <div
                                    className="medium-content-render"
                                    dangerouslySetInnerHTML={{ __html: project.content }}
                                    ref={(el) => {
                                        if (el) {
                                            // Ensure all images in content are zoomable and have retina fallback
                                            const contentImages = el.querySelectorAll('img');
                                            contentImages.forEach(img => {
                                                if (!img.hasAttribute('data-zoomable')) {
                                                    img.setAttribute('data-zoomable', 'true');
                                                    img.style.cursor = 'pointer';
                                                    img.style.width = '100%';
                                                    img.style.marginBottom = '0.5em';
                                                }
                                                const src = img.getAttribute('src');
                                                if (src && !img.dataset.processed && !src.includes('@2x') && !src.startsWith('http')) {
                                                    const at2x = src.replace(/\.(jpg|png|webp)/, (match) => `@2x${match}`);
                                                    img.srcset = `${src} 1x, ${at2x} 2x`;
                                                    img.dataset.processed = 'true';
                                                }
                                            });
                                            
                                            // Clean up inline styles that might break Medium look
                                            const blockquotes = el.querySelectorAll('blockquote');
                                            blockquotes.forEach(bq => {
                                                bq.style.backgroundColor = '#f4f4f4';
                                                bq.style.borderLeft = '3px solid #323a45';
                                                bq.style.padding = '15px 20px';
                                                bq.style.fontStyle = 'italic';
                                                bq.style.color = 'rgba(0, 0, 0, 0.7)';
                                                bq.style.boxShadow = 'none';
                                                bq.style.borderRadius = '2px';
                                            });
                                        }
                                    }}
                                />
                            ) : (
                                <div className="space-y-12">
                                    {/* Fallback for projects with only an image array and no HTML content */}
                                    {project.images.slice(1).map((img, index) => {
                                        const basePath = project.imagePath || 'assets/img/portfolio/full/';
                                        const src = `${basePath}${img.name}`;
                                        const at2x = src.replace(/\.(jpg|png|webp)/, '@2x.$1');
                                        return (
                                            <figure key={index} className="my-8">
                                                <img
                                                    src={src}
                                                    srcSet={`${src} 1x, ${at2x} 2x`}
                                                    alt={img.text || project.title}
                                                    data-zoomable
                                                    className="w-full h-auto rounded-[4px] cursor-pointer"
                                                    style={{ width: '100%', marginBottom: '0.5em' }}
                                                />
                                                {img.text && (
                                                    <figcaption className="text-center text-sm text-gray-500 mt-2 italic">
                                                        {img.text}
                                                    </figcaption>
                                                )}
                                            </figure>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                    </article>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="max-w-5xl mx-auto px-6 mt-16 pb-12">
                <ProjectNavBar
                    prevProject={prevProject}
                    nextProject={nextProject}
                    isFirst={isFirst}
                    isLast={isLast}
                    sticky={false}
                />
            </div>
        </div>
    );
};

export default ProjectDetail;
