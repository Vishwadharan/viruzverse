"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Package,
  Printer,
  Smartphone,
  CheckCircle2,
  Users2,
  TrendingUp,
  Cpu,
  Wifi,
  ShieldCheck,
  Zap,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import CafeauraPosSimulator from "@/components/sections/products/CafeauraPosSimulator";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CORE_MODULES = [
  {
    icon: ShoppingCart,
    title: "Sub-150ms High-Volume POS",
    desc: "Lightning-fast floor billing, dynamic table maps, split checks, custom modifiers, and direct card terminal integration.",
    badge: "Floor Operations",
  },
  {
    icon: Printer,
    title: "Automated KOT Routing",
    desc: "Zero paper delay. Orders instantly dispatch to specialized kitchen printers (bar, grill, cold station) with zero duplicate tickets.",
    badge: "Kitchen Display",
  },
  {
    icon: Package,
    title: "Recipe-Level Live Inventory",
    desc: "Automatically deduct raw ingredients (milk, beans, flour) as orders are punched. Automatic low-stock procurement alerts.",
    badge: "Inventory & Costing",
  },
  {
    icon: Smartphone,
    title: "Offline-First Mobile Ordering",
    desc: "Waitstaff take orders on mobile or tablet devices. Fully functional during local internet drops with automatic SQLite reconciliation.",
    badge: "Flutter Mobile",
  },
  {
    icon: Users2,
    title: "Multi-Outlet RBAC & Staff Logs",
    desc: "Granular permissions for cashiers, waitstaff, head chefs, and regional managers. Full audit logs for voids and refunds.",
    badge: "Governance",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Revenue Telemetry",
    desc: "Live analytics on dish margins, peak service hours, table turnover velocity, and outlet-by-outlet financial comparisons.",
    badge: "BI & Analytics",
  },
];

export default function CafeauraPage() {
  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen">
      {/* ── Hero Section with Realistic POS Simulator (Clean open layout) ── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Flagship B2B Platform · Live in Production</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white leading-[1.08] mb-4">
                The modern restaurant OS for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  high-volume dining.
                </span>
              </h1>

              <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-xl mb-6 font-normal">
                Cafeaura replaces slow, clunky legacy POS hardware with a unified cloud operating system: sub-150ms table billing, automated kitchen order tickets, ingredient-level live inventory, and multi-outlet management.
              </p>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Book a Live Walkthrough</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="#simulator">
                  <span>Try POS Simulator</span>
                </Magnetic3DButton>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full pt-5 border-t border-white/10">
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Order Dispatch</p>
                  <p className="text-xs sm:text-base font-bold text-emerald-400">&lt; 120ms</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Network Mode</p>
                  <p className="text-xs sm:text-base font-bold text-white">Offline SQLite</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Architecture</p>
                  <p className="text-xs sm:text-base font-bold text-violet-300">Web + Flutter</p>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Hardware iPad POS Simulator */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0" id="simulator">
              <CafeauraPosSimulator />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Core Capabilities Bento Grid (Clean open cards) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ScrollReveal>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              Operational Power
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Engineered for high-volume dining operations.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything your dining floor, kitchen stations, and inventory management require to operate without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CORE_MODULES.map(({ icon: Icon, title, desc, badge }, idx) => (
              <ScrollReveal key={title} delay={idx * 80}>
                <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-400">
                        {badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-violet-300 font-semibold">
                    <span>Enterprise Grade</span>
                    <CheckCircle2 size={13} className="text-emerald-400" />
                  </div>
                </TiltCard3D>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Architecture Specifications ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ScrollReveal>
          <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider mb-2 block">
                  Technical Specifications
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Offline-first architecture for zero downtime dining.
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  When internet connections fail during busy dinner rushes, Cafeaura continues processing orders locally using SQLite edge storage. Once connectivity restores, transactions automatically synchronize conflict-free.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Wifi size={14} className="text-violet-400" />
                    <span>Offline SQLite</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu size={14} className="text-violet-400" />
                    <span>Flutter Native</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-violet-400" />
                    <span>PostgreSQL Cloud</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Local POS Sync</p>
                    <p className="font-bold text-white text-sm sm:text-base">Sub-150ms</p>
                    <p className="text-[10px] text-emerald-400 mt-1">Realtime WebSockets</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Hardware Drivers</p>
                    <p className="font-bold text-white text-sm sm:text-base">EscPos Thermal</p>
                    <p className="text-[10px] text-slate-400 mt-1">LAN &amp; Bluetooth</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Multi-Store Support</p>
                    <p className="font-bold text-white text-sm sm:text-base">Unlimited Outlets</p>
                    <p className="text-[10px] text-slate-400 mt-1">Centralized Catalog</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Audit Trail</p>
                    <p className="font-bold text-white text-sm sm:text-base">Immutable Log</p>
                    <p className="text-[10px] text-emerald-400 mt-1">Every Void Tracked</p>
                  </div>
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
            Custom Implementation &amp; Setup
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ready to upgrade your restaurant operations?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Schedule a personalized walkthrough of Cafeaura OS. We will configure your dining floor plan, test menu workflows, and demonstrate offline reliability.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <Magnetic3DButton variant="primary" href="/contact">
              <span>Book Cafeaura Demo</span>
              <ArrowRight size={14} />
            </Magnetic3DButton>
            <Magnetic3DButton variant="outline" href="/products">
              <span>Back to Products</span>
            </Magnetic3DButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
