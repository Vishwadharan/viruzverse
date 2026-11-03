"use client";

import { DollarSign, Clock, BookOpen, Laptop, Users, Heart, type LucideIcon } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PerkItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  stat: string;
}

const PERKS: PerkItem[] = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    desc: "Market-rate salaries reviewed on merit every 6 months.",
    stat: "Bi-annual review",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Async-first communication and flexible working schedules.",
    stat: "Output-driven",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    desc: "Annual stipend for technical books, courses, and certifications.",
    stat: "Annual stipend",
  },
  {
    icon: Laptop,
    title: "Modern Hardware",
    desc: "Top-tier development machine and ergonomic peripherals.",
    stat: "Day 1 ready",
  },
  {
    icon: Users,
    title: "Founder Mentorship",
    desc: "Collaborate directly with engineering founders with zero hierarchy.",
    stat: "Direct access",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health coverage for you and your dependents.",
    stat: "Full coverage",
  },
];

export default function PerksSection() {
  return (
    <section className="relative py-14 sm:py-20 border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Designed for long-term growth and wellbeing.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PERKS.map(({ icon: Icon, title, desc, stat }, idx) => (
              <ScrollReveal key={title} delay={idx * 60}>
                <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-mono text-violet-300 font-semibold bg-violet-950/50 px-2 py-0.5 rounded border border-violet-500/20">
                        {stat}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {desc}
                    </p>
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
