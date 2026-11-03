"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-center opacity-0 ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative w-9 h-9 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Sun
          size={16}
          className={`absolute transition-all duration-300 transform ${
            isDark
              ? "opacity-0 rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100 text-amber-500"
          }`}
        />
        <Moon
          size={16}
          className={`absolute transition-all duration-300 transform ${
            isDark
              ? "opacity-100 rotate-0 scale-100 text-violet-400"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </div>
    </button>
  );
}

