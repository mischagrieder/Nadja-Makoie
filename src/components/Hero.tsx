import { CLINIC } from '../data';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden flex items-end">
      {/* Das Startbild liegt im festen Hintergrund (Backdrop). Nur ein weicher,
          randloser Verlauf unten, damit der dunkelblaue Text lesbar bleibt, ohne
          dass ein Kasten entsteht. */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ivory/70 via-ivory/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
        <Reveal>
          <h1 className="font-serif text-forest font-medium leading-[0.98] text-[clamp(2.75rem,7vw,5.5rem)] max-w-4xl">
            Ihr schönstes Lächeln,
            <br />
            in besten Händen.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 text-ink/80 text-base md:text-lg leading-relaxed max-w-xl font-light">
            Präzise Zahnmedizin auf höchstem Niveau für Ihre Zahngesundheit, Ihr
            Wohlbefinden und ein strahlendes Lächeln.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="px-8 py-4 rounded-full bg-bronze text-white text-sm font-semibold tracking-wide text-center hover:bg-bronzedark transition-colors"
            >
              Termin vereinbaren
            </a>
            <a
              href={`tel:${CLINIC.phoneHref}`}
              className="px-8 py-4 rounded-full border border-forest/40 text-forest text-sm font-semibold tracking-wide text-center hover:bg-forest hover:text-cream transition-colors"
            >
              {CLINIC.phoneDisplay} anrufen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
