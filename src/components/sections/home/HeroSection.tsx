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
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ── Left Column: Value Proposition & CTAs ── */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal>
              {/* Brand Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Viruzverse · Innovation that Flows.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold tracking-[-0.035em] text-white leading-[1.08] mb-4">
                Solve business problems. <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  With emerging tech.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-5 font-normal">
                We solve real business problems using emerging technologies—focused on B2B and B2C. We also offer a free consultation for business owners to help scale your business.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="w-full">
              {/* 3 Core Commitments */}
              <div className="flex flex-col gap-2 mb-6 w-full">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  <span>Solving B2B &amp; B2C problems using emerging technologies</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  <span>Free consultation for business owners to map your growth</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  <span>Scalable architecture &amp; 100% ownership of your codebase</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Connect With Us</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="/services">
                  <span>Explore Solutions</span>
                </Magnetic3DButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="w-full">
              {/* Quick Metrics Bar in Glass Pills */}
              <div className="grid grid-cols-3 gap-2.5 w-full pt-5 border-t border-white/10 text-left">
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#090912]/70 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Consultation</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Free for Owners</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#090912]/70 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Code Handover</p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-400">100% Client IP</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-[#090912]/70 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Focus</p>
                  <p className="text-xs sm:text-sm font-bold text-violet-300">B2B &amp; B2C</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Grand 3D Holographic Cyber Globe ── */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <ScrollReveal delay={200} className="w-full flex justify-center">
              <ThreeDGlobe />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
