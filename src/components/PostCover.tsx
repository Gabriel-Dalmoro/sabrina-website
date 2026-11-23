import { substackImage, substackSrcSet } from '@/lib/substack';

interface PostCoverProps {
  src: string;
  alt?: string;
  sizes: string;
  /** Solid colour block offset behind the photo, as on PhotoPlate. */
  offset?: string;
  /**
   * The photo's real size. The frame takes its exact proportions, so nothing
   * is cropped; without it the frame falls back to 3:2.
   */
  size?: { width: number; height: number } | null;
  /**
   * Caps the frame's height, in vh, by narrowing it — never by cropping. A
   * tall portrait would otherwise fill several screens at full column width.
   */
  maxHeightVh?: number;
  priority?: boolean;
  className?: string;
}

/**
 * A post's cover, framed like the site's own PhotoPlate — flat offset block,
 * no radius, film grain — but served straight from Substack's image CDN at
 * the right width, rather than run through a second optimiser. Shown in the
 * shape she uploaded it in: landscape, portrait or square.
 */
export default function PostCover({
  src,
  alt = '',
  sizes,
  offset,
  size,
  maxHeightVh,
  priority = false,
  className = '',
}: PostCoverProps) {
  const ratio = size ? size.width / size.height : 3 / 2;
  const capped = maxHeightVh ? { maxWidth: `calc(${maxHeightVh}vh * ${ratio})` } : undefined;

  return (
    <div className={`relative ${className}`} style={capped}>
      {offset ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5"
          style={{ backgroundColor: offset }}
        />
      ) : null}

      <div
        className="relative isolate w-full overflow-hidden bg-ink"
        style={{ aspectRatio: String(ratio) }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Substack's CDN already resizes and converts; next/image would optimise it twice. */}
        <img
          src={substackImage(src, 1456)}
          srcSet={substackSrcSet(src)}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span aria-hidden="true" className="grain-layer" />
      </div>
    </div>
  );
}
