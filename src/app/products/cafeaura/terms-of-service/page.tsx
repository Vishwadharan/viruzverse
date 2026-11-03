import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service — CafeAura",
  description: "Terms of Service for CafeAura by Viruzverse Solutions Private Limited",
};

const TERMS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or utilizing CafeAura, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the platform.",
  },
  {
    title: "2. Use of the Platform",
    body: "CafeAura is licensed for dining room operations, POS billing, and inventory management. You agree not to misuse the platform, reverse-engineer proprietary drivers, or use the service for unlawful purposes.",
  },
  {
    title: "3. Account Security",
    body: "You are responsible for securing manager passwords, cashier PINs, and API credentials. Notify us immediately of any unauthorized access.",
  },
  {
    title: "4. Subscription & Billing",
    body: "Subscription fees are billed transparently on monthly or annual milestones. Payments are processed securely with automatic receipts and GST invoices.",
  },
  {
    title: "5. Intellectual Property",
    body: "All proprietary code, UI algorithms, and offline synchronization mechanisms in CafeAura are owned by Viruzverse Solutions Private Limited.",
  },
  {
    title: "6. Service Uptime SLA",
    body: "We target 99.9% cloud availability. In the event of internet drops, local SQLite offline mode ensures uninterrupted billing and table ticketing.",
  },
  {
    title: "7. Governing Law",
    body: "These terms are governed by the laws of India, under the jurisdiction of courts in Coimbatore, Tamil Nadu.",
  },
  {
    title: "8. Contact Information",
    body: "For inquiries regarding terms and licensing: helpdesk@viruzverse.in.",
  },
];

export default function CafeAuraTermsOfService() {
  return (
    <main className="min-h-screen bg-transparent pt-24 pb-20 transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-6"
        >
          <ArrowLeft size={13} />
          <span>Back to CafeAura</span>
        </Link>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--accent)] mb-3">
            <ShieldCheck size={13} />
            <span>CafeAura · Legal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-[var(--text-muted)]">
            Effective Date: April 2026 · Viruzverse Solutions Private Limited
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-4 border-t border-[var(--border-subtle)]">
          {TERMS.map(({ title, body }) => (
            <div key={title} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
              <h2 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">
                {title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
