# Refract Ventures · Brand Kit page

A drop-in brand assets portal designed to live on refractventures.co
and be linked from the site footer.

## Files

```
refract-brand/
├── index.html              ← the brand kit page
├── styles.css              ← styled to match refractventures.co
├── brand.js                ← icon grid + copy-to-clipboard + scroll spy
├── refract-brand-kit.zip   ← the full downloadable kit (16 KB)
├── INSTALL.md              ← this file
└── assets/
    ├── logos/              ← 7 logo SVGs (mark, mono variants, lockups, wordmarks)
    ├── icons/              ← 21 custom utility icons
    ├── colors.txt          ← color tokens reference
    └── README.txt          ← usage notes for designers
```

## Deploying

1. Copy the entire `refract-brand/` folder into the site root and rename
   it to whatever you'd like the URL slug to be — e.g. `brand/` or
   `brand-kit/`. The page lives at `/<slug>/`.

2. Add a link in the existing site footer:

   ```html
   <a href="/brand/">Brand Kit</a>
   ```

   Place it near the existing copyright line.

3. (Optional, recommended) Set up the subdomain
   `branding.refractventures.co` as a CNAME pointing to the same site,
   so people can visit `branding.refractventures.co` directly. No
   second deploy needed — it just aliases.

## What's inside the page

- **The Mark** — primary full-color, mono-light, mono-dark, horizontal
  lockup, stacked lockup, both wordmarks. Per-asset SVG download.
- **Color** — 8 neutrals + 4 refracted-light accents. Click any swatch
  to copy hex.
- **Typography** — Cormorant Garamond + Inter, with live specimens.
- **Icons** — 21 custom SVGs at 24×24, 1.5px stroke. Click to copy
  the SVG, or save individually.
- **Holdings** — sub-brand documentation for Faye Social House,
  Little Sugar, Ozark Gothic, Kontrast (each anchored to one
  refracted-light color).
- **Voice & Tone** — do/don't rules plus tagline usage.
- **Download** — full kit as `refract-brand-kit.zip`.

## Tech notes

- Pure HTML / CSS / vanilla JS. No build step, no framework.
- Fonts load from Google Fonts (Cormorant Garamond, Inter, JetBrains
  Mono for code samples).
- SVGs use `stroke="currentColor"` so they adopt the parent's color.
- Works in any static-site host (Cloudflare Pages, Netlify, Vercel,
  S3+CloudFront, plain Nginx).

## Updating the kit

When the brand evolves:

1. Replace SVGs in `assets/logos/` or `assets/icons/`.
2. Update color tokens in `styles.css` (`:root { --c-... }`) and in
   `assets/colors.txt`.
3. Re-zip the assets folder:

   ```
   cd refract-brand
   rm refract-brand-kit.zip
   (cd assets && zip -r ../refract-brand-kit.zip logos icons colors.txt README.txt)
   ```

4. Bump the version label in the hero (`Brand kit · v1.x`).

Questions: jordan@refractventures.co
