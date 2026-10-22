import type { CSSProperties, ReactNode } from "react";
import { SITE } from "../../lib/content";
import { Wordmark } from "./wordmark";

export type FooterLink = {
  href: string;
  label: string;
  /** Opens in a new tab with `rel="noopener"`. */
  external?: boolean;
};

export type FooterColumn = {
  heading: string;
  links: readonly FooterLink[];
};

export type FooterProps = {
  /** Wordmark content. Defaults to the studio `<Wordmark />`. */
  brand?: ReactNode;
  /** Line beneath the wordmark. */
  tagline?: string;
  /** Small caps discipline-and-place line. */
  meta?: string;
  /** Link columns to the right of the wordmark. */
  columns?: readonly FooterColumn[];
  /** Left half of the colophon rule. Defaults to the current year. */
  copyright?: string;
  /** Right half of the colophon rule. */
  colophon?: string;
};

/** Site footer: wordmark block, link columns, and a colophon rule. */
export function Footer({
  brand = <Wordmark />,
  tagline = "Where every detail is held with care.",
  meta = "Event design · Los Angeles",
  columns = [
    {
      heading: "Explore",
      links: [
        { href: "#hon-work", label: "Portfolio" },
        { href: "#hon-process", label: "Services" },
        { href: "#hon-inquire", label: "Inquire" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { href: `mailto:${SITE.email}`, label: SITE.email },
        { href: SITE.phoneHref, label: SITE.phone },
        { href: SITE.instagramUrl, label: SITE.instagram, external: true },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Planned by Ayesha`,
  colophon = "Crafted with intention",
}: FooterProps) {
  return (
    <footer className="hon-footer">
      <div
        className="hon-foot-grid"
        style={{ "--hon-cols": Math.min(Math.max(columns.length, 1), 4) } as CSSProperties}
      >
        <div>
          <span className="hon-wordmark hon-wordmark-lg">{brand}</span>
          <p className="hon-foot-tagline">{tagline}</p>
          <span className="hon-foot-meta">{meta}</span>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h4>{column.heading}</h4>
            {column.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="foot-link"
                {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="hon-colophon">
        <span>{copyright}</span>
        <span>{colophon}</span>
      </div>
    </footer>
  );
}
