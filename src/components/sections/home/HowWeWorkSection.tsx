"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "30-min technical session. We map system requirements, data schemas, and API contracts.",
    meta: "30-min call · Direct with devs",
  },
  {
    step: "02",
    title: "Fixed Milestone Scope",
    desc: "Detailed sprint breakdown and transparent fixed pricing delivered within 48 hours.",
    meta: "Fixed Quote · 48 hrs",
  },
  {
    step: "03",
    title: "Sprint Build & Demos",
    desc: "Weekly working software deployed to staging with direct Slack channel access.",
    meta: "Weekly Live Demos",
  },
  {
    step: "04",
    title: "IP Transfer & Launch",
    desc: "Production cloud rollout with 100% repository handover, CI/CD, and documentation.",
    meta: "100% Client Ownership",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-3 shadow-xs backdrop-blur-md">
              <Sparkles size={12} />
              <span>Sprint Delivery Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight mb-3">
              Engineering without chaos.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Fixed milestones, weekly working software, and direct engineering communication.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Process 3D Tilt Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} delay={idx * 90}>
              <TiltCard3D className="flex flex-col justify-between p-5 sm:p-6 h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold bg-violet-500/10 border border-violet-500/30 text-violet-300 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{step.meta}</span>
                  <CheckCircle2 size={13} className="text-violet-400" />
                </div>
              </TiltCard3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
