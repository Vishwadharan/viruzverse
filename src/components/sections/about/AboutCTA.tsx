'use client';

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Zap, Shield, TrendingUp } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 20, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const PILLS = [
  { icon: TrendingUp, text: "60% cost savings" },
  { icon: Zap,        text: "Immediate ROI"     },
  { icon: Shield,     text: "Enterprise-grade"  },
];

export default function AboutCTA() {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf9ff" }}
    >
      {/* Separators */}
      {(["top-0","bottom-0"] as const).map(p => (
        <div key={p} className={`absolute ${p} inset-x-0 h-px`}
          style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
        />
      ))}

      <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          {...rise(0)}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#1e1b2e 0%,#0f0c1a 100%)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.22), 0 0 0 1px rgba(124,58,237,0.18)",
          }}
        >
          {/* Orbs */}
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(124,58,237,0.2) 0%,transparent 65%)" }} />
          <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(167,139,250,0.1) 0%,transparent 65%)" }} />

          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,139,250,0.04) 1px,transparent 1px)," +
                "linear-gradient(90deg,rgba(167,139,250,0.04) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* ── Content: two-column on desktop, stacked on mobile ── */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-8 sm:px-10 lg:px-12 py-10 lg:py-12">

            {/* Left */}
            <div className="flex-1 min-w-0">
              {/* Badge */}
              <motion.div {...rise(0.08)} className="mb-5">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             text-[11px] font-mono font-semibold uppercase tracking-[0.16em]"
                  style={{
                    color: "#a78bfa",
                    background: "rgba(124,58,237,0.18)",
                    border: "1px solid rgba(124,58,237,0.28)",
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative flex h-1.5 w-1.5 rounded-full bg-violet-500" />
                  </span>
                  Ready when you are
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2 {...rise(0.12)}
                className="font-black tracking-[-0.03em] leading-[1.05] text-white mb-3"
                style={{ fontSize: "clamp(24px,3.5vw,42px)" }}
              >
                Transform your business
                <br />
                with{" "}
                <span style={{
                  backgroundImage: "linear-gradient(118deg,#a78bfa 10%,#c4b5fd 70%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  great software.
                </span>
              </motion.h2>

              {/* Trust strip */}
              <motion.p {...rise(0.18)}
                className="text-[12px] font-mono"
                style={{ color: "rgba(167,139,250,0.5)" }}
              >
                24 hr response · NDA available · Fixed pricing · No lock-in
              </motion.p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 lg:items-end shrink-0">
              {/* Pills */}
              <motion.div
                className="flex flex-wrap gap-2 lg:justify-end"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              >
                {PILLS.map(({ icon: Icon, text }) => (
                  <motion.span
                    key={text}
                    variants={{
                      hidden:  { opacity: 0, scale: 0.85 },
                      visible: { opacity: 1, scale: 1,
                        transition: { duration: 0.35, ease: EASE } satisfies Transition },
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl
                               text-[11px] font-semibold"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon size={11} style={{ color: "#a78bfa" }} strokeWidth={2.2} />
                    {text}
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div {...rise(0.28)} className="flex items-center gap-2.5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl
                             text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#fff";
                    el.style.borderColor = "rgba(196,181,253,0.35)";
                    el.style.background = "rgba(255,255,255,0.11)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "rgba(255,255,255,0.7)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.background = "rgba(255,255,255,0.07)";
                  }}
                >
                  See services
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                    boxShadow: "0 8px 24px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 14px 36px rgba(124,58,237,0.65), inset 0 1px 0 rgba(255,255,255,0.15)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.15)"}
                >
                  Build your platform
                  <ArrowUpRight size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
