'use client';

import { motion, type Transition } from "framer-motion";
import { Lightbulb, Gauge, HeartHandshake, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 28, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: EASE } satisfies Transition,
});

const VALUES = [
  {
    icon: Lightbulb,
    num: "01",
    label: "Innovation First",
    desc: "We treat every project as a product problem — researching, prototyping, and questioning assumptions before writing a single line of code.",
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.18)",
    bg: "rgba(124,58,237,0.07)",
    border: "rgba(124,58,237,0.18)",
    tags: ["Research", "Prototyping", "First principles"],
  },
  {
    icon: Gauge,
    num: "02",
    label: "Performance Obsessed",
    desc: "Slow software is broken software. We profile, benchmark, and optimise from day one — not as an afterthought.",
    accent: "#0891b2",
    glow: "rgba(8,145,178,0.18)",
    bg: "rgba(8,145,178,0.07)",
    border: "rgba(8,145,178,0.18)",
    tags: ["Sub-second loads", "Benchmarking", "Zero bloat"],
  },
  {
    icon: HeartHandshake,
    num: "03",
    label: "Client Success",
    desc: "We succeed only when you do. That means honest timelines, clear communication, and being reachable — founder to founder.",
    accent: "#059669",
    glow: "rgba(5,150,105,0.18)",
    bg: "rgba(5,150,105,0.07)",
    border: "rgba(5,150,105,0.18)",
    tags: ["Transparent", "Founder-direct", "Fixed pricing"],
  },
];

export default function ValuesSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#faf9ff" }}
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

        {/* ── Header ── */}
        <motion.div {...rise(0)} className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       text-[11px] font-mono font-semibold uppercase tracking-[0.18em] mb-6 inline-flex"
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
            Our Values
          </span>

          <h2
            className="font-black tracking-[-0.03em] leading-[1.06] mt-6"
            style={{ fontSize: "clamp(30px,4.5vw,52px)", color: "#0a0a0f" }}
          >
            What drives{" "}
            <span style={{
              backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              every decision.
            </span>
          </h2>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.label}
                {...rise(i * 0.1)}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col p-7 rounded-3xl overflow-hidden cursor-default
                           transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = v.border;
                  el.style.boxShadow = `0 20px 50px ${v.glow}, inset 0 1px 0 rgba(255,255,255,1)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.95)";
                  el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)";
                }}
              >
                {/* Ghost number */}
                <span
                  className="absolute -top-3 -right-1 font-black leading-none
                             select-none pointer-events-none
                             opacity-[0.045] group-hover:opacity-[0.09] transition-opacity duration-300"
                  style={{
                    fontSize: "100px",
                    color: v.accent,
                    letterSpacing: "-0.05em",
                  }}
                >{v.num}</span>

                {/* Gradient wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${v.bg} 0%, transparent 65%)`,
                  }}
                />

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg,transparent,${v.accent},transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ background: v.bg, border: `1.5px solid ${v.border}` }}
                >
                  <Icon size={22} style={{ color: v.accent }} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <h3
                    className="text-[18px] font-black tracking-tight mb-3 transition-colors duration-300"
                    style={{ color: "#0a0a0f" }}
                  >
                    {v.label}
                  </h3>

                  <p
                    className="text-[13px] leading-[1.85] mb-6 flex-1"
                    style={{ color: "#6b7280" }}
                  >
                    {v.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {v.tags.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg"
                        style={{
                          background: v.bg,
                          color: v.accent,
                          border: `1px solid ${v.border}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          {...rise(0.35)}
          className="mt-10 p-6 rounded-3xl flex flex-col sm:flex-row items-center
                     justify-between gap-4"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(255,255,255,0.95)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)",
          }}
        >
          <div>
            <p className="text-[15px] font-bold mb-0.5" style={{ color: "#0a0a0f" }}>
              These aren't posters on a wall.
            </p>
            <p className="text-[13px]" style={{ color: "#9ca3af" }}>
              Every project is a direct reflection of these three principles.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl
                       text-[13px] font-bold text-white shrink-0
                       transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
              boxShadow: "0 6px 20px rgba(124,58,237,0.35)",
            }}
          >
            Work with us
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
