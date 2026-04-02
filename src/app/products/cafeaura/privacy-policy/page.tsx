import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — CafeAura",
  description: "Privacy Policy for CafeAura by Viruzverse Solutions Private Limited",
};

const A  = "#f97316";
const A2 = "#fb923c";

// Renders plain text, converting [text](mailto:...) → real <a> tags
function RenderContent({ text, className, style }: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const parts = text.split(/(\[[^\]]+\]\(mailto:[^)]+\))/g);
  return (
    <p className={className} style={style}>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\((mailto:[^)]+)\)$/);
        if (match) {
          return (
            <a
              key={i}
              href={match[2]}
              className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: A }}
            >
              {match[1]}
            </a>
          );
        }
        return part;
      })}
    </p>
  );
}

const EMAIL = "helpdesk@viruzverse.in";

const SECTIONS = [
  {
    title: "1. Who We Are",
    content: null,
    list: null,
    custom: (
      <div className="flex flex-col gap-2 text-[14px] leading-[1.85]"
        style={{ color: "rgba(255,255,255,0.55)" }}>
        <p><span style={{ color: "rgba(255,255,255,0.4)" }} className="font-mono text-[11px]">App Name</span><br />Cafeaura</p>
        <p><span style={{ color: "rgba(255,255,255,0.4)" }} className="font-mono text-[11px]">Company</span><br />Viruzverse Solutions Private Limited</p>
        <p><span style={{ color: "rgba(255,255,255,0.4)" }} className="font-mono text-[11px]">Country</span><br />India</p>
        <p>
          <span style={{ color: "rgba(255,255,255,0.4)" }} className="font-mono text-[11px]">Contact</span><br />
          <a href={`mailto:${EMAIL}`}
            className="underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: A }}>
            {EMAIL}
          </a>
        </p>
        <p>Cafeaura is intended for use by users belonging to participating institutions and communities.</p>
      </div>
    ),
  },
  {
    title: "2. Information We Collect",
    content: "We may collect the following categories of information:",
    subsections: [
      {
        sub: "a. Account and Profile Information",
        items: [
          "Full name",
          "Email address",
          "Institution or community information",
          "Other profile details you provide while creating or using your account",
        ],
      },
      {
        sub: "b. Order and Wallet Information",
        items: [
          "Order details and order history",
          "Wallet balance",
          "Wallet transaction values",
          "Refund and cancellation records",
          "Payment status information related to orders or wallet activity",
        ],
      },
      {
        sub: "c. Device and App Information",
        items: [
          "Device-related technical information",
          "App usage information required for functionality, security, and troubleshooting",
          "Push notification token or device token used to send app notifications",
        ],
      },
      {
        sub: "d. Security and Audit Information",
        items: [
          "Login, activity, and audit logs required for security, fraud prevention, debugging, and service reliability",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: "We use your information to:",
    list: [
      "Create and manage your account",
      "Identify your institution or community access",
      "Process orders, refunds, and wallet-related activity",
      "Maintain wallet balances and transaction records",
      "Send service-related notifications, including order and account updates",
      "Provide customer support",
      "Improve app performance, reliability, and security",
      "Maintain audit trails and prevent misuse, fraud, or unauthorized activity",
      "Comply with legal obligations",
    ],
  },
  {
    title: "4. Wallets and Payments",
    content:
      "Cafeaura may include wallet functionality. We may process and store wallet-related values such as balance, credits, debits, refunds, and transaction records necessary to provide the service. If payment gateway services are enabled in the future, limited payment-related information may be processed through authorized payment partners, including HDFC or similar payment service providers. We do not intend to store complete card details or sensitive banking credentials on our own servers unless required by law or handled through a compliant payment partner.",
  },
  {
    title: "5. Push Notifications",
    content:
      "We may use push notifications to send important service updates, such as order updates, wallet updates, account-related alerts, and other operational messages. To do this, we may store a device notification token associated with your account.",
  },
  {
    title: "6. How We Share Information",
    content:
      "We do not sell, rent, or trade your personal information to third parties. We may share limited information only in the following cases:",
    list: [
      "With service providers or infrastructure partners who help us operate the App, such as hosting, notifications, security, or audit logging",
      "With payment partners, if and when payment features are enabled",
      "With authorized personnel, administrators, or operators who need access to provide institution/community-related services and order fulfillment",
      "When required by law, regulation, legal process, or lawful government request",
      "To protect the rights, safety, security, and integrity of users, the App, or the Company",
    ],
    footer: "Any such sharing is limited to what is reasonably necessary for the service to function.",
  },
  {
    title: "7. Children's Privacy",
    content: `Cafeaura may be used by users under the age of 13 within participating institutions or communities. Where required, use of the App by children should take place with the consent, authorization, or supervision of a parent, guardian, school, or institution. We aim to collect only the information reasonably necessary to provide the service. If a parent, guardian, or institution believes that a child has provided personal information inappropriately, they may contact us at [${EMAIL}](mailto:${EMAIL}) to request review or deletion.`,
  },
  {
    title: "8. Data Retention",
    content:
      "We retain personal information only for as long as necessary to provide the service, maintain records, resolve disputes, comply with legal obligations, and protect the security of the App. If you request deletion of your account or personal data, we will generally delete or anonymize the relevant information within 45 days, unless we need to retain certain records for legal, security, fraud prevention, accounting, or dispute-resolution purposes.",
  },
  {
    title: "9. Data Security",
    content:
      "We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, loss, alteration, or disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.",
  },
  {
    title: "10. Your Rights and Choices",
    content: "Subject to applicable law, you may have the right to:",
    list: [
      "Access the personal information associated with your account",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of your account or personal data",
      "Withdraw from certain optional communications, where applicable",
    ],
    footer: `To make such a request, contact us at [${EMAIL}](mailto:${EMAIL}).`,
  },
  {
    title: "11. Account and Data Deletion Requests",
    content: `You may request deletion of your Cafeaura account and associated personal data by contacting us at [${EMAIL}](mailto:${EMAIL}). When submitting a deletion request, please use the email address associated with your account and provide sufficient information for us to verify your identity. We may retain limited data where necessary for legal compliance, fraud prevention, security, financial recordkeeping, or dispute resolution.`,
  },
  {
    title: "12. Third-Party Services",
    content:
      "The App may rely on third-party technology or infrastructure providers to support core functionality such as authentication, database hosting, notifications, audit logging, or future payment processing. These providers may process information on our behalf only as necessary to provide their services to us and to support the operation, security, and reliability of the App.",
  },
  {
    title: "13. International Processing",
    content:
      "Your information may be processed and stored on systems located in India or other jurisdictions where our service providers operate. By using the App, you understand that your information may be transferred to and processed in locations outside your immediate place of residence, subject to applicable safeguards.",
  },
  {
    title: "14. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. When we make material changes, we will update the Effective Date above. Your continued use of the App after the updated Privacy Policy becomes effective constitutes your acceptance of the revised policy.",
  },
  {
    title: "15. Contact Us",
    content: null,
    custom: (
      <div className="text-[14px] leading-[1.85]" style={{ color: "rgba(255,255,255,0.55)" }}>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:</p>
        <div className="mt-3 p-4 rounded-2xl"
          style={{ background: `${A}08`, border: `1px solid ${A}18` }}>
          <p className="font-bold text-[13px] mb-1" style={{ color: "rgba(255,255,255,0.8)" }}>
            Viruzverse Solutions Private Limited
          </p>
          <a href={`mailto:${EMAIL}`}
            className="text-[13px] underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: A }}>
            {EMAIL}
          </a>
        </div>
      </div>
    ),
  },
];

export default function CafeAuraPrivacyPolicy() {
  return (
    <main style={{ background: "#07060f", minHeight: "100vh", color: "white" }}>
      {/* ✅ py-20 → py-14: removes ~40px of wasted top/bottom whitespace */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14">

        {/* Back */}
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-[12px] font-mono mb-8
                     transition-colors duration-200 hover:opacity-70"
          style={{ color: "#6b7280" }}
        >
          <ArrowLeft size={13} />
          Back to CafeAura
        </Link>

        {/* Header */}
        {/* ✅ mb-12 → mb-7 */}
        <div className="mb-7">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-3"
            style={{ background: `${A}12`, color: A, border: `1px solid ${A}25` }}
          >
            CafeAura · Legal
          </span>
          <h1
            className="font-black tracking-[-0.04em] leading-tight mb-2"
            style={{ fontSize: "clamp(28px,5vw,48px)" }}
          >
            Privacy{" "}
            <span style={{
              backgroundImage: `linear-gradient(118deg,${A},${A2})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Policy
            </span>
          </h1>
          <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
            Effective Date: [Insert Date] &nbsp;·&nbsp; Viruzverse Solutions Private Limited
          </p>
        </div>

        {/* Intro */}
        {/* ✅ mb-10 → mb-7 */}
        <p className="text-[14px] leading-[1.85] mb-7"
          style={{ color: "rgba(255,255,255,0.45)" }}>
          Viruzverse Solutions Private Limited operates the Cafeaura mobile application and related
          services. This Privacy Policy explains how we collect, use, store, share, and protect your
          information when you use Cafeaura. By using the App, you agree to the collection and use
          of information in accordance with this Privacy Policy.
        </p>

        {/* Divider */}
        {/* ✅ mb-10 → mb-7 */}
        <div className="h-px mb-7"
          style={{ background: `linear-gradient(90deg,${A}40,transparent)` }}
        />

        {/* Sections */}
        {/* ✅ gap-10 → gap-6 */}
        <div className="flex flex-col gap-6">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2
                className="text-[14px] font-bold mb-2.5"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {section.title}
              </h2>

              {/* Custom render */}
              {"custom" in section && section.custom}

              {/* Regular content — uses RenderContent to handle mailto links */}
              {section.content && (
                <RenderContent
                  text={section.content}
                  className="text-[14px] leading-[1.85] mb-2.5"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                />
              )}

              {/* Bullet list */}
              {"list" in section && section.list && (
                <ul className="flex flex-col gap-1.5 mb-2.5 pl-1">
                  {section.list.map((item: string) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-[1.75]"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span className="mt-[8px] w-1 h-1 rounded-full shrink-0"
                        style={{ background: A }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer note */}
              {"footer" in section && section.footer && (
                <RenderContent
                  text={section.footer}
                  className="text-[13px] leading-[1.85] mt-2"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                />
              )}

              {/* Subsections */}
              {"subsections" in section && section.subsections && (
                <div className="flex flex-col gap-4 mt-2">
                  {section.subsections.map((sub) => (
                    <div key={sub.sub}>
                      <p className="text-[12.5px] font-semibold mb-1.5"
                        style={{ color: "rgba(255,255,255,0.6)" }}>
                        {sub.sub}
                      </p>
                      <ul className="flex flex-col gap-1.5 pl-1">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[13px] leading-[1.75]"
                            style={{ color: "rgba(255,255,255,0.45)" }}>
                            <span className="mt-[8px] w-1 h-1 rounded-full shrink-0"
                              style={{ background: A }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        {/* ✅ mt-16 → mt-10 */}
        <div className="h-px mt-10 mb-6"
          style={{ background: `linear-gradient(90deg,${A}30,transparent)` }}
        />

        <p className="text-[11px] font-mono" style={{ color: "#4b5563" }}>
          © 2026 Viruzverse Solutions Private Limited · All rights reserved
        </p>
      </div>
    </main>
  );
}