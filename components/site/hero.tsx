import { Fragment } from "react";
import { HERO_COPY } from "../hero-copy";
import { EVENT_TAGS } from "../../lib/content";

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

export type HeroProps = {
  /** Anchor id the header's "Home" link scrolls to. */
  id?: string;
  /** Rule-led kicker above the headline. */
  eyebrow?: string;
  /** First line of the headline, set in the display serif. */
  titleLead?: string;
  /** Second line of the headline, emphasised in brass italic. */
  titleEm?: string;
  /** Supporting paragraph beneath the headline. */
  body?: string;
  /** Filled ivory button. Renders an arrow glyph after the label. */
  primaryAction?: HeroAction | null;
  /** Underlined text link beside the primary button. */
  secondaryAction?: HeroAction | null;
  /** Framed mood image on the right of the grid. */
  image?: HeroImage | null;
  /** Caption pinned to the bottom edge of the image frame. */
  imageBadge?: string | null;
  /** Separated tag row beneath the grid. Rendered with `✦` separators. */
  tags?: readonly string[];
};

/** Opening screen: headline, supporting copy, two calls to action, framed mood image, and a tag row. */
export function Hero({
  id = "hon-top",
  eyebrow = HERO_COPY.eyebrow,
  titleLead = HERO_COPY.titleLead,
  titleEm = HERO_COPY.titleEm,
  body = HERO_COPY.body,
  primaryAction = { label: "Begin your inquiry", href: "#hon-inquire" },
  secondaryAction = { label: "View portfolio", href: "#hon-work" },
  image = {
    src: "/images/hero-moodboard.png",
    alt: "Planned by Ayesha — burgundy and gold wedding mood board with floral centerpieces, candlelit tablescapes, and a draped floral mandap",
  },
  imageBadge = "Walima mood · burgundy & gold",
  tags = EVENT_TAGS,
}: HeroProps) {
  return (
    <section id={id} className="hon-hero">
      <div className="hon-bloom hon-bloom-hero" />

      <div className="hon-hero-inner hon-hero-grid">
        <div>
          <div className="reveal hon-rule-eyebrow">
            <span />
            <span className="hon-eyebrow">{eyebrow}</span>
          </div>

          <h1 className="reveal d1 hon-h1">
            {titleLead}
            <br />
            <em className="hon-em hon-em-brass">{titleEm}</em>
          </h1>

          <p className="reveal d2 hon-hero-body">{body}</p>

          <div className="reveal d3 hon-hero-actions">
            {primaryAction && (
              <a href={primaryAction.href} className="btn btn-ivory">
                {primaryAction.label} <span aria-hidden="true">↗</span>
              </a>
            )}
            {secondaryAction && (
              <a href={secondaryAction.href} className="btn-text">
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>

        {image && (
          <div className="hon-hero-figure reveal d2 hon-frame">
            <div className="img-slot hon-hero-figure-slot">
              <img src={image.src} alt={image.alt} />
            </div>
            {imageBadge && <span className="hon-frame-badge">{imageBadge}</span>}
          </div>
        )}
      </div>

      <div className="reveal d4 hon-tags">
        {tags.map((tag, i) => (
          <Fragment key={tag}>
            <span className="hon-tag">{tag}</span>
            {i < tags.length - 1 && (
              <span className="hon-tag-sep" aria-hidden="true">
                ✦
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
