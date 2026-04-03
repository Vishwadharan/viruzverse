import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — CafeAura",
  description:
    "Privacy Policy for CafeAura by Viruzverse Solutions Private Limited",
};

const A = "#f97316";
const A2 = "#fb923c";
const EMAIL = "helpdesk@viruzverse.in";

/* ── Inline mailto renderer ───────────────────── */
function RenderContent({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const parts = text.split(/(\[[^\]]+\]\(mailto:[^)]+\))/g);
  return (
    <p className={className} style={style}>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\((mailto:[^)]+)\)$/);
        if (match)
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
        return part;
      })}
    </p>
  );
}

/* ── Bullet item ──────────────────────────────── */
function Bullet({ text }: { text: string }) {
  return (
    <li
      className="flex items-start gap-2.5 text-[13.5px] leading-[1.75]"
      style={{ color: "rgba(255,255,255,0.5)" }}
    >
      <span
        className="mt-[8px] w-1 h-1 rounded-full shrink-0"
        style={{ background: A }}
      />
      {text}
    </li>
  );
}

/* ── Section wrapper ──────────────────────────── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        className="text-[14px] font-bold mb-2.5"
        style={{ color: "rgba(255,255,255,0.85)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ── Inline table ─────────────────────────────── */
function InfoTable({
  rows,
}: {
  rows: { label: string; value: React.ReactNode }[];
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {rows.map(({ label, value }, i) => (
        <div
          key={label}
          className="flex items-start gap-4 px-4 py-2.5 text-[13px]"
          style={{
            background:
              i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)",
            borderBottom:
              i < rows.length - 1
                ? "1px solid rgba(255,255,255,0.05)"
                : "none",
          }}
        >
          <span
            className="w-36 shrink-0 font-mono text-[11.5px] pt-px"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {label}
          </span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>{value}</span>
        </div>
      ))}
    </div>
  );
}

/* ── SDK / data table ─────────────────────────── */
function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (React.ReactNode)[][];
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden text-[12.5px]"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Header */}
      <div
        className="grid px-4 py-2"
        style={{
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {headers.map((h) => (
          <span
            key={h}
            className="font-mono text-[11px] font-semibold"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {h}
          </span>
        ))}
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid px-4 py-2.5 items-start"
          style={{
            gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
            background:
              i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
            borderBottom:
              i < rows.length - 1
                ? "1px solid rgba(255,255,255,0.04)"
                : "none",
          }}
        >
          {row.map((cell, j) => (
            <span
              key={j}
              className="leading-[1.7] pr-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Callout box ──────────────────────────────── */
function Callout({
  children,
  color = A,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-[13px] leading-[1.8] mt-3"
      style={{
        background: `${color}09`,
        border: `1px solid ${color}20`,
        color: "rgba(255,255,255,0.5)",
      }}
    >
      <span className="shrink-0 mt-px" style={{ color }}>
        ⚠
      </span>
      <span>{children}</span>
    </div>
  );
}

/* ── Divider ──────────────────────────────────── */
function Divider({ opacity = "40" }: { opacity?: string }) {
  return (
    <div
      className="h-px"
      style={{
        background: `linear-gradient(90deg,${A}${opacity},transparent)`,
      }}
    />
  );
}

/* ══ Page ════════════════════════════════════════ */
export default function CafeAuraPrivacyPolicy() {
  return (
    <main style={{ background: "#07060f", minHeight: "100vh", color: "white" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14">

        {/* Back */}
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-[12px] font-mono mb-8
                     transition-opacity duration-200 hover:opacity-70"
          style={{ color: "#6b7280" }}
        >
          <ArrowLeft size={13} />
          Back to CafeAura
        </Link>

        {/* Header */}
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
            <span
              style={{
                backgroundImage: `linear-gradient(118deg,${A},${A2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Policy
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
              Effective Date: April 1, 2026
            </p>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>·</span>
            <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
              Last Updated: April 1, 2026
            </p>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>·</span>
            <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
              Viruzverse Solutions Private Limited
            </p>
          </div>
        </div>

        {/* Intro */}
        <p
          className="text-[14px] leading-[1.85] mb-7"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Viruzverse Solutions Private Limited ("Company", "we", "our", or "us")
          operates the Cafeaura mobile application and related services
          (collectively, the "App"). This Privacy Policy explains how we collect,
          use, store, share, and protect your personal data when you use our App.
          By downloading or using the App, you agree to this Privacy Policy. If
          you do not agree, please do not use the App.
        </p>

        <Divider />
        <div className="h-7" />

        {/* ── Sections ── */}
        <div className="flex flex-col gap-6">

          {/* 1 */}
          <Section title="1. Who We Are">
            <InfoTable
              rows={[
                { label: "App Name", value: "Cafeaura" },
                { label: "Company", value: "Viruzverse Solutions Private Limited" },
                { label: "Country", value: "India" },
                {
                  label: "Contact Email",
                  value: (
                    <a
                      href={`mailto:${EMAIL}`}
                      className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                      style={{ color: A }}
                    >
                      {EMAIL}
                    </a>
                  ),
                },
              ]}
            />
            <p
              className="text-[13.5px] leading-[1.8] mt-3"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Cafeaura is a closed-network food ordering platform available
              exclusively to verified users of participating institutional
              communities (such as campuses, organisations, or similar
              institutions).
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Data We Collect">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We collect only the data necessary to operate and improve the App.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  sub: "a. Account & Identity Data",
                  tag: "Linked to your identity",
                  tagColor: "#f87171",
                  items: [
                    "Full name",
                    "Email address",
                    "Institution or campus details",
                    "Account credentials (managed securely via authentication provider)",
                  ],
                },
                {
                  sub: "b. Order & Wallet Data",
                  tag: "Linked to your identity",
                  tagColor: "#f87171",
                  items: [
                    "Order details and history",
                    "Wallet balance and credit/debit records",
                    "Refund and adjustment records",
                    "Payment status and transaction reference IDs",
                    "Cancellation records",
                  ],
                },
                {
                  sub: "c. Device & Technical Data",
                  tag: "May be linked to your identity",
                  tagColor: "#fbbf24",
                  items: [
                    "Device type, operating system, and app version",
                    "App interaction and usage data",
                    "Log and diagnostic data (for debugging, security, and service reliability)",
                    "IP address (retained in server logs)",
                  ],
                },
                {
                  sub: "d. Notification Data",
                  tag: "Linked to your identity",
                  tagColor: "#f87171",
                  items: [
                    "Device push notification token (used solely to deliver transactional notifications to your device)",
                  ],
                },
                {
                  sub: "e. User-Submitted Content",
                  tag: "Linked to your identity",
                  tagColor: "#f87171",
                  items: ["Reviews, ratings, or feedback submitted within the App"],
                },
                {
                  sub: "f. Analytics Data",
                  tag: "Not linked to your identity",
                  tagColor: "#10b981",
                  items: [
                    "Aggregated, anonymised app usage and performance data used to improve the App",
                  ],
                },
              ].map((block) => (
                <div key={block.sub}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <p
                      className="text-[13px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {block.sub}
                    </p>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                      style={{
                        background: `${block.tagColor}12`,
                        color: block.tagColor,
                        border: `1px solid ${block.tagColor}20`,
                      }}
                    >
                      {block.tag}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 pl-1">
                    {block.items.map((item) => (
                      <Bullet key={item} text={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="mt-4 px-4 py-3 rounded-xl text-[13px] leading-[1.8]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <span className="font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                Cross-App Tracking:
              </span>{" "}
              We do <span className="font-bold text-white">not</span> track you
              across third-party apps or websites for advertising purposes. All
              data collected is used solely to operate and improve Cafeaura.
            </div>
          </Section>

          {/* 3 */}
          <Section title="3. How We Use Your Data">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We use your data to:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Create, verify, and manage your account",
                "Authenticate and authorise institutional access",
                "Process orders, wallet transactions, refunds, and cancellations",
                "Display your order history and wallet balance within the App",
                "Send transactional notifications (order confirmations, wallet updates, account alerts)",
                "Detect and prevent fraud, abuse, or unauthorised access",
                "Diagnose crashes, fix bugs, and improve App performance",
                "Conduct internal analytics to improve the service",
                "Provide customer support and respond to your requests",
                "Comply with legal, regulatory, and contractual obligations",
                "Maintain audit records for financial and security purposes",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
            <p
              className="text-[13px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              We do <strong className="text-white/60">not</strong> use your data
              for advertising, profiling, or sale to third parties.
            </p>
          </Section>

          {/* 4 */}
          <Section title="4. Payments & Wallet">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Cafeaura uses authorised third-party payment gateways to process payments. We do{" "}
              <strong className="text-white/60">not</strong> store sensitive
              financial data such as card numbers, CVVs, or bank credentials on
              our own servers. We store only:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-4">
              {[
                "Transaction reference IDs",
                "Payment status (success / failed / pending)",
                "Wallet balance and credit/debit records",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
            <p
              className="text-[12.5px] font-semibold mb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Wallet Terms
            </p>
            <ul className="flex flex-col gap-1.5 pl-1">
              {[
                "Wallet credits are issued as in-app balance for use within Cafeaura only",
                "Wallet credits are non-transferable and non-withdrawable except where required by applicable law",
                "Refunds for cancelled orders are credited to your in-app wallet balance",
                "Refunds to the original payment method are not provided unless required by law",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Third-Party Services & SDKs">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We integrate the following third-party providers. Each provider
              processes data only as necessary to deliver their service and does
              not use your data for their own marketing purposes:
            </p>
            <DataTable
              headers={["Provider", "Purpose", "Privacy Policy"]}
              rows={[
                [
                  <span className="font-semibold text-white/70">Supabase</span>,
                  "Authentication, database, and real-time data",
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: A }}
                  >
                    supabase.com/privacy
                    <ExternalLink size={10} />
                  </a>,
                ],
                [
                  <span className="font-semibold text-white/70">Firebase (Google)</span>,
                  "Push notifications and crash reporting",
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: A }}
                  >
                    firebase.google.com
                    <ExternalLink size={10} />
                  </a>,
                ],
                [
                  <span className="font-semibold text-white/70">Sentry</span>,
                  "Crash reporting and diagnostics",
                  <a
                    href="https://sentry.io/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: A }}
                  >
                    sentry.io/privacy
                    <ExternalLink size={10} />
                  </a>,
                ],
                [
                  <span className="font-semibold text-white/70">PostHog</span>,
                  "Product analytics (anonymised)",
                  <a
                    href="https://posthog.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: A }}
                  >
                    posthog.com/privacy
                    <ExternalLink size={10} />
                  </a>,
                ],
                [
                  <span className="font-semibold text-white/70">Payment Gateway</span>,
                  "Payment processing",
                  <a
                    href="https://razorpay.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: A }}
                  >
                    razorpay.com/privacy
                    <ExternalLink size={10} />
                  </a>,
                ],
              ]}
            />
          </Section>

          {/* 6 */}
          <Section title="6. Data Sharing">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We do <strong className="text-white/60">not</strong> sell, rent, or
              trade your personal data. We share limited data only in the following
              circumstances:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Canteen or institution administrators — name and order details shared for order fulfilment within your institution",
                "Payment gateway providers — transaction data processed solely for payment execution",
                "Service providers listed in Section 5 — data shared only as necessary to operate the App",
                "Legal obligations — when required by applicable law, court order, or lawful government authority",
                "Safety and security — to protect the rights, property, or safety of users, the Company, or the public",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
            <p
              className="text-[13px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              All sharing is limited to what is strictly necessary for the stated
              purpose.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Data Security">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We implement appropriate technical and organisational safeguards,
              including:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Encryption in transit (HTTPS / TLS) for all data communications",
                "Secure, token-based authentication systems",
                "Role-based access controls limiting who can access user data",
                "Regular security monitoring and audit logging",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
            <p
              className="text-[13px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              No system is completely secure. While we take reasonable precautions,
              we cannot guarantee absolute security. In the event of a data breach
              that affects your rights and freedoms, we will notify you and relevant
              authorities as required by applicable law.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Data Retention">
            <DataTable
              headers={["Scenario", "Retention Period"]}
              rows={[
                ["Active account", "Duration of account activity"],
                ["After deletion request", "Up to 45 days for full deletion"],
                [
                  "Financial / transaction records",
                  "As required by applicable accounting and tax law",
                ],
                [
                  "Legal, fraud prevention, or dispute records",
                  "As required by law or until resolution",
                ],
                [
                  "Anonymised analytics data",
                  "Indefinitely (no personal identifiers retained)",
                ],
              ]}
            />
            <p
              className="text-[13px] leading-[1.8] mt-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              After the applicable retention period, personal data is deleted or
              irreversibly anonymised.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Account Deletion">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              You can permanently delete your Cafeaura account and associated
              personal data in either of the following ways:
            </p>
            <div className="flex flex-col gap-2.5 mb-3">
              {[
                {
                  step: "1",
                  label: "In-App",
                  desc: "Navigate to Settings → Account → Delete Account within the App",
                },
                {
                  step: "2",
                  label: "By Email",
                  desc: `Contact us at ${EMAIL} with subject line "Account Deletion Request" from your registered email address`,
                },
              ].map(({ step, label, desc }) => (
                <div
                  key={step}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl text-[13.5px] leading-[1.75]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-px"
                    style={{ background: `${A}20`, color: A }}
                  >
                    {step}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>
                    <strong style={{ color: "rgba(255,255,255,0.7)" }}>
                      {label}:
                    </strong>{" "}
                    {desc}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="text-[13px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Deletion requests are processed within{" "}
              <strong className="text-white/60">45 days</strong>. We may retain
              limited data where necessary for legal compliance, fraud prevention,
              financial recordkeeping, or active dispute resolution, as described
              in Section 8.
            </p>
            <Callout>
              Deleting your account is permanent and irreversible. Your order
              history, wallet balance, and profile data will be permanently removed
              subject to the retention exceptions above.
            </Callout>
          </Section>

          {/* 10 */}
          <Section title="10. Your Rights & Choices">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Subject to applicable law, you have the right to:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Access — request a copy of the personal data we hold about you",
                "Correction — request correction of inaccurate or outdated data",
                "Deletion — request deletion of your account and personal data (see Section 9)",
                "Restriction — request that we limit processing of your data in certain circumstances",
                "Portability — request your data in a structured, machine-readable format where applicable",
                "Withdraw consent — where processing is based on consent, you may withdraw it at any time",
                "Notifications — control or disable push notifications via your device's system settings at any time",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
            <p
              className="text-[13px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              To exercise any of these rights, contact us at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}
              >
                {EMAIL}
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Children's Privacy">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Cafeaura is intended for users aged{" "}
              <strong className="text-white/60">13 years and above</strong>. Users
              between the ages of 13 and 17 should use the App only with the
              consent and oversight of a parent, guardian, or their institution.
            </p>
            <p
              className="text-[13.5px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We do <strong className="text-white/60">not</strong> knowingly
              collect personal data from children under the age of 13. If you are
              a parent, guardian, or institution and believe a child under 13 has
              provided personal information without appropriate authorisation,
              please contact us immediately at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}
              >
                {EMAIL}
              </a>
              . We will promptly review and delete the relevant information.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. International Data Processing">
            <p
              className="text-[13.5px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your data may be processed and stored on servers located outside your
              country of residence, operated by our trusted third-party providers
              (see Section 5). These transfers are made subject to appropriate
              contractual and technical safeguards in compliance with applicable
              data protection law. By using the App, you acknowledge and consent to
              such transfers.
            </p>
          </Section>

          {/* 13 */}
          <Section title="13. Changes to This Policy">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We may update this Privacy Policy periodically to reflect changes in
              our practices, legal requirements, or the App. When material changes
              are made:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-2.5">
              {[
                "The Effective Date at the top of this policy will be updated",
                "Where appropriate, we will notify you via the App or by email",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
            <p
              className="text-[13px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Your continued use of the App following the updated policy's
              effective date constitutes your acceptance of the revised terms. We
              encourage you to review this policy periodically.
            </p>
          </Section>

          {/* 14 */}
          <Section title="14. Contact Us">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              For any questions, requests, or concerns about this Privacy Policy or
              your personal data:
            </p>
            <div
              className="p-4 rounded-2xl"
              style={{ background: `${A}08`, border: `1px solid ${A}18` }}
            >
              <p
                className="font-bold text-[13px] mb-1"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Viruzverse Solutions Private Limited
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[13px] underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}
              >
                {EMAIL}
              </a>
              <p
                className="text-[12px] font-mono mt-2"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                We aim to respond to all enquiries within 5 business days.
              </p>
            </div>
          </Section>

        </div>

        {/* Bottom divider */}
        <div className="mt-10 mb-6">
          <Divider opacity="30" />
        </div>
      </div>
    </main>
  );
}