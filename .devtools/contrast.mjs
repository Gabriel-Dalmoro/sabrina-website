/**
 * Contrast audit across every route.
 *
 * Walks all rendered text nodes, resolves each one's effective background by
 * climbing ancestors until an opaque colour is found, and reports anything
 * under the WCAG AA threshold for its size. Text sitting over a photograph is
 * skipped and listed separately — its contrast can't be judged from CSS alone.
 */
import { chromium } from 'playwright';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE ?? 'http://localhost:4321';
const ROUTES = process.argv.slice(2);

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

let failures = 0;

for (const route of ROUTES) {
  await page.goto(BASE + route, { waitUntil: 'networkidle' });

  const results = await page.evaluate(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
      return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
    };
    const lin = (v) => {
      v /= 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const lum = ({ r, g, b }) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const ratio = (a, b) => {
      const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
      return (x + 0.05) / (y + 0.05);
    };
    const over = (fg, bg) => ({
      r: fg.r * fg.a + bg.r * (1 - fg.a),
      g: fg.g * fg.a + bg.g * (1 - fg.a),
      b: fg.b * fg.a + bg.b * (1 - fg.a),
      a: 1,
    });

    const out = [];
    for (const el of document.querySelectorAll('*')) {
      const text = Array.from(el.childNodes)
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join(' ')
        .trim();
      if (!text) continue;

      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || cs.opacity === '0') continue;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) continue;

      // Resolve the effective background, and note if a photo is involved.
      let bg = null;
      let overImage = false;
      for (let n = el; n; n = n.parentElement) {
        const s = getComputedStyle(n);
        if (s.backgroundImage && s.backgroundImage !== 'none') overImage = true;
        if (n.querySelector && n.querySelector(':scope > img')) overImage = true;
        const c = parse(s.backgroundColor);
        if (c && c.a === 1) {
          bg = c;
          break;
        }
        if (c && c.a > 0) bg = bg ? over(c, bg) : c;
      }
      if (!bg) bg = { r: 255, g: 255, b: 255, a: 1 };

      let fg = parse(cs.color);
      if (!fg) continue;
      if (fg.a < 1) fg = over(fg, bg);

      const px = parseFloat(cs.fontSize);
      const bold = parseInt(cs.fontWeight, 10) >= 700;
      const large = px >= 24 || (bold && px >= 18.66);
      const need = large ? 3 : 4.5;
      const r = ratio(fg, bg);

      if (r < need) {
        out.push({
          text: text.slice(0, 58),
          ratio: Math.round(r * 100) / 100,
          need,
          px: Math.round(px),
          overImage,
          cls: (el.getAttribute('class') || '').slice(0, 44),
        });
      }
    }
    return out;
  });

  const real = results.filter((r) => !r.overImage);
  const onPhoto = results.filter((r) => r.overImage);

  console.log(`\n${route}`);
  if (real.length === 0) {
    console.log('  ✓ all CSS-resolvable text passes AA');
  } else {
    for (const r of real) {
      failures++;
      console.log(`  ✗ ${r.ratio}:1 (needs ${r.need}) ${r.px}px — "${r.text}"  [${r.cls}]`);
    }
  }
  if (onPhoto.length) {
    console.log(`  · ${onPhoto.length} node(s) over imagery — check by eye`);
  }
}

await browser.close();
console.log(`\n${failures === 0 ? 'PASS' : `FAIL — ${failures} issue(s)`}`);
process.exit(failures === 0 ? 0 : 1);
