import PageHero from '@/components/PageHero';
import PhotoPlate from '@/components/PhotoPlate';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Bienvenue à ma table — ateliers & dîners',
  description:
    "Ateliers dégustation, wine dinners et dîners à quatre mains créés sur mesure par Sabrina Carlier, pour des entreprises, des équipes et des groupes privés.",
};

/**
 * Sabrina's text from "Page 4 — Bienvenue à ma table". Written as a litany of
 * "il y a eu…", so it is set as one — a list of real evenings rather than a
 * grid of service cards. The specificity is the credibility.
 */
const EVENINGS = [
  "Il y a eu des dîners au cœur d'une forêt. D'autres dans un potager, dans un loft annécien, dans mon bar à vin, sur la terrasse de l'Antiquaille qui domine Lyon, dans une cave des Halles, au caveau de Wine You Want.",
  "Il y a eu des dîners à quatre mains avec des chefs que j'aime profondément. Un atelier dans une suite face au lac d'Annecy. Ceux du Lyon Street Food Festival sous quarante degrés. Et ceux, à plus de 2 500 mètres d'altitude à Val d'Isère, pendant que dehors la neige tombait.",
  "Il y a eu des ateliers pour quatre personnes. D'autres pour soixante. Des wine dinners réunissant cent convives autour de la même table, avec des vignerons comme invités d'honneur. Des battles entre sommeliers où les régions viticoles s'affrontaient avec passion.",
  "Il y a eu des dégustations avec les chocolats Voisin, avec la Maison Kaviari, autour de la cuisine bourgeoise avec Hubert Vergoin aux fourneaux, autour du Pérou et de l'extraordinaire Gonzalo, des huîtres, de la street food, des fromages…",
  "Il y a eu ces ateliers où, avec Nicolas Mielly, nous ouvrions de vieux millésimes de La Chapelle de Paul Jaboulet Aîné. Et ceux où je laissais volontiers la parole à ce grand orateur qu'est Amine Ghanem pour présenter mes premières Plénitude 2 de Dom Pérignon.",
  "Il y a eu les dégustations consacrées aux vieux millésimes de Bordeaux pour l'Union des Grands Crus de Bordeaux. Et les plus intimistes, imaginées pour célébrer un cinquantième anniversaire autour des cinquante vins qu'il fallait, selon moi, avoir goûtés avant ses cinquante ans.",
  "Il y a eu cet atelier si particulier animé avec ma fille aînée, tout juste diplômée de Ferrandi Paris.",
  "Il y a eu ces soirées où les vignerons, les brasseurs et les producteurs s'asseyaient simplement à table avec nous. Et celles où mon ami Teddy arrivait avec quelques vieux spiritueux dont il a le secret.",
];

const NO_FORMAT = [
  "Au fond, je n'ai jamais vraiment eu de format.",
  "Je n'ai pas de déroulé figé.",
  'Pas de recette.',
];

const WHAT_I_LIKE = [
  'Réunir des personnes autour d’une table.',
  'Goûter.',
  'Échanger.',
  'Dire ce que l’on ressent plutôt que ce que l’on croit devoir ressentir.',
  'Raconter les histoires de celles et ceux qui cultivent la terre.',
];

export default function AteliersPage() {
  return (
    <>
      <PageHero
        colorway="lemon"
        kicker="Entreprises, équipes & groupes privés"
        lines={['Bienvenue', 'à ma table']}
        script="chaque table est différente"
        scriptX="6%"
        scriptScale={0.34}
        scriptAvailable="min(calc(100vw - 3rem), 42rem)"
        lead="Des ateliers pour quatre personnes, des wine dinners pour cent. En forêt, dans un potager, à 2 500 mètres d'altitude. Aucun déroulé figé — parce que chaque table appelle autre chose."
        photo={{
          src: '/photos/sabrina_photo_54.jpg',
          alt: 'Longue tablée de convives lors d’un wine dinner dans une cave voûtée',
        }}
      />

      {/* ── THE EVENINGS ─────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label" style={{ color: 'var(--quiet)' }}>
              Ce qu&apos;il y a eu
            </p>
            <h2 className="t-display mt-4 text-[length:var(--text-display-md)]">
              Des lieux, des chefs,
              <br />
              des moments suspendus
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal className="prose-editorial measure">
                {EVENINGS.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="space-y-8 lg:sticky lg:top-28">
                <PhotoPlate
                  src="/photos/sabrina_photo_42.jpg"
                  alt="Table dressée de fromages, pain et bouteilles ouvertes dans une cave"
                  offset="var(--color-mint)"
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <PhotoPlate
                  src="/photos/sabrina_photo_16.jpg"
                  alt="Terrasse enneigée en altitude à Val d’Isère"
                  ratio="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── NO FORMAT ────────────────────────────────────────────────────── */}
      <section data-cw="ink" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              {NO_FORMAT.map((line) => (
                <p
                  key={line}
                  className="t-display text-[length:var(--text-display-sm)] leading-tight"
                  style={{ color: 'var(--display)' }}
                >
                  {line}
                </p>
              ))}

              <p className="t-lead mt-8" style={{ color: 'var(--quiet)' }}>
                La seule chose que j&apos;aime, c&apos;est :
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul>
                {WHAT_I_LIKE.map((item) => (
                  <li
                    key={item}
                    className="border-t py-4 text-lg"
                    style={{ borderColor: 'var(--rule)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="t-script mt-10 text-[clamp(1.75rem,4vw,2.75rem)]" style={{ color: 'var(--script)' }}>
                Parce que chaque table l&apos;est aussi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm defaultSubject="Atelier ou dîner en entreprise" />
    </>
  );
}
