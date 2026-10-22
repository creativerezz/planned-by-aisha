import { RevealProvider } from "noor";

// RevealProvider renders nothing — it is the observer that adds `.in` to
// `.reveal` elements as they scroll into view. These stories show the
// staggered cascade it drives, using the delay classes the sections apply.
const Step = ({ delay, label }: { delay: string; label: string }) => (
  <div className={`reveal ${delay}`} style={{ padding: "1.4rem 0" }}>
    <span className="hon-eyebrow hon-eyebrow-block">{delay || "no delay"}</span>
    <p className="hon-hero-body" style={{ marginTop: ".4rem" }}>{label}</p>
  </div>
);

/**
 * Mount once at the end of the page. Every `.reveal` element fades and rises
 * as it enters the viewport; `.d1`–`.d4` stagger the cascade.
 */
export const Cascade = () => (
  <div style={{ padding: "2rem 3rem" }}>
    <Step delay="" label="Reveals as soon as the section enters the viewport." />
    <Step delay="d1" label="Follows 80ms later." />
    <Step delay="d2" label="Then 160ms." />
    <Step delay="d3" label="Then 240ms — the deepest step a section usually uses." />
    <RevealProvider />
  </div>
);

/**
 * `disabled` reveals everything at once, skipping the observer — the same
 * outcome the provider reaches on its own under `prefers-reduced-motion`.
 */
export const Disabled = () => (
  <div style={{ padding: "2rem 3rem" }}>
    <Step delay="" label="No observer: every element is revealed on mount." />
    <Step delay="d2" label="Delay classes still exist, but nothing animates." />
    <RevealProvider disabled />
  </div>
);
