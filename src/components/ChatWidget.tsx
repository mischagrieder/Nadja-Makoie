import { useEffect, useRef, useState } from 'react';
import { CLINIC } from '../data';
import { getLocalReply, GREETING, SUGGESTIONS, type BotAction } from '../lib/chatKnowledge';

interface Msg {
  role: 'bot' | 'user';
  text: string;
  actions?: BotAction[];
}

// Optional: set VITE_CHAT_API_URL to a serverless endpoint to enable true
// open-ended AI answers (see README). Without it, the built-in knowledge
// engine answers practice and general dental questions offline.
const API_URL: string | undefined = (import.meta as any).env?.VITE_CHAT_API_URL;

async function fetchReply(history: Msg[], userText: string): Promise<Msg> {
  if (API_URL) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...history, { role: 'user', text: userText }].map((m) => ({
            role: m.role === 'bot' ? 'assistant' : 'user',
            content: m.text,
          })),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.reply) return { role: 'bot', text: String(data.reply) };
      }
    } catch {
      /* fall through to local engine */
    }
  }
  const local = getLocalReply(userText);
  return { role: 'bot', text: local.text, actions: local.actions };
}

export default function ChatWidget({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([{ role: 'bot', text: GREETING.text }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setInput('');
    const history = messages;
    setMessages((m) => [...m, { role: 'user', text }]);
    setTyping(true);
    const reply = await fetchReply(history, text);
    // small natural delay
    await new Promise((r) => setTimeout(r, 450));
    setTyping(false);
    setMessages((m) => [...m, reply]);
  };

  const showSuggestions = messages.length <= 1;

  return (
    <div
      role="dialog"
      aria-label="Chat mit Dental Wellness"
      className={`fixed z-30 right-4 sm:right-5 bottom-[6.5rem] w-[calc(100vw-2rem)] sm:w-[380px] h-[min(72vh,560px)] flex flex-col bg-cream rounded-3xl shadow-2xl border border-sand overflow-hidden origin-bottom-right transition-all duration-300 ${
        open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="bg-forest text-cream px-5 py-4 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-cream/15 flex items-center justify-center text-lg">
          🦷
        </span>
        <div className="flex-1">
          <p className="font-serif text-lg leading-none">Dental Wellness Assistent</p>
          <p className="text-cream/70 text-xs mt-1">Meist antwortet er sofort</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Chat schliessen"
          className="w-8 h-8 rounded-full hover:bg-cream/15 flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col max-w-[85%] ${m.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}>
            <div
              className={`px-4 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-forest text-cream rounded-2xl rounded-br-md'
                  : 'bg-white text-ink border border-sand rounded-2xl rounded-tl-md'
              }`}
            >
              {m.text}
            </div>
            {m.actions && m.actions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {m.actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    onClick={() => a.href.startsWith('#') && onClose()}
                    className="px-3 py-1.5 rounded-full bg-bronze text-white text-xs font-semibold hover:bg-bronzedark transition-colors"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div className="self-start bg-white border border-sand rounded-2xl rounded-tl-md px-4 py-3 flex gap-1">
            {[0, 150, 300].map((d) => (
              <span key={d} className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce" style={{ animationDelay: `${d}ms` }} />
            ))}
          </div>
        )}

        {showSuggestions && (
          <div className="flex flex-wrap gap-2 mt-1">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="px-3 py-1.5 rounded-full border border-forest/25 text-forest text-xs font-medium hover:bg-forest hover:text-cream transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="border-t border-sand p-3 flex items-center gap-2 bg-cream"
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ihre Frage eingeben …"
          aria-label="Nachricht eingeben"
          className="flex-1 bg-white border border-sand rounded-full px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-bronze"
        />
        <button
          type="submit"
          aria-label="Senden"
          disabled={!input.trim()}
          className="w-11 h-11 shrink-0 rounded-full bg-bronze text-white flex items-center justify-center hover:bg-bronzedark transition-colors disabled:opacity-40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>

      <p className="text-[10px] text-ink/40 text-center pb-2 px-4">
        Automatische Antworten – im Zweifel berät Sie {CLINIC.dentist} gern persönlich.
      </p>
    </div>
  );
}
