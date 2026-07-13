# Ozee — Official Website

Built with [Astro](https://astro.build) + Tailwind CSS. Every page is statically generated with its own permalink, and a sitemap is generated automatically at build time.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks + outputs static site to dist/
npm run preview   # preview the production build
```

## Replacing images

| File | Used for | Status |
| --- | --- | --- |
| `public/images/logo.png` | Header & footer wordmark | Real asset |
| `public/images/mark.png` | Favicon | Real asset |
| `public/images/og-default.jpeg` | Default social share image | Real asset |
| `public/images/press/hero-portrait.png` | Homepage hero photo | Real asset |
| `public/images/press/press-photo-1.jpeg` | About page photo | Real asset |
| `public/images/press/press-photo-2.svg` | Spare press photo (not yet used) | Placeholder |
| `public/images/releases/*.svg` | Cover art per release (filenames match each release's slug) | Placeholder |

The logo and favicon source files were supplied as large square canvases with a lot of transparent padding around the actual mark, so they were auto-cropped to their visible content (`logo.png` to 1600×448, `mark.png` to a tight 512×512) before being wired in — otherwise the wordmark would have rendered tiny inside the header's fixed height.

To replace any remaining placeholder, upload the new file into the same folder (any name/format works — `.jpg`/`.png`/`.webp`) and update the one reference to it: the `src` in `src/pages/index.astro` / `src/pages/about.astro`, or the `cover` field in the relevant `src/content/releases/*.json` file.

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
