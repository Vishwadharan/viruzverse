"use client";

import {
  Layers,
  BadgeCheck,
  Shield,
  TrendingUp,
  Target,
  Eye,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard3D from "@/components/ui/TiltCard3D";

const FEATURES = [
  { icon: Layers, label: "Full-Stack", sub: "Architecture to production" },
  { icon: BadgeCheck, label: "Fixed Scope", sub: "Milestone-backed pricing" },
  { icon: Shield, label: "100% IP Handover", sub: "You own all code & assets" },
  { icon: TrendingUp, label: "Scalable Core", sub: "Zero architectural debt" },
];

export default function MissionVision() {
  return (
    <section className="relative py-14 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-3">
              Core Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our mission &amp; vision.
            </h2>
          </div>

          {/* 2-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Mission Card */}
            <TiltCard3D className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-400 mb-3">
                  <Target size={16} />
                  <span>OUR MISSION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  Democratize enterprise-grade software engineering.
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  We replace clunky legacy software with tailored, high-velocity SaaS and enterprise platforms engineered specifically around your company&apos;s operational workflow.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                {FEATURES.slice(0, 2).map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                      <Icon size={13} className="text-violet-400" />
                      <span>{label}</span>
                    </div>
                    <p className="text-[10px] text-slate-400">{sub}</p>
                  </div>
                ))}
              </div>
            </TiltCard3D>

            {/* Vision Card */}
            <TiltCard3D className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-3">
                  <Eye size={16} />
                  <span>OUR VISION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  Zero architectural debt. 100% Client IP ownership.
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  We envision a world where businesses aren&apos;t trapped by high per-seat SaaS monopolies, but own their core operational software assets and proprietary code outright.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                {FEATURES.slice(2, 4).map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                      <Icon size={13} className="text-emerald-400" />
                      <span>{label}</span>
                    </div>
                    <p className="text-[10px] text-slate-400">{sub}</p>
                  </div>
                ))}
              </div>
            </TiltCard3D>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
