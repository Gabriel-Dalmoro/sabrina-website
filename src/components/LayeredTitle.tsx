import type { CSSProperties, ElementType } from 'react';

type Size = 'xl' | 'lg' | 'md' | 'sm';

const SIZE_CLASS: Record<Size, string> = {
  xl: 'text-[length:var(--text-display-xl)]',
  lg: 'text-[length:var(--text-display-lg)]',
  md: 'text-[length:var(--text-display-md)]',
  sm: 'text-[length:var(--text-display-sm)]',
};

interface LayeredTitleProps {
  /** Display lines, set in Anton. Each entry is its own line. */
  lines: string[];
  /** The brush-script phrase laid across the display type. */
  script?: string;
  size?: Size;
  as?: ElementType;
  className?: string;
  /** Horizontal start of the script, as a percentage of the block width. */
  scriptX?: string;
  /**
   * Fine-tune how deep the script bites into the display type. `0` is the
   * tuned default (~25% of cap height); negative pushes it further down.
   */
  scriptY?: string;
  /** Script size as a fraction of the display size. */
  scriptScale?: number;
  scriptRotate?: number;
  /**
   * Width the script has to fit into. Defaults to the viewport minus typical
   * page padding; pass a tighter value inside narrow columns.
   */
  scriptAvailable?: string;
}

/**
 * The signature move from the Les 400 Coups artwork: a flat Anton headline
 * with the brush script laid diagonally across its lower third.
 *
 * The script is absolutely positioned and set `nowrap`, so it would happily
 * run off a phone screen. Rather than hiding it — it carries half the brand —
 * its size is capped against the available width using its own character
 * count, so long phrases shrink to fit instead of overflowing.
 */
export default function LayeredTitle({
  lines,
  script,
  size = 'lg',
  as: Tag = 'h2',
  className = '',
  scriptX = '4%',
  scriptY = '0',
  scriptScale = 0.52,
  scriptRotate = -4.5,
  scriptAvailable = 'calc(100vw - 3rem)',
}: LayeredTitleProps) {
  const style = {
    '--script-x': scriptX,
    '--script-y': scriptY,
    '--script-rot': `${scriptRotate}deg`,
    '--script-size': `${scriptScale}em`,
    '--script-chars': script?.length ?? 1,
    '--script-avail': scriptAvailable,
  } as CSSProperties;

  return (
    <Tag className={`layered ${SIZE_CLASS[size]} ${className}`} style={style}>
      <span className="t-display layered__display">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </span>

      {/* Deliberately not aria-hidden: the script phrase completes the
          sentence, so it belongs in the heading's accessible name. */}
      {script ? (
        <span className="t-script layered__script text-[length:min(var(--script-size),calc(var(--script-avail)/(var(--script-chars)*0.46)))]">
          {script}
        </span>
      ) : null}
    </Tag>
  );
}
