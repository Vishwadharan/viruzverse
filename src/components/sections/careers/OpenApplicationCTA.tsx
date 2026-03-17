"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

const P    = "#7c3aed";
const P2   = "#a78bfa";
const CYAN = "#06b6d4";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function OpenApplicationCTA() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#07060f" }}
    >
      <style>{`
        @keyframes shimmerCTA {
          0%   { transform: translateX(-130%) skewX(-15deg); }
          100% { transform: translateX(360%)  skewX(-15deg); }
        }
        @keyframes orbitRing {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes blobPulse {
          0%,100% { transform: scale(1);    opacity: 0.6; }
          50%      { transform: scale(1.12); opacity: 1;   }
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

      {/* ── Background orbs ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 pointer-events-none"
        style={{ background: `radial-gradient(ellipse,${P}12,transparent 70%)` }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 100%,${CYAN}07,transparent 65%)` }}
      />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 100% 100%,${P}06,transparent 65%)` }}
      />

      {/* ── Sep ── */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${P2}60 40%,${P} 50%,${P2}60 60%,transparent)` }}
      />

      {/* ── Watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-black select-none"
          style={{
            fontSize: "clamp(70px,15vw,210px)",
            color: "transparent",
            WebkitTextStroke: `1px ${P}05`,
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}>
          Let&apos;s Talk
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* ── Card ── */}
          <div
            className="relative rounded-3xl overflow-hidden text-center"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: `1px solid ${P}22`,
              backdropFilter: "blur(20px)",
              boxShadow: `0 0 0 1px ${P}10, 0 40px 100px ${P}12`,
            }}
          >
            {/* Top accent line */}
            <div className="h-[2px] w-full"
              style={{ background: `linear-gradient(90deg,${P},${P2},${CYAN})` }}
            />

            {/* Radial inner glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 0%,${P}14,transparent 60%)` }}
            />

            {/* Spinning hex bg decoration */}
            <div className="absolute top-[-60px] right-[-60px] w-48 h-48 pointer-events-none opacity-[0.06]"
              style={{
                background: `conic-gradient(from 0deg,${P},${P2},transparent,${P})`,
                clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                animation: "orbitRing 20s linear infinite",
              }}
            />
            <div className="absolute bottom-[-40px] left-[-40px] w-32 h-32 pointer-events-none opacity-[0.05]"
              style={{
                background: `conic-gradient(from 180deg,${CYAN},transparent,${P})`,
                clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                animation: "orbitRing 14s linear infinite reverse",
              }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 px-8 sm:px-14 py-14">

              {/* Icon orbit */}
              <div className="flex justify-center mb-8">
                <div className="relative w-16 h-16">
                  {/* Outer pulsing ring */}
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      border: `1px solid ${P}25`,
                      animation: "blobPulse 3s ease-in-out infinite",
                    }}
                  />
                  {/* Rotating conic ring */}
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg,${P}50,transparent 50%,${P2}30,transparent)`,
                      animation: "orbitRing 4s linear infinite",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1.5px",
                    }}
                  />
                  {/* Icon bg */}
                  <div className="absolute inset-[2px] rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg,${P}20,${CYAN}14)`,
                      boxShadow: `0 0 32px ${P}22`,
                    }}
                  >
                    <Mail size={22} style={{ color: P2 }} strokeWidth={1.6} />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                className="flex justify-center mb-6"
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
                  <Sparkles size={10} style={{ color: P2 }} />
                  Open application
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
                className="font-black tracking-[-0.04em] leading-[1.03] text-white mb-5"
                style={{ fontSize: "clamp(26px,4.5vw,52px)" }}
              >
                Don&apos;t see a role
                <br />
                <span style={{
                  backgroundImage: `linear-gradient(118deg,${P} 10%,${P2} 55%,${CYAN})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  that fits you?
                </span>
              </motion.h2>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.28, ease: EASE }}
                className="text-[14px] leading-[1.9] max-w-lg mx-auto mb-10"
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                We&apos;re always open to hearing from talented people. Send us your
                portfolio, GitHub, or a short note about what you do — we&apos;ll
                reach out if there&apos;s a fit.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.36, ease: EASE }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                {/* Primary shimmer button */}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Open Application — Viruzverse`}
                  className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-2xl
                             text-[13px] font-bold text-white overflow-hidden
                             transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${P},${CYAN})`,
                    boxShadow: `0 12px 36px ${P}45, inset 0 1px 0 rgba(255,255,255,0.18)`,
                  }}
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)",
                      width: "55%",
                      animation: "shimmerCTA 3s ease-in-out infinite",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail size={14} />
                    Send open application
                    <ArrowUpRight size={14}
                      className="transition-transform duration-300
                                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>

                {/* Email display pill */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl
                             text-[11px] font-mono transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.04)",
                    border: `1.5px dashed ${P}30`,
                  }}
                >
                  <Mail size={11} style={{ color: P2 }} />
                  {CONTACT_EMAIL}
                </div>
              </motion.div>

              {/* Divider strip */}
              <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center
                              justify-center gap-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                {[
                  { label: "Response time",  value: "Within 48h"   },
                  { label: "Process",        value: "2-step only"  },
                  { label: "Start date",     value: "Flexible"     },
                ].map(({ label, value }, i) => (
                  <div key={label} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="hidden sm:block w-px h-6"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      />
                    )}
                    <div className="text-center">
                      <p className="text-[13px] font-black text-white leading-tight">{value}</p>
                      <p className="text-[10px] font-mono mt-0.5"
                        style={{ color: "rgba(255,255,255,0.3)" }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
