import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — CafeAura",
  description:
    "Privacy Policy for CafeAura by Viruzverse Solutions Private Limited",
};

const EMAIL = "helpdesk@viruzverse.in";

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--accent)]" />
      <span>{text}</span>
    </li>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 py-4 border-b border-[var(--border-subtle)]">
      <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function CafeAuraPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent pt-24 pb-20 transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-6"
        >
          <ArrowLeft size={13} />
          <span>Back to CafeAura</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--accent)] mb-3">
            <ShieldCheck size={13} />
            <span>CafeAura · Privacy & Legal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
            <p>Effective Date: April 1, 2026</p>
            <span>·</span>
            <p>Last Updated: April 1, 2026</p>
            <span>·</span>
            <p>Viruzverse Solutions Private Limited</p>
          </div>
        </div>

        {/* Notice Card */}
        <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] mb-6 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          This Privacy Policy explains how Viruzverse Solutions Private Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, processes, and protects your information when you use CafeAura (the &quot;Platform&quot; or &quot;App&quot;), including our mobile applications, POS software, and web dashboards.
        </div>

        {/* Content Sections */}
        <div className="flex flex-col">
          <Section title="1. Information We Collect">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We collect information to operate the restaurant management system efficiently and maintain accurate transactional records:
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <Bullet text="Account & Profile Data: Business name, owner name, email address, phone number, and physical store addresses." />
              <Bullet text="Operational & Menu Data: Dish catalogs, pricing tables, inventory levels, recipes, and table layouts." />
              <Bullet text="Transactional Records: Orders placed, kitchen order tickets (KOT), timestamps, bill amounts, and payment status indicators." />
              <Bullet text="Staff & RBAC Logs: Cashier logins, manager overrides, audit logs for voided tickets or refunded bills." />
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Your data is processed strictly to deliver CafeAura services:
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <Bullet text="Routing orders in real-time from floor tablets to kitchen printers." />
              <Bullet text="Syncing offline local SQLite orders with cloud PostgreSQL databases when connection is restored." />
              <Bullet text="Generating revenue telemetry, dish turnover analysis, and ingredient deduction alerts." />
              <Bullet text="Detecting operational anomalies, unauthorized voids, and verifying staff permissions." />
            </ul>
          </Section>

          <Section title="3. Data Storage & Security">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We employ strict industry-standard security safeguards. Cloud data is encrypted both in transit (TLS 1.3) and at rest (AES-256). Local offline device databases are encrypted with hardware-backed keychains. We do not sell your transactional data or customer phone numbers to advertisers or third-party data brokers.
            </p>
          </Section>

          <Section title="4. Multi-Tenant Data Isolation">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              CafeAura utilizes Row-Level Security (RLS) in PostgreSQL. Each restaurant outlet&apos;s data is strictly partitioned and inaccessible to any other tenant on the platform.
            </p>
          </Section>

          <Section title="5. Data Retention & Deletion">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We retain business and operational data for the duration of your active subscription. You may request full export or permanent deletion of your restaurant database at any time by contacting our data protection team.
            </p>
          </Section>

          <Section title="6. Contact Information">
            <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] mt-2">
              <p className="font-bold text-xs sm:text-sm text-[var(--text-primary)] mb-1">
                Viruzverse Solutions Private Limited
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-2">
                <Mail size={13} />
                <a href={`mailto:${EMAIL}`} className="underline hover:opacity-80">
                  {EMAIL}
                </a>
              </div>
              <p className="text-[11px] font-mono text-[var(--text-muted)]">
                Inquiries are typically addressed within 2 to 3 business days.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
