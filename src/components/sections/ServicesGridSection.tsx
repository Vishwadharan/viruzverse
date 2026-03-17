"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Code2, BarChart3, GraduationCap, Wrench, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  { icon: Bot, title: "AI Automation", href: "/services/ai-automation", accent: "#7C3AED",
    desc: "Intelligent workflows, document processing, chatbots and AI-powered business automation.", tags: ["LLM", "Workflows", "NLP"] },
  { icon: Code2, title: "Custom SaaS", href: "/services/custom-saas", accent: "#06B6D4",
    desc: "End-to-end SaaS product development — from architecture and backend to UI and deployment.", tags: ["Next.js", "Node.js", "PostgreSQL"] },
  { icon: BarChart3, title: "CRM & ERP", href: "/services/crm-erp", accent: "#A855F7",
    desc: "Custom CRM and ERP systems built around your business processes, not generic templates.", tags: ["CRM", "ERP", "Pipelines"] },
  { icon: GraduationCap, title: "Edtech Solutions", href: "/services/edtech-solutions", accent: "#10B981",
    desc: "Learning management systems, course platforms, and student engagement tools.", tags: ["LMS", "Courses", "Analytics"] },
  { icon: Wrench, title: "Custom Projects", href: "/services/custom-projects", accent: "#F59E0B",
    desc: "Have something unique in mind? We love custom briefs. Tell us what you need built.", tags: ["Anything", "Custom", "Flexible"] },
];

export default function ServicesGridSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="max-w-site container-pad mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading badge="Services" title="What we " highlight="build for you"
            subtitle="Five focused service areas. All custom, all production-grade." align="left" />
          <Link href="/services" className="hidden lg:inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-glow transition-colors whitespace-nowrap">
            View all services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div key={service.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link href={service.href}
                className="group relative flex flex-col h-full rounded-2xl bg-surface border border-border p-6 hover:border-brand-violet/30 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${service.accent}10 0%, transparent 55%)` }} />
                <div className="relative z-10 flex-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                    style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}28` }}>
                    <service.icon size={18} style={{ color: service.accent }} />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-brand-glow transition-colors">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-mono border border-border text-text-secondary">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: service.accent }}>
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }}>
            <Link href="/contact"
              className="group relative flex flex-col justify-center items-center h-full min-h-[200px] rounded-2xl border border-dashed border-brand-violet/30 hover:border-brand-violet/60 p-8 transition-all duration-300 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)" }} />
              <div className="relative z-10">
                <p className="text-2xl mb-3">💡</p>
                <p className="text-sm font-bold text-text-primary mb-1">Something custom?</p>
                <p className="text-xs text-text-secondary mb-4">Tell us what you need built</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-glow">Get in touch <ArrowRight size={12} /></span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
