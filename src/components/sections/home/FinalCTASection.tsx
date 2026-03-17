"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import { WHATSAPP_NUMBER } from "../../../lib/constants";

const TRUST = ["24 hr response", "NDA available", "Fixed pricing", "Founder direct", "No lock-in"];

export default function FinalCTASection() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf9ff" }}
    >
      {/* Orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-[960px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <motion.div
            whileHover={{ scale: 1.007 }}
            transition={{ type: "spring", stiffness: 150, damping: 22 }}
            className="relative rounded-[32px] overflow-hidden glass text-center px-10 py-20 lg:px-20"
            style={{
              boxShadow:
                "0 40px 100px rgba(124,58,237,0.12), 0 8px 32px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            {/* Top shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(167,139,250,0.4), transparent)",
              }}
            />

            {/* Faded BG word */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden
            >
              <span
                className="font-extrabold tracking-[-0.08em]"
                style={{
                  fontSize: "280px",
                  color: "rgba(124,58,237,0.03)",
                  lineHeight: 1,
                }}
              >
                BUILD
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-soft shadow-sm"
                style={{ color: "#7c3aed" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#7c3aed",
                    boxShadow: "0 0 6px rgba(124,58,237,0.8)",
                  }}
                />
                <span className="text-[12px] font-mono font-semibold">
                  Currently accepting projects
                </span>
                <Sparkles size={11} />
              </motion.div>

              {/* Headline */}
              <h2
                className="font-extrabold tracking-[-0.04em] leading-[1.04] mb-6"
                style={{
                  fontSize: "clamp(32px, 6vw, 70px)",
                  backgroundImage:
                    "linear-gradient(118deg, #0a0a0f 0%, #7c3aed 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let's build something
                <br />
                worth shipping.
              </h2>

              {/* Sub */}
              <p
                className="text-[16px] leading-[1.82] max-w-lg mb-10"
                style={{ color: "#6b7280" }}
              >
                Tell us about your project. We respond within 24 hours —
                clear scope, honest timeline, fair price. No commitment needed.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Magnetic3DButton variant="primary" href="/contact">
                  Start a project <ArrowRight size={15} />
                </Magnetic3DButton>
                <Magnetic3DButton
                  variant="ghost"
                  href={`https://wa.me/8300262005`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={15} /> WhatsApp us
                </Magnetic3DButton>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-x-7 gap-y-2.5">
                {TRUST.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-[12px] font-mono"
                    style={{ color: "#9ca3af" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: "#7c3aed",
                        boxShadow: "0 0 4px rgba(124,58,237,0.7)",
                      }}
                    />
                    {t}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
