"use client";

import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function OpenApplicationCTA() {
  return (
    <section className="relative py-16 sm:py-20 border-t border-white/10 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-5 shadow-xs">
            <Sparkles size={13} />
            <span>Open Application</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Don&apos;t see your exact role?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
            We are always eager to connect with exceptional engineers, product designers, and systems architects. Send us your portfolio and let&apos;s build together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Magnetic3DButton
              variant="primary"
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Open Application — Engineering / Design")}`}
            >
              <Mail size={15} />
              <span>Send Open Application</span>
              <ArrowRight size={14} />
            </Magnetic3DButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
