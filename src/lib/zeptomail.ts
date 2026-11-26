if (typeof window !== "undefined") {
  throw new Error("zeptomail.ts must only be imported on the server.");
}

interface ZeptoEmailAddress {
  address: string;
  name?: string;
}

interface SendZeptoEmailParams {
  to: ZeptoEmailAddress[];
  subject: string;
  htmlbody: string;
  replyTo?: ZeptoEmailAddress[];
  fromEmail?: string;
  fromName?: string;
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n]+/g, " ").trim();
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 200;
}

export function isSafeHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function sendZeptoEmail({
  to,
  subject,
  htmlbody,
  replyTo,
  fromEmail,
  fromName,
}: SendZeptoEmailParams): Promise<void> {
  const rawToken = process.env.ZEPTOMAIL_API_KEY;
  if (!rawToken) {
    throw new Error("ZEPTOMAIL_API_KEY environment variable is not configured.");
  }

  const authHeader = rawToken.startsWith("Zoho-enczapikey")
    ? rawToken
    : `Zoho-enczapikey ${rawToken}`;

  const apiUrl =
    process.env.ZEPTOMAIL_API_URL || "https://api.zeptomail.in/v1.1/email";

  const senderAddress =
    fromEmail || process.env.ZEPTOMAIL_FROM_EMAIL || "noreply@viruzverse.in";
  const senderName =
    fromName || process.env.ZEPTOMAIL_FROM_NAME || "Viruzverse";

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify({
      from: { address: senderAddress, name: sanitizeHeader(senderName) },
      to: to.map((recipient) => ({
        email_address: {
          address: recipient.address,
          name: sanitizeHeader(recipient.name || recipient.address),
        },
      })),
      ...(replyTo?.length
        ? {
            reply_to: replyTo.map((r) => ({
              address: r.address,
              name: sanitizeHeader(r.name || r.address),
            })),
          }
        : {}),
      subject: sanitizeHeader(subject),
      htmlbody,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => res.statusText);
    throw new Error(`ZeptoMail API error (${res.status}): ${errorText}`);
  }
}
