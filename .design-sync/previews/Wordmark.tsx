import { Wordmark } from "noor";

// `.hon-root *` zeroes every margin, so the mark needs its own breathing room
// in a card the way the header and footer give it in the page.
const Slot = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "2.5rem 3rem" }}>{children}</div>
);

/** As it sits in the site header. */
export const Default = () => (
  <Slot>
    <span className="hon-wordmark">
      <Wordmark />
    </span>
  </Slot>
);

/** The footer size, set by adding `.hon-wordmark-lg`. */
export const Large = () => (
  <Slot>
    <span className="hon-wordmark hon-wordmark-lg">
      <Wordmark />
    </span>
  </Slot>
);

/** All three parts are props, so the mark carries any two-part name. */
export const AlternateName = () => (
  <Slot>
    <span className="hon-wordmark hon-wordmark-lg">
      <Wordmark lead="Hues" connector="of" trail="Noor" />
    </span>
  </Slot>
);
