import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { CONTACT_EMAIL, PODCAST_URL } from '@/lib/nav';

export const metadata = {
  title: 'Contact',
  description:
    "Contacter Sabrina Carlier pour un atelier, un dîner en entreprise, une intervention en école, une chronique radio ou une conférence.",
};

const WHO = [
  {
    title: 'Entreprises & équipes',
    body: 'Ateliers, wine dinners, séminaires, soirées clients, team building autour du vin.',
  },
  {
    title: 'Écoles & organismes de formation',
    body: 'Hospitalité, management, sommellerie, entrepreneuriat — interventions ponctuelles ou cycles.',
  },
  {
    title: 'Radios & médias',
    body: 'Chroniques courtes, portraits de vignerons, thématiques de saison.',
  },
  {
    title: 'Scènes, théâtres & festivals',
    body: '« Le vin, vecteur d’émotion » — à partir de l’automne 2026.',
  },
  {
    title: 'Établissements',
    body: "Missions de transition, ouvertures, cartes des vins, accompagnement d'équipes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        colorway="flame"
        kicker="Écrivez-moi"
        lines={['On en', 'parle ?']}
        script="j'étudie tout"
        scriptX="10%"
        scriptScale={0.44}
        scriptAvailable="min(calc(100vw - 3rem), 26rem)"
        lead="Une envie, une date, un lieu, un budget encore flou — écrivez quand même. Le pire qui puisse arriver, c'est une bonne conversation."
        photo={{
          src: '/photos/sabrina_photo_43.jpg',
          alt: 'Sabrina Carlier entourée de son équipe, sourires en fin de service',
        }}
      />

      <ContactForm />

      {/* ── WHO WRITES ───────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="t-display text-[length:var(--text-display-sm)]">
                Qui m&apos;écrit
              </h2>
              <p className="t-lead mt-6" style={{ color: 'var(--quiet)' }}>
                Basée à Lyon. Interventions régulières en Rhône-Alpes, à Genève,
                à Paris et partout où il y a une table.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 block underline underline-offset-4"
                style={{ color: 'var(--accent)' }}
              >
                {CONTACT_EMAIL}
              </a>

              <a
                href={PODCAST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label mt-6 block underline underline-offset-4"
              >
                Écouter « Les 400 Coups » ↗
              </a>
            </div>

            <div className="lg:col-span-8">
              <ul className="grid gap-x-12 sm:grid-cols-2">
                {WHO.map((w) => (
                  <li
                    key={w.title}
                    className="border-t py-5"
                    style={{ borderColor: 'var(--rule)' }}
                  >
                    <h3 className="t-label">{w.title}</h3>
                    <p className="mt-2.5 t-small" style={{ color: 'var(--quiet)' }}>
                      {w.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
