"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CareersHero() {
  return (
    <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
            Build high-impact software <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              with Viruzverse.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            We are a focused team solving B2B &amp; B2C problems using emerging technologies. While there are no specific open roles right now, we always welcome talented builders.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
