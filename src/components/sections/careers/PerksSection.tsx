"use client";
import { motion } from "framer-motion";
import { DollarSign, Clock, BookOpen, Users, Laptop, Heart } from "lucide-react";

const PERKS = [
  { icon: DollarSign, title: "Competitive Pay",  desc: "Market-rate compensation reviewed regularly.", accent: "#7C3AED" },
  { icon: Clock,      title: "Flexible Hours",   desc: "Work when you're most productive. We care about results.", accent: "#06B6D4" },
  { icon: BookOpen,   title: "Learning Budget",  desc: "Annual budget for courses, books, and conferences.", accent: "#A855F7" },
  { icon: Laptop,     title: "Great Equipment",  desc: "We'll make sure you have the tools to do your best work.", accent: "#10B981" },
  { icon: Users,      title: "Founder Access",   desc: "Work directly with the founders from day one.", accent: "#F59E0B" },
  { icon: Heart,      title: "Health Coverage",  desc: "Health insurance for you and your family.", accent: "#EF4444" },
];

export default function PerksSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="max-w-site container-pad mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-glow text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" /> Benefits & perks
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-text-primary mb-4">
            What you <span className="gradient-text">get with us</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">We take care of the people who build with us.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERKS.map((perk, i) => (
            <motion.div key={perk.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-brand-violet/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 20% 20%, ${perk.accent}10 0%, transparent 55%)` }} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${perk.accent}18`, border: `1px solid ${perk.accent}28` }}>
                  <perk.icon size={18} style={{ color: perk.accent }} />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2 group-hover:text-brand-glow transition-colors">{perk.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
