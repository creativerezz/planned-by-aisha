import type { ReactNode } from "react";

export type TestimonialProps = {
  /** The pull quote. Wrap the emphasised phrase in `<em className="hon-em hon-em-brass">`. */
  quote?: ReactNode;
  /** Attribution line beneath the quote. */
  cite?: string;
};

/** Full-bleed pull quote on the oxblood ground, with a centred bloom behind it. */
export function Testimonial({
  quote = (
    <>
      The whole evening was beautiful and felt{" "}
      <em className="hon-em hon-em-brass">effortless.</em> I truly couldn&apos;t have imagined the
      day without her.
    </>
  ),
  cite = "Sumaiya Farooq — Walima bride",
}: TestimonialProps) {
  return (
    <section className="hon-section hon-testimonial">
      <div className="hon-bloom hon-bloom-center" />
      <div className="hon-shell hon-layer">
        <div className="reveal hon-quote-mark" aria-hidden="true">
          &ldquo;
        </div>
        <blockquote className="reveal d1 hon-quote">{quote}</blockquote>
        <cite className="reveal d2 hon-cite">{cite}</cite>
      </div>
    </section>
  );
}
