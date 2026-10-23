import { InquireForm } from "noor";

// The form is always mounted inside the bordered, veiled card the closing
// section gives it — on its own it would sit directly on the wine ground.
const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "2.5rem 3rem" }}>
    <div className="hon-form-card" style={{ maxWidth: "34rem", margin: "0 auto" }}>
      {children}
    </div>
  </div>
);

/** The form as it ships: five fields, a honeypot, and the reassurance note. */
export const Default = () => (
  <Card>
    <InquireForm />
  </Card>
);

/** The confirmation panel that replaces the form once an inquiry is sent. */
export const Sent = () => (
  <Card>
    <InquireForm initialStatus="sent" />
  </Card>
);

/** Submission failure — the message falls back to a direct email address. */
export const SubmissionError = () => (
  <Card>
    <InquireForm
      initialStatus="error"
      initialError="We couldn't send that just now."
    />
  </Card>
);

/** Endpoint, event types, and every label are props. */
export const CorporateIntake = () => (
  <Card>
    <InquireForm
      action="/api/corporate"
      eventTypes={["Company dinner", "Product launch", "Award evening", "Retreat"]}
      eyebrow="Tell us about the occasion"
      submitLabel="Request a proposal"
      note="Proposals are returned within three business days."
    />
  </Card>
);
