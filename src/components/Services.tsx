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
      </div>

      {/* Stacking cards – each card sticks and the next slides over it */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 mt-12 md:mt-16">
        {services.map((svc, i) => (
          <article
            key={svc.name}
            style={{ top: `calc(5rem + ${(i * 2.25).toFixed(2)}rem)` }}
            className="sticky mb-6 h-[80vh] min-h-[520px] rounded-[1.75rem] overflow-hidden bg-cream border border-sand shadow-[0_30px_90px_-45px_rgba(23,50,78,0.6)] flex flex-col"
          >
            {/* Header (stays visible when the card is peeking under the next) */}
            <div className="shrink-0 px-7 md:px-12 pt-7 md:pt-9 pb-3 md:pb-4 flex items-center gap-4 md:gap-6">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-bronze tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-forest text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-none">
                {svc.name}
              </h3>
            </div>

            {/* Body */}
            <div className="flex-1 min-h-0 grid md:grid-cols-2">
              <div className="order-2 md:order-1 px-7 md:px-12 py-5 md:py-8 flex flex-col justify-center gap-5 md:gap-7">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest/5 text-forest">
                  <Icon name={svc.icon} className="w-7 h-7" strokeWidth={1.4} />
                </span>
                <p className="text-ink/75 text-lg md:text-2xl font-light leading-relaxed max-w-md">
                  {svc.text}
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex w-fit items-center gap-2 px-7 py-3.5 rounded-full bg-bronze text-white text-sm font-semibold tracking-wide hover:bg-bronzedark transition-colors"
                >
                  Termin vereinbaren
                  <Icon name="arrow" className="w-4 h-4" strokeWidth={1.8} />
                </a>
              </div>
              <div className="order-1 md:order-2 relative min-h-[170px] md:min-h-0">
                <img
                  src={svc.img}
                  alt={`${svc.name} – Dental Wellness Olten`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 mt-14 text-center">
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest text-cream text-sm font-semibold tracking-wide hover:bg-forestdark transition-colors"
        >
          Beratungstermin vereinbaren
          <Icon name="arrow" className="w-4 h-4" strokeWidth={1.8} />
        </a>
      </div>
    </section>
  );
}
