# Tourism Explorer

hyperDart component that answers "things to do in X" at a glance.

## Idea
Shows the top sights first (places with a Wikipedia article rank higher), lets you filter
by category, and groups nearby places into a morning / afternoon / evening plan.

## Features
- Natural-language category detection ("museums in Delhi" → Museums only)
- Weather verdict for today and the next 2 days
- Dependency-free SVG map with distance rings, works in the narrow sidebar
- Day plan: nearest-neighbour route from the city centre
- Loading, empty and error states; "search wider" fallback

## Data sources
Geoapify Places API (via backend), Wikipedia REST (descriptions), Open-Meteo (weather)

## Design decisions
- API key lives only in the Cloudflare Worker backend (`src/backend`), never in frontend code
- Restaurants / hotels / shops are filtered out server-side
- SVG map instead of a map library, to keep the bundle small and sidebar-friendly

## Run locally
1. `cd src/backend && npm install`, then add `GEOAPIFY_KEY` to `src/backend/.dev.vars`
2. `npm start` in `src/backend` (port 3001)
3. `npm start` in the project root

## AI tools used
[Be specific: what the AI generated, and what you wrote or changed yourself]