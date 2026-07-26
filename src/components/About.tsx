import { CLINIC, IMG } from '../data';
import { Stars } from './Icon';
import Reveal from './Reveal';

const VALUES = [
  'Angstfreie, schonende Behandlung',
  'Moderne, digitale Zahnmedizin',
  'Ehrliche, persönliche Beratung',
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-bronze shrink-0" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="praxis" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Portrait */}
        <Reveal className="relative">
          <div className="rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-sand">
            <img
              src={IMG.doctor}
              alt={`${CLINIC.dentist}, Zahnärztin bei Dental Wellness Olten`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating claim card - white so it pops on the dark portrait */}
          <div className="absolute -bottom-6 left-6 right-10 md:right-auto md:max-w-[16rem] bg-cream text-forest rounded-2xl p-5 shadow-xl border border-sand">
            <Stars size={15} />
            <p className="mt-2 font-serif text-lg leading-snug">
              „Fundierte, angstfreie Behandlung in freundlicher Atmosphäre.“
            </p>
          </div>
        </Reveal>

        {/* Text */}
        <div className="mt-8 md:mt-0">
          <Reveal>
            <span className="eyebrow text-bronze">Ihre Zahnärztin</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-forest text-4xl md:text-6xl font-medium leading-[1.02]">
              Dr. med. dent.
              <br />
              Nadja V. Makoie
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-ink/75 text-base md:text-lg font-light leading-relaxed">
              In der Dental Wellness AG mitten in Olten steht der Mensch im Mittelpunkt. Wir
              verbinden moderne, digitale Zahnmedizin mit viel Zeit, Einfühlungsvermögen und
              einer ruhigen, herzlichen Atmosphäre, damit Sie sich rundum wohlfühlen.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-7 space-y-3">
              {VALUES.map((v) => (
                <li key={v} className="flex items-center gap-3 text-ink/85">
                  <Check />
                  <span className="text-base md:text-lg">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="#kontakt"
              className="mt-9 inline-block px-8 py-4 rounded-full bg-bronze text-white text-sm font-semibold tracking-wide hover:bg-bronzedark transition-colors"
            >
              Lernen Sie uns kennen
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
