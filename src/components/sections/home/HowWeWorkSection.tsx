"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01", title: "Discovery",
    desc: "We understand your problem, users, and goals. Direct conversation — no pitch decks, no fluff.",
    meta: "30-min · Free",
  },
  {
    n: "02", title: "Scope & Quote",
    desc: "A clear document — what we build, timeline, fixed price. No ambiguity, no hidden fees.",
    meta: "Within 48 hrs",
  },
  {
    n: "03", title: "Build & Demo",
    desc: "Weekly working demos. Direct Slack access. Real progress you can see every sprint.",
    meta: "Weekly sprints",
  },
  {
    n: "04", title: "Launch & Own",
    desc: "We deploy, monitor, and stay. Post-launch support is default — not an expensive add-on.",
    meta: "Ongoing support",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-bg">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(124,58,237,0.07) 0%,transparent 65%)" }} />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "#7c3aed" }}>
            How we work
          </p>
          <h2 className="font-extrabold tracking-[-0.03em] leading-[1.06] text-ink"
            style={{ fontSize: "clamp(28px,4.5vw,52px)" }}>
            Idea to production,<br />
            <span style={{
              backgroundImage: "linear-gradient(118deg,#7c3aed,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              without the chaos.
            </span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[12.5%] right-[12.5%] h-[1px]"
            style={{ background: "linear-gradient(90deg,#c4b5fd,#ddd6fe,#c4b5fd)" }} />

          {STEPS.map((step, i) => (
            <motion.div key={step.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative flex flex-col p-6 rounded-3xl glass cursor-default"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg,#7c3aed,transparent)" }} />

              <motion.div
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-10 h-10 rounded-2xl flex items-center justify-center text-[13px] font-black font-mono mb-6 z-10"
                style={{
                  background: "linear-gradient(135deg,#ede9fe,#ffffff)",
                  border: "1.5px solid #c4b5fd",
                  color: "#7c3aed",
                  boxShadow: "0 4px 12px rgba(124,58,237,0.15)",
                }}
              >
                {step.n}
              </motion.div>

              <h3 className="text-[15px] font-bold mb-2.5 text-ink">{step.title}</h3>
              <p className="text-[13px] leading-[1.78] mb-5 flex-1 text-muted">{step.desc}</p>

              <span className="self-start text-[11px] font-mono px-3 py-1.5 rounded-full"
                style={{ background: "#ede9fe", border: "1px solid #ddd6fe", color: "#7c3aed" }}>
                {step.meta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
