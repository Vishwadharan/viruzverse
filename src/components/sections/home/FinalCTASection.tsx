"use client";

import { ArrowRight, ShieldCheck, Clock, MessageSquare } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          {/* ── Framed Conversion Console Container UI (Genesis FX Reference Style) ── */}
          <div className="p-6 sm:p-10 lg:p-14 rounded-3xl border border-white/10 bg-[#090912]/90 backdrop-blur-2xl text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            {/* Top Specular Edge Highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Accepting select enterprise engineering cohorts</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-white leading-[1.12] mb-3">
                Ready to engineer software that scales your operations?
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-7 max-w-lg">
                Direct technical consultation with our engineering leads. Fixed-milestone architecture proposal with transparent timelines delivered in 48 hours.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8 w-full sm:w-auto">
                <Magnetic3DButton variant="primary" href="/contact">
                  <span>Start a Project</span>
                  <ArrowRight size={14} />
                </Magnetic3DButton>
                <Magnetic3DButton
                  variant="outline"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WhatsApp Engineering</span>
                </Magnetic3DButton>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-400 pt-6 border-t border-white/10 w-full">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-violet-400" />
                  <span>24-hr Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>Mutual NDA Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-violet-400" />
                  <span>Direct Dev Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
