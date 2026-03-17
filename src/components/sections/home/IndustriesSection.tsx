"use client";

import { motion } from "framer-motion";
import {
  Utensils, GraduationCap, Factory, HeartPulse,
  Building2, ShoppingBag, Briefcase, Truck, Landmark, Scale,
  type LucideIcon,
} from "lucide-react";

const ITEMS: {
  icon: LucideIcon;
  name: string;
  sub: string;
  color: string;
  grad: string;
  glow: string;
}[] = [
  { icon: Utensils,      name: "F&B",            sub: "Restaurants & Cafés",    color: "#f97316", grad: "from-orange-500/20 to-orange-400/5",   glow: "rgba(249,115,22,0.25)"   },
  { icon: GraduationCap, name: "Edtech",          sub: "Education Platforms",    color: "#3b82f6", grad: "from-blue-500/20 to-blue-400/5",       glow: "rgba(59,130,246,0.25)"   },
  { icon: Factory,       name: "Manufacturing",   sub: "Industrial Operations",  color: "#94a3b8", grad: "from-slate-400/20 to-slate-300/5",     glow: "rgba(148,163,184,0.25)"  },
  { icon: HeartPulse,    name: "Healthcare",      sub: "Clinics & Hospitals",    color: "#ef4444", grad: "from-red-500/20 to-red-400/5",         glow: "rgba(239,68,68,0.25)"    },
  { icon: Building2,     name: "Real Estate",     sub: "Property & Listings",    color: "#10b981", grad: "from-emerald-500/20 to-emerald-400/5", glow: "rgba(16,185,129,0.25)"   },
  { icon: ShoppingBag,   name: "E-Commerce",      sub: "Retail & Marketplaces",  color: "#8b5cf6", grad: "from-violet-500/20 to-violet-400/5",   glow: "rgba(139,92,246,0.25)"   },
  { icon: Briefcase,     name: "Professional",    sub: "Agencies & Consultants", color: "#7c3aed", grad: "from-purple-600/20 to-purple-400/5",   glow: "rgba(124,58,237,0.25)"   },
  { icon: Truck,         name: "Logistics",       sub: "Supply Chain & Fleet",   color: "#f59e0b", grad: "from-amber-500/20 to-amber-400/5",     glow: "rgba(245,158,11,0.25)"   },
  { icon: Landmark,      name: "Fintech",         sub: "Payments & Banking",     color: "#06b6d4", grad: "from-cyan-500/20 to-cyan-400/5",       glow: "rgba(6,182,212,0.25)"    },
  { icon: Scale,         name: "LegalTech",       sub: "Law & Compliance",       color: "#6366f1", grad: "from-indigo-500/20 to-indigo-400/5",   glow: "rgba(99,102,241,0.25)"   },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065 } },
};
const item = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function IndustriesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#faf9ff" }}>

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(124,58,237,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Orb left */}
        <div className="absolute -bottom-20 -left-32 w-[600px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)" }}
        />
        {/* Orb right */}
        <div className="absolute -top-20 -right-32 w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.1) 0%, transparent 65%)" }}
        />
      </div>

      {/* Separators */}
      {(["top-0","bottom-0"] as const).map((p) => (
        <div key={p} className={`absolute ${p} inset-x-0 h-px`}
          style={{ background: "linear-gradient(90deg, transparent, #c4b5fd 40%, #7c3aed 50%, #c4b5fd 60%, transparent)" }}
        />
      ))}

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(124,58,237,0.07)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#7c3aed" }}>
              Industries We Serve
            </span>
          </div>

          <h2
            className="font-extrabold tracking-[-0.03em] leading-[1.08] mb-5"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", color: "#0a0a0f" }}
          >
            Built for{" "}
            <span style={{
              backgroundImage: "linear-gradient(118deg, #7c3aed 20%, #a78bfa 60%, #c4b5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              the real world.
            </span>
          </h2>

          <p className="max-w-[480px] mx-auto text-[15px] leading-[1.8]" style={{ color: "#6b7280" }}>
            Production software across 10+ industries.
            Domain expertise comes standard — no onboarding required.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {ITEMS.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col items-center text-center
                           p-5 sm:p-6 rounded-2xl cursor-default overflow-hidden
                           transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.95)";
                  el.style.borderColor = ind.color + "44";
                  el.style.boxShadow = `0 16px 40px ${ind.glow}, inset 0 1px 0 rgba(255,255,255,1)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.7)";
                  el.style.borderColor = "rgba(255,255,255,0.9)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)";
                }}
              >
                {/* Gradient wash behind card on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 bg-gradient-to-b ${ind.grad}`}
                />

                {/* Icon ring */}
                <div
                  className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3
                             shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${ind.color}22, ${ind.color}0d)`,
                    border: `1px solid ${ind.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: ind.color }} strokeWidth={1.6} />
                </div>

                {/* Text */}
                <p className="relative z-10 text-[13px] sm:text-[14px] font-semibold mb-1 leading-tight
                              transition-colors duration-300 group-hover:text-[#0a0a0f]"
                  style={{ color: "#1e1b2e" }}>
                  {ind.name}
                </p>
                <p className="relative z-10 text-[11px] leading-tight transition-colors duration-300"
                  style={{ color: "#9ca3af" }}>
                  {ind.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom stat strip ── */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { n: "10+", label: "Industries" },
            { n: "50+", label: "Projects delivered" },
            { n: "98%", label: "Client satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
            >
              <span className="text-[18px] font-extrabold tracking-tight"
                style={{
                  backgroundImage: "linear-gradient(118deg, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{s.n}</span>
              <span className="text-[12px] font-medium" style={{ color: "#6b7280" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
