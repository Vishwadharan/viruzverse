"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;
    const mouseRadius = 150;
    const mouseRadiusSq = mouseRadius * mouseRadius;
    const linkDistSq = 120 * 120;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    const particleCount = Math.min(Math.floor(width / 46), 30);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.4 + 0.8,
        baseAlpha: Math.random() * 0.3 + 0.2,
      });
    }

    let tick = 0;
    let lastFrame = 0;
    const FRAME_INTERVAL = 1000 / 30; // Smooth 30fps background saves 50% GPU load

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (document.hidden || now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;

      tick += 0.014;
      ctx.clearRect(0, 0, width, height);

      const violetRgb = "167, 139, 250";
      const indigoRgb = "99, 102, 241";

      // Lightweight perspective horizon grid
      const horizonY = height * 0.46;
      const gridDepth = height - horizonY;
      const rows = 8;

      for (let r = 0; r < rows; r++) {
        const rowProgress = (r + 1) / rows;
        const y = horizonY + Math.pow(rowProgress, 1.8) * gridDepth;
        const lineAlpha = 0.03 + rowProgress * 0.08;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = `rgba(${violetRgb}, ${lineAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Floating particle constellation (zero shadowBlur for fast 60fps page scroll)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const alpha = Math.max(0.1, p.baseAlpha + Math.sin(tick + i) * 0.1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${violetRgb}, ${alpha})`;
        ctx.fill();

        const dxM = mouseX - p.x;
        const dyM = mouseY - p.y;
        const distMSq = dxM * dxM + dyM * dyM;
        if (distMSq < mouseRadiusSq) {
          const connectAlpha = (1 - Math.sqrt(distMSq) / mouseRadius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(${violetRgb}, ${connectAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < linkDistSq) {
            const lineAlpha = (1 - Math.sqrt(dSq) / 120) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${indigoRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none will-change-transform"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      <div
        className="absolute top-0 inset-x-0 h-80 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, rgba(139, 92, 246, 0.45), transparent 70%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
    </div>
  );
}
