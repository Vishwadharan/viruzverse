"use client";

import React, { useRef } from "react";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "", ...props }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_10px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-xl hover:-translate-y-1 overflow-hidden group ${className}`}
      {...props}
    >
      {/* Subtle top specular glass reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent" />
      
      {/* Background radiant glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--accent-glow), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
