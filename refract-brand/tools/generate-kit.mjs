#!/usr/bin/env node
// ============================================================
// Refract · Brand Kit generator
// ------------------------------------------------------------
// One brand.config.json  ->  a full, downloadable brand kit:
//   logos (recolored mark), color tokens + swatch sheet,
//   social SVG templates, and a copy/captions library.
//
// Usage:
//   node tools/generate-kit.mjs [config.json] [--out dir]
//
// Defaults: config = ./brand.config.json, out = ./dist/<slug>
// No dependencies — plain Node (>=16). Produces editable SVG/MD/TXT.
//
// This is the same system the static refract-brand kit is built
// from; point it at a client's config to stamp out their kit.
// (For the *editable Canva* add-on, feed this same config into
//  Canva's Autofill API — see tools/README.md.)
// ============================================================

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------- args ----------
const argv = process.argv.slice(2);
const outFlag = argv.indexOf("--out");
const outOverride = outFlag !== -1 ? argv[outFlag + 1] : null;
const configPath = resolve(
  argv.find((a, i) => !a.startsWith("--") && (i === 0 || argv[i - 1] !== "--out")) ||
    join(__dirname, "..", "brand.config.json")
);

// ---------- load + lightly validate config ----------
let cfg;
try {
  cfg = JSON.parse(readFileSync(configPath, "utf8"));
} catch (e) {
  console.error(`✗ Could not read config at ${configPath}\n  ${e.message}`);
  process.exit(1);
}

const errors = [];
if (!cfg.slug) errors.push("missing `slug`");
if (!cfg.brand?.name) errors.push("missing `brand.name`");
if (!Array.isArray(cfg.colors?.accents) || cfg.colors.accents.length !== 4)
  errors.push("`colors.accents` must be an array of exactly 4 entries (the mark's polygons)");
if (errors.length) {
  console.error("✗ Invalid config:\n  - " + errors.join("\n  - "));
  process.exit(1);
}

const outDir = resolve(outOverride || join(__dirname, "..", "dist", cfg.slug));
const accents = cfg.colors.accents.map((a) => a.hex);
const frame = cfg.colors.frame || "#ffffff";
const bg = cfg.colors.bg || "#111010";
const text = cfg.colors.text || "#e8e4df";
const muted = cfg.colors.muted || "#a8a39e";
const headFont = cfg.type?.headline || "Cormorant Garamond";
const bodyFont = cfg.type?.body || "Inter";

// ---------- the Refract mark, parameterized ----------
// Four polygons (accents[0..3]) refracted through a frame path.
const FRAME_PATH =
  "M316.5,106.11l-7.51,13.75-1.9,3.48-16.44-11.51,13.36-7.8,6.85-4,5.63,6.08ZM310.27,99.99l-10.49,6.12-9.43,5.51-16.23-11.63h36.16ZM301.05,146.27l-4.9-8.61,12.54-7.63.75,2.82.13.49-8.52,12.93ZM309.83,133.02l-.12-.46-.75-2.83s0,0,0,0l-1.62-6.11,9.4-17.21.42.56,6.91,9.21-14.23,16.85ZM324.74,105.23l-.61,10.47-7.18-9.58,8.05-5.37-.26,4.47s0,0,0,0ZM325.1,104.93l.25-4.32,6.1.48-6.36,3.84Z";

function markInner() {
  return `<polygon fill="${accents[0]}" points="302.9 123.59 269.34 99.81 280.14 118.1 303.43 125.55 302.9 123.59"/>
<polygon fill="${accents[1]}" points="303.43 125.55 280.14 118.1 285.31 126.84 303.84 127.11 303.43 125.55"/>
<polygon fill="${accents[2]}" points="304.54 129.76 304.16 128.34 288.8 132.76 291.67 137.6 301.26 131.8 304.54 129.76"/>
<polygon fill="${accents[3]}" points="303.84 127.11 285.31 126.84 288.8 132.76 304.17 128.37 303.84 127.11"/>
<path fill="${frame}" d="${FRAME_PATH}"/>`;
}

// nested <svg> placing the mark at x,y with given width (keeps aspect)
function markEl(x, y, w) {
  const h = +(w * (56 / 72)).toFixed(1);
  return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="264 95 72 56">\n${markInner()}\n</svg>`;
}

// standalone mark.svg
function markStandalone() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- ${cfg.brand.name} · primary mark -->
<svg xmlns="http://www.w3.org/2000/svg" width="144" height="112" viewBox="264 95 72 56">
${markInner()}
</svg>
`;
}

// ---------- color outputs ----------
function colorsTxt() {
  const pad = (s, n) => String(s).padEnd(n);
  const row = (c) => `${pad(c.name, 16)}${pad(c.hex.toUpperCase(), 11)}${c.role || ""}`;
  return `${cfg.brand.name} — Color tokens
${"=".repeat(32)}

NEUTRALS
${pad("NAME", 16)}${pad("HEX", 11)}ROLE
${(cfg.colors.neutrals || []).map(row).join("\n")}

ACCENTS (the mark's polygons)
${pad("NAME", 16)}${pad("HEX", 11)}ROLE
${cfg.colors.accents.map(row).join("\n")}
`;
}

function swatchSheet() {
  const all = [...(cfg.colors.neutrals || []), ...cfg.colors.accents];
  const cols = 4;
  const cw = 280;
  const ch = 150;
  const rows = Math.ceil(all.length / cols);
  const W = cols * cw;
  const H = rows * ch + 40;
  const cells = all
    .map((c, i) => {
      const x = (i % cols) * cw;
      const y = Math.floor(i / cols) * ch;
      const dark = isDark(c.hex);
      const fg = dark ? "#e8e4df" : "#111010";
      return `<g transform="translate(${x},${y})">
  <rect width="${cw}" height="${ch}" fill="${c.hex}"/>
  <text x="20" y="${ch - 44}" font-family="'${bodyFont}', sans-serif" font-weight="600" font-size="20" fill="${fg}">${c.name}</text>
  <text x="20" y="${ch - 20}" font-family="'${bodyFont}', sans-serif" font-size="16" fill="${fg}" opacity="0.75">${c.hex.toUpperCase()}</text>
</g>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- ${cfg.brand.name} · color swatch sheet -->
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="${bg}"/>
${cells}
</svg>
`;
}

function isDark(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  // relative luminance
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.55;
}

// ---------- social templates ----------
function accentRule(x, y, w = 44, h = 6, gap = 8) {
  return accents
    .map((c, i) => `<rect x="${x + i * (w + gap)}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`)
    .join("\n  ");
}

function postQuote() {
  const q = cfg.social?.quote || {};
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- ${cfg.brand.name} · social · quote post · 1080×1080 (edit the two headline lines + footer) -->
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
  <rect width="1080" height="1080" fill="${bg}"/>
  <rect x="48" y="48" width="984" height="984" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="1.5"/>
  ${markEl(96, 96, 116)}
  <text x="96" y="560" font-family="'${headFont}', Georgia, serif" font-style="italic" font-weight="500" font-size="118" fill="${text}">${esc(q.line1 || cfg.brand.tagline || "")}</text>
  <text x="96" y="688" font-family="'${headFont}', Georgia, serif" font-style="italic" font-weight="500" font-size="118" fill="${text}">${esc(q.line2 || "")}</text>
  ${accentRule(96, 760)}
  <text x="96" y="952" font-family="'${bodyFont}', sans-serif" font-weight="500" font-size="28" letter-spacing="3" fill="${muted}">${esc(q.footer || cfg.brand.name.toUpperCase())}</text>
</svg>
`;
}

function story() {
  const s = cfg.social?.story || {};
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- ${cfg.brand.name} · social · story/reel cover · 1080×1920 (edit headline + handle) -->
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
  <rect width="1080" height="1920" fill="${bg}"/>
  ${markEl(96, 320, 128)}
  <text x="96" y="940" font-family="'${headFont}', Georgia, serif" font-weight="500" font-size="132" fill="${text}">${esc(s.line1 || cfg.brand.name)}</text>
  <text x="96" y="1080" font-family="'${headFont}', Georgia, serif" font-style="italic" font-weight="500" font-size="132" fill="${text}">${esc(s.line2 || "")}</text>
  ${accentRule(96, 1160, 48, 7)}
  <text x="96" y="1660" font-family="'${bodyFont}', sans-serif" font-weight="500" font-size="34" letter-spacing="3" fill="${muted}">${esc(s.handle || cfg.brand.url || "")}</text>
</svg>
`;
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---------- copy library ----------
function copyMd() {
  const groups = cfg.copy || {};
  const body = Object.entries(groups)
    .map(([title, lines]) => `## ${title}\n\n${lines.map((l) => `- ${l}`).join("\n")}`)
    .join("\n\n");
  return `# ${cfg.brand.name} — What to say

Ready-to-use lines in the brand voice. Starting points, not scripts.

${body}
`;
}

// ---------- write everything ----------
function w(rel, content) {
  const p = join(outDir, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, content);
  return rel;
}

const written = [];
written.push(w("logos/mark.svg", markStandalone()));
written.push(w("colors.txt", colorsTxt()));
written.push(w("colors/swatches.svg", swatchSheet()));
written.push(w("social/post-quote.svg", postQuote()));
written.push(w("social/story.svg", story()));
written.push(w("copy.md", copyMd()));
written.push(
  w(
    "manifest.json",
    JSON.stringify(
      { brand: cfg.brand.name, slug: cfg.slug, files: written, source: configPath },
      null,
      2
    )
  )
);
written.push(
  w(
    "README.txt",
    `${cfg.brand.name} — Brand kit
Generated from ${configPath}

Contents:
${written.map((f) => "  " + f).join("\n")}

Type: ${headFont} (headline), ${bodyFont} (body).
Tagline: ${cfg.brand.tagline || "—"}
Questions: ${cfg.brand.contact || cfg.brand.url || ""}
`
  )
);

console.log(`✓ ${cfg.brand.name} kit written to ${outDir}`);
for (const f of written) console.log(`  · ${f}`);
