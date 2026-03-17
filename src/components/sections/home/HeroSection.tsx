"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Terminal } from "lucide-react";
import Magnetic3DButton from "../../ui/Magnetic3DButton";


const F = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.21, 0.47, 0.32, 0.98] },
});

const CODE_LINES = [
  { p: true,  t: "npx create-viruzverse-app@latest", c: "#0a0a0f" },
  { p: false, t: "✔  Scaffolding B2B SaaS...",        c: "#6d28d9" },
  { p: false, t: "✔  Auth + billing configured",      c: "#6d28d9" },
  { p: false, t: "✔  AI pipeline connected",          c: "#6d28d9" },
  { p: false, t: "✔  Deployed → production",          c: "#6d28d9" },
  { p: true,  t: "# Ship in days. Not months.",       c: "#9ca3af" },
];

const CHECKS = [
  "AI-powered automation pipelines",
  "Multi-tenant SaaS architecture",
  "End-to-end product delivery",
];

const TAGS = [
  "Next.js 16", "Node.js", "PostgreSQL",
  "OpenAI", "Prisma", "TypeScript", "Redis", "Docker",
];

const INFO_CARDS = [
  { label: "Currently accepting", val: "New projects",      icon: "🟣" },
  { label: "Based in",            val: "Coimbatore, India", icon: "📍" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY    = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none grid-pattern" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          className="float absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            y: orbY,
            background:
              "radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(109,40,217,0.05) 50%, transparent 70%)",
          }}
        />
        <motion.div
          className="float2 absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.09) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      {/* ↓ THIS was the missing opening div that caused the crash */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 w-full relative z-10">
        <motion.div style={{ opacity: fadeOut }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-center">

            {/* ════ LEFT ════ */}
            <div>

              {/* Eyebrow badge */}
              <motion.div {...F(0)} className="mb-8">
                <a
                  href="/products/cafeaura"
                  className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                             text-[12px] font-mono font-medium glass-soft shadow-sm
                             hover:shadow-md transition-shadow duration-200"
                  style={{ color: "#7c3aed" }}
                >
                  <Sparkles size={11} />
                  New → Cafeaura restaurant OS is live
                  <ArrowRight
                    size={11}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </motion.div>

              {/* H1 */}
              <motion.h1
                {...F(0.08)}
                className="font-extrabold leading-[1.0] tracking-[-0.04em] mb-5
                           text-[56px] sm:text-[66px] md:text-[74px]
                           lg:text-[64px] xl:text-[78px] 2xl:text-[92px]"
                style={{ color: "#0a0a0f" }}
              >
                Software that
                <br />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(118deg, #7c3aed 0%, #6d28d9 50%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  scales with you.
                </span>
              </motion.h1>

              {/* Underline accent */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="origin-left mb-8 h-[3px] w-20 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #a78bfa, transparent)",
                }}
                aria-hidden
              />

              {/* Description */}
              <motion.p
                {...F(0.18)}
                className="text-[17px] lg:text-[18px] leading-[1.82] max-w-[500px] mb-8"
                style={{ color: "#6b7280" }}
              >
                We engineer B2B software — AI automation, SaaS platforms,
                CRM/ERP, and edtech solutions. Based in Coimbatore.
                Built for the world.
              </motion.p>

              {/* Check list */}
              <motion.div {...F(0.26)} className="flex flex-col gap-2.5 mb-10">
                {CHECKS.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={15}
                      style={{ color: "#7c3aed", flexShrink: 0 }}
                    />
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: "#6b7280" }}
                    >
                      {c}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div {...F(0.33)} className="flex flex-wrap gap-3 mb-12">
                <Magnetic3DButton variant="primary" href="/contact">
                  Start a project <ArrowRight size={15} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="/services">
                  Explore services
                </Magnetic3DButton>
              </motion.div>

              {/* Tech stack */}
              <motion.div {...F(0.4)}>
                <p
                  className="text-[11px] font-mono font-semibold uppercase tracking-[0.14em] mb-3"
                  style={{ color: "#9ca3af" }}
                >
                  Built with
                </p>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.04 }}
                      whileHover={{ y: -3, scale: 1.06 }}
                      className="px-3 py-1.5 rounded-full text-[11px] font-mono cursor-default glass-soft shadow-sm"
                      style={{ color: "#374151" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ════ RIGHT ════ */}
            <motion.div
              initial={{ opacity: 0, x: 28, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:flex flex-col gap-4"
              style={{ perspective: 1000 }}
            >

              {/* Terminal card */}
              <motion.div
                whileHover={{ rotateY: 3, rotateX: -2, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className="relative rounded-3xl overflow-hidden glass"
                style={{
                  boxShadow:
                    "0 24px 64px rgba(124,58,237,0.14), 0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
                  }}
                />

                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 bg-white/60"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.85)" }}
                >
                  <div className="flex gap-1.5">
                    {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                      <div key={c} className="w-2.5 h-2.5 rounded-full"
                        style={{ background: c }} />
                    ))}
                  </div>
                  <span
                    className="flex-1 text-center text-[11px] font-mono flex items-center justify-center gap-1.5"
                    style={{ color: "#9ca3af" }}
                  >
                    <Terminal size={10} /> viruzverse — zsh
                  </span>
                </div>

                {/* Code lines */}
                <div
                  className="p-5 pb-6 font-mono text-[13px] leading-[2.1]"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  {CODE_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.13 }}
                      className="flex items-start gap-2.5"
                    >
                      {line.p ? (
                        <span style={{ color: "#7c3aed", userSelect: "none" }}>❯</span>
                      ) : (
                        <span className="opacity-0 select-none">❯</span>
                      )}
                      <span style={{ color: line.c }}>{line.t}</span>
                    </motion.div>
                  ))}

                  {/* ✅ Fixed: removed steps(1) easing */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
                    className="flex items-center gap-2.5 mt-0.5"
                  >
                    <span style={{ color: "#7c3aed" }}>❯</span>
                    <span
                      className="inline-block w-[9px] h-[16px] rounded-[2px]"
                      style={{
                        background: "#7c3aed",
                        boxShadow: "0 0 10px rgba(124,58,237,0.6)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Status bar */}
                <div
                  className="px-5 py-2.5 flex items-center justify-between bg-white/50"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.85)" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "#7c3aed",
                        boxShadow: "0 0 6px rgba(124,58,237,0.7)",
                      }}
                    />
                    <span className="text-[10px] font-mono" style={{ color: "#9ca3af" }}>
                      prod · online
                    </span>
                  </div>
                  <div className="flex gap-4">
                    {[["branch", "main"], ["ts", "✓"]].map(([k, v]) => (
                      <span key={k} className="text-[10px] font-mono"
                        style={{ color: "#9ca3af" }}>
                        {k}:{" "}
                        <span style={{ color: "#7c3aed" }}>{v}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Two info cards */}
              <div className="grid grid-cols-2 gap-3">
                {INFO_CARDS.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="flex flex-col gap-1.5 p-4 rounded-2xl glass cursor-default"
                    style={{
                      boxShadow:
                        "0 4px 20px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
                    }}
                  >
                    <span className="text-[18px]">{card.icon}</span>
                    <p className="text-[13px] font-bold" style={{ color: "#0a0a0f" }}>
                      {card.val}
                    </p>
                    <p className="text-[11px] font-mono" style={{ color: "#9ca3af" }}>
                      {card.label}
                    </p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] font-mono uppercase tracking-widest"
          style={{ color: "#9ca3af" }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, #7c3aed, transparent)" }}
        />
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #faf9ff)" }}
      />
    </section>
  );
}
