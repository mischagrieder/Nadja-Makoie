import { useEffect, useState } from 'react';

export type Consent = 'all' | 'necessary';
const KEY = 'dw-cookie-consent';
const EVENT = 'dw-consent';

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'all' || v === 'necessary' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(v: Consent): void {
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* ignore storage errors */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: v }));
}

/** Reactive consent value; updates when the visitor makes/changes a choice. */
export function useConsent(): Consent | null {
  const [consent, setState] = useState<Consent | null>(() => getConsent());
  useEffect(() => {
    const handler = () => setState(getConsent());
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);
  return consent;
}
