import { NextResponse } from "next/server";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { escapeHtml, isValidEmail, sendZeptoEmail } from "@/lib/zeptomail";

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip, 5, 10 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check: silently succeed for bots without sending email
    if (body?.website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body?.name ?? "").trim().slice(0, 120);
    const email = String(body?.email ?? "").trim().slice(0, 200);
    const company = String(body?.company ?? "").trim().slice(0, 150);
    const service = String(body?.service ?? "").trim().slice(0, 100);
    const message = String(body?.message ?? "").trim().slice(0, 3000);

    if (!name || !isValidEmail(email) || !message) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and project details." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "—");
    const safeService = escapeHtml(service || "General Inquiry");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // 1. Send inquiry notification to Viruzverse team
    await sendZeptoEmail({
      to: [{ address: CONTACT_EMAIL, name: SITE_NAME }],
      replyTo: [{ address: email, name }],
      subject: `New Inquiry: ${service || "General"} — ${name}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9; margin-bottom: 16px;">New Business Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Name:</strong></td><td>${safeName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td>${safeEmail}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td>${safeCompany}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Focus:</strong></td><td>${safeService}</td></tr>
          </table>
          <div style="padding: 14px; background: #f8fafc; border-left: 3px solid #7c3aed; border-radius: 6px;">
            <strong>Message:</strong><br/>${safeMessage}
          </div>
        </div>
      `,
    });

    // 2. Send automatic confirmation email to the user
    await sendZeptoEmail({
      to: [{ address: email, name }],
      replyTo: [{ address: CONTACT_EMAIL, name: SITE_NAME }],
      subject: `We received your inquiry — ${SITE_NAME}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9; margin-bottom: 12px;">Thanks for connecting with ${SITE_NAME}, ${safeName}!</h2>
          <p style="line-height: 1.6; color: #334155;">
            We&apos;ve received your inquiry regarding <strong>${safeService}</strong> and our team is reviewing your details for your free consultation.
          </p>
          <div style="margin: 18px 0; padding: 14px; background: #f5f3ff; border-radius: 8px; color: #334155;">
            <strong>Your Message:</strong><br/>${safeMessage}
          </div>
          <p style="line-height: 1.6; color: #475569; font-size: 13px;">
            If you&apos;d like to share anything else in the meantime, simply reply to this email or write to us at <a href="mailto:${CONTACT_EMAIL}" style="color: #6d28d9;">${CONTACT_EMAIL}</a>.
          </p>
          <p style="margin-top: 24px; font-size: 13px; color: #64748b;">
            — Viruzverse Solutions Private Limited · <em>Innovation that Flows.</em>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] Error:", err);
    return NextResponse.json(
      { error: "Unable to send inquiry right now. Please email us directly." },
      { status: 500 }
    );
  }
}
