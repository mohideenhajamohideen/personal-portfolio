# Technology Stack

## Frontend
- **HTML5** with semantic markup
- **TailwindCSS** via CDN for styling and responsive design
- **Vanilla JavaScript** for interactivity and DOM manipulation
- **Inter font** from Google Fonts for typography
- **AOS (Animate On Scroll)** for scroll animations

## Backend
- **Node.js** runtime
- **Express.js** web framework
- **LowDB** for lightweight JSON-based data persistence
- **CORS** middleware for cross-origin requests

## Deployment Platforms
- **Netlify** - Static site hosting with serverless functions
- **Vercel** - Alternative deployment with API routes
- Both platforms support the visitor tracking API

## Development Dependencies
```json
{
  "express": "^4.18.2",
  "lowdb": "^3.0.0",
  "cors": "^2.8.5"
}
```

## Common Commands

### Development
```bash
# Install dependencies
npm install

# Start the visitor API server
npm start
# or
node api/visitor.js

# The API runs on port 3000 by default
```

### Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
# PORT=3000
# DB_FILE=./api/db.json
```

### API Endpoints
- `GET /visits` - Returns current visitor count
- `POST /visit` - Increments and returns visitor count

## Build Process
- No build step required for frontend (uses CDN resources)
- Static files can be deployed directly to hosting platforms
- API functions are deployed as serverless functions on Netlify/Vercel