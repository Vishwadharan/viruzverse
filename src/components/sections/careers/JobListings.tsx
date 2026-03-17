"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowUpRight } from "lucide-react";
import { JOBS } from "@/lib/careers";

const P    = "#7c3aed";
const P2   = "#a78bfa";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const DEPT_COLORS: Record<string, { base: string; glow: string }> = {
  Engineering: { base: "#7c3aed", glow: "#a78bfa" },
  Design:      { base: "#06b6d4", glow: "#67e8f9" },
  Marketing:   { base: "#f59e0b", glow: "#fcd34d" },
  Operations:  { base: "#10b981", glow: "#34d399" },
};

const DEPT_FALLBACK = { base: P, glow: P2 };

export default function JobListings() {
  return (
    <section
      id="open-roles"
      className="relative py-28 overflow-hidden scroll-mt-20"
      style={{ background: "#07060f" }}
    >
      {/* ── CSS ── */}
      <style>{`
        @keyframes shimmerJob {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(340%)  skewX(-12deg); }
        }
        @keyframes borderPulse {
          0%,100% { opacity: 0.6; }
          50%     { opacity: 1;   }
        }
        .job-card:hover .job-shimmer {
          animation: shimmerJob 0.9s ease forwards;
        }
      `}</style>

      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(${P}04 1px,transparent 1px),` +
            `linear-gradient(90deg,${P}04 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Orbs ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 pointer-events-none"
        style={{ background: `radial-gradient(ellipse,${P}10,transparent 70%)` }}
      />
      <div className="absolute bottom-0 right-0 w-96 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%,rgba(6,182,212,0.06),transparent 65%)" }}
      />

      {/* ── Sep lines ── */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${P2}60 40%,${P} 50%,${P2}60 60%,transparent)` }}
      />
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${P2}60 40%,${P} 50%,${P2}60 60%,transparent)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-5"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           text-[11px] font-mono font-semibold"
                style={{
                  color: P2,
                  background: `${P}10`,
                  border: `1px solid ${P}28`,
                  clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                {JOBS.length} open role{JOBS.length !== 1 ? "s" : ""}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="font-black tracking-[-0.04em] leading-[1.03] text-white"
              style={{ fontSize: "clamp(28px,4vw,48px)" }}
            >
              Open{" "}
              <span style={{
                backgroundImage: `linear-gradient(118deg,${P} 10%,${P2} 55%,#c4b5fd)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Positions
              </span>
            </motion.h2>
          </div>

          {/* Dept legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex flex-wrap gap-2"
          >
            {Object.entries(DEPT_COLORS).map(([dept, { base }]) => (
              <span key={dept}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl
                           text-[10px] font-mono"
                style={{
                  background: `${base}0d`,
                  color: base,
                  border: `1px solid ${base}20`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: base }} />
                {dept}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Job cards ── */}
        <div className="flex flex-col gap-3">
          {JOBS.map((job, i) => {
            const { base, glow } = DEPT_COLORS[job.department] ?? DEPT_FALLBACK;

            return (
              <motion.div key={job.slug}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              >
                <Link href={`/careers/${job.slug}`}
                  className="job-card group relative flex flex-col sm:flex-row sm:items-center
                             justify-between gap-5 p-6 rounded-3xl overflow-hidden
                             transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${base}0a`;
                    el.style.border = `1px solid ${base}28`;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = `0 16px 48px ${base}18`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.025)";
                    el.style.border = "1px solid rgba(255,255,255,0.07)";
                    el.style.transform = "translateY(0px)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Left color strip */}
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full
                                 transition-all duration-300"
                    style={{
                      background: `linear-gradient(to bottom,${base},${base}40)`,
                      boxShadow: `0 0 12px ${base}60`,
                      opacity: 0.5,
                    }}
                  />

                  {/* Shimmer on hover */}
                  <div className="job-shimmer absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg,transparent,${base}12,transparent)`,
                      width: "45%",
                    }}
                  />

                  {/* Top glow */}
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg,transparent,${base}50,transparent)`,
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  />

                  {/* Icon + info */}
                  <div className="flex items-start gap-5 pl-4">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${base}14`,
                        border: `1px solid ${base}22`,
                        boxShadow: `0 0 20px ${base}14`,
                      }}
                    >
                      <Briefcase size={16} style={{ color: glow }} strokeWidth={1.7} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-[15px] font-black text-white leading-tight mb-2.5
                                    transition-colors duration-200 group-hover:text-white">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* Location */}
                        <span className="flex items-center gap-1.5 text-[11px] font-mono"
                          style={{ color: "rgba(255,255,255,0.35)" }}>
                          <MapPin size={10} style={{ color: "rgba(255,255,255,0.25)" }} />
                          {job.location}
                        </span>

                        <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>

                        {/* Type */}
                        <span className="flex items-center gap-1.5 text-[11px] font-mono"
                          style={{ color: "rgba(255,255,255,0.35)" }}>
                          <Clock size={10} style={{ color: "rgba(255,255,255,0.25)" }} />
                          {job.type}
                        </span>

                        <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>

                        {/* Experience */}
                        <span className="text-[11px] font-mono"
                          style={{ color: "rgba(255,255,255,0.35)" }}>
                          {job.experience}
                        </span>

                        {/* Dept badge */}
                        <span
                          className="px-2.5 py-0.5 rounded-xl text-[10px] font-mono font-bold"
                          style={{
                            background: `${base}12`,
                            color: glow,
                            border: `1px solid ${base}22`,
                          }}
                        >
                          {job.department}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl
                               text-[12px] font-bold transition-all duration-300 sm:ml-auto
                               group-hover:gap-3"
                    style={{
                      color: glow,
                      background: `${base}0d`,
                      border: `1px solid ${base}20`,
                    }}
                  >
                    View role
                    <ArrowUpRight size={13}
                      className="transition-transform duration-300
                                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Empty state ── */}
        {JOBS.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-center py-20 rounded-3xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px dashed rgba(255,255,255,0.07)",
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: `${P}12`, border: `1px solid ${P}20` }}>
              <Briefcase size={20} style={{ color: P2 }} strokeWidth={1.5} />
            </div>
            <p className="text-[15px] font-bold text-white mb-2">No openings right now</p>
            <p className="text-[13px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
              Check back soon — we hire in bursts.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
