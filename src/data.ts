// ---------------------------------------------------------------------------
// Zentrale Inhalte & Konstanten für die Website der Dental Wellness AG, Olten
// ---------------------------------------------------------------------------

// -- Bilder ------------------------------------------------------------------
// Mit Higgsfield (Recraft V4.1) eigens für diese Praxis generiert und über den
// Higgsfield-Bild-CDN (images.higgs.ai) als WebP ausgeliefert (Resize + CDN).
// Die unbearbeiteten Originale (PNG, 2K) sind in der README hinterlegt, falls
// die Bilder später vollständig selbst gehostet werden sollen.
export const HERO_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180819_7f944efd-9e12-4b3c-bc42-ad5b7c5131d5.png&w=1600&q=85';

export const SECTION2_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180847_97161e86-849d-432f-8f38-8de1f52bebe1.png&w=1400&q=85';

export const SECTION3_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180850_2a3d5a1e-d3df-48d3-973c-974b5b3ae0d3.png&w=1200&q=85';

export const SECTION3_IMG1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180853_3b8a3597-048b-48c3-8366-df050fbdfcd9.png&w=900&q=85';

export const SECTION3_IMG2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180855_ab0b6fd0-4baf-439b-b9a4-a532076895dd.png&w=900&q=85';

// -- Praxis-Stammdaten -------------------------------------------------------
export const CLINIC = {
  name: 'Dental Wellness',
  legalName: 'Dental Wellness AG',
  dentist: 'Dr. med. dent. Nadja V. Makoie',
  claim: 'Fundierte, angstfreie Behandlung in freundlicher Atmosphäre',
  street: 'Konradstrasse 34',
  zip: '4600',
  city: 'Olten',
  region: 'Kanton Solothurn',
  country: 'Schweiz',
  phoneDisplay: '062 212 50 32',
  phoneHref: '+41622125032',
  email: 'info@dentalwellness.ch',
  website: 'https://www.dentalwellness.ch',
  hours: [
    { d: 'Montag – Freitag', h: '08:00 – 17:00 Uhr' },
    { d: 'Samstag', h: 'nach Vereinbarung' },
    { d: 'Sonntag', h: 'geschlossen' },
  ],
  // Google Maps – öffnet den Praxis-Eintrag (inkl. Bewertungen). Sobald die
  // Praxis eine feste Place-ID hat, kann hier der exakte Deep-Link stehen.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental%20Wellness%20AG%20Konradstrasse%2034%204600%20Olten',
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental%20Wellness%20AG%20Konradstrasse%2034%204600%20Olten',
  writeReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental%20Wellness%20AG%20Konradstrasse%2034%204600%20Olten',
  mapsEmbed:
    'https://www.google.com/maps?q=Konradstrasse%2034%2C%204600%20Olten&output=embed',
} as const;

// -- Feature-Balken (Hero) ---------------------------------------------------
export const featureBars = [
  'Moderne Zahnmedizin',
  'Behandlung ohne Angst',
  'Herzliches Team',
];

// -- Leistungs-Kacheln (Smile-Gallery) --------------------------------------
export const services: Array<{ name: string; num: string | null; active: boolean }> = [
  { name: 'Veneers', num: '01', active: true },
  { name: 'Kronen &\nBrücken', num: '02', active: false },
  { name: 'Bleaching', num: '03', active: false },
  { name: 'Implantate', num: null, active: false },
];

// -- Alle Leistungen (Kontakt-/SEO-Abschnitt) --------------------------------
export const allServices = [
  'Dentalhygiene & Prophylaxe',
  'Bleaching / Zahnaufhellung',
  'Veneers & Ästhetik',
  'Kronen & Brücken',
  'Zahnimplantate',
  'Wurzelbehandlung',
  'Parodontitis-Behandlung',
  'Kinderzahnmedizin',
  'Weisheitszähne',
  'Prothesen & Zahnersatz',
  'Digitales Röntgen',
  'Laser & Lachgas',
];

// -- Google-Bewertungen ------------------------------------------------------
// HINWEIS: Dies sind PLATZHALTER-Beispiele, die den Aufbau des Bewertungs-
// bereichs zeigen. Vor dem Live-Gang durch echte Google-Rezensionen ersetzen
// (oder das offizielle Google-Reviews-Widget einbinden). Die Sterne-Zahl und
// die Anzahl sind ebenfalls anzupassen.
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 48; // Platzhalter – an echten Wert anpassen

export const reviews: Array<{ name: string; initials: string; text: string; date: string }> = [
  {
    name: 'Sandra M.',
    initials: 'SM',
    text: 'Ich hatte immer grosse Angst vor dem Zahnarzt – hier wurde ich so einfühlsam betreut, dass ich zum ersten Mal völlig entspannt war. Das Team nimmt sich wirklich Zeit.',
    date: 'vor 2 Wochen',
  },
  {
    name: 'Thomas R.',
    initials: 'TR',
    text: 'Sehr moderne Praxis mitten in Olten. Frau Dr. Makoie erklärt jeden Schritt genau und behandelt angenehm schmerzfrei. Absolute Weiterempfehlung!',
    date: 'vor 1 Monat',
  },
  {
    name: 'Elena K.',
    initials: 'EK',
    text: 'Kompetent, herzlich und ehrlich. Meine Dentalhygiene und das Bleaching waren top – ich fühle mich mit meinem Lächeln endlich wieder wohl.',
    date: 'vor 1 Monat',
  },
  {
    name: 'Marco B.',
    initials: 'MB',
    text: 'Kurzfristiger Notfalltermin, super freundlich empfangen und schnell geholfen. Man merkt, dass hier der Mensch im Mittelpunkt steht.',
    date: 'vor 3 Monaten',
  },
];
