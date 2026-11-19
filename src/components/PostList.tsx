import Link from 'next/link';
import type { Post } from '@/lib/substack';
import PostCover from './PostCover';
import Reveal from './Reveal';

/** "18 novembre 2026 · 6 min de lecture" */
export function PostMeta({ post, className = '' }: { post: Post; className?: string }) {
  return (
    <span className={`t-ui block text-xs ${className}`} style={{ color: 'var(--quiet)' }}>
      {post.date ? <time dateTime={post.iso}>{post.date}</time> : null}
      {post.date ? <span aria-hidden="true"> · </span> : null}
      {post.readingMinutes} min de lecture
    </span>
  );
}

function EpisodeLabel({ post }: { post: Post }) {
  if (!post.episode) return null;
  return (
    <span className="t-label block" style={{ color: 'var(--accent)' }}>
      {post.episode}
    </span>
  );
}

/**
 * The journal as an editorial index: the newest text set large with its
 * cover, every earlier one as a row beneath — numbered, like the radio
 * episodes, so the two archives read as one family.
 */
export default function PostList({ posts }: { posts: Post[] }) {
  const [latest, ...earlier] = posts;
  if (!latest) return null;

  return (
    <>
      <Reveal>
        <Link href={`/journal/${latest.slug}`} className="group grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {latest.cover ? (
            <PostCover
              src={latest.cover}
              sizes="(max-width: 1024px) 100vw, 55vw"
              offset="var(--color-lemon)"
              priority
              className="lg:col-span-7"
            />
          ) : null}

          <div className={latest.cover ? 'lg:col-span-5' : 'lg:col-span-9'}>
            <p className="t-label" style={{ color: 'var(--quiet)' }}>
              Dernier texte
            </p>
            <div className="mt-5">
              <EpisodeLabel post={latest} />
            </div>
            <h2
              className="t-display mt-4 text-[length:var(--text-display-md)] !leading-none text-[color:var(--display)] transition-colors group-hover:text-flame"
            >
              {latest.headline}
            </h2>
            {latest.subtitle ? <p className="t-lead measure mt-6">{latest.subtitle}</p> : null}
            <PostMeta post={latest} className="mt-5" />
            <span className="btn btn--solid mt-8">
              Lire le texte
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </Reveal>

      {earlier.length > 0 ? (
        <ol className="mt-20 sm:mt-28">
          {earlier.map((post, i) => (
            <li key={post.slug} className="border-t" style={{ borderColor: 'var(--rule)' }}>
              <Link
                href={`/journal/${post.slug}`}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-5 py-8 sm:gap-x-6 md:grid-cols-[auto_1fr_14rem] md:items-center"
              >
                <span className="t-label shrink-0 self-start pt-1 tabular-nums md:pt-2" style={{ color: 'var(--quiet)' }}>
                  {String(posts.length - 1 - i).padStart(2, '0')}
                </span>

                <span className="min-w-0">
                  <EpisodeLabel post={post} />
                  <span
                    className="t-display mt-3 block text-[length:var(--text-display-sm)] !leading-none text-[color:var(--display)] transition-colors group-hover:text-flame"
                  >
                    {post.headline}
                  </span>
                  {post.subtitle ? (
                    <span className="t-small measure mt-3 block" style={{ color: 'var(--quiet)' }}>
                      {post.subtitle}
                    </span>
                  ) : null}
                  <PostMeta post={post} className="mt-3" />
                </span>

                {post.cover ? (
                  <PostCover
                    src={post.cover}
                    sizes="(max-width: 768px) 100vw, 14rem"
                    className="col-span-2 md:col-span-1"
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ol>
      ) : null}
    </>
  );
}
