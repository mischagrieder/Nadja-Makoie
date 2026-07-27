import { whyUs, IMG } from '../data';
import { Icon } from './Icon';
import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section id="warum" className="relative pt-52 pb-20 md:pt-64 md:pb-28">
      {/* Dunkler Hintergrund (Bild + Blau), der von oben unsichtbar aus dem hellen
          Bereich einblendet. Da die Sektion darüber transparent ist und dasselbe
          feste Startbild zeigt, entsteht kein sichtbarer Sektionsrand, sondern ein
          völlig flüssiger Verlauf. Das Dunkle ist vor der Überschrift voll da. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, black 165px)',
          maskImage: 'linear-gradient(to bottom, transparent 0, black 165px)',
        }}
      >
        <img
          src={IMG.room}
          alt="Ruhiges, modernes Behandlungszimmer bei Dental Wellness Olten"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forestdark/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-bronze">Warum Dental Wellness</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-cream text-4xl md:text-6xl font-medium leading-[1.02]">
              Zahnmedizin, die sich
              <br />
              gut anfühlt
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 90}>
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-bronze/50 text-bronze">
                <Icon name={w.icon} className="w-7 h-7" strokeWidth={1.4} />
              </span>
              <h3 className="mt-5 font-serif text-cream text-2xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-cream/70 text-sm md:text-base font-light leading-relaxed">
                {w.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
