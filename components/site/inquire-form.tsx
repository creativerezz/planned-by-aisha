"use client";

import { useState, type FormEvent } from "react";
import { EVENT_TYPES, SITE } from "../../lib/content";

/** Lifecycle of the inquiry form. */
export type InquireFormStatus = "idle" | "sending" | "sent" | "error";

type Fields = {
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  vision: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquireFormProps = {
  /** Endpoint the inquiry is POSTed to as JSON. */
  action?: string;
  /** Options for the event-type select. The first is preselected. */
  eventTypes?: readonly string[];
  /** Kicker above the first field. */
  eyebrow?: string;
  /** Label on the submit button. Renders its own arrow glyph. */
  submitLabel?: string;
  /** Label while the request is in flight. */
  sendingLabel?: string;
  /** Reassurance line beneath the submit button. */
  note?: string;
  /** Address offered as a fallback when submission fails. */
  contactEmail?: string;
  /** Heading of the post-submit confirmation panel. */
  successTitle?: string;
  /** Body of the post-submit confirmation panel. */
  successBody?: string;
  /** Seeds the lifecycle state. Use to render a non-idle state statically. */
  initialStatus?: InquireFormStatus;
  /** Error text shown when `initialStatus` is `"error"`. */
  initialError?: string;
};

/** Inquiry form with inline validation, a bot honeypot, and sending / sent / error states. */
export function InquireForm({
  action = "/api/inquire",
  eventTypes = EVENT_TYPES,
  eyebrow = "Tell us about your vision",
  submitLabel = "Send inquiry",
  sendingLabel = "Sending…",
  note = "Every inquiry receives a personal response within two business days.",
  contactEmail = SITE.email,
  successTitle = "Thank you.",
  successBody = "Your inquiry is on its way. Ayesha reads each one herself and will be in touch shortly.",
  initialStatus = "idle",
  initialError = "",
}: InquireFormProps) {
  const empty: Fields = {
    name: "",
    email: "",
    phone: "",
    type: eventTypes[0] ?? "",
    date: "",
    vision: "",
  };

  const [fields, setFields] = useState<Fields>(empty);
  const [invalid, setInvalid] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<InquireFormStatus>(initialStatus);
  const [errorMessage, setErrorMessage] = useState(initialError);
  const [honeypot, setHoneypot] = useState("");

  const set = (key: keyof Fields) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setInvalid((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please add your name";
    if (!fields.email.trim()) next.email = "Please add your email";
    else if (!EMAIL_RE.test(fields.email.trim())) next.email = "That email looks incomplete";
    setInvalid(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, company: honeypot }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "We couldn't send that just now.");
      }

      setStatus("sent");
      setFields(empty);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "We couldn't send that just now.",
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <div className="form-success-mark" aria-hidden="true">
          ✦
        </div>
        <h3>{successTitle}</h3>
        <p>{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <span className="hon-eyebrow">{eyebrow}</span>

      <div className={invalid.name ? "hon-field hon-field-invalid" : "hon-field"}>
        <label htmlFor="hon-name">Full name</label>
        <input
          id="hon-name"
          name="name"
          type="text"
          className="hon-input"
          autoComplete="name"
          value={fields.name}
          aria-invalid={Boolean(invalid.name)}
          onChange={(e) => set("name")(e.target.value)}
        />
        {invalid.name && <span className="hon-field-error">{invalid.name}</span>}
      </div>

      <div className="hon-field-row">
        <div className={invalid.email ? "hon-field hon-field-invalid" : "hon-field"}>
          <label htmlFor="hon-email">Email</label>
          <input
            id="hon-email"
            name="email"
            type="email"
            className="hon-input"
            autoComplete="email"
            value={fields.email}
            aria-invalid={Boolean(invalid.email)}
            onChange={(e) => set("email")(e.target.value)}
          />
          {invalid.email && <span className="hon-field-error">{invalid.email}</span>}
        </div>

        <div className="hon-field">
          <label htmlFor="hon-phone">Phone</label>
          <input
            id="hon-phone"
            name="phone"
            type="tel"
            className="hon-input"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => set("phone")(e.target.value)}
          />
        </div>
      </div>

      <div className="hon-field-row">
        <div className="hon-field">
          <label htmlFor="hon-type">Event type</label>
          <select
            id="hon-type"
            name="type"
            className="hon-select"
            value={fields.type}
            onChange={(e) => set("type")(e.target.value)}
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="hon-field">
          <label htmlFor="hon-date">Event date</label>
          <input
            id="hon-date"
            name="date"
            type="text"
            placeholder="Approx."
            className="hon-input"
            value={fields.date}
            onChange={(e) => set("date")(e.target.value)}
          />
        </div>
      </div>

      <div className="hon-field">
        <label htmlFor="hon-vision">Share your vision</label>
        <textarea
          id="hon-vision"
          name="vision"
          rows={2}
          className="hon-textarea"
          value={fields.vision}
          onChange={(e) => set("vision")(e.target.value)}
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="hon-honeypot">
        <label htmlFor="hon-company">Company</label>
        <input
          id="hon-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-ivory btn-block" disabled={status === "sending"}>
        {status === "sending" ? sendingLabel : submitLabel} <span aria-hidden="true">↗</span>
      </button>

      {status === "error" ? (
        <p className="hon-form-error" role="alert">
          {errorMessage} Please email us at {contactEmail} and we&apos;ll pick it up from there.
        </p>
      ) : (
        <p className="hon-form-note">{note}</p>
      )}
    </form>
  );
}
