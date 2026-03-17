"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { e: "🍽️", name: "F&B / Restaurants"     },
  { e: "🏫", name: "Education & Edtech"     },
  { e: "🏭", name: "Manufacturing"           },
  { e: "🏥", name: "Healthcare"             },
  { e: "🏠", name: "Real Estate"            },
  { e: "🛒", name: "E-Commerce"             },
  { e: "💼", name: "Professional Services"  },
  { e: "🚚", name: "Logistics"              },
  { e: "💰", name: "Fintech"                },
  { e: "⚖️", name: "LegalTech"             },
];

export default function IndustriesSection() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#faf9ff" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c4b5fd, transparent)",
        }}
      />

      {/* Orb */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(124,58,237,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "#7c3aed" }}
            >
              Industries
            </p>
            <h2
              className="font-extrabold tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(26px, 4vw, 44px)", color: "#0a0a0f" }}
            >
              Built for{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(118deg, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                the real world.
              </span>
            </h2>
            <p
              className="text-[14px] leading-[1.82]"
              style={{ color: "#6b7280" }}
            >
              Production software across 10+ industries.
              Domain expertise comes standard with every project.
            </p>
          </motion.div>

          {/* Right — industry pills */}
          <div className="flex flex-wrap gap-3">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.07, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
                           text-[13px] font-medium cursor-default glass shadow-sm"
                style={{
                  color: "#374151",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ede9fe";
                  (e.currentTarget as HTMLElement).style.borderColor = "#c4b5fd";
                  (e.currentTarget as HTMLElement).style.color = "#7c3aed";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(124,58,237,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.color = "#374151";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)";
                }}
              >
                <span className="text-[17px]">{item.e}</span>
                {item.name}
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c4b5fd, transparent)",
        }}
      />
    </section>
  );
}
