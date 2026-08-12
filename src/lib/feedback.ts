export interface FeedbackNote {
  id: string;
  /** Route the note was left on. */
  path: string;
  /** Nearest heading above the element — the fastest way to find it again. */
  section: string;
  /** Visible text of the element, truncated. */
  text: string;
  /** Tag name, for when the element has no text (an image, a rule). */
  tag: string;
  selector: string;
  note: string;
  at: string;
  viewport: number;
}

export const STORAGE_KEY = 'sabrina-feedback-v1';

/** Elements belonging to the widget itself are never selectable targets. */
export const WIDGET_ATTR = 'data-feedback-ui';

export function loadNotes(): FeedbackNote[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes: FeedbackNote[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    // Private browsing or a full quota — the notes stay in memory for this
    // session rather than taking the widget down.
  }
}

/* --------------------------------------------------------------------------
   Store

   Exposed as an external store rather than component state seeded in an
   effect: localStorage does not exist while rendering on the server, and
   useSyncExternalStore handles that split properly — it renders the empty
   server snapshot during hydration, then swaps in the real notes.
   -------------------------------------------------------------------------- */

const EMPTY: FeedbackNote[] = [];
let cache: FeedbackNote[] | null = null;
const listeners = new Set<() => void>();

export function subscribeNotes(onChange: () => void) {
  listeners.add(onChange);

  // Keep two tabs of the same review session in step.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;
    cache = loadNotes();
    listeners.forEach((l) => l());
  };
  window.addEventListener('storage', onStorage);

  return () => {
    listeners.delete(onChange);
    window.removeEventListener('storage', onStorage);
  };
}

/** Must return a referentially stable value between changes. */
export function getNotesSnapshot(): FeedbackNote[] {
  if (cache === null) cache = loadNotes();
  return cache;
}

export function getNotesServerSnapshot(): FeedbackNote[] {
  return EMPTY;
}

export function setNotes(next: FeedbackNote[]) {
  cache = next;
  saveNotes(next);
  listeners.forEach((l) => l());
}

/**
 * A CSS path good enough to re-find the element later. Prefers ids, then a
 * single stable-looking class, then nth-of-type, and stops at <main> so the
 * path stays short and readable in the export.
 */
export function cssPath(el: Element): string {
  const parts: string[] = [];
  let node: Element | null = el;

  while (node && node.nodeType === 1 && parts.length < 6) {
    if (node.id) {
      parts.unshift(`#${node.id}`);
      break;
    }

    const tag = node.tagName.toLowerCase();
    if (tag === 'main' || tag === 'body' || tag === 'html') break;

    const parent: Element | null = node.parentElement;
    if (!parent) {
      parts.unshift(tag);
      break;
    }

    const sameTag = Array.from(parent.children).filter(
      (c) => c.tagName === node!.tagName,
    );
    const idx = sameTag.indexOf(node) + 1;
    parts.unshift(sameTag.length > 1 ? `${tag}:nth-of-type(${idx})` : tag);
    node = parent;
  }

  return parts.join(' > ') || el.tagName.toLowerCase();
}

/**
 * Rendered text, not raw text content.
 *
 * Display headings are built from stacked block spans, so textContent runs
 * them together — "L'hospitalitén'est pasun métier". innerText respects the
 * line boxes; textContent is only the fallback.
 */
function readText(el: Element): string {
  const rendered = el instanceof HTMLElement ? el.innerText : null;
  return (rendered ?? el.textContent ?? '').replace(/\s+/g, ' ').trim();
}

/** Text of the closest heading at or above the element. */
export function nearestSection(el: Element): string {
  const section = el.closest('section, footer, header');
  const heading = section?.querySelector('h1, h2, h3');
  return heading ? readText(heading).slice(0, 70) : '';
}

export function elementText(el: Element): string {
  const text = readText(el);
  if (text) return text.slice(0, 90);
  if (el instanceof HTMLImageElement) return `[image] ${el.alt || el.src}`;
  return '';
}

const PAGE_NAMES: Record<string, string> = {
  '/': 'Accueil',
  '/chroniques-radio': 'Les 400 Coups',
  '/ateliers-degustation': 'Bienvenue à ma table',
  '/formations-ecoles': 'Écoles & formations',
  '/conferences': 'Conférence',
  '/cv': 'Parcours',
  '/contact': 'Contact',
};

export function pageName(path: string) {
  return PAGE_NAMES[path] ?? path;
}

/** One markdown document with every note, grouped by page. */
export function toMarkdown(notes: FeedbackNote[]): string {
  if (!notes.length) return 'Aucun retour pour le moment.';

  const byPath = new Map<string, FeedbackNote[]>();
  for (const n of notes) {
    if (!byPath.has(n.path)) byPath.set(n.path, []);
    byPath.get(n.path)!.push(n);
  }

  const lines: string[] = [
    '# Retours de Sabrina — site sabrinacarlier.fr',
    '',
    `${notes.length} retour${notes.length > 1 ? 's' : ''} · exporté le ${new Date().toLocaleString('fr-FR')}`,
    '',
  ];

  for (const [path, group] of byPath) {
    lines.push(`## ${pageName(path)}  \`${path}\``, '');
    group.forEach((n, i) => {
      lines.push(`**${i + 1}. ${n.section || 'Sans section'}**`);
      if (n.text) lines.push(`Élément : « ${n.text} » (\`${n.tag}\`)`);
      else lines.push(`Élément : \`${n.tag}\``);
      lines.push('');
      lines.push(
        n.note
          .split('\n')
          .map((l) => `> ${l}`)
          .join('\n'),
      );
      lines.push('');
      lines.push(`<sub>\`${n.selector}\` · ${n.viewport}px · ${new Date(n.at).toLocaleString('fr-FR')}</sub>`);
      lines.push('');
    });
  }

  return lines.join('\n');
}
