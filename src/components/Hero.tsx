import { CLINIC, IMG, GOOGLE_RATING } from '../data';
import { Stars } from './Icon';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden flex items-end">
      {/* Background */}
      <img
        src={IMG.hero}
        alt="Dental Wellness – moderne, warme Zahnarztpraxis in Olten"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forestdark/85 via-forestdark/40 to-forestdark/25" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
        <Reveal>
          <span className="eyebrow text-bronze">Zahnarztpraxis in Olten</span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-5 font-serif text-cream font-medium leading-[0.98] text-[clamp(2.75rem,7vw,5.5rem)] max-w-4xl">
            Ihr schönstes Lächeln,
            <br />
            in besten Händen.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-cream/85 text-base md:text-lg leading-relaxed max-w-xl font-light">
            Fundierte, angstfreie Zahnmedizin in freundlicher Atmosphäre – ästhetisch,
            modern und ganz auf Sie abgestimmt. Willkommen bei Dental Wellness.
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
              className="px-8 py-4 rounded-full border border-cream/40 text-cream text-sm font-semibold tracking-wide text-center hover:bg-cream hover:text-forest transition-colors"
            >
              {CLINIC.phoneDisplay} anrufen
            </a>
          </div>
        </Reveal>
        <Reveal delay={480}>
          <div className="mt-8 flex items-center gap-3">
            <Stars size={18} />
            <span className="text-cream/80 text-sm">
              {GOOGLE_RATING.toFixed(1).replace('.', ',')} auf Google · Von Patientinnen &amp;
              Patienten empfohlen
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
