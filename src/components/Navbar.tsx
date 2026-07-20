import { useEffect, useState } from 'react';
import { CLINIC } from '../data';

const NAV_LINKS = [
  { label: 'Start', href: '#start' },
  { label: 'Behandlungen', href: '#behandlungen' },
  { label: 'Implantate', href: '#implantate' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-md">
        {/* Logo */}
        <a href="#start" className="flex flex-col" aria-label="Dental Wellness Olten – Startseite">
          <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none text-black">
            Dental
          </span>
          <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none text-black -mt-1.5 md:-mt-2">
            Wellness
          </span>
          <span className="text-[8px] md:text-[9px] font-medium leading-none mt-1.5 md:mt-2 uppercase tracking-[0.2em] text-black">
            zahnarztpraxis olten
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${CLINIC.phoneHref}`}
            className="text-sm font-semibold text-black hover:text-neutral-500 transition-colors"
          >
            Zahnärztlicher Notfall
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-white rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-200"
          >
            Menü
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center relative"
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          <span
            className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}
          />
        </button>
      </header>

      {/* Slide-in menu overlay (works on all sizes; opened by hamburger or Menü) */}
      <div
        className={`fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-4xl font-bold text-black hover:text-neutral-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}

            <div
              className="mt-8 pt-8 border-t border-neutral-200 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{
                transitionDelay: open ? '450ms' : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(2rem)',
              }}
            >
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="block text-sm font-semibold text-black mb-4 hover:text-neutral-500 transition-colors"
              >
                Zahnärztlicher Notfall · {CLINIC.phoneDisplay}
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="block text-center w-full px-6 py-4 bg-black rounded-full text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200"
              >
                Termin buchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
