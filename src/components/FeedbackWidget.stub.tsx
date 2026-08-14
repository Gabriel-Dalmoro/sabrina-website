/**
 * Stands in for FeedbackWidget in builds that are not review builds.
 *
 * next.config.ts aliases the real module to this one when REVIEW_MODE is off,
 * so the widget and its dependencies never enter the bundle at all. Without
 * the alias the branch is merely dead code: it does not render, but every
 * visitor still downloads it.
 */
export default function FeedbackWidgetStub() {
  return null;
}
