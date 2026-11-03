"use client";

import {
  Users,
  Package,
  Layers,
  Database,
  ShieldCheck,
  TrendingUp,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import ServiceDetailTemplate from "@/components/sections/services/ServiceDetailTemplate";

const CAPABILITIES = [
  {
    icon: Workflow,
    title: "Tailored Deal Pipelines",
    desc: "Visual kanban stages, automated lead assignment, activity tracking, and sales velocity metrics built for your team.",
    tags: ["Kanban", "Lead Scoring", "Automations"],
  },
  {
    icon: Package,
    title: "Inventory & Warehouse Logic",
    desc: "Multi-location inventory tracking, purchase orders, reorder point triggers, and vendor contract management.",
    tags: ["Multi-Location", "FIFO/LIFO", "Batch Tracking"],
  },
  {
    icon: ShieldCheck,
    title: "Granular Role Governance",
    desc: "Restrict sensitive financial figures, customer contact info, and confidential quotes based on strict employee roles.",
    tags: ["Field-Level RBAC", "Audit Trail", "Security"],
  },
  {
    icon: Database,
    title: "Legacy Data Migration",
    desc: "Extract, transform, and load historical records from Salesforce, Zoho, Excel, or on-prem legacy databases with zero data loss.",
    tags: ["ETL", "Data Cleaning", "Zero Downtime"],
  },
  {
    icon: TrendingUp,
    title: "Executive Financial Telemetry",
    desc: "Custom P&L reports, cash flow projections, commission calculations, and operational bottlenecks surfaced in real time.",
    tags: ["Cash Flow", "Forecasting", "Custom BI"],
  },
  {
    icon: Users,
    title: "Omnichannel Communications",
    desc: "Unified customer timelines consolidating emails, SMS alerts, WhatsApp inquiries, and phone notes in one thread.",
    tags: ["Twilio", "SendGrid", "Unified Thread"],
  },
];

function ErpSimulator() {
  return (
    <div className="radiant-card rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-5 sm:p-6 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center font-bold">
            ERP
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--text-primary)]">Operations Core</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Warehouse &amp; Pipeline Synchronized</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          SYNCED
        </span>
      </div>

      <div className="space-y-2.5 py-2">
        <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--text-muted)]">Active Deal Stage</p>
            <p className="font-bold text-[var(--text-primary)]">Proposal Review (4 Deals)</p>
          </div>
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">₹38.5 Lakhs</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Warehouse SKU Count</p>
            <p className="text-sm font-bold text-[var(--text-primary)]">4,812 Items</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Low Stock Alerts</p>
            <p className="text-sm font-bold text-amber-500">2 Items</p>
          </div>
        </div>

        <div className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] flex items-center justify-between text-[10.5px]">
          <span className="text-[var(--text-muted)]">Audit Log:</span>
          <span className="font-semibold text-[var(--text-primary)]">PO-8821 Approved by Director</span>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10.5px] text-[var(--text-muted)]">
        <span>Zero bloated third-party seat fees</span>
        <span className="font-semibold text-[var(--accent)]">Tailored Logic</span>
      </div>
    </div>
  );
}

export default function CrmErpPage() {
  return (
    <ServiceDetailTemplate
      serviceId="crm-erp"
      tag="Enterprise Operations"
      title="Bespoke CRM & ERP platforms"
      titleHighlight="built around your operations."
      description="Stop forcing your team into generic legacy software. We build bespoke CRM and ERP solutions with custom deal pipelines, multi-warehouse inventory, and role-based operational controls."
      metrics={[
        { label: "Seat Licensing", value: "₹0 / Seat", sub: "Unlimited Users" },
        { label: "Data Ownership", value: "Self-Hosted", sub: "Your Cloud DB" },
        { label: "Custom Workflows", value: "100% Fit", sub: "Zero Bloat" },
      ]}
      capabilities={CAPABILITIES}
      interactiveSimulator={<ErpSimulator />}
      techStack={["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis", "Docker", "REST / GraphQL"]}
      deliverables={[
        "Custom web application for desktop and tablet floor operations",
        "Configured deal pipeline and customer relationship management",
        "Inventory, SKU tracking, and automated purchase ordering",
        "Granular field-level role-based authorization",
        "Data migration scripts from legacy software",
      ]}
    />
  );
}
