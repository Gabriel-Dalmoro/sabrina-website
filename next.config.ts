import type { NextConfig } from "next";

/**
 * Mirrors REVIEW_MODE in src/lib/flags.ts. Duplicated rather than imported
 * because this file is evaluated before the TS path aliases exist.
 */
const REVIEW_MODE =
  process.env.NEXT_PUBLIC_FEEDBACK === "1" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
  process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /*
   * Sabrina's review widget is swapped for a stub that renders nothing unless
   * this is a review build.
   *
   * The flag alone is not enough. `{REVIEW_MODE ? <Widget /> : null}` stops
   * the widget rendering, but the module stays in the graph and its ~36 KB
   * chunk is still served to every visitor — Turbopack emits dynamic imports
   * whether or not the branch is reachable. Aliasing the module keeps her
   * private review notes and the whole tool out of the public build.
   */
  turbopack: {
    resolveAlias: REVIEW_MODE
      ? {}
      : { "@/components/FeedbackWidget": "./src/components/FeedbackWidget.stub.tsx" },
  },
};

export default nextConfig;
