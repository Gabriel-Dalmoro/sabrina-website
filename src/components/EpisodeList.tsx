'use client';

import { useState } from 'react';
import { EPISODES, PODCAST_EMBED_BASE } from '@/content/episodes';

/**
 * The 16 episodes as an editorial list that opens one player at a time.
 *
 * Each Radio France embed is a full third-party player; mounting all sixteen
 * up front would pull in sixteen of them before anyone pressed play. The
 * iframe is created only for the open episode and torn down when another is
 * chosen, so at most one is ever live.
 */
export default function EpisodeList() {
  const [openId, setOpenId] = useState<string | null>(EPISODES[0]?.id ?? null);

  return (
    <ol className="mt-14">
      {EPISODES.map((ep, i) => {
        const open = openId === ep.id;
        const panelId = `ep-panel-${ep.id}`;

        return (
          <li
            key={ep.id}
            className="border-t"
            style={{ borderColor: open ? 'var(--display)' : 'var(--rule)' }}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(open ? null : ep.id)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group flex w-full items-baseline gap-4 py-5 text-left sm:gap-6"
              >
                <span
                  className="t-label shrink-0 tabular-nums"
                  style={{ color: open ? 'var(--display)' : 'var(--quiet)' }}
                >
                  {String(EPISODES.length - i).padStart(2, '0')}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className="t-display block text-[length:var(--text-display-sm)] transition-colors"
                    style={{ color: open ? 'var(--display)' : 'var(--body)' }}
                  >
                    {ep.title}
                  </span>

                  <span className="t-ui mt-2 block text-xs" style={{ color: 'var(--quiet)' }}>
                    <time dateTime={ep.iso}>{ep.date}</time>
                    <span aria-hidden="true"> · </span>
                    {ep.duration}
                  </span>

                  {ep.description ? (
                    <span className="t-small measure mt-3 block" style={{ color: 'var(--quiet)' }}>
                      {ep.description}
                    </span>
                  ) : null}
                </span>

                <span
                  aria-hidden="true"
                  className="t-label shrink-0 self-center transition-transform group-hover:translate-x-0.5"
                  style={{ color: open ? 'var(--display)' : 'var(--quiet)' }}
                >
                  {open ? '— Fermer' : '▸ Écouter'}
                </span>
              </button>
            </h3>

            {open ? (
              <div id={panelId} className="pb-6">
                <iframe
                  src={`${PODCAST_EMBED_BASE}${ep.id}`}
                  title={`Lecteur France Bleu — ${ep.title}`}
                  width="100%"
                  height="144"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="block w-full border-0"
                />
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
