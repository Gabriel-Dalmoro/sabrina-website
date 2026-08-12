import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { ROLES, EDUCATION, SKILLS } from '@/content/parcours';

export const metadata = {
  title: 'Parcours',
  description:
    "Le parcours professionnel de Sabrina Carlier : direction d'exploitation, sommellerie, hôtellerie et restauration — de Theillard Genève à Wine You Want, en passant par la Maison Marc Veyrat et Christian Têtedoie.",
};

export default function ParcoursPage() {
  return (
    <>
      <PageHero
        colorway="ink"
        kicker="Direction d’exploitation · hôtellerie, restauration & expérience client"
        lines={['Trente ans', 'de terrain']}
        script="jamais derrière un bureau"
        scriptX="6%"
        scriptScale={0.36}
        scriptAvailable="min(calc(100vw - 3rem), 36rem)"
        lead="De la plonge à la direction. Des restaurants de quartier aux maisons étoilées, de Genève à Val d'Isère. Ouvertures, missions de transition, entrepreneuriat et sommellerie."
        photo={{
          src: '/photos/sabrina_photo_55.jpg',
          alt: 'Rangée de bouteilles alignées sur le bar d’un établissement',
        }}
      />

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section data-cw="paper" className="relative">
        <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <p className="t-label" style={{ color: 'var(--quiet)' }}>
            Expérience professionnelle
          </p>

          <ol className="mt-12">
            {ROLES.map((role, i) => (
              <Reveal key={role.period + role.place}>
                <li
                  className="grid gap-6 border-t-2 border-ink py-10 lg:grid-cols-12 lg:gap-12"
                  style={i === 0 ? undefined : { borderTopWidth: '1px', borderColor: 'var(--rule)' }}
                >
                  <div className="lg:col-span-4">
                    <p className="t-label" style={{ color: 'var(--accent)' }}>{role.period}</p>
                    {role.kind ? (
                      <p className="t-ui mt-3 text-xs" style={{ color: 'var(--quiet)' }}>
                        {role.kind}
                      </p>
                    ) : null}
                  </div>

                  <div className="lg:col-span-8">
                    <h2 className="t-display text-[length:var(--text-display-sm)]">
                      {role.role}
                    </h2>
                    <p className="t-script mt-1 text-[clamp(1.25rem,2.6vw,1.875rem)] text-electric">
                      {role.place}
                    </p>

                    <ul className="mt-5 max-w-3xl">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-baseline gap-3 border-t py-2.5 text-[0.9375rem]"
                          style={{ borderColor: 'var(--rule)' }}
                        >
                          <span aria-hidden="true" className="shrink-0 opacity-50">
                            —
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section data-cw="ink" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
          <h2
            className="t-display text-[length:var(--text-display-md)]"
            style={{ color: 'var(--display)' }}
          >
            Compétences
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill.title} delay={i * 40}>
                <div className="border-t pt-5" style={{ borderColor: 'var(--rule)' }}>
                  <h3 className="t-label" style={{ color: 'var(--display)' }}>
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem]" style={{ color: 'var(--quiet)' }}>
                    {skill.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION + CTA ──────────────────────────────────────────────── */}
      <section data-cw="lemon" className="relative">
        <span aria-hidden="true" className="grain-layer" />

        <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2
                className="t-display text-[length:var(--text-display-md)]"
                style={{ color: 'var(--display)' }}
              >
                Formation
              </h2>

              <ul className="mt-10">
                {EDUCATION.map((e) => (
                  <li
                    key={e.year}
                    className="flex items-baseline gap-6 border-t py-4"
                    style={{ borderColor: 'var(--rule)' }}
                  >
                    <span className="t-label shrink-0">{e.year}</span>
                    <span>{e.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 lg:pt-4">
              <p className="t-script text-[clamp(1.75rem,4vw,2.75rem)]" style={{ color: 'var(--script)' }}>
                Une mission de transition, une ouverture, une carte à repenser ?
              </p>
              <Link href="/contact" className="btn btn--solid mt-8">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
