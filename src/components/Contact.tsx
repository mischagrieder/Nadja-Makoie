import { CLINIC, IMG } from '../data';
import { Icon } from './Icon';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="kontakt" className="bg-forest text-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left */}
        <div>
          <Reveal>
            <span className="eyebrow text-bronze">Kontakt</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-cream text-4xl md:text-6xl font-medium leading-[1.02]">
              Wir freuen uns
              <br />
              auf Ihr Lächeln
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-cream/75 text-base md:text-lg font-light leading-relaxed max-w-md">
              Vereinbaren Sie ganz unkompliziert einen Termin, telefonisch oder per E-Mail.
              Wir nehmen uns Zeit für Sie.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 space-y-5">
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <Icon name="pin" className="w-6 h-6 text-bronze shrink-0 mt-0.5" />
                <span className="group-hover:text-cream/70 transition-colors">
                  <strong className="font-semibold">{CLINIC.legalName}</strong>
                  <br />
                  {CLINIC.street}, {CLINIC.zip} {CLINIC.city}
                </span>
              </a>
              <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-4 hover:text-cream/70 transition-colors">
                <Icon name="phone" className="w-6 h-6 text-bronze shrink-0" />
                <span className="font-serif text-2xl">{CLINIC.phoneDisplay}</span>
              </a>
              <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-4 hover:text-cream/70 transition-colors">
                <Icon name="mail" className="w-6 h-6 text-bronze shrink-0" />
                <span>{CLINIC.email}</span>
              </a>
              <div className="flex items-start gap-4">
                <Icon name="clock" className="w-6 h-6 text-bronze shrink-0 mt-0.5" />
                <ul className="space-y-1">
                  {CLINIC.hours.map((row) => (
                    <li key={row.d} className="flex gap-3">
                      <span className="text-cream/60 w-40 shrink-0">{row.d}</span>
                      <span>{row.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="px-8 py-4 rounded-full bg-bronze text-white text-sm font-semibold tracking-wide text-center hover:bg-bronzedark transition-colors"
              >
                Jetzt anrufen
              </a>
              <a
                href={`mailto:${CLINIC.email}?subject=Terminanfrage`}
                className="px-8 py-4 rounded-full border border-cream/40 text-cream text-sm font-semibold tracking-wide text-center hover:bg-cream hover:text-forest transition-colors"
              >
                E-Mail schreiben
              </a>
            </div>
          </Reveal>
        </div>

        {/* Aussenansicht der Praxis (ersetzt die Google-Maps-Karte) */}
        <Reveal delay={200} className="relative rounded-[1.75rem] overflow-hidden min-h-[320px] md:min-h-0 bg-forestdark">
          <img
            src={IMG.exterior}
            alt={`Aussenansicht der Zahnarztpraxis ${CLINIC.legalName} in ${CLINIC.city}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forestdark/70 via-transparent to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-cream text-sm font-medium drop-shadow">
              {CLINIC.street}, {CLINIC.zip} {CLINIC.city}
            </span>
            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cream/95 text-forest text-xs font-semibold hover:bg-cream transition-colors w-fit"
            >
              <Icon name="pin" className="w-4 h-4 text-bronze" />
              Route auf Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
