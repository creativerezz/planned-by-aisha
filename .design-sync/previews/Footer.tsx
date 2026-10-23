import { Footer } from "noor";

/** The site footer: wordmark block, two link columns, and the colophon rule. */
export const Default = () => <Footer />;

/** Columns are data — add, drop, or relabel them freely. */
export const ThreeColumns = () => (
  <Footer
    columns={[
      {
        heading: "Explore",
        links: [
          { href: "#hon-work", label: "Portfolio" },
          { href: "#hon-process", label: "Services" },
        ],
      },
      {
        heading: "Occasions",
        links: [
          { href: "#hon-work", label: "Weddings" },
          { href: "#hon-work", label: "Walimas" },
          { href: "#hon-work", label: "Private dinners" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { href: "mailto:info@huesofnoor.com", label: "info@huesofnoor.com" },
          { href: "https://instagram.com/byhuesofnoor", label: "@byhuesofnoor", external: true },
        ],
      },
    ]}
  />
);

/** One column: the grid follows the data rather than a fixed two-up. */
export const SingleColumn = () => (
  <Footer
    tagline="Where every detail is held with care."
    colophon="Los Angeles"
    columns={[
      {
        heading: "Connect",
        links: [
          { href: "mailto:info@huesofnoor.com", label: "info@huesofnoor.com" },
          { href: "tel:5623412539", label: "562-341-2539" },
          { href: "https://instagram.com/byhuesofnoor", label: "@byhuesofnoor", external: true },
        ],
      },
    ]}
  />
);
