interface BrushUnderlineProps {
  className?: string;
  /** Defaults to the current colourway's script colour. */
  color?: string;
}

/**
 * The hand-drawn swash that sits under the wordmark in the charte. Redrawn as
 * a path rather than an image so it inherits colour and scales cleanly.
 */
export default function BrushUnderline({
  className = '',
  color = 'var(--script)',
}: BrushUnderlineProps) {
  return (
    <svg
      viewBox="0 0 420 22"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M3 15.5C58 9.2 118.5 5.4 178 4.2c62-1.3 124.5.6 186.4 5.1 15.7 1.1 31.3 2.6 46.9 4.4-14.6.2-29.2-.1-43.8-.6-58.9-2.1-117.9-3-176.8-1.6C132 12.7 73.4 15.9 15.2 21c-4 .3-8.1.6-12.2.7"
        fill={color}
      />
    </svg>
  );
}
