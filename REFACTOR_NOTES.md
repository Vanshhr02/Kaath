# Kaath React/TypeScript refactor

## What changed

- Matched the supplied static HTML design tokens and section order more closely.
- Replaced fallback typography with Big Shoulders Display, Newsreader, and IBM Plex Mono.
- Centralized colors, font families, font sizes, and layout tokens in `src/theme.ts`.
- Kept styling Tailwind-first; `src/index.css` now only imports Tailwind.
- Added Motion (`motion/react`) for hero entrance, viewport reveals, accordion transitions, and subtle card/product interactions.
- Rebuilt The Register as an accessible animated accordion with the piece details from the reference.
- Added the missing `Available now` feature section.
- Corrected section anchors/navigation to `#register`, `#method`, `#available`, and `#commission`.
- Added `public/sitemap.xml` and `public/robots.txt`.
- Added SEO title and description metadata in `index.html`.
- Motion honors the user's reduced-motion preference.

## Install / run

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run lint
```

`motion` was added to `package.json`. Running `npm install` will refresh `package-lock.json` with the Motion dependency on a networked development machine.
