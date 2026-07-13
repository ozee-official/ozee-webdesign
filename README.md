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

Release cover art is already rendered as the **full background of each release tile** (`src/components/ReleaseCard.astro`), with a dark gradient overlay so the title/label text on top stays readable. Once you drop a real cover into `cover` on a release's JSON file, it's automatically used as that tile's background everywhere (home, `/releases/`, and the "More Releases" section on each release page) — no other changes needed.

## Add or edit a release

Each release is a JSON file in `src/content/releases/`. Add a new file there and a page is automatically generated at `/releases/<slug>/` — no extra routing needed.

## Brand colors

The brand yellow (`#f3ef3d` / `#f5ef7a`) is defined once in `src/styles/global.css` as `--color-brand` / `--color-brand-soft`, and used via the `.btn-primary` component class (primary buttons), nav active state, hero glow accents, timeline dots, and link hover states. Each release also has its own `accent` color in its JSON file (used for its type badge) — currently a complementary palette (blue, pink, violet, gold, sunset orange, brand yellow) built around the brand color; adjust freely per release.

## Set the production domain

`astro.config.mjs` has a `SITE_URL` placeholder (`https://ozeemusic.com`). Update it once the real domain is known — it drives canonical URLs, Open Graph tags, and the sitemap.

## SEO

- Per-page `<title>`/meta description, canonical URL, Open Graph & Twitter cards (`src/layouts/Layout.astro`)
- `MusicGroup` / `MusicRecording` / `ItemList` JSON-LD structured data
- `sitemap-index.xml` generated automatically by `@astrojs/sitemap`
- `public/robots.txt` points to the sitemap
