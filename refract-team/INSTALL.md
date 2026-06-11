# Refract Ventures · The People

Team intro pages for refractventures.co. Drop in as `/team/`.

## Files

```
refract-team/
├── index.html       ← team overview (cards for all three)
├── jordan.html      ← Jordan Tomblin · Head of Operations
├── jacey.html       ← Jacey Tomblin · Head of Housekeeping & AI
├── cash.html        ← Cash Mulligan · Head of Safety & Maintenance
├── styles.css       ← matches refractventures.co aesthetic
├── INSTALL.md       ← this file
└── assets/
    └── logo-mark.svg
```

## Deploying

1. Copy the `refract-team/` folder to your site root and rename to `team/`
   (or whatever slug). The overview lives at `/team/`, each bio at
   `/team/jordan/`, `/team/jacey/`, `/team/cash/` — or as `.html` files
   directly.

2. Add a link in the main site nav (and maybe the footer):

   ```html
   <a href="/team/">The People</a>
   ```

3. Done. No JS framework, no build step.

## Bios — placeholder text

The bios in this version are **pretend text** to get the page shipping.
Replace each person's prose with their own words when you're ready.
Each bio is 4 short paragraphs (~180 words) and follows the RV voice —
calm, specific, plain language, no "luxury" or "experiences."

To edit a bio, open the corresponding `.html` file and find the
`<section class="bio-body">` block.

## Photos

The bio pages currently render large italic initials in a colored
portrait frame (Cardinal for Jordan, Saffron for Jacey, Sky for Cash).
When you have headshots:

1. Drop the image into `assets/` (e.g. `jordan.jpg`).
2. In each bio's `<div class="portrait">` block, replace the
   `<span class="initials">JT</span>` with:

   ```html
   <img src="assets/jordan.jpg" alt="Jordan Tomblin" style="width:100%;height:100%;object-fit:cover" />
   ```

3. Same swap in `index.html` inside each `.person-card .portrait` block.

## Fonts

Cormorant Garamond + Inter, loaded from Google Fonts. Already in use on
refractventures.co, so caching will be hot.

## Color theming per person

Each bio page has a class on `<html>` — `theme-jordan`, `theme-jacey`,
or `theme-cash` — that sets the role-label color and portrait gradient
to that person's anchor color:

- Jordan → Cardinal (#D9465F)
- Jacey  → Saffron (#FAAF40)
- Cash   → Sky (#45ABDD)

Questions: jordan@refractventures.co
