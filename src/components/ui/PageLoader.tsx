"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "VIRUZVERSE".split("");

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState("");

  const TYPED_TEXT = "> innovation that flows...";

  // Run once on initial page load only; subsequent client-side navigation is instant
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
    }, 1100);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= TYPED_TEXT.length) {
        setTyped(TYPED_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--bg-canvas)] pointer-events-none"
        >
          {/* Subtle Grid */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Breathing Glow Orb */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full"
            style={{
              width: 560,
              height: 560,
              background:
                "radial-gradient(circle, var(--accent-glow) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
            }}
          />

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              {/* Morphing Core */}
              <motion.div
                animate={{
                  borderRadius: [
                    "20% 80% 80% 20% / 20% 20% 80% 80%",
                    "50% 50% 50% 50%",
                    "80% 20% 20% 80% / 80% 80% 20% 20%",
                  ],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 18,
                  height: 18,
                  background: "linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%)",
                  boxShadow: "0 0 16px var(--accent), 0 0 32px var(--accent-glow)",
                }}
              />

              {/* Brand Letters */}
              <div className="flex items-end gap-[2px] sm:gap-1">
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.03,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className={`inline-block font-mokoto tracking-[0.04em] bg-clip-text text-transparent ${
                      i < 5
                        ? "bg-gradient-to-br from-[var(--text-primary)] to-[var(--accent)]"
                        : "bg-gradient-to-br from-[var(--accent)] to-[#a78bfa]"
                    }`}
                    style={{ fontSize: "clamp(32px, 7vw, 64px)" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Typing Line */}
            <div className="flex items-center gap-1 font-mono text-xs text-[var(--accent)]">
              <span>{typed}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[14px] rounded-full bg-[var(--accent)]"
              />
            </div>

            {/* Progress Bar */}
            <div className="w-[200px] sm:w-[240px] h-[2px] rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
