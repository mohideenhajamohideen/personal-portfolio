# Personal Portfolio — Mohideen Hajamohideen

A single-page editorial portfolio for **Mohideen Hajamohideen**, GenAI &amp; Cloud Solutions Architect at AWS Professional Services (EMEA).

**Aesthetic direction:** warm editorial minimalism — Fraunces variable serif + Instrument Sans + JetBrains Mono, terracotta on warm ink, numbered case studies, film grain, dark-default with a light paper theme. No framework; hand-written HTML/CSS/JS in one file.

**Sections:** hero · tech marquee · about &amp; impact · selected work · stack · recognition · writing &amp; OSS · contact.

## Design & interaction

| | |
|---|---|
| Hero canvas | A drifting node mesh with travelling "packets", pointer-reactive. Pauses off-screen, on tab-hide, and under `prefers-reduced-motion`. |
| Work index | Case studies read as a typographic index; on desktop the project image follows the cursor. Narrow/touch screens get the image inline instead. |
| Custom cursor | Dot + lerped ring that swells over interactive targets. Fine pointers only, and only once the pointer has actually moved. |
| Theme toggle | Cross-fades via the View Transitions API where supported, falls back to an instant swap. Choice persists in `localStorage`; dark is the default. |
| Motion | Masked line reveals on the hero, staggered scroll reveals, count-up stats, magnetic buttons — all disabled wholesale under `prefers-reduced-motion`. |

## Engineering notes

- **Single file.** `index.html` carries the markup, CSS and JS — one request, no FOUC, no build step.
- **Themes** are driven by semantic custom properties (`--bg`, `--text`, `--accent`, `--line`…) redefined under `[data-theme="light"]`. Theme is applied in a blocking head script so there is no flash.
- **Images** are pre-cropped WebP in `images/opt/` — roughly 8.5 MB of source PNG down to ~270 KB. Sources stay in `images/`. `width`/`height` are set on every `<img>` to reserve space, with `height: auto` in CSS so `aspect-ratio` still governs the box.
- **Overflow.** Bleeding decorative layers are contained with `overflow-x: clip` on `html` (falling back to `hidden`), so nothing widens the document.
- **Accessibility.** Skip link, one `h1` with an ordered heading tree, labelled inputs, `:focus-visible` rings, `aria-current` on the active nav item, an Escape-dismissible mobile menu, and a `role="status"` region for form feedback.
- **SEO.** Canonical URL, Open Graph and Twitter cards, a generated 1200×630 social card, and `Person` JSON-LD.
- **Progressive enhancement.** Reveal animations are gated behind a `.js` class on `<html>`, so the page is fully readable with JavaScript disabled.

## Integrations

- **Contact form** → Google Apps Script endpoint (with a honeypot field and client-side validation).
- **ElevenLabs Conversational AI** widget.
- **Visitor counter** → `GET /api/visitor-count`. The widget only appears if that endpoint answers; on static hosting with no function backend it stays hidden rather than showing a made-up number.

## Getting started

Any static server works:

```
python3 -m http.server 8000
```

### Visitor API (optional)

```
npm install
node api/visitor.js
```

- `GET /api/visits` — current visitor count
- `POST /api/visit` — increment and return the updated total

Copy `.env.example` to `.env` to adjust:

```
PORT=3000
DB_FILE=./api/db.json
```

## Deployment

The static site deploys to GitHub Pages from the default branch via `.github/workflows/static.yml`. `netlify.toml` and `vercel.json` map `/api/visitor-count` to the serverless function under `netlify-functions/` and `api/` respectively.

## Regenerating assets

`images/opt/` (case crops, portrait, `og-card.jpg`, favicons) is generated with `sharp` from the sources in `images/` plus `favicon.svg`. Re-run only when the source imagery changes.
