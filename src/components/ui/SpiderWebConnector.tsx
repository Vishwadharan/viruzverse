"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface WebShot {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export default function SpiderWebConnector() {
  const router = useRouter();
  const pathname = usePathname();
  const [shot, setShot] = useState<WebShot | null>(null);

  const triggerWeb = useCallback(
    (startX: number, startY: number) => {
      const desktopBtn = document.getElementById("navbar-connect-btn");
      const mobileBtn = document.getElementById("navbar-mobile-trigger");

      const desktopRect = desktopBtn?.getBoundingClientRect();
      const isDesktopVisible =
        desktopBtn && desktopRect && desktopRect.width > 0 && desktopRect.height > 0;

      const targetEl = isDesktopVisible ? desktopBtn : mobileBtn;
      const targetRect = targetEl?.getBoundingClientRect();

      let endX = window.innerWidth - 28;
      let endY = 30;

      if (targetRect && targetRect.width > 0 && targetRect.height > 0) {
        endX = targetRect.left + targetRect.width / 2;
        endY = targetRect.top + targetRect.height / 2;
      }

      const id = Date.now();
      setShot({ id, startX, startY, endX, endY });

      setTimeout(() => {
        if (targetEl) {
          targetEl.classList.add(
            "ring-2",
            "ring-[#D71920]",
            "shadow-[0_0_24px_rgba(215,25,32,0.75)]",
            "scale-105"
          );
          setTimeout(() => {
            targetEl.classList.remove(
              "ring-2",
              "ring-[#D71920]",
              "shadow-[0_0_24px_rgba(215,25,32,0.75)]",
              "scale-105"
            );
          }, 340);
        }
      }, 260);

      setTimeout(() => {
        router.push("/contact");
        setTimeout(() => setShot(null), 200);
      }, 500);
    },
    [router]
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href !== "/contact") return;

      if (
        target.id === "navbar-connect-btn" ||
        target.closest("header") ||
        pathname === "/contact"
      )
        return;

      e.preventDefault();
      const rect = target.getBoundingClientRect();
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      triggerWeb(startX, startY);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname, triggerWeb]);

  if (!shot) return null;

  const dx = shot.endX - shot.startX;
  const dy = shot.endY - shot.startY;
  const dist = Math.hypot(dx, dy) || 1;

  // Gentle natural silk arc
  const ctrlX = shot.startX + dx * 0.45 - Math.min(55, dist * 0.08);
  const ctrlY = shot.startY + dy * 0.45;
  const silkPath = `M ${shot.startX} ${shot.startY} Q ${ctrlX} ${ctrlY} ${shot.endX} ${shot.endY}`;

  // Delicate 6-spoke, 2-ring real web anchor at target
  const SPOKES = 6;
  const R = 36;
  const spokes = Array.from({ length: SPOKES }).map((_, i) => {
    const angle = (i * Math.PI * 2) / SPOKES;
    return {
      x1: shot.endX,
      y1: shot.endY,
      x2: shot.endX + Math.cos(angle) * R,
      y2: shot.endY + Math.sin(angle) * R,
    };
  });

  const rings = [14, 28].map((r) => {
    let d = "";
    for (let i = 0; i < SPOKES; i++) {
      const a1 = (i * Math.PI * 2) / SPOKES;
      const a2 = ((i + 1) * Math.PI * 2) / SPOKES;
      const aMid = (a1 + a2) / 2;
      const x1 = shot.endX + Math.cos(a1) * r;
      const y1 = shot.endY + Math.sin(a1) * r;
      const x2 = shot.endX + Math.cos(a2) * r;
      const y2 = shot.endY + Math.sin(a2) * r;
      const cx = shot.endX + Math.cos(aMid) * (r * 0.84);
      const cy = shot.endY + Math.sin(aMid) * (r * 0.84);
      if (i === 0) d += `M ${x1} ${y1} `;
      d += `Q ${cx} ${cy} ${x2} ${y2} `;
    }
    return d + "Z";
  });

  return (
    <AnimatePresence>
      <motion.div
        key={shot.id}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 pointer-events-none z-[9998]"
        aria-hidden="true"
      >
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="elegantWebGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D71920" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#DF1F2D" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Single Fine Silk Strand */}
          <motion.path
            d={silkPath}
            fill="none"
            stroke="url(#elegantWebGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Delicate 6-Spoke Web Anchor */}
          {spokes.map((s, i) => (
            <motion.line
              key={i}
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke="rgba(215, 25, 32, 0.55)"
              strokeWidth="0.9"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.16, delay: 0.22 }}
            />
          ))}

          {/* 2 Fine Scalloped Silk Rings */}
          {rings.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="rgba(223, 31, 45, 0.6)"
              strokeWidth="0.9"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.85 }}
              style={{ transformOrigin: `${shot.endX}px ${shot.endY}px` }}
              transition={{ duration: 0.18, delay: 0.24 + i * 0.03 }}
            />
          ))}

          {/* Subtle Latch Dot */}
          <motion.circle
            cx={shot.endX}
            cy={shot.endY}
            r="3.2"
            fill="#D92B20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [0, 0.95, 0.8] }}
            transition={{ duration: 0.2, delay: 0.24 }}
          />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}
