# whynord.net

The whynord portfolio site. Plain HTML and CSS: no build step, no dependencies.

- `index.html`: the homepage
- `about.html`: About / CV, served at /about (prints as a clean CV)
- `site.js`: theme switch and the Save CV as PDF button
- `styles.css`: all styles; colours, type and spacing from the whynord design system
- `404.html`: not-found page
- `assets/`: logo marks, work images and self-hosted fonts (Bitcount Grid Single, Inclusive Sans, Noto Sans Thai; SIL Open Font License)

Two themes: lime (default) and night, switched from the header and remembered per visitor.

## Deploying (Cloudflare)

Connect this repo to Cloudflare Pages with no build command and `/` as the output directory. Every push to `main` goes live.
