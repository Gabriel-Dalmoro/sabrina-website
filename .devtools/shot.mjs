/**
 * Screenshot helper for design review.
 *
 * Uses the system Chrome rather than a Playwright-managed build, and a real
 * mobile viewport — Chrome's `--headless --window-size` CLI mode ignores
 * `width=device-width` and produces misleading mobile captures.
 *
 *   node .devtools/shot.mjs <outDir> [routes...]
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE ?? 'http://localhost:4321';

const outDir = process.argv[2];
const routes = process.argv.slice(3);
if (!outDir || routes.length === 0) {
  console.error('usage: node .devtools/shot.mjs <outDir> <route> [route...]');
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, scale: 1 },
  { name: 'mobile', width: 390, height: 844, scale: 2 },
];

const browser = await chromium.launch({ executablePath: CHROME });

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.scale,
  });

  for (const route of routes) {
    await page.goto(BASE + route, { waitUntil: 'networkidle' });

    // Scroll the page so lazy images and scroll-reveals have all fired.
    await page.evaluate(async () => {
      const step = window.innerHeight;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 90));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 350));
    });

    const overflow = await page.evaluate(() => {
      const d = document.documentElement;
      return d.scrollWidth > d.clientWidth ? d.scrollWidth - d.clientWidth : 0;
    });

    const slug = route === '/' ? 'home' : route.replace(/\//g, '');
    const file = `${outDir}/${slug}-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`${file}${overflow ? `  ⚠ overflows by ${overflow}px` : ''}`);
  }

  await page.close();
}

await browser.close();
