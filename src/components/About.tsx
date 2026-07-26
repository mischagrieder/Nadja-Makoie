import { CLINIC, IMG } from '../data';
import { Stars } from './Icon';
import Reveal from './Reveal';

// Werdegang von Dr. Makoie, aus ihrem Lebenslauf. Baut Vertrauen durch echte Stationen auf.
const WERDEGANG = [
  { place: 'Mainz', text: 'Studium der Zahnmedizin und Staatsexamen' },
  { place: 'Mainz', text: 'Drei Jahre in der Kiefer- und Gesichtschirurgie' },
  { place: 'Irland', text: 'Zuerst angestellt, dann mit eigener Praxis' },
  { place: 'Olten', text: 'Seit 2006 in der Schweiz, ihre Praxis führt sie bis heute mit Herzblut' },
];

export default function About() {
  return (
    <section id="praxis" className="bg-transparent py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Portrait */}
        <Reveal className="relative">
          <div className="rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-sand">
            <img
              src={IMG.doctor}
              alt={`${CLINIC.dentist}, Zahnärztin bei Dental Wellness in Olten`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating claim card - white so it pops on the dark portrait */}
          <div className="absolute -bottom-6 left-6 right-10 md:right-auto md:max-w-[17rem] bg-cream text-forest rounded-2xl p-5 shadow-xl border border-sand">
            <Stars size={15} />
            <p className="mt-2 font-serif text-lg leading-snug">
              „Ich behandle jeden Menschen so, wie ich selbst behandelt werden möchte.“
            </p>
            <p className="mt-2 text-xs text-ink/70">Dr. med. dent. Nadja V. Makoie</p>
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
            <p className="mt-6 text-ink text-base md:text-lg leading-relaxed">
              Gute Zahnmedizin ist für Nadja Makoie vor allem Vertrauenssache. Sie nimmt
              sich Zeit, hört zu und erklärt jeden Schritt in Ruhe, damit aus Unsicherheit
              ein gutes Gefühl wird. Diese Haltung hat sie sich über viele Jahre und mehrere
              Länder hinweg bewahrt.
            </p>
          </Reveal>

          {/* Werdegang / Timeline */}
          <Reveal delay={300}>
            <ol className="mt-8 relative border-l border-sand pl-6 space-y-5">
              {WERDEGANG.map((w) => (
                <li key={w.place + w.text} className="relative">
                  <span className="absolute -left-[2.05rem] -top-1 w-7 h-7 rounded-full bg-cream flex items-center justify-center text-bronze">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8.5 3.8C6.7 3.8 5.2 5.1 5.2 7.3c0 2.8 1.1 4.7 1.7 7.9.3 1.7.4 3.8 1.5 3.8s.9-1.9 2.4-1.9 1.3 1.9 2.4 1.9 1.2-2.1 1.5-3.8c.6-3.2 1.7-5.1 1.7-7.9 0-2.2-1.5-3.5-3.3-3.5-1.5 0-2.2.9-3.3.9s-1.8-.9-3.3-.9z" />
                    </svg>
                  </span>
                  <span className="block font-serif text-forest text-xl leading-tight">
                    {w.place}
                  </span>
                  <span className="block text-ink/85 text-sm md:text-base">
                    {w.text}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-8 text-ink text-base md:text-lg leading-relaxed">
              Heute führt sie die Dental Wellness AG mitten in Olten, mit einem eingespielten
              Team, moderner Technik und der Zeit, die es für eine wirklich persönliche
              Betreuung braucht.
            </p>
          </Reveal>

          <Reveal delay={500}>
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
