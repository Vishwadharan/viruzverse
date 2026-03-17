"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const CULTURE = [
  { emoji: "⚡", title: "Move fast", desc: "We ship weekly. We don't wait for perfection — we iterate toward it." },
  { emoji: "🔍", title: "Deep ownership", desc: "You own your work end-to-end. No hand-offs, no finger-pointing." },
  { emoji: "🧠", title: "Always learning", desc: "We invest in your growth — courses, books, conferences, and real on-the-job challenges." },
  { emoji: "🤝", title: "Small & close-knit", desc: "A small team where your voice matters and every contribution is visible." },
  { emoji: "🏠", title: "Flexible work", desc: "Hybrid setup. We care about output, not where you sit." },
  { emoji: "🚀", title: "Real impact", desc: "Your code ships to real businesses. Not just internal tools or proofs-of-concept." },
];

export default function CultureSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="max-w-site container-pad mx-auto">
        <SectionHeading badge="Life at Viruzverse" title="How we " highlight="work & grow"
          subtitle="We're not a typical agency. We're a product-minded team that takes craft seriously." className="mb-14" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CULTURE.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-brand-violet/30 hover:bg-brand-violet/5 transition-all duration-300">
              <span className="text-3xl block mb-4">{item.emoji}</span>
              <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-brand-glow transition-colors">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
