import { CLINIC, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, reviews } from '../data';
import { GoogleG, Stars } from './Icon';
import Reveal from './Reveal';

export default function Reviews() {
  return (
    <section id="bewertungen" className="bg-ivory py-20 md:py-28">
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
                  <span className="text-xs text-ink/60">
                    {GOOGLE_REVIEW_COUNT} Google-Bewertungen
                  </span>
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

        {/* Review cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 2) * 90}
              as="article"
              className="relative bg-cream border border-sand rounded-2xl p-7 md:p-8"
            >
              <span
                className="absolute top-4 right-6 font-serif text-6xl text-bronze/25 leading-none select-none"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              <Stars />
              <p className="mt-4 text-ink/80 text-base md:text-lg font-light leading-relaxed">
                {r.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-forest text-cream flex items-center justify-center text-sm font-semibold">
                  {r.initials}
                </span>
                <div className="flex-1">
                  <span className="block font-semibold text-forest">{r.name}</span>
                  <span className="block text-xs text-ink/55">{r.date}</span>
                </div>
                <GoogleG className="w-5 h-5" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
