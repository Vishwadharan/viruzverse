import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — CafeAura",
  description: "Terms of Service for CafeAura by Viruzverse",
};

const A  = "#f97316";
const A2 = "#fb923c";

export default function CafeAuraTermsOfService() {
  return (
    <main style={{ background: "#07060f", minHeight: "100vh", color: "white" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">

        {/* Back */}
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-[12px] font-mono mb-10
                     transition-colors duration-200 hover:opacity-70"
          style={{ color: "#6b7280" }}
        >
          <ArrowLeft size={13} />
          Back to CafeAura
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4"
            style={{ background: `${A}12`, color: A, border: `1px solid ${A}25` }}
          >
            CafeAura · Legal
          </span>
          <h1
            className="font-black tracking-[-0.04em] leading-tight mb-3"
            style={{ fontSize: "clamp(32px,5vw,52px)" }}
          >
            Terms of{" "}
            <span style={{
              backgroundImage: `linear-gradient(118deg,${A},${A2})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Service
            </span>
          </h1>
          <p className="text-[13px] font-mono" style={{ color: "#6b7280" }}>
            Last updated: April 2026
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-10"
          style={{ background: `linear-gradient(90deg,${A}40,transparent)` }}
        />

        {/* Content */}
        <div className="flex flex-col gap-10 text-[14px] leading-[1.9]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {[
            {
              title: "1. Acceptance of Terms",
              body: "By accessing or using CafeAura, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the platform.",
            },
            {
              title: "2. Use of the Platform",
              body: "CafeAura is licensed for use by registered cafés and food-service businesses. You agree not to misuse the platform, reverse-engineer any component, or use it for unlawful purposes.",
            },
            {
              title: "3. Account Responsibilities",
              body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access.",
            },
            {
              title: "4. Payments & Billing",
              body: "Subscription fees are billed as agreed at sign-up. All payments are processed securely via Razorpay. Refunds are handled on a case-by-case basis — contact us within 7 days of billing.",
            },
            {
              title: "5. Intellectual Property",
              body: "All content, UI, and code within CafeAura are the intellectual property of Viruzverse Solutions. You may not copy, reproduce, or distribute any part of the platform without written permission.",
            },
            {
              title: "6. Service Availability",
              body: "We strive for 99.9% uptime but do not guarantee uninterrupted access. Planned maintenance will be communicated in advance. We are not liable for losses due to downtime.",
            },
            {
              title: "7. Termination",
              body: "We reserve the right to suspend or terminate your account if you violate these terms. You may cancel your subscription at any time from your dashboard or by contacting us.",
            },
            {
              title: "8. Limitation of Liability",
              body: "Viruzverse Solutions is not liable for indirect, incidental, or consequential damages arising from your use of CafeAura. Our total liability is limited to the amount paid in the last 30 days.",
            },
            {
              title: "9. Governing Law",
              body: "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Coimbatore, Tamil Nadu.",
            },
            {
              title: "10. Contact",
              body: "For questions about these terms, contact us at contact@viruzverse.in.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2
                className="text-[15px] font-bold mb-2"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {title}
              </h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}