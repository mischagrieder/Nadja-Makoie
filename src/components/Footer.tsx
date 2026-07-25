import { CLINIC, allServices } from '../data';

const NAV = [
  { label: 'Behandlungen', href: '#behandlungen' },
  { label: 'Praxis', href: '#praxis' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forestdark text-cream/75">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2 max-w-sm">
          <span className="font-serif text-2xl font-semibold text-cream">Dental Wellness</span>
          <p className="mt-3 text-sm leading-relaxed">
            {CLINIC.claim}. Ihre Zahnarztpraxis mitten in Olten – {CLINIC.dentist}.
          </p>
          <p className="mt-5 text-sm">
            {CLINIC.street} · {CLINIC.zip} {CLINIC.city}
            <br />
            <a href={`tel:${CLINIC.phoneHref}`} className="hover:text-cream transition-colors">
              {CLINIC.phoneDisplay}
            </a>{' '}
            ·{' '}
            <a href={`mailto:${CLINIC.email}`} className="hover:text-cream transition-colors">
              {CLINIC.email}
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <span className="eyebrow text-bronze">Navigation</span>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-cream transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <span className="eyebrow text-bronze">Leistungen</span>
          <ul className="mt-4 space-y-2 text-sm">
            {allServices.slice(0, 6).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-cream/55">
          <p>© {year} Dental Wellness AG · Olten</p>
          <nav className="flex items-center gap-4">
            <a href="/impressum.html" className="text-cream/70 hover:text-cream transition-colors">
              Impressum
            </a>
            <a href="/datenschutz.html" className="text-cream/70 hover:text-cream transition-colors">
              Datenschutz
            </a>
          </nav>
          <p>
            Zahnärztlicher Notfall:{' '}
            <a href={`tel:${CLINIC.phoneHref}`} className="text-cream/80 hover:text-cream">
              {CLINIC.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
