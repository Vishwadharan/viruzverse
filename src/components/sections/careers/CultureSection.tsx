"use client";

import { motion } from "framer-motion";
import {
  Zap, Target, BookOpen,
  Users, Laptop, Rocket,
} from "lucide-react";

const P    = "#7c3aed";
const P2   = "#a78bfa";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CULTURE = [
  {
    icon: Zap,
    title: "Move fast",
    desc: "We ship weekly. We don't wait for perfection — we iterate toward it.",
    color: "#f59e0b",
    glow: "#fcd34d",
  },
  {
    icon: Target,
    title: "Deep ownership",
    desc: "You own your work end-to-end. No hand-offs, no finger-pointing.",
    color: "#ef4444",
    glow: "#fca5a5",
  },
  {
    icon: BookOpen,
    title: "Always learning",
    desc: "We invest in your growth — courses, books, and real on-the-job challenges.",
    color: "#06b6d4",
    glow: "#67e8f9",
  },
  {
    icon: Users,
    title: "Small & close-knit",
    desc: "A small team where your voice matters and every contribution is visible.",
    color: "#10b981",
    glow: "#34d399",
  },
  {
    icon: Laptop,
    title: "Flexible work",
    desc: "Hybrid setup. We care about output, not where you sit.",
    color: P,
    glow: P2,
  },
  {
    icon: Rocket,
    title: "Real impact",
    desc: "Your code ships to real businesses — not internal tools or proofs-of-concept.",
    color: "#ec4899",
    glow: "#f9a8d4",
  },
];

export default function CultureSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#07060f" }}
    >
      <style>{`
        @keyframes cardGlow {
          0%,100% { opacity: 0.4; }
          50%      { opacity: 0.9; }
        }
        @keyframes iconFloat {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-4px); }
        }
      `}</style>

      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(${P}04 1px,transparent 1px),` +
            `linear-gradient(90deg,${P}04 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Orbs ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: `radial-gradient(ellipse,${P}10,transparent 70%)` }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%,rgba(6,182,212,0.06),transparent 65%)" }}
      />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%,rgba(236,72,153,0.05),transparent 65%)" }}
      />

      {/* ── Sep ── */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${P2}60 40%,${P} 50%,${P2}60 60%,transparent)` }}
      />
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${P2}60 40%,${P} 50%,${P2}60 60%,transparent)` }}
      />

      {/* ── Watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-black select-none"
          style={{
            fontSize: "clamp(80px,16vw,220px)",
            color: "transparent",
            WebkitTextStroke: `1px ${P}06`,
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}>
          Culture
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex justify-center mb-5"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         text-[11px] font-mono font-semibold"
              style={{
                color: P2,
                background: `${P}10`,
                border: `1px solid ${P}28`,
                clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: P2 }} />
                <span className="relative flex h-1.5 w-1.5 rounded-full" style={{ background: P2 }} />
              </span>
              Life at Viruzverse
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="font-black tracking-[-0.04em] leading-[1.03] text-white mb-4"
            style={{ fontSize: "clamp(28px,4.5vw,56px)" }}
          >
            How we{" "}
            <span style={{
              backgroundImage: `linear-gradient(118deg,${P} 10%,${P2} 55%,#c4b5fd)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              work &amp; grow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16, ease: EASE }}
            className="text-[14px] leading-[1.9] max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            We&apos;re not a typical agency. We&apos;re a product-minded team
            that takes craft seriously.
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CULTURE.map(({ icon: Icon, title, desc, color, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              <div
                className="group relative rounded-3xl overflow-hidden p-6
                           transition-all duration-300 cursor-default h-full"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${color}09`;
                  el.style.border = `1px solid ${color}25`;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 20px 60px ${color}14`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.025)";
                  el.style.border = "1px solid rgba(255,255,255,0.07)";
                  el.style.transform = "translateY(0px)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] rounded-full"
                  style={{
                    background: `linear-gradient(90deg,transparent,${color}70,transparent)`,
                    animation: `cardGlow ${2.5 + i * 0.4}s ease-in-out infinite`,
                  }}
                />

                {/* Corner orb */}
                <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none rounded-full"
                  style={{
                    background: `radial-gradient(circle at 80% 20%,${color}10,transparent 70%)`,
                    transition: "opacity 0.3s",
                  }}
                />

                {/* Number watermark */}
                <div className="absolute bottom-4 right-5 font-black select-none pointer-events-none"
                  style={{
                    fontSize: "64px",
                    color: "transparent",
                    WebkitTextStroke: `1px ${color}08`,
                    lineHeight: 1,
                  }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}22`,
                      boxShadow: `0 0 20px ${color}14`,
                      animation: `iconFloat ${3 + i * 0.3}s ease-in-out infinite`,
                    }}
                  >
                    <Icon size={18} style={{ color: glow }} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3
                    className="font-black tracking-[-0.02em] text-white mb-2.5 leading-tight
                               transition-colors duration-200"
                    style={{ fontSize: "15px" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[13px] leading-[1.8]"
                    style={{ color: "rgba(255,255,255,0.42)" }}>
                    {desc}
                  </p>
                </div>

                {/* Bottom color strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                             transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg,transparent,${color}60,transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5
                     px-8 py-5 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            clipPath: "polygon(0 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${P}14`, border: `1px solid ${P}22` }}>
              <Users size={13} style={{ color: P2 }} strokeWidth={1.7} />
            </div>
            <p className="text-[13px] font-semibold text-white">
              We&apos;re a small but serious team building
              <span style={{
                backgroundImage: `linear-gradient(118deg,${P},${P2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {" "}products that last.
              </span>
            </p>
          </div>
          <a href="#open-roles"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl
                       text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: P2,
              background: `${P}10`,
              border: `1px solid ${P}22`,
            }}
          >
            See open roles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
