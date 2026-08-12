import PageHero from '@/components/PageHero';
import PhotoPlate from '@/components/PhotoPlate';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Écoles & formations',
  description:
    "Interventions en écoles supérieures et formations professionnelles : hospitalité, management, sommellerie et entrepreneuriat. Sabrina Carlier, intervenante à l'ISG Luxury Management Lyon et Genève.",
};

/** Verbatim from "Page 5 — École et Formation". */
const DOMAINS = [
  {
    title: 'Hospitalité & expérience client',
    items: [
      "Les fondamentaux de l'hospitalité",
      "L'expérience client",
      'Les nouveaux codes de la restauration',
      "L'hôtellerie lifestyle et les palaces",
    ],
  },
  {
    title: 'Management',
    items: [
      'Manager une équipe en restauration',
      'Recruter et fidéliser',
      "Construire une culture d'entreprise",
      'Gérer une ouverture',
      'Accompagner le changement',
      'Leadership de terrain',
    ],
  },
  {
    title: 'Vin & sommellerie',
    items: [
      'Initiation à la dégustation',
      'Construire une carte des vins',
      'Accords mets-vins',
      'Storytelling autour du vin',
      "L'émotion dans la dégustation",
    ],
  },
  {
    title: 'Entrepreneuriat',
    items: [
      'Concevoir un concept de restaurant',
      'Construire une offre',
      'Développer un projet',
      "Ouverture d'établissement",
    ],
  },
];

export default function FormationsPage() {
  return (
    <>
      {/* No script on the mint colourway — see the note in globals.css. */}
      <PageHero
        colorway="mint"
        kicker="Écoles supérieures & équipes en poste"
        lines={['Écoles &', 'formations']}
        lead="Trente ans de terrain, transmis à celles et ceux qui arrivent. Intervenante à l'ISG Luxury Management de Lyon et de Genève, en hospitalité et wine business — et auprès des équipes qui veulent remettre l'accueil au centre."
        photo={{
          src: '/photos/sabrina_photo_56.jpg',
          alt: 'Sabrina Carlier animant une session autour de bouteilles, face à un groupe',
        }}
      />

      {/* ── SCHOOL ───────────────────────────────────────────────────────── */}
      <section data-cw="ink" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <p className="t-label" style={{ color: 'var(--quiet)' }}>
                Référence académique
              </p>
              <h2
                className="t-display mt-4 text-[length:var(--text-display-md)]"
                style={{ color: 'var(--display)' }}
              >
                ISG Luxury Management
              </h2>
              <p className="t-lead mt-4">
                Genève et Lyon — intervenante en Hospitality &amp; Wine.
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="t-script t-script-md" style={{ color: 'var(--script)' }}>
                On n&apos;enseigne bien que ce qu&apos;on a vraiment fait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOMAINS ──────────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label" style={{ color: 'var(--quiet)' }}>
              Programmes
            </p>
            <h2 className="t-display mt-4 text-[length:var(--text-display-md)]">
              Mes domaines
              <br />
              d&apos;intervention
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2">
                {DOMAINS.map((domain, i) => (
                  <Reveal key={domain.title} delay={i * 60}>
                    <div className="flex items-baseline gap-4">
                      <span className="t-label" style={{ color: 'var(--accent)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="t-display text-[length:var(--text-display-sm)]">
                        {domain.title}
                      </h3>
                    </div>

                    <ul className="mt-5">
                      {domain.items.map((item) => (
                        <li
                          key={item}
                          className="border-t py-2.5 t-small"
                          style={{ borderColor: 'var(--rule)' }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <Reveal className="lg:sticky lg:top-28">
                <PhotoPlate
                  src="/photos/sabrina_photo_01.jpg"
                  alt="Promotion d’étudiants pendant un cours de Sabrina Carlier"
                  offset="var(--color-lilac)"
                  ratio="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <p className="t-ui mt-6 text-xs" style={{ color: 'var(--quiet)' }}>
                  Chaque module s&apos;adapte au niveau du groupe et au temps
                  disponible — d&apos;une intervention ponctuelle à un cycle
                  complet.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ContactForm defaultSubject="Intervention en école ou formation" />
    </>
  );
}
