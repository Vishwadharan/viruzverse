"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.65, delay, ease: EASE } satisfies Transition,
});

/* ── Code token types ─────────────────────────── */
type Token = { t: string; c: string };
type Line = Token[];

const K = "#a78bfa"; // keyword
const S = "#86efac"; // string
const N = "#fb923c"; // number
const P = "#4b5563"; // punctuation
const V = "#e2e8f0"; // variable
const D = "#6b7280"; // dim / comment

const LINES: Line[] = [
  [
    { t: "export ", c: K },
    { t: "const ", c: K },
    { t: "viruzverse", c: V },
    { t: " = {", c: P },
  ],
  [],
  [
    { t: "  // ", c: D },
    { t: "Who we are", c: D },
  ],
  [
    { t: "  name:     ", c: V },
    { t: '"Viruzverse"', c: S },
    { t: ",", c: P },
  ],
  [
    { t: "  type:     ", c: V },
    { t: '"B2B Software Studio"', c: S },
    { t: ",", c: P },
  ],
  [
    { t: "  location: ", c: V },
    { t: '"Coimbatore, TN"', c: S },
    { t: ",", c: P },
  ],
  [
    { t: "  founded:  ", c: V },
    { t: "2022", c: N },
    { t: ",", c: P },
  ],
  [],
  [
    { t: "  // ", c: D },
    { t: "Our promise", c: D },
  ],
  [
    { t: "  response: ", c: V },
    { t: '"< 24 hours"', c: S },
    { t: ",", c: P },
  ],
  [
    { t: "  pricing:  ", c: V },
    { t: '"fixed"', c: S },
    { t: ",", c: P },
  ],
  [
    { t: "  nda:      ", c: V },
    { t: "true", c: K },
    { t: ",", c: P },
  ],
  [
    { t: "  lock_in:  ", c: V },
    { t: "false", c: K },
    { t: ",", c: P },
  ],
  [],
  [
    { t: "}", c: P },
    { t: ";", c: P },
  ],
];

/* ── Terminal card ────────────────────────────── */
function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={
        { duration: 0.75, delay: 0.35, ease: EASE } satisfies Transition
      }
      className="w-full"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(124,58,237,0.15)",
      }}
    >
      {/* ── Window chrome ── */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: "#1a1625",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-1.5">
          {[["#ff5f57", "#febc2e", "#28c840"]].flat().map((c, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>
        <span className="text-[11px] font-mono" style={{ color: "#4b5563" }}>
          viruzverse.config.ts
        </span>
        <div className="w-14" />
      </div>

      {/* ── Code body ── */}
      <div
        className="relative px-5 py-5 overflow-hidden"
        style={{ background: "#0f0c1a" }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%)",
          }}
        />

        <pre className="relative z-10 text-[12px] leading-[1.9] font-mono">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.045 } },
            }}
          >
            {LINES.map((line, li) => (
              <motion.div
                key={li}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.3,
                      ease: EASE,
                    } satisfies Transition,
                  },
                }}
                style={{ minHeight: "1.9em" }}
              >
                {line.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.map((tok, ti) => (
                    <span key={ti} style={{ color: tok.c }}>
                      {tok.t}
                    </span>
                  ))
                )}
                {/* Blinking cursor on last line */}
                {li === LINES.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={
                      {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      } satisfies Transition
                    }
                    className="inline-block w-2 h-4 ml-0.5 align-middle rounded-sm"
                    style={{ background: "#7c3aed" }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </pre>
      </div>

      {/* ── Status bar ── */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: "#1a1625",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono" style={{ color: "#4b5563" }}>
            accepting projects
          </span>
        </div>
        <span className="text-[10px] font-mono" style={{ color: "#4b5563" }}>
          TypeScript
        </span>
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────── */
export default function AboutHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#faf9ff" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.032) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(124,58,237,0.032) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          className="absolute -top-40 right-0 w-150 h-150 rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-20 w-125 h-125 rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(167,139,250,0.08) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-8 left-0 right-0 text-center font-black
                     leading-none select-none pointer-events-none hidden lg:block"
          style={{
            fontSize: "clamp(80px,14vw,180px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(124,58,237,0.055)",
            letterSpacing: "-0.04em",
          }}
        >
          VIRUZVERSE
        </div>
      </div>

      {/* Separators */}
      {(["top-0", "bottom-0"] as const).map((p) => (
        <div
          key={p}
          className={`absolute ${p} inset-x-0 h-px`}
          style={{
            background:
              "linear-gradient(90deg,transparent,#c4b5fd 40%,#7c3aed 50%,#c4b5fd 60%,transparent)",
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-300 mx-auto px-5 sm:px-8 lg:px-10 py-28 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div {...rise(0)} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           text-[11px] font-mono font-semibold uppercase tracking-[0.18em]"
                style={{
                  color: "#7c3aed",
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative flex h-2 w-2 rounded-full bg-violet-500" />
                </span>
                About Viruzverse
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.1)}
              className="font-black tracking-[-0.04em] leading-[1.02] mb-6"
              style={{ fontSize: "clamp(38px,6vw,72px)", color: "#0a0a0f" }}
            >
              We're a small
              <br />
              team that{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                builds
              </span>
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(118deg,#7c3aed 10%,#a78bfa 55%,#c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                big things.
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className="text-[16px] leading-[1.85] mb-4 max-w-[500px]"
              style={{ color: "#6b7280" }}
            >
              Viruzverse is a B2B software studio based in Coimbatore, Tamil
              Nadu. Production-grade software — domain-deep, founder-direct,
              built to last.
            </motion.p>

            <motion.div
              {...rise(0.25)}
              className="flex items-center gap-2 mb-10"
            >
              <MapPin size={13} style={{ color: "#7c3aed" }} strokeWidth={2} />
              <span
                className="text-[13px] font-medium"
                style={{ color: "#9ca3af" }}
              >
                Coimbatore, Tamil Nadu · Est. 2022
              </span>
            </motion.div>

            <motion.div {...rise(0.3)} className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                           text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                  boxShadow:
                    "0 8px 28px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 16px 44px rgba(124,58,237,0.55), inset 0 1px 0 rgba(255,255,255,0.15)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 28px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)")
                }
              >
                Start a project
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                           text-[13px] font-bold transition-all duration-300 hover:-translate-y-1"
                style={{
                  color: "#374151",
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#c4b5fd";
                  el.style.color = "#7c3aed";
                  el.style.boxShadow =
                    "0 8px 24px rgba(124,58,237,0.13), inset 0 1px 0 rgba(255,255,255,1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.95)";
                  el.style.color = "#374151";
                  el.style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)";
                }}
              >
                Our products
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Terminal */}
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
