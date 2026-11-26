"use client";

import { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";

  const handleToggle = () => {
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition || !btnRef.current) {
      toggleTheme();
      return;
    }

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center w-[62px] h-[32px] p-1 rounded-full border transition-colors duration-300 cursor-pointer ${
        isDark
          ? "bg-[#121224] border-violet-500/35 shadow-[0_0_15px_rgba(124,58,237,0.25)]"
          : "bg-violet-100 border-violet-300 shadow-[0_2px_10px_rgba(124,58,237,0.18)]"
      }`}
    >
      {/* Background Icons */}
      <span className="flex w-full items-center justify-between px-1.5 pointer-events-none">
        <Sun
          size={12}
          className={`transition-opacity duration-300 ${
            isDark ? "text-slate-500 opacity-50" : "text-amber-500 opacity-0"
          }`}
        />
        <Moon
          size={12}
          className={`transition-opacity duration-300 ${
            isDark ? "text-violet-300 opacity-0" : "text-violet-500 opacity-60"
          }`}
        />
      </span>

      {/* Sliding Glowing Thumb */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
          isDark
            ? "left-1 bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.7)]"
            : "left-[33px] bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.6)]"
        }`}
      >
        {isDark ? <Moon size={12} /> : <Sun size={12} />}
      </motion.span>
    </button>
  );
}
