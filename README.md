# whynord.net

The whynord portfolio site. Plain HTML and CSS: no build step, no dependencies. Everything that goes live is in `public/`; `wrangler.jsonc` tells Cloudflare to publish only that folder.

- `public/index.html`: the homepage
- `public/about.html`: About / CV, served at /about (prints as a clean CV)
- `public/site.js`: theme switch and the Save CV as PDF button
- `public/styles.css`: all styles; colours, type and spacing from the whynord design system
- `public/work/*.html`: project pages (uncl, dailydose, vela, villa-ledu, cnr), served at /work/<name>
- `public/404.html`: not-found page
- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `assets/og.png`: browser icons and the link preview image
- `public/sitemap.xml`, `robots.txt`: for search engines (add new pages to the sitemap)
- `public/_headers`: Cloudflare caching and security headers
- `public/_redirects`: sends old whynord.net addresses (/works/…, /thinking, /journal/…) to the new pages
- `public/assets/`: logo marks, work images and self-hosted fonts (Bitcount Grid Single, Inclusive Sans, Noto Sans Thai; SIL Open Font License)

Two themes: lime (default) and night, switched from the header and remembered per visitor.

## Deploying (Cloudflare)

Cloudflare Workers Builds is connected to this repo and runs `npx wrangler deploy` on every push to `main`. `wrangler.jsonc` points it at `public/`.
