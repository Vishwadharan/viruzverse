"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Zap, Users, Sparkles } from "lucide-react";

const P    = "#7c3aed";
const P2   = "#a78bfa";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Floating particles ───────────────────────── */
const PARTICLES = [
  { left: "7%",  top: "18%", size: 2.5, delay: 0,   dur: 4.2 },
  { left: "91%", top: "12%", size: 2,   delay: 0.8, dur: 5.1 },
  { left: "14%", top: "72%", size: 3.5, delay: 1.3, dur: 3.8 },
  { left: "76%", top: "58%", size: 2,   delay: 0.4, dur: 6.2 },
  { left: "43%", top: "85%", size: 3,   delay: 1.8, dur: 4.6 },
  { left: "84%", top: "38%", size: 2.5, delay: 0.2, dur: 5.4 },
  { left: "28%", top: "9%",  size: 2,   delay: 2.1, dur: 3.3 },
  { left: "58%", top: "22%", size: 1.5, delay: 1.1, dur: 6.8 },
];

/* ── Headline words ───────────────────────────── */
const LINE1 = ["Build", "the", "future", "of"];
const LINE2 = ["business", "software."];

/* ── Stats ────────────────────────────────────── */
const STATS = [
  { icon: Users,   value: "Small team",    sub: "that moves fast"       },
  { icon: Zap,     value: "Real products", sub: "shipped to users"      },
  { icon: MapPin,  value: "Coimbatore",    sub: "Tamil Nadu · India"    },
];

export default function CareersHero() {
  return (
    <section
      className="relative pt-10 pb-28 overflow-hidden"
      style={{ background: "#07060f" }}
    >
      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0px) scale(1);   opacity: 0.5; }
          50%      { transform: translateY(-14px) scale(1.2); opacity: 1;   }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(320%)  skewX(-15deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 400; }
          to   { stroke-dashoffset: 0;   }
        }
        @keyframes scanline {
          0%   { background-position: 0 0;    }
          100% { background-position: 0 40px; }
        }
      `}</style>

      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(${P}05 1px,transparent 1px),` +
            `linear-gradient(90deg,${P}05 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Scanline texture (new!) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.4) 2px,rgba(255,255,255,0.4) 3px)",
          backgroundSize: "100% 3px",
          animation: "scanline 8s linear infinite",
        }}
      />

      {/* ── Orbs ── */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 0%,${P}18,transparent 60%)`,
          mixBlendMode: "screen",          /* ← new: blend mode */
        }}
      />
      <div className="absolute bottom-0 left-0 w-96 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%,rgba(6,182,212,0.07),transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* ── Clip-path geometric accent (new!) ── */}
      <div className="absolute top-28 right-[6%] w-56 h-56 pointer-events-none opacity-[0.07]"
        style={{
          background: `conic-gradient(from 0deg,${P},${P2},transparent,${P})`,
          clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
          animation: "spin-slow 18s linear infinite",
        }}
      />
      {/* Second smaller diamond */}
      <div className="absolute bottom-24 left-[4%] w-28 h-28 pointer-events-none opacity-[0.05]"
        style={{
          background: `conic-gradient(from 180deg,${P2},transparent,${P})`,
          clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
          animation: "spin-slow 12s linear infinite reverse",
        }}
      />

      {/* ── SVG diagonal lines (new!) ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <line x1="0" y1="100%" x2="40%" y2="0"
          stroke={`${P}12`} strokeWidth="1"
          strokeDasharray="400"
          style={{ animation: "drawLine 2.5s ease forwards 0.5s", strokeDashoffset: 400 }}
        />
        <line x1="100%" y1="100%" x2="65%" y2="0"
          stroke={`${P2}10`} strokeWidth="1"
          strokeDasharray="400"
          style={{ animation: "drawLine 2.5s ease forwards 0.9s", strokeDashoffset: 400 }}
        />
      </svg>

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: i % 2 === 0 ? P2 : "#06b6d4",
            boxShadow: `0 0 ${p.size * 3}px ${i % 2 === 0 ? P2 : "#06b6d4"}`,
            animation: `floatY ${p.dur}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="flex items-center gap-2 mb-8"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           text-[11px] font-mono font-semibold"
                style={{
                  color: P2,
                  background: `${P}10`,
                  border: `1px solid ${P}28`,
                  /* Angular corner cut — new clip-path on badge */
                  clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                We&apos;re hiring · Coimbatore
              </span>
            </motion.div>

            {/* Headline — word-by-word reveal */}
            <div className="mb-6">
              {/* Line 1 */}
              <div className="flex flex-wrap gap-x-[0.28em] mb-1">
                {LINE1.map((word, i) => (
                  <div key={word} className="overflow-hidden">
                    <motion.span
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%",   opacity: 1 }}
                      transition={{ duration: 0.65, delay: 0.1 + i * 0.07, ease: EASE }}
                      className="inline-block font-black tracking-[-0.04em] text-white"
                      style={{ fontSize: "clamp(38px,6.5vw,76px)", lineHeight: 1.03 }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>
              {/* Line 2 — gradient */}
              <div className="flex flex-wrap gap-x-[0.28em]">
                {LINE2.map((word, i) => (
                  <div key={word} className="overflow-hidden">
                    <motion.span
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%",   opacity: 1 }}
                      transition={{ duration: 0.65, delay: 0.38 + i * 0.07, ease: EASE }}
                      className="inline-block font-black tracking-[-0.04em]"
                      style={{
                        fontSize: "clamp(38px,6.5vw,76px)",
                        lineHeight: 1.03,
                        backgroundImage: `linear-gradient(118deg,${P} 10%,${P2} 55%,#c4b5fd)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
              className="text-[15px] leading-[1.9] max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Join a small team that moves fast, ships real products, and cares
              deeply about craft. We&apos;re based in Coimbatore and work on problems
              that actually matter to businesses.
            </motion.p>

            {/* CTA — shimmer button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65, ease: EASE }}
              className="flex flex-wrap gap-3 mb-14"
            >
              {/* Primary */}
              <a href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                           text-[13px] font-bold text-white overflow-hidden transition-all
                           duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg,${P},#06b6d4)`,
                  boxShadow: `0 10px 32px ${P}40, inset 0 1px 0 rgba(255,255,255,0.18)`,
                }}
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.18) 50%,transparent 100%)",
                    width: "60%",
                    animation: "shimmer 2.8s ease-in-out infinite",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  See open roles
                  <ArrowRight size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>

              {/* Secondary — dashed border (new!) */}
              <a href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                           text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  background: "transparent",
                  border: `1.5px dashed ${P}35`,
                  boxShadow: `inset 0 0 20px ${P}06`,
                }}
              >
                View About
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.78, ease: EASE }}
              className="flex flex-wrap gap-px"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                /* Angular bottom-right cut — new! */
                clipPath: "polygon(0 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%)",
              }}
            >
              {STATS.map(({ icon: Icon, value, sub }, i) => (
                <div key={value}
                  className="flex items-center gap-3 px-5 py-4 flex-1 min-w-[130px]"
                  style={{
                    background: "#07060f",
                    borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${P}14`, border: `1px solid ${P}22` }}>
                    <Icon size={13} style={{ color: P2 }} strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black text-white leading-tight">{value}</p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — decorative roles card */}
          <motion.div
            initial={{ opacity: 0, x: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0,  filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg,#0f0b1a,#0c0916)",
                border: `1px solid ${P}18`,
                boxShadow: `0 0 0 1px ${P}10, 0 40px 80px rgba(0,0,0,0.5)`,
              }}
            >
              {/* Top accent */}
              <div className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg,${P},${P2},#06b6d4)` }}
              />
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% -20%,${P}15,transparent 70%)` }}
              />

              <div className="relative z-10 p-7">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${P}14`, border: `1px solid ${P}22` }}>
                      <Sparkles size={14} style={{ color: P2 }} strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-[12px] font-black text-white">Open Roles</p>
                      <p className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Viruzverse · 2026
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold"
                    style={{ background: `${P}12`, color: P2, border: `1px solid ${P}22` }}>
                    Remote OK
                  </span>
                </div>

                {/* Role items */}
                {[
                  { title: "Full-stack Engineer",  tag: "Engineering", color: P        },
                  { title: "Flutter Developer",     tag: "Mobile",      color: "#06b6d4"},
                  { title: "UI/UX Designer",        tag: "Design",      color: "#10b981"},
                  { title: "DevOps Engineer",       tag: "Infra",       color: P2       },
                ].map(({ title, tag, color }, i) => (
                  <motion.div key={title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.09, ease: EASE }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-2xl mb-2 last:mb-0
                               transition-all duration-200 cursor-pointer group"
                    style={{
                      background: i === 0 ? `${color}0a` : "rgba(255,255,255,0.03)",
                      border: i === 0 ? `1px solid ${color}20` : "1px solid rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${color}0a`;
                      (e.currentTarget as HTMLElement).style.border = `1px solid ${color}20`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = i === 0 ? `${color}0a` : "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.border = i === 0 ? `1px solid ${color}20` : "1px solid rgba(255,255,255,0.05)";
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                      <span className="text-[12px] font-bold text-white">{title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg"
                        style={{ background: `${color}10`, color }}>
                        {tag}
                      </span>
                      <ArrowRight size={11} style={{ color: "rgba(255,255,255,0.2)" }}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Footer */}
                <div className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
                    viruzverse.in/careers
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative flex h-1.5 w-1.5 rounded-full bg-green-400" />
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: "#10b981" }}>hiring now</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
