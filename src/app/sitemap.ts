import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { NAV_LINKS } from '@/lib/nav';

/**
 * Built from the nav so a new page cannot be added without appearing here.
 * `/contact` is not in the nav (it is a CTA everywhere) so it is added by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const priorities: Record<string, number> = {
    '/': 1,
    '/chroniques-radio': 0.9,
    '/ateliers-degustation': 0.9,
    '/conferences': 0.8,
    '/formations-ecoles': 0.8,
    '/cv': 0.7,
    '/contact': 0.6,
  };

  const paths = [...NAV_LINKS.map((l) => l.href), '/contact'];

  return paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: priorities[path] ?? 0.5,
  }));
}
