import type { Metadata } from 'next';

export const SITE_URL = 'https://sabrinacarlier.fr';
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
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
