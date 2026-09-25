import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ProjectIndexRow — the replacement for ProjectCard.
 *
 * The old card was a 4:3 rounded tile with a magenta hover overlay: the
 * enterprise-SaaS pattern the redesign exists to remove. This is an index
 * line instead — ruled, numbered, typographically loud, with the thumbnail
 * as a peek rather than the subject.
 *
 * Layout mechanics:
 *   - every piece of information is its own block-level element
 *   - the hover peek is a decorative overlay anchored on two axes, gated
 *     behind a hover-capable pointer at 1024px and up
 *   - below 1024px the inline thumbnail carries the visual, no peek
 *
 * All styling comes from globals.css, which reads tokens.css. No values here.
 */

const TAG_LABEL = {
  ux_ui: 'UX / UI',
  design: 'Design',
  illustration: 'Illustration',
  layout: 'Layout',
  branding: 'Branding',
  web: 'Web',
};

function tagText(project) {
  if (project.category) return project.category;
  const tags = project.tags || [];
  return tags.map((t) => TAG_LABEL[t] || t).join(' · ');
}

// `number` is the entry's position in the full index; project.id stays the
// route key (ids have gaps, e.g. no 01 or 03).
const ProjectIndexRow = ({ project, number, flagship = false }) => {
  const thumb = project.thumbnail;

  return (
    <Link className="row" to={`/project/${project.id}`}>
      <img
        className="row-thumb"
        src={thumb}
        width="600"
        height="399"
        alt=""
        loading="lazy"
      />

      <span className="row-id">{String(number).padStart(2, '0')}</span>

      <span className="row-title">{project.title}</span>

      <span className="row-tags">
        {tagText(project)}
        {flagship && <span className="row-flag">Flagship</span>}
      </span>

      <span className="row-go" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>

      <span className="row-peek" aria-hidden="true">
        <img src={thumb} width="600" height="399" alt="" loading="lazy" />
      </span>
    </Link>
  );
};

export default ProjectIndexRow;
