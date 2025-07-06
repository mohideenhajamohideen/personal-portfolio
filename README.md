# Personal Portfolio

This project is a lightweight personal portfolio redesigned with a minimalist style. The site uses **TailwindCSS** for styling and a small **Express** server to track total visits.

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
- TailwindCSS via CDN
- Express with LowDB for storage
- AOS for scroll animations
