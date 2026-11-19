import PageHero from '@/components/PageHero';
import PostList from '@/components/PostList';
import SubscribeBand from '@/components/SubscribeBand';
import { getPosts } from '@/lib/substack';
import { SUBSTACK_SUBSCRIBE_URL, SUBSTACK_URL } from '@/lib/nav';
import { pageMetadata } from '@/lib/seo';

/** Re-read the Substack feed at most once an hour. Must match FEED_REVALIDATE. */
export const revalidate = 3600;

export const metadata = pageMetadata({
  title: 'Le journal',
  description:
    "Le journal de Sabrina Carlier : des textes sur le vin, les rencontres, les tables et la vie autour, publiés sur Substack et à lire ici.",
  path: '/journal',
});

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        colorway="cream"
        kicker="Le journal · publié sur Substack"
        lines={['Le', 'journal']}
        script="enfin, théoriquement"
        scriptX="22%"
        scriptScale={0.4}
        scriptAvailable="min(calc(100vw - 3rem), 28rem)"
        lead="Ce qui ne se raconte pas toujours à table. Des textes écrits le soir, à lire ici, ou à recevoir par e-mail en vous abonnant sur Substack."
        photo={{
          src: '/photos/sabrina_journal.jpg',
          alt: 'Sabrina Carlier goûtant un verre de vin rouge, en noir et blanc',
          // Square photo, 5:4 crop on phones: keep her head, lose the overalls.
          position: '50% 0%',
        }}
      >
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={SUBSTACK_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--solid"
          >
            S&apos;abonner sur Substack
            <span aria-hidden="true">↗</span>
          </a>
          {posts.length > 0 ? (
            <a href="#textes" className="t-label underline underline-offset-4">
              Lire les textes ↓
            </a>
          ) : null}
        </div>
      </PageHero>

      <section id="textes" data-cw="paper" className="relative scroll-mt-20">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          {posts.length > 0 ? (
            <PostList posts={posts} />
          ) : (
            <div className="measure">
              <p className="t-lead">
                Les premiers textes arrivent. En attendant, ils sont tous sur
                Substack.
              </p>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost mt-8"
              >
                Voir sur Substack
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <SubscribeBand />
    </>
  );
}
