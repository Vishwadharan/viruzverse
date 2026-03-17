"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Magnetic3DButton({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width  / 2;
    const y = e.clientY - r.top  - r.height / 2;
    el.style.transform = `perspective(600px) rotateX(${-y * 0.1}deg) rotateY(${x * 0.1}deg) translateZ(8px) scale(1.03)`;
  };

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
  };

  const addRipple = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r    = el.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${e.clientX - r.left - size / 2}px;
      top:${e.clientY - r.top  - size / 2}px;
    `;
    el.appendChild(span);
    setTimeout(() => span.remove(), 700);
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 60%, #5b21b6 100%)",
      color: "#ffffff",
      boxShadow:
        "0 6px 28px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
      border: "1px solid rgba(109,40,217,0.7)",
    },
    outline: {
      background: "#ffffff",
      color: "#7c3aed",
      border: "1.5px solid #c4b5fd",
      boxShadow:
        "0 2px 12px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
    },
    ghost: {
      background: "rgba(255,255,255,0.65)",
      color: "#374151",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.9)",
      boxShadow:
        "0 2px 10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
    },
  };

  const inner = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseDown={addRipple}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center gap-2
        px-7 py-3.5 rounded-2xl text-[14px] font-bold
        cursor-pointer overflow-hidden select-none
        transition-[transform,box-shadow] duration-150
        ${className}
      `}
      style={{ ...styles[variant], transformStyle: "preserve-3d" }}
    >
      {/* Shine overlay */}
      <span
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </div>
  );

  // ── Only render <a> if href is a valid non-empty string ──
  if (href && href.trim() !== "" && !href.includes("undefined"))
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="inline-block"
        suppressHydrationWarning
      >
        {inner}
      </a>
    );

  return inner;
}
