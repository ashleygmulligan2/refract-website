// ---------- Refract Ventures · Brand Kit ----------
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
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { return false; }
    document.body.removeChild(ta);
    return true;
  }
}

// ---------- Icon click-to-copy (inline SVGs) ----------
document.querySelectorAll(".icon-tile").forEach((tile) => {
  tile.addEventListener("click", async (e) => {
    if (e.target.closest('[data-act="download"]')) return; // let download links work
    e.preventDefault();
    const name = tile.dataset.name || "icon";
    const svg = tile.querySelector("svg");
    if (!svg) return;
    // Add xmlns for standalone SVG, format cleanly
    const clone = svg.cloneNode(true);
    if (!clone.getAttribute("xmlns")) clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    if (!clone.getAttribute("width")) clone.setAttribute("width", "24");
    if (!clone.getAttribute("height")) clone.setAttribute("height", "24");
    const out = clone.outerHTML;
    const ok = await copyText(out);
    if (ok) {
      tile.classList.add("copied");
      setTimeout(() => tile.classList.remove("copied"), 900);
      showToast(`${name}.svg copied`);
    }
  });
});

// ---------- Swatch click-to-copy hex ----------
document.querySelectorAll(".swatch").forEach((sw) => {
  sw.addEventListener("click", async () => {
    const hex = sw.dataset.hex;
    if (!hex) return;
    const ok = await copyText(hex);
    if (ok) showToast(`${hex} copied`);
  });
});

// ---------- Copy-line click-to-copy (What to Say) ----------
document.querySelectorAll(".copy-line").forEach((line) => {
  line.addEventListener("click", async () => {
    const text = line.dataset.copy || line.textContent.trim();
    const ok = await copyText(text);
    if (ok) {
      line.classList.add("copied");
      setTimeout(() => line.classList.remove("copied"), 1100);
      showToast("Line copied");
    }
  });
});

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---------- Active nav link via scroll spy ----------
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach((s) => spy.observe(s));

// ---------- Current year ----------
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
