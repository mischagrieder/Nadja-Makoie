import { useStaggeredReveal } from '../lib/hooks';
import { CLINIC, allServices } from '../data';

function Icon({ path, className = '' }: { path: string; className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const ICONS = {
  pin: 'M12 21s-7-6.3-7-11a7 7 0 1 1 14 0c0 4.7-7 11-7 11z M12 10a1 1 0 1 0 0-0.01',
  phone:
    'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 7l-10 6L2 7',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
};

export default function ContactSection() {
  const reveal = useStaggeredReveal(3);
  const year = new Date().getFullYear();

  return (
    <>
      <section
        id="kontakt"
        ref={reveal.containerRef}
        className="relative w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
          {/* Contact card */}
          <div
            style={reveal.getAnimStyle(0)}
            className="rounded-xl md:rounded-2xl bg-black text-white p-6 md:p-10 flex flex-col justify-between gap-8"
          >
            <div>
              <span className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                Kontakt
              </span>
              <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] mb-6">
                Termin
                <br />
                vereinbaren
              </h2>

              <div className="space-y-4 text-sm md:text-base">
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white/70 transition-colors"
                >
                  <Icon path={ICONS.pin} className="mt-0.5 shrink-0" />
                  <span>
                    <strong className="font-semibold">{CLINIC.legalName}</strong> · {CLINIC.dentist}
                    <br />
                    {CLINIC.street}, {CLINIC.zip} {CLINIC.city}
                  </span>
                </a>
                <a
                  href={`tel:${CLINIC.phoneHref}`}
                  className="flex items-center gap-3 hover:text-white/70 transition-colors"
                >
                  <Icon path={ICONS.phone} className="shrink-0" />
                  <span className="font-semibold">{CLINIC.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="flex items-center gap-3 hover:text-white/70 transition-colors"
                >
                  <Icon path={ICONS.mail} className="shrink-0" />
                  <span>{CLINIC.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <Icon path={ICONS.clock} className="mt-0.5 shrink-0" />
                  <ul className="space-y-1">
                    {CLINIC.hours.map((row) => (
                      <li key={row.d} className="flex gap-2">
                        <span className="text-white/60 w-40 shrink-0">{row.d}</span>
                        <span className="font-medium">{row.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="px-6 py-4 bg-white text-black rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
              >
                Jetzt anrufen
              </a>
              <a
                href={`mailto:${CLINIC.email}?subject=Terminanfrage`}
                className="px-6 py-4 bg-transparent border border-white/40 text-white rounded-full text-sm font-semibold text-center hover:bg-white hover:text-black transition-colors"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>

          {/* Map card */}
          <div
            style={reveal.getAnimStyle(1)}
            className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[300px] md:min-h-0 bg-stone-100"
          >
            <iframe
              title="Standort Dental Wellness AG, Konradstrasse 34, 4600 Olten"
              src={CLINIC.mapsEmbed}
              className="w-full h-full min-h-[300px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Services / SEO card */}
        <div
          style={reveal.getAnimStyle(2)}
          className="rounded-xl md:rounded-2xl bg-stone-50 p-6 md:p-10"
        >
          <span className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Unsere Leistungen
          </span>
          <div className="flex flex-wrap gap-2">
            {allServices.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-black/10 bg-white text-sm md:text-base font-medium text-black"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-3 md:px-5 pb-6 pt-4">
        <div className="rounded-xl md:rounded-2xl bg-white border border-black/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-neutral-600">
            <p className="font-bold text-black text-base">Dental Wellness AG</p>
            <p>
              {CLINIC.street} · {CLINIC.zip} {CLINIC.city} · {CLINIC.country}
            </p>
            <p>
              <a href={`tel:${CLINIC.phoneHref}`} className="hover:text-black">
                {CLINIC.phoneDisplay}
              </a>{' '}
              ·{' '}
              <a href={`mailto:${CLINIC.email}`} className="hover:text-black">
                {CLINIC.email}
              </a>
            </p>
          </div>
          <div className="text-sm text-neutral-500 md:text-right">
            <p>
              Zahnärztlicher Notfall:{' '}
              <a href={`tel:${CLINIC.phoneHref}`} className="font-semibold text-black hover:underline">
                {CLINIC.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">© {year} Dental Wellness AG · Olten</p>
          </div>
        </div>
      </footer>
    </>
  );
}
