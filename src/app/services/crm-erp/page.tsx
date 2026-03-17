"use client";

import { motion, AnimatePresence, type Transition } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight, Users, BarChart3, Database,
  TrendingUp, Workflow, PackageSearch,
  CheckCircle2, ShieldCheck,
} from "lucide-react";

const EASE  = [0.22, 1, 0.36, 1] as [number, number, number, number];
const COLOR = "#0891b2";

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

/* ── Capabilities ─────────────────────────────── */
const CAPABILITIES = [
  {
    icon: Users,
    title: "Customer 360°",
    desc: "Every touchpoint — emails, calls, purchases, support tickets — unified into a single timeline per contact.",
    tags: ["Contacts", "Timeline", "Notes"],
    highlights: ["Full interaction history", "Smart contact scoring", "Team activity feed"],
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline",
    desc: "Drag-and-drop deal stages, automated follow-up reminders and win/loss analytics baked in from day one.",
    tags: ["Deals", "Stages", "Forecasting"],
    highlights: null,
  },
  {
    icon: PackageSearch,
    title: "Inventory & ERP",
    desc: "Real-time stock levels, purchase orders, supplier management and COGS reporting in one unified view.",
    tags: ["Stock", "PO", "COGS"],
    highlights: null,
  },
  {
    icon: BarChart3,
    title: "AI Predictions",
    desc: "Churn prediction, lead scoring, demand forecasting and anomaly detection — powered by your own historical data.",
    tags: ["Churn", "Scoring", "Forecast"],
    highlights: ["Churn risk alerts", "Deal probability scoring", "Demand forecast per SKU"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Rule-based and AI-triggered automations across every module — no manual repetition, no missed follow-ups.",
    tags: ["Rules", "Triggers", "Queues"],
    highlights: null,
  },
  {
    icon: Database,
    title: "Integrations",
    desc: "Native connectors for WhatsApp, email, Tally, Zoho, Shopify, and any REST API your business relies on.",
    tags: ["WhatsApp", "REST", "Webhooks"],
    highlights: ["Connect in hours, not weeks", "Bi-directional data sync", "Custom webhook builder"],
  },
];

/* ── Industry tabs ────────────────────────────── */
const INDUSTRIES = [
  {
    label: "Sales",
    cases: [
      "B2B pipeline & deal forecasting",
      "Lead scoring & qualification",
      "Win/loss reporting",
      "Commission tracking",
    ],
  },
  {
    label: "Operations",
    cases: [
      "Field service management",
      "Task & SLA tracking",
      "Resource allocation",
      "Approval workflows",
    ],
  },
  {
    label: "Retail",
    cases: [
      "Inventory & POS sync",
      "Supplier management",
      "Return & refund tracking",
      "Multi-location stock",
    ],
  },
  {
    label: "Healthcare",
    cases: [
      "Patient & billing CRM",
      "Appointment scheduling",
      "Insurance claim tracking",
      "Doctor-patient timeline",
    ],
  },
  {
    label: "PropTech",
    cases: [
      "Deal & lead tracking",
      "Site visit scheduling",
      "Document management",
      "Broker commission splits",
    ],
  },
  {
    label: "Mfg",
    cases: [
      "BOM & production planning",
      "Vendor & PO management",
      "Quality control tracking",
      "COGS reporting",
    ],
  },
];

/* ── Platform modules ─────────────────────────── */
const MODULES = [
  {
    icon: Users,
    label: "CRM",
    sub: "Contacts · Deals · Timeline",
    status: "active" as const,
  },
  {
    icon: PackageSearch,
    label: "Inventory",
    sub: "Stock · PO · Suppliers",
    status: "active" as const,
  },
  {
    icon: BarChart3,
    label: "Analytics",
    sub: "Forecasting · AI Insights",
    status: "active" as const,
  },
  {
    icon: Workflow,
    label: "Automation",
    sub: "Rules · Triggers · Queues",
    status: "syncing" as const,
  },
];

const INTEGRATIONS = ["WhatsApp", "Shopify", "Tally", "Zoho", "Stripe"];

/* ── Platform overview card ───────────────────── */
function PlatformCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: EASE } satisfies Transition}
      className="flex flex-col w-full rounded-3xl overflow-hidden"
      style={{
        background: "#020d12",
        boxShadow: `0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px ${COLOR}28`,
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ background: "#041018", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[11px] font-mono" style={{ color: "#1e3a47" }}>
          platform.overview
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono" style={{ color: "#10b981" }}>
            all systems live
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        {/* Module header */}
        <div className="flex items-center justify-between px-1">
          <span
            className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em]"
            style={{ color: `${COLOR}99` }}
          >
            Active modules
          </span>
          <span
            className="text-[11px] font-mono px-2 py-0.5 rounded-lg"
            style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}28` }}
          >
            4 running
          </span>
        </div>

        {/* Module rows */}
        <div className="flex flex-col gap-2">
          {MODULES.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.32, delay: 0.5 + i * 0.08, ease: EASE } satisfies Transition}
                className="flex items-center gap-3 px-3 py-2.5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${COLOR}18`, border: `1px solid ${COLOR}25` }}
                >
                  <Icon size={15} style={{ color: COLOR }} strokeWidth={1.7} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-bold text-white leading-tight">{mod.label}</p>
                  <p className="text-[10px] font-mono mt-0.5 truncate"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    {mod.sub}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {mod.status === "syncing" ? (
                    <>
                      <div className="flex gap-0.5">
                        {[...Array(3)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="w-1 h-1 rounded-full"
                            style={{ background: COLOR }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono" style={{ color: COLOR }}>syncing</span>
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981" }} />
                      <span className="text-[10px] font-mono" style={{ color: "#10b981" }}>active</span>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Integrations */}
        <div className="flex items-center justify-between px-1">
          <span
            className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em]"
            style={{ color: `${COLOR}99` }}
          >
            Integrations
          </span>
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            + any REST API
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {INTEGRATIONS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.9 + i * 0.06, ease: EASE } satisfies Transition}
              className="px-2.5 py-1 text-[11px] font-mono rounded-xl"
              style={{
                background: `${COLOR}10`,
                color: "#67e8f9",
                border: `1px solid ${COLOR}20`,
              }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={10} style={{ color: "#1e3a47" }} />
            <span className="text-[10px] font-mono" style={{ color: "#1e3a47" }}>
              RBAC · Multi-role · Audit log
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full"
                style={{ background: "#1e3a47" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Sep ──────────────────────────────────────── */
function Sep() {
  return (
    <div
      className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
      style={{
        background: `linear-gradient(90deg,transparent,#67e8f9 40%,${COLOR} 50%,#67e8f9 60%,transparent)`,
      }}
    />
  );
}

/* ══ Page ════════════════════════════════════════ */
export default function CRMERPContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main style={{ backgroundColor: "#faf9ff" }}>

      {/* ══ HERO ══ */}
      <section className="relative pt-5 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}22 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}22 1px,transparent 1px)`,
            backgroundSize: "52px 52px",
            opacity: 0.18,
          }}
        />
        <div
          className="absolute -top-40 right-0 w-150 h-150 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${COLOR}18 0%,transparent 65%)` }}
        />
        <div
          className="absolute bottom-0 -left-20 w-125 h-125 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(103,232,249,0.07) 0%,transparent 65%)" }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div {...rise(0)} className="flex items-center gap-2 mb-7">
                <Link
                  href="/services"
                  className="text-[11px] font-mono transition-opacity hover:opacity-70"
                  style={{ color: "#9ca3af" }}
                >
                  Services
                </Link>
                <span style={{ color: "#d1d5db" }}>/</span>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             text-[11px] font-mono font-semibold"
                  style={{ color: COLOR, background: `${COLOR}0f`, border: `1px solid ${COLOR}28` }}
                >
                  <Users size={11} strokeWidth={2} />
                  CRM & ERP
                </span>
              </motion.div>

              <motion.h1
                {...rise(0.08)}
                className="font-black tracking-[-0.04em] leading-[1.03] mb-6"
                style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0a0a0f" }}
              >
                Systems built for
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#22d3ee 55%,#67e8f9)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  how you work.
                </span>
              </motion.h1>

              <motion.p
                {...rise(0.14)}
                className="text-[16px] leading-[1.85] mb-8 max-w-lg"
                style={{ color: "#6b7280" }}
              >
                Custom CRMs and ERPs that match your exact workflows — not generic
                software you spend months adapting. Pipelines, inventory, RBAC and
                AI predictions, delivered as one coherent platform.
              </motion.p>

              <motion.div {...rise(0.2)} className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#0e7490)`,
                    boxShadow: `0 8px 28px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Book a demo
                  <ArrowUpRight size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: "#374151",
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.95)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  All services
                </Link>
              </motion.div>

              <motion.div {...rise(0.26)} className="flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Sales pipelines · Forecasting",
                  "Inventory · PO · COGS",
                  "RBAC · Multi-role · Audit log",
                ].map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-[12px] font-mono"
                    style={{ color: "#9ca3af" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#10b981" }} />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <PlatformCard />
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES — Bento grid ══ */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}18 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}18 1px,transparent 1px)`,
            backgroundSize: "52px 52px",
            opacity: 0.12,
          }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="mb-12">
            <p
              className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: COLOR }}
            >
              Capabilities
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2
                className="font-black tracking-[-0.03em] leading-[1.06]"
                style={{ fontSize: "clamp(24px,4vw,46px)", color: "#0a0a0f" }}
              >
                Your workflows,
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#22d3ee 55%,#67e8f9)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  finally systemised.
                </span>
              </h2>
              <p className="text-[14px] max-w-xs text-right hidden sm:block" style={{ color: "#9ca3af" }}>
                No Salesforce tax.<br />No implementation consultants.
              </p>
            </div>
          </motion.div>

          {/* Bento: wide cards for items with highlights, narrow for the rest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(({ icon: Icon, title, desc, tags, highlights }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE } satisfies Transition}
                className={`group relative flex flex-col p-6 rounded-3xl overflow-hidden
                            transition-all duration-300 hover:-translate-y-1.5
                            ${highlights ? "lg:col-span-2" : "lg:col-span-1"}`}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                {/* Ghost number */}
                <span
                  className="absolute -top-3 -right-1 font-black leading-none select-none
                             pointer-events-none opacity-[0.04] group-hover:opacity-[0.07]
                             transition-opacity duration-300"
                  style={{ fontSize: "80px", color: COLOR, letterSpacing: "-0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Hover wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                             transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%,${COLOR}0d 0%,transparent 65%)` }}
                />

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg,transparent,${COLOR},transparent)` }}
                />

                <div className={`relative z-10 flex ${highlights ? "flex-row gap-8" : "flex-col"} flex-1`}>
                  {/* Main content */}
                  <div className={`flex flex-col ${highlights ? "flex-1 min-w-0" : ""}`}>
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5
                                 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: `${COLOR}12`, border: `1.5px solid ${COLOR}28` }}
                    >
                      <Icon size={20} style={{ color: COLOR }} strokeWidth={1.7} />
                    </div>
                    <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0a0a0f" }}>{title}</h3>
                    <p className="text-[13px] leading-[1.8] mb-4 flex-1" style={{ color: "#6b7280" }}>{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-lg"
                          style={{ background: `${COLOR}0f`, color: COLOR, border: `1px solid ${COLOR}22` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights column — only on wide cards */}
                  {highlights && (
                    <div
                      className="hidden lg:flex flex-col justify-center gap-3 shrink-0 w-52 pl-8"
                      style={{ borderLeft: `1px solid ${COLOR}14` }}
                    >
                      {highlights.map(h => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle2 size={13} style={{ color: COLOR }} className="mt-0.5 shrink-0" />
                          <span className="text-[12px] leading-[1.6]" style={{ color: "#6b7280" }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES — Industry tabs ══ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg,#020d12 0%,#040f17 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}08 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}08 1px,transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-48 pointer-events-none"
          style={{ background: `radial-gradient(ellipse,${COLOR}22 0%,transparent 70%)` }}
        />
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,#67e8f9 40%,${COLOR} 50%,#67e8f9 60%,transparent)`,
          }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="mb-12">
            <p
              className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3 text-center"
              style={{ color: "#22d3ee" }}
            >
              Use cases
            </p>
            <h2
              className="font-black tracking-[-0.03em] leading-[1.05] text-white text-center mb-10"
              style={{ fontSize: "clamp(24px,4vw,46px)" }}
            >
              Tailored for every{" "}
              <span style={{
                backgroundImage: "linear-gradient(118deg,#22d3ee 10%,#67e8f9 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                business type.
              </span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.label}
                  onClick={() => setActiveTab(i)}
                  className="px-4 py-2 rounded-xl text-[12px] font-mono font-semibold
                             transition-all duration-200"
                  style={{
                    background: activeTab === i ? `${COLOR}28` : "rgba(255,255,255,0.04)",
                    color:      activeTab === i ? "#22d3ee"    : "rgba(255,255,255,0.4)",
                    border:     activeTab === i ? `1px solid ${COLOR}40` : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {ind.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: EASE } satisfies Transition}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {INDUSTRIES[activeTab].cases.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE } satisfies Transition}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${COLOR}20`, border: `1px solid ${COLOR}30` }}
                    >
                      <CheckCircle2 size={12} style={{ color: COLOR }} />
                    </div>
                    <p className="text-[13px] font-medium leading-[1.6]"
                      style={{ color: "rgba(255,255,255,0.65)" }}>
                      {c}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            {...rise(0)}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 30% 50%,${COLOR}0d 0%,transparent 60%)` }}
            />
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
              style={{ background: `linear-gradient(180deg,${COLOR},#22d3ee,${COLOR})` }}
            />

            <div
              className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center
                          justify-between gap-8 px-8 sm:px-12 py-12"
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${COLOR}0f`, border: `1px solid ${COLOR}25` }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  </span>
                  <span
                    className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: COLOR }}
                  >
                    Free system audit
                  </span>
                </div>

                <h2
                  className="font-black tracking-[-0.03em] leading-[1.06] mb-3"
                  style={{ fontSize: "clamp(22px,3vw,38px)", color: "#0a0a0f" }}
                >
                  Ready to replace your
                  <br />
                  <span style={{
                    backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#22d3ee 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    spreadsheets?
                  </span>
                </h2>

                <p className="text-[12px] font-mono" style={{ color: "rgba(107,114,128,0.8)" }}>
                  We map your current workflows, identify inefficiencies and deliver a
                  custom-built CRM or ERP — scoped and priced before a single line of code.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl
                             text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "#374151",
                    background: `${COLOR}08`,
                    border: `1px solid ${COLOR}18`,
                  }}
                >
                  All services
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#0e7490)`,
                    boxShadow: `0 8px 24px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Book a demo
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
