// ---------------------------------------------------------------------------
// Zentrale Inhalte & Konstanten – Dental Wellness AG, Olten
// Design-Referenz: klinik-schwarzwald.com (elegant, warm, premium)
// ---------------------------------------------------------------------------

// -- Bilder ------------------------------------------------------------------
// Mit Higgsfield (Recraft V4.1, 2K) eigens für diese Praxis generiert, warm-
// elegant abgestimmt und als optimiertes WebP über den Higgsfield-CDN geliefert.
// Original-PNGs siehe README (falls selbst gehostet werden soll).
export const IMG = {
  hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_185639_e6a58397-0dc8-472c-8c94-abb90d85045b.png&w=1800&q=85',
  doctor: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_185641_6c4cfd04-e26c-4647-ad8a-1ba8451899e9.png&w=1000&q=85',
  room: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_185643_31857b20-24cc-4d35-8199-2b7a8a7f3055.png&w=1400&q=85',
  smile: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180847_97161e86-849d-432f-8f38-8de1f52bebe1.png&w=1100&q=85',
  patient: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180850_2a3d5a1e-d3df-48d3-973c-974b5b3ae0d3.png&w=1100&q=85',
} as const;

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
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental%20Wellness%20AG%20Konradstrasse%2034%204600%20Olten',
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental%20Wellness%20AG%20Konradstrasse%2034%204600%20Olten',
  writeReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental%20Wellness%20AG%20Konradstrasse%2034%204600%20Olten',
  mapsEmbed:
    'https://www.google.com/maps?q=Konradstrasse%2034%2C%204600%20Olten&output=embed',
} as const;

// -- Vertrauens-Kennzahlen ---------------------------------------------------
// HINWEIS: Platzhalter-Werte, die den Aufbau zeigen. Vor dem Go-Live durch
// echte, belegbare Zahlen ersetzen (oder qualitative Aussagen belassen).
export const stats = [
  { value: '5,0★', label: 'Google-Bewertungen' },
  { value: '20+', label: 'Jahre Erfahrung' },
  { value: '10 000+', label: 'Behandlungen' },
  { value: '100%', label: 'Persönliche Betreuung' },
];

// -- Behandlungen (Kacheln) --------------------------------------------------
export const services: Array<{ icon: string; name: string; text: string }> = [
  {
    icon: 'sparkle',
    name: 'Dentalhygiene & Prophylaxe',
    text: 'Professionelle Zahnreinigung für ein gesundes, langanhaltend strahlendes Lächeln.',
  },
  {
    icon: 'star',
    name: 'Ästhetik & Bleaching',
    text: 'Sanfte Zahnaufhellung und ästhetische Korrekturen – für Ihr schönstes Lächeln.',
  },
  {
    icon: 'veneer',
    name: 'Veneers',
    text: 'Hauchdünne Keramikschalen für makellose, natürlich wirkende Frontzähne.',
  },
  {
    icon: 'implant',
    name: 'Implantate',
    text: 'Fester, dauerhafter Zahnersatz, der sich anfühlt wie die eigenen Zähne.',
  },
  {
    icon: 'crown',
    name: 'Kronen & Brücken',
    text: 'Hochwertiger Zahnersatz, der Funktion und Ästhetik perfekt vereint.',
  },
  {
    icon: 'heart',
    name: 'Angstfreie Behandlung',
    text: 'Entspannt zum Zahnarzt – mit Lachgas, Laser und viel Einfühlungsvermögen.',
  },
];

// -- Warum Dental Wellness ---------------------------------------------------
export const whyUs = [
  {
    icon: 'heart',
    title: 'Angstfrei & sanft',
    text: 'Lachgas, schonende Laserbehandlung und viel Zeit – für Ihre Ruhe im Behandlungsstuhl.',
  },
  {
    icon: 'spark',
    title: 'Modernste Technologie',
    text: 'Digitale, präzise und schonende Zahnmedizin auf dem neuesten Stand.',
  },
  {
    icon: 'person',
    title: 'Persönliche Betreuung',
    text: 'Wir nehmen uns Zeit, hören zu und behandeln Sie individuell und ehrlich.',
  },
  {
    icon: 'pin',
    title: 'Zentral in Olten',
    text: 'Gut erreichbar mitten in der Stadt – an der Konradstrasse 34.',
  },
];

// -- Alle Leistungen (Footer / SEO) ------------------------------------------
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
// HINWEIS: PLATZHALTER-Beispiele. Vor dem Go-Live durch echte Google-
// Rezensionen ersetzen (oder Google-Widget einbinden). Rating & Anzahl ebenso.
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 48;

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
    text: 'Kompetent, herzlich und ehrlich. Meine Dentalhygiene und das Bleaching waren top – ich fühle mich mit meinem Lächeln endlich wieder rundum wohl.',
    date: 'vor 1 Monat',
  },
  {
    name: 'Marco B.',
    initials: 'MB',
    text: 'Kurzfristiger Notfalltermin, super freundlich empfangen und schnell geholfen. Man merkt, dass hier der Mensch im Mittelpunkt steht.',
    date: 'vor 3 Monaten',
  },
];
