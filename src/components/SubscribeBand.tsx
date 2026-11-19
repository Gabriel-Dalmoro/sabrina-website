import LayeredTitle from './LayeredTitle';
import { SUBSTACK_SUBSCRIBE_URL, SUBSTACK_URL } from '@/lib/nav';

/**
 * The way back to Substack: subscribe there, get each new text by email.
 *
 * Electric ground, yellow caps, black script — the Les 400 Coups lockup, so
 * the journal reads as part of the same voice as the radio column.
 */
export default function SubscribeBand({ postUrl }: { postUrl?: string }) {
  return (
    <section data-cw="electric" className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <LayeredTitle
            lines={['Le prochain', 'épisode']}
            script="dans votre boîte mail"
            size="lg"
            scriptX="6%"
            scriptScale={0.4}
            scriptAvailable="min(calc(100vw - 3rem), 34rem)"
            className="lg:col-span-7"
          />

          <div className="lg:col-span-5">
            <p className="t-lead">
              Le journal s&apos;écrit sur Substack. Abonnez-vous là-bas pour
              recevoir chaque nouveau texte par e-mail, dès sa sortie.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={SUBSTACK_SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-lemon bg-lemon text-ink hover:border-ink hover:bg-ink hover:text-lemon"
              >
                S&apos;abonner sur Substack
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={postUrl ?? SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label underline underline-offset-4"
              >
                {postUrl ? 'Commenter sur Substack ↗' : 'Voir sur Substack ↗'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
