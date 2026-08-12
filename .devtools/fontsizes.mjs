import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const tally = new Map();
for (const r of process.argv.slice(2)) {
  await p.goto('http://localhost:4321' + r, { waitUntil: 'networkidle' });
  const rows = await p.evaluate(() => {
    const o = [];
    for (const el of document.querySelectorAll('*')) {
      const t = Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('').trim();
      if (!t) continue;
      const cs = getComputedStyle(el);
      const fam = cs.fontFamily.split(',')[0].replace(/["']/g, '');
      o.push({ px: Math.round(parseFloat(cs.fontSize) * 100) / 100, fam, sample: t.slice(0, 30) });
    }
    return o;
  });
  for (const x of rows) {
    const k = `${x.fam} @ ${x.px}px`;
    if (!tally.has(k)) tally.set(k, { n: 0, s: x.sample });
    tally.get(k).n++;
  }
}
const sorted = [...tally.entries()].sort((a, b2) => a[0].localeCompare(b2[0]));
const byFam = {};
for (const [k, v] of sorted) { const f = k.split(' @ ')[0]; (byFam[f] ??= []).push([k, v]); }
for (const f of Object.keys(byFam)) {
  console.log(`\n${f}  (${byFam[f].length} distinct sizes)`);
  for (const [k, v] of byFam[f]) console.log(`   ${k.split('@ ')[1].padStart(9)}  ×${String(v.n).padStart(3)}   "${v.s}"`);
}
await b.close();
