import { useState } from 'react';
import { faqs } from '../data';
import Reveal from './Reveal';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-transparent py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow text-bronze">Häufige Fragen</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-forest text-4xl md:text-6xl font-medium leading-[1.02]">
              Gut zu wissen
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-ink/80 text-base md:text-lg leading-relaxed">
              Die häufigsten Fragen rund um Ihren Besuch bei uns. Ist Ihre Frage nicht dabei,
              rufen Sie uns einfach an, wir helfen gerne weiter.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 4) * 70}>
                <div
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen ? 'bg-cream border-bronze/40 shadow-[0_20px_45px_-30px_rgba(23,50,78,0.5)]' : 'bg-cream border-sand'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 text-left px-6 md:px-8 py-5 md:py-6"
                  >
                    <span className="flex-1 font-serif text-forest text-xl md:text-2xl leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-bronze text-white rotate-45' : 'bg-forest/5 text-forest'
                      }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-smooth"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-ink/80 text-base md:text-lg leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
