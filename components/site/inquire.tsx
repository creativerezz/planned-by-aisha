import type { ReactNode } from "react";
import { SITE } from "../../lib/content";
import { InquireForm } from "./inquire-form";

export type ContactLink = {
  /** Small caps label above the value, e.g. "Email". */
  kind: string;
  /** The value shown to the reader. */
  label: string;
  href: string;
  /** Opens in a new tab with `rel="noopener"`. */
  external?: boolean;
};

export type InquireProps = {
  /** Anchor id every inquiry call-to-action scrolls to. */
  id?: string;
  /** Kicker above the heading. */
  eyebrow?: string;
  /** Heading text before the emphasised word. */
  titleLead?: string;
  /** The emphasised word, set in brass italic. */
  titleEm?: string;
  /** Heading text after the emphasised word. */
  titleTrail?: string;
  /** Booking-availability line beneath the heading. */
  lede?: string;
  /** Direct contact links stacked under the lede. */
  contacts?: readonly ContactLink[];
  /** Contents of the form card. Defaults to `<InquireForm />`. */
  children?: ReactNode;
};

/** Closing section: contact details on the left, the inquiry form card on the right. */
export function Inquire({
  id = "hon-inquire",
  eyebrow = "Let's begin",
  titleLead = "Let's make something",
  titleEm = "beautiful",
  titleTrail = "together.",
  lede = "Now booking 2026 weddings, walimas, and celebrations across Southern California.",
  contacts = [
    { kind: "Email", label: SITE.email, href: `mailto:${SITE.email}` },
    { kind: "Phone", label: SITE.phone, href: SITE.phoneHref },
    { kind: "Social", label: SITE.instagram, href: SITE.instagramUrl, external: true },
  ],
  children = <InquireForm />,
}: InquireProps) {
  return (
    <section id={id} className="hon-section hon-inquire">
      <div className="hon-bloom hon-bloom-wide" />

      <div className={`hon-closing-grid${children ? "" : " hon-closing-grid-solo"}`}>
        <div>
          <span className="reveal hon-eyebrow">{eyebrow}</span>
          <h2 className="reveal d1 hon-inquire-h2">
            {titleLead} <em className="hon-em hon-em-brass">{titleEm}</em> {titleTrail}
          </h2>
          <p className="reveal d1 hon-inquire-lede">{lede}</p>

          <div className="reveal d2 hon-contacts">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                className="contact-link"
                {...(contact.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="contact-kind">{contact.kind}</span>
                {contact.label}
              </a>
            ))}
          </div>
        </div>

        {children ? <div className="reveal d2 hon-form-card">{children}</div> : null}
      </div>
    </section>
  );
}
