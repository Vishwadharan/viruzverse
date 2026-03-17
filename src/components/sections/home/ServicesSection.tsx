"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight, Bot, Layers, Users, BookOpen,
  Puzzle, Plus, type LucideIcon,
} from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";

/* ── Data ─────────────────────────────────────────── */
const SERVICES: {
  icon: LucideIcon;
  name: string;
  href: string;
  tags: string[];
  desc: string;
  color: string;
  grad: string;
  num: string;
}[] = [
  {
    icon: Bot,
    name: "AI Automation",
    href: "/services/ai-automation",
    tags: ["LLM", "RAG", "Agents", "Pipelines"],
    desc: "LLM pipelines, RAG systems and intelligent automation that eliminates repetitive work at scale.",
    color: "#7c3aed",
    grad: "from-violet-600 to-purple-400",
    num: "01",
  },
  {
    icon: Layers,
    name: "Custom SaaS",
    href: "/services/custom-saas",
    tags: ["Multi-tenant", "Billing", "Auth"],
    desc: "Full-stack SaaS from zero to production. Auth, Stripe, dashboards, CI/CD — built right the first time.",
    color: "#2563eb",
    grad: "from-blue-600 to-cyan-400",
    num: "02",
  },
  {
    icon: Users,
    name: "CRM / ERP",
    href: "/services/crm-erp",
    tags: ["Pipelines", "Inventory", "RBAC"],
    desc: "Custom CRMs and ERPs tailored to your exact workflows — not generic software you adapt to.",
    color: "#0891b2",
    grad: "from-cyan-600 to-teal-400",
    num: "03",
  },
  {
    icon: BookOpen,
    name: "Edtech Platforms",
    href: "/services/edtech-solutions",
    tags: ["LMS", "Assessments", "Portals"],
    desc: "Course management, live classes, assessments and student portals built for real scale.",
    color: "#059669",
    grad: "from-emerald-600 to-green-400",
    num: "04",
  },
  {
    icon: Puzzle,
    name: "Custom Projects",
    href: "/services/custom-projects",
    tags: ["APIs", "Integrations", "Systems"],
    desc: "Unique problems no off-the-shelf product solves. We scope, design, and engineer from scratch.",
    color: "#d97706",
    grad: "from-amber-500 to-orange-400",
    num: "05",
  },
];

/* ── 3D tilt card ─────────────────────────────────── */
function ServiceCard({ s, i }: { s: (typeof SERVICES)[0]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(8px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const Icon = s.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        ref={ref}
        href={s.href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            `0 24px 64px ${s.color}22, 0 0 0 1.5px ${s.color}40, inset 0 1px 0 rgba(255,255,255,0.95)`;
        }}
        className="group relative flex flex-col h-full p-6 lg:p-7 rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.9)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
          transformStyle: "preserve-3d",
          transition: "transform 0.14s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Large ghost number */}
        <span
          className="absolute -top-3 -right-1 text-[80px] font-black leading-none
                     select-none pointer-events-none transition-opacity duration-300
                     opacity-[0.04] group-hover:opacity-[0.08]"
          style={{ color: s.color }}
        >
          {s.num}
        </span>

        {/* Gradient wash on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, ${s.color}0d 0%, transparent 65%)`,
          }}
        />

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center
                       transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background: `linear-gradient(135deg, ${s.color}1a, ${s.color}0d)`,
              border: `1.5px solid ${s.color}33`,
            }}
          >
            <Icon size={22} style={{ color: s.color }} strokeWidth={1.7} />
          </div>

          {/* Arrow */}
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center
                       opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
                       transition-all duration-300"
            style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
          >
            <ArrowUpRight size={14} style={{ color: s.color }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3
            className="text-[16px] font-bold mb-2.5 transition-colors duration-300"
            style={{ color: "#0a0a0f" }}
          >
            {s.name}
          </h3>
          <p
            className="text-[13px] leading-[1.8] mb-5 flex-1"
            style={{ color: "#6b7280" }}
          >
            {s.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {s.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-mono rounded-lg transition-colors duration-300"
                style={{
                  background: `${s.color}0f`,
                  color: s.color,
                  border: `1px solid ${s.color}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                     group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
          }}
        />
      </Link>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-bg-soft">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          className="absolute -top-48 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Separators */}
      {(["top-0", "bottom-0"] as const).map((p) => (
        <div
          key={p}
          className={`absolute ${p} inset-x-0 h-px`}
          style={{
            background:
              "linear-gradient(90deg, transparent, #c4b5fd 40%, #7c3aed 50%, #c4b5fd 60%, transparent)",
          }}
        />
      ))}

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              <span
                className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#7c3aed" }}
              >
                What we build
              </span>
            </div>

            <h2
              className="font-extrabold tracking-[-0.03em] leading-[1.06]"
              style={{ fontSize: "clamp(30px, 5vw, 54px)", color: "#0a0a0f" }}
            >
              Everything to ship
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(118deg, #7c3aed 0%, #a78bfa 60%, #c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                great software.
              </span>
            </h2>
          </div>

          <Magnetic3DButton variant="outline" href="/services">
            All services <ArrowUpRight size={14} />
          </Magnetic3DButton>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.name} s={s} i={i} />
          ))}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="group relative flex flex-col items-center justify-center
                         h-full min-h-[240px] p-8 rounded-3xl text-center overflow-hidden
                         transition-all duration-300"
              style={{
                background: "rgba(237,233,254,0.35)",
                border: "1.5px dashed #c4b5fd",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(237,233,254,0.65)";
                el.style.borderColor = "#a78bfa";
                el.style.boxShadow = "0 16px 48px rgba(124,58,237,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(237,233,254,0.35)";
                el.style.borderColor = "#c4b5fd";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 65%)",
                }}
              />

              <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, #ede9fe, #f5f3ff)",
                  border: "1.5px solid #c4b5fd",
                }}
              >
                <Plus size={24} style={{ color: "#7c3aed" }} strokeWidth={2} />
              </motion.div>

              <p className="relative z-10 text-[15px] font-bold mb-1.5" style={{ color: "#0a0a0f" }}>
                Got a custom idea?
              </p>
              <p className="relative z-10 text-[13px] mb-4" style={{ color: "#6b7280" }}>
                We'll scope, design and build it.
              </p>
              <span
                className="relative z-10 inline-flex items-center gap-1.5 text-[12px] font-semibold
                           font-mono transition-colors duration-300"
                style={{ color: "#7c3aed" }}
              >
                Let's talk
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
