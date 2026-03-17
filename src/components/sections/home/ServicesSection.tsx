"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";

const SERVICES = [
  {
    e: "⚡", name: "AI Automation",    href: "/services/ai-automation",
    tags: ["LLM","RAG","Agents","Pipelines"],
    desc: "LLM pipelines, RAG systems and intelligent automation that eliminates repetitive work at scale.",
  },
  {
    e: "◈",  name: "Custom SaaS",     href: "/services/custom-saas",
    tags: ["Multi-tenant","Billing","Auth"],
    desc: "Full-stack SaaS from zero to production. Auth, Stripe, dashboards, CI/CD — built right the first time.",
  },
  {
    e: "◉",  name: "CRM / ERP",       href: "/services/crm-erp",
    tags: ["Pipelines","Inventory","RBAC"],
    desc: "Custom CRMs and ERPs tailored to your exact workflows — not generic software you adapt to.",
  },
  {
    e: "◆",  name: "Edtech Platforms", href: "/services/edtech-solutions",
    tags: ["LMS","Assessments","Portals"],
    desc: "Course management, live classes, assessments and student portals built for real scale.",
  },
  {
    e: "◇",  name: "Custom Projects", href: "/services/custom-projects",
    tags: ["APIs","Integrations","Systems"],
    desc: "Unique problems no off-the-shelf product solves. We scope, design, and engineer from the ground up.",
  },
];

function Card3D({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y*9}deg) rotateY(${x*9}deg) translateZ(6px)`;
  };

  const onLeave = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <Link ref={ref} href={s.href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group flex flex-col h-full p-6 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.9)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
          transformStyle: "preserve-3d",
          transition: "transform 0.14s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(124,58,237,0.14), 0 0 0 1.5px #c4b5fd, inset 0 1px 0 rgba(255,255,255,0.95)";
        }}
      >
        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-[22px]"
            style={{
              background: "linear-gradient(135deg,#ede9fe,#f5f3ff)",
              border: "1.5px solid #c4b5fd",
              color: "#7c3aed",
            }}
          >
            {s.e}
          </motion.div>
          <ArrowUpRight size={16}
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
            style={{ color: "#7c3aed" }} />
        </div>

        <h3 className="text-[15px] font-bold mb-2.5 text-ink">{s.name}</h3>
        <p className="text-[13px] leading-[1.78] mb-5 flex-1 text-muted">{s.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {s.tags.map(t => (
            <span key={t} className="px-2.5 py-1 text-[11px] font-mono rounded-lg"
              style={{ background: "#ede9fe", color: "#7c3aed", border: "1px solid #ddd6fe" }}>
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-bg-soft">

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#c4b5fd,transparent)" }} />

      {/* Orb */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,0.07) 0%,transparent 65%)" }} />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "#7c3aed" }}>
              What we build
            </p>
            <h2 className="font-extrabold tracking-[-0.03em] leading-[1.06] text-ink"
              style={{ fontSize: "clamp(30px,5vw,54px)" }}>
              Everything to ship<br />
              <span style={{
                backgroundImage: "linear-gradient(118deg,#7c3aed 0%,#a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                great software.
              </span>
            </h2>
          </div>
          <Magnetic3DButton variant="outline" href="/services">
            All services <ArrowUpRight size={14} />
          </Magnetic3DButton>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => <Card3D key={s.name} s={s} i={i} />)}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link href="/contact"
              className="group flex flex-col items-center justify-center h-full min-h-[220px] p-6 rounded-3xl text-center transition-all duration-250"
              style={{
                background: "rgba(237,233,254,0.4)",
                backdropFilter: "blur(12px)",
                border: "1.5px dashed #c4b5fd",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(237,233,254,0.7)";
                (e.currentTarget as HTMLElement).style.borderColor = "#a78bfa";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(237,233,254,0.4)";
                (e.currentTarget as HTMLElement).style.borderColor = "#c4b5fd";
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-[24px] font-light mb-3"
                style={{ background: "#ede9fe", border: "1.5px solid #c4b5fd", color: "#7c3aed" }}>
                +
              </motion.div>
              <p className="text-[14px] font-semibold text-ink mb-1">Custom idea?</p>
              <p className="text-[12px] font-mono" style={{ color: "#7c3aed" }}>Let's talk →</p>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#c4b5fd,transparent)" }} />
    </section>
  );
}
