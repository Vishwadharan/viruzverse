"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight, Layers, Users, CreditCard,
  ShieldCheck, Gauge, GitBranch, Globe, Lock,
} from "lucide-react";

const EASE  = [0.22, 1, 0.36, 1] as [number, number, number, number];
const COLOR = "#2563eb";

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

/* ── Data ─────────────────────────────────────── */
const CAPABILITIES = [
  {
    icon: Users,
    title: "Multi-tenant Architecture",
    desc: "Row-level security, isolated data per tenant, custom subdomain routing — all production-hardened from day one.",
    tags: ["RLS", "Subdomain", "Isolation"],
  },
  {
    icon: CreditCard,
    title: "Billing & Subscriptions",
    desc: "Stripe integration with usage-based billing, seat pricing, trial flows, dunning and invoice management.",
    tags: ["Stripe", "Metered", "Invoices"],
  },
  {
    icon: ShieldCheck,
    title: "Auth & Permissions",
    desc: "SSO, OAuth, magic links, 2FA, and fine-grained RBAC — so every user sees exactly what they should.",
    tags: ["SSO", "OAuth", "RBAC"],
  },
  {
    icon: Gauge,
    title: "Analytics Dashboards",
    desc: "Custom dashboards with real-time usage metrics, retention charts and export — no third-party BI tools needed.",
    tags: ["Real-time", "Charts", "Exports"],
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    desc: "Edge deployments, CDN, multi-region DB replication and auto-scaling — your SaaS handles traffic spikes effortlessly.",
    tags: ["Edge", "CDN", "Auto-scale"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    desc: "GitHub Actions, preview deploys, staging environments, and monitoring set up before we hand over the keys.",
    tags: ["GitHub Actions", "Preview", "Sentry"],
  },
];

const USE_CASES = [
  { label: "Project management tools",         industry: "Productivity" },
  { label: "CRM & sales pipeline platforms",   industry: "Sales" },
  { label: "E-learning & course platforms",    industry: "EdTech" },
  { label: "Fleet & logistics dashboards",     industry: "Logistics" },
  { label: "Restaurant & hospitality systems", industry: "F&B" },
  { label: "Healthcare patient portals",       industry: "Health" },
  { label: "Construction project trackers",    industry: "Construction" },
  { label: "Legal document automation",        industry: "Legal" },
];

/* ── SaaS dashboard card ──────────────────────── */
const TENANTS = [
  { name: "Acme Corp",     plan: "Pro",        users: 48,  status: "active"   },
  { name: "Stark Ltd",     plan: "Enterprise", users: 210, status: "active"   },
  { name: "Wayne Inc",     plan: "Starter",    users: 12,  status: "trial"    },
];

const PLAN_COLOR: Record<string, string> = {
  Starter:    "#6b7280",
  Pro:        COLOR,
  Enterprise: "#7c3aed",
};

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: EASE } satisfies Transition}
      className="flex flex-col w-full rounded-3xl overflow-hidden"
      style={{
        background: "#0a0f1e",
        boxShadow: `0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px ${COLOR}28`,
      }}
    >
      {/* Chrome */}
      <div className="flex items-center justify-between px-5 py-3.5"
        style={{ background: "#0d1526", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[11px] font-mono" style={{ color: "#374151" }}>
          admin.dashboard
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono" style={{ color: "#10b981" }}>live</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-4">

        {/* Metric row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Tenants",  value: "270",    delta: "+12%" },
            { label: "MRR",      value: "$8.4k",  delta: "+24%" },
            { label: "Uptime",   value: "99.98%", delta: "↑" },
          ].map(({ label, value, delta }) => (
            <div key={label} className="flex flex-col p-3 rounded-2xl"
              style={{ background: `${COLOR}0d`, border: `1px solid ${COLOR}18` }}
            >
              <span className="text-[10px] font-mono mb-1" style={{ color: "#6b7280" }}>{label}</span>
              <span className="text-[15px] font-black text-white leading-tight">{value}</span>
              <span className="text-[10px] font-mono mt-0.5" style={{ color: "#10b981" }}>{delta}</span>
            </div>
          ))}
        </div>

        {/* Tenants table */}
        <div className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_80px_48px] gap-2 px-4 py-2"
            style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            {["Tenant","Plan","Users"].map(h => (
              <span key={h} className="text-[10px] font-mono font-semibold uppercase tracking-[0.1em]"
                style={{ color: "#374151" }}>
                {h}
              </span>
            ))}
          </div>

          {TENANTS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.1, ease: EASE } satisfies Transition}
              className="grid grid-cols-[1fr_80px_48px] gap-2 items-center px-4 py-2.5"
              style={{
                borderBottom: i < TENANTS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black"
                  style={{ background: `${COLOR}20`, color: COLOR }}
                >
                  {t.name[0]}
                </div>
                <span className="text-[12px] font-medium text-white truncate">{t.name}</span>
              </div>
              <span
                className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-semibold w-fit"
                style={{
                  background: `${PLAN_COLOR[t.plan]}18`,
                  color: PLAN_COLOR[t.plan],
                  border: `1px solid ${PLAN_COLOR[t.plan]}28`,
                }}
              >
                {t.plan}
              </span>
              <span className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
                {t.users}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            <Lock size={11} style={{ color: "#374151" }} />
            <span className="text-[10px] font-mono" style={{ color: "#374151" }}>
              row-level security · enabled
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div key={i}
                className="w-1 h-1 rounded-full" style={{ background: "#374151" }}
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
    <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
      style={{ background: `linear-gradient(90deg,transparent,#93c5fd 40%,${COLOR} 50%,#93c5fd 60%,transparent)` }}
    />
  );
}

/* ══ Page ════════════════════════════════════════ */
export default function CustomSaaSContent() {
  return (
    <main style={{ backgroundColor: "#faf9ff" }}>

      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.032) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(37,99,235,0.032) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -top-40 right-0 w-150 h-150 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${COLOR}18 0%,transparent 65%)` }}
        />
        <div className="absolute bottom-0 -left-20 w-125 h-125 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(147,197,253,0.1) 0%,transparent 65%)" }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              {/* Breadcrumb */}
              <motion.div {...rise(0)} className="flex items-center gap-2 mb-7">
                <Link href="/services"
                  className="text-[11px] font-mono transition-opacity hover:opacity-70"
                  style={{ color: "#9ca3af" }}
                >
                  Services
                </Link>
                <span style={{ color: "#d1d5db" }}>/</span>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             text-[11px] font-mono font-semibold"
                  style={{
                    color: COLOR,
                    background: `${COLOR}0f`,
                    border: `1px solid ${COLOR}28`,
                  }}
                >
                  <Layers size={11} strokeWidth={2} />
                  Custom SaaS
                </span>
              </motion.div>

              <motion.h1 {...rise(0.08)}
                className="font-black tracking-[-0.04em] leading-[1.03] mb-6"
                style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0a0a0f" }}
              >
                Launch your SaaS
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#60a5fa 55%,#93c5fd)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  built right.
                </span>
              </motion.h1>

              <motion.p {...rise(0.14)}
                className="text-[16px] leading-[1.85] mb-8 max-w-lg"
                style={{ color: "#6b7280" }}
              >
                Full-stack SaaS from zero to production. Multi-tenant architecture,
                Stripe billing, auth, dashboards and CI/CD — delivered as one
                complete product, not a patchwork of tools.
              </motion.p>

              <motion.div {...rise(0.2)} className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#1d4ed8)`,
                    boxShadow: `0 8px 28px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Start your SaaS
                  <ArrowUpRight size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link href="/services"
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

              {/* Trust strip */}
              <motion.div {...rise(0.26)} className="flex flex-wrap gap-x-5 gap-y-2">
                {["Next.js · Supabase · Stripe", "Auth · RBAC · Multi-tenant", "CI/CD · Preview deploys"].map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-[12px] font-mono"
                    style={{ color: "#9ca3af" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#10b981" }} />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <DashboardCard />
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.022) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(37,99,235,0.022) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="mb-12">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: COLOR }}>
              Capabilities
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-black tracking-[-0.03em] leading-[1.06]"
                style={{ fontSize: "clamp(24px,4vw,46px)", color: "#0a0a0f" }}
              >
                Everything your SaaS
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#60a5fa 55%,#93c5fd)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  needs to ship.
                </span>
              </h2>
              <p className="text-[14px] max-w-xs text-right hidden sm:block" style={{ color: "#9ca3af" }}>
                No Bubble. No Webflow.<br />Real production code.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(({ icon: Icon, title, desc, tags }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE } satisfies Transition}
                className="group relative flex flex-col p-6 rounded-3xl overflow-hidden
                           transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                <span className="absolute -top-3 -right-1 font-black leading-none select-none
                                pointer-events-none opacity-[0.04] group-hover:opacity-[0.08]
                                transition-opacity duration-300"
                  style={{ fontSize: "80px", color: COLOR, letterSpacing: "-0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                               transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%,${COLOR}0d 0%,transparent 65%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-[2px]
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg,transparent,${COLOR},transparent)` }}
                />

                <div className="relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center mb-5
                               transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${COLOR}12`, border: `1.5px solid ${COLOR}28` }}
                >
                  <Icon size={20} style={{ color: COLOR }} strokeWidth={1.7} />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0a0a0f" }}>{title}</h3>
                  <p className="text-[13px] leading-[1.8] mb-4 flex-1" style={{ color: "#6b7280" }}>{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-lg"
                        style={{ background: `${COLOR}0f`, color: COLOR, border: `1px solid ${COLOR}22` }}
                      >{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg,#060d1f 0%,#0a0f1e 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}08 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}08 1px,transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-48 pointer-events-none"
          style={{ background: `radial-gradient(ellipse,${COLOR}22 0%,transparent 70%)` }}
        />
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(90deg,transparent,#93c5fd 40%,${COLOR} 50%,#93c5fd 60%,transparent)` }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="text-center mb-12">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: "#60a5fa" }}>
              Use cases
            </p>
            <h2 className="font-black tracking-[-0.03em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(24px,4vw,46px)" }}
            >
              Built for every{" "}
              <span style={{
                backgroundImage: `linear-gradient(118deg,#60a5fa 10%,#93c5fd 70%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                vertical.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {USE_CASES.map(({ label, industry }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: EASE } satisfies Transition}
                className="flex flex-col gap-2 p-4 rounded-2xl transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = `${COLOR}14`)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
              >
                <span className="self-start px-2 py-0.5 rounded-lg text-[10px] font-mono font-semibold"
                  style={{ background: `${COLOR}22`, color: "#60a5fa", border: `1px solid ${COLOR}30` }}
                >
                  {industry}
                </span>
                <p className="text-[13px] font-medium leading-[1.6]"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 30% 50%,${COLOR}0d 0%,transparent 60%)` }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
              style={{ background: `linear-gradient(180deg,${COLOR},#60a5fa,${COLOR})` }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center
                            justify-between gap-8 px-8 sm:px-12 py-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${COLOR}0f`, border: `1px solid ${COLOR}25` }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: COLOR }}>
                    MVP to Enterprise
                  </span>
                </div>

                <h2 className="font-black tracking-[-0.03em] leading-[1.06] mb-3"
                  style={{ fontSize: "clamp(22px,3vw,38px)", color: "#0a0a0f" }}
                >
                  Ready to build your
                  <br />
                  <span style={{
                    backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#60a5fa 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    SaaS platform?
                  </span>
                </h2>

                <p className="text-[12px] font-mono" style={{ color: "rgba(107,114,128,0.8)" }}>
                  We scope, design and build your entire platform — auth to billing to deploy.
                  Fixed price, fixed timeline, full ownership.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/services"
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
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#1d4ed8)`,
                    boxShadow: `0 8px 24px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Start building
                  <ArrowUpRight size={14}
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
