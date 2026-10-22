import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/content";

export const runtime = "nodejs";

/**
 * Email clients do not support CSS custom properties, so the notification
 * template below must use literal hex. These mirror the tokens in globals.css
 * (--parchment, --ivory, --brass, --brass-deep, --wine, --oxblood) and are the
 * one sanctioned exception to "no raw hex outside :root".
 */
const MAIL = {
  parchment: "#e9dcc4",
  ivory: "#f4ead9",
  brass: "#c9a767",
  brassDeep: "#9a6b3e",
  wine: "#56171f",
  oxblood: "#350c14",
} as const;

const MAX = { name: 120, email: 200, phone: 60, type: 60, date: 60, vision: 4000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = Partial<Record<"name" | "email" | "phone" | "type" | "date" | "vision" | "company", unknown>>;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 16px 6px 0;vertical-align:top;font:600 12px/1.6 system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:${MAIL.brassDeep};white-space:nowrap">${escapeHtml(label)}</td>
    <td style="padding:6px 0;font:400 15px/1.6 Georgia,serif;color:${MAIL.oxblood}">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "We couldn't read that submission." }, { status: 400 });
  }

  // Honeypot: a real person never fills this in.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const type = clean(body.type, MAX.type);
  const date = clean(body.date, MAX.date);
  const vision = clean(body.vision, MAX.vision);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please include your name and a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[inquire] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "The inquiry form is not configured yet." }, { status: 500 });
  }

  const to = process.env.INQUIRY_TO_EMAIL ?? SITE.email;
  const from = process.env.INQUIRY_FROM_EMAIL ?? "Planned by Ayesha <onboarding@resend.dev>";

  const html = `<div style="background:${MAIL.parchment};padding:32px">
  <div style="max-width:560px;margin:0 auto;background:${MAIL.ivory};border:1px solid ${MAIL.brass};padding:32px">
    <p style="margin:0 0 4px;font:600 11px/1.6 system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:${MAIL.brassDeep}">New inquiry</p>
    <h1 style="margin:0 0 24px;font:400 26px/1.2 Georgia,serif;color:${MAIL.wine}">${escapeHtml(name)}</h1>
    <table style="border-collapse:collapse;width:100%">
      ${row("Email", email)}
      ${row("Phone", phone)}
      ${row("Event", type)}
      ${row("Date", date)}
      ${row("Vision", vision)}
    </table>
  </div>
</div>`;

  const text = [
    `New inquiry — ${name}`,
    ``,
    `Email:  ${email}`,
    phone ? `Phone:  ${phone}` : "",
    type ? `Event:  ${type}` : "",
    date ? `Date:   ${date}` : "",
    vision ? `\nVision:\n${vision}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry — ${name}${type ? ` · ${type}` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("[inquire] Resend rejected the send:", error);
      return NextResponse.json({ error: "We couldn't send that just now." }, { status: 502 });
    }
  } catch (cause) {
    console.error("[inquire] Resend request failed:", cause);
    return NextResponse.json({ error: "We couldn't send that just now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
