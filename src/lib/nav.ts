/** Nav labels use Sabrina's own words for each page, not category nouns. */
export const NAV_LINKS = [
  { name: 'Accueil', href: '/' },
  { name: 'Les 400 Coups', href: '/chroniques-radio' },
  { name: 'À ma table', href: '/ateliers-degustation' },
  { name: 'Écoles & formations', href: '/formations-ecoles' },
  { name: 'Conférence', href: '/conferences' },
  { name: 'Parcours', href: '/cv' },
  { name: 'Journal', href: '/journal' },
] as const;

export const CONTACT_EMAIL = 'hello@sabrinacarlier.fr';

export const PODCAST_URL =
  'https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189';

/** Her Substack: where she writes, and where readers subscribe by email. */
export const SUBSTACK_URL = 'https://sabrinacarlier.substack.com';
export const SUBSTACK_SUBSCRIBE_URL = `${SUBSTACK_URL}/subscribe`;
