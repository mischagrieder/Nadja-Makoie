# Dental Wellness Olten – Website

Elegante, warme One-Page-Website für die **Dental Wellness AG** (Zahnarztpraxis
Dr. med. dent. Nadja V. Makoie), Konradstrasse 34, 4600 Olten.

Design-Referenz (Layout & Anmutung): **klinik-schwarzwald.com** – die Bildsprache
einer Premium-Ästhetik-Klinik: ruhig, hochwertig, mit Serifen-Display-Schrift,
warmer Naturpalette und Fokus auf Vertrauen, Ärztin und Bewertungen.

Umgesetzt mit **React + TypeScript + Vite + Tailwind CSS**.

## Schnellstart

```bash
npm install
npm run dev        # Entwicklungsserver (http://localhost:5173)
npm run build      # Produktions-Build nach dist/
npm run preview    # gebautes dist/ lokal testen
npm run typecheck  # TypeScript-Prüfung
```

## Design-System

- **Schrift:** *Cormorant Garamond* (elegante Serifen-Überschriften) + *Jost*
  (klare Sans-Serif für Fliesstext) – via Google Fonts.
- **Farben (Tailwind-Theme):** `ivory`/`cream` (warmes Weiss), `sand`, `forest`
  (tiefes Waldgrün), `bronze` (Akzent), `ink` (Text).
- **Sektionen (von oben):** Hero → Kennzahlen → Behandlungen → Praxis/Dr. Makoie
  → Warum Dental Wellness → Bewertungen → Kontakt → Footer.
- Sanfte Scroll-Einblendungen (`Reveal`), fixe Navigation (transparent über dem
  Hero, wird beim Scrollen hell), elegantes Mobile-Menü.

## Projektstruktur

```
index.html                 SEO-Meta, Fonts, JSON-LD (Schema.org „Dentist")
src/
  main.tsx / index.css     Einstieg + Tailwind + Basistypografie
  App.tsx                  Seitenaufbau
  data.ts                  ALLE Inhalte: Praxisdaten, Leistungen, Stats, Bilder, Bewertungen
  lib/hooks.ts             useScrolled / useIsMobile
  components/
    Navbar.tsx  Hero.tsx  StatsBar.tsx  Services.tsx  About.tsx
    WhyUs.tsx   Reviews.tsx  Contact.tsx  Footer.tsx
    Reveal.tsx  Icon.tsx
```

Fast alle Inhalte liegen zentral in **`src/data.ts`** und lassen sich dort ohne
React-Kenntnisse anpassen.

## ⚠️ Vor dem Go-Live unbedingt anpassen

1. **Kennzahlen** in `src/data.ts` (`stats`) sind **Platzhalter** (z. B. „20+ Jahre",
   „10 000+ Behandlungen"). Durch echte, belegbare Werte ersetzen – oder qualitative
   Aussagen belassen.
2. **Google-Bewertungen** (`reviews`, `GOOGLE_RATING`, `GOOGLE_REVIEW_COUNT`) sind
   **Beispiele**, die den Aufbau zeigen. Vor der Veröffentlichung durch echte
   Google-Rezensionen ersetzen oder das offizielle Google-Widget einbinden.
3. **Google-Links** (`reviewsUrl`/`writeReviewUrl`/`mapsUrl`) zeigen auf eine
   Google-Maps-Suche. Mit fester **Place-ID** die exakten Deep-Links hinterlegen.
4. **Impressum & Datenschutz** ergänzen (in der Schweiz erforderlich).
5. Kontaktdaten in `src/data.ts` gegenprüfen.

## Bilder

Mit **Higgsfield (Recraft V4.1, 2K)** eigens für diese Praxis generiert, warm-
elegant abgestimmt, als optimiertes WebP über den Higgsfield-CDN ausgeliefert
(siehe `src/data.ts`, Objekt `IMG`). Für vollständiges Selbst-Hosting die
Original-PNGs herunterladen, als WebP nach `public/images/` legen und die URLs
in `src/data.ts` umstellen:

| Verwendung             | Original-URL |
|------------------------|--------------|
| Hero (warm)            | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_185639_e6a58397-0dc8-472c-8c94-abb90d85045b.png` |
| Dr. Makoie (Portrait)  | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_185641_6c4cfd04-e26c-4647-ad8a-1ba8451899e9.png` |
| Behandlungszimmer      | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_185643_31857b20-24cc-4d35-8199-2b7a8a7f3055.png` |
| Lächeln                | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180847_97161e86-849d-432f-8f38-8de1f52bebe1.png` |
| Patientin              | `https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260720_180850_2a3d5a1e-d3df-48d3-973c-974b5b3ae0d3.png` |

## SEO

- Deutschsprachige Meta-Tags, Open Graph & Twitter Cards, `lang="de"`, Canonical, Geo-Tags
- **Strukturierte Daten** (JSON-LD `Dentist`): Adresse, Telefon, Öffnungszeiten, Leistungen
- Semantische Überschriften, Alt-Texte, `loading="lazy"`, WebP-Bilder

## Deployment

Statische Site – `dist/` läuft auf jedem Static-Host (Netlify, Vercel, GitHub
Pages, Cloudflare Pages, klassisches Webhosting).

## Performance & Mobile

- Mobile-first, **kein horizontales Scrollen**, sanfte Reveal-Animationen
- Bundle ~54 KB JS (gzip), ~4 KB CSS (gzip)
