import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import mediumZoom from 'medium-zoom'
import styles from './ProjectDetail.module.css'
import ProjectNavBar from '../components/ProjectNavBar'
import { projects_v2 } from '../data/projects_v2'

export default function Project01() {
  const { id } = useParams()
  const navigate = useNavigate()
  const articleRef = useRef(null)

  // This component is specifically for project "01" (SoC)
  const projectIndex = projects_v2.findIndex(p => p.id === "01")
  const project = projects_v2[projectIndex]
  
  const isFirst = projectIndex === 0
  const isLast = projectIndex === projects_v2.length - 1
  const nextProject = !isLast ? projects_v2[projectIndex + 1] : null
  const prevProject = !isFirst ? projects_v2[projectIndex - 1] : null

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Medium zoom initialization
    const images = articleRef.current?.querySelectorAll('img[data-zoomable]')
    if (!images || images.length === 0) return
    
    const zoom = mediumZoom(images, {
      margin: 24,
      background: '#111111e6',
      scrollOffset: 60,
    })
    
    return () => zoom.detach()
  }, [])

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

  if (!project) return <div>Project not found</div>

  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-20">
      {/* Navigation same as original portfolio */}
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
          <p className={styles.kicker}>Product Design · IoT · SaaS</p>
          <h1 className={styles.h1}>FMS: Battery Monitoring (SoC)</h1>
          <p className={styles.subtitle}>
            Architecting a unified IoT battery-monitoring visualization 
            for enterprise fleet management.
          </p>

          {/* COVER IMAGE: Full Width */}
          <figure className={styles.figure}>
            <img
              src="assets/img/portfolio/full/07-soc-00-FULL.jpg"
              alt="FMS SoC Dashboard"
              data-zoomable
              className={styles.figureImg}
            />
            <figcaption className={styles.caption}>
               Architected a unified battery-monitoring visualization for Jungheinrich's Enterprise FMS.
            </figcaption>
          </figure>

          {/* MEDIUM READING COLUMN: Constrained to 680px */}
          <div className={styles.contentWrapper}>
            <div 
                className="medium-content-render"
                dangerouslySetInnerHTML={{ __html: project.content }}
                ref={(el) => {
                    if (el) {
                        // Ensure all images in content are zoomable
                        const contentImages = el.querySelectorAll('img');
                        contentImages.forEach(img => {
                            if (!img.hasAttribute('data-zoomable')) {
                                img.setAttribute('data-zoomable', 'true');
                                img.style.cursor = 'pointer';
                                img.style.width = '100%';
                                img.style.marginBottom = '0.5em';
                            }
                        });
                        
                        // Clean up inline styles that might break Medium look
                        const blockquotes = el.querySelectorAll('blockquote');
                        blockquotes.forEach(bq => {
                           bq.removeAttribute('style');
                        });
                    }
                }}
            />
          </div>

        </article>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
          <ProjectNavBar
              prevProject={prevProject}
              nextProject={nextProject}
              isFirst={isFirst}
              isLast={isLast}
              sticky={false}
          />
      </div>
    </div>
  )
}
