'use client';

import { useEffect, useRef, useState } from 'react';
import type { Role } from '@/content/parcours';

/**
 * The career history as a rail you travel down rather than a wall of text.
 *
 * Three quiet mechanics, all decoration over content that is fully present in
 * the server-rendered markup:
 *   · a progress line that fills as the section scrolls past,
 *   · the role currently in view marking itself active,
 *   · its period sticking alongside its own bullet list while you read it.
 *
 * Everything degrades to a plain list under reduced-motion or without JS.
 */
export default function Timeline({ roles }: { roles: Role[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rail = railRef.current;
        if (!rail) return;
        if (reduced) {
          setProgress(1);
          return;
        }
        const r = rail.getBoundingClientRect();
        const mid = window.innerHeight * 0.55;
        // 0 when the rail's top reaches the reading line, 1 at its bottom.
        setProgress(Math.min(1, Math.max(0, (mid - r.top) / r.height)));
      });
    };

    onScroll();
    if (reduced) return () => cancelAnimationFrame(frame);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = nodes.indexOf(entry.target as HTMLLIElement);
          if (i >= 0) setActive(i);
        }
      },
      // A narrow band across the upper-middle of the viewport, so exactly one
      // role is "current" at a time rather than every visible one.
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [roles.length]);

  return (
    <div ref={railRef} className="relative mt-12">
      {/* Rail */}
      <div
        aria-hidden="true"
        className="absolute left-[7px] top-2 hidden w-px sm:block"
        style={{ bottom: '0.5rem', background: 'var(--rule)' }}
      >
        <div
          className="w-px origin-top"
          style={{
            height: `${progress * 100}%`,
            background: 'var(--accent)',
            transition: 'height 120ms linear',
          }}
        />
      </div>

      <ol>
        {roles.map((role, i) => {
          const isActive = i === active;
          return (
            <li
              key={role.period + role.place}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative py-10 sm:pl-12"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-[3.1rem] hidden h-[15px] w-[15px] rounded-full border-2 transition-colors duration-300 sm:block"
                style={{
                  borderColor: isActive ? 'var(--accent)' : 'var(--rule)',
                  background: isActive ? 'var(--accent)' : 'var(--ground)',
                }}
              />

              <div
                className="border-t pt-8 transition-opacity duration-500"
                style={{
                  borderColor: 'var(--rule)',
                  opacity: isActive ? 1 : 0.72,
                }}
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28">
                      <p
                        className="t-label transition-colors duration-300"
                        style={{ color: isActive ? 'var(--accent)' : 'var(--quiet)' }}
                      >
                        {role.period}
                      </p>
                      {role.kind ? (
                        <p className="t-ui mt-3 text-xs" style={{ color: 'var(--quiet)' }}>
                          {role.kind}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <h3 className="t-display text-[length:var(--text-display-sm)]">
                      {role.role}
                    </h3>
                    <p className="t-script t-script-sm mt-2 text-electric">
                      {role.place}
                    </p>

                    <ul className="mt-5 max-w-3xl">
                      {role.highlights.map((h, hi) => (
                        /*
                         * The stagger is transform-only. Fading these rows
                         * would change their contrast against the ground,
                         * and the reduced-motion block in globals.css
                         * collapses the duration to nothing.
                         */
                        <li
                          key={h}
                          className="flex items-baseline gap-3 border-t py-2.5 t-small"
                          style={{
                            borderColor: 'var(--rule)',
                            transform: isActive ? 'none' : 'translateY(6px)',
                            transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
                            transitionDelay: `${hi * 45}ms`,
                          }}
                        >
                          <span aria-hidden="true" className="shrink-0 opacity-50">
                            —
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
