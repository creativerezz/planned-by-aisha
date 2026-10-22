import { Testimonial } from "noor";

/** The studio's own pull quote, with the emphasised phrase in brass italic. */
export const Default = () => <Testimonial />;

/** Any quote works. Wrap the phrase you want lifted in `.hon-em.hon-em-brass`. */
export const AlternateQuote = () => (
  <Testimonial
    quote={
      <>
        She held the entire evening so quietly that we never once{" "}
        <em className="hon-em hon-em-brass">felt the machinery</em> behind it.
      </>
    }
    cite="Hana & Bilal — Engagement dinner"
  />
);

/** A plain string is fine when nothing needs emphasis. */
export const PlainQuote = () => (
  <Testimonial
    quote="Three hundred guests, two venues, and not a single thing we had to think about."
    cite="Nadia Rahman — Mehndi & Walima"
  />
);
