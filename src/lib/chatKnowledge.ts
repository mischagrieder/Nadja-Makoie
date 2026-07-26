import { CLINIC } from '../data';

export interface BotAction {
  label: string;
  href: string;
}
export interface BotReply {
  text: string;
  actions?: BotAction[];
}

const BOOK: BotAction[] = [
  { label: 'Termin', href: '#kontakt' },
  { label: `Anrufen`, href: `tel:${CLINIC.phoneHref}` },
];

const hoursLine = `${CLINIC.hours[0].d}: ${CLINIC.hours[0].h}, ${CLINIC.hours[1].d}: ${CLINIC.hours[1].h}.`;

/** Fold German umlauts / ß so "zähne" and "zaehne" both match. */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');
}

interface Entry {
  keys: string[];
  reply: BotReply;
}

// Keys are written in normalised (ae/oe/ue/ss) form.
const ENTRIES: Entry[] = [
  // Begrüßung / Höflichkeit
  {
    keys: ['hallo', 'hi ', 'hey', 'guten tag', 'gruezi', 'servus', 'moin', 'guten morgen', 'guten abend'],
    reply: {
      text: 'Grüezi und herzlich willkommen bei Dental Wellness! 😊 Ich beantworte gerne Fragen zu unseren Behandlungen, Öffnungszeiten, Kosten oder ganz allgemein rund um Ihre Zähne. Was möchten Sie wissen?',
    },
  },
  { keys: ['danke', 'vielen dank', 'merci', 'dankeschoen'], reply: { text: 'Sehr gerne! Wenn ich sonst noch etwas für Sie tun kann, fragen Sie einfach.' } },
  { keys: ['tschuess', 'wiedersehen', 'ciao', 'bye', 'schoenen tag'], reply: { text: 'Alles Gute und bis bald bei Dental Wellness! 🦷' } },

  // Praxis-Infos
  {
    keys: ['oeffnungszeit', 'geoeffnet', 'wann offen', 'wann habt', 'wann haben', 'sprechzeit', 'offen', 'zeiten'],
    reply: { text: `Unsere Öffnungszeiten: ${hoursLine} Gerne vereinbaren wir einen Termin, der Ihnen passt.`, actions: BOOK },
  },
  {
    keys: ['adresse', 'wo seid', 'wo sind', 'wo ist', 'anfahrt', 'standort', 'finde ich', 'strasse', 'karte', 'parken', 'parkplatz', 'anreise'],
    reply: { text: `Sie finden uns an der ${CLINIC.street}, ${CLINIC.zip} ${CLINIC.city}, zentral gelegen und gut erreichbar.`, actions: [{ label: 'Route', href: CLINIC.mapsUrl }, { label: 'Anrufen', href: `tel:${CLINIC.phoneHref}` }] },
  },
  {
    keys: ['telefon', 'nummer', 'anrufen', 'erreichen', 'kontakt', 'email', 'e-mail', 'mail'],
    reply: { text: `Sie erreichen uns telefonisch unter ${CLINIC.phoneDisplay} oder per E-Mail an ${CLINIC.email}. Wir freuen uns auf Sie!`, actions: BOOK },
  },
  {
    keys: ['termin', 'buchen', 'vereinbaren', 'anmelden', 'reservieren', 'appointment', 'sprechstunde'],
    reply: { text: `Sehr gerne! Am schnellsten geht ein Termin telefonisch unter ${CLINIC.phoneDisplay} oder per E-Mail. Möchten Sie direkt Kontakt aufnehmen?`, actions: BOOK },
  },
  {
    keys: ['notfall', 'notdienst', 'akut', 'dringend', 'sofort', 'schnell hilfe'],
    reply: { text: `Bei einem zahnärztlichen Notfall rufen Sie uns bitte direkt an: ${CLINIC.phoneDisplay}. Wir helfen so schnell wie möglich weiter.`, actions: [{ label: 'Jetzt anrufen', href: `tel:${CLINIC.phoneHref}` }] },
  },
  {
    keys: ['kosten', 'preis', 'teuer', 'bezahlen', 'taxpunkt', 'rechnung', 'raten', 'ratenzahlung', 'versicherung', 'krankenkasse', 'was kostet'],
    reply: { text: 'Die Kosten hängen von der jeweiligen Behandlung ab. Wir rechnen transparent nach dem SSO-Tarif ab, und Ratenzahlungen sind nach Absprache möglich. In einem persönlichen Gespräch erstellen wir Ihnen gerne einen Kostenvoranschlag.', actions: BOOK },
  },
  {
    keys: ['leistung', 'was bietet', 'was macht', 'angebot', 'behandlungen', 'was koennt', 'welche behandlung'],
    reply: { text: 'Wir bieten das gesamte Spektrum moderner Zahnmedizin: Dentalhygiene & Prophylaxe, Ästhetik & Bleaching, Veneers, Implantate, Kronen & Brücken, Wurzelbehandlung, Parodontitis-Behandlung, Kinderzahnmedizin sowie sanfte Laser- & Lachgasbehandlung.', actions: BOOK },
  },

  // Angst / sanfte Behandlung
  {
    keys: ['angst', 'panik', 'angstpatient', 'fuerchte', 'furcht', 'nervoes', 'lachgas', 'sedier', 'beruhig', 'schiss', 'traue mich'],
    reply: { text: 'Das verstehen wir sehr gut. Viele unserer Patientinnen und Patienten kommen mit Angst. Wir nehmen uns bewusst viel Zeit, erklären jeden Schritt und behandeln besonders sanft, auf Wunsch mit Lachgas oder schonendem Laser. Bei uns dürfen Sie sich sicher fühlen.', actions: BOOK },
  },

  // Ästhetik
  {
    keys: ['bleaching', 'aufhellen', 'weisser', 'weisse zaehne', 'zahnaufhellung', 'bleichen', 'strahlend'],
    reply: { text: 'Mit einem professionellen Bleaching hellen wir Ihre Zähne schonend und gleichmässig auf, für ein natürlich strahlendes Lächeln. Wir beraten Sie gerne, welche Methode für Sie ideal ist.', actions: BOOK },
  },
  {
    keys: ['veneer', 'verblendschale', 'frontzaehne'],
    reply: { text: 'Veneers sind hauchdünne Keramikschalen, die auf die Frontzähne aufgebracht werden, ideal bei Verfärbungen, kleinen Lücken oder Formkorrekturen. Das Ergebnis wirkt sehr natürlich.', actions: BOOK },
  },

  // Zahnersatz
  {
    keys: ['implantat', 'fehlende zaehne', 'zahn verloren', 'zahnluecke', 'fester zahnersatz'],
    reply: { text: 'Implantate ersetzen fehlende Zähne dauerhaft: Eine künstliche Wurzel wird im Kiefer verankert und trägt eine Krone, die sich anfühlt wie ein eigener Zahn. Ob ein Implantat für Sie geeignet ist, klären wir in einer persönlichen Beratung.', actions: BOOK },
  },
  {
    keys: ['krone', 'bruecke', 'zahnersatz', 'prothese'],
    reply: { text: 'Kronen und Brücken stellen beschädigte oder fehlende Zähne funktionell und ästhetisch wieder her. Wir verwenden hochwertige, natürlich wirkende Materialien.', actions: BOOK },
  },
  {
    keys: ['wurzel', 'wurzelbehandlung', 'wurzelkanal', 'nerv entzuend'],
    reply: { text: 'Bei einer Wurzelbehandlung entfernen wir das entzündete Gewebe im Zahninneren und erhalten so Ihren eigenen Zahn. Dank moderner Technik und schonender Betäubung ist das heute meist gut auszuhalten.', actions: BOOK },
  },

  // Vorsorge / allgemeines Zahnwissen
  {
    keys: ['dentalhygiene', 'zahnreinigung', 'prophylaxe', 'professionelle reinigung', 'zahnstein', 'belag', 'verfaerbung'],
    reply: { text: 'Bei der professionellen Dentalhygiene entfernen wir Zahnstein, Beläge und Verfärbungen, die die Zahnbürste nicht erreicht. Wir empfehlen das je nach Bedarf 1 bis 2 Mal pro Jahr. Das beugt Karies und Zahnfleischentzündungen vor.', actions: BOOK },
  },
  {
    keys: ['putzen', 'zahnbuerste', 'zahnpasta', 'fluorid', 'zahnseide', 'interdental', 'richtig pflegen', 'mundhygiene'],
    reply: { text: 'Als Faustregel: 2× täglich rund 2 Minuten mit fluoridhaltiger Zahnpasta putzen, dazu einmal täglich Zahnseide oder Interdentalbürsten für die Zwischenräume. Eine weiche bis mittlere Bürste schont das Zahnfleisch. Gerne zeigen wir Ihnen die passende Technik.' },
  },
  {
    keys: ['zahnschmerz', 'zahnweh', 'tut weh', 'schmerz', 'weh tut', 'pochen'],
    reply: { text: 'Zahnschmerzen können viele Ursachen haben, etwa Karies, eine Entzündung oder einen freiliegenden Zahnhals. Kurzfristig können Kühlen und ein Schmerzmittel helfen, die Ursache sollte aber zahnärztlich abgeklärt werden. Sollen wir Ihnen einen Termin geben?', actions: BOOK },
  },
  {
    keys: ['karies', 'loch im zahn', 'loch'],
    reply: { text: 'Karies entsteht, wenn Bakterien Zucker in Säure umwandeln, die den Zahnschmelz angreift. Früh erkannt lässt sie sich mit einer kleinen Füllung gut behandeln. Regelmässige Kontrollen und Dentalhygiene beugen wirksam vor.', actions: BOOK },
  },
  {
    keys: ['zahnfleisch', 'blutet', 'bluten', 'parodont', 'parodontitis', 'entzuend', 'zahnfleischbluten'],
    reply: { text: 'Zahnfleischbluten ist oft ein Zeichen für eine Entzündung durch bakterielle Beläge. Gründliche Pflege und professionelle Dentalhygiene helfen meist rasch. Hält es an, sollten wir eine Parodontitis ausschliessen.', actions: BOOK },
  },
  {
    keys: ['weisheitszahn', 'weisheitszaehne', 'achter'],
    reply: { text: 'Weisheitszähne müssen nicht immer entfernt werden, sondern nur dann, wenn sie Beschwerden machen, sich entzünden oder keinen Platz haben. Wir beurteilen das anhand eines Röntgenbildes und beraten Sie ehrlich.', actions: BOOK },
  },
  {
    keys: ['empfindlich', 'schmerzempfindlich', 'kalt warm', 'sensibel', 'ziehen bei kalt'],
    reply: { text: 'Empfindliche Zähne entstehen häufig durch freiliegende Zahnhälse oder abgeriebenen Schmelz. Eine Zahnpasta für sensible Zähne, sanftes Putzen und der Verzicht auf zu viel Säure helfen. Wir finden gerne die Ursache heraus.', actions: BOOK },
  },
  {
    keys: ['mundgeruch', 'schlechter atem', 'atem riecht'],
    reply: { text: 'Mundgeruch entsteht meist durch Bakterien auf Zunge und in Zahnzwischenräumen. Gründliche Mundhygiene inklusive Zungenreinigung und regelmässige Dentalhygiene helfen fast immer. Bleibt es bestehen, klären wir die Ursache ab.', actions: BOOK },
  },
  {
    keys: ['zucker', 'ernaehrung', 'suess', 'saure', 'saeure', 'getraenke', 'essen schaedlich'],
    reply: { text: 'Häufiger Zucker- und Säurekonsum (auch Softdrinks und Fruchtsäfte) fördert Karies und greift den Schmelz an. Tipp: nach säurehaltigem Essen etwa 30 Minuten mit dem Putzen warten und zwischendurch Wasser trinken.' },
  },
  {
    keys: ['gelb', 'gelbe zaehne', 'verfaerb', 'kaffee', 'tee', 'rotwein', 'rauchen', 'nikotin', 'dunkle zaehne', 'fleck', 'verfaerbte'],
    reply: { text: 'Zähne verfärben sich vor allem durch Farbstoffe aus Kaffee, Tee, Rotwein und Nikotin sowie mit dem Alter. Oberflächliche Verfärbungen lassen sich mit einer professionellen Dentalhygiene entfernen, für ein rundum helleres Lächeln sorgt ein Bleaching.', actions: BOOK },
  },
  {
    keys: ['spange', 'zahnspange', 'kieferorthop', 'gerade zaehne', 'schiefe zaehne', 'aligner', 'invisalign', 'zaehne begradigen'],
    reply: { text: 'Für gerade Zähne beraten wir Sie gerne und besprechen die passende Lösung. Bei kieferorthopädischen Behandlungen arbeiten wir bei Bedarf mit Spezialistinnen und Spezialisten zusammen.', actions: BOOK },
  },
  {
    keys: ['wackelt', 'locker', 'lockerer zahn', 'zahn wackelt', 'beweglich'],
    reply: { text: 'Ein lockerer Zahn beim Erwachsenen sollte immer abgeklärt werden. Oft steckt eine Entzündung des Zahnhalteapparats dahinter. Je früher wir handeln, desto besser lässt sich der Zahn meist erhalten. Sollen wir einen Termin vereinbaren?', actions: BOOK },
  },
  {
    keys: ['schwanger', 'schwangerschaft'],
    reply: { text: 'In der Schwangerschaft ist das Zahnfleisch oft empfindlicher und neigt zu Entzündungen. Zahnpflege und Kontrollen sind gerade jetzt wichtig und gut möglich. Sagen Sie uns einfach Bescheid, dann gehen wir besonders behutsam vor.', actions: BOOK },
  },
  {
    keys: ['ausgeschlagen', 'abgebrochen', 'unfall', 'zahn raus', 'herausgeschlagen', 'zahn abgebrochen'],
    reply: { text: 'Bei einem Zahnunfall zählt jede Minute: Einen ausgeschlagenen Zahn nur an der Krone anfassen, in einer Zahnrettungsbox oder H-Milch aufbewahren (nicht trocknen lassen) und sofort zu uns kommen bzw. anrufen.', actions: [{ label: 'Jetzt anrufen', href: `tel:${CLINIC.phoneHref}` }] },
  },
  {
    keys: ['knirsch', 'pressen', 'schiene', 'bruxismus', 'kiefer', 'zaehne knirschen'],
    reply: { text: 'Zähneknirschen (Bruxismus) kann Zähne, Kiefer und Muskulatur belasten. Eine individuell angefertigte Knirscherschiene schützt die Zähne nachts wirksam. Gerne schauen wir uns das an.', actions: BOOK },
  },
  {
    keys: ['kind', 'kinder', 'baby', 'milchzahn', 'milchzaehne', 'kinderzahn'],
    reply: { text: 'Kinder sind bei uns herzlich willkommen. Wir führen die Kleinen spielerisch und ohne Druck an den Zahnarztbesuch heran, für eine entspannte Beziehung zur Zahngesundheit von Anfang an.', actions: BOOK },
  },
];

const FALLBACK: BotReply = {
  text: `Das kann ich Ihnen pauschal nicht mit Sicherheit beantworten. Dafür berät Sie Dr. Makoie gerne persönlich. Sie können mich aber alles rund um Zähne, Behandlungen, Öffnungszeiten oder Kosten fragen. Möchten Sie einen Termin vereinbaren oder uns anrufen (${CLINIC.phoneDisplay})?`,
  actions: BOOK,
};

/** Best-effort local answer from the knowledge base. */
export function getLocalReply(input: string): BotReply {
  const text = ' ' + normalize(input) + ' ';
  let best: Entry | null = null;
  let bestScore = 0;
  for (const entry of ENTRIES) {
    let score = 0;
    for (const k of entry.keys) if (text.includes(normalize(k))) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best && bestScore > 0 ? best.reply : FALLBACK;
}

export const SUGGESTIONS = [
  'Öffnungszeiten?',
  'Ich habe Angst vorm Zahnarzt',
  'Was hilft bei Zahnschmerzen?',
  'Was kostet ein Bleaching?',
];

export const GREETING: BotReply = {
  text: 'Grüezi! 👋 Ich bin der digitale Assistent von Dental Wellness. Fragen Sie mich gern zu Behandlungen, Terminen, Kosten oder ganz allgemein rund um Ihre Zähne.',
};
