// ---------- Icon registry ----------
const ICONS = [
  "spark","prism","bolt","arrow-right","arrow-up-right","palette",
  "type","layers","frame","compass","globe","code",
  "card","mail","check","play","eye","target","grid","download","copy"
];

const grid = document.getElementById("icon-grid");
const toast = document.getElementById("toast");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { return false; }
    document.body.removeChild(ta);
    return true;
  }
}

async function loadIcon(name) {
  const res = await fetch(`assets/icons/${name}.svg`);
  return await res.text();
}

async function buildIconGrid() {
  if (!grid) return;
  for (const name of ICONS) {
    const tile = document.createElement("button");
    tile.className = "icon-tile";
    tile.setAttribute("type", "button");
    tile.setAttribute("aria-label", `${name} icon`);
    tile.dataset.name = name;

    const svg = await loadIcon(name);
    tile.innerHTML = `
      ${svg}
      <span class="icon-name">${name}</span>
      <span class="icon-actions">
        <span class="icon-btn" data-action="copy">Copy SVG</span>
        <a class="icon-btn" data-action="download" href="assets/icons/${name}.svg" download>Download</a>
      </span>
    `;
    grid.appendChild(tile);

    tile.addEventListener("click", async (e) => {
      // Don't intercept the download link
      if (e.target.closest('[data-action="download"]')) return;
      e.preventDefault();
      const ok = await copyText(svg.trim());
      if (ok) {
        tile.classList.add("copied");
        setTimeout(() => tile.classList.remove("copied"), 900);
        showToast(`${name}.svg copied`);
      }
    });
  }
}

buildIconGrid();

// ---------- Color swatches: click to copy hex ----------
document.querySelectorAll(".swatch").forEach((sw) => {
  sw.addEventListener("click", async () => {
    const hex = sw.dataset.hex;
    if (!hex) return;
    const ok = await copyText(hex);
    if (ok) showToast(`${hex} copied`);
  });
});
