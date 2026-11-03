"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Code2,
  Handshake,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export type Capability = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
};

export type ServiceDetailProps = {
  serviceId: string;
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  metrics: Array<{ label: string; value: string; sub?: string }>;
  capabilities: Capability[];
  interactiveSimulator: React.ReactNode;
  techStack: string[];
  deliverables: string[];
};

const DEFAULT_PROCESS = [
  {
    step: "01",
    icon: Clock,
    title: "Discovery & Architecture",
    desc: "30-minute technical session. We map requirements, define database schemas, and outline API contracts.",
  },
  {
    step: "02",
    icon: Shield,
    title: "Fixed Milestone Scope",
    desc: "Transparent scope agreement with concrete sprint milestones and fixed pricing. No surprise fees.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Weekly Staging Releases",
    desc: "Iterative sprints with working deployments on staging. Direct Slack/Discord channel with the developers.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "IP Transfer & Launch",
    desc: "Complete transfer of GitHub repositories, CI/CD pipelines, cloud credentials, and technical documentation.",
  },
];

export default function ServiceDetailTemplate({
  serviceId,
  tag,
  title,
  titleHighlight,
  description,
  metrics,
  capabilities,
  interactiveSimulator,
  techStack,
  deliverables,
}: ServiceDetailProps) {
  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-slate-100">
      {/* ── Breadcrumb & Hero (Clean open layout) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16">
        <ScrollReveal>
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-6">
            <Link href="/services" className="hover:text-violet-300 transition-colors">
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="text-white font-semibold">{tag}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
                <Sparkles size={13} />
                <span>{tag} · Production Grade</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white leading-[1.06] mb-4">
                {title}{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              </h1>

              <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-xl mb-6">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Start Technical Discovery</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="/services">
                  <span>Explore All Services</span>
                </Magnetic3DButton>
              </div>

              {/* Metrics Checklist */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full pt-5 border-t border-white/10">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                    <p className="text-[10px] font-mono text-slate-400 mb-0.5">{m.label}</p>
                    <p className="text-xs sm:text-base font-bold text-white">{m.value}</p>
                    {m.sub && <p className="text-[9.5px] text-violet-300 font-mono mt-0.5">{m.sub}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Simulator */}
            <div className="lg:col-span-5 w-full pt-4 lg:pt-0">
              {interactiveSimulator}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/10">
        <ScrollReveal>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Core Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Engineering Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Built with modern architecture patterns, secure authorization, and clean documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.map(({ icon: Icon, title: capTitle, desc, tags }, idx) => (
              <ScrollReveal key={capTitle} delay={idx * 70}>
                <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {capTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/10"
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
      </section>

      {/* ── Engineering Sprint Process ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/10">
        <ScrollReveal>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Predictable Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              How We Build &amp; Ship
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Predictable sprints, weekly working software demos, and transparent delivery milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DEFAULT_PROCESS.map(({ step, icon: Icon, title: procTitle, desc }, idx) => (
              <ScrollReveal key={step} delay={idx * 70}>
                <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-violet-400">
                        {step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {procTitle}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </TiltCard3D>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Deliverables & Tech Stack ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/10">
        <ScrollReveal>
          <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  What You Receive Upon Handover
                </h3>
                <div className="flex flex-col gap-2.5">
                  {deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Supported Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl border border-white/10 bg-black/40 font-mono text-xs text-slate-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── B2B Conversion CTA ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <ScrollReveal>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4">
            Fixed Scope · 100% Code Ownership
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ready to engineer your {tag.toLowerCase()}?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Schedule a technical discovery call with our engineering leads. We provide milestone-based scoping and fixed quotes within 48 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <Magnetic3DButton variant="primary" href="/contact">
              <span>Book Technical Discovery</span>
              <ArrowRight size={14} />
            </Magnetic3DButton>
            <Magnetic3DButton variant="outline" href="/services">
              <span>All Engineering Capabilities</span>
            </Magnetic3DButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
