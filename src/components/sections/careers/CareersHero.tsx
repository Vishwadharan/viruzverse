"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-hero opacity-70" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle,#A855F7,transparent)" }} />
      </div>
      <div className="max-w-site container-pad mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-glow text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />We're hiring
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold text-text-primary leading-[1.08] tracking-tight mb-6 max-w-3xl">
          Build the future of<br /><span className="gradient-text">business software.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
          Join a small team that moves fast, ships real products, and cares deeply about craft.
          We're based in Coimbatore and work on problems that actually matter to businesses.
        </motion.p>
        <motion.a initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#open-roles"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 hover:scale-[1.02] transition-all"
          style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
          See open roles <ArrowRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}
