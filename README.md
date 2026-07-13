# Ozee — Official Website

Built with [Astro](https://astro.build) + Tailwind CSS. Every page is statically generated with its own permalink, and a sitemap is generated automatically at build time.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks + outputs static site to dist/
npm run preview   # preview the production build
```

## Replace the placeholder images

The attached logo and photos could not be extracted into this project automatically, so every image slot below currently holds a generated placeholder graphic. Replace each file (keep the same filename, or update the reference) with the real asset:

| File | Used for |
| --- | --- |
| `public/images/logo.svg` | Header & footer wordmark |
| `public/images/mark.svg` | Favicon |
| `public/images/og-default.svg` | Default social share image |
| `public/images/press/hero-portrait.svg` | Homepage hero photo |
| `public/images/press/press-photo-1.svg` | About page photo |
| `public/images/press/press-photo-2.svg` | Spare press photo (not yet used) |
| `public/images/releases/*.svg` | Cover art per release (filenames match each release's slug) |

Photos can be `.jpg`/`.png`/`.webp` — just update the `src` in `src/pages/index.astro`, `src/pages/about.astro`, and each `src/content/releases/*.json` file's `cover` field accordingly.

## Add or edit a release

Each release is a JSON file in `src/content/releases/`. Add a new file there and a page is automatically generated at `/releases/<slug>/` — no extra routing needed.

## Set the production domain

`astro.config.mjs` has a `SITE_URL` placeholder (`https://ozeemusic.com`). Update it once the real domain is known — it drives canonical URLs, Open Graph tags, and the sitemap.

## SEO

- Per-page `<title>`/meta description, canonical URL, Open Graph & Twitter cards (`src/layouts/Layout.astro`)
- `MusicGroup` / `MusicRecording` / `ItemList` JSON-LD structured data
- `sitemap-index.xml` generated automatically by `@astrojs/sitemap`
- `public/robots.txt` points to the sitemap
