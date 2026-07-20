import { useStaggeredReveal } from '../lib/hooks';
import { CLINIC, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, reviews } from '../data';

/** Official-style multicolour Google "G". */
function GoogleG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#FBBC04] ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.26 6.86.6-5.2 4.51 1.56 6.72L12 17.27 5.88 20.6l1.56-6.72-5.2-4.51 6.86-.6z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewsSection() {
  const reveal = useStaggeredReveal(reviews.length + 1);

  return (
    <section
      id="bewertungen"
      ref={reveal.containerRef}
      className="relative w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
    >
      {/* Header / rating card */}
      <div
        style={reveal.getAnimStyle(0)}
        className="rounded-xl md:rounded-2xl bg-black text-white p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div className="max-w-xl">
          <span className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
            Bewertungen
          </span>
          <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95]">
            Das sagen unsere
            <br />
            Patientinnen &amp; Patienten
          </h2>
        </div>

        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-4">
            <GoogleG className="w-8 h-8 md:w-10 md:h-10" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold leading-none tabular-nums">
                  {GOOGLE_RATING.toFixed(1)}
                </span>
                <Stars />
              </div>
              <span className="text-xs md:text-sm font-medium text-white/70">
                {GOOGLE_REVIEW_COUNT} Google-Bewertungen
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={CLINIC.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Alle Bewertungen ansehen
            </a>
            <a
              href={CLINIC.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-white/40 text-white rounded-full text-sm font-semibold text-center hover:bg-white hover:text-black transition-colors"
            >
              Bewertung schreiben
            </a>
          </div>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        {reviews.map((r, i) => (
          <a
            key={r.name}
            href={CLINIC.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={reveal.getAnimStyle(i + 1)}
            className="group rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col gap-3 hover:bg-stone-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                {r.initials}
              </span>
              <div className="flex-1 min-w-0">
                <span className="block text-sm md:text-base font-bold text-black leading-tight">
                  {r.name}
                </span>
                <span className="block text-xs text-neutral-500">{r.date}</span>
              </div>
              <GoogleG className="w-5 h-5 shrink-0" />
            </div>
            <Stars />
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">“{r.text}”</p>
          </a>
        ))}
      </div>
    </section>
  );
}
