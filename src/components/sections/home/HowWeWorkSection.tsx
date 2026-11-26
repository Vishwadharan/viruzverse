"use client";

import { MessageSquare, Cpu, Code2, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Business Consultation",
    desc: "We sit down with you to understand your B2B or B2C bottlenecks and growth goals.",
    meta: "Free for Owners",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Emerging Tech & Scope",
    desc: "We design the right architecture with emerging technologies and a clear milestone plan.",
    meta: "B2B & B2C Focused",
  },
  {
    step: "03",
    icon: Code2,
    title: "Iterative Build & Review",
    desc: "Transparent engineering cycles with staging previews and direct team communication.",
    meta: "Direct Team Access",
  },
  {
    step: "04",
    icon: Rocket,
    title: "IP Transfer & Scale",
    desc: "Production launch with 100% codebase handover and ongoing support to scale.",
    meta: "100% Client IP",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative py-14 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400 mb-2 block">
                How We Partner
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight">
                Engineering without chaos.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Start with a free consultation for business owners, followed by clear milestones and direct collaboration.
            </p>
          </div>
        </ScrollReveal>

        {/* Connected 4-Column Executive Process Grid */}
        <div className="relative rounded-3xl border border-white/10 bg-[#090912]/70 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
          {/* Subtle Top Specular Line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          {/* Desktop Horizontal Connector Line */}
          <div
            className="hidden lg:block pointer-events-none absolute top-[62px] left-16 right-16 h-px bg-gradient-to-r from-violet-500/30 via-indigo-400/30 to-emerald-400/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.step} delay={idx * 70}>
                  <div className="group relative flex flex-col justify-between h-full p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300">
                    <div>
                      {/* Step Node + Icon Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#0d0d1a] border border-violet-500/35 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.18)] group-hover:border-violet-400 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-300">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-violet-300 transition-colors">
                          {item.step}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-bold text-white tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Clean Footer Tag */}
                    <div className="pt-3 border-t border-white/[0.07] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span className="text-[11px] font-mono text-slate-300">
                        {item.meta}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
