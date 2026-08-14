/**
 * Build-time flags.
 *
 * `NEXT_PUBLIC_*` values are inlined by the compiler, so a flag that resolves
 * to `false` turns its branch into dead code: the guarded component is dropped
 * from the client bundle entirely rather than merely hidden. That matters for
 * the review widget — "not rendered" and "not shipped" are different promises,
 * and only the second one keeps a client's private notes off a public site.
 */

/**
 * Sabrina's review widget: point at anything on the page, write a note, export
 * the lot as Markdown. It is a tool for her, not a feature of the site.
 *
 *   on   — local dev, and every Vercel preview deployment
 *   off  — production, unless NEXT_PUBLIC_FEEDBACK=1 is set in the Vercel
 *          project settings
 *
 * So a review round is: add the variable to Production, redeploy, send her the
 * link. Launch is: delete the variable, redeploy. Nothing to remember in the
 * source, and no way to ship it by forgetting to.
 */
export const REVIEW_MODE =
  process.env.NEXT_PUBLIC_FEEDBACK === '1' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
  process.env.NODE_ENV === 'development';
