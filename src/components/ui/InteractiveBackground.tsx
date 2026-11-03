"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking
    let mouseX = -1000;
    let mouseY = -1000;
    const mouseRadius = 180;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (containerRef.current) {
        containerRef.current.style.setProperty("--cursor-x", `${mouseX}px`);
        containerRef.current.style.setProperty("--cursor-y", `${mouseY}px`);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Generate responsive particle constellation
    const particleCount = Math.min(Math.floor(width / 22), 68);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const alpha = Math.random() * 0.35 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        size: Math.random() * 1.8 + 1.2,
        alpha,
        baseAlpha: alpha,
      });
    }

    let tick = 0;

    // 60fps render loop
    const render = () => {
      tick += 0.018;
      ctx.clearRect(0, 0, width, height);

      const violetRgb = "167, 139, 250"; // Electric Violet
      const cyanRgb = "56, 189, 248";   // Cyber Sky Cyan
      const indigoRgb = "139, 92, 246";

      // ── 1. Cyber Horizon Wave Grid (Genesis FX aesthetic) ──
      // Render undulating perspective wave lines across bottom half
      const rows = 12;
      const cols = 28;
      const horizonY = height * 0.52;
      const gridDepth = height * 0.48;

      ctx.save();
      for (let r = 0; r < rows; r++) {
        const rowProgress = (r + 1) / rows; // 0 (near horizon) to 1 (screen bottom)
        // Perspective exponent
        const rowY = horizonY + Math.pow(rowProgress, 1.8) * gridDepth;
        const lineAlpha = Math.pow(rowProgress, 1.4) * 0.22;

        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const colProgress = c / cols; // 0 to 1
          // Spread wider as rowProgress increases (perspective vanishing point)
          const spreadFactor = 0.35 + rowProgress * 0.95;
          const x = (colProgress - 0.5) * (width * spreadFactor) + width / 2;

          // Undulating sine wave
          const wave =
            Math.sin(tick * 1.8 + r * 0.6 + c * 0.35) * 14 * rowProgress +
            Math.cos(tick * 1.2 + c * 0.5) * 8 * rowProgress;

          // Cursor displacement
          const dxM = mouseX - x;
          const dyM = mouseY - (rowY + wave);
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          let cursorLift = 0;
          if (distM < mouseRadius) {
            cursorLift = (1 - distM / mouseRadius) * -24;
          }

          const finalY = rowY + wave + cursorLift;

          if (c === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }

        ctx.strokeStyle = `rgba(${violetRgb}, ${lineAlpha})`;
        ctx.lineWidth = 0.8 + rowProgress * 0.6;
        ctx.stroke();
      }

      // Longitudinal perspective rays from horizon
      for (let c = 0; c <= cols; c += 2) {
        const colProgress = c / cols;
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const rowProgress = (r + 1) / rows;
          const rowY = horizonY + Math.pow(rowProgress, 1.8) * gridDepth;
          const spreadFactor = 0.35 + rowProgress * 0.95;
          const x = (colProgress - 0.5) * (width * spreadFactor) + width / 2;
          const wave =
            Math.sin(tick * 1.8 + r * 0.6 + c * 0.35) * 14 * rowProgress +
            Math.cos(tick * 1.2 + c * 0.5) * 8 * rowProgress;

          const dxM = mouseX - x;
          const dyM = mouseY - (rowY + wave);
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          let cursorLift = 0;
          if (distM < mouseRadius) {
            cursorLift = (1 - distM / mouseRadius) * -24;
          }

          const finalY = rowY + wave + cursorLift;
          if (r === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }
        ctx.strokeStyle = `rgba(${indigoRgb}, 0.08)`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      ctx.restore();

      // ── 2. Dynamic Floating Particle Constellation ──────────
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce at canvas edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gentle breathing alpha
        p.alpha = p.baseAlpha + Math.sin(tick + i) * 0.12;

        // Draw particle dot with neon glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${violetRgb}, ${Math.max(0.1, p.alpha)})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${violetRgb}, 0.6)`;
        ctx.fill();

        // Connect particle to mouse cursor
        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseRadius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          const connectAlpha = (1 - distMouse / mouseRadius) * 0.45;
          ctx.strokeStyle = `rgba(${violetRgb}, ${connectAlpha})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgba(${violetRgb}, 0.5)`;
          ctx.stroke();
        }

        // Connect particle to neighbor particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 125) * 0.22;
            ctx.strokeStyle = `rgba(${indigoRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Dynamic Cursor Spotlight Follower */}
      <div
        className="absolute inset-0 opacity-[0.2] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(700px circle at var(--cursor-x, 50%) var(--cursor-y, 35%), rgba(167, 139, 250, 0.45), transparent 70%)",
        }}
      />

      {/* Ambient Top Nebula Gradient */}
      <div
        className="absolute top-0 inset-x-0 h-96 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, rgba(139, 92, 246, 0.5), transparent 70%)",
        }}
      />

      {/* Interactive 60fps Particle & 3D Wave Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle Cyber Grid Texture */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
    </div>
  );
}
