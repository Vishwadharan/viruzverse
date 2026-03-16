"use client";
import { motion } from "framer-motion";
import { Code2, Bot, Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const PILLARS = [
  { icon: Package, title: "Products", accent: "#7C3AED",
    desc: "We ship our own software products — starting with Cafeaura, a complete restaurant management platform. Real products, used by real businesses.",
    link: "/products", linkLabel: "See our products" },
  { icon: Code2, title: "Custom Development", accent: "#06B6D4",
    desc: "We build custom SaaS, CRM, ERP, and edtech platforms from scratch. You bring the problem. We bring the architecture, design, and code.",
    link: "/services", linkLabel: "See our services" },
  { icon: Bot, title: "AI Automation", accent: "#A855F7",
    desc: "We automate repetitive business processes using AI and intelligent workflows — freeing your team to focus on what actually matters.",
    link: "/services/ai-automation", linkLabel: "Explore AI services" },
];

export default function WhatWeDoSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="max-w-site container-pad mx-auto">
        <SectionHeading badge="What we do" title="Software that solves " highlight="real problems"
          subtitle="We don't do generic. Everything we build — products or client work — is designed to solve a specific, real business problem."
          className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div key={pillar.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative rounded-2xl bg-surface border border-border p-8 hover:border-brand-violet/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${pillar.accent}12 0%, transparent 60%)` }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${pillar.accent}20`, border: `1px solid ${pillar.accent}30` }}>
                  <pillar.icon size={22} style={{ color: pillar.accent }} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{pillar.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{pillar.desc}</p>
                <Link href={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: pillar.accent }}>
                  {pillar.linkLabel} <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
