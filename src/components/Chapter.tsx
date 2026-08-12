import Link from 'next/link';
import PhotoPlate from './PhotoPlate';
import Reveal from './Reveal';

export interface ChapterData {
  number: string;
  /** Who it is for — answers "what does she actually do" at a glance. */
  audience: string;
  title: string;
  /** Omit on the `mint` colourway — teal cannot host a legible script. */
  script?: string;
  body: string;
  /** Concrete formats. The brief's worst outcome is "I don't get what she does". */
  points: string[];
  href: string;
  cta: string;
  photo: string;
  alt: string;
  colorway: 'electric' | 'lemon' | 'mint' | 'lilac';
  duo: 'electric' | 'flame' | 'mint' | 'lilac' | 'lemon' | 'none';
}

/**
 * One of the four ways to work with Sabrina, as a full-bleed colour block
 * rather than a card in a grid. Alternating the image side gives the page its
 * rhythm as you scroll.
 */
export default function Chapter({
  chapter,
  flip = false,
}: {
  chapter: ChapterData;
  flip?: boolean;
}) {
  return (
    <section data-cw={chapter.colorway} className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal
            className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}
          >
            <PhotoPlate
              src={chapter.photo}
              alt={chapter.alt}
              duo={chapter.duo}
              ratio="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>

          <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:row-start-1' : ''}`}>
            <div className="flex items-baseline gap-4">
              <span
                className="t-display text-[length:var(--text-display-md)] leading-none"
                style={{ color: 'var(--display)' }}
              >
                {chapter.number}
              </span>
              <span className="t-label" style={{ color: 'var(--quiet)' }}>
                {chapter.audience}
              </span>
            </div>

            <h3 className="layered mt-5 text-[length:var(--text-display-md)]">
              <span className="t-display layered__display">{chapter.title}</span>
            </h3>

            {chapter.script ? (
              <p
                className="t-script mt-2 t-script-md"
                style={{ color: 'var(--script)' }}
              >
                {chapter.script}
              </p>
            ) : null}

            <p className="t-lead measure-wide mt-6">{chapter.body}</p>

            <ul className="mt-8 max-w-lg">
              {chapter.points.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-3 border-t py-2.5 t-small"
                  style={{ borderColor: 'var(--rule)' }}
                >
                  <span aria-hidden="true" className="shrink-0 opacity-60">
                    —
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link href={chapter.href} className="btn btn--ghost mt-9">
              {chapter.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
