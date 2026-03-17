// src/app/products/page.tsx
"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight, Zap, ShoppingCart, Package,
  Users2, BarChart3, Smartphone, CheckCircle2,
} from "lucide-react";

const EASE  = [0.22, 1, 0.36, 1] as [number, number, number, number];
const COLOR = "#7c3aed";

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0,  filter: "blur(0px)" },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const MODULES = [
  { icon: ShoppingCart, label: "POS & Order Management", sub: "Tables · KOT · Real-time status" },
  { icon: Package,      label: "Inventory Control",      sub: "Stock · Alerts · Purchase orders" },
  { icon: Users2,       label: "Staff & Scheduling",     sub: "Roles · Shifts · Attendance"      },
  { icon: BarChart3,    label: "Revenue Analytics",      sub: "Daily · Item-level · Trends"      },
  { icon: Smartphone,   label: "Flutter Mobile App",     sub: "Offline-first · Instant sync"     },
];

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.25, ease: EASE } satisfies Transition}
      className="w-full rounded-3xl overflow-hidden shrink-0"
      style={{
        background: "#0d0a1a",
        boxShadow: `0 0 0 1px ${COLOR}20, 0 40px 100px rgba(124,58,237,0.18)`,
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ background: "#110d1f", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[11px] font-mono" style={{ color: "#2e1f4a" }}>cafeaura.app</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono" style={{ color: "#10b981" }}>live</span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        {MODULES.map(({ icon: Icon, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.08, ease: EASE } satisfies Transition}
            className="flex items-center gap-3 px-3 py-2.5 rounded-2xl"
            style={{
              background: i === 0 ? `${COLOR}0d` : "rgba(255,255,255,0.03)",
              border:     i === 0 ? `1px solid ${COLOR}22` : "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${COLOR}18`, border: `1px solid ${COLOR}25` }}
            >
              <Icon size={14} style={{ color: "#a78bfa" }} strokeWidth={1.7} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-white leading-tight">{label}</p>
              <p className="text-[10px] font-mono mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.3)" }}>
                {sub}
              </p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {i === 0 ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981" }} />
                  <span className="text-[9px] font-mono" style={{ color: "#10b981" }}>active</span>
                </>
              ) : (
                [...Array(3)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="w-1 h-1 rounded-full"
                    style={{ background: COLOR }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
                  />
                ))
              )}
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: "#2e1f4a" }}>
            Flutter · React · Supabase
          </span>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full"
                style={{ background: "#2e1f4a" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#07060f" }}>

      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}06 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}06 1px,transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 pointer-events-none"
          style={{ background: `radial-gradient(ellipse,${COLOR}22 0%,transparent 70%)` }}
        />
        <div className="absolute -bottom-10 left-0 w-96 h-96 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at left,rgba(99,102,241,0.07) 0%,transparent 70%)" }}
        />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(90deg,transparent,#c4b5fd 40%,${COLOR} 50%,#c4b5fd 60%,transparent)` }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div {...rise(0)} className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono font-semibold"
              style={{ color: "#a78bfa", background: `${COLOR}10`, border: `1px solid ${COLOR}28` }}
            >
              <Zap size={11} strokeWidth={2} />
              Our Products
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.07)}
            className="font-black tracking-[-0.04em] leading-[1.03] text-white mb-6"
            style={{ fontSize: "clamp(40px,6.5vw,80px)" }}
          >
            Products built to
            <br />
            <span style={{
              backgroundImage: "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              run businesses.
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.13)}
            className="text-[15px] leading-[1.9] max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Production-grade software — designed with precision,
            engineered for scale, owned fully by you.
          </motion.p>
        </div>
      </section>

      {/* ══ CAFEAURA ══ */}
      <section className="relative pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${COLOR}04 1px,transparent 1px),` +
              `linear-gradient(90deg,${COLOR}04 1px,transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(90deg,transparent,#c4b5fd 40%,${COLOR} 50%,#c4b5fd 60%,transparent)` }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            {...rise(0)}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="h-[2px] w-full"
              style={{ background: `linear-gradient(90deg,${COLOR},#a78bfa,#6366f1)` }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 p-8 sm:p-12">
              {/* Left */}
              <div>
                <motion.div {...rise(0.06)} className="flex items-center gap-3 flex-wrap mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold"
                    style={{ background: `${COLOR}18`, color: "#a78bfa", border: `1px solid ${COLOR}28` }}
                  >
                    SaaS Platform
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: "#10b981" }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Live
                  </span>
                </motion.div>

                <motion.h2
                  {...rise(0.1)}
                  className="font-black tracking-[-0.04em] leading-none mb-3"
                  style={{
                    fontSize: "clamp(36px,5.5vw,64px)",
                    backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#a78bfa 55%,#c4b5fd)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CafeAura
                </motion.h2>

                <motion.p {...rise(0.13)} className="text-[15px] font-semibold mb-5"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  Smart Cafe Management, Reimagined
                </motion.p>

                <motion.p {...rise(0.16)} className="text-[14px] leading-[1.85] mb-10 max-w-lg"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  A next-generation SaaS platform for modern cafes and restaurants.
                  Orders, inventory, staff and analytics — unified in one real-time
                  dashboard, with a Flutter mobile app for floor staff.
                </motion.p>

                {/* Checklist */}
                <motion.div {...rise(0.2)} className="flex flex-col gap-3 mb-10">
                  {[
                    "POS, KOT and table management in real time",
                    "Live inventory tracking with low-stock alerts",
                    "Role-based staff scheduling and attendance",
                    "Revenue dashboards with item-level breakdowns",
                    "Flutter mobile app — works offline, syncs instantly",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} style={{ color: "#a78bfa" }} className="mt-0.5 shrink-0" />
                      <span className="text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div {...rise(0.24)} className="flex flex-wrap gap-3">
                  <Link
                    href="/products/cafeaura"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                               text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg,${COLOR},#6d28d9)`,
                      boxShadow: `0 8px 28px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                    }}
                  >
                    Explore CafeAura
                    <ArrowUpRight size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                               text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Request a demo
                  </Link>
                </motion.div>
              </div>

              {/* Right */}
              <DashboardCard />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            {...rise(0)}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="h-[2px] w-full"
              style={{ background: `linear-gradient(90deg,${COLOR},#a78bfa,#6366f1)` }}
            />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 20% 50%,${COLOR}0c 0%,transparent 60%)` }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center
                            justify-between gap-8 px-8 sm:px-12 py-12">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${COLOR}0f`, border: `1px solid ${COLOR}25` }}>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative flex h-1.5 w-1.5 rounded-full bg-violet-500" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em]"
                    style={{ color: "#a78bfa" }}>
                    Custom product build
                  </span>
                </div>

                <h2
                  className="font-black tracking-[-0.03em] leading-[1.06] mb-3 text-white"
                  style={{ fontSize: "clamp(22px,3vw,38px)" }}
                >
                  Have a product
                  <br />
                  <span style={{
                    backgroundImage: `linear-gradient(118deg,${COLOR} 10%,#a78bfa 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    idea of your own?
                  </span>
                </h2>

                <p className="text-[12px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                  We build tailored SaaS products from scratch — scoped, priced
                  and shipped end-to-end with full code ownership on delivery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${COLOR},#6d28d9)`,
                    boxShadow: `0 8px 24px ${COLOR}45, inset 0 1px 0 rgba(255,255,255,0.15)`,
                  }}
                >
                  Start a project
                  <ArrowUpRight size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/services/custom-saas"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl
                             text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Custom SaaS services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
