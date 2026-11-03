"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Users,
  Server,
  Puzzle,
  Sparkles,
  Database,
  Lock,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-3 shadow-xs backdrop-blur-md">
                <Sparkles size={12} />
                <span>B2B Engineering Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight mb-3">
                Software built around your business.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                We design and ship high-performance software engineered to replace clunky legacy tools.
              </p>
            </div>

            <div className="shrink-0">
              <Magnetic3DButton variant="outline" href="/services">
                <span>View All Capabilities</span>
                <ArrowRight size={14} />
              </Magnetic3DButton>
            </div>
          </div>
        </ScrollReveal>

        {/* 3D Perspective Tilt Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Featured 2-col span: Custom SaaS */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <TiltCard3D className="p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                    <Layers size={18} strokeWidth={2} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-950/60 text-violet-300 border border-violet-500/30">
                    CORE EXPERTISE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Custom Multi-Tenant SaaS Engineering
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
                  From database schema to production. Complete SaaS architecture featuring PostgreSQL Row-Level Security, automated tenant subdomains, Stripe subscription billing, and enterprise role permissions.
                </p>

                {/* Architectural Spec Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2 font-mono text-xs">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-1.5 sm:gap-2">
                    <Lock size={12} className="text-violet-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200">RBAC Auth</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-1.5 sm:gap-2">
                    <Database size={12} className="text-violet-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200">Postgres RLS</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-1.5 sm:gap-2">
                    <Workflow size={12} className="text-violet-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200">Stripe Billing</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200">Sub-40ms APIs</span>
                  </div>
                </div>
              </div>

              <Link
                href="/services/custom-saas"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white hover:underline pt-4 border-t border-white/10 mt-5"
              >
                <span>Explore Multi-Tenant SaaS Engineering</span>
                <ArrowUpRight size={13} />
              </Link>
            </TiltCard3D>
          </ScrollReveal>

          {/* Card 2: Enterprise ERP & CRM */}
          <ScrollReveal delay={180}>
            <TiltCard3D className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
                  <Users size={18} strokeWidth={2} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
                  Tailored CRM &amp; ERP
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Replace generic, bloated legacy software with tailored internal tools. Precise warehouse logic, deal pipelines, and automated invoicing with zero per-seat fees.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Warehouse Ops", "Deal Pipelines", "Zero Seat Fees"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/services/crm-erp"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white hover:underline pt-3 border-t border-white/10 mt-3"
              >
                <span>Explore CRM &amp; ERP Platforms</span>
                <ArrowUpRight size={13} />
              </Link>
            </TiltCard3D>
          </ScrollReveal>

          {/* Card 3: Cloud Infrastructure & APIs */}
          <ScrollReveal delay={240}>
            <TiltCard3D className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
                  <Server size={18} strokeWidth={2} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
                  High-Throughput APIs &amp; Cloud
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Engineered for sub-120ms P99 responses. Distributed Redis queues, WebSocket streaming, and containerized Docker/Kubernetes deployments.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Redis Queues", "WebSockets", "Sub-120ms P99"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/services/ai-automation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white hover:underline pt-3 border-t border-white/10 mt-3"
              >
                <span>Explore Cloud Architecture</span>
                <ArrowUpRight size={13} />
              </Link>
            </TiltCard3D>
          </ScrollReveal>

          {/* Card 4: 2-col span: Custom Engineering */}
          <ScrollReveal delay={300} className="md:col-span-2">
            <TiltCard3D className="p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                    <Puzzle size={18} strokeWidth={2} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/[0.03] text-slate-400 border border-white/10">
                    BESPOKE ENGINEERING
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Legacy Modernization &amp; Custom Systems
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mb-4">
                  Refactoring complex monolithic codebases into high-velocity modern stacks. Custom hardware bridges, specialized ERP plugins, and 100% intellectual property ownership transfer.
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {["Zero Monolith Debt", "Automated CI/CD", "100% Code Ownership"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      ✓ {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/services/custom-projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white hover:underline pt-4 border-t border-white/10 mt-5"
              >
                <span>Explore Custom Projects</span>
                <ArrowUpRight size={13} />
              </Link>
            </TiltCard3D>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
