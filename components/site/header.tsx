"use client";

import { useEffect, useState, type ReactNode } from "react";
import { NAV_LINKS } from "../../lib/content";
import { Wordmark } from "./wordmark";

export type NavLink = {
  href: string;
  label: string;
};

export type HeaderProps = {
  /** Wordmark content. Defaults to the studio `<Wordmark />`. */
  brand?: ReactNode;
  /** Where the wordmark links. */
  brandHref?: string;
  /** In-page navigation links. */
  links?: readonly NavLink[];
  /** Label for the standing call-to-action pill. */
  ctaLabel?: string;
  /** Target for the call-to-action pill. */
  ctaHref?: string;
  /** Label for the mobile menu toggle. */
  menuLabel?: string;
  /** Pixels scrolled before the header takes its condensed, scrimmed state. */
  scrollThreshold?: number;
};

/** Fixed site header: wordmark, in-page nav, inquiry pill, and a mobile menu toggle. */
export function Header({
  brand = <Wordmark />,
  brandHref = "#hon-top",
  links = NAV_LINKS,
  ctaLabel = "Inquire",
  ctaHref = "#hon-inquire",
  menuLabel = "Menu",
  scrollThreshold = 40,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > scrollThreshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "hon-header scrolled" : "hon-header"}>
      <a href={brandHref} className="hon-wordmark" onClick={closeMenu}>
        {brand}
      </a>
      <nav className={menuOpen ? "hon-nav open" : "hon-nav"}>
        <div className="hon-nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <a href={ctaHref} className="nav-cta" onClick={closeMenu}>
          {ctaLabel}
        </a>
        <button
          type="button"
          className="hon-menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuLabel}
        </button>
      </nav>
    </header>
  );
}
