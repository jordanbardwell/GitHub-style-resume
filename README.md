# GitHub-style résumé

An interactive, GitHub-flavored résumé for Jordan Bardwell, built with React and
deployed as a static site to a Cloudflare Worker. Switch between layout
"directions" (Refined / Classic / README / Dashboard), toggle dark mode, and
change the accent color from the in-page tweaks panel.

## Stack

- **React 18** (classic JSX runtime, no in-browser transpile)
- **Vite** — bundles the source into a single hashed JS/CSS asset
- **Cloudflare Workers** — static-assets-only deploy via Wrangler

## Develop

```bash
npm install
npm run dev        # local dev server with HMR
```

## Build & preview

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the built dist/ locally
```

## Deploy

```bash
npx wrangler login # one-time
npm run deploy     # builds, then `wrangler deploy` to Cloudflare
```

## Layout

```
index.html              prod entry (single bundled module)
vite.config.js          build config (injects React into each JSX module)
wrangler.toml           Cloudflare Worker static-assets config
src/
  main.jsx              entry: wires modules together and mounts <App>
  data.js               résumé content (window.RESUME)
  styles.css            theme + component styles
  components.jsx         shared components & icons
  tweaks-panel.jsx       in-page controls (direction / theme / accent)
  directions/            the four résumé layouts
    refined.jsx classic.jsx readme.jsx dashboard.jsx
```
