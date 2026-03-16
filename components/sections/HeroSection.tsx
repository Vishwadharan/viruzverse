"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-hero" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-site container-pad mx-auto relative z-10 pt-24 pb-20">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-glow text-xs font-mono mb-8">
              <Sparkles size={12} className="text-brand-violet" />
              B2B Software · AI · SaaS · Products
              <span className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-pulse" />
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.08] tracking-tight mb-6">
            We build software<br />
            <span className="gradient-text">businesses actually</span><br />need.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
            From AI automation and custom SaaS to full restaurant management systems —
            Viruzverse turns complex business problems into clean, scalable software.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-glow-violet"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-text-secondary border border-border hover:text-text-primary hover:border-brand-violet/40 hover:bg-white/5 transition-all">
              View Our Products <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap items-center gap-8">
            {[
              { value: "5+", label: "Products Built" },
              { value: "20+", label: "Clients Served" },
              { value: "3+", label: "Years Building" },
              { value: "100%", label: "Custom Solutions" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-extrabold gradient-text">{stat.value}</span>
                <span className="text-xs text-text-secondary font-mono">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
          {[
            { icon: "🤖", title: "AI Automation", desc: "Smart workflows", color: "#7C3AED" },
            { icon: "☕", title: "Cafeaura", desc: "Restaurant OS", color: "#06B6D4" },
            { icon: "🚀", title: "Custom SaaS", desc: "Ship faster", color: "#A855F7" },
          ].map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface/80 border border-border backdrop-blur-sm hover:border-brand-violet/30 transition-all cursor-default"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
              <span className="text-xl">{card.icon}</span>
              <div>
                <p className="text-sm font-semibold text-text-primary">{card.title}</p>
                <p className="text-xs text-text-secondary">{card.desc}</p>
              </div>
              <div className="ml-4 w-2 h-2 rounded-full animate-pulse" style={{ background: card.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-text-secondary font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-violet/60 to-transparent" />
      </motion.div>
    </section>
  );
}
