"use client";

import { Zap, Target, BookOpen, Users, Laptop, Rocket, type LucideIcon } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CultureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const CULTURE: CultureItem[] = [
  {
    icon: Zap,
    title: "Move with Velocity",
    desc: "We ship working demos every week. Continuous progress beats delayed perfection.",
  },
  {
    icon: Target,
    title: "Deep Ownership",
    desc: "You own features from database design and architecture to production deployment.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "We sponsor courses, tools, and resources to support your technical growth.",
  },
  {
    icon: Users,
    title: "Small & High-Leverage",
    desc: "A tight-knit engineering team where your ideas directly shape the product roadmap.",
  },
  {
    icon: Laptop,
    title: "Flexible Hybrid Setup",
    desc: "Work where and when you are most productive. We evaluate output and craft, not desk hours.",
  },
  {
    icon: Rocket,
    title: "Real Business Impact",
    desc: "Your code deploys to real businesses with real users—not throwaway prototypes.",
  },
];

export default function CultureSection() {
  return (
    <section className="relative py-14 sm:py-20 border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A high-standard engineering culture.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CULTURE.map(({ icon: Icon, title, desc }, idx) => (
              <ScrollReveal key={title} delay={idx * 60}>
                <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
                      <Icon size={18} strokeWidth={2} />
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
