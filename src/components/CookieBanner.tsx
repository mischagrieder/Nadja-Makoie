import { useState } from 'react';
import { getConsent, setConsent, type Consent } from '../lib/consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null);
  if (!visible) return null;

  const choose = (v: Consent) => {
    setConsent(v);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[60] bg-cream border-t border-sand shadow-[0_-8px_30px_-18px_rgba(23,50,78,0.35)]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-ink/80 leading-relaxed flex-1">
          Wir verwenden technisch notwendige Speicherung sowie, nur mit Ihrer Einwilligung,
          externe Dienste (z. B. Google Maps, Google Fonts), um diese Website bereitzustellen.
          Mehr dazu in der{' '}
          <a href="/datenschutz.html" className="text-bronze font-semibold hover:underline">
            Datenschutzerklärung
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose('necessary')}
            className="px-6 py-3 rounded-full border border-forest/25 text-forest text-sm font-semibold hover:bg-forest hover:text-cream transition-colors"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => choose('all')}
            className="px-6 py-3 rounded-full bg-bronze text-white text-sm font-semibold hover:bg-bronzedark transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
