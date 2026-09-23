import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

/**
 * Layout — the ruled masthead shell.
 *
 * Replaces the centred logo + pill navigation with a three-column ruled
 * masthead: brand mark and role on the left, a standing ticker in the middle,
 * squared navigation on the right. The SEE / HEAR / TOUCH vocabulary and the
 * #see / #touch anchor targets are preserved from the existing site.
 *
 * Framer Motion is deliberately absent: the page transition it drove is a
 * purposeless fade. Motion in this design explains state, and section entry
 * is not a state change.
 */

const Layout = () => {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (targetId) {
      const timer = setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }

    if (location.pathname === '/' && !location.state) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    return undefined;
  }, [location.pathname, location.state]);

  const onAnchor = (event, id) => {
    if (location.pathname !== '/') return;
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="shell">
      <a className="skip" href="#see">Skip to the project index</a>

      <header className="masthead">
        <div className="wrap">
          <Link className="brand" to="/" state={null}>
            <svg viewBox="0 0 139 178" role="img" aria-label="Profits Arts'n'Grafx">
              <path
                fill="currentColor"
                d="M57,36h45V81H57Zm-37,.36V82H0v37H20v45H0v14H42.94L56,164.41V119h46.64L139,82.64V0H56.89Z"
              />
            </svg>
            <span className="brand-txt">
              <span className="brand-name">Profits Arts&rsquo;n&rsquo;Grafx</span>
              <span className="brand-role">Creative AI Producer &amp; Art Direction</span>
            </span>
          </Link>

          <div className="mast-ticker" aria-hidden="true">
            <p>Aviles · Madrid · screenprint · design systems · generative pipelines</p>
          </div>

          <nav className="mast-nav od-cluster" aria-label="Primary">
            <Link to="/" state={{ scrollTo: 'see' }} onClick={(e) => onAnchor(e, 'see')}>See</Link>
            <a href="https://soundcloud.com/condres" target="_blank" rel="noopener noreferrer">Hear</a>
            <Link to="/" state={{ scrollTo: 'touch' }} onClick={(e) => onAnchor(e, 'touch')}>Touch</Link>
          </nav>
        </div>
      </header>

      <main id="top">
        <Outlet />
      </main>

      <footer className="foot">
        <div className="wrap">
          <p>&copy; {new Date().getFullYear()} Profits Arts&rsquo;n&rsquo;Grafx</p>
          <p>Display type: MOD &mdash; Svetoslav Simov, Fontfabric, 2009</p>
        </div>
      </footer>

      {showTop && (
        <button
          className="to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to the top of the page"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Layout;
