import { Founder } from "noor";

/** The founder section on the parchment ground, portrait and all. */
export const Default = () => <Founder />;

/** `image={null}` drops the frame; the copy column takes the full grid. */
export const WithoutPortrait = () => (
  <Founder
    image={null}
    body={[
      "Planned by Ayesha began as a love letter to celebration — to the way a well-held room brings people closer, and to the unglamorous logistics that make that possible.",
    ]}
  />
);

/** Any biography fits: heading, paragraphs, vision, and the closing button are props. */
export const AlternateBio = () => (
  <Founder
    eyebrow="The team"
    titleLead="Meet"
    titleEm="the studio."
    image={{
      src: "https://plannedbyayesha.vercel.app/images/centerpiece.png",
      alt: "Burgundy and gold floral centerpiece with candlelight",
    }}
    body={[
      "Three coordinators, one lead designer, and a bench of vendors we have worked with for years — assembled around each event rather than kept on retainer.",
      "We take a small number of weddings a season so that every one of them gets a lead planner in the room from set-up to send-off.",
    ]}
    visionLabel="How we choose work"
    visionBody="We say yes to celebrations where the people matter more than the photographs — and then we make the photographs beautiful anyway."
    action={{ label: "See the services", href: "#hon-process" }}
  />
);
