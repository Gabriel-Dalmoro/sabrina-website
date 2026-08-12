'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in ms, for sequences. */
  delay?: number;
}

/** Failsafe: never leave content hidden longer than this for a decoration. */
const MAX_HIDDEN_MS = 1200;

/**
 * Fades content up as it enters the viewport. Kept deliberately small — the
 * brief asked for movement and rhythm, not gimmicks.
 *
 * Driven by direct class changes rather than React state: the animation is
 * presentation only, nothing else re-reads it, and this avoids a re-render per
 * element on scroll.
 *
 * Three safeguards, because a decorative effect must never be able to swallow
 * the page's actual content:
 *   1. The server-rendered markup is visible; hiding only happens after mount,
 *      so no-JS and crawlers always see the text.
 *   2. Reduced-motion and missing IntersectionObserver skip the effect.
 *   3. A timeout reveals everything regardless if the observer never fires.
 */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    node.classList.add('reveal');

    const show = () => {
      node.dataset.shown = 'true';
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    observer.observe(node);
    const failsafe = window.setTimeout(() => {
      show();
      observer.disconnect();
    }, MAX_HIDDEN_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-shown="false"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
