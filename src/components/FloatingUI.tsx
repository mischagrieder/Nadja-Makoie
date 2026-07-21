import { useState } from 'react';
import ChatWidget from './ChatWidget';

export default function FloatingUI() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* Persistent booking CTA – always visible, scrolls with the page */}
      <a
        href="#kontakt"
        className={`fixed z-30 right-4 sm:right-5 bottom-[5.75rem] flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-bronze text-white text-sm font-semibold shadow-lg hover:bg-bronzedark transition-all duration-300 ${
          chatOpen ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100'
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        Termin vereinbaren
      </a>

      {/* Chat launcher */}
      <button
        type="button"
        onClick={() => setChatOpen((v) => !v)}
        aria-label={chatOpen ? 'Chat schliessen' : 'Chat öffnen'}
        aria-expanded={chatOpen}
        className="fixed z-30 right-4 sm:right-5 bottom-5 w-14 h-14 rounded-full bg-forest text-cream shadow-xl flex items-center justify-center hover:bg-forestdark transition-colors"
      >
        <span className={`absolute transition-all duration-300 ${chatOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.7 8.7 0 0 1-3.9-.9L3 21l1.9-5.6A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
        </span>
        <span className={`absolute transition-all duration-300 ${chatOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-50'}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
      </button>

      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
