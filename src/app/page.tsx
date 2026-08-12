import Link from 'next/link';
import LayeredTitle from '@/components/LayeredTitle';
import PhotoPlate from '@/components/PhotoPlate';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import Chapter, { type ChapterData } from '@/components/Chapter';
import PhotoGallery from '@/components/PhotoGallery';
import { CONTACT_EMAIL } from '@/lib/nav';
import {
  OPENING,
  AFTER_FIRST_QUOTE,
  THIRTY_YEARS,
  A_RESTAURANT_IS,
  TODAY_INTRO,
  TODAY_LIST,
  CLOSING,
} from '@/content/presentation';

const CHAPTERS: ChapterData[] = [
  {
    number: '01',
    audience: 'Radios & médias',
    title: 'Les 400 Coups',
    script: 'la chronique',
    body: "Des histoires de vignerons, de bouteilles et de territoires, diffusées sur France Bleu. Le vin raconté sans jargon ni nappe blanche — avec curiosité, liberté et émotion.",
    points: [
      'Chroniques courtes, de 2 à 5 minutes',
      'Thématiques de saison, accords et pairings',
      'Portraits de vignerons et de maisons',
    ],
    href: '/chroniques-radio',
    cta: 'Écouter la chronique',
    photo: '/photos/sabrina_photo_36.jpg',
    alt: "Micro France Bleu dans le studio d'enregistrement des 400 Coups",
    colorway: 'electric',
    duo: 'none',
  },
  {
    number: '02',
    audience: 'Entreprises & groupes',
    title: 'Bienvenue à ma table',
    script: 'ateliers & dîners',
    body: "Des dîners en forêt, dans un potager, à 2 500 mètres d'altitude. Des ateliers pour quatre personnes, des wine dinners pour cent. Aucun format figé, aucune recette : réunir des gens autour d'une table et goûter.",
    points: [
      'Ateliers dégustation, de 4 à 60 personnes',
      "Wine dinners et dîners à quatre mains avec un chef",
      'Soirées clients, séminaires et team building',
      'Vignerons et producteurs invités à table',
    ],
    href: '/ateliers-degustation',
    cta: 'Voir les expériences',
    photo: '/photos/sabrina_photo_54.jpg',
    alt: 'Longue tablée de convives lors d’un wine dinner dans une cave voûtée',
    colorway: 'lemon',
    duo: 'none',
  },
  {
    number: '03',
    audience: 'Écoles & équipes',
    title: 'Écoles & formations',
    // No script: the mint colourway carries display type only.
    body: "Hospitalité, management, sommellerie, entrepreneuriat. Intervenante à l'ISG Luxury Management de Lyon et de Genève, et auprès des équipes qui veulent remettre l'accueil au centre.",
    points: [
      "Hospitalité et expérience client",
      'Management, recrutement et culture d’équipe',
      'Sommellerie, dégustation et carte des vins',
      "Entrepreneuriat et ouverture d'établissement",
    ],
    href: '/formations-ecoles',
    cta: "Voir les domaines d'intervention",
    photo: '/photos/sabrina_photo_01.jpg',
    alt: 'Sabrina Carlier face à une promotion d’étudiants en salle de cours',
    colorway: 'mint',
    duo: 'none',
  },
  {
    number: '04',
    audience: 'Scènes, entreprises & festivals',
    title: "Le vin, vecteur d'émotion",
    script: 'la conférence',
    body: "Pourquoi certains vins nous bouleversent-ils alors que nous sommes incapables de nous souvenir de leur cépage ? Une conférence-expérience en création, mêlant récit, dégustation et rencontres.",
    points: [
      'Récit, dégustation et échanges avec le public',
      'Première en entreprise à l’automne 2026',
      'Programmation publique à partir de janvier 2027',
    ],
    href: '/conferences',
    cta: 'Découvrir la conférence',
    photo: '/photos/sabrina_photo_58.jpg',
    alt: 'Sabrina Carlier prenant la parole devant un public assis',
    colorway: 'lilac',
    duo: 'none',
  },
];

const TICKER = [
  'France Bleu',
  'Les 400 Coups',
  'ISG Luxury Management',
  '30 ans de terrain',
  'Lyon & Genève',
  'Maisons étoilées',
  'Wine dinners',
  'Conférences',
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section data-cw="ink" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
          <p className="t-label" style={{ color: 'var(--quiet)' }}>
            Sommellerie · Radio · Formation · Conférences — Lyon
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <LayeredTitle
                as="h1"
                lines={["L'hospitalité", "n'est pas", 'un métier']}
                script="c'est une manière de vivre"
                size="xl"
                scriptX="2%"
                scriptScale={0.42}
                scriptRotate={-4}
                scriptAvailable="min(calc(100vw - 3rem), 56rem)"
              />

              <div className="measure-wide mt-8">
                <p className="t-lead">{OPENING[0]}</p>
                <p className="t-lead mt-4" style={{ color: 'var(--quiet)' }}>
                  Trente ans plus tard, je n&apos;ai jamais quitté la table.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn border-lemon bg-lemon text-ink hover:bg-flame hover:border-flame hover:text-paper"
                >
                  Proposer un projet
                </Link>
                <Link href="#histoire" className="btn btn--ghost">
                  Lire mon histoire
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhotoPlate
                src="/photos/sabrina_photo_06.jpg"
                alt="Sabrina Carlier, un verre de vin à la main, dans un bar à vin"
                ratio="aspect-square"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <p className="t-ui mt-4 text-xs" style={{ color: 'var(--quiet)' }}>
                Pas de costume, pas de cravate. Trente ans de salle, quand même.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div data-cw="lemon" className="border-y-2 border-ink py-4">
        <Marquee items={TICKER} duration={52} />
      </div>

      {/* ── WHAT SHE DOES ────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <LayeredTitle
            lines={['Quatre façons', 'de travailler', 'ensemble']}
            script="et une seule obsession"
            size="lg"
            scriptX="6%"
            scriptScale={0.38}
            scriptAvailable="min(calc(100vw - 3rem), 44rem)"
          />
          <p className="t-lead measure mt-10">
            Une table, un micro, une salle de classe ou une scène. Le support
            change, le métier non : réunir des gens et leur raconter quelque
            chose qu&apos;ils garderont.
          </p>
        </div>
      </section>

      {CHAPTERS.map((chapter, i) => (
        <Chapter key={chapter.number} chapter={chapter} flip={i % 2 === 1} />
      ))}

      {/* ── THE STORY ────────────────────────────────────────────────────── */}
      <section id="histoire" data-cw="paper" className="relative scroll-mt-20">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label" style={{ color: 'var(--quiet)' }}>
              Le parcours
            </p>
            <LayeredTitle
              lines={['Trente ans', 'de tables']}
              script="et de rencontres"
              size="lg"
              scriptX="10%"
              scriptScale={0.42}
              scriptAvailable="min(calc(100vw - 3rem), 40rem)"
              className="mt-4"
            />
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal className="prose-editorial measure">
                {OPENING.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal>
                <blockquote className="my-14 border-l-4 border-flame pl-6 sm:pl-8">
                  <p className="t-script t-script-lg text-flame">
                    Très tôt, je comprends que l&apos;hospitalité n&apos;est pas un
                    métier. C&apos;est une manière de vivre.
                  </p>
                </blockquote>
              </Reveal>

              <Reveal className="prose-editorial measure">
                {AFTER_FIRST_QUOTE.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-28">
                <PhotoPlate
                  src="/photos/sabrina_photo_14.jpg"
                  alt="Sabrina Carlier en tablier dans un restaurant de montagne"
                  offset="var(--color-lilac)"
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <p className="t-ui mt-6 text-xs" style={{ color: 'var(--quiet)' }}>
                  De la plonge à la direction — en passant par les chambres, la
                  réception, le service et la sommellerie.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Full-width beat: the list of everything she has done */}
          <Reveal className="mt-8">
            <div className="prose-editorial measure-wide">
              {THIRTY_YEARS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── A RESTAURANT IS MORE ─────────────────────────────────────────── */}
      <section data-cw="ink" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <PhotoPlate
                src="/photos/sabrina_photo_04.jpg"
                alt="Longue tablée couverte de plats partagés, vue de dessus"
                duo="mint"
                ratio="aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal className="prose-editorial measure">
                {A_RESTAURANT_IS.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal>
                <p
                  className="t-script mt-10 t-script-lg leading-[0.95]"
                  style={{ color: 'var(--script)' }}
                >
                  Les émotions que l&apos;on partage autour d&apos;une table.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── TODAY ────────────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="t-label" style={{ color: 'var(--quiet)' }}>
                  Aujourd&apos;hui
                </p>
                <LayeredTitle
                  lines={['Aller', 'plus loin']}
                  script="autrement"
                  size="lg"
                  scriptX="12%"
                  scriptScale={0.44}
                  scriptAvailable="min(calc(100vw - 3rem), 30rem)"
                  className="mt-4"
                />
              </Reveal>

              <Reveal className="prose-editorial measure mt-12">
                {TODAY_INTRO.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal>
                <ul className="mt-10 max-w-xl">
                  {TODAY_LIST.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-4 border-t py-3.5"
                      style={{ borderColor: 'var(--rule)' }}
                    >
                      <span className="t-label shrink-0" style={{ color: 'var(--accent)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span >{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <p className="t-lead measure mt-10">{CLOSING}</p>
                <p className="t-script mt-8 t-script-lg text-electric">
                  Bienvenue dans mon univers.
                </p>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <PhotoPlate
                  src="/photos/sabrina_photo_35.jpg"
                  alt="Sabrina Carlier et son équipe, éclats de rire en fin de service"
                  offset="var(--color-lemon)"
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <p className="t-ui mt-6 text-xs" style={{ color: 'var(--quiet)' }}>
                  Et surtout, j&apos;ai rencontré des femmes et des hommes
                  extraordinaires.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <PhotoGallery />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section data-cw="flame" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <LayeredTitle
              lines={['Une table,', 'une scène,', 'une promo ?']}
              script="racontez-moi"
              size="lg"
              scriptX="8%"
              scriptScale={0.42}
              scriptAvailable="min(calc(100vw - 3rem), 34rem)"
              className="lg:col-span-7"
            />

            <div className="lg:col-span-5">
              <p className="t-lead">
                Entreprises, écoles, radios, théâtres, domaines, festivals — si
                vous avez un projet, une date ou simplement une envie,
                écrivez-moi. J&apos;étudie chaque proposition avec attention.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn btn--solid">
                  Me contacter
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="t-label underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
