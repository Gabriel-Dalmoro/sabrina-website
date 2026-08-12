import PageHero from '@/components/PageHero';
import PhotoPlate from '@/components/PhotoPlate';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import EpisodeList from '@/components/EpisodeList';
import { PODCAST_URL } from '@/lib/nav';

export const metadata = {
  title: 'Les 400 Coups — chroniques radio',
  description:
    "« Les 400 Coups », la chronique de Sabrina Carlier sur France Bleu. Des histoires de vignerons, de bouteilles et de territoires, racontées avec curiosité, liberté et émotion.",
};

/** Sabrina's text from "Page 3 — Chroniques radio", kept whole. */
const INTRO = [
  "Plus de certitudes, plus d'idées toutes faites, plus de « cépage préféré », de « vin préféré » ou d'« accord préféré ». Bien sûr, mon cœur bat plus fort pour certains vins. Mais rien ne dure, rien n'est figé. Les goûts évoluent avec les saisons, les rencontres, les lieux et les moments de vie.",
  "Je les aime tous, chacun à leur manière, avec leur histoire, leurs racines et les femmes et les hommes qui les façonnent.",
];

const WHAT_IT_IS = [
  "Les 400 Coups, ce sont toutes ces histoires. Des histoires de vignerons, de bouteilles et de territoires. Des histoires de pairings, cet art d'associer deux éléments pour qu'ensemble ils racontent quelque chose de plus grand. Des histoires vécues et partagées lors d'ateliers, de dîners, de formations et de rencontres.",
];

const TASTING = [
  "Goûter un vin, ce n'est pas seulement poser son verre au-dessus d'une nappe blanche, observer sa couleur et tenter d'en deviner le cépage, la région, voire le domaine.",
  "Ce n'est pas non plus le faire tourner pendant dix minutes en cherchant désespérément des arômes que l'on ne sent pas.",
  "Non, goûter un vin, ce n'est pas seulement cela.",
];

const CLOSING = [
  "Les discussions, les rires, les rencontres, les silences parfois : voilà ce qui rend les goûts inoubliables.",
  "À travers ces chroniques, je vous invite à découvrir le vin autrement : avec curiosité, liberté et émotion.",
];

const FOR_STATIONS = [
  'Formats courts, de 2 à 5 minutes',
  'Thématiques de saison, accords et pairings',
  'Portraits de vignerons, de maisons et de terroirs',
  'Chroniques ponctuelles, hebdomadaires ou quotidiennes',
];

export default function RadioPage() {
  return (
    <>
      <PageHero
        colorway="electric"
        kicker="France Bleu · chronique radio"
        lines={['Les 400', 'Coups']}
        script="le vin, autrement"
        scriptX="8%"
        scriptScale={0.44}
        scriptAvailable="min(calc(100vw - 3rem), 30rem)"
        lead="J'ai acquis une certitude : celle de ne plus jamais en avoir."
        photo={{
          src: '/photos/sabrina_photo_36.jpg',
          alt: "Micro France Bleu dans le studio d'enregistrement des 400 Coups",
        }}
      />

      {/* ── THE SPIRIT ───────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal className="prose-editorial measure">
                {INTRO.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal className="prose-editorial measure mt-10">
                {WHAT_IT_IS.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal className="prose-editorial measure mt-10">
                {TASTING.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal>
                <blockquote className="my-12 border-l-4 border-flame pl-6 sm:pl-8">
                  <p className="t-script t-script-md text-flame">
                    Ce ne sont pas toujours les vins que nous dégustons qui
                    restent dans nos mémoires, mais les personnes avec
                    lesquelles nous les partageons.
                  </p>
                </blockquote>
              </Reveal>

              <Reveal className="prose-editorial measure">
                {CLOSING.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="t-script t-script-md pt-4 text-electric">
                  Bienvenue dans l&apos;univers des 400 Coups.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-28">
                <PhotoPlate
                  src="/photos/sabrina_photo_47.jpg"
                  alt="Texte de chronique posé près du micro, juste avant l'antenne"
                  offset="var(--color-lemon)"
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />

                <a href="#episodes" className="btn btn--solid mt-8 w-full justify-center">
                  Écouter les épisodes
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── EPISODES ─────────────────────────────────────────────────────── */}
      <section id="episodes" data-cw="ink" className="relative scroll-mt-20">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <p className="t-label" style={{ color: 'var(--quiet)' }}>
                Tous les épisodes
              </p>
              <h2
                className="t-display mt-4 text-[length:var(--text-display-md)]"
                style={{ color: 'var(--display)' }}
              >
                Seize chroniques
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="t-lead">
                Diffusées sur France Bleu Pays de Savoie pendant l&apos;été 2024.
                Quatre minutes chacune, un vigneron ou une bouteille à la fois.
              </p>
              <a
                href={PODCAST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label mt-5 inline-block underline underline-offset-4"
              >
                Voir sur Radio France ↗
              </a>
            </div>
          </div>

          <EpisodeList />
        </div>
      </section>

      {/* Electric, not ink — it follows the episode list, and two adjacent
          black sections read as one. */}
      {/* ── FOR STATIONS ─────────────────────────────────────────────────── */}
      <section data-cw="electric" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="t-label" style={{ color: 'var(--quiet)' }}>
                Pour les radios & les médias
              </p>
              <h2
                className="t-display mt-4 text-[length:var(--text-display-md)]"
                style={{ color: 'var(--display)' }}
              >
                Proposer une chronique
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="t-lead">
                Vous cherchez une chroniqueuse qui connaît le vin de
                l&apos;intérieur, qui parle aux amateurs sans les intimider et
                aux initiés sans les ennuyer ? Écrivons quelque chose ensemble.
              </p>

              <ul className="mt-8">
                {FOR_STATIONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-t py-3"
                    style={{ borderColor: 'var(--rule)' }}
                  >
                    <span aria-hidden="true" className="shrink-0 opacity-60">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm defaultSubject="Chronique radio / média" />
    </>
  );
}
