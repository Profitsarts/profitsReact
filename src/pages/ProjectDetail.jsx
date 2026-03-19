import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects_v2';
import ProjectNavBar from '../components/ProjectNavBar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ProjectDetail = () => {
    const { id } = useParams();

    const projectIndex = projects.findIndex(p => p.id === id);
    const project = projects[projectIndex];

    const isFirst = projectIndex === 0;
    const isLast = projectIndex === projects.length - 1;

    const nextProject = !isLast ? projects[projectIndex + 1] : null;
    const prevProject = !isFirst ? projects[projectIndex - 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div className="container mx-auto px-6 py-20 text-center">Project not found</div>;

    // Filter only full images for the carousel
    const carouselImages = project.images ? project.images.filter(img => img.name.includes('FULL')) : [];
    // If no explicit FULL images found, use all images
    const slides = carouselImages.length > 0 ? carouselImages : (project.images || []);

    return (
        <div className="bg-[#f8f8f8] min-h-screen">
            <style>{`
                /* Original Blockquote Styles */
                .prose blockquote {
                    background: #e1e1e1;
                    border-left: 3px solid #f61067;
                    padding: 10px 15px;
                    font-style: normal;
                    color: #323a45;
                    font-family: inherit;
                    quotes: none;
                    margin-bottom: 1.5em;
                }
                /* Use this class in your HTML content for user quotes */
                .prose .user-quote {
                    font-style: italic;
                    background-color: #fdd0e1;
                    border-left: 4px solid #f61067;
                    padding: 15px;
                    margin-bottom: 1rem;
                    border-radius: 4px;
                    color: #323a45;
                }
                
                /* Custom Swiper Navigation */
                .swiper-button-next-custom,
                .swiper-button-prev-custom {
                    transition: all 0.25s ease-in-out !important;
                }
                .swiper-button-next-custom:hover,
                .swiper-button-prev-custom:hover {
                    opacity: 1 !important;
                }
                .swiper-button-next-custom:disabled,
                .swiper-button-prev-custom:disabled {
                    opacity: 0.2 !important;
                    cursor: auto !important;
                }
                /* Pagination bullets */
                .swiper-pagination-bullet-active {
                    background: #0d080c !important;
                }
            `}</style>

            {/* Wrapper for Aligned Navigation and Content */}
            <div className="max-w-5xl mx-auto px-6">
                <ProjectNavBar
                    prevProject={prevProject}
                    nextProject={nextProject}
                    isFirst={isFirst}
                    isLast={isLast}
                />

                <div className="py-8">

                {/* 1. Project Carousel (Top) */}
                <div className="mb-12 relative group">
                    <Swiper
                        modules={[Navigation, Pagination, EffectFade, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        effect="fade"
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.nextEl = '.swiper-button-next-custom';
                            swiper.params.navigation.prevEl = '.swiper-button-prev-custom';
                        }}
                        pagination={slides.length > 1 ? { clickable: true } : false}
                        autoplay={slides.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
                        loop={slides.length > 1}
                        className="w-full aspect-auto min-h-[300px] bg-neutral-100"
                    >
                        {slides.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={`${project.imagePath || '/assets/img/portfolio/full/'}${img.name}`}
                                        alt={img.text || project.title}
                                        className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                                    />
                                    {/* Optional caption overlay */}
                                    {img.text && (
                                        <div className="absolute bottom-4 left-0 right-0 text-center">
                                            <span className="bg-black/50 text-white px-3 py-1 text-sm rounded-sm">
                                                {img.text}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons - Only if more than 1 slide */}
                    {slides.length > 1 && (
                        <>
                            <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-[#323a45] text-[#f8f8f8] rounded-[2px] hover:bg-[#e1e1e1] hover:text-[#323a45] transition-colors shadow-md">
                                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                            </button>
                            <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-[#323a45] text-[#f8f8f8] rounded-[2px] hover:bg-[#e1e1e1] hover:text-[#323a45] transition-colors shadow-md">
                                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                            </button>
                        </>
                    )}
                </div>

                {/* 2. Title & Description (Below Carousel) */}
                <div className="mb-12 text-center pb-8 border-b border-dotted border-[#939fb0]">
                    <h1 className="text-[2.2rem] md:text-[2.9rem] tracking-tight mb-2">
                        {project.title}
                    </h1>
                    {/* Subtitle/Heading if available */}
                    <h2 className="text-[1.5rem] md:text-[1.7rem] font-light mb-8">
                        {project.tags.join(', ')}
                    </h2>

                    {project.description && (
                        <div className="max-w-3xl mx-auto">
                            <p className="text-base leading-relaxed">{project.description}</p>
                        </div>
                    )}
                </div>

                {/* 3. Main Content / Details */}
                {project.content ? (
                    <div
                        className="prose prose-neutral prose-lg max-w-none 
                        prose-headings:text-[#323a45]
                        prose-p:text-[#323a45] prose-p:leading-relaxed
                        prose-a:text-[#f61067] prose-a:no-underline hover:prose-a:text-[#323a45]
                        prose-img:shadow-md prose-img:border prose-img:border-neutral-100 prose-img:p-2 prose-img:bg-white"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                ) : (
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                        className="w-full shadow-md bg-white p-2 border border-neutral-100"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
                    {/* 4. Bottom Navigation */}
                    <div className="mt-16 pt-8 border-t border-dotted border-[#939fb0]">
                        <ProjectNavBar
                            prevProject={prevProject}
                            nextProject={nextProject}
                            isFirst={isFirst}
                            isLast={isLast}
                            sticky={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
