"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function OpenApplicationCTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-mesh-hero opacity-40" />
      </div>
      <div className="max-w-site container-pad mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-surface border border-brand-violet/20 p-10 lg:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%)" }} />
          <div className="relative z-10">
            <span className="text-4xl block mb-4">✉️</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary mb-4">Don't see a role that fits?</h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
              We're always open to hearing from talented people. Send us your portfolio, GitHub, or a note about what you do — and we'll reach out if there's a fit.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Open Application — Viruzverse`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] shadow-glow-violet"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
              <Mail size={16} /> Send Open Application
            </a>
            <p className="text-xs text-text-secondary mt-4 font-mono">Email: {CONTACT_EMAIL}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
