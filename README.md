# Dental Wellness Olten – Website

Moderne, mobile-first One-Page-Website für die **Dental Wellness AG** (Zahnarztpraxis
Dr. med. dent. Nadja V. Makoie) an der Konradstrasse 34, 4600 Olten.

Umgesetzt mit **React + TypeScript + Vite + Tailwind CSS**. Schwarz-weisses,
kartenbasiertes Design mit „Masked-Cards"-Mosaik, Splash-Screen, sanften
Reveal-Animationen, Google-Bewertungen und klaren Call-to-Actions.

## Schnellstart

```bash
npm install
npm run dev        # Entwicklungsserver (http://localhost:5173)
npm run build      # Produktions-Build nach dist/
npm run preview    # gebautes dist/ lokal testen
npm run typecheck  # TypeScript-Prüfung
```

## Projektstruktur

```
index.html                 SEO-Meta-Tags, Fonts, JSON-LD (Schema.org „Dentist")
src/
  main.tsx / index.css     Einstieg + Tailwind
  App.tsx                  Seitenaufbau (Splash + Navbar + 5 Sektionen)
  data.ts                  ALLE Inhalte: Praxisdaten, Leistungen, Bilder, Bewertungen
  lib/hooks.ts             useMaskPositions / useImageWidth / useIsMobile /
                           useStaggeredReveal / mergeRefs
  components/
    SplashScreen.tsx       Zähler 0–100, danach Ausblenden
    Navbar.tsx             Fixe Navigation + Slide-in-Menü
    MaskedCard.tsx         Ein „Fenster" in das geteilte Sektionsbild
    HeroSection.tsx        Sektion 1 – Hero (Masked Cards)
    SmileGallerySection.tsx Sektion 2 – Ästhetik & Leistungen (Masked Cards)
    ImplantSection.tsx     Sektion 3 – Implantate & Zahnersatz
    ReviewsSection.tsx     Google-Bewertungen (Trust)
    ContactSection.tsx     Kontakt, Öffnungszeiten, Karte, Footer
```

## Inhalte pflegen

Fast alle Inhalte liegen zentral in **`src/data.ts`** – dort lassen sich Texte,
Leistungen, Öffnungszeiten und Kontaktdaten ohne React-Kenntnisse anpassen.

## ⚠️ Vor dem Go-Live unbedingt anpassen

1. **Google-Bewertungen sind Platzhalter.** Die vier Rezensionen sowie
   `GOOGLE_RATING` / `GOOGLE_REVIEW_COUNT` in `src/data.ts` sind **Beispiele**,
   die den Aufbau zeigen. Vor der Veröffentlichung durch **echte** Google-
   Rezensionen ersetzen oder das offizielle Google-Reviews-Widget einbinden.
   Beispielbewertungen als echte auszugeben wäre irreführend.
2. **Google-Links präzisieren.** `reviewsUrl` / `writeReviewUrl` / `mapsUrl`
   zeigen aktuell auf eine Google-Maps-Suche. Sobald die Praxis eine feste
   **Place-ID** hat, dort die exakten Deep-Links hinterlegen
   (`https://search.google.com/local/writereview?placeid=…`).
3. **Impressum & Datenschutz** ergänzen (in der Schweiz rechtlich erforderlich).
4. Telefon/E-Mail/Adresse in `src/data.ts` gegenprüfen.

## Bilder

Alle Bilder wurden eigens mit **Higgsfield (Recraft V4.1, 2K)** für diese Praxis
generiert und werden über den Higgsfield-Bild-CDN (`images.higgs.ai`) bereits als
optimiertes **WebP** (Resize + CDN) ausgeliefert – siehe `src/data.ts`.

Sollen die Bilder vollständig selbst gehostet werden, die folgenden Originale
(PNG, 2K) herunterladen, als WebP nach `public/images/` ablegen und die URLs in
`src/data.ts` auf lokale Pfade umstellen:

| Verwendung            | Original-URL |
|-----------------------|--------------|
| Hero                  | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180819_7f944efd-9e12-4b3c-bc42-ad5b7c5131d5.png` |
| Smile-Gallery         | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180847_97161e86-849d-432f-8f38-8de1f52bebe1.png` |
| Patientin (Sektion 3) | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180850_2a3d5a1e-d3df-48d3-973c-974b5b3ae0d3.png` |
| Behandlung (Detail)   | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180853_3b8a3597-048b-48c3-8366-df050fbdfcd9.png` |
| Implantat (Detail)    | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180855_ab0b6fd0-4baf-439b-b9a4-a532076895dd.png` |

## SEO

- Deutschsprachige `<title>` / Meta-Description / Keywords, Open Graph & Twitter Cards
- `lang="de"`, Canonical, Geo-Tags (Olten / Kanton Solothurn)
- **Strukturierte Daten** (JSON-LD `Dentist`): Adresse, Telefon, Öffnungszeiten,
  Leistungen, Geo-Koordinaten – für lokale Suche & Rich Results
- Semantische Überschriften (`h1`–`h4`), Alt-Texte, `loading="lazy"`

## Deployment

Statische Site – der Ordner `dist/` kann auf jedem Static-Host laufen
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, klassisches Webhosting).

```bash
npm run build   # erzeugt dist/
```

## Barrierefreiheit & Performance

- Mobile-first, ein einziger `md:`-Breakpoint (768px), **kein horizontales Scrollen**
- Bilder als WebP, `loading="lazy"`, Gesamt-Bundle ~54 KB JS (gzip)
- Reduzierte Farbpalette (Schwarz/Weiss) mit hohem Kontrast
