import { Anton, Bodoni_Moda, Inter } from 'next/font/google';
import localFont from 'next/font/local';

/**
 * The three faces of the charte graphique, plus one deliberately invisible
 * utility sans.
 *
 * Roles matter more than the names here — the Les 400 Coups artwork is built
 * on a single move: huge flat Anton with the brush script laid over it. Anton
 * carries every display line and micro-label; Hey October is reserved for
 * short human asides; Bodoni does the reading.
 */

/** Display. Headlines, kickers, nav, buttons. Always uppercase. */
export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
});

/** Reading. Long-form narrative, leads, pull quotes. Bodoni FLF stand-in. */
export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
});

/**
 * Utility only — form fields, captions, fine print. Anywhere Bodoni's hairlines
 * would break down below ~15px. It should never be noticed.
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * The brush script from the charte. Self-hosted: it is not on Google Fonts.
 * Source file lives at public/hey_october_font/, converted to woff2 (221 KB).
 * Covers all French accents; it has no guillemets, so never set « » in it.
 */
export const heyOctober = localFont({
  src: '../fonts/HeyOctober.woff2',
  display: 'swap',
  variable: '--font-hey',
  // The brush glyphs are optically small; nudge the fallback so the swap is
  // less jarring on slow connections.
  adjustFontFallback: false,
  fallback: ['Brush Script MT', 'cursive'],
});

export const fontVariables = [
  anton.variable,
  bodoni.variable,
  inter.variable,
  heyOctober.variable,
].join(' ');
