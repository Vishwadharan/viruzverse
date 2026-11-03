"use client";

import {
  Layers,
  Users,
  CreditCard,
  ShieldCheck,
  Gauge,
  Globe,
  Database,
  Lock,
} from "lucide-react";
import ServiceDetailTemplate from "@/components/sections/services/ServiceDetailTemplate";

const CAPABILITIES = [
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    desc: "Row-level security, isolated tenant databases, custom vanity domain routing, and tenant onboarding flows built to scale.",
    tags: ["PostgreSQL RLS", "Multi-Tenant", "Custom Domains"],
  },
  {
    icon: CreditCard,
    title: "Stripe Billing & Subscriptions",
    desc: "Metered usage billing, per-seat tiers, trial flows, invoice webhooks, and automatic dunning recovery.",
    tags: ["Stripe Checkout", "Customer Portal", "Usage Metering"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Auth & RBAC",
    desc: "SAML SSO, Google/GitHub OAuth, session management, and fine-grained role-based permissions.",
    tags: ["OAuth2", "SAML SSO", "RBAC"],
  },
  {
    icon: Gauge,
    title: "Real-Time Telemetry & BI",
    desc: "Custom high-speed analytics dashboards, user activity event tracking, and scheduled CSV/PDF exports.",
    tags: ["Realtime", "ClickHouse", "Charts"],
  },
  {
    icon: Globe,
    title: "Global Edge Infrastructure",
    desc: "Edge-rendered UI, global CDN caching, auto-scaling compute, and automated disaster recovery backups.",
    tags: ["Edge CDN", "Next.js", "Docker"],
  },
  {
    icon: Lock,
    title: "Compliance & Security Hardening",
    desc: "SOC2-ready database policies, encrypted secrets at rest and in transit, and immutable audit logs.",
    tags: ["SOC2 Ready", "Audit Logs", "Encryption"],
  },
];

function SaasSimulator() {
  return (
    <div className="radiant-card rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-5 sm:p-6 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center font-bold">
            MS
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--text-primary)]">Multi-Tenant Cloud Mesh</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">PostgreSQL RLS Active · 0 Leakage</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          HEALTHY
        </span>
      </div>

      <div className="space-y-2.5 py-2">
        <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--text-muted)]">Active Workspace</p>
            <p className="font-bold text-[var(--text-primary)]">enterprise.acme.com</p>
          </div>
          <span className="text-[11px] font-bold text-[var(--accent)]">Enterprise Tier</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Monthly Recurring Revenue</p>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">$64,800</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Active Seats</p>
            <p className="text-sm font-bold text-[var(--text-primary)]">1,420 Users</p>
          </div>
        </div>

        <div className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] flex items-center justify-between text-[10.5px]">
          <span className="text-[var(--text-muted)]">Stripe Webhook Sync:</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">0 Failed Retries</span>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10.5px] text-[var(--text-muted)]">
        <span>Architecture: Next.js + Supabase</span>
        <span className="font-semibold text-[var(--accent)]">Sub-40ms Response</span>
      </div>
    </div>
  );
}

export default function CustomSaasPage() {
  return (
    <ServiceDetailTemplate
      serviceId="custom-saas"
      tag="Custom SaaS Engineering"
      title="Production-ready multi-tenant"
      titleHighlight="SaaS architecture."
      description="We engineer full-stack SaaS applications from architecture to deployment: multi-tenancy, Stripe billing integration, enterprise authentication, and real-time operational telemetry."
      metrics={[
        { label: "Deployment Speed", value: "4-8 Weeks", sub: "Production Target" },
        { label: "Architecture", value: "Multi-Tenant", sub: "RLS Isolation" },
        { label: "Code Ownership", value: "100%", sub: "Full IP Transfer" },
      ]}
      capabilities={CAPABILITIES}
      interactiveSimulator={<SaasSimulator />}
      techStack={["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Stripe", "Prisma", "Tailwind CSS", "Docker", "AWS"]}
      deliverables={[
        "Complete Next.js full-stack multi-tenant web application",
        "PostgreSQL schema with Row-Level Security policies",
        "Stripe customer portal, checkout, and webhook handlers",
        "Enterprise RBAC authentication and role management",
        "CI/CD deployment pipelines on Vercel or AWS",
      ]}
    />
  );
}
