"use client";

import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactHero() {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span>Free Consultation for Business Owners</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Connect with us to{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                scale your business.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Tell us about your B2B or B2C business challenge. We offer a free consultation for business owners to explore how emerging technologies can solve your bottlenecks.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
