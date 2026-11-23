import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PostCover from '@/components/PostCover';
import { PostMeta } from '@/components/PostList';
import SubscribeBand from '@/components/SubscribeBand';
import { getPost, getPosts, substackImage, type Post } from '@/lib/substack';
import { SUBSTACK_SUBSCRIBE_URL } from '@/lib/nav';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';

/** Re-read the Substack feed at most once an hour. Must match FEED_REVALIDATE. */
export const revalidate = 3600;

/*
 * Every post known at build time is prerendered. One published afterwards is
 * rendered on its first visit and cached from then on (dynamicParams defaults
 * to true), so a new text needs no redeploy.
 */
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.subtitle || `Un texte du journal de ${SITE_NAME}.`,
    path: `/journal/${post.slug}`,
    article: {
      publishedTime: post.iso,
      image: post.cover ? substackImage(post.cover, 1200) : null,
    },
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = posts[index];
  // Newest first: the next text in time is the one before it in the list.
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <>
      <article data-cw="paper" className="relative">
        {/* A centred 64rem column, not the site's 100rem frame: on a wide screen
            the reading text otherwise sits against the left edge with an
            empty half-page beside it. */}
        <div className="mx-auto max-w-[64rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:box-content">
          <Link href="/journal" className="t-label inline-block hover:underline" style={{ color: 'var(--quiet)' }}>
            ← Le journal
          </Link>

          <header className="mt-10">
            {post.episode ? (
              <p className="t-label" style={{ color: 'var(--accent)' }}>
                {post.episode}
              </p>
            ) : null}
            <h1
              className="t-display mt-5 text-[length:var(--text-display-md)] !leading-none"
              style={{ color: 'var(--display)' }}
            >
              {post.headline}
            </h1>
            {post.subtitle ? <p className="t-lead measure-wide mt-8 italic">{post.subtitle}</p> : null}
            <PostMeta post={post} className="mt-6" />
          </header>

          {post.cover ? (
            <PostCover
              src={post.cover}
              size={post.coverSize}
              maxHeightVh={80}
              sizes="(max-width: 1024px) 100vw, 64rem"
              offset="var(--color-lemon)"
              priority
              className="mt-12"
            />
          ) : null}

          <div className="mt-16 grid gap-14 sm:mt-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
            <div
              className="prose-journal measure"
              // Sanitised in lib/substack.ts: an allow-list of reading tags,
              // no scripts, styles or event handlers, iframes from a fixed
              // list of players only.
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <aside>
              <div className="border-t-2 border-ink pt-6 lg:sticky lg:top-28">
                <p className="t-label" style={{ color: 'var(--quiet)' }}>
                  Publié d&apos;abord sur Substack
                </p>
                <p className="t-small mt-4">
                  Pour recevoir les prochains textes par e-mail, ou pour
                  laisser un mot sous celui-ci, c&apos;est là-bas.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={SUBSTACK_SUBSCRIBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--solid justify-center"
                  >
                    S&apos;abonner sur Substack
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost justify-center hover:border-electric hover:bg-electric hover:text-paper"
                  >
                    Lire sur Substack
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {newer || older ? <MorePosts newer={newer} older={older} /> : null}

      <SubscribeBand postUrl={post.url} />

      <PostJsonLd post={post} />
    </>
  );
}

function MorePosts({ newer, older }: { newer?: Post; older?: Post }) {
  const links = [
    older ? { post: older, label: '← Texte précédent' } : null,
    newer ? { post: newer, label: 'Texte suivant →' } : null,
  ].filter((l) => l !== null);

  return (
    <nav aria-label="Autres textes du journal" data-cw="ink" className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[64rem] px-5 py-16 sm:px-8 sm:py-20 lg:box-content">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {links.map(({ post, label }) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className={`group block border-t pt-6 ${label.startsWith('Texte suivant') ? 'md:col-start-2 md:text-right' : ''}`}
              style={{ borderColor: 'var(--rule)' }}
            >
              <span className="t-label block" style={{ color: 'var(--quiet)' }}>
                {label}
              </span>
              {post.episode ? (
                <span className="t-label mt-5 block" style={{ color: 'var(--accent)' }}>
                  {post.episode}
                </span>
              ) : null}
              <span className="t-display mt-3 block text-[length:var(--text-display-sm)] !leading-none text-[color:var(--display)] transition-colors group-hover:text-flame">
                {post.headline}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

/** BlogPosting, tied to the Person graph in components/JsonLd.tsx. */
function PostJsonLd({ post }: { post: Post }) {
  const url = `${SITE_URL}/journal/${post.slug}`;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.subtitle || undefined,
    datePublished: post.iso || undefined,
    image: post.cover ? substackImage(post.cover, 1200) : undefined,
    url,
    mainEntityOfPage: url,
    inLanguage: 'fr-FR',
    author: { '@id': `${SITE_URL}/#sabrina` },
    publisher: { '@id': `${SITE_URL}/#sabrina` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    sameAs: post.url,
  };

  return (
    <script
      type="application/ld+json"
      // Titles come from the feed: escape `<` so none can close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
