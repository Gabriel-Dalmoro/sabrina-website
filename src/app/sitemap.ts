import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { NAV_LINKS } from '@/lib/nav';
import { getPosts } from '@/lib/substack';

/** Picks up new journal posts as the feed refreshes. Must match FEED_REVALIDATE. */
export const revalidate = 3600;

/**
 * Built from the nav so a new page cannot be added without appearing here.
 * `/contact` is not in the nav (it is a CTA everywhere) so it is added by hand.
 * Journal posts come from the Substack feed, dated by publication.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const priorities: Record<string, number> = {
    '/': 1,
    '/chroniques-radio': 0.9,
    '/ateliers-degustation': 0.9,
    '/conferences': 0.8,
    '/formations-ecoles': 0.8,
    '/cv': 0.7,
    '/contact': 0.6,
    '/journal': 0.8,
  };

  const paths = [...NAV_LINKS.map((l) => l.href), '/contact'];

  const pages: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/' ? 'monthly' : path === '/journal' ? 'weekly' : 'yearly',
    priority: priorities[path] ?? 0.5,
  }));

  const posts = await getPosts().catch(() => []);
  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    lastModified: post.iso ? new Date(post.iso) : lastModified,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
