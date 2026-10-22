export type FounderImage = {
  src: string;
  alt: string;
};

export type FounderAction = {
  label: string;
  href: string;
};

export type FounderProps = {
  /** Deep-toned kicker above the heading. */
  eyebrow?: string;
  /** Portrait shown in the light frame. */
  image?: FounderImage | null;
  /** Heading text preceding the emphasised name. */
  titleLead?: string;
  /** The emphasised name, set in wine italic. */
  titleEm?: string;
  /** Body paragraphs. The first reveals on `d1`, the rest on `d2`. */
  body?: readonly string[];
  /** Kicker for the boxed vision statement. */
  visionLabel?: string;
  /** The vision statement itself. */
  visionBody?: string | null;
  /** Wine button closing the section. Omit to hide it. */
  action?: FounderAction | null;
};

/** Founder introduction on the parchment ground: framed portrait, biography, vision statement, and a call to action. */
export function Founder({
  eyebrow = "The founder",
  image = {
    src: "/images/founder-portrait.png",
    alt: "Ayesha, founder of Planned by Ayesha — boutique event design studio in Los Angeles",
  },
  titleLead = "I'm",
  titleEm = "Ayesha.",
  body = [
    "Planned by Ayesha began as a love letter to celebration. I'm a UCLA sociology graduate who has spent years coordinating weddings, walimas, and private gatherings across Los Angeles — drawn, always, to the way a well-held room brings people closer.",
    "My work is logistics-led and quietly attentive: vendors aligned, timelines rehearsed, every transition handled before you would ever notice it. The result is a day that feels effortless — and entirely yours.",
  ],
  visionLabel = "Our vision",
  visionBody = "To gather people through experiences made with genuine care — where every guest feels welcomed, present, and truly seen.",
  action = { label: "How we work together", href: "#hon-process" },
}: FounderProps) {
  return (
    <section className="hon-section hon-founder">
      <div className={`hon-founder-grid hon-shell${image ? "" : " hon-founder-grid-solo"}`}>
        {image && (
          <div className="reveal hon-frame hon-frame-light">
            <div className="img-slot on-light hon-founder-slot">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        )}

        <div>
          <span className="reveal hon-eyebrow hon-eyebrow-deep">{eyebrow}</span>
          <h2 className="reveal d1 hon-founder-h2">
            {titleLead}{" "}
            <em className="hon-em hon-em-deep">{titleEm}</em>
          </h2>
          {body.map((paragraph, i) => (
            <p key={i} className={`reveal d${i === 0 ? 1 : 2} hon-founder-body`}>
              {paragraph}
            </p>
          ))}

          {visionBody && (
            <div className="reveal d2 hon-vision">
              <span className="hon-eyebrow hon-eyebrow-deep hon-eyebrow-block">{visionLabel}</span>
              <p>{visionBody}</p>
            </div>
          )}

          {action && (
            <div className="reveal d3 hon-founder-cta">
              <a href={action.href} className="btn btn-wine">
                {action.label} <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
