import { substackImage, substackSrcSet } from '@/lib/substack';

interface PostCoverProps {
  src: string;
  alt?: string;
  sizes: string;
  /** Solid colour block offset behind the photo, as on PhotoPlate. */
  offset?: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
}

/**
 * A post's cover, framed like the site's own PhotoPlate — flat offset block,
 * no radius, film grain — but served straight from Substack's image CDN at
 * the right width, rather than run through a second optimiser.
 */
export default function PostCover({
  src,
  alt = '',
  sizes,
  offset,
  ratio = 'aspect-[3/2]',
  priority = false,
  className = '',
}: PostCoverProps) {
  return (
    <div className={`relative ${className}`}>
      {offset ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5"
          style={{ backgroundColor: offset }}
        />
      ) : null}

      <div className={`relative isolate ${ratio} w-full overflow-hidden bg-ink`}>
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
