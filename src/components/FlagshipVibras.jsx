import React, { useState } from 'react';
import PlateRail from './PlateRail';

/**
 * FlagshipVibras — the Vibras Modular concept site as the flagship hero.
 *
 *   1. the live site, embedded behind a click-to-load facade: the build
 *      streams a ~13 MB canvas sequence and its scroll would capture the
 *      home page's wheel, so nothing loads until the visitor asks for it
 *   2. stills captured from the production build (1440x960 @2x)
 *
 * Every visual value resolves from src/styles/tokens.css via globals.css.
 */

const SITE = 'https://project-headphones-three.vercel.app';
const SITE_LABEL = 'project-headphones-three.vercel.app';
const FACADE = 'assets/img/portfolio/full/vibras-01-FULL.jpg';

const PLATES = [
  { n: 2, cap: 'Battery cartridge', alt: 'The Battery is a Part: the MOD-02 cartridge pulled from its bay below the USB-C port by its orange tab, beside its location, cell and swap specs.' },
  { n: 3, cap: 'Exploded view', alt: 'The headphone fully exploded into shell, driver, cushion and grille, telemetry reading 44.5 mm.' },
  { n: 4, cap: 'Specs', alt: 'Engineered for Pure Transparency: four large specification figures on a black stage.' },
  { n: 5, cap: 'Four subsystems', alt: 'Four Decoupled Subsystems: module cards MOD-01 to MOD-04.' },
  { n: 6, cap: 'Reassembled', alt: 'Front elevation of the reassembled headphone beside its module map.' },
  { n: 7, cap: 'In use', alt: 'Lifestyle frame: a woman wearing the headphones, eyes closed, beside the copy "Quiet is a position."' },
  { n: 8, cap: 'Materials', alt: 'Tactile Raw Finishes: bead-blasted aluminium finish selector with its surface specification table.' },
].map((p) => ({
  ...p,
  id: String(p.n).padStart(2, '0'),
  src: `assets/img/portfolio/full/vibras-0${p.n}-FULL.jpg`,
}));

const META = [
  { term: 'Role', detail: 'Art direction · motion · front-end' },
  { term: 'Medium', detail: 'Concept product launch site' },
  { term: 'Motion', detail: 'GSAP ScrollTrigger · Lenis · canvas sequence' },
  { term: 'Imagery', detail: 'GPT Image · Seedance 2.5 · Veo' },
];

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 14v6H4V6h6" />
    </svg>
  );
}

function LiveFrame() {
  const [live, setLive] = useState(false);

  return (
    <div className="live-mod">
      <div className="live-frame">
        <div className="live-chrome">
          <span className={live ? 'live-state is-live' : 'live-state'}>{live ? 'Live' : 'Still'}</span>
          <span className="live-url">{SITE_LABEL}</span>
        </div>

        <div className="live-stage">
          {live ? (
            <iframe src={SITE} title="Vibras Modular — live concept site" allow="fullscreen; autoplay" />
          ) : (
            <button
              className="live-facade"
              type="button"
              onClick={() => setLive(true)}
              aria-label="Load the live Vibras site inside this frame"
            >
              <img
                src={FACADE}
                srcSet={`${FACADE} 1x, ${FACADE.replace('.jpg', '@2x.jpg')} 2x`}
                width="1170"
                height="780"
                alt=""
              />
              <span className="btn btn-solid">Load the live site</span>
            </button>
          )}
        </div>
      </div>

      <div className="poster-bar">
        <p className="poster-cap">
          {live
            ? 'Scroll inside the frame to run the teardown. Move the pointer out to scroll the page.'
            : 'Production build, embedded. Loads on request: the hero streams a canvas image sequence.'}
        </p>
        {live && (
          <button className="btn" type="button" onClick={() => setLive(false)}>
            Unload
          </button>
        )}
        <a className="btn btn-solid" href={SITE} target="_blank" rel="noopener noreferrer">
          <span>Open full site</span>
          <ExternalIcon />
        </a>
      </div>
    </div>
  );
}

const FlagshipVibras = () => (
  <section className="flag ground-ink pad-y" aria-labelledby="flag-title">
    <div className="wrap">
      <div className="flag-head">
        <h1 className="flag-title" id="flag-title">
          <span className="l1">Vibras</span>
        </h1>
        <p className="flag-badge">Flagship · no. 34</p>
      </div>

      <p className="flag-lede">
        A launch site for Vibras Modular, a fictional pair of over-ear headphones built to be
        taken apart. Scroll drives a millimetric exploded view on canvas: shells, battery
        cartridge, cushions and headband separate and name themselves, so the page is the proof
        that every part can be replaced. Concept, imagery and motion, coded end to end.
      </p>

      <dl className="flag-meta od-grid">
        {META.map((item) => (
          <div className="od-cell" key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>

      <LiveFrame />
      <PlateRail
        plates={PLATES}
        title="From the build"
        note={`${PLATES.length} frames · 1440×960 captures · tap to enlarge`}
        label="Vibras Modular"
      />
    </div>
  </section>
);

export default FlagshipVibras;
