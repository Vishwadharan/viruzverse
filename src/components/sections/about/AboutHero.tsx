"use client";

import { ArrowRight, MapPin, Terminal, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ThreeDCyberCore from "@/components/ui/ThreeDCyberCore";

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brand Story */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span>About Viruzverse · Engineering Systems</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
                We engineer serious <br />
                <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  B2B software &amp; SaaS.
                </span>
              </h1>

              <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-xl mb-6">
                Engineering-first software company based in Coimbatore, Tamil Nadu. We design and ship custom multi-tenant SaaS platforms, enterprise operations software, and mission-critical cloud backends for businesses worldwide.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
                <MapPin size={14} className="text-violet-400" />
                <span>Coimbatore, Tamil Nadu · Global Delivery Across India &amp; Worldwide</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Start a Project</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton variant="outline" href="/careers">
                  <span>Join Engineering</span>
                </Magnetic3DButton>
              </div>
            </div>

            {/* Right Column: 3D Holographic Cyber Core Animation */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <ThreeDCyberCore />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
