import { useEffect, useState } from 'react';
import { CLINIC } from '../data';
import { useScrolled } from '../lib/hooks';

const LINKS = [
  { label: 'Behandlungen', href: '#behandlungen' },
  { label: 'Praxis', href: '#praxis' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const light = !scrolled && !open; // light text over the dark hero

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#start" className="leading-none">
            <span
              className={`block font-serif text-2xl md:text-[1.7rem] font-semibold tracking-tight transition-colors ${
                light ? 'text-cream' : 'text-forest'
              }`}
            >
              Dental Wellness
            </span>
            <span
              className={`eyebrow block mt-0.5 transition-colors ${
                light ? 'text-cream/70' : 'text-bronze'
              }`}
            >
              Zahnarztpraxis Olten
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                  light ? 'text-cream' : 'text-ink'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${CLINIC.phoneHref}`}
              className={`text-sm font-semibold transition-colors ${
                light ? 'text-cream' : 'text-forest'
              }`}
            >
              {CLINIC.phoneDisplay}
            </a>
            <a
              href="#kontakt"
              className="px-5 py-2.5 rounded-full bg-bronze text-white text-sm font-semibold tracking-wide hover:bg-bronzedark transition-colors"
            >
              Termin vereinbaren
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                open ? 'translate-y-[7px] rotate-45 bg-cream' : light ? 'bg-cream' : 'bg-forest'
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                open ? 'opacity-0' : light ? 'bg-cream' : 'bg-forest'
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                open ? '-translate-y-[7px] -rotate-45 bg-cream' : light ? 'bg-cream' : 'bg-forest'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-forest transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl font-medium text-cream hover:text-bronze transition-all duration-500"
              style={{
                transitionDelay: open ? `${120 + i * 70}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(24px)',
              }}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-10 pt-8 border-t border-cream/20">
            <a
              href={`tel:${CLINIC.phoneHref}`}
              className="block text-cream/80 text-sm mb-4"
            >
              Zahnärztlicher Notfall · {CLINIC.phoneDisplay}
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="block text-center w-full px-6 py-4 rounded-full bg-bronze text-white text-sm font-semibold hover:bg-bronzedark transition-colors"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
