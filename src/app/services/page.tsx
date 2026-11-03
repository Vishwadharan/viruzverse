"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Clock,
  Shield,
  Code2,
  Handshake,
  Server,
  Layers,
  Users,
  BookOpen,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type ServiceIconKey } from "@/lib/services";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard3D from "@/components/ui/TiltCard3D";

const ICON_MAP: Record<ServiceIconKey, LucideIcon> = {
  Server,
  Layers,
  Users,
  BookOpen,
  Puzzle,
};

const PROCESS_STEPS = [
  {
    step: "01",
    icon: Clock,
    title: "Discovery Call",
    desc: "30-minute technical consultation. Direct dialogue—no sales decks. We understand your exact system needs and goals.",
  },
  {
    step: "02",
    icon: Shield,
    title: "Fixed-Milestone Scope",
    desc: "A transparent scope document covering deliverables, milestones, tech stack, and fixed pricing. What you see is what you pay.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Sprint Build & Demos",
    desc: "Weekly working demos on staging environments. Continuous asynchronous updates and direct Slack/Discord access.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Production Handover",
    desc: "Full IP and repository transfer, cloud configuration, documentation, team training, and post-launch maintenance.",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = SERVICES[activeTab] || SERVICES[0];
  const ActiveIcon = ICON_MAP[activeService?.iconKey] || Server;

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen">
      {/* ── Hero Section (Clean Open Grid) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
                <Sparkles size={13} />
                <span>Engineering Capabilities · End-to-End Delivery</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
                Full-lifecycle engineering for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  enterprise B2B SaaS.
                </span>
              </h1>

              <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-xl mb-6">
                From zero-to-one product development to scaling high-throughput enterprise platforms. We design, architect, and ship high-performance software with clean code, strict RBAC, and zero technical debt.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Start a Project</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="#catalog">
                  <span>Browse Catalog</span>
                </Magnetic3DButton>
              </div>
            </div>

            {/* Interactive Preview Panel */}
            <div className="lg:col-span-5">
              <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between min-h-[340px]">
                <div>
                  {/* Tab switchers */}
                  <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 mb-5">
                    {SERVICES.map((s, idx) => (
                      <button
                        key={s.num}
                        onClick={() => setActiveTab(idx)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                          activeTab === idx
                            ? "bg-violet-600 text-white shadow-xs font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {s.num}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/20 border border-violet-500/30 text-violet-300">
                      <ActiveIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {activeService.name}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400">
                        Module {activeService.num} of 05
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300 mb-5">
                    {activeService.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {activeService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={activeService.href}
                  className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold bg-violet-600/20 text-violet-300 hover:bg-violet-600/30 border border-violet-500/30 transition-all"
                >
                  <span>Inspect Module Specifications</span>
                  <ArrowUpRight size={13} />
                </Link>
              </TiltCard3D>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Services Catalog Grid ── */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Service Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Explore our engineering domains
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.name} s={s} i={idx} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── How We Deliver (Process) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Engagement Model
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              How we partner with you
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.step} delay={idx * 80}>
                  <TiltCard3D className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-violet-400">
                          {step.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                          <Icon size={16} />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </TiltCard3D>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
