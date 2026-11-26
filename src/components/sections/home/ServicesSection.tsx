"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Globe,
  Cpu,
  TrendingUp,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CARDS = [
  {
    id: "SYS.01",
    tag: "B2B SOLUTIONS",
    title: "Automate & Eliminate Friction",
    desc: "Custom internal tools & emerging-tech workflows built around how your business operates.",
    chips: ["Emerging Tech", "Workflows", "100% Your IP"],
    cta: "Solve B2B Problem",
    icon: Briefcase,
    accent: "violet",
  },
  {
    id: "SYS.02",
    tag: "B2C & SCALING",
    title: "Launch & Scale at Velocity",
    desc: "High-speed web & mobile platforms engineered to handle real customer traffic and growth.",
    chips: ["Web & Mobile", "High-Traffic", "Zero Downtime"],
    cta: "Scale Your Business",
    icon: Globe,
    accent: "emerald",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="relative py-10 sm:py-14 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-white leading-none">
              HOW WE SOLVE ?
            </h2>

            <Magnetic3DButton variant="outline" href="/contact">
              <span>Book Free Consultation</span>
              <ArrowRight size={14} />
            </Magnetic3DButton>
          </div>
        </ScrollReveal>

        {/* Sleek Compact Futuristic Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isViolet = card.accent === "violet";

            return (
              <ScrollReveal key={card.id} delay={idx * 90}>
                <TiltCard3D className="group relative overflow-hidden p-5 sm:p-6 flex flex-col justify-between h-full">
                  {/* Top Neon Laser Line */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${
                      isViolet ? "via-violet-500" : "via-emerald-400"
                    } to-transparent opacity-80 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Corner Ambient Aura */}
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
                    style={{
                      background: isViolet
                        ? "radial-gradient(circle, #8b5cf6 0%, transparent 70%)"
                        : "radial-gradient(circle, #10b981 0%, transparent 70%)",
                    }}
                  />

                  {/* Futuristic HUD Corner Brackets */}
                  <span
                    className={`pointer-events-none absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l ${
                      isViolet ? "border-violet-400/50" : "border-emerald-400/50"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r ${
                      isViolet ? "border-violet-400/50" : "border-emerald-400/50"
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Top HUD Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                            isViolet
                              ? "bg-violet-500/15 border-violet-400/30 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.25)]"
                              : "bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.25)]"
                          }`}
                        >
                          <Icon size={16} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-slate-400">
                          {card.id} //{" "}
                          <span className={isViolet ? "text-violet-300 font-bold" : "text-emerald-300 font-bold"}>
                            {card.tag}
                          </span>
                        </span>
                      </div>

                      <span
                        className={`w-2 h-2 rounded-full animate-pulse ${
                          isViolet
                            ? "bg-violet-400 shadow-[0_0_8px_#a78bfa]"
                            : "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                        }`}
                      />
                    </div>

                    {/* Title & Concise Copy */}
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  {/* Compact Bottom Row: Tech Chips + Action */}
                  <div className="relative z-10 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {card.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1 text-xs font-mono font-semibold transition-all group/link ${
                        isViolet
                          ? "text-violet-300 hover:text-white"
                          : "text-emerald-300 hover:text-white"
                      }`}
                    >
                      <span>{card.cta}</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </TiltCard3D>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
