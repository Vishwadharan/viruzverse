"use client";

import React, { useRef, useState, useEffect, useId } from "react";

interface TiltCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard3D({
  children,
  className = "",
  glowColor = "rgba(167, 139, 250, 0.12)",
  ...props
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const rawId = useId();
  const patternId = `circuit-${rawId.replace(/:/g, "")}`;
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(hover: none)").matches || window.innerWidth < 768);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.style.setProperty("--mx", `${x}px`);
      cardRef.current.style.setProperty("--my", `${y}px`);
      cardRef.current.style.setProperty("--mo", "1");
    });
  };

  const handleMouseLeave = () => {
    if (isTouch || !cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cardRef.current.style.setProperty("--mo", "0");
  };

  const maskGradient =
    "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), black 0%, rgba(0, 0, 0, 0.45) 55%, transparent 100%)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d17]/90 shadow-xl transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.3)] ${className}`}
      {...props}
    >
      {/* Top Glass Specular Reflection Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* Hidden Electronic Circuit Background — Zero-Re-render CSS Var Reveal */}
      {!isTouch && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: "calc(var(--mo, 0) * 0.35)",
            maskImage: maskGradient,
            WebkitMaskImage: maskGradient,
          }}
          aria-hidden="true"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id={patternId}
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20 H24 L36 32 H60 M20 0 V14 L28 22 M80 56 H56 L44 44 H16 M60 80 V62 L52 54 M12 80 V52 L22 42 H34"
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.55)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 0 V18 L54 28 H80 M0 64 H18 L28 74 V80"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.4)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="60" cy="32" r="2.2" fill="#a78bfa" />
                <circle cx="16" cy="44" r="2.2" fill="#38bdf8" />
                <circle cx="34" cy="42" r="2" fill="#34d399" />
                <circle cx="28" cy="22" r="1.8" fill="#c4b5fd" />
                <circle cx="52" cy="54" r="1.8" fill="#38bdf8" />
                <rect
                  x="38"
                  y="29"
                  width="6"
                  height="6"
                  rx="1"
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.65)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        </div>
      )}

      {/* Soft Cursor-Tracking Ambient Glow */}
      {!isTouch && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-200"
          style={{
            background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), ${glowColor}, transparent 70%)`,
            opacity: "var(--mo, 0)",
          }}
        />
      )}

      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}
