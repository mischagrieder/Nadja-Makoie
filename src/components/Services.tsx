import { services } from '../data';
import { Icon } from './Icon';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="behandlungen" className="bg-ivory py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-bronze">Unsere Leistungen</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-forest text-4xl md:text-6xl font-medium leading-[1.02]">
              Behandlungen, die Ihr
              <br />
              Lächeln zum Strahlen bringen
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-ink/70 text-base md:text-lg font-light leading-relaxed">
              Von der sanften Vorsorge bis zur ästhetischen Zahnmedizin – bei Dental Wellness
              erhalten Sie das gesamte Spektrum moderner Zahnheilkunde aus einer Hand.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((svc, i) => (
            <Reveal
              key={svc.name}
              delay={(i % 3) * 90}
              as="article"
              className="group bg-cream rounded-2xl p-7 md:p-8 border border-sand hover:border-bronze/50 hover:shadow-[0_18px_50px_-24px_rgba(46,58,49,0.4)] transition-all duration-500"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest/5 text-forest group-hover:bg-forest group-hover:text-cream transition-colors duration-500">
                <Icon name={svc.icon} className="w-7 h-7" strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 font-serif text-forest text-2xl md:text-[1.75rem] font-semibold">
                {svc.name}
              </h3>
              <p className="mt-3 text-ink/70 text-sm md:text-base font-light leading-relaxed">
                {svc.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest text-cream text-sm font-semibold tracking-wide hover:bg-forestdark transition-colors"
          >
            Beratungstermin vereinbaren
            <Icon name="arrow" className="w-4 h-4" strokeWidth={1.8} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
