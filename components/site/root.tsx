import type { ReactNode } from "react";
import { RevealProvider } from "./reveal-provider";

export type SiteRootProps = {
  /** The page. Sections are stacked full-bleed in source order. */
  children?: ReactNode;
  /** Fixed film-grain overlay across the viewport. */
  grain?: boolean;
  /**
   * Scroll-reveal behaviour for `.reveal` elements.
   *
   * `"observe"` (default) starts them hidden and fades each one in as it
   * enters the viewport. `"none"` shows everything immediately with no
   * animation — use it for static renders, screenshots, and previews.
   */
  reveal?: "observe" | "none";
};

/**
 * The root wrapper every Planned by Ayesha page needs.
 *
 * It carries the wine ground, ivory ink, base type scale, and the element
 * reset the `hon-*` components are written against. **Components rendered
 * outside it are unstyled**, and anything marked `.reveal` stays invisible
 * until the reveal observer mounts — which is what this wrapper does.
 */
export function SiteRoot({ children, grain = true, reveal = "observe" }: SiteRootProps) {
  return (
    <div className={reveal === "none" ? "hon-root hon-static" : "hon-root"}>
      {grain && <div className="hon-grain" />}
      {children}
      {reveal === "observe" && <RevealProvider />}
    </div>
  );
}
