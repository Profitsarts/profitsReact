import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects_v2';
import FlagshipVibras from '../components/FlagshipVibras';
import ProjectIndexRow from '../components/ProjectIndexRow';

/**
 * Portfolio — recomposed landing page.
 *
 * Removed from the old page:
 *   - HeroHeader (the SaaS positioning block with the grey SVG avatar)
 *   - HeroCarousel (a decorative autoplay fade with no informational role)
 *   - the Case Studies grid and the See grid, which rendered the same
 *     ProjectCard twice in the same three-column layout
 *
 * In their place: the flagship, one statement, one ruled index.
 */

const FLAGSHIP_ID = '36';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'UX / UI', value: 'ux_ui' },
  { label: 'Design', value: 'design' },
  { label: 'Illustration', value: 'illustration' },
  { label: 'Layout', value: 'layout' },
  { label: 'Branding', value: 'branding' },
  { label: 'Web', value: 'web' },
];

const DISCIPLINES = [
  'Art direction',
  'Illustration',
  'Editorial layout',
  'Branding',
  'UX & UI',
  'Web',
  'Design systems',
  'Generative production',
];

/**
 * Fobos carries a category string rather than filter tags. Normalising it to
 * ux_ui + design keeps it reachable from the filters; its own category string
 * is still what the row displays.
 */
const TAG_OVERRIDES = {
  '02': ['ux_ui', 'design'],
};

function filterTags(project) {
  return TAG_OVERRIDES[project.id] || project.tags || [];
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const shown = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => filterTags(p).includes(activeFilter));
  }, [activeFilter]);

  const activeLabel = FILTERS.find((f) => f.value === activeFilter)?.label;

  return (
    <>
      <FlagshipVibras />

      {/* ---------------------------------------------------------------- */}
      <section className="ground-paper pad-y" aria-labelledby="statement-title">
        <div className="wrap">
          <div className="marker">
            <span className="marker-n">01</span>
            <h2 className="marker-t" id="statement-title">Practice</h2>
            <span className="marker-c">Luis Sierra</span>
          </div>

          <div className="statement-grid">
            <div>
              <p className="statement-title">
                Art direction that <em>survives</em> the pipeline
              </p>

              <p className="body">
                I direct and produce visual work end to end: the poster, the identity, the
                interface, and the system that keeps them consistent once other people start
                using them. Two decades of that work sits in the index below — screenprint,
                editorial layout, illustration, branding, and a long run of product interfaces.
              </p>
              <p className="body">
                The newer half of the practice is production with generative tools. I build
                pipelines that turn design decisions into machine-readable assets — tokens,
                component contracts, prompt scaffolds — so a direction can be extended without
                being diluted. The output is a running prototype, not a deck: the thing you can
                open, click through, and hand to an engineer.
              </p>
              <p className="body">
                This page is an example of the method. Its palette is measured off the
                Mandrilizate poster, its display face is the one that set that poster in 2009,
                and every colour, step and duration resolves from a single token block.
              </p>

              <div className="contact-inline">
                <Link className="btn btn-solid" to="/" state={{ scrollTo: 'touch' }}>Start a project</Link>
                <Link className="btn" to="/" state={{ scrollTo: 'see' }}>See the index</Link>
              </div>
            </div>

            <div>
              <p className="label statement-aside-label">Disciplines in the archive</p>
              <ul className="disciplines">
                {DISCIPLINES.map((d, i) => (
                  <li key={d}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="d">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="index-sec ground-paper pad-y" id="see" aria-labelledby="index-title">
        <div className="ruler" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
        </div>

        <div className="wrap index-inner">
          <div className="marker">
            <span className="marker-n">02</span>
            <h2 className="marker-t" id="index-title">Index</h2>
            <span className="marker-c">{projects.length} entries</span>
          </div>

          <div className="ticks" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i}>{String(i + 1).padStart(2, '0')}</span>
            ))}
          </div>

          <div className="filters od-rail" role="group" aria-label="Filter the index by discipline">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="index-count" role="status">
            {activeFilter === 'all'
              ? `Showing all ${shown.length} entries`
              : `Showing ${shown.length} of ${projects.length} entries — ${activeLabel}`}
          </p>

          <div className="index-list">
            {shown.length === 0 ? (
              <div className="index-empty">
                <p className="h-md">Nothing filed under that discipline</p>
                <p>Clear the filter to see all {projects.length} entries.</p>
              </div>
            ) : (
              shown.map((project) => (
                <ProjectIndexRow
                  key={project.id}
                  project={project}
                  number={projects.indexOf(project) + 1}
                  flagship={project.id === FLAGSHIP_ID}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="ground-ink pad-y" id="touch" aria-labelledby="touch-title">
        <div className="wrap">
          <div className="marker">
            <span className="marker-n">03</span>
            <h2 className="marker-t" id="touch-title">Touch</h2>
            <span className="marker-c">Aviles · Spain</span>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <span className="label">Direct</span>
              <span className="h-md">Profits Arts&rsquo;n&rsquo;Grafx</span>
              <span><a href="mailto:profitsarts@gmail.com">profitsarts@gmail.com</a></span>
              <span><a href="tel:+34656559570">+34 656 559 570</a></span>
              <span>
                <a href="https://soundcloud.com/condres" target="_blank" rel="noopener noreferrer">
                  soundcloud.com/condres
                </a>
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Contact form — labels always visible, validation on blur            */
/* ------------------------------------------------------------------ */

const RULES = {
  name: {
    test: (v) => v.trim().length > 1,
    msg: 'Enter your name so I know who is writing.',
  },
  email: {
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    msg: 'That address is missing an @ or a domain. Example: name@studio.com',
  },
  message: {
    test: (v) => v.trim().length > 9,
    msg: 'Tell me a little more — at least a sentence.',
  },
};

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const change = (key) => (event) => {
    const next = event.target.value;
    setValues((v) => ({ ...v, [key]: next }));
    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: RULES[key].test(next) ? undefined : RULES[key].msg }));
    }
  };

  const blur = (key) => () => {
    setErrors((e) => ({ ...e, [key]: RULES[key].test(values[key]) ? undefined : RULES[key].msg }));
  };

  const submit = (event) => {
    const next = {};
    Object.keys(RULES).forEach((key) => {
      if (!RULES[key].test(values[key])) next[key] = RULES[key].msg;
    });

    if (Object.keys(next).length > 0) {
      event.preventDefault();
      setErrors(next);
      setStatus(`${Object.keys(next).length} field(s) need fixing before this can send.`);
      document.getElementById(`in-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    setSending(true);
    setStatus('Sending your message…');
  };

  const field = (key, label, type) => (
    <div className="field" data-invalid={errors[key] ? 'true' : 'false'}>
      <label htmlFor={`in-${key}`}>
        {label} <span className="req" aria-hidden="true">*</span>
        <span className="od-nowrap"> (required)</span>
      </label>
      {type === 'textarea' ? (
        <textarea
          id={`in-${key}`}
          name={key}
          value={values[key]}
          onChange={change(key)}
          onBlur={blur(key)}
          aria-invalid={errors[key] ? 'true' : undefined}
          aria-describedby={errors[key] ? `err-${key}` : undefined}
        />
      ) : (
        <input
          id={`in-${key}`}
          name={key}
          type={type}
          value={values[key]}
          onChange={change(key)}
          onBlur={blur(key)}
          autoComplete={key === 'email' ? 'email' : 'name'}
          aria-invalid={errors[key] ? 'true' : undefined}
          aria-describedby={errors[key] ? `err-${key}` : undefined}
        />
      )}
      {errors[key] && <span className="err" id={`err-${key}`}>{errors[key]}</span>}
    </div>
  );

  return (
    <form action="https://formspree.io/f/xrgprokr" method="POST" onSubmit={submit} noValidate>
      <p className="h-lg">Write me something.</p>

      <div className="f-row">
        {field('name', 'Full name', 'text')}
        {field('email', 'Email', 'email')}
      </div>

      {field('message', 'Message', 'textarea')}

      <div className="od-cluster form-actions">
        <button className="btn btn-solid" type="submit" disabled={sending}>
          <span>{sending ? 'Sending…' : 'Send'}</span>
        </button>
        {status && <span className="form-status" role="status">{status}</span>}
      </div>
    </form>
  );
}

export default Portfolio;
