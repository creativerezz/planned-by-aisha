import { WorkGallery } from "noor";

const IMG = "https://plannedbyayesha.vercel.app/images";

/** The full portfolio mosaic: `lg`, `sm`, and `third` tiles in one grid. */
export const Default = () => <WorkGallery />;

/** A three-up row — every tile at `span: "third"`. */
export const ThreeUp = () => (
  <WorkGallery
    eyebrow="Vendor spotlight"
    title="The people we build with."
    lede="A standing bench of florists, stylists, and bar teams we have worked with for years."
    items={[
      {
        src: `${IMG}/floral-photobooth.png`,
        alt: "Floral photobooth backdrop with burgundy roses and a gold frame",
        kicker: "Florals",
        title: "Photobooth backdrop",
        span: "third",
      },
      {
        src: `${IMG}/coffee-matcha-bar.png`,
        alt: "Styled coffee and matcha bar with burgundy florals and brass accents",
        kicker: "Beverage",
        title: "Coffee & matcha bar",
        span: "third",
        delay: "d1",
      },
      {
        src: `${IMG}/custom-signage.png`,
        alt: "Custom wedding signage with burgundy florals and gold calligraphy",
        kicker: "Paper",
        title: "Custom signage",
        span: "third",
        delay: "d2",
      },
    ]}
    action={{ label: "Ask about a vendor", href: "#hon-inquire" }}
  />
);

/**
 * One row of the mosaic, and no closing link (`action={null}`). The grid is
 * twelve columns: `lg` spans 7, `sm` spans 5, `third` spans 4 — so pair the
 * spans to fill a row rather than leaving a gap.
 */
export const Feature = () => (
  <WorkGallery
    eyebrow="This season"
    title="Two evenings in November."
    lede="Both walimas, both at capacity, both handed over the morning after with nothing outstanding."
    items={[
      {
        src: `${IMG}/walima-stage.png`,
        alt: "Walima stage with burgundy florals and gold drapery",
        kicker: "Stages & decor",
        title: "Walima stage",
        span: "lg",
      },
      {
        src: `${IMG}/banquet-reception.png`,
        alt: "Walima banquet reception with coordinated tablescapes and candlelight",
        kicker: "Tablescapes",
        title: "Banquet reception",
        span: "sm",
        delay: "d1",
      },
    ]}
    action={null}
  />
);
