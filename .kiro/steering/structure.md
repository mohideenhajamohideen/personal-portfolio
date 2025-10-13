# Project Structure

## Root Directory
```
├── index.html              # Main portfolio page
├── style.css              # Legacy CSS (mostly unused, TailwindCSS preferred)
├── package.json           # Node.js dependencies and scripts
├── .env.example          # Environment configuration template
├── netlify.toml          # Netlify deployment configuration
├── vercel.json           # Vercel deployment configuration
└── README.md             # Project documentation
```

## API Directory (`/api/`)
Contains backend API logic for visitor tracking:
- `visitor.js` - Main Express server for local development
- `visitor-count.js` - Serverless function for Vercel deployment
- `db.json` - JSON database file (created automatically)

## Components Directory (`/components/`)
Client-side JavaScript modules:
- `visitor-counter.js` - Frontend visitor tracking logic

## Netlify Functions (`/netlify-functions/`)
Serverless functions for Netlify deployment:
- `visitor-count.js` - Netlify-compatible visitor counter function

## Images Directory (`/images/`)
Static assets including:
- Project screenshots and portfolio images
- Avatar and branding assets
- Background images and icons
- PDF resume/portfolio documents

## Configuration Files

### Deployment Configs
- `netlify.toml` - Redirects API calls to Netlify functions
- `vercel.json` - Routes API calls to Vercel functions

### Environment
- `.env.example` - Template for environment variables
- `.env` - Local environment configuration (not in repo)

## Code Organization Principles

1. **Separation of Concerns**: API logic separate from frontend
2. **Platform Agnostic**: Supports both Netlify and Vercel deployment
3. **Static First**: Minimal server-side dependencies
4. **Component Based**: Modular JavaScript for reusability
5. **Asset Organization**: All media files centralized in `/images/`

## File Naming Conventions
- Kebab-case for files and directories
- Descriptive names that indicate purpose
- API endpoints match their function names
- Images use descriptive names with project context