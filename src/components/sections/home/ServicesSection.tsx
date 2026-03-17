"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";           // ← shared data
import { ServiceCard } from "@/components/sections/services/ServiceCard"; // ← shared card
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";

export default function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-bg-soft">
      {/* background, separators — unchanged */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.03) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(124,58,237,0.03) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -top-48 -right-40 w-150 h-150 rounded-full"
          style={{ background: "radial-gradient(circle,rgba(124,58,237,0.09) 0%,transparent 65%)" }}
        />
        <div className="absolute -bottom-40 -left-32 w-125 h-125 rounded-full"
          style={{ background: "radial-gradient(circle,rgba(167,139,250,0.08) 0%,transparent 65%)" }}
        />
      </div>
      {(["top-0","bottom-0"] as const).map(p => (
        <div key={p} className={`absolute ${p} inset-x-0 h-px`}
          style={{ background: "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)" }}
        />
      ))}

      <div className="max-w-300 mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#7c3aed" }}>
                What we build
              </span>
            </div>
            <h2 className="font-extrabold tracking-[-0.03em] leading-[1.06]"
              style={{ fontSize: "clamp(30px,5vw,54px)", color: "#0a0a0f" }}
            >
              Everything to ship
              <br />
              <span style={{
                backgroundImage: "linear-gradient(118deg,#7c3aed 0%,#a78bfa 60%,#c4b5fd)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                great software.
              </span>
            </h2>
          </div>
          <Magnetic3DButton variant="outline" href="/services">
            All services <ArrowUpRight size={14} />
          </Magnetic3DButton>
        </motion.div>

        {/* Cards — shared component, shared data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => <ServiceCard key={s.name} s={s} i={i} />)}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            <Link href="/contact"
              className="group relative flex flex-col items-center justify-center
                         h-full min-h-[240px] p-8 rounded-3xl text-center overflow-hidden transition-all duration-300"
              style={{ background: "rgba(237,233,254,0.35)", border: "1.5px dashed #c4b5fd", backdropFilter: "blur(12px)" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(237,233,254,0.65)";
                el.style.borderColor = "#a78bfa";
                el.style.boxShadow = "0 16px 48px rgba(124,58,237,0.15)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(237,233,254,0.35)";
                el.style.borderColor = "#c4b5fd";
                el.style.boxShadow = "none";
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse at 50% 50%,rgba(124,58,237,0.07) 0%,transparent 65%)" }}
              />
              <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg,#ede9fe,#f5f3ff)", border: "1.5px solid #c4b5fd" }}
              >
                <Plus size={24} style={{ color: "#7c3aed" }} strokeWidth={2} />
              </motion.div>
              <p className="relative z-10 text-[15px] font-bold mb-1.5" style={{ color: "#0a0a0f" }}>
                Got a custom idea?
              </p>
              <p className="relative z-10 text-[13px] mb-4" style={{ color: "#6b7280" }}>
                We'll scope, design and build it.
              </p>
              <span className="relative z-10 inline-flex items-center gap-1.5 text-[12px] font-semibold font-mono"
                style={{ color: "#7c3aed" }}>
                Let's talk <ArrowUpRight size={13} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
