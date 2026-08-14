# sabrinacarlier.fr

Site for Sabrina Carlier — sommelière, chroniqueuse and formatrice in Lyon.
Next.js App Router, Tailwind v4, deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run contrast   # WCAG AA audit of every page, needs the dev server running
npm run shots <outDir> <route…>   # desktop + mobile screenshots
```

## Sabrina's review widget

A tool for her, not a feature of the site: she points at any element, writes a
note, and downloads the lot as one Markdown file to email over.

It is **on** in local development and on every Vercel preview deployment, and
**off** in production unless you opt in.

| Where | How |
| --- | --- |
| Local dev | always on |
| Vercel preview | always on |
| Vercel production | only with `NEXT_PUBLIC_FEEDBACK=1` |

**To open a review round:** add `NEXT_PUBLIC_FEEDBACK` = `1` to the Vercel
project's Production environment, redeploy, send her the link.

**To close it / launch:** delete the variable and redeploy.

The switch is real, not cosmetic. `next.config.ts` aliases the widget to a stub
when the flag is off, so the tool and its notes are absent from the public
bundle rather than merely hidden — see `src/lib/flags.ts`.

## Where things live

| | |
| --- | --- |
| `src/app/globals.css` | the design system: colour tokens, the seven colourways, every component class |
| `src/content/` | Sabrina's texts, her CV, the radio episodes — prose kept out of JSX |
| `src/lib/seo.ts` | `SITE_URL` and the per-page metadata helper |
| `src/components/Wordmark.tsx` | placeholder mark, to be swapped for her new logo |
| `.devtools/` | asset generator and Playwright audits, not part of the build |

`SITE_URL` must match the domain Vercel serves **without** redirecting.
Currently `www`, with the apex 308-ing to it. If that ever flips, change the
constant in the same commit — canonical URLs, `og:image`, JSON-LD and the
sitemap all derive from it, and WhatsApp will not follow a redirect to fetch a
preview image.

## Brand assets

`favicon.ico`, `apple-icon.png` and `opengraph-image.jpg` are generated, not
hand-made, and committed to `src/app/`:

```bash
python3 .devtools/make-brand-assets.py
```
