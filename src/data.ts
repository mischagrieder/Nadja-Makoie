// ---------------------------------------------------------------------------
// Zentrale Inhalte & Konstanten für die Dental Wellness AG, Olten
// Design-Referenz: klinik-schwarzwald.com (elegant, warm, premium)
// ---------------------------------------------------------------------------

// -- Bilder ------------------------------------------------------------------
// Mit Higgsfield (Recraft V4.1, 2K) eigens für diese Praxis generiert, warm-
// elegant abgestimmt und als optimiertes WebP über den Higgsfield-CDN geliefert.
// Original-PNGs siehe README (falls selbst gehostet werden soll).
export const IMG = {
  hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260722_064339_42355fa9-3f2c-406b-8615-dbab1a27471b.png&w=1800&q=85',
  // Echtes Foto von Dr. Makoie an ihrem Empfang, mit Higgsfield bereinigt
  // (Google-Maps-Elemente entfernt) und auf 2K hochskaliert.
  doctor: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260726_164140_74fc4a39-7260-4d37-8860-a2e8e8233399.png&w=1100&q=85',
  room: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260722_064344_c77aa870-6f16-4d47-83ec-fffeadd26210.png&w=1400&q=85',
  smile: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180847_97161e86-849d-432f-8f38-8de1f52bebe1.png&w=1100&q=85',
  patient: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260720_180850_2a3d5a1e-d3df-48d3-973c-974b5b3ae0d3.png&w=1100&q=85',
  // Aussenansicht der Praxis (Higgsfield, dekorativer Eindruck). Fuer die echte
  // Fassade bitte ein reales Foto einsetzen.
  exterior: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260726_165921_4459a78a-228e-47c2-b4bd-046ea04f1f79.png&w=1100&q=85',
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
    { d: 'Montag bis Freitag', h: '08:00 bis 17:00 Uhr' },
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

// -- Behandlungen (Stapelkarten) ---------------------------------------------
// Jede Behandlung mit eigenem, kühl abgestimmtem Higgsfield-Bild.
export const services: Array<{ icon: string; name: string; text: string; img: string }> = [
  {
    icon: 'sparkle',
    name: 'Dentalhygiene & Prophylaxe',
    text: 'Eine gründliche professionelle Zahnreinigung entfernt hartnäckige Beläge und Verfärbungen, die man selbst nicht erreicht. So beugen wir Karies und Zahnfleischentzündungen vor und halten Ihr Lächeln dauerhaft gesund und hell.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260725_190321_8823b4b0-9446-4879-a699-f0bdba5afff2.png&w=900&q=85',
  },
  {
    icon: 'star',
    name: 'Bleaching & Ästhetik',
    text: 'Mit einer sanften Zahnaufhellung und feinen ästhetischen Korrekturen holen wir das Beste aus Ihrem Lächeln heraus. Alles individuell auf Ihr Gesicht abgestimmt, für einen natürlich helleren und harmonischen Eindruck.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260725_190323_7f8bc5e5-5269-480f-8122-f0fa0044b41b.png&w=900&q=85',
  },
  {
    icon: 'veneer',
    name: 'Veneers',
    text: 'Hauchdünne Keramikschalen legen sich unauffällig auf die Frontzähne und korrigieren Form, Farbe und kleine Lücken. Das Ergebnis wirkt völlig natürlich und ist zugleich äusserst stabil.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260725_190325_ed495727-4d5e-4dc8-ab87-1c9a99e6cd46.png&w=900&q=85',
  },
  {
    icon: 'crown',
    name: 'Kronen & Brücken',
    text: 'Individuell gefertigter Zahnersatz stellt beschädigte oder fehlende Zähne wieder her. Funktion und Ästhetik greifen dabei so ineinander, dass am Ende alles wirkt wie natürlich gewachsen.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260725_190335_3ca26578-a2cb-4430-9358-728aa3838e88.png&w=900&q=85',
  },
  {
    icon: 'implant',
    name: 'Implantate & Zahnersatz',
    text: 'Fest verankerte Implantate ersetzen verlorene Zähne dauerhaft und fühlen sich an wie die eigenen. Für alle anderen Fälle fertigen wir hochwertige Prothesen, die sicher sitzen und gut aussehen.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260725_190333_fc3e9e91-3dab-43e7-9672-ec2a4a0f96de.png&w=900&q=85',
  },
  {
    icon: 'tooth',
    name: 'Wurzelbehandlung',
    text: 'Ist der Zahnnerv entzündet, erhalten wir mit einer schonenden Wurzelbehandlung Ihren eigenen Zahn. Moderne Technik macht den Eingriff präzise, ruhig und weitgehend schmerzfrei.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260726_110852_c28981cf-b07c-4587-a741-32d0d85050e6.png&w=900&q=85',
  },
  {
    icon: 'shield',
    name: 'Parodontologie',
    text: 'Entzündetes, zurückweichendes Zahnfleisch nehmen wir früh in Behandlung. So stoppen wir den Knochenabbau rechtzeitig und sichern den festen, gesunden Halt Ihrer Zähne.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260726_110858_b726ebad-322e-4e5e-bfd6-1a1d6b09c678.png&w=900&q=85',
  },
  {
    icon: 'spark',
    name: 'Weisheitszähne & Oralchirurgie',
    text: 'Von der Entfernung der Weisheitszähne bis zu kleineren chirurgischen Eingriffen sind Sie bei uns in erfahrenen Händen. Routiniert, sorgfältig und mit viel Ruhe für eine rasche Heilung.',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3FuPVC4JIayU3rXUwYAnv5ZoEBp%2Fhf_20260726_110900_25edc3bd-f7d7-4046-bcdf-7ccb70e592b4.png&w=900&q=85',
  },
];

// -- Warum Dental Wellness ---------------------------------------------------
export const whyUs = [
  {
    icon: 'heart',
    title: 'Angstfrei & sanft',
    text: 'Lachgas, schonende Laserbehandlung und viel Zeit für Ihre Ruhe im Behandlungsstuhl.',
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
    text: 'Gut erreichbar mitten in der Stadt, an der Konradstrasse 34.',
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
// Echte Google-Rezensionen der Praxis (Stand der übermittelten Screenshots).
// GOOGLE_RATING = angezeigte Sterne-Wertung im Badge.
export const GOOGLE_RATING = 5.0;

export const reviews: Array<{ name: string; initials: string; text: string; date: string }> = [
  {
    name: 'Judith B',
    initials: 'JB',
    text: 'Sehr erfahrene Zahnärztin in allen Bereichen mit tollem Team. Behandlungen absolut top und schmerzfrei. Umfangreiche Information über Behandlung und Preis. Ich kann Fr. Dr. Makoie nur weiterempfehlen.',
    date: 'vor 7 Monaten',
  },
  {
    name: 'Sema Kaya',
    initials: 'SK',
    text: 'Ich bin Angstpatientin und wurde sehr gut behandelt. Alle sind sehr freundlich und ich habe mich sehr wohl gefühlt. Ich kann die Praxis jedem weiterempfehlen.',
    date: 'vor 7 Monaten',
  },
  {
    name: 'David Aeschlimann',
    initials: 'DA',
    text: 'Ich bin seit Jahren sehr zufriedener Patient. 4 Weisheitszähne entfernt, regelmässige Dentalhygiene, Löcher flicken, alles super kompetent und freundlich.',
    date: 'vor 4 Monaten',
  },
  {
    name: 'Thomas Bertschin',
    initials: 'TB',
    text: 'Meine Frau ist absolut begeistert! Sowohl mit der Behandlung als auch mit dem gesamten Team. Sie ist mehr als zufrieden. Herzlichen Dank für die tolle Betreuung!',
    date: 'vor 4 Monaten',
  },
  {
    name: 'Roger Wyss',
    initials: 'RW',
    text: 'War heute zur Zahnreinigung in der Praxis. Hat mich sehr gefreut, dass Frau Stössel wieder da ist. Bin mit der Arbeit von Frau Makoie und ihrem Team stets zufrieden und fühle mich gut aufgehoben. Danke!',
    date: 'vor 5 Monaten',
  },
  {
    name: 'Tabea Stössel',
    initials: 'TS',
    text: 'Ich bin rundum zufrieden mit der Behandlung bei Dr. Makoie. Sie ist sehr kompetent, arbeitet ruhig und vor allem schnell, was einem viel Sicherheit gibt. Besonders die Entfernung meiner Weisheitszähne war wirklich spitze, alles verlief professionell, zügig und nahezu schmerzfrei. Auch das Praxisteam war freundlich und gut organisiert. Ich kann Dr. Makoie sowie die Praxis uneingeschränkt weiterempfehlen.',
    date: 'vor 7 Monaten',
  },
];

// -- Häufige Fragen (FAQ) ----------------------------------------------------
export const faqs: Array<{ q: string; a: string }> = [
  {
    q: 'Nehmen Sie neue Patientinnen und Patienten auf?',
    a: 'Ja, sehr gerne. Rufen Sie uns einfach an oder schreiben Sie uns eine E-Mail, dann finden wir zeitnah einen passenden Termin für Ihr erstes Kennenlernen.',
  },
  {
    q: 'Ich habe grosse Angst vor dem Zahnarzt. Was tun Sie dagegen?',
    a: 'Sehr viele unserer Patienten kommen mit Angst zu uns. Wir nehmen uns Zeit, erklären jeden Schritt und bieten bei Bedarf Lachgas und eine schonende Laserbehandlung an, damit Sie ruhig und schmerzfrei durch den Termin kommen.',
  },
  {
    q: 'Wie schnell bekomme ich bei Schmerzen einen Termin?',
    a: 'Bei akuten Schmerzen versuchen wir, Sie noch am selben Tag unterzubringen. Rufen Sie uns dafür möglichst früh am Morgen an unter 062 212 50 32.',
  },
  {
    q: 'Was kostet eine professionelle Dentalhygiene?',
    a: 'Die Kosten hängen vom Aufwand ab. Vor der Behandlung besprechen wir transparent, was auf Sie zukommt, damit es keine Überraschungen auf der Rechnung gibt.',
  },
  {
    q: 'Werden die Behandlungen von der Krankenkasse übernommen?',
    a: 'Zahnbehandlungen sind in der Schweiz meist Privatleistungen. Bei Unfällen oder bestimmten Erkrankungen ist eine Kostenbeteiligung möglich. Wir beraten Sie gerne, welche Belege Sie einreichen können.',
  },
  {
    q: 'Bieten Sie auch Zahnaufhellung und Veneers an?',
    a: 'Ja. Von sanftem Bleaching bis zu hauchdünnen Keramikschalen begleiten wir Sie zu einem natürlich schönen Lächeln, abgestimmt auf Ihr Gesicht und Ihre Wünsche.',
  },
];
