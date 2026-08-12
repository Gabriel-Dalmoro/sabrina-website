import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * This is a personal brand site whose entire job is to be found — by search
 * engines and by assistants people ask for a sommelière. So the AI crawlers
 * are allowed explicitly rather than left to a default.
 *
 * They are listed by name because several are opt-out-by-name and would
 * otherwise be governed by publisher-wide conventions rather than this file:
 *   · Google-Extended  — Gemini training / grounding
 *   · GPTBot, OAI-SearchBot, ChatGPT-User  — OpenAI training and live lookups
 *   · ClaudeBot, anthropic-ai, Claude-Web  — Anthropic
 *   · PerplexityBot, Applebot-Extended, CCBot, cohere-ai
 *
 * If Sabrina ever wants out of AI training, flip the ones she objects to from
 * `allow` to `disallow: '/'` — search indexing is unaffected by these entries.
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'Google-Extended',
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'anthropic-ai',
    'Claude-Web',
    'PerplexityBot',
    'Perplexity-User',
    'Applebot-Extended',
    'CCBot',
    'cohere-ai',
    'Meta-ExternalAgent',
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
