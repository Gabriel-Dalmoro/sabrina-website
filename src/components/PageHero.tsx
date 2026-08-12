import LayeredTitle from './LayeredTitle';
import PhotoPlate from './PhotoPlate';

type Colorway = 'paper' | 'ink' | 'electric' | 'lemon' | 'lilac' | 'mint' | 'flame';

interface PageHeroProps {
  colorway: Colorway;
  kicker: string;
  lines: string[];
  /** Never pass on the `mint` colourway — teal cannot host a legible script. */
  script?: string;
  lead: string;
  scriptX?: string;
  scriptScale?: number;
  scriptAvailable?: string;
  photo?: { src: string; alt: string; duo?: 'electric' | 'flame' | 'mint' | 'lilac' | 'lemon' | 'none' };
}

export default function PageHero({
  colorway,
  kicker,
  lines,
  script,
  lead,
  scriptX = '5%',
  scriptScale = 0.4,
  scriptAvailable = 'min(calc(100vw - 3rem), 40rem)',
  photo,
}: PageHeroProps) {
  return (
    <section data-cw={colorway} className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-24">
        <p className="t-label" style={{ color: 'var(--quiet)' }}>
          {kicker}
        </p>

        {/* Top-aligned: the photo is taller than the text block, and bottom
            aligning it left a dead void above every page title. */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className={photo ? 'lg:col-span-7 lg:col-start-1' : 'lg:col-span-9'}>
            <LayeredTitle
              as="h1"
              lines={lines}
              script={script}
              size="lg"
              scriptX={scriptX}
              scriptScale={scriptScale}
              scriptAvailable={scriptAvailable}
            />
            <p className="t-lead measure-wide mt-10">{lead}</p>
          </div>

          {photo ? (
            /*
             * Narrower column and a squarer crop than the text block wants:
             * at col-span-5 / 4:5 the photo ran far taller than the title and
             * lead beside it, leaving a dead gap under every page heading.
             */
            <div className="lg:col-span-4 lg:col-start-9">
              <PhotoPlate
                src={photo.src}
                alt={photo.alt}
                duo={photo.duo ?? 'none'}
                ratio="aspect-[5/4] lg:aspect-square"
                priority
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
