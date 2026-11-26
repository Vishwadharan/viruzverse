"use client";

import {
  ArrowRight,
  Smartphone,
  CreditCard,
  Clock,
  BellRing,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Utensils,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import CafeauraPosSimulator from "@/components/sections/products/CafeauraPosSimulator";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CORE_MODULES = [
  {
    icon: Smartphone,
    title: "Pre-Order Meals & Snacks",
    desc: "Students and parents browse the daily campus canteen menu and place pre-orders from their phone before break time.",
    badge: "Mobile App",
  },
  {
    icon: CreditCard,
    title: "Instant UPI Payments",
    desc: "Fast, cashless checkout via any UPI app with zero loose-change delays at the counter.",
    badge: "UPI Checkout",
  },
  {
    icon: Clock,
    title: "Prepared Ahead, Zero Rush",
    desc: "The canteen prepares pre-orders in advance so students simply grab their meal and skip the queue.",
    badge: "Zero Queue",
  },
  {
    icon: BellRing,
    title: "Instant Parent Pickup Alert",
    desc: "Parents get a real-time notification the moment their child collects the order from the canteen counter.",
    badge: "Parent Peace of Mind",
  },
  {
    icon: ShieldCheck,
    title: "Closed-Community Campus Access",
    desc: "Built exclusively for verified students, parents, and campus canteen staff within your institution.",
    badge: "Closed Community",
  },
  {
    icon: BarChart3,
    title: "Simple Daily Reporting",
    desc: "Canteen operators get shorter lines, smoother service, and clean end-of-day order and UPI settlement reports.",
    badge: "Canteen Ops",
  },
];

export default function CafeauraPage() {
  return (
    <div className="pt-24 pb-16 bg-transparent min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Order ahead. Skip the queue.</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] text-white leading-[1.08] mb-4">
                CafeAura:{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  Skip the canteen queue.
                </span>
              </h1>

              <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-xl mb-6 font-normal">
                A closed-community mobile app that lets students and parents pre-order meals and snacks from their campus canteen and pay instantly by UPI. Orders are prepared ahead for zero-rush pickup, and parents get an instant alert when their child collects the order.
              </p>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-7">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Book a Campus Demo</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5 w-full pt-5 border-t border-white/10">
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Checkout</p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-400">Instant UPI</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Pickup</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Zero Queue</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#0d0d17]/80">
                  <p className="text-[10px] font-mono text-slate-400 mb-0.5">Parent Alert</p>
                  <p className="text-xs sm:text-sm font-bold text-violet-300">Real-Time</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Campus Canteen Simulator */}
            <div className="lg:col-span-6 w-full" id="simulator">
              <CafeauraPosSimulator />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Core Capabilities Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <ScrollReveal>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 mb-2 block">
              How CafeAura Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Your campus canteen, one tap away.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Built for students, parents, and campus canteens—smoother service, shorter lines, and simple daily reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_MODULES.map(({ icon: Icon, title, desc, badge }, idx) => (
              <ScrollReveal key={title} delay={idx * 70}>
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
                    <span>Order ahead. Skip the queue.</span>
                    <CheckCircle2 size={13} className="text-emerald-400" />
                  </div>
                </TiltCard3D>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Built for Canteens & Parents ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ScrollReveal>
          <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider mb-2 block">
                  For Campuses &amp; Canteens
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Smoother service, shorter lines &amp; simple daily reporting.
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Instead of chaotic break-time rushes and cash handling, canteens receive pre-paid UPI orders in advance, hand them over quickly at pickup, and review clean daily summaries at closing time.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Utensils size={14} className="text-violet-400" />
                    <span>Pre-Paid Orders</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BellRing size={14} className="text-violet-400" />
                    <span>Parent Pickup Alerts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart3 size={14} className="text-violet-400" />
                    <span>Daily Reports</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Ordering Flow</p>
                    <p className="font-bold text-white text-sm sm:text-base">Mobile App</p>
                    <p className="text-[10px] text-emerald-400 mt-1">Students &amp; Parents</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Payment Mode</p>
                    <p className="font-bold text-white text-sm sm:text-base">Instant UPI</p>
                    <p className="text-[10px] text-slate-400 mt-1">Zero Cash Delays</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Pickup Alert</p>
                    <p className="font-bold text-white text-sm sm:text-base">Instant Push</p>
                    <p className="text-[10px] text-slate-400 mt-1">Notifies Parents</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                    <p className="text-[10px] text-slate-400 mb-1">Canteen Admin</p>
                    <p className="font-bold text-white text-sm sm:text-base">Daily Summary</p>
                    <p className="text-[10px] text-emerald-400 mt-1">Simple Reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
