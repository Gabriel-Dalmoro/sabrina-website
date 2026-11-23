import 'server-only';
import { cache } from 'react';
import { XMLParser } from 'fast-xml-parser';
import sanitizeHtml from 'sanitize-html';
import { SUBSTACK_URL } from './nav';

/**
 * Sabrina's Substack, read through its public RSS feed.
 *
 * Substack stays the place she writes and where readers subscribe. The site
 * reads the same feed and re-sets every post in her own typography, so the
 * journal updates itself: she publishes on Substack, and within the hour the
 * article is on sabrinacarlier.fr too. Nothing to copy, no CMS to log into.
 *
 * Everything here is server-only — the parser and the sanitiser never reach a
 * visitor's browser, only the finished HTML does.
 */

const FEED_URL = `${SUBSTACK_URL}/feed`;

/**
 * How often, in seconds, the feed is re-read. The pages that use it export the
 * same number as their own `revalidate` — Next.js needs that one as a literal
 * in each route file, so it cannot be imported from here.
 */
export const FEED_REVALIDATE = 3600;

export interface Post {
  slug: string;
  title: string;
  /**
   * "Épisode 2" when the title follows her "Épisode N — Title" pattern, so the
   * number can be set as a label and the title can carry the display type.
   */
  episode: string | null;
  /** The title without the episode prefix. */
  headline: string;
  subtitle: string;
  /** Machine date, for <time datetime> and structured data. */
  iso: string;
  /** "18 novembre 2026" */
  date: string;
  readingMinutes: number;
  cover: string | null;
  /**
   * The cover's real pixel size, so it can be shown uncropped. Null when the
   * image address doesn't carry it, in which case callers fall back to 3:2.
   */
  coverSize: { width: number; height: number } | null;
  /** The post on Substack — for comments, likes and sharing. */
  url: string;
  /** Sanitised, ready to render. */
  html: string;
}

/* --------------------------------------------------------------------------
   Fetching
   -------------------------------------------------------------------------- */

/**
 * All published posts, newest first.
 *
 * Failure is handled differently depending on when it happens:
 *
 *   during `next build` — return no posts. A Substack outage at deploy time
 *     should not block a deploy of the rest of the site; the journal shows its
 *     empty state and fills itself on the next hourly refresh.
 *
 *   at runtime — throw. A failed background refresh then leaves the last good
 *     version of the page in place, rather than caching an empty journal for
 *     an hour.
 *
 * Wrapped in `cache` so the page, its metadata and its JSON-LD share one parse
 * per request.
 */
export const getPosts = cache(async (): Promise<Post[]> => {
  let xml: string;

  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: FEED_REVALIDATE, tags: ['substack'] },
    });
    if (!res.ok) throw new Error(`Substack feed answered ${res.status}`);
    xml = await res.text();
  } catch (error) {
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      console.warn('[substack] feed unavailable during build, journal left empty:', error);
      return [];
    }
    throw error;
  }

  return parseFeed(xml);
});

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

/* --------------------------------------------------------------------------
   Parsing
   -------------------------------------------------------------------------- */

interface FeedItem {
  title?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  enclosure?: { '@_url'?: string; '@_type'?: string };
  'content:encoded'?: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) => name === 'item',
  // Keep values as strings: a title like "2026" must not become a number.
  parseTagValue: false,
  trimValues: true,
});

const DATE_FR = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Paris',
});

export function parseFeed(xml: string): Post[] {
  const doc = parser.parse(xml);
  const items: FeedItem[] = doc?.rss?.channel?.item ?? [];

  const posts = items.flatMap((item): Post[] => {
    const url = item.link?.trim();
    const slug = url ? slugFromUrl(url) : null;
    if (!url || !slug) return [];

    const title = decodeEntities(item.title ?? '').trim();
    const { episode, headline } = splitEpisode(title);
    const published = item.pubDate ? new Date(item.pubDate) : null;
    const validDate = published && !Number.isNaN(published.getTime()) ? published : null;

    const raw = item['content:encoded'] ?? '';
    const cover =
      item.enclosure?.['@_type']?.startsWith('image/') && item.enclosure['@_url']
        ? item.enclosure['@_url']
        : firstImage(raw);

    return [
      {
        slug,
        title,
        episode,
        headline,
        subtitle: decodeEntities(item.description ?? '').trim(),
        iso: validDate?.toISOString() ?? '',
        date: validDate ? DATE_FR.format(validDate) : '',
        readingMinutes: readingTime(raw),
        cover,
        coverSize: imageSize(cover),
        url,
        html: cleanPostHtml(dropLeadingCover(raw, cover)),
      },
    ];
  });

  return posts.sort((a, b) => b.iso.localeCompare(a.iso));
}

/** https://sabrinacarlier.substack.com/p/episode-2-la-bouillabaisse → episode-2-la-bouillabaisse */
function slugFromUrl(url: string): string | null {
  try {
    const match = new URL(url).pathname.match(/^\/p\/([a-z0-9-]+)\/?$/i);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

/** "Épisode 2 — La bouillabaisse…" → { episode: "Épisode 2", headline: "La bouillabaisse…" } */
function splitEpisode(title: string): { episode: string | null; headline: string } {
  const match = title.match(/^(.{1,24}?\d+)\s+[—–-]\s+(.+)$/);
  return match ? { episode: match[1], headline: match[2] } : { episode: null, headline: title };
}

/** Bodoni reading pace, roughly — French prose at ~200 words a minute. */
function readingTime(html: string): number {
  const words = decodeEntities(html.replace(/<[^>]+>/g, ' '))
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function firstImage(html: string): string | null {
  return html.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
}

/**
 * Substack names every upload `<uuid>_<width>x<height>.<ext>`, and that name
 * survives inside its CDN URLs, so the original proportions are readable
 * without downloading the image.
 */
function imageSize(url: string | null): { width: number; height: number } | null {
  if (!url) return null;
  const m = decodeURIComponent(url).match(/_(\d{2,5})x(\d{2,5})\.(?:jpe?g|png|webp|gif|avif)/i);
  return m ? { width: Number(m[1]), height: Number(m[2]) } : null;
}

/** The S3 image id Substack's CDN URLs are built around. */
function imageKey(url: string | null): string | null {
  if (!url) return null;
  return decodeURIComponent(url).match(/images\/([0-9a-f-]{36})/i)?.[1] ?? null;
}

/**
 * Substack repeats the cover as the first image of the body. The article page
 * already sets the cover in its header, so the duplicate is dropped — but only
 * when it really is the same image; anything else is left alone.
 */
function dropLeadingCover(html: string, cover: string | null): string {
  const key = imageKey(cover);
  if (!key) return html;

  const lead = html.match(/^\s*<div class="captioned-image-container">\s*<figure>[\s\S]*?<\/figure>\s*<\/div>/);
  if (!lead || imageKey(firstImage(lead[0])) !== key) return html;

  return html.slice(lead[0].length);
}

/* --------------------------------------------------------------------------
   Images
   -------------------------------------------------------------------------- */

/**
 * A resized variant from Substack's image CDN. Its URLs carry the transform
 * inline (`…/fetch/$s_!id!,f_auto,…/<source>`), so a width is one more
 * parameter. The site serves these directly instead of re-optimising them.
 */
export function substackImage(url: string, width: number): string {
  if (!url.includes('substackcdn.com/image/fetch/')) return url;
  return url.replace(
    /(\/image\/fetch\/(?:\$s_![^,/]+!,)?)(?:w_\d+,)?(?:c_\w+,)?/,
    `$1w_${width},c_limit,`,
  );
}

export function substackSrcSet(url: string, widths = [424, 848, 1272, 1456]): string {
  return widths.map((w) => `${substackImage(url, w)} ${w}w`).join(', ');
}

/* --------------------------------------------------------------------------
   Sanitising

   Substack's HTML is written for Substack: image lightbox buttons, inline
   SVG icons, subscribe forms, its own class names. What reaches the page is
   the writing and nothing else — paragraphs, emphasis, links, images,
   quotes, lists — so the site's own typography can take over.
   -------------------------------------------------------------------------- */

/** Substack blocks that only make sense on Substack, removed with their content. */
const SUBSTACK_ONLY =
  /\b(subscription-widget[\w-]*|subscribe-widget|paywall[\w-]*|poll-embed|embedded-post[\w-]*|embedded-publication[\w-]*|digest-post-embed|install-substack-app[\w-]*|community-chat|image-link-expand|native-(?:audio|video)-embed|apple-podcast-container|tweet|instagram|tiktok-wrap)\b/;

const ALLOWED_IFRAME_HOSTS = [
  'www.youtube-nocookie.com',
  'www.youtube.com',
  'open.spotify.com',
  'embed.radiofrance.fr',
  'player.vimeo.com',
];

const BODY_IMAGE_SIZES = '(min-width: 48rem) 46rem, 100vw';

/*
 * Removing a block by its Substack class takes two steps: `exclusiveFilter`
 * only sees attributes *after* the allow-list has stripped them, so the class
 * is gone by then. The transforms, which see the original attributes, mark
 * the element first; the filter then drops anything marked.
 */
const DROP = 'data-drop';
const drop = (): sanitizeHtml.Tag => ({ tagName: 'div', attribs: { [DROP]: '1' } });
const isSubstackOnly = (attribs: sanitizeHtml.Attributes) => SUBSTACK_ONLY.test(attribs.class ?? '');

function isAllowedIframe(src: string | undefined): boolean {
  try {
    const url = new URL(src ?? '');
    return url.protocol === 'https:' && ALLOWED_IFRAME_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}

export function cleanPostHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      'p', 'br', 'hr',
      'h2', 'h3', 'h4',
      'strong', 'b', 'em', 'i', 'u', 's', 'sub', 'sup', 'mark',
      'a',
      'blockquote',
      'ul', 'ol', 'li',
      'figure', 'figcaption', 'img',
      'pre', 'code',
      'div',
      'iframe',
    ],
    allowedAttributes: {
      a: ['href', 'id', 'target', 'rel', 'class'],
      img: ['src', 'srcset', 'sizes', 'width', 'height', 'alt', 'loading', 'decoding'],
      iframe: ['src', 'width', 'height', 'allow', 'allowfullscreen', 'loading', 'title'],
      div: ['class', DROP],
    },
    allowedClasses: {
      a: ['btn', 'btn--solid', 'footnote-anchor', 'footnote-number'],
      div: ['footnote', 'footnote-content', 'embed'],
    },
    allowedSchemes: ['https', 'http', 'mailto'],
    allowedSchemesByTag: { img: ['https'] },
    allowedIframeHostnames: ALLOWED_IFRAME_HOSTS,
    allowProtocolRelative: false,
    // Removed along with everything inside them, not just unwrapped.
    nonTextTags: ['script', 'style', 'textarea', 'option', 'noscript', 'button', 'svg', 'form', 'input'],
    exclusiveFilter: (frame) => DROP in (frame.attribs ?? {}),
    transformTags: {
      '*': (tagName, attribs) => (isSubstackOnly(attribs) ? drop() : { tagName, attribs }),
      // The article title is the page's only h1.
      h1: 'h2',
      h5: 'h4',
      h6: 'h4',
      div: (tagName, attribs) => {
        const cls = attribs.class ?? '';
        if (isSubstackOnly(attribs)) return drop();
        if (/\bpullquote\b/.test(cls)) return { tagName: 'blockquote', attribs: {} };
        if (/\b(youtube-wrap|spotify-wrap|vimeo-wrap)\b/.test(cls)) {
          return { tagName: 'div', attribs: { class: 'embed' } };
        }
        return { tagName, attribs };
      },
      a: (tagName, attribs): sanitizeHtml.Tag => {
        const cls = attribs.class ?? '';
        if (isSubstackOnly(attribs)) return drop();

        // Image lightbox link around every picture: unwrap it. (A plain div,
        // not a span — transforming into a tag that is then discarded makes
        // sanitize-html close the wrong element.)
        if (/\bimage-link\b/.test(cls)) return { tagName: 'div', attribs: {} };

        // Substack's in-post "Subscribe" / "Share" buttons, in the site's style.
        if (/\bbutton\b/.test(cls)) {
          return {
            tagName,
            attribs: { href: attribs.href ?? SUBSTACK_URL, class: 'btn btn--solid', ...external },
          };
        }

        if (/\bfootnote-(anchor|number)\b/.test(cls)) {
          return {
            tagName,
            attribs: {
              href: attribs.href ?? '',
              id: attribs.id ?? '',
              class: cls.match(/footnote-(anchor|number)/)![0],
            },
          };
        }

        const href = rewriteLink(attribs.href ?? '');
        const isInternal = href.startsWith('/') || href.startsWith('#');
        return { tagName, attribs: { href, ...(isInternal ? {} : external) } };
      },
      img: (tagName, attribs) => ({
        tagName,
        attribs: {
          src: attribs.src ?? '',
          ...(attribs.srcset ? { srcset: attribs.srcset, sizes: BODY_IMAGE_SIZES } : {}),
          ...(attribs.width ? { width: attribs.width } : {}),
          ...(attribs.height ? { height: attribs.height } : {}),
          alt: attribs.alt ?? '',
          loading: 'lazy',
          decoding: 'async',
        },
      }),
      // A player from an unlisted host is removed outright, not left as an
      // empty frame.
      iframe: (tagName, attribs) =>
        isAllowedIframe(attribs.src)
          ? { tagName, attribs: { ...attribs, loading: 'lazy', title: attribs.title || 'Contenu intégré' } }
          : drop(),
    },
  })
    // Unwrapped containers leave empty paragraphs and wrappers behind.
    .replace(/<p>\s*(?:<br \/>)?\s*<\/p>/g, '')
    .replace(/<div>\s*<\/div>/g, '');
}

const external = { target: '_blank', rel: 'noopener noreferrer' };

/**
 * A link from one of her posts to another points at the copy on this site,
 * so a reader moving between articles stays here.
 */
function rewriteLink(href: string): string {
  try {
    const url = new URL(href);
    if (url.origin === SUBSTACK_URL) {
      const slug = slugFromUrl(url.origin + url.pathname);
      if (slug) return `/journal/${slug}`;
    }
  } catch {
    // Relative or malformed — leave it to the scheme filter.
  }
  return href;
}

/* --------------------------------------------------------------------------
   Text
   -------------------------------------------------------------------------- */

const NAMED: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', laquo: '«', raquo: '»',
  hellip: '…', mdash: '—', ndash: '–',
};

/** Substack HTML-encodes accents inside the feed's CDATA (`&#224;` for à). */
export function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, code: string) => {
    if (code[0] === '#') {
      const n = code[1] === 'x' || code[1] === 'X' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) && n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : whole;
    }
    return NAMED[code.toLowerCase()] ?? whole;
  });
}
