"use client";

import { Lightbulb, Gauge, HeartHandshake, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard3D from "@/components/ui/TiltCard3D";

interface ValueItem {
  icon: LucideIcon;
  num: string;
  label: string;
  desc: string;
  tags: string[];
}

const VALUES: ValueItem[] = [
  {
    icon: Lightbulb,
    num: "01",
    label: "First-Principles Engineering",
    desc: "We research and validate system constraints before writing code. Clean architectures that don't need rewrites.",
    tags: ["Clean Code", "Design Docs", "Modern Stack"],
  },
  {
    icon: Gauge,
    num: "02",
    label: "Zero Lag, Pure Performance",
    desc: "Laggy software is broken software. Sub-second TTFB, optimized DB queries, and 60fps micro-interactions.",
    tags: ["Sub-50ms APIs", "Memory Profiling", "Zero Bloat"],
  },
  {
    icon: HeartHandshake,
    num: "03",
    label: "Direct Developer Access",
    desc: "No account manager layers. Direct Slack communication with the engineers building your platform.",
    tags: ["Direct Slack", "Weekly Demos", "Transparent"],
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-14 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Our Guiding Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              How we engineer software.
            </h2>
          </div>

          {/* 3-Column Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {VALUES.map(({ icon: Icon, num, label, desc, tags }, idx) => (
              <ScrollReveal key={num} delay={idx * 100}>
                <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {num}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {label}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                      {desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltCard3D>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
