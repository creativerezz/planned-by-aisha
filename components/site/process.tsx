import type { CSSProperties } from "react";
import { PHASES, TIERS, type Phase, type Tier } from "../../lib/content";

/** Column count for a `--hon-cols` grid, clamped to what the layout reads well at. */
const cols = (n: number, max: number) =>
  ({ "--hon-cols": Math.min(Math.max(n, 1), max) }) as CSSProperties;

export type ProcessProps = {
  /** Anchor id the header's "Services" link scrolls to. */
  id?: string;
  /** Kicker above the heading. */
  eyebrow?: string;
  /** Section heading. */
  title?: string;
  /** Numbered phase cards. Each reveals one step later than the last. */
  phases?: readonly Phase[];
  /** Kicker above the pricing block. */
  pricingEyebrow?: string;
  /** Supporting paragraph above the tier cards. */
  pricingLede?: string;
  /** Pricing tier cards. */
  tiers?: readonly Tier[];
  /** Closing line beneath the tier cards. */
  pricingFoot?: string;
};

/** Services section: phased approach cards followed by the pricing tiers. */
export function Process({
  id = "hon-process",
  eyebrow = "How we work",
  title = "A logistics-led approach, so the day can feel entirely yours.",
  phases = PHASES,
  pricingEyebrow = "Investment",
  pricingLede = "Considered pricing, scaled to the size and spirit of your event. A tailored quote follows your discovery call.",
  tiers = TIERS,
  pricingFoot = "Most clients combine both tiers for a complete planning-to-execution experience.",
}: ProcessProps) {
  return (
    <section id={id} className="hon-section hon-process">
      <div className="hon-shell">
        <span className="reveal hon-eyebrow hon-eyebrow-soft">{eyebrow}</span>
        <h2 className="reveal d1 hon-process-h2">{title}</h2>

        <div className="hon-phases" style={cols(phases.length, 3)}>
          {phases.map((phase, i) => (
            <div key={phase.tag} className={`hon-phase reveal d${i + 1}`}>
              <div className="hon-phase-tag">
                <span>{phase.tag}</span>
                <span />
              </div>
              <h3>{phase.title}</h3>
              <p className="hon-phase-lede">{phase.lede}</p>
              <ul>
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hon-pricing">
          <span className="reveal hon-eyebrow hon-eyebrow-soft hon-eyebrow-block">
            {pricingEyebrow}
          </span>
          <p className="reveal d1 hon-pricing-lede">{pricingLede}</p>

          <div className="hon-tiers" style={cols(tiers.length, 3)}>
            {tiers.map((tier, i) => (
              <div key={tier.kicker} className={`reveal d${i + 1} tier-card`}>
                <span className="tier-kicker">{tier.kicker}</span>
                <h3>{tier.title}</h3>
                <div className="tier-price">
                  {tier.price}
                  <span>{tier.priceRange}</span>
                </div>
                <ul>
                  {tier.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="reveal hon-pricing-foot">{pricingFoot}</p>
        </div>
      </div>
    </section>
  );
}
