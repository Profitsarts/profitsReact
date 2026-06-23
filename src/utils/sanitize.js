import DOMPurify from 'dompurify';

// Project case-study content is static, self-authored HTML stored in
// src/data/projects_v2.js. Sanitizing it before injection via
// dangerouslySetInnerHTML is defense-in-depth: it keeps the rendered markup
// identical while guaranteeing no script/handler can ever slip in if the
// content source changes (e.g. moves to a CMS or markdown pipeline).
//
// data-* attributes are preserved because the pages rely on `data-zoomable`
// for the medium-zoom integration.
export function sanitizeHtml(html) {
  if (!html) return '';
  return DOMPurify.sanitize(html, { ADD_ATTR: ['data-zoomable'] });
}
