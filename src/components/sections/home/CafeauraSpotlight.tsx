"use client";

import {
  ArrowRight,
  Clock,
  Smartphone,
  BellRing,
  BarChart3,
} from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import CafeauraPosSimulator from "@/components/sections/products/CafeauraPosSimulator";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CAFEAURA_FEATURES = [
  { icon: Smartphone, title: "Pre-Order & Instant UPI", desc: "Students & parents order meals and snacks ahead and pay in one tap via UPI." },
  { icon: Clock, title: "Prepared Ahead, Zero Rush", desc: "Orders are prepared before break time so students pick up without waiting in line." },
  { icon: BellRing, title: "Instant Parent Alerts", desc: "Parents receive an immediate notification the moment their child collects the order." },
  { icon: BarChart3, title: "Simple Daily Reporting", desc: "Shorter queues, smoother canteen service, and clean end-of-day summaries." },
];

export default function CafeauraSpotlight() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="p-5 sm:p-8 lg:p-12 rounded-3xl border border-white/10 bg-[#090912]/80 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Product Spotlight Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-950/60 text-violet-300 border border-violet-500/30">
                    FLAGSHIP PRODUCT · CLOSED-COMMUNITY APP
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    Order ahead. Skip the queue.
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.035em] text-white leading-tight mb-3">
                  CafeAura: Skip the canteen queue.
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  CafeAura is a mobile app that lets students and parents pre-order meals and snacks from their campus canteen and pay instantly by UPI. Orders are prepared ahead and picked up without the rush, and parents get an instant alert when their child collects the order. For canteens, it means smoother service, shorter lines and simple daily reporting.
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
                    <span>Explore CafeAura</span>
                    <ArrowRight size={14} />
                  </Magnetic3DButton>
                  <Magnetic3DButton variant="outline" href="/contact">
                    <span>Book Campus Demo</span>
                  </Magnetic3DButton>
                </div>
              </div>

              {/* Right Column: Interactive Campus Canteen Simulator */}
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
