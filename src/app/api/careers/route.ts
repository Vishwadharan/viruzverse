import { NextResponse } from "next/server";
import { CAREERS_EMAIL, SITE_NAME } from "@/lib/constants";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import {
  escapeHtml,
  isSafeHttpUrl,
  isValidEmail,
  sendZeptoEmail,
} from "@/lib/zeptomail";

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

    // Honeypot check: silently succeed for bots
    if (body?.website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body?.name ?? "").trim().slice(0, 120);
    const email = String(body?.email ?? "").trim().slice(0, 200);
    const portfolio = String(body?.portfolio ?? "").trim().slice(0, 400);
    const note = String(body?.note ?? "").trim().slice(0, 3000);

    if (!name || !isValidEmail(email) || !isSafeHttpUrl(portfolio) || !note) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, https:// portfolio URL, and note." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePortfolio = escapeHtml(portfolio);
    const safeNote = escapeHtml(note).replace(/\n/g, "<br/>");

    // 1. Send application to careers@viruzverse.in
    await sendZeptoEmail({
      to: [{ address: CAREERS_EMAIL, name: `${SITE_NAME} Careers` }],
      replyTo: [{ address: email, name }],
      subject: `Open Application — ${name}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9; margin-bottom: 16px;">New Open Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Name:</strong></td><td>${safeName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td>${safeEmail}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Portfolio / GitHub:</strong></td><td><a href="${safePortfolio}">${safePortfolio}</a></td></tr>
          </table>
          <div style="padding: 14px; background: #f8fafc; border-left: 3px solid #7c3aed; border-radius: 6px;">
            <strong>Note:</strong><br/>${safeNote}
          </div>
        </div>
      `,
    });

    // 2. Send auto-response to candidate
    await sendZeptoEmail({
      to: [{ address: email, name }],
      replyTo: [{ address: CAREERS_EMAIL, name: `${SITE_NAME} Careers` }],
      subject: `Application received — ${SITE_NAME}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9; margin-bottom: 12px;">Thanks for applying to ${SITE_NAME}, ${safeName}!</h2>
          <p style="line-height: 1.6; color: #334155;">
            We&apos;ve received your open application and portfolio link. We&apos;ll keep your profile on file and reach out when a matching opportunity opens up.
          </p>
          <p style="margin-top: 24px; font-size: 13px; color: #64748b;">
            — Viruzverse Solutions Private Limited · <em>Innovation that Flows.</em>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/careers] Error:", err);
    return NextResponse.json(
      { error: "Unable to submit application right now. Please email careers@viruzverse.in." },
      { status: 500 }
    );
  }
}
