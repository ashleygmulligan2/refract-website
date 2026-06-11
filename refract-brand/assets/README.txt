Refract Ventures — Brand Kit v1.1
==================================

Pulled from the live site at refractventures.co — same hands, same light.

Contents
--------
/logos/         The mark, mono variants, wordmarks, and lockups (SVG)
/icons/         21 custom utility icons, 24x24 viewBox, 1.5px stroke (SVG)
colors.txt      Full color palette with hex, rgb, and roles
README.txt      This file

The Mark
--------
The Refract mark is an angular refracting-light glyph: four colored polygons
(Cardinal red, Saffron gold, Sky blue, Meadow green) representing white light
split through a prism — wrapped inside a white frame outline. Use the full
color version as the primary mark on dark surfaces. Use mono variants where
context demands restraint.

Fonts
-----
Cormorant Garamond  →  https://fonts.google.com/specimen/Cormorant+Garamond
Inter               →  https://fonts.google.com/specimen/Inter
JetBrains Mono (for hex codes, monospace) →  https://fonts.google.com/specimen/JetBrains+Mono

Icon usage
----------
All icons use `stroke="currentColor"` and `fill="none"`. They inherit color
from the parent element. No internal classes — drop the SVG anywhere and
it adopts the surrounding color.

Example:
  <span style="color: #D9465F">
    <!-- paste icon SVG here -->
  </span>

Logo usage — DO
---------------
- Use the full-color mark on dark surfaces (#111010 — #252423).
- Use mono-light on dark photo backgrounds or where color would compete.
- Use mono-dark on light / Bone surfaces (#E8E4DF and lighter).
- Maintain clear space: at least the cap-height of the mark on all sides.
- Smallest size: 28px wide (digital), 14mm wide (print).

Logo usage — DON'T
------------------
- Don't recolor the polygons individually — they encode the brand idea.
- Don't distort, rotate, or stretch the mark.
- Don't add drop shadows, glows, or outlines.
- Don't place on busy photo backgrounds without a scrim.

Tagline
-------
"Same hands. Different light."
Use sparingly — under the wordmark, on dedicated brand moments. Never as
filler. Set in Inter, uppercase, letterspaced ~3px, color #8A8580.

Questions?  jordan@refractventures.co
