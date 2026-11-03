"use client";

import React, { useRef, useState, useEffect } from "react";

interface TiltCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard3D({
  children,
  className = "",
  glowColor = "rgba(167, 139, 250, 0.2)",
  ...props
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    glareX: "50%",
    glareY: "50%",
    glareOpacity: 0,
  });

  useEffect(() => {
    // Detect mobile touch devices to disable jittery 3D transforms on phones
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(hover: none)").matches || window.innerWidth < 768);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // gentle 5 deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      glareX: `${(x / rect.width) * 100}%`,
      glareY: `${(y / rect.height) * 100}%`,
      glareOpacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      glareX: "50%",
      glareY: "50%",
      glareOpacity: 0,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isTouch ? "none" : style.transform,
        transition: isTouch ? "none" : "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: isTouch ? "flat" : "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d17] shadow-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_12px_36px_rgba(0,0,0,0.8)] ${className}`}
      {...props}
    >
      {/* Top Glass Specular Reflection Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Dynamic Cursor Glare Sheen (Desktop only) */}
      {!isTouch && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${style.glareX} ${style.glareY}, ${glowColor}, transparent 65%)`,
            opacity: style.glareOpacity,
          }}
        />
      )}

      <div className={`relative z-10 ${isTouch ? "" : "[transform:translateZ(8px)]"}`}>{children}</div>
    </div>
  );
}

