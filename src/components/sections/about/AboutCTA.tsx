"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHATSAPP_URL } from "@/lib/constants";

export default function AboutCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-5 shadow-xs">
            <Sparkles size={13} />
            <span>Start the Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have an enterprise project in mind? Let&apos;s talk.
          </h2>

          <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
            Whether you need a multi-tenant SaaS built from scratch, high-throughput cloud APIs, or an enterprise operations platform, our engineering team is ready to scope it out.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
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
              <span>Chat on WhatsApp</span>
            </Magnetic3DButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
