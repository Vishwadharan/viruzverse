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
              <span>24-Hour Founder Response</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Let&apos;s build something <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                exceptional together.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Tell us about your project, timeline, or engineering challenge. We review every inquiry directly and provide a clear proposal within 48 hours.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
