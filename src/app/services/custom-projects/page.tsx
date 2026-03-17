"use client";

import { motion, AnimatePresence, type Transition } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight, Lightbulb, Code2, Rocket,
  ShieldCheck, Puzzle, Layers, CheckCircle2,
  GitBranch, Package, Handshake,
} from "lucide-react";

const EASE  = [0.22, 1, 0.36, 1] as [number, number, number, number];
const COLOR = "#d97706";

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

/* ── Capabilities ─────────────────────────────── */
const CAPABILITIES = [
  {
    icon: Lightbulb,
    title: "Discovery & Scoping",
    desc: "We map your problem space, existing systems and constraints before a single line is written — producing a fixed-scope, fixed-price proposal.",
    tags: ["Requirements", "Architecture", "Proposal"],
    highlights: ["Stakeholder workshop included", "Tech stack recommendation", "Risk & dependency mapping"],
  },
  {
    icon: Code2,
    title: "Full-stack Build",
    desc: "End-to-end implementation — frontend, backend, infrastructure and integrations — with weekly staging drops.",
    tags: ["React", "Node", "Cloud"],
    highlights: null,
  },
  {
    icon: Layers,
    title: "AI & ML Integration",
    desc: "LLMs, computer vision, recommendation engines or predictive models — embedded directly into your product.",
    tags: ["LLM", "CV", "Forecasting"],
    highlights: null,
  },
  {
    icon: GitBranch,
    title: "DevOps & Infrastructure",
    desc: "CI/CD, Docker, Kubernetes, VPS or cloud — fully automated deploy pipelines and monitoring from day one.",
    tags: ["CI/CD", "Docker", "Monitoring"],
    highlights: ["GitHub Actions pipelines", "Sentry & uptime alerting", "Auto-scaling infra"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Auth hardening, data encryption, RBAC, audit logs and compliance checks baked into the architecture.",
    tags: ["RBAC", "Encryption", "Audit"],
    highlights: null,
  },
  {
    icon: Handshake,
    title: "Handover & Support",
    desc: "Full source code, documentation, infra access and a knowledge transfer session — then ongoing support if needed.",
    tags: ["Docs", "Training", "Retainer"],
    highlights: ["100% code ownership", "Architecture docs included", "Optional post-launch retainer"],
  },
];

/* ── Project types ────────────────────────────── */
const PROJECT_TYPES = [
  {
    label: "Internal Tools",
    cases: [
      "Admin dashboards & ops portals",
      "Approval & workflow automation",
      "Data visualisation platforms",
      "Employee self-service portals",
    ],
  },
  {
    label: "AI Products",
    cases: [
      "LLM-powered document Q&A tools",
      "Computer vision inspection systems",
      "Recommendation & ranking engines",
      "Forecasting & anomaly detection",
    ],
  },
  {
    label: "Platforms",
    cases: [
      "Multi-sided marketplace platforms",
      "White-label SaaS for resellers",
      "API-first product backends",
      "Event & booking platforms",
    ],
  },
  {
    label: "Integrations",
    cases: [
      "ERP ↔ eCommerce data sync",
      "Third-party API unification layer",
      "Legacy system modernisation",
      "Webhook & event pipeline builder",
    ],
  },
  {
    label: "Mobile",
    cases: [
      "Cross-platform Flutter apps",
      "Offline-first field apps",
      "IoT sensor dashboards",
      "Consumer-facing mobile products",
    ],
  },
  {
    label: "Blockchain",
    cases: [
      "Smart contract development & audit",
      "NFT minting & marketplace",
      "On-chain verification systems",
      "DeFi protocol integrations",
    ],
  },
];

/* ── Process phases ───────────────────────────── */
const PHASES = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Discover",
    desc: "30-min call, then a detailed workshop to map requirements, risks and the ideal tech stack.",
  },
  {
    icon: Package,
    num: "02",
    title: "Scope & Price",
    desc: "Fixed-scope proposal with milestones, timeline and price — agreed before any work begins.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Build",
    desc: "Weekly staging drops, async Loom updates and a shared project board — full transparency.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Ship & Hand Over",
    desc: "Production deploy, documentation, source code and a live walkthrough. You own everything.",
  },
];

/* ── Scope card ───────────────────────────────── */
function ScopeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: EASE } satisfies Transition}
      className="flex flex-col w-full rounded-3xl overflow-hidden"
      style={{
        background: "#12090a",
        boxShadow: `0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px ${COLOR}28`,
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ background: "#1a0d0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[11px] font-mono" style={{ color: "#3d1f10" }}>
          project.scope
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: COLOR }} />
            <span className="relative flex h-2 w-2 rounded-full" style={{ background: COLOR }} />
          </span>
          <span className="text-[10px] font-mono" style={{ color: COLOR }}>in progress</span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-4">

        {/* Phase progress */}
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em]"
            style={{ color: `${COLOR}99` }}>
            Delivery phases
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-lg"
            style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}28` }}>
            4 phases
          </span>
        </div>

        {/* Phase rows */}
        <div className="flex flex-col gap-2">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            const done = i < 2;
            const active = i === 2;
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.32, delay: 0.5 + i * 0.09, ease: EASE } satisfies Transition}
                className="flex items-center gap-3 px-3 py-2.5 rounded-2xl"
                style={{
                  background: active ? `${COLOR}0d` : "rgba(255,255,255,0.03)",
                  border: active
                    ? `1px solid ${COLOR}28`
                    : "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: done ? "rgba(16,185,129,0.12)" : active ? `${COLOR}18` : "rgba(255,255,255,0.04)",
                    border: done
                      ? "1px solid rgba(16,185,129,0.25)"
                      : active
                        ? `1px solid ${COLOR}28`
                        : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon
                    size={15}
                    strokeWidth={1.7}
                    style={{ color: done ? "#10b981" : active ? COLOR : "#374151" }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-bold leading-tight"
                    style={{ color: done ? "#10b981" : active ? "white" : "#374151" }}>
                    {phase.num} · {phase.title}
                  </p>
                  <p className="text-[10px] font-mono mt-0.5 truncate"
                    style={{ color: "rgba(255,255,255,0.25)" }}>
                    {phase.desc.split(" ").slice(0, 6).join(" ")}…
                  </p>
                </div>

                <div className="shrink-0">
                  {done ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={13} style={{ color: "#10b981" }} />
                    </div>
                  ) : active ? (
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, j) => (
                        <motion.div key={j} className="w-1 h-1 rounded-full"
                          style={{ background: COLOR }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full"
                      style={{ border: "1.5px solid rgba(255,255,255,0.1)" }} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Deliverables */}
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em]"
            style={{ color: `${COLOR}99` }}>
            What you get
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {["Source code", "Docs", "Infra access", "Walkthrough", "Retainer option"].map((item, i) => (
            <motion.span key={item}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.9 + i * 0.06, ease: EASE } satisfies Transition}
              className="px-2.5 py-1 text-[11px] font-mono rounded-xl"
              style={{
                background: `${COLOR}10`,
                color: "#fcd34d",
                border: `1px solid ${COLOR}20`,
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={10} style={{ color: "#3d1f10" }} />
            <span className="text-[10px] font-mono" style={{ color: "#3d1f10" }}>
              Fixed price · Fixed scope · You own everything
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div key={i} className="w-1 h-1 rounded-full" style={{ background: "#3d1f10" }}
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
      style={{
        background: `linear-gradient(90deg,transparent,#fcd34d 40%,${COLOR} 50%,#fcd34d 60%,transparent)`,
      }}
    />
  );
}

/* ══ Page ════════════════════════════════════════ */
export default function CustomProjectsContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main style={{ backgroundColor: "#faf9ff" }}>

      {/* ══ HERO ══ */}
      <section className="relative pt-5 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}18 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}18 1px,transparent 1px)`,
            backgroundSize: "52px 52px",
            opacity: 0.18,
          }}
        />
        <div className="absolute -top-40 right-0 w-150 h-150 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${COLOR}15 0%,transparent 65%)` }}
        />
        <div className="absolute bottom-0 -left-20 w-125 h-125 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(252,211,77,0.06) 0%,transparent 65%)" }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div {...rise(0)} className="flex items-center gap-2 mb-7">
                <Link href="/services" className="text-[11px] font-mono transition-opacity hover:opacity-70"
                  style={{ color: "#9ca3af" }}>
                  Services
                </Link>
                <span style={{ color: "#d1d5db" }}>/</span>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold"
                  style={{ color: COLOR, background: `${COLOR}0f`, border: `1px solid ${COLOR}28` }}
                >
                  <Puzzle size={11} strokeWidth={2} />
                  Custom Projects
                </span>
              </motion.div>

              <motion.h1 {...rise(0.08)}
                className="font-black tracking-[-0.04em] leading-[1.03] mb-6"
                style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0a0a0f" }}
              >
                Your problem,
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#f59e0b 55%,#fcd34d)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  built from scratch.
                </span>
              </motion.h1>

              <motion.p {...rise(0.14)} className="text-[16px] leading-[1.85] mb-8 max-w-lg"
                style={{ color: "#6b7280" }}>
                No templates, no retrofitted SaaS tools. We scope, architect and build exactly
                what you need — with a fixed price, full transparency and complete code
                ownership on delivery.
              </motion.p>

              <motion.div {...rise(0.2)} className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#b45309)`,
                    boxShadow: `0 8px 28px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Discuss your project
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

              <motion.div {...rise(0.26)} className="flex flex-wrap gap-x-5 gap-y-2">
                {["Fixed price · Fixed scope","Full code ownership","Discovery before build"].map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-[12px] font-mono"
                    style={{ color: "#9ca3af" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#10b981" }} />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <ScopeCard />
          </div>
        </div>
      </section>

      {/* ══ HOW WE WORK ══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}14 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}14 1px,transparent 1px)`,
            backgroundSize: "52px 52px",
            opacity: 0.12,
          }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="mb-14">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: COLOR }}>
              How we work
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-black tracking-[-0.03em] leading-[1.06]"
                style={{ fontSize: "clamp(24px,4vw,46px)", color: "#0a0a0f" }}>
                No black boxes,
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#f59e0b 55%,#fcd34d)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  ever.
                </span>
              </h2>
              <p className="text-[14px] max-w-xs text-right hidden sm:block" style={{ color: "#9ca3af" }}>
                Every step is visible.<br />Every decision is documented.
              </p>
            </div>
          </motion.div>

          {/* Process steps — horizontal timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {PHASES.map(({ icon: Icon, num, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE } satisfies Transition}
                className="group relative flex flex-col p-6 rounded-3xl overflow-hidden
                           transition-all duration-300 hover:-translate-y-1.5"
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
                             pointer-events-none opacity-[0.05] group-hover:opacity-[0.09]
                             transition-opacity duration-300"
                  style={{ fontSize: "80px", color: COLOR, letterSpacing: "-0.05em" }}
                >
                  {num}
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

                <div className="relative z-10">
                  <p className="text-[10px] font-mono mb-1" style={{ color: `${COLOR}99` }}>Step {num}</p>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0a0a0f" }}>{title}</h3>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#6b7280" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Capabilities bento */}
          <motion.div {...rise(0)} className="mb-12">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: COLOR }}>
              Capabilities
            </p>
            <h2 className="font-black tracking-[-0.03em] leading-[1.06] mb-10"
              style={{ fontSize: "clamp(24px,4vw,46px)", color: "#0a0a0f" }}>
              What we can
              <br />
              <span style={{
                backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#f59e0b 55%,#fcd34d)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                build for you.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(({ icon: Icon, title, desc, tags, highlights }, i) => (
              <motion.div key={title}
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
                <span className="absolute -top-3 -right-1 font-black leading-none select-none
                               pointer-events-none opacity-[0.04] group-hover:opacity-[0.07]
                               transition-opacity duration-300"
                  style={{ fontSize: "80px", color: COLOR, letterSpacing: "-0.05em" }}>
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

                <div className={`relative z-10 flex ${highlights ? "flex-row gap-8" : "flex-col"} flex-1`}>
                  <div className={`flex flex-col ${highlights ? "flex-1 min-w-0" : ""}`}>
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5
                                   transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: `${COLOR}12`, border: `1.5px solid ${COLOR}28` }}>
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

                  {highlights && (
                    <div className="hidden lg:flex flex-col justify-center gap-3 shrink-0 w-52 pl-8"
                      style={{ borderLeft: `1px solid ${COLOR}14` }}>
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

      {/* ══ PROJECT TYPES — Tabs ══ */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg,#12090a 0%,#1a0d0a 100%)" }}
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
          style={{ background: `radial-gradient(ellipse,${COLOR}20 0%,transparent 70%)` }}
        />
        <div className="absolute top-0 inset-x-0 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,#fcd34d 40%,${COLOR} 50%,#fcd34d 60%,transparent)`,
          }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="mb-12">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3 text-center"
              style={{ color: "#fcd34d" }}>
              Project types
            </p>
            <h2 className="font-black tracking-[-0.03em] leading-[1.05] text-white text-center mb-10"
              style={{ fontSize: "clamp(24px,4vw,46px)" }}>
              Whatever you need{" "}
              <span style={{
                backgroundImage: "linear-gradient(118deg,#fcd34d 10%,#fbbf24 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                built.
              </span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {PROJECT_TYPES.map((pt, i) => (
                <button key={pt.label} onClick={() => setActiveTab(i)}
                  className="px-4 py-2 rounded-xl text-[12px] font-mono font-semibold transition-all duration-200"
                  style={{
                    background: activeTab === i ? `${COLOR}28` : "rgba(255,255,255,0.04)",
                    color:      activeTab === i ? "#fcd34d"    : "rgba(255,255,255,0.4)",
                    border:     activeTab === i ? `1px solid ${COLOR}40` : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {pt.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div key={activeTab}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                exit={{   opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: EASE } satisfies Transition}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {PROJECT_TYPES[activeTab].cases.map((c, i) => (
                  <motion.div key={c}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE } satisfies Transition}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${COLOR}20`, border: `1px solid ${COLOR}30` }}>
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
              style={{ background: `linear-gradient(180deg,${COLOR},#f59e0b,${COLOR})` }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center
                            justify-between gap-8 px-8 sm:px-12 py-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${COLOR}0f`, border: `1px solid ${COLOR}25` }}>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: COLOR }} />
                    <span className="relative flex h-1.5 w-1.5 rounded-full" style={{ background: COLOR }} />
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: COLOR }}>
                    Free discovery call
                  </span>
                </div>

                <h2 className="font-black tracking-[-0.03em] leading-[1.06] mb-3"
                  style={{ fontSize: "clamp(22px,3vw,38px)", color: "#0a0a0f" }}>
                  Have something
                  <br />
                  <span style={{
                    backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#f59e0b 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    unique in mind?
                  </span>
                </h2>

                <p className="text-[12px] font-mono" style={{ color: "rgba(107,114,128,0.8)" }}>
                  Tell us the problem. We'll map the solution, recommend a stack and
                  deliver a fixed-price proposal — before any commitment from you.
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
                    background: `linear-gradient(135deg,${COLOR},#b45309)`,
                    boxShadow: `0 8px 24px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Start the conversation
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
