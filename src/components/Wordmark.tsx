import BrushUnderline from './BrushUnderline';

interface WordmarkProps {
  className?: string;
  /** Size of the name itself. */
  size?: string;
  underline?: boolean;
}

/**
 * ─────────────────────────────────────────────────────────────────────────
 * LOGO SLOT — placeholder.
 *
 * Sabrina is supplying a new logo; this is a typographic stand-in built from
 * the charte (Anton + the brush swash) so nothing here depends on the old
 * "Les 400 Coups" mark. Swapping it is a single-file change: replace the
 * markup below with the supplied asset and leave every call site alone.
 * ─────────────────────────────────────────────────────────────────────────
 */
export default function Wordmark({
  className = '',
  size = 'text-xl sm:text-2xl',
  underline = true,
}: WordmarkProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`t-display block ${size}`}>Sabrina Carlier</span>
      {underline ? (
        <BrushUnderline className="absolute -bottom-1.5 left-0 h-[0.3em] w-full" />
      ) : null}
    </span>
  );
}
