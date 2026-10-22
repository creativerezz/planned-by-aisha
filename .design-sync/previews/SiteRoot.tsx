import { SiteRoot, Testimonial, Footer } from "noor";

/**
 * The wrapper every page needs. It carries the wine ground, ivory ink, base
 * type, and the element reset the `hon-*` sections are written against.
 */
export const Page = () => (
  <SiteRoot>
    <Testimonial />
    <Footer />
  </SiteRoot>
);

/**
 * `reveal="none"` shows everything immediately with no animation — the mode
 * to use for static renders, screenshots, and design-tool previews. The
 * default, `"observe"`, keeps `.reveal` elements hidden until they scroll in.
 */
export const StaticRender = () => (
  <SiteRoot reveal="none" grain={false}>
    <Testimonial
      quote={
        <>
          Rendered with <em className="hon-em hon-em-brass">reveal=&quot;none&quot;</em>, so nothing
          waits on a scroll event.
        </>
      }
      cite="SiteRoot — static mode"
    />
  </SiteRoot>
);
