import { Header } from "noor";

// `.hon-header` is `position: fixed`, so it takes no space in the flow. Every
// story reserves the band it will cover, the way the page does.
const Band = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: "relative", height: "5.5rem" }}>{children}</div>
);

/** The site header: wordmark, in-page nav, and the standing inquiry pill. */
export const Default = () => (
  <Band>
    <Header />
  </Band>
);

/** Nav links, the call to action, and the wordmark are all props. */
export const AlternateNavigation = () => (
  <Band>
    <Header
      links={[
        { href: "#hon-top", label: "Home" },
        { href: "#hon-work", label: "Gallery" },
        { href: "#hon-process", label: "Investment" },
        { href: "#hon-founder", label: "About" },
      ]}
      ctaLabel="Book a call"
      ctaHref="#hon-inquire"
    />
  </Band>
);
