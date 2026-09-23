import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * FlagshipMandrilizate — project 21 as the flagship interactive hero.
 *
 * Integrates the three things the brief names:
 *   1. the screenprinted artwork (master poster + six plates)
 *   2. the MOD typeface lineage (specimen + real credit)
 *   3. audio playback, wired for real and honest about having no track yet
 *
 * Every visual value resolves from src/styles/tokens.css. No hard-coded
 * colours, sizes, spacings or durations live in this file.
 *
 * Asset paths assume the legacy repository layout under public/:
 *   assets/creative/mandril/master_frame_16x9.png   1600x900
 *   assets/creative/mandril/kling_...mp4
 *   assets/img/portfolio/full/mandril-0X-FULL.jpg   1170x780
 */

const POSTER = 'assets/creative/mandril/master_frame_16x9.png';
const MOTION = 'assets/creative/mandril/kling_20260923_Image_to_Video_Slow_cinem_1854_0.mp4';

const PLATES = [1, 2, 3, 4, 5, 6].map((n) => ({
  n,
  id: String(n).padStart(2, '0'),
  src: `assets/img/portfolio/full/mandril-0${n}-FULL.jpg`,
  alt: `Mandrilizate screenprint plate ${n}`,
}));

const META = [
  { term: 'Role', detail: 'Art direction · illustration · print' },
  { term: 'Medium', detail: 'Screenprint, poster format' },
  { term: 'Display type', detail: 'MOD — Fontfabric, 2009' },
  { term: 'Organiser', detail: 'Tempus Fugit Fanzine' },
];

/**
 * Drop a file here and the transport goes live with no other change.
 * Left null deliberately: no audio asset ships with the repository.
 */
const TRACK_SRC = null;

function formatTime(seconds) {
  const s = Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${String(r).padStart(2, '0')}`;
}

/* ------------------------------------------------------------------ */
/* Motion layer                                                        */
/* ------------------------------------------------------------------ */

function PosterFrame() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const stop = useCallback(() => {
    if (videoRef.current) videoRef.current.pause();
    setPlaying(false);
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => { if (query.matches) stop(); };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [stop]);

  const toggle = () => {
    if (playing) { stop(); return; }
    setPlaying(true);
    const started = videoRef.current?.play();
    if (started && typeof started.catch === 'function') {
      started.catch(() => { stop(); setUnavailable(true); });
    }
  };

  return (
    <div className="poster-mod">
      <div className={`poster-frame${playing ? ' is-playing' : ''}`}>
        <img
          src={POSTER}
          width="1600"
          height="900"
          alt="The Mandrilizate MINIFEST poster held up against a bright sky: a mandrill wearing a paper Burger Kong crown, flanked by two other primates, over the title set in heavy MOD display type."
        />
        <video
          ref={videoRef}
          src={MOTION}
          poster={POSTER}
          muted
          loop
          playsInline
          preload="none"
          aria-label="Slow motion pass over the Mandrilizate poster"
        />
      </div>

      <div className="poster-bar">
        <p className="poster-cap">
          master_frame_16x9.png · 1600×900 · full frame, uncropped
        </p>
        <button className="btn" type="button" onClick={toggle} aria-pressed={playing}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polygon points="6 4 20 12 6 20 6 4" />
          </svg>
          <span>
            {unavailable ? 'Motion unavailable' : playing ? 'Stop motion pass' : 'Play motion pass'}
          </span>
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Plate rail + viewer                                                 */
/* ------------------------------------------------------------------ */

function PlateRail() {
  const dialogRef = useRef(null);
  const lastTrigger = useRef(null);
  const [index, setIndex] = useState(0);

  const open = (i, event) => {
    lastTrigger.current = event.currentTarget;
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const step = (delta) => setIndex((i) => (i + delta + PLATES.length) % PLATES.length);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
  };

  const plate = PLATES[index];

  return (
    <>
      <div className="plates">
        <div className="plates-head">
          <h3 className="h-md">Screenprint plates</h3>
          <p className="eyebrow">6 sheets · 1170×780 · tap to enlarge</p>
        </div>

        <div className="rail od-rail" role="list" aria-label="Screenprint plates">
          {PLATES.map((p, i) => (
            <button
              key={p.id}
              className="plate"
              type="button"
              role="listitem"
              onClick={(event) => open(i, event)}
            >
              <img src={p.src} width="1170" height="780" alt={p.alt} loading="lazy" />
              <span className="plate-cap">Plate {p.id}</span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        className="viewer"
        ref={dialogRef}
        aria-labelledby="viewer-title"
        onKeyDown={onKeyDown}
        onClose={() => lastTrigger.current?.focus()}
      >
        <div className="viewer-head">
          <div>
            <span className="label">Mandrilizate</span>
            <span className="h-md" id="viewer-title">Plate {plate.id}</span>
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close the plate viewer"
          >
            Close
          </button>
        </div>

        <div className="viewer-body">
          <img src={plate.src} width="1170" height="780" alt={plate.alt} />
        </div>

        <div className="viewer-foot">
          <button className="btn" type="button" onClick={() => step(-1)}>← Previous</button>
          <span className="eyebrow">{plate.id} / 06</span>
          <button className="btn" type="button" onClick={() => step(1)}>Next →</button>
        </div>
      </dialog>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Audio transport                                                     */
/* ------------------------------------------------------------------ */

function AudioTransport() {
  const audioRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const hasTrack = Boolean(TRACK_SRC);
  const live = hasTrack && ready && !failed;

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !hasTrack) return undefined;

    const onMeta = () => { setDuration(el.duration); setReady(true); };
    const onTime = () => setTime(el.currentTime);
    const onEnd = () => setPlaying(false);
    const onError = () => { setFailed(true); setReady(false); };

    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', onEnd);
    el.addEventListener('error', onError);

    return () => {
      el.removeEventListener('loadedmetadata', onMeta);
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('ended', onEnd);
      el.removeEventListener('error', onError);
    };
  }, [hasTrack]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) { el.play(); setPlaying(true); }
    else { el.pause(); setPlaying(false); }
  };

  const seek = (event) => {
    const el = audioRef.current;
    if (!el || !el.duration) return;
    el.currentTime = (Number(event.target.value) / 100) * el.duration;
  };

  const state = failed ? 'empty' : playing ? 'playing' : live ? 'ready' : 'empty';
  const stateLabel = failed ? 'Failed' : playing ? 'Playing' : live ? 'Ready' : 'Empty';

  return (
    <div className="transport">
      <div className="transport-head">
        <div className="transport-title">
          <span className="label">Minifest audio</span>
          <span className="name">{live ? 'Minifest set' : 'No track loaded'}</span>
        </div>
        <span className="transport-state" data-state={state} role="status">{stateLabel}</span>
      </div>

      <div className="transport-body">
        <div className="transport-controls">
          <button
            className="btn"
            type="button"
            onClick={toggle}
            disabled={!live}
            aria-label={playing ? 'Pause the Minifest track' : 'Play the Minifest track'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
            <span>{playing ? 'Pause' : 'Play'}</span>
          </button>

          <div className="transport-scrub">
            <label className="label" htmlFor="audio-scrub">Position</label>
            <input
              type="range"
              id="audio-scrub"
              min="0"
              max="100"
              step="0.1"
              value={duration ? (time / duration) * 100 : 0}
              onChange={seek}
              disabled={!live}
            />
            <span className="transport-time od-nowrap">
              {formatTime(time)} / {formatTime(duration)}
            </span>
          </div>
        </div>

        <audio ref={audioRef} src={TRACK_SRC || undefined} preload="metadata" />

        {!live && (
          <p className="transport-note">
            {failed
              ? 'The audio file could not be loaded. Check the path, then reload.'
              : (
                <>
                  No audio file ships with this build. Point <code>TRACK_SRC</code> at one
                  and the transport goes live. Until then the recorded sets live on{' '}
                  <a href="https://soundcloud.com/condres" target="_blank" rel="noopener noreferrer">
                    SoundCloud
                  </a>.
                </>
              )}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const FlagshipMandrilizate = () => (
  <section className="flag ground-ink pad-y" aria-labelledby="flag-title">
    <div className="wrap">
      <div className="flag-head">
        <div>
          <div className="flag-kicker">
            <span className="eyebrow eyebrow-signal">Flagship — archive no. 21</span>
            <span className="eyebrow">Minifest · Tempus Fugit Fanzine · Aviles</span>
          </div>
          <h1 className="flag-title" id="flag-title">
            <span className="l1">Mandri</span>
            <span className="l2">Liza</span>
            <span className="l3">Te</span>
          </h1>
        </div>
        <p className="flag-badge">Poster · 2 colours</p>
      </div>

      <p className="flag-lede">
        A screenprinted concert poster for the MINIFEST night: a mandrill in a paper crown,
        a stack of hand-set MOD display type, and a line-up set in the smallest readable
        grade the ink would hold. Art direction, illustration and print production.
      </p>

      <dl className="flag-meta od-grid">
        {META.map((item) => (
          <div className="od-cell" key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>

      <PosterFrame />
      <PlateRail />

      <div className="lineage">
        <p className="lineage-specimen">Mandrilizate</p>
        <dl className="lineage-grid od-grid">
          <div className="od-cell">
            <dt>Typeface</dt>
            <dd>MOD Regular, version 2.35</dd>
          </div>
          <div className="od-cell">
            <dt>Designer</dt>
            <dd>
              Svetoslav Simov —{' '}
              <a href="https://fontfabric.com/" target="_blank" rel="noopener noreferrer">Fontfabric</a>, 2009
            </dd>
          </div>
          <div className="od-cell">
            <dt>Lineage</dt>
            <dd>The poster&rsquo;s display face, now the display face of this site</dd>
          </div>
        </dl>
      </div>

      <AudioTransport />
    </div>
  </section>
);

export default FlagshipMandrilizate;
