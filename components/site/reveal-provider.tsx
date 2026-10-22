"use client";

import { useEffect } from "react";

export type RevealProviderProps = {
  /** Selector for the elements to reveal. */
  selector?: string;
  /** IntersectionObserver root margin. */
  rootMargin?: string;
  /** IntersectionObserver threshold. */
  threshold?: number;
  /** Reveal everything immediately instead of observing. */
  disabled?: boolean;
};

/**
 * Adds `.in` to every `.reveal` element as it enters the viewport, using a
 * single IntersectionObserver that unobserves each element once revealed.
 * Renders nothing. Mount it once, at the end of the page.
 */
export function RevealProvider({
  selector = ".reveal",
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.01,
  disabled = false,
}: RevealProviderProps) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (disabled || prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin, threshold },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, rootMargin, threshold, disabled]);

  return null;
}
