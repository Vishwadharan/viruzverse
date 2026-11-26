import { NextResponse } from "next/server";
import { CAREERS_EMAIL, COMPANY_ADDRESS, SITE_NAME, SITE_URL } from "@/lib/constants";
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

    // 2. Send branded auto-response to candidate
    await sendZeptoEmail({
      to: [{ address: email, name }],
      replyTo: [{ address: CAREERS_EMAIL, name: `${SITE_NAME} Careers` }],
      subject: `Application received — ${SITE_NAME}`,
      htmlbody: `
        <div style="margin:0;padding:24px 12px;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
          <style>
            @font-face {
              font-family: 'Mokoto';
              src: url('${SITE_URL}/fonts/Mokoto.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
          </style>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td align="right" style="background-color:#090912;padding:24px 32px;border-bottom:2px solid #7c3aed;">
                <table role="presentation" cellspacing="0" cellpadding="0" align="right">
                  <tr>
                    <td valign="middle" style="padding-right:10px;">
                      <img src="${SITE_URL}/logo.png" alt="Viruzverse Logo" width="32" height="32" style="display:block;border:0;outline:none;" />
                    </td>
                    <td valign="middle" align="right">
                      <div style="font-family:'Mokoto','Segoe UI',Arial,sans-serif;font-size:21px;font-weight:800;letter-spacing:1.5px;color:#ffffff;line-height:1.1;">VIRUZVERSE</div>
                      <div style="font-size:11px;color:#a78bfa;margin-top:4px;font-family:monospace;text-align:right;">Innovation that Flows.</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#0f172a;">
                <p style="margin:0 0 12px;font-size:15px;color:#475569;">Hi <strong style="color:#0f172a;">${safeName}</strong>,</p>
                <h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:#0f172a;">We&apos;ve received your application.</h1>
                <p style="margin:0 0 20px;font-size:14px;line-height:1.65;color:#334155;">
                  Thank you for your interest in <strong>${SITE_NAME}</strong>. We&apos;ve received your portfolio link and note, and we&apos;ll reach out when a matching opportunity opens up.
                </p>
                <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #7c3aed;border-radius:10px;padding:16px 18px;margin-bottom:24px;">
                  <div style="font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:1px;color:#6d28d9;margin-bottom:8px;font-weight:bold;">
                    Submitted Profile
                  </div>
                  <p style="margin:0 0 6px;font-size:13px;color:#334155;"><strong>Portfolio:</strong> <a href="${safePortfolio}" style="color:#6d28d9;">${safePortfolio}</a></p>
                  <p style="margin:0;font-size:13px;line-height:1.55;color:#475569;"><strong>Note:</strong><br/>${safeNote}</p>
                </div>
                <a href="${SITE_URL}" style="display:inline-block;padding:11px 20px;border-radius:10px;background-color:#7c3aed;font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;">
                  Visit Viruzverse
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8fafc;padding:20px 32px;border-top:1px solid #e2e8f0;font-size:11px;line-height:1.6;color:#64748b;">
                <strong style="color:#334155;">Viruzverse Solutions Private Limited</strong><br/>
                ${COMPANY_ADDRESS}<br/>
                <a href="mailto:${CAREERS_EMAIL}" style="color:#6d28d9;text-decoration:none;">${CAREERS_EMAIL}</a>
              </td>
            </tr>
          </table>
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
