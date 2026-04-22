# Personal Portfolio — Mohideen Hajamohideen

An editorial, world-class single-page portfolio for **Mohideen Hajamohideen**, GenAI &amp; Cloud Solutions Architect at AWS Professional Services (EMEA).

Aesthetic direction: warm editorial minimalism — Fraunces variable serif + Instrument Sans + JetBrains Mono, terracotta accent on deep warm-black ink, numbered case studies, subtle grain overlay, dark-default with light toggle. No framework dependency; hand-written CSS with CSS variables for theming.

Sections: hero · about &amp; impact · tech marquee · selected work (6 case studies from real customer engagements) · stack · recognition · contact.

Integrations preserved from the previous build: Google Sheets contact form, visitor counter, ElevenLabs Conversational AI widget.

## Getting Started

### Install Dependencies
```
npm install
```

### Start the Visitor API
```
node api/visitor.js
```
The API exposes two endpoints:
- `GET /api/visits` – returns the current visitor count
- `POST /api/visit` – increments the count and returns the updated total

### Environment Variables
Copy `.env.example` to `.env` and adjust if needed.

```
PORT=3000
DB_FILE=./api/db.json
```

## Deployment
The static files can be deployed to services like Netlify or Vercel. The visitor API can be hosted separately on services such as Render or Heroku.

## Technology
- Hand-written HTML &amp; CSS (no framework); CSS variables for light/dark theming
- Google Fonts: Fraunces, Instrument Sans, JetBrains Mono
- IntersectionObserver for scroll reveals
- Express with LowDB for the visitor counter API
- ElevenLabs Conversational AI widget
