import { useEffect, useRef, useState } from 'react';
import { CLINIC, GOOGLE_RATING, reviews } from '../data';
import { GoogleG, Stars } from './Icon';
import Reveal from './Reveal';

export default function Reviews() {
  const n = reviews.length;
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Breite des Karussells messen, damit sich der Versatz der Seitenkarten anpasst.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  // Touch-Wischen auf dem Karussell.
  const touch = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touch.current === null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const isMobile = width > 0 && width < 640;
  const shift = width * (isMobile ? 0.62 : 0.4);

  return (
    <section id="bewertungen" className="bg-ivory py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow text-bronze">Bewertungen</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-forest text-4xl md:text-6xl font-medium leading-[1.02]">
                Das sagen unsere
                <br />
                Patientinnen &amp; Patienten
              </h2>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="bg-cream border border-sand rounded-2xl p-6 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <GoogleG className="w-9 h-9" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-semibold text-forest leading-none">
                      {GOOGLE_RATING.toFixed(1).replace('.', ',')}
                    </span>
                    <Stars />
                  </div>
                  <span className="text-xs text-ink/60">Bewertungen auf Google</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={CLINIC.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-forest text-cream text-xs font-semibold text-center hover:bg-forestdark transition-colors"
                >
                  Alle ansehen
                </a>
                <a
                  href={CLINIC.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-forest/25 text-forest text-xs font-semibold text-center hover:bg-forest hover:text-cream transition-colors"
                >
                  Bewerten
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Coverflow-Karussell */}
        <div
          ref={trackRef}
          className="relative mt-14 h-[27rem] sm:h-[24rem]"
          style={{ perspective: '1800px' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {reviews.map((r, i) => {
            // naechster zyklischer Abstand zur aktiven Karte (-2..2)
            let off = i - active;
            if (off > n / 2) off -= n;
            if (off < -n / 2) off += n;
            const abs = Math.abs(off);
            const isCenter = off === 0;
            const visible = abs <= 1;

            const transform = `translateX(-50%) translateX(${off * shift}px) scale(${
              isCenter ? 1 : 0.82
            }) rotateY(${off === 0 ? 0 : off < 0 ? 16 : -16}deg)`;

            return (
              <article
                key={r.name}
                aria-hidden={!isCenter}
                onClick={() => !isCenter && visible && setActive(i)}
                className={`absolute top-0 left-1/2 w-[86%] sm:w-[30rem] max-w-[30rem] h-full rounded-[1.75rem] p-8 md:p-10 flex flex-col border transition-all duration-500 ease-smooth ${
                  isCenter
                    ? 'bg-forest border-forest/60 shadow-[0_45px_100px_-40px_rgba(15,36,57,0.85)] cursor-default'
                    : 'bg-forestdark border-white/10 cursor-pointer'
                }`}
                style={{
                  transform,
                  zIndex: 20 - abs,
                  opacity: visible ? (isCenter ? 1 : 0.4) : 0,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <Stars size={18} />
                  <GoogleG className="w-6 h-6 opacity-90" />
                </div>
                <p
                  className="mt-6 text-cream/90 text-base md:text-lg font-light leading-relaxed"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 7,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {r.text}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-bronze text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {r.initials}
                  </span>
                  <div className="min-w-0">
                    <span className="block font-semibold text-cream truncate">{r.name}</span>
                    <span className="block text-xs text-cream/55">{r.date}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Steuerung */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Vorherige Bewertung"
            className="w-12 h-12 rounded-full border border-forest/25 text-forest flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Bewertung ${i + 1} von ${n}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-bronze' : 'w-2 bg-forest/20 hover:bg-forest/40'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Nächste Bewertung"
            className="w-12 h-12 rounded-full border border-forest/25 text-forest flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
