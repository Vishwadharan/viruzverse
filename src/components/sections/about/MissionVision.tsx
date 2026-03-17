'use client';

import { motion, type Transition } from "framer-motion";
import {
  Layers, BadgeCheck, Shield, TrendingUp,
  Globe, Mail, Eye, Target,
} from "lucide-react";

/* ── Type-safe transition helper ─────────────────── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const rise = (delay = 0) =>
  ({
    initial:      { opacity: 0, y: 28, filter: "blur(8px)" },
    whileInView:  { opacity: 1, y: 0,  filter: "blur(0px)" },
    viewport:     { once: true },
    transition:   { duration: 0.6, delay, ease: EASE } satisfies Transition,
  });

const FEATURES = [
  { icon: Layers,     label: "Full-Stack",     sub: "End-to-end delivery"   },
  { icon: BadgeCheck, label: "ROI-first",      sub: "Results, not reports"  },
  { icon: Shield,     label: "No lock-in",     sub: "You own everything"    },
  { icon: TrendingUp, label: "Built to scale", sub: "10× without infra cost"},
];

const STATS = [
  { n: "50+", label: "Projects shipped"     },
  { n: "10+", label: "Industries served"    },
  { n: "98%", label: "Client satisfaction"  },
];

export default function MissionVision() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.028) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(124,58,237,0.028) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -top-32 right-0 w-150 h-125 rounded-full"
          style={{ background: "radial-gradient(ellipse at 100% 0%,rgba(124,58,237,0.08) 0%,transparent 65%)" }}
        />
        <div className="absolute -bottom-24 -left-16 w-125 h-100 rounded-full"
          style={{ background: "radial-gradient(ellipse at 0% 100%,rgba(167,139,250,0.07) 0%,transparent 65%)" }}
        />
      </div>

      {/* Separators */}
      {(["top-0", "bottom-0"] as const).map(p => (
        <div key={p} className={`absolute ${p} inset-x-0 h-px`}
          style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
        />
      ))}

      <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* ══ Section header ══ */}
        <motion.div {...rise(0)} className="text-center mb-16">
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
            What drives us
          </span>
        </motion.div>

        {/* ══ Main grid ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* ── MISSION card (dark) ── */}
          <motion.div {...rise(0.1)}
            className="relative rounded-3xl overflow-hidden p-8 lg:p-10 flex flex-col"
            style={{
              background: "linear-gradient(145deg, #1e1b2e 0%, #0f0c1a 100%)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
              minHeight: "520px",
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute -top-4 -right-2 font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: "160px",
                color: "transparent",
                WebkitTextStroke: "1px rgba(124,58,237,0.12)",
                letterSpacing: "-0.05em",
              }}
            >01</span>

            {/* Inner glow */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)" }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-7"
                style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <Target size={11} style={{ color: "#a78bfa" }} strokeWidth={2.5} />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                  style={{ color: "#a78bfa" }}>
                  Mission
                </span>
              </div>

              <h2
                className="font-black tracking-[-0.03em] leading-[1.06] mb-5 text-white"
                style={{ fontSize: "clamp(24px,3.2vw,38px)" }}
              >
                Enterprise transformation
                <br />
                through{" "}
                <span style={{
                  backgroundImage: "linear-gradient(118deg,#a78bfa,#c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  intelligent software.
                </span>
              </h2>

              <p className="text-[14px] leading-[1.85] mb-8"
                style={{ color: "rgba(196,181,253,0.75)" }}
              >
                From Tamil Nadu, we engineer SaaS platforms that automate
                operations, predict outcomes, and scale without ballooning
                infrastructure costs.
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {FEATURES.map(({ icon: Icon, label, sub }) => (
                  <div key={label}
                    className="flex items-center gap-2.5 p-3 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(124,58,237,0.25)" }}
                    >
                      <Icon size={14} style={{ color: "#a78bfa" }} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white leading-none mb-0.5">{label}</p>
                      <p className="text-[10px] leading-none" style={{ color: "rgba(196,181,253,0.6)" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-2.5 mt-auto">
                {STATS.map(({ n, label }) => (
                  <div key={label}
                    className="p-3 rounded-2xl text-center"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.25)",
                    }}
                  >
                    <p className="text-[22px] font-black text-white leading-none mb-0.5"
                      style={{
                        backgroundImage: "linear-gradient(118deg,#a78bfa,#c4b5fd)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >{n}</p>
                    <p className="text-[10px] leading-tight" style={{ color: "rgba(196,181,253,0.65)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── VISION + CONTACT stacked ── */}
          <div className="flex flex-col gap-5">

            {/* Vision card (light) */}
            <motion.div {...rise(0.18)}
              className="relative rounded-3xl overflow-hidden p-8 lg:p-10 flex flex-col flex-1"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.95)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)",
              }}
            >
              {/* Ghost number */}
              <span
                className="absolute -top-4 -right-2 font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: "160px",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(124,58,237,0.05)",
                  letterSpacing: "-0.05em",
                }}
              >02</span>

              {/* Subtle orb */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)" }}
              />

              <div className="relative z-10">
                {/* Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-7"
                  style={{
                    background: "rgba(124,58,237,0.07)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <Eye size={11} style={{ color: "#7c3aed" }} strokeWidth={2.5} />
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: "#7c3aed" }}>
                    Vision
                  </span>
                </div>

                <h2
                  className="font-black tracking-[-0.03em] leading-[1.06] mb-4"
                  style={{ fontSize: "clamp(24px,3.2vw,38px)", color: "#0a0a0f" }}
                >
                  The most trusted
                  <br />
                  B2B studio in{" "}
                  <span style={{
                    backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 60%,#c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    South Asia.
                  </span>
                </h2>

                <p className="text-[15px] leading-[1.85] mb-8"
                  style={{ color: "#6b7280" }}
                >
                  We don't want to be the biggest agency — we want to be the
                  one founders call when it actually matters. Every project
                  is personal, every line of code is intentional.
                </p>

                {/* Value pills */}
                <div className="flex flex-wrap gap-2">
                  {["Founder-direct","Fixed pricing","24 hr response","No lock-in","NDA available"].map(v => (
                    <span key={v}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl
                                 text-[11px] font-semibold"
                      style={{
                        color: "#7c3aed",
                        background: "rgba(124,58,237,0.07)",
                        border: "1px solid rgba(124,58,237,0.18)",
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-400 inline-block" />
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact card */}
            <motion.div {...rise(0.26)}
              className="p-5 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.95)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
                >
                  <Globe size={16} style={{ color: "#7c3aed" }} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[13px] font-bold" style={{ color: "#0a0a0f" }}>Coimbatore, Tamil Nadu</p>
                  <p className="text-[11px]" style={{ color: "#9ca3af" }}>India · Remote-friendly worldwide</p>
                </div>
              </div>

              <a
                href="mailto:hello@viruzverse.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl
                           text-[12px] font-semibold shrink-0
                           transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: "#7c3aed",
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <Mail size={13} strokeWidth={2} />
                hello@viruzverse.com
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
