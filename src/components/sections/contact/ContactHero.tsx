"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-hero opacity-70" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle,#7C3AED,transparent)" }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent)" }} />
      </div>
      <div className="max-w-site container-pad mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-glow text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            We respond within 24 hours
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold text-text-primary leading-[1.08] tracking-tight mb-6 max-w-3xl">
          Let's build something<br /><span className="gradient-text">together.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl text-text-secondary leading-relaxed max-w-2xl">
          Tell us about your project, your problem, or just say hello.
          We'll get back to you honestly — and quickly.
        </motion.p>
      </div>
    </section>
  );
}
