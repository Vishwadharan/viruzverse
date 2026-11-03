"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "VIRUZVERSE".split("");
const WORDS = ["Growth", "Innovation", "Future", "Scale", "Automation", "Vision"];

const TOKENS = [
  { text: "const ai = new AI()", x: "8%", y: "15%", delay: 0.5 },
  { text: "npm run deploy", x: "72%", y: "10%", delay: 0.8 },
  { text: "git push origin main", x: "80%", y: "78%", delay: 1.1 },
  { text: "docker build .", x: "5%", y: "72%", delay: 0.6 },
  { text: "SELECT * FROM growth", x: "60%", y: "88%", delay: 1.3 },
  { text: "await scale(∞)", x: "15%", y: "88%", delay: 0.9 },
  { text: "→ 200 OK", x: "88%", y: "42%", delay: 1.5 },
  { text: "yarn build --prod", x: "3%", y: "44%", delay: 1.0 },
];

const NODES = [
  { x: "20%", y: "20%" },
  { x: "80%", y: "20%" },
  { x: "15%", y: "55%" },
  { x: "85%", y: "55%" },
  { x: "20%", y: "82%" },
  { x: "80%", y: "82%" },
];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [wordIdx, setWordIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const pathname = usePathname();

  const TYPED_TEXT = "> building your future...";

  // ── Helper to run the animation sequence ──
  const runSequence = () => {
    setVisible(true);
    setPhase("in");
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("hold"), 550);
    const t2 = setTimeout(() => setPhase("out"), 1150);
    const t3 = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  };

  // ── Initial Page Load Timing ──
  useEffect(() => {
    return runSequence();
  }, []);

  // ── Route / Module Switching Interceptor ──
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        href !== pathname &&
        !target.getAttribute("target")
      ) {
        runSequence();
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, [pathname]);

  // ── Typing animation ──
  useEffect(() => {
    if (!visible) return;
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      if (i <= TYPED_TEXT.length) {
        setTyped(TYPED_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [visible]);

  // ── Word cycling ──
  useEffect(() => {
    if (phase === "out" || !visible) return;
    const interval = setInterval(() => {
      setWordIdx((p) => (p + 1) % WORDS.length);
    }, 850);
    return () => clearInterval(interval);
  }, [phase, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--bg-canvas)] transition-colors duration-200"
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          {/* ── Grid ── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* ── Circuit nodes ── */}
          {NODES.map((node, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.6, 0.3], scale: [0, 1, 0.8] }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                animate={{ width: [6, 40, 6], opacity: [0, 0.25, 0] }}
                transition={{ delay: 0.5 + i * 0.15, duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
              />
            </motion.div>
          ))}

          {/* ── Floating tech tokens ── */}
          {TOKENS.map((token, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none font-mono text-[10px] text-[var(--accent)] opacity-40 dark:opacity-50 whitespace-nowrap"
              style={{
                left: token.x,
                top: token.y,
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -8] }}
              transition={{ delay: token.delay, duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              {token.text}
            </motion.div>
          ))}

          {/* ── Breathing orb ── */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 700,
              height: 700,
              background:
                "radial-gradient(circle, var(--accent-glow) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
            }}
          />

          {/* ── Center content ── */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo + Letters */}
            <div className="flex items-center gap-5">
              {/* Morphing shape */}
              <div className="relative flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                    filter: "blur(6px)",
                  }}
                />
                <motion.div
                  animate={{
                    borderRadius: [
                      "20% 80% 80% 20% / 20% 20% 80% 80%",
                      "50% 50% 50% 50%",
                      "80% 20% 20% 80% / 80% 80% 20% 20%",
                      "50% 50% 50% 50%",
                      "20% 80% 80% 20% / 20% 20% 80% 80%",
                    ],
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 20,
                    height: 20,
                    background: "linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%)",
                    boxShadow: "0 0 16px var(--accent), 0 0 32px var(--accent-glow)",
                  }}
                />
              </div>

              {/* Letters */}
              <div className="flex items-end gap-[2px] sm:gap-1">
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className={`inline-block font-extrabold tracking-[-0.02em] bg-clip-text text-transparent ${
                      i < 5
                        ? "bg-gradient-to-br from-[var(--text-primary)] to-[var(--accent)]"
                        : "bg-gradient-to-br from-[var(--accent)] to-[#a78bfa]"
                    }`}
                    style={{
                      fontSize: "clamp(36px, 8vw, 72px)",
                      perspective: 800,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1 font-mono text-[12px] text-[var(--accent)]"
            >
              <span>{typed}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[14px] rounded-full bg-[var(--accent)]"
              />
            </motion.div>

            {/* We build for + cycling word */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center gap-2.5"
            >
              <span className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)]">
                We build for
              </span>
              <div className="relative overflow-hidden" style={{ minWidth: 140, height: 24 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute inset-0 font-mono font-bold uppercase text-[15px] tracking-[0.18em] whitespace-nowrap bg-gradient-to-r from-[var(--accent)] to-[#a78bfa] bg-clip-text text-transparent"
                  >
                    {WORDS[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Morphing line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative w-[200px] sm:w-[260px] h-[1px] overflow-visible"
            >
              <div className="absolute inset-0 rounded-full bg-[var(--border-subtle)]" />
              <motion.div
                animate={{ x: ["0%", "100%", "0%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 w-8 h-[3px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--accent), #a78bfa, transparent)",
                  boxShadow: "0 0 12px var(--accent-glow)",
                  left: 0,
                }}
              />
            </motion.div>

            {/* Three dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                  className="block w-1 h-1 rounded-full bg-[#c4b5fd]"
                />
              ))}
            </motion.div>
          </div>

          {/* ── Exit curtain ── */}
          {phase === "out" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-0 z-[9999] bg-[var(--bg-canvas)]"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
