import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * PlateRail — horizontal rail of 1170x780 stills plus a modal viewer.
 * Shared by the flagship sections. Styling lives in globals.css (.plates,
 * .rail, .plate, .viewer).
 *
 *   plates  [{ id, src, alt, cap? }]  cap defaults to "Plate {id}"
 *   title   rail heading
 *   note    one-line spec under the heading
 *   label   project name shown in the viewer head
 */
function PlateRail({ plates, title, note, label }) {
  const dialogRef = useRef(null);
  const lastTrigger = useRef(null);
  const [index, setIndex] = useState(0);

  // Scrubber: a native range input driving the rail's scrollLeft. The thumb
  // width mirrors the visible fraction, so it reads as a real scrollbar.
  const railRef = useRef(null);
  const [scrub, setScrub] = useState({ pos: 0, thumb: 0, overflow: false });

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setScrub({
      pos: max > 0 ? Math.round((rail.scrollLeft / max) * 1000) : 0,
      thumb: Math.max(44, Math.round((rail.clientWidth / rail.scrollWidth) * rail.clientWidth)),
      overflow: max > 1,
    });
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (railRef.current) observer.observe(railRef.current);
    return () => observer.disconnect();
  }, [measure, plates.length]);

  const onScrub = (event) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.style.scrollSnapType = 'none'; // snap would fight the drag
    rail.scrollLeft = (Number(event.target.value) / 1000) * (rail.scrollWidth - rail.clientWidth);
  };

  const endScrub = () => { if (railRef.current) railRef.current.style.scrollSnapType = ''; };

  const open = (i, event) => {
    lastTrigger.current = event.currentTarget;
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const step = (delta) => setIndex((i) => (i + delta + plates.length) % plates.length);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
  };

  const plate = plates[index];
  const capOf = (p) => p.cap || `Plate ${p.id}`;
  const total = String(plates.length).padStart(2, '0');

  return (
    <>
      <div className="plates">
        <div className="plates-head">
          <h3 className="h-md">{title}</h3>
          <p className="eyebrow">{note}</p>
        </div>

        <div className="rail od-rail" role="list" aria-label={title} ref={railRef} onScroll={measure}>
          {plates.map((p, i) => (
            <button
              key={p.id}
              className="plate"
              type="button"
              role="listitem"
              onClick={(event) => open(i, event)}
            >
              <img src={p.src} width="1170" height="780" alt={p.alt} loading="lazy" />
              <span className="plate-cap">{capOf(p)}</span>
            </button>
          ))}
        </div>

        {scrub.overflow && (
          <input
            className="rail-scrub"
            type="range"
            min="0"
            max="1000"
            value={scrub.pos}
            onChange={onScrub}
            onPointerUp={endScrub}
            onKeyUp={endScrub}
            aria-label={`Scroll ${title}`}
            style={{ '--scrub-thumb': `${scrub.thumb}px` }}
          />
        )}
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
            <span className="label">{label}</span>
            <span className="h-md" id="viewer-title">{capOf(plate)}</span>
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close the viewer"
          >
            Close
          </button>
        </div>

        <div className="viewer-body">
          <img src={plate.src} width="1170" height="780" alt={plate.alt} />
        </div>

        <div className="viewer-foot">
          <button className="btn" type="button" onClick={() => step(-1)}>← Previous</button>
          <span className="eyebrow">{plate.id} / {total}</span>
          <button className="btn" type="button" onClick={() => step(1)}>Next →</button>
        </div>
      </dialog>
    </>
  );
}

export default PlateRail;
