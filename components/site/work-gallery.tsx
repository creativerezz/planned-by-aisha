import { GALLERY, type GalleryItem } from "../../lib/content";

const SPAN_CLASS = {
  lg: "hon-t-lg",
  sm: "hon-t-sm",
  third: "hon-t-third",
} as const;

export type WorkGalleryAction = {
  label: string;
  href: string;
};

export type WorkGalleryProps = {
  /** Anchor id the header's "Portfolio" link scrolls to. */
  id?: string;
  /** Kicker above the heading. */
  eyebrow?: string;
  /** Section heading. */
  title?: string;
  /** Supporting paragraph set opposite the heading. */
  lede?: string;
  /**
   * Gallery tiles. `span` drives the mosaic: `lg` (half width), `sm` (quarter),
   * `third`. `delay` staggers the reveal.
   */
  items?: readonly GalleryItem[];
  /** Text link closing the section. Renders its own arrow glyph. */
  action?: WorkGalleryAction | null;
};

/** Portfolio mosaic: a spanning tile grid with scrimmed labels over each image. */
export function WorkGallery({
  id = "hon-work",
  eyebrow = "Selected work",
  title = "Recent celebrations.",
  lede = "A small selection of emerald walimas, candlelit dinners, and elevated socials, coordinated end to end.",
  items = GALLERY,
  action = { label: "Inquire about your celebration", href: "#hon-inquire" },
}: WorkGalleryProps) {
  return (
    <section id={id} className="hon-section hon-work">
      <div className="hon-shell">
        <div className="hon-work-head">
          <div>
            <span className="reveal hon-eyebrow">{eyebrow}</span>
            <h2 className="reveal d1 hon-h2">{title}</h2>
          </div>
          <p className="reveal d1 hon-work-lede">{lede}</p>
        </div>

        <div className="hon-gallery">
          {items.map((item) => (
            <div
              key={item.src}
              className={`hon-tile ${SPAN_CLASS[item.span]} reveal${item.delay ? ` ${item.delay}` : ""}`}
            >
              <div className="img-slot">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="tile-scrim" />
              <span className="tile-label">
                <span className="tile-kicker">{item.kicker}</span>
                <span className="tile-title">{item.title}</span>
              </span>
            </div>
          ))}
        </div>

        {action && (
          <div className="reveal hon-work-foot">
            <a href={action.href} className="btn-text">
              {action.label} ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
