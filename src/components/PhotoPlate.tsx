import Image from 'next/image';
import type { CSSProperties } from 'react';

type Duo = 'electric' | 'flame' | 'mint' | 'lilac' | 'lemon' | 'none';

/** `strength` is how far the shadows are deepened, not the tint amount. */
const DUO: Record<Exclude<Duo, 'none'>, { light: string; strength: number }> = {
  electric: { light: 'var(--color-electric)', strength: 0.24 },
  flame: { light: 'var(--color-flame)', strength: 0.2 },
  mint: { light: 'var(--color-mint)', strength: 0.26 },
  lilac: { light: 'var(--color-lilac)', strength: 0.3 },
  lemon: { light: 'var(--color-lemon)', strength: 0.28 },
};

interface PhotoPlateProps {
  src: string;
  alt: string;
  /**
   * Duotone treatment. Use only where display type sits over the image —
   * candid photography elsewhere stays in full colour so it reads as real.
   */
  duo?: Duo;
  /** Solid colour block offset behind the photo. */
  offset?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Tailwind aspect ratio class. The library is almost entirely portrait. */
  ratio?: string;
  grain?: boolean;
}

/**
 * A photograph as an editorial plate: flat colour block offset behind it, no
 * radius, no drop shadow, optional duotone and film grain.
 */
export default function PhotoPlate({
  src,
  alt,
  duo = 'none',
  offset,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  ratio = 'aspect-[3/4]',
  grain = true,
}: PhotoPlateProps) {
  const duotone = duo !== 'none';
  const style = duotone
    ? ({
        '--duo-light': DUO[duo].light,
        '--duo-strength': DUO[duo].strength,
      } as CSSProperties)
    : undefined;

  return (
    <div className={`relative ${className}`}>
      {offset ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5"
          style={{ backgroundColor: offset }}
        />
      ) : null}

      <div
        className={`relative ${ratio} w-full overflow-hidden bg-ink ${
          duotone ? 'duotone' : 'isolate'
        }`}
        style={style}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        {grain ? <span aria-hidden="true" className="grain-layer" /> : null}
      </div>
    </div>
  );
}
