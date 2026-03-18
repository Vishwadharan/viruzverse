"use client";

import { motion, AnimatePresence, type Transition } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowUpRight, Clock, Shield, Code2, Handshake,
  Bot, Layers, Users, BookOpen, Puzzle, type LucideIcon,
} from "lucide-react";
import { SERVICES, type ServiceIconKey } from "@/lib/services";

/* ── Constants ────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const TICK  = 3800; // ms per service

const ICON_MAP: Record<ServiceIconKey, LucideIcon> = {
  Bot, Layers, Users, BookOpen, Puzzle,
};

const STEPS = [
  { n: "01", icon: Clock,     title: "Scope call",     desc: "30-min call. No sales pitch. We understand your exact problem, stack, and timeline." },
  { n: "02", icon: Shield,    title: "Fixed proposal", desc: "Milestone-based, fixed price. What you see is exactly what you pay. No surprises." },
  { n: "03", icon: Code2,     title: "Build & ship",   desc: "Weekly staging drops, async updates. Zero black-box moments throughout." },
  { n: "04", icon: Handshake, title: "Full handover",  desc: "Source code, docs, infra access. We train your team and stay reachable post-launch." },
];

function Sep() {
  return (
    <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
    />
  );
}

/* ── Auto-cycling showcase ────────────────────── */
function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [epoch,  setEpoch]  = useState(0);

  const goTo = (i: number) => {
    setActive(i);
    setEpoch(e => e + 1);
  };

  /* reset timeout on every epoch change */
  useEffect(() => {
    const t = setTimeout(() => goTo((active + 1) % SERVICES.length), TICK);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [epoch]);

  const s    = SERVICES[active];
  const Icon = ICON_MAP[s.iconKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.28, ease: EASE } satisfies Transition}
      className="flex flex-col w-full rounded-3xl overflow-hidden"
      style={{
        background: "#0f0c1a",
        boxShadow: "0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(124,58,237,0.18)",
      }}
    >
      {/* ── Chrome bar ── */}
      <div
        className="flex items-center justify-between px-5 py-3.5 shrink-0"
        style={{ background: "#1a1625", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>

        {/* Service number tabs */}
        <div className="flex items-center gap-0.5 p-1 rounded-xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {SERVICES.map((svc, i) => (
            <button
              key={svc.num}
              onClick={() => goTo(i)}
              className="w-8 h-7 rounded-lg text-[10px] font-mono font-bold transition-all duration-200"
              style={{
                background: i === active ? `${svc.color}28` : "transparent",
                color:      i === active ? svc.color : "#374151",
                border:     i === active ? `1px solid ${svc.color}30` : "1px solid transparent",
              }}
            >
              {svc.num}
            </button>
          ))}
        </div>

        <span className="text-[10px] font-mono" style={{ color: "#374151" }}>
          services.tsx
        </span>
      </div>

      {/* ── Content area ── */}
      <div className="relative flex-1 overflow-hidden" style={{ minHeight: "260px" }}>
        {/* Dynamic color orb */}
        <motion.div
          key={`orb-${active}`}
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ background: `radial-gradient(circle,${s.color}18 0%,transparent 65%)` }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
            exit={{  opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.32, ease: EASE } satisfies Transition}
            className="relative z-10 p-6"
          >
            {/* Ghost number */}
            <div
              className="absolute -top-4 -right-2 font-black leading-none
                         select-none pointer-events-none"
              style={{
                fontSize: "100px",
                color: s.color,
                opacity: 0.06,
                letterSpacing: "-0.05em",
              }}
            >
              {s.num}
            </div>

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: `${s.color}18`,
                border: `1.5px solid ${s.color}30`,
                boxShadow: `0 8px 24px ${s.color}20`,
              }}
            >
              <Icon size={26} style={{ color: s.color }} strokeWidth={1.6} />
            </div>

            {/* Name */}
            <h3
              className="font-black tracking-[-0.02em] text-white mb-2 leading-tight"
              style={{ fontSize: "clamp(20px,2.5vw,26px)" }}
            >
              {s.name}
            </h3>

            {/* Description */}
            <p
              className="text-[13px] leading-[1.85] mb-5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {s.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {s.tags.map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-lg"
                  style={{
                    background: `${s.color}18`,
                    color: s.color,
                    border: `1px solid ${s.color}28`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Explore link */}
            <Link
              href={s.href}
              className="group inline-flex items-center gap-1.5 text-[12px] font-semibold font-mono
                         transition-opacity duration-200 hover:opacity-70"
              style={{ color: s.color }}
            >
              Explore service
              <ArrowUpRight size={13}
                className="transition-transform duration-200
                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress segments ── */}
      <div
        className="flex items-center gap-1.5 px-5 py-4 shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {SERVICES.map((svc, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative flex-1 h-1 rounded-full overflow-hidden cursor-pointer"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {i < active && (
              <div className="absolute inset-0 rounded-full"
                style={{ background: `${svc.color}60` }}
              />
            )}
            {i === active && (
              <motion.div
                key={`prog-${epoch}`}
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: svc.color }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: TICK / 1000, ease: "linear" } satisfies Transition}
              />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ══ Page ════════════════════════════════════════ */
export default function ServicesPageContent() {
  return (
    <main style={{ backgroundColor: "#faf9ff" }}>

      {/* ══ HERO ══ */}
      <section className="relative pt-15 pb-24 overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE } satisfies Transition}
                className="mb-7"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             text-[11px] font-mono font-semibold uppercase tracking-[0.18em]"
                  style={{
                    color: "#7c3aed",
                    background: "rgba(124,58,237,0.07)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative flex h-2 w-2 rounded-full bg-violet-500" />
                  </span>
                  What we build
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08, ease: EASE } satisfies Transition}
                className="font-black tracking-[-0.04em] leading-[1.03] mb-6"
                style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0a0a0f" }}
              >
                Everything to ship
                <br />
                <span style={{
                  backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  great software.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.14, ease: EASE } satisfies Transition}
                className="text-[16px] leading-[1.85] mb-8 max-w-lg"
                style={{ color: "#6b7280" }}
              >
                Production-grade AI, SaaS, enterprise systems and education platforms.
                Domain expertise comes standard — no generalists, no middlemen.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2, ease: EASE } satisfies Transition}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                    boxShadow: "0 8px 28px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  Get a free quote
                  <ArrowUpRight size={15}
                    className="transition-transform duration-300
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: "#374151",
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.95)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  How we work
                </a>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 } satisfies Transition}
                className="flex items-center gap-4 flex-wrap"
              >
                {["24h response", "Fixed pricing", "NDA available", "No lock-in"].map((t, i) => (
                  <span key={t} className="flex items-center gap-1.5 text-[12px] font-mono"
                    style={{ color: "#9ca3af" }}
                  >
                    {i > 0 && <span style={{ color: "#e5e7eb" }}>·</span>}
                    <span className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#10b981" }}
                    />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — showcase */}
            <ServiceShowcase />
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section id="process" className="relative py-24 overflow-hidden"
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-60 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(124,58,237,0.18) 0%,transparent 70%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
        />
        <Sep />

        <div className="relative z-10 max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE } satisfies Transition}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "#a78bfa" }}>
              Our process
            </p>
            <h2
              className="font-black tracking-[-0.03em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(26px,4vw,50px)" }}
            >
              From idea to production,{" "}
              <span style={{
                backgroundImage: "linear-gradient(118deg,#a78bfa 10%,#c4b5fd 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                without the chaos.
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute top-[46px] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)]
                           hidden lg:block pointer-events-none"
              style={{ borderTop: "1.5px dashed rgba(124,58,237,0.2)" }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map(({ n, icon: Icon, title, desc }, i) => (
                <motion.div key={n}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE } satisfies Transition}
                  className="group relative flex flex-col p-6 rounded-3xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="absolute -top-3 -right-1 font-black leading-none
                                  select-none pointer-events-none opacity-[0.055]"
                    style={{ fontSize: "72px", color: "#a78bfa", letterSpacing: "-0.05em" }}
                  >{n}</span>

                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center
                                   transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.28)" }}
                    >
                      <Icon size={18} style={{ color: "#a78bfa" }} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-mono font-bold"
                      style={{ color: "rgba(124,58,237,0.35)" }}>
                      {n}
                    </span>
                  </div>

                  <h3 className="relative z-10 text-[14px] font-bold mb-2 text-white">{title}</h3>
                  <p className="relative z-10 text-[13px] leading-[1.75]"
                    style={{ color: "rgba(255,255,255,0.38)" }}>
                    {desc}
                  </p>

                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                                 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 0% 0%,rgba(124,58,237,0.1) 0%,transparent 65%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-b-3xl
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg,transparent,#a78bfa,transparent)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE } satisfies Transition}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 30% 50%,rgba(124,58,237,0.07) 0%,transparent 60%)" }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
              style={{ background: "linear-gradient(180deg,#7c3aed,#a78bfa,#7c3aed)" }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center
                            justify-between gap-8 px-8 sm:px-12 py-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative flex h-1.5 w-1.5 rounded-full bg-violet-500" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: "#7c3aed" }}>
                    Ready when you are
                  </span>
                </div>

                <h2
                  className="font-black tracking-[-0.03em] leading-[1.06] mb-3"
                  style={{ fontSize: "clamp(22px,3vw,38px)", color: "#0a0a0f" }}
                >
                  Not sure which service
                  <br />
                  fits your{" "}
                  <span style={{
                    backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 70%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    needs?
                  </span>
                </h2>

                <p className="text-[12px] font-mono" style={{ color: "rgba(107,114,128,0.8)" }}>
                  24 hr response · NDA available · Fixed pricing · No lock-in
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/about"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl
                             text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "#374151",
                    background: "rgba(124,58,237,0.06)",
                    border: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  About us
                </Link>
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                    boxShadow: "0 8px 24px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  Book a free call
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
