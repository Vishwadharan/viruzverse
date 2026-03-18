"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, BookOpen, Laptop, Users, Heart } from "lucide-react";

const P    = "#7c3aed";
const P2   = "#a78bfa";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PERKS = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    desc: "Market-rate compensation reviewed regularly.",
    color: "#10b981", glow: "#34d399",
    stat: "Reviewed", sub: "every 6 months",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Work when you're most productive. We care about results.",
    color: "#06b6d4", glow: "#67e8f9",
    stat: "Async-first", sub: "output-driven",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    desc: "Annual budget for courses, books, and conferences.",
    color: P, glow: P2,
    stat: "Annual", sub: "learning allowance",
  },
  {
    icon: Laptop,
    title: "Great Equipment",
    desc: "We'll make sure you have the tools to do your best work.",
    color: "#f59e0b", glow: "#fcd34d",
    stat: "Day 1", sub: "ready setup",
  },
  {
    icon: Users,
    title: "Founder Access",
    desc: "Work directly with the founders from day one.",
    color: "#ec4899", glow: "#f9a8d4",
    stat: "Direct", sub: "no bureaucracy",
  },
  {
    icon: Heart,
    title: "Health Coverage",
    desc: "Health insurance for you and your family.",
    color: "#ef4444", glow: "#fca5a5",
    stat: "Full", sub: "family coverage",
  },
];

export default function PerksSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#07060f" }}
    >
      <style>{`
        @keyframes perkPulse {
          0%,100% { opacity: 0.5; transform: scale(1);   }
          50%      { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 pointer-events-none"
        style={{ background: `radial-gradient(ellipse,${P}10,transparent 70%)` }}
      />
      <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%,rgba(16,185,129,0.06),transparent 65%)" }}
      />
      <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%,rgba(6,182,212,0.06),transparent 65%)" }}
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
            WebkitTextStroke: `1px ${P}05`,
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}>
          Perks
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
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: P2 }} />
              Benefits &amp; Perks
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
            What you{" "}
            <span style={{
              backgroundImage: `linear-gradient(118deg,${P} 10%,${P2} 55%,#c4b5fd)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              get with us
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
            We take care of the people who build with us.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERKS.map(({ icon: Icon, title, desc, color, glow, stat, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              <div
                className="group relative rounded-3xl overflow-hidden p-6 h-full
                           transition-all duration-300 cursor-default flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${color}09`;
                  el.style.border = `1px solid ${color}28`;
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
                {/* Animated top line */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] rounded-full"
                  style={{
                    background: `linear-gradient(90deg,transparent,${color}70,transparent)`,
                    animation: `perkPulse ${2.5 + i * 0.35}s ease-in-out infinite`,
                  }}
                />

                {/* Corner ambient */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle,${color}12,transparent 70%)` }}
                />

                {/* Number */}
                <div className="absolute bottom-3 right-5 font-black select-none pointer-events-none"
                  style={{
                    fontSize: "60px",
                    color: "transparent",
                    WebkitTextStroke: `1px ${color}07`,
                    lineHeight: 1,
                  }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background: `conic-gradient(from 0deg,${color}50,transparent 50%,${color}30,transparent)`,
                        animation: `rotateBorder ${4 + i * 0.5}s linear infinite`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "1.5px",
                        borderRadius: "16px",
                      }}
                    />
                    <div className="absolute inset-[1.5px] rounded-[14px] flex items-center justify-center"
                      style={{
                        background: `${color}14`,
                        boxShadow: `0 0 20px ${color}14`,
                      }}
                    >
                      <Icon size={18} style={{ color: glow }} strokeWidth={1.6} />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-[14px] font-black text-white mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-[12px] leading-[1.8]"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {desc}
                  </p>
                </div>

                {/* Stat pill */}
                <div className="relative z-10 mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div>
                    <p className="text-[13px] font-black leading-tight" style={{ color: glow }}>{stat}</p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{sub}</p>
                  </div>
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
                    <Icon size={11} style={{ color: glow }} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Bottom hover bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                               transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg,transparent,${color}60,transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
