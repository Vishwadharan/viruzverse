"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Magnetic3DButton from "../../ui/Magnetic3DButton";
import ThreeDGlobe from "../../ui/ThreeDGlobe";
import ScrollReveal from "../../ui/ScrollReveal";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--hero-x", `${x}px`);
    containerRef.current.style.setProperty("--hero-y", `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ── Left Column: Value Proposition & CTAs ── */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal>
              {/* Live Flagship Product Pill */}
              <Link
                href="/products/cafeaura"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 hover:border-violet-400 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all mb-5 group backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Flagship: Cafeaura OS v2.4 Live in Production</span>
                <ArrowRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-[-0.04em] text-white leading-[1.06] mb-5">
                Next-gen B2B software. <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Engineered for scale.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* Single sentence subtitle */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-7 font-normal">
                We architect bespoke multi-tenant SaaS platforms, enterprise operations software, and high-throughput cloud backends. Fixed milestones, weekly demos, and 100% client IP ownership.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="w-full">
              {/* 3 Core Engineering Commitments */}
              <div className="flex flex-col gap-2.5 mb-8 w-full">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  <span>Multi-tenant SaaS with isolated PostgreSQL Row-Level Security</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  <span>Fixed-scope sprint delivery with weekly staging releases</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  <span>Complete source code &amp; cloud infrastructure credentials handed over</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-9">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Start a Project</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="/products/cafeaura">
                  <span>Explore Cafeaura OS</span>
                </Magnetic3DButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="w-full">
              {/* Quick Metrics Bar in Glass Pills */}
              <div className="grid grid-cols-3 gap-2.5 w-full pt-6 border-t border-white/10 text-left">
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#090912]/70 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Delivery Target</p>
                  <p className="text-xs sm:text-sm font-bold text-white">4–8 Weeks</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#090912]/70 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Code Handover</p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-400">100% Client IP</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#090912]/70 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Architecture</p>
                  <p className="text-xs sm:text-sm font-bold text-violet-300">Multi-Tenant</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Grand 3D Holographic Cyber Globe (Large & Prominent) ── */}
          <div className="lg:col-span-6 w-full flex items-center justify-center pt-6 lg:pt-0">
            <ScrollReveal delay={200}>
              <ThreeDGlobe />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
