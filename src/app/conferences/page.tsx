import PageHero from '@/components/PageHero';
import PhotoPlate from '@/components/PhotoPlate';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Le vin, vecteur d’émotion — conférence',
  description:
    "Une conférence-expérience en création par Sabrina Carlier, mêlant récit, dégustation et échanges avec le public. Première en entreprise à l'automne 2026, programmation publique à partir de janvier 2027.",
};

/** Verbatim from "Page 6 — Conférence". */
const QUESTIONS = [
  'Pourquoi certains vins nous bouleversent-ils alors que nous sommes incapables de nous souvenir de leur cépage ?',
  'Pourquoi une simple odeur peut-elle nous ramener vingt ans en arrière ?',
  'Pourquoi gardons-nous en mémoire un repas, une personne ou un instant bien plus qu’une note de dégustation ?',
];

const IS_MORE = ['Un souvenir.', 'Une rencontre.', 'Une émotion.', 'Une histoire.'];

const APPROACH = [
  "À travers cette conférence, j'ai envie de proposer une autre façon de parler du vin.",
  'Pas avec des fiches techniques ou des notes sur vingt. Mais avec des souvenirs, des récits, des expériences sensorielles et des échanges avec le public.',
  "Parce qu'au fond, ce ne sont pas les grands vins que nous retenons. Ce sont les émotions qu'ils nous ont permis de vivre.",
];

const INGREDIENTS = [
  'Une dégustation',
  'Des invités : vignerons, chefs, artisans, scientifiques, écrivains…',
  'Des interactions avec le public',
  'Quelques éclairages sur la mémoire, les sens et les émotions',
  'Et surtout… beaucoup d’histoires',
];

const DATES = [
  {
    when: 'Automne 2026',
    what: 'Première représentation en entreprise',
    detail: 'Séminaires, conventions et événements privés.',
  },
  {
    when: 'Janvier 2027',
    what: 'Programmation ouverte au public',
    detail: 'Cafés-théâtres, lieux culturels, caves et festivals.',
  },
];

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        colorway="lilac"
        kicker="Conférence-expérience · projet en création"
        lines={['Le vin,', 'vecteur', 'd’émotion']}
        script="une autre façon d'en parler"
        scriptX="4%"
        scriptScale={0.34}
        scriptAvailable="min(calc(100vw - 3rem), 40rem)"
        lead="Le vin est bien plus qu'une boisson. Une conférence vivante mêlant récit, dégustation, échanges et rencontres — dont chaque représentation sera différente."
        photo={{
          src: '/photos/sabrina_photo_58.jpg',
          alt: 'Sabrina Carlier prenant la parole devant un public assis',
        }}
      />

      {/* ── QUESTIONS ────────────────────────────────────────────────────── */}
      <section data-cw="ink" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <ol className="grid gap-10 md:grid-cols-3">
            {QUESTIONS.map((q, i) => (
              <Reveal key={q} delay={i * 80}>
                <li
                  className="border-t-2 pt-6"
                  style={{ borderColor: 'var(--display)' }}
                >
                  <span className="t-label" style={{ color: 'var(--display)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="t-lead mt-4">{q}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="t-lead" style={{ color: 'var(--quiet)' }}>
                Le vin est bien plus qu&apos;une boisson.
              </p>
              {IS_MORE.map((line) => (
                <p
                  key={line}
                  className="t-display text-[length:var(--text-display-sm)] leading-tight"
                  style={{ color: 'var(--display)' }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="lg:col-span-7">
              <div className="prose-editorial measure">
                {APPROACH.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE SHAPE ────────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="t-label" style={{ color: 'var(--quiet)' }}>
                  Une conférence qui se construit avec le public
                </p>
                <h2 className="t-display mt-4 text-[length:var(--text-display-md)]">
                  Selon les formats
                </h2>
                <p className="t-lead measure mt-6">
                  Le projet est actuellement en création. J&apos;imagine une
                  expérience vivante, où la conférence pourra intégrer :
                </p>

                <ul className="mt-8 max-w-2xl">
                  {INGREDIENTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-t py-3.5"
                      style={{ borderColor: 'var(--rule)' }}
                    >
                      <span aria-hidden="true" className="shrink-0" style={{ color: 'var(--accent)' }}>
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="t-script mt-10 text-[clamp(1.5rem,3.5vw,2.5rem)] text-flame">
                  Chaque représentation pourra être différente.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-28">
                <PhotoPlate
                  src="/photos/sabrina_photo_57.jpg"
                  alt="Caméra sur pied installée avant une captation"
                  offset="var(--color-lilac)"
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATES ────────────────────────────────────────────────────────── */}
      <section data-cw="lilac" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="t-display text-[length:var(--text-display-md)]" style={{ color: 'var(--display)' }}>
            Premières représentations
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {DATES.map((d) => (
              <div
                key={d.when}
                className="border-t-2 pt-6"
                style={{ borderColor: 'var(--display)' }}
              >
                <p className="t-label" style={{ color: 'var(--accent)' }}>
                  {d.when}
                </p>
                <h3 className="t-display mt-3 text-[length:var(--text-display-sm)]">
                  {d.what}
                </h3>
                <p className="mt-3" style={{ color: 'var(--quiet)' }}>
                  {d.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="t-lead measure-wide mt-14">
            Vous êtes une entreprise, un théâtre, un domaine viticole, une école
            ou un organisateur d&apos;événements, et vous souhaitez être parmi
            les premiers à accueillir <em>Le vin, vecteur d&apos;émotion</em> ?
            Je serais heureuse d&apos;échanger avec vous.
          </p>
        </div>
      </section>

      <ContactForm defaultSubject="Conférence « Le vin, vecteur d’émotion »" />
    </>
  );
}
