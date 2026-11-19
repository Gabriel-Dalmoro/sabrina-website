import Link from 'next/link';
import LayeredTitle from './LayeredTitle';
import PostCover from './PostCover';
import { PostMeta } from './PostList';
import Reveal from './Reveal';
import { getPosts } from '@/lib/substack';
import { SUBSTACK_SUBSCRIBE_URL } from '@/lib/nav';

/**
 * The latest journal texts on the homepage. Renders nothing until there is
 * something to show, and never takes the homepage down with it: if the feed
 * cannot be read, the section is simply left out.
 */
export default async function JournalTeaser() {
  const posts = await getPosts().catch(() => []);
  const latest = posts.slice(0, 2);
  if (latest.length === 0) return null;

  return (
    <section data-cw="lilac" className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="t-label" style={{ color: 'var(--quiet)' }}>
              Le journal · sur Substack
            </p>
            <LayeredTitle
              lines={['Le', 'journal']}
              script="à lire le soir"
              size="lg"
              scriptX="18%"
              scriptScale={0.42}
              scriptAvailable="min(calc(100vw - 3rem), 26rem)"
              className="mt-4"
            />
            <p className="t-lead measure mt-10">
              Des textes sur le vin, les rencontres et tout ce qui se passe
              autour d&apos;une table — et parfois loin d&apos;elle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/journal" className="btn btn--solid">
                Tous les textes
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={SUBSTACK_SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label underline underline-offset-4"
              >
                S&apos;abonner sur Substack ↗
              </a>
            </div>
          </Reveal>

          <ul className="lg:col-span-7">
            {latest.map((post) => (
              <li key={post.slug} className="border-t-2 first:border-t-0 lg:first:border-t-2" style={{ borderColor: 'var(--color-ink)' }}>
                <Reveal>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group grid gap-6 py-8 sm:grid-cols-[1fr_12rem] sm:items-center sm:gap-8"
                  >
                    <span className="min-w-0">
                      {post.episode ? (
                        <span className="t-label block" style={{ color: 'var(--accent)' }}>
                          {post.episode}
                        </span>
                      ) : null}
                      <span className="t-display mt-3 block text-[length:var(--text-display-sm)] !leading-none text-[color:var(--display)] transition-colors group-hover:text-ink">
                        {post.headline}
                      </span>
                      <PostMeta post={post} className="mt-3" />
                    </span>
                    {post.cover ? (
                      <PostCover
                        src={post.cover}
                        sizes="(max-width: 640px) 100vw, 12rem"
                        className="sm:order-none -order-1"
                      />
                    ) : null}
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
