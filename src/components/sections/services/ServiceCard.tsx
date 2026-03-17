"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Bot, Layers, Users, BookOpen, Puzzle,
  type LucideIcon,                              // ← use this
} from "lucide-react";
import { useRef } from "react";
import type { Service, ServiceIconKey } from "@/lib/services";

/* ── Icon map ─────────────────────────────────── */
const ICON_MAP: Record<ServiceIconKey, LucideIcon> = {  // ← LucideIcon, not custom FC
  Bot, Layers, Users, BookOpen, Puzzle,
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function ServiceCard({ s, i }: { s: Service; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const Icon = ICON_MAP[s.iconKey];

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(8px)`;
  };

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.55, delay: i * 0.09, ease: EASE }}
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
        {/* Ghost number */}
        <span
          className="absolute -top-3 -right-1 text-[80px] font-black leading-none
                     select-none pointer-events-none opacity-[0.04]
                     group-hover:opacity-[0.08] transition-opacity duration-300"
          style={{ color: s.color }}
        >
          {s.num}
        </span>

        {/* Gradient wash */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 0% 0%, ${s.color}0d 0%, transparent 65%)` }}
        />

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between mb-6">
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
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center
                       opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
                       transition-all duration-300"
            style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
          >
            <ArrowUpRight size={14} style={{ color: s.color }} />
          </div>
        </div>

        {/* Body */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-[16px] font-bold mb-2.5" style={{ color: "#0a0a0f" }}>
            {s.name}
          </h3>
          <p className="text-[13px] leading-[1.8] mb-5 flex-1" style={{ color: "#6b7280" }}>
            {s.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {s.tags.map((t) => (
              <span key={t}
                className="px-2.5 py-1 text-[11px] font-mono rounded-lg"
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

        {/* Bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
        />
      </Link>
    </motion.div>
  );
}
