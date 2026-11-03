"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Package,
  Printer,
  Smartphone,
} from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import CafeauraPosSimulator from "@/components/sections/products/CafeauraPosSimulator";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CAFEAURA_FEATURES = [
  { icon: ShoppingCart, title: "Sub-150ms High-Volume POS", desc: "Live table billing, split checks, and zero billing bottleneck." },
  { icon: Printer, title: "Automated KOT Routing", desc: "Orders instantly route and print at kitchen stations with zero delay." },
  { icon: Package, title: "Recipe-Level Live Inventory", desc: "Automatic ingredient deductions per dish with low-stock alerts." },
  { icon: Smartphone, title: "Offline-First Mobile App", desc: "Flutter native tablets work uninterrupted during local Wi-Fi drops." },
];

export default function CafeauraSpotlight() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          {/* ── Framed Laboratory Container UI (Genesis FX Reference Style) ── */}
          <div className="p-5 sm:p-8 lg:p-12 rounded-3xl border border-white/10 bg-[#090912]/80 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            {/* Top Specular Edge Highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Product Spotlight Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-950/60 text-violet-300 border border-violet-500/30">
                    02 // PROPRIETARY OS
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    Live in Production
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.035em] text-white leading-tight mb-3">
                  Cafeaura Restaurant OS
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Our in-house flagship vertical SaaS. An all-in-one restaurant management platform powering high-volume dining, automatic kitchen ticketing, real-time recipe inventory, and multi-outlet revenue analytics.
                </p>

                {/* 4 Feature modules */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 w-full">
                  {CAFEAURA_FEATURES.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-violet-500/40 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Icon size={14} className="text-violet-400 shrink-0" strokeWidth={2} />
                        <span>{title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Magnetic3DButton variant="primary" href="/products/cafeaura">
                    <span>Explore Cafeaura OS</span>
                    <ArrowRight size={14} />
                  </Magnetic3DButton>
                  <Magnetic3DButton variant="outline" href="/contact">
                    <span>Request Live Demo</span>
                  </Magnetic3DButton>
                </div>
              </div>

              {/* Right Column: High-End Hardware iPad POS Simulator */}
              <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
                <CafeauraPosSimulator />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
