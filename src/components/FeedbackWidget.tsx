'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { usePathname } from 'next/navigation';
import {
  cssPath,
  elementText,
  getNotesServerSnapshot,
  getNotesSnapshot,
  nearestSection,
  pageName,
  setNotes,
  subscribeNotes,
  toMarkdown,
  WIDGET_ATTR,
  type FeedbackNote,
} from '@/lib/feedback';

interface Target {
  selector: string;
  section: string;
  text: string;
  tag: string;
  rect: { top: number; left: number; width: number; height: number };
}

const REVIEW_EMAIL = 'gabriel@gabrieldalmoro.com';

/**
 * A review tool for Sabrina: point at anything on the page, write what you
 * think, and hand the whole lot over in one export.
 *
 * Notes live in localStorage on her machine — there is no backend, so nothing
 * is transmitted until she copies, downloads or emails them. That also means
 * notes are per-browser: she should export before switching device.
 *
 * Remove <FeedbackWidget /> from app/layout.tsx before the site goes public.
 */
export default function FeedbackWidget() {
  const pathname = usePathname();
  const notes = useSyncExternalStore(
    subscribeNotes,
    getNotesSnapshot,
    getNotesServerSnapshot,
  );
  const [panelOpen, setPanelOpen] = useState(false);
  const [picking, setPicking] = useState(false);
  const [hover, setHover] = useState<Target | null>(null);
  const [target, setTarget] = useState<Target | null>(null);
  const [draft, setDraft] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const persist = setNotes;

  const describe = useCallback((el: Element): Target => {
    const r = el.getBoundingClientRect();
    return {
      selector: cssPath(el),
      section: nearestSection(el),
      text: elementText(el),
      tag: el.tagName.toLowerCase(),
      rect: { top: r.top, left: r.left, width: r.width, height: r.height },
    };
  }, []);

  // ── Element picking ────────────────────────────────────────────────────
  useEffect(() => {
    if (!picking) return;

    const pick = (x: number, y: number): Element | null => {
      const el = document.elementFromPoint(x, y);
      if (!el || el.closest(`[${WIDGET_ATTR}]`)) return null;
      if (el === document.body || el === document.documentElement) return null;
      return el;
    };

    const onMove = (e: PointerEvent) => {
      const el = pick(e.clientX, e.clientY);
      setHover(el ? describe(el) : null);
    };

    const onClick = (e: MouseEvent) => {
      const el = pick(e.clientX, e.clientY);
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      setTarget(describe(el));
      setHover(null);
      setPicking(false);
      setPanelOpen(true);
      requestAnimationFrame(() => textareaRef.current?.focus());
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPicking(false);
        setHover(null);
      }
    };

    document.addEventListener('pointermove', onMove, true);
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKey, true);
    document.body.style.cursor = 'crosshair';

    return () => {
      document.removeEventListener('pointermove', onMove, true);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKey, true);
      document.body.style.cursor = '';
    };
  }, [picking, describe]);

  const addNote = () => {
    if (!draft.trim()) return;
    const note: FeedbackNote = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      path: pathname,
      section: target?.section ?? '',
      text: target?.text ?? '',
      tag: target?.tag ?? 'page',
      selector: target?.selector ?? '(page entière)',
      note: draft.trim(),
      at: new Date().toISOString(),
      viewport: window.innerWidth,
    };
    persist([...notes, note]);
    setDraft('');
    setTarget(null);
  };

  const fileName = `retours-sabrina-${new Date().toISOString().slice(0, 10)}.md`;

  const download = () => {
    const blob = new Blob([toMarkdown(notes)], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  const onThisPage = notes.filter((n) => n.path === pathname).length;
  const highlight = hover ?? (target && picking ? null : target);

  return (
    <div {...{ [WIDGET_ATTR]: 'true' }} className="fixed inset-0 z-[999] pointer-events-none">
      {/* Highlight box over the hovered / selected element */}
      {highlight ? (
        <div
          className="pointer-events-none fixed transition-all duration-75"
          style={{
            top: highlight.rect.top,
            left: highlight.rect.left,
            width: highlight.rect.width,
            height: highlight.rect.height,
            outline: '2px solid #FF4F14',
            outlineOffset: 2,
            background: 'rgba(255, 79, 20, 0.10)',
          }}
        >
          <span
            className="absolute left-0 top-full mt-1.5 max-w-[80vw] truncate bg-flame px-2 py-1 text-[11px] font-medium text-white"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {highlight.text || `<${highlight.tag}>`}
          </span>
        </div>
      ) : null}

      {/* Picking banner */}
      {picking ? (
        <div
          className="pointer-events-auto fixed left-1/2 top-5 -translate-x-1/2 bg-ink px-4 py-3 text-sm text-paper shadow-lg"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Cliquez sur l&apos;élément à commenter
          <button
            type="button"
            onClick={() => setPicking(false)}
            className="ml-4 underline underline-offset-2"
          >
            Annuler (Échap)
          </button>
        </div>
      ) : null}

      {/* Panel */}
      {panelOpen ? (
        <div
          className="pointer-events-auto fixed bottom-24 right-5 flex max-h-[min(70vh,44rem)] w-[min(92vw,25rem)] flex-col border-2 border-ink bg-paper shadow-2xl"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <div className="flex items-center justify-between border-b-2 border-ink px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-ink">Vos retours</p>
              <p className="text-[11px] text-ink/60">
                {notes.length} au total · {onThisPage} sur cette page
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              aria-label="Fermer"
              className="px-2 py-1 text-lg leading-none text-ink/60 hover:text-ink"
            >
              ×
            </button>
          </div>

          {/* Composer */}
          <div className="border-b border-ink/15 p-4">
            {target ? (
              <p className="mb-2 border-l-2 border-flame pl-2 text-[11px] text-ink/70">
                {target.text ? `« ${target.text} »` : `<${target.tag}>`}
              </p>
            ) : (
              <p className="mb-2 text-[11px] text-ink/60">
                Retour général sur la page « {pageName(pathname)} »
              </p>
            )}

            <textarea
              ref={textareaRef}
              rows={3}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ce que vous en pensez, ce qu'il faudrait changer…"
              className="w-full border border-ink/30 bg-white p-2.5 text-sm text-ink outline-none focus:border-flame"
            />

            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={addNote}
                disabled={!draft.trim()}
                className="flex-1 bg-ink px-3 py-2 text-xs font-semibold text-paper disabled:opacity-40"
              >
                Enregistrer
              </button>
              <button
                type="button"
                onClick={() => {
                  setPanelOpen(false);
                  setTarget(null);
                  setPicking(true);
                }}
                className="border border-ink px-3 py-2 text-xs font-semibold text-ink"
              >
                Pointer un élément
              </button>
            </div>
          </div>

          {/* Notes. The floor stops the list collapsing to nothing once the
              post-download instructions expand the panel below it. */}
          <div className="min-h-[7rem] flex-1 overflow-y-auto">
            {notes.length === 0 ? (
              <p className="p-4 text-xs text-ink/50">
                Aucun retour pour l&apos;instant. Cliquez sur « Pointer un
                élément » puis sur n&apos;importe quoi sur la page.
              </p>
            ) : (
              <ul>
                {notes
                  .slice()
                  .reverse()
                  .map((n) => (
                    <li key={n.id} className="border-b border-ink/10 px-4 py-3">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[10px] uppercase tracking-wide text-ink/50">
                          {pageName(n.path)}
                          {n.text ? ` · ${n.text.slice(0, 30)}…` : ''}
                        </p>
                        <button
                          type="button"
                          onClick={() => persist(notes.filter((x) => x.id !== n.id))}
                          aria-label="Supprimer ce retour"
                          className="shrink-0 text-xs text-ink/40 hover:text-flame"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="mt-1 whitespace-pre-wrap text-sm text-ink">{n.note}</p>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Export */}
          {notes.length > 0 ? (
            <div className="border-t-2 border-ink p-3">
              <button
                type="button"
                onClick={download}
                className="w-full bg-flame px-3 py-2.5 text-xs font-semibold text-white"
              >
                {downloaded
                  ? 'Télécharger à nouveau'
                  : `Télécharger mes ${notes.length} retour${notes.length > 1 ? 's' : ''}`}
              </button>

              {downloaded ? (
                <div className="mt-3 border border-ink/25 bg-white p-3">
                  <p className="text-xs font-semibold text-ink">
                    C&apos;est téléchargé — dernière étape !
                  </p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-ink/70">
                    Le fichier <strong>{fileName}</strong> se trouve dans vos
                    téléchargements. Envoyez-le simplement en pièce jointe à
                    Gabriel :
                  </p>
                  <a
                    href={`mailto:${REVIEW_EMAIL}?subject=${encodeURIComponent(
                      'Mes retours sur le site',
                    )}&body=${encodeURIComponent(
                      `Bonjour Gabriel,\n\nVoici mes retours sur le site — le fichier est en pièce jointe.\n\n(N'oubliez pas de joindre ${fileName}, il est dans vos téléchargements.)\n\nBelle journée,\nSabrina`,
                    )}`}
                    className="mt-2 block bg-ink px-3 py-2 text-center text-xs font-semibold text-paper"
                  >
                    Écrire à {REVIEW_EMAIL}
                  </a>
                  <p className="mt-2 text-[10px] leading-snug text-ink/50">
                    Le mail s&apos;ouvre pré-rempli : il ne reste qu&apos;à
                    glisser le fichier dedans avant d&apos;envoyer.
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-[10px] leading-snug text-ink/50">
                  Vos retours sont enregistrés dans ce navigateur uniquement.
                  Téléchargez-les avant de changer d&apos;appareil.
                </p>
              )}
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Launcher */}
      <button
        type="button"
        onClick={() => {
          if (picking) {
            setPicking(false);
            return;
          }
          setPanelOpen((v) => !v);
        }}
        aria-label={`Donner un retour${notes.length ? ` (${notes.length} enregistrés)` : ''}`}
        className="pointer-events-auto fixed bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-xl transition-transform hover:scale-105"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {notes.length > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-flame px-1.5 text-[11px] font-bold text-white">
            {notes.length}
          </span>
        ) : null}
      </button>
    </div>
  );
}
