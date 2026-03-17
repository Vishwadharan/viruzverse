"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight, Bot, Zap, FileSearch, Network,
  GitMerge, BrainCircuit, ArrowRight,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const COLOR = "#7c3aed";

/* ── Data ─────────────────────────────────────── */
const CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: "LLM Pipelines",
    desc: "Custom language model pipelines fine-tuned on your data. GPT-4o, Claude, Gemini — we pick the right model for your use case.",
    tags: ["GPT-4o", "Claude", "Gemini"],
  },
  {
    icon: FileSearch,
    title: "RAG Systems",
    desc: "Retrieval-Augmented Generation over your documents, databases and knowledge bases. Accurate answers, no hallucinations.",
    tags: ["Embeddings", "Vector DB", "Pinecone"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous agents that plan, use tools, and execute multi-step tasks without human intervention.",
    tags: ["LangChain", "Tool Use", "Memory"],
  },
  {
    icon: GitMerge,
    title: "Workflow Automation",
    desc: "Connect your existing tools — CRMs, ERPs, spreadsheets — into one intelligent automated pipeline.",
    tags: ["Zapier-alt", "Webhooks", "APIs"],
  },
  {
    icon: Network,
    title: "Data Extraction",
    desc: "Structured extraction from unstructured documents, PDFs, emails and web content at scale.",
    tags: ["OCR", "NLP", "Parsing"],
  },
  {
    icon: Zap,
    title: "Real-time Triggers",
    desc: "Event-driven automations that fire instantly on new emails, form submissions, database changes and more.",
    tags: ["Webhooks", "Queues", "Streaming"],
  },
];

const USE_CASES = [
  { label: "Lead qualification & outreach",   industry: "Sales" },
  { label: "Invoice & document processing",   industry: "Finance" },
  { label: "Support ticket triage & response",industry: "Support" },
  { label: "Report generation & summaries",   industry: "Operations" },
  { label: "Candidate screening & matching",  industry: "HR" },
  { label: "Inventory & supply chain alerts", industry: "Logistics" },
  { label: "Content moderation pipelines",    industry: "Platform" },
  { label: "Medical record structuring",      industry: "Healthcare" },
];

/* ── Pipeline visual ──────────────────────────── */
const NODES = [
  { label: "Data source",  sub: "Email · DB · API",    col: "#7c3aed" },
  { label: "AI process",   sub: "LLM · RAG · Agent",   col: "#a78bfa" },
  { label: "Action",       sub: "CRM · Slack · Sheet",  col: "#c4b5fd" },
];

function PipelineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: EASE } satisfies Transition}
      className="w-full rounded-3xl overflow-hidden"
      style={{
        background: "#0f0c1a",
        boxShadow: "0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(124,58,237,0.18)",
      }}
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5"
        style={{ background: "#1a1625", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-auto text-[11px] font-mono" style={{ color: "#374151" }}>
          automation.pipeline
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Status bar */}
        <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-xl"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.18)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono" style={{ color: "#a78bfa" }}>
            Pipeline running · 0 errors
          </span>
        </div>

        {/* Nodes */}
        <div className="flex items-center gap-2 mb-6">
          {NODES.map((node, i) => (
            <div key={node.label} className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex-1 min-w-0 p-3 rounded-2xl"
                style={{
                  background: `${node.col}12`,
                  border: `1.5px solid ${node.col}25`,
                }}
              >
                <p className="text-[12px] font-bold text-white truncate">{node.label}</p>
                <p className="text-[10px] font-mono mt-0.5 truncate" style={{ color: `${node.col}cc` }}>
                  {node.sub}
                </p>
              </div>
              {i < NODES.length - 1 && (
                <ArrowRight size={14} className="shrink-0" style={{ color: "rgba(124,58,237,0.4)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Log lines */}
        <div className="space-y-2">
          {[
            { dot: "#10b981", text: "Fetched 142 new records from CRM" },
            { dot: "#a78bfa", text: "LLM scored & ranked leads (GPT-4o)" },
            { dot: "#10b981", text: "Drafted 142 personalised outreach emails" },
            { dot: "#10b981", text: "Pushed to Outreach queue · awaiting send" },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1, ease: EASE } satisfies Transition}
              className="flex items-start gap-2.5 px-3 py-2 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: line.dot }} />
              <span className="text-[11px] font-mono leading-[1.6]" style={{ color: "rgba(255,255,255,0.45)" }}>
                {line.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: "#374151" }}>
            last run: 2 min ago
          </span>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <motion.div key={i}
                className="w-1 h-1 rounded-full"
                style={{ background: "#4b5563" }}
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
      style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
    />
  );
}

/* ══ Page ════════════════════════════════════════ */
export default function AIAutomationContent() {
  return (
    <main style={{ backgroundColor: "#faf9ff" }}>

      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.032) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(124,58,237,0.032) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -top-40 right-0 w-150 h-150 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)" }}
        />
        <div className="absolute bottom-0 -left-20 w-125 h-125 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(167,139,250,0.07) 0%,transparent 65%)" }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              {/* Breadcrumb */}
              <motion.div {...rise(0)} className="flex items-center gap-2 mb-7">
                <Link href="/services"
                  className="text-[11px] font-mono transition-colors hover:opacity-70"
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
                  <Bot size={11} strokeWidth={2} />
                  AI Automation
                </span>
              </motion.div>

              <motion.h1 {...rise(0.08)}
                className="font-black tracking-[-0.04em] leading-[1.03] mb-6"
                style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0a0a0f" }}
              >
                Automate work with
                <br />
                <span style={{
                  backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  intelligent AI.
                </span>
              </motion.h1>

              <motion.p {...rise(0.14)}
                className="text-[16px] leading-[1.85] mb-8 max-w-lg"
                style={{ color: "#6b7280" }}
              >
                We build LLM pipelines, RAG systems and autonomous agents that replace
                repetitive work end-to-end — connected to your existing tools with zero disruption.
              </motion.p>

              <motion.div {...rise(0.2)} className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#6d28d9)`,
                    boxShadow: `0 8px 28px ${COLOR}40, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Get a free audit
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

              {/* Trust strip */}
              <motion.div {...rise(0.26)}
                className="flex flex-wrap gap-x-5 gap-y-2"
              >
                {["LLM · RAG · Agents","GPT-4o · Claude · Gemini","LangChain · LlamaIndex"].map(t => (
                  <span key={t}
                    className="flex items-center gap-1.5 text-[12px] font-mono"
                    style={{ color: "#9ca3af" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#10b981" }} />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <PipelineCard />
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.022) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(124,58,237,0.022) 1px,transparent 1px)",
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
              <h2
                className="font-black tracking-[-0.03em] leading-[1.06]"
                style={{ fontSize: "clamp(24px,4vw,46px)", color: "#0a0a0f" }}
              >
                What we build
                <br />
                <span style={{
                  backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  for you.
                </span>
              </h2>
              <p className="text-[14px] max-w-xs text-right hidden sm:block" style={{ color: "#9ca3af" }}>
                Every capability is custom-built —<br />never a no-code wrapper.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(({ icon: Icon, title, desc, tags }, i) => (
              <motion.div
                key={title}
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
                {/* Ghost number */}
                <span
                  className="absolute -top-3 -right-1 font-black leading-none select-none
                             pointer-events-none opacity-[0.04] group-hover:opacity-[0.08]
                             transition-opacity duration-300"
                  style={{ fontSize: "80px", color: COLOR, letterSpacing: "-0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Gradient wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                               transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%,${COLOR}0d 0%,transparent 65%)` }}
                />

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg,transparent,${COLOR},transparent)` }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center mb-5
                             transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `${COLOR}12`,
                    border: `1.5px solid ${COLOR}28`,
                  }}
                >
                  <Icon size={20} style={{ color: COLOR }} strokeWidth={1.7} />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0a0a0f" }}>
                    {title}
                  </h3>
                  <p className="text-[13px] leading-[1.8] mb-4 flex-1" style={{ color: "#6b7280" }}>
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => (
                      <span key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-lg"
                        style={{
                          background: `${COLOR}0f`,
                          color: COLOR,
                          border: `1px solid ${COLOR}22`,
                        }}
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
        style={{ background: "linear-gradient(160deg,#1e1b2e 0%,#0f0c1a 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.04) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(167,139,250,0.04) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(124,58,237,0.18) 0%,transparent 70%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...rise(0)} className="text-center mb-12">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: "#a78bfa" }}>
              Use cases
            </p>
            <h2
              className="font-black tracking-[-0.03em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(24px,4vw,46px)" }}
            >
              Works across every{" "}
              <span style={{
                backgroundImage: "linear-gradient(118deg,#a78bfa 10%,#c4b5fd 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                industry.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {USE_CASES.map(({ label, industry }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: EASE } satisfies Transition}
                className="group flex flex-col gap-2 p-4 rounded-2xl transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.background = `${COLOR}12`)
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")
                }
              >
                <span
                  className="self-start px-2 py-0.5 rounded-lg text-[10px] font-mono font-semibold"
                  style={{
                    background: `${COLOR}20`,
                    color: "#a78bfa",
                    border: `1px solid ${COLOR}28`,
                  }}
                >
                  {industry}
                </span>
                <p className="text-[13px] font-medium leading-[1.6]"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
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
              style={{ background: `linear-gradient(180deg,${COLOR},#a78bfa,${COLOR})` }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center
                            justify-between gap-8 px-8 sm:px-12 py-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${COLOR}0f`, border: `1px solid ${COLOR}25` }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative flex h-1.5 w-1.5 rounded-full bg-violet-500" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: COLOR }}>
                    Free automation audit
                  </span>
                </div>

                <h2
                  className="font-black tracking-[-0.03em] leading-[1.06] mb-3"
                  style={{ fontSize: "clamp(22px,3vw,38px)", color: "#0a0a0f" }}
                >
                  Ready to automate
                  <br />
                  <span style={{
                    backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#a78bfa 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    your workflows?
                  </span>
                </h2>

                <p className="text-[12px] font-mono" style={{ color: "rgba(107,114,128,0.8)" }}>
                  We map your workflows, identify automation wins, and deliver a free
                  implementation plan — no strings attached.
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
                    background: `linear-gradient(135deg,${COLOR},#6d28d9)`,
                    boxShadow: `0 8px 24px ${COLOR}40, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Book free audit
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
