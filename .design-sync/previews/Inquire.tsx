import { Inquire, InquireForm } from "noor";

/** The closing section: contact details beside the inquiry form card. */
export const Default = () => <Inquire />;

/** Heading, availability line, and contact rows are all props. */
export const CorporateEnquiries = () => (
  <Inquire
    eyebrow="For companies"
    titleLead="Let's host something"
    titleEm="memorable"
    titleTrail="for your team."
    lede="Now booking 2026 launches, award evenings, and end-of-year dinners across Southern California."
    contacts={[
      { kind: "Email", label: "partners@huesofnoor.com", href: "mailto:partners@huesofnoor.com" },
      { kind: "Phone", label: "562-341-2539", href: "tel:5623412539" },
    ]}
  >
    <InquireForm
      eyebrow="Tell us about the occasion"
      eventTypes={["Company dinner", "Product launch", "Award evening", "Retreat"]}
      submitLabel="Request a proposal"
    />
  </Inquire>
);

/** `children={null}` leaves the card empty for a different intake flow. */
export const ContactOnly = () => (
  <Inquire
    titleLead="Reach the studio"
    titleEm="directly."
    titleTrail=""
    lede="No form, no queue — Ayesha reads every message herself."
    children={null}
  />
);
