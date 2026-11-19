import type { Metadata } from 'next';

/**
 * Must match the domain Vercel serves without redirecting — currently www,
 * with the apex 308-ing to it.
 *
 * This is not cosmetic. When these disagree, og:image points at the
 * redirecting host, and WhatsApp will not follow a redirect to fetch a
 * preview image: it requests, gets a 308, and shows no card at all. Facebook
 * does follow it, so the Sharing Debugger reports everything as fine.
 *
 * If the primary domain is ever switched to the apex in Vercel, change this
 * line at the same time — canonical, og:url, og:image, JSON-LD and the
 * sitemap all derive from it.
 */
export const SITE_URL = 'https://www.sabrinacarlier.fr';
export const SITE_NAME = 'Sabrina Carlier';

/**
 * Per-page metadata.
 *
 * Every page gets its own canonical and its own Open Graph title/description —
 * without an explicit `openGraph.url` per route, every share of every page
 * resolves to the homepage in some crawlers' caches.
 *
 * The social image is not set here: `src/app/opengraph-image.jpg` is picked up
 * by convention and inherited by all routes, with the absolute URL resolved
 * from `metadataBase`.
 */
export function pageMetadata({
  title,
  description,
  path,
  article,
}: {
  title: string;
  description: string;
  path: string;
  /**
   * Journal posts: shared as an article, with the post's own cover as the
   * card instead of the site-wide one.
   */
  article?: { publishedTime?: string; image?: string | null };
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const images = article?.image ? [{ url: article.image }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...(article
        ? {
            type: 'article',
            publishedTime: article.publishedTime || undefined,
            authors: [SITE_NAME],
          }
        : { type: 'website' }),
      locale: 'fr_FR',
      siteName: SITE_NAME,
      title,
      description,
      url,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(images ? { images } : {}),
    },
  };
}
