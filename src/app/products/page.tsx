"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Package,
  Users2,
  Smartphone,
  Printer,
  BarChart3,
  Sparkles,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import CafeauraPosSimulator from "@/components/sections/products/CafeauraPosSimulator";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CAFEAURA_MODULES = [
  { icon: ShoppingCart, title: "High-Volume POS", desc: "Live table billing, split checks, custom modifiers, and sub-150ms bill generation" },
  { icon: Printer, title: "Auto KOT Dispatch", desc: "Zero paper delay. Orders instantly route and print at kitchen stations" },
  { icon: Package, title: "Live Recipe Inventory", desc: "Automatic ingredient deduction per dish with low-stock alerts and purchase orders" },
  { icon: Smartphone, title: "Offline-First Mobile App", desc: "Built with Flutter. Takes orders and prints bills even if local Wi-Fi drops" },
  { icon: Users2, title: "Staff & RBAC", desc: "Role-based access control for cashiers, waitstaff, kitchen, and franchise managers" },
  { icon: BarChart3, title: "Multi-Branch Analytics", desc: "Real-time item performance, peak hours, tax reports, and gross margins" },
];

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16 sm:pb-20 bg-transparent min-h-screen">
      {/* ── Page Header ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>Proprietary Flagship SaaS Platform · Live in Production</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Our Flagship:{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Cafeaura Restaurant OS
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Alongside our bespoke B2B engineering services, we develop and scale Cafeaura—a complete, offline-first operating system designed for restaurants, cafes, and multi-outlet dining chains.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Main Cafeaura Showcase with Hardware Simulator (Clean open layout) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-950/60 text-violet-300 border border-violet-500/30">
                  FLAGSHIP PRODUCT
                </span>
                <span className="text-xs font-mono text-slate-400">
                  v2.4 Production Active
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Built to run high-volume food &amp; beverage operations.
              </h2>

              <p className="text-xs sm:text-base text-slate-400 leading-relaxed mb-6 font-normal">
                Cafeaura eliminates missed orders, manual billing bottlenecks, and inventory leakage. It unites table billing, kitchen order tickets, staff roles, and recipe stock in one high-velocity dashboard.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Magnetic3DButton variant="primary" href="/products/cafeaura">
                  <span>Explore Specifications</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="/contact">
                  <span>Schedule Product Demo</span>
                </Magnetic3DButton>
              </div>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full pt-5 border-t border-white/10">
                <div className="p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Order Dispatch</p>
                  <p className="text-xs sm:text-base font-bold text-emerald-400">&lt; 120ms</p>
                </div>
                <div className="p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Network Mode</p>
                  <p className="text-xs sm:text-base font-bold text-white">Offline SQLite</p>
                </div>
                <div className="p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Platforms</p>
                  <p className="text-xs sm:text-base font-bold text-violet-300">Web + Mobile</p>
                </div>
              </div>
            </div>

            {/* Hardware iPad Simulator */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
              <CafeauraPosSimulator />
            </div>
          </div>

          {/* 6 Feature Modules Grid */}
          <div className="pt-8 border-t border-white/10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
                Architecture Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Core Operational Modules
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CAFEAURA_MODULES.map(({ icon: Icon, title, desc }) => (
                <TiltCard3D
                  key={title}
                  className="p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 text-sm font-bold text-white mb-2">
                    <span className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span>{title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </TiltCard3D>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
