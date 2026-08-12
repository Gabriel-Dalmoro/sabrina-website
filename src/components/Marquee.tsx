import type { CSSProperties } from 'react';

interface MarqueeProps {
  items: string[];
  /** Seconds for one full pass. Longer = calmer. */
  duration?: number;
  className?: string;
  separator?: string;
}

function Track({
  items,
  separator,
  duplicate = false,
}: {
  items: string[];
  separator: string;
  duplicate?: boolean;
}) {
  return (
    <div className="marquee__track" aria-hidden={duplicate || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center gap-10">
          <span className="t-label whitespace-nowrap">{item}</span>
          <span aria-hidden="true" className="opacity-55">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Slow horizontal ticker. Two identical tracks scroll as one so the loop is
 * seamless; the duplicate is aria-hidden so the strip is announced once.
 *
 * Stops entirely under prefers-reduced-motion (see globals.css).
 */
export default function Marquee({
  items,
  duration = 44,
  className = '',
  separator = '✧',
}: MarqueeProps) {
  const style = { '--marquee-duration': `${duration}s` } as CSSProperties;

  return (
    <div className={`marquee ${className}`} style={style}>
      <Track items={items} separator={separator} />
      <Track items={items} separator={separator} duplicate />
    </div>
  );
}
