import { useState } from 'react';
import { CLINIC } from '../data';
import { Icon } from './Icon';
import Reveal from './Reveal';
import { setConsent, useConsent } from '../lib/consent';

export default function Contact() {
  const consent = useConsent();
  const [loadMap, setLoadMap] = useState(false);
  const showMap = consent === 'all' || loadMap;
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

        {/* Map - Google Maps loads only after consent (Datenschutz) */}
        <Reveal delay={200} className="rounded-[1.75rem] overflow-hidden min-h-[320px] md:min-h-0 bg-forestdark">
          {showMap ? (
            <iframe
              title={`Standort ${CLINIC.legalName}, ${CLINIC.street}, ${CLINIC.zip} ${CLINIC.city}`}
              src={CLINIC.mapsEmbed}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center text-center gap-4 p-6 text-cream">
              <Icon name="pin" className="w-8 h-8 text-bronze" />
              <p className="text-cream/80 text-sm max-w-xs">
                Zum Anzeigen der Karte wird Google&nbsp;Maps geladen. Dabei können Daten an
                Google übermittelt werden.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setLoadMap(true);
                    setConsent('all');
                  }}
                  className="px-6 py-3 rounded-full bg-bronze text-white text-sm font-semibold hover:bg-bronzedark transition-colors"
                >
                  Karte laden
                </button>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-cream/40 text-cream text-sm font-semibold hover:bg-cream hover:text-forest transition-colors"
                >
                  Auf Google Maps öffnen
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
