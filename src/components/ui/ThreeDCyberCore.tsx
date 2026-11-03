"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cpu, ShieldCheck, Zap, Activity } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  a: number;
  b: number;
}

export default function ThreeDCyberCore() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeMetric, setActiveMetric] = useState<string>("Sub-120ms");
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 520);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 520);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // ── Generate 3D Icosahedron Core Vertices ─────────────────
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio 1.618
    const baseScale = Math.min(width, height) * 0.28;

    const rawVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },

      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },

      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ];

    // Normalize and scale vertices
    const coreVertices: Point3D[] = rawVertices.map((v) => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      return {
        x: (v.x / len) * baseScale,
        y: (v.y / len) * baseScale,
        z: (v.z / len) * baseScale,
      };
    });

    // Inner core octahedron
    const innerScale = baseScale * 0.45;
    const innerVertices: Point3D[] = [
      { x: innerScale, y: 0, z: 0 },
      { x: -innerScale, y: 0, z: 0 },
      { x: 0, y: innerScale, z: 0 },
      { x: 0, y: -innerScale, z: 0 },
      { x: 0, y: 0, z: innerScale },
      { x: 0, y: 0, z: -innerScale },
    ];

    // ── Precompute Edges ─────────────────────────────────────
    const coreEdges: Edge[] = [];
    const threshold = baseScale * 1.15;
    for (let i = 0; i < coreVertices.length; i++) {
      for (let j = i + 1; j < coreVertices.length; j++) {
        const dx = coreVertices[i].x - coreVertices[j].x;
        const dy = coreVertices[i].y - coreVertices[j].y;
        const dz = coreVertices[i].z - coreVertices[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist <= threshold) {
          coreEdges.push({ a: i, b: j });
        }
      }
    }

    const innerEdges: Edge[] = [
      { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 0, b: 5 },
      { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 5 },
      { a: 2, b: 4 }, { a: 4, b: 3 }, { a: 3, b: 5 }, { a: 5, b: 2 },
    ];

    // Orbital ring particles
    const ringCount = 36;
    const ringRadius1 = baseScale * 1.55;
    const ringRadius2 = baseScale * 1.85;

    // ── Rotation state ───────────────────────────────────────
    let rotX = 0.35;
    let rotY = 0.55;
    let velX = 0.003;
    let velY = 0.004;

    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const dx = clientX - startX;
      const dy = clientY - startY;
      startX = clientX;
      startY = clientY;

      rotY += dx * 0.007;
      rotX += dy * 0.007;
      velY = dx * 0.002;
      velX = dy * 0.002;
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const cElem = canvas;
    cElem.addEventListener("mousedown", onPointerDown);
    cElem.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);

    // ── 3D Projection & Matrix Math ──────────────────────────
    const project = (p: Point3D, cx: number, cy: number, fov: number = 700) => {
      // Rotate around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = p.y * cosX - p.z * sinX;
      const z1 = p.y * sinX + p.z * cosX;

      // Rotate around Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x2 = p.x * cosY + z1 * sinY;
      const z2 = -p.x * sinY + z1 * cosY;

      // Camera distance offset
      const zCam = z2 + 600;
      const scale = fov / Math.max(150, zCam);

      return {
        x: cx + x2 * scale,
        y: cy + y1 * scale,
        z: z2,
        scale,
      };
    };

    let tick = 0;

    // ── Render Loop ──────────────────────────────────────────
    const render = () => {
      tick += 0.015;

      if (!isDragging) {
        rotX += velX;
        rotY += velY;
        velX *= 0.96;
        velY *= 0.96;
        if (Math.abs(velX) < 0.0025) velX = 0.0025;
        if (Math.abs(velY) < 0.0035) velY = 0.0035;
      }

      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // 1. Ambient Central Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, baseScale * 1.6);
      glowGrad.addColorStop(0, "rgba(167, 139, 250, 0.22)");
      glowGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.08)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Orbital Gyroscope Ring 1 (X-Z plane inclined)
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i <= ringCount; i++) {
        const theta = (i / ringCount) * Math.PI * 2;
        const ringP: Point3D = {
          x: Math.cos(theta) * ringRadius1,
          y: Math.sin(theta) * (ringRadius1 * 0.25) * Math.sin(tick),
          z: Math.sin(theta) * ringRadius1,
        };
        const proj = project(ringP, cx, cy);
        if (i === 0) ctx.moveTo(proj.x, proj.y);
        else ctx.lineTo(proj.x, proj.y);
      }
      ctx.strokeStyle = "rgba(167, 139, 250, 0.25)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.restore();

      // Orbital Gyroscope Ring 2 (Y-Z plane inclined)
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i <= ringCount; i++) {
        const theta = (i / ringCount) * Math.PI * 2;
        const ringP: Point3D = {
          x: Math.sin(theta) * (ringRadius2 * 0.3) * Math.cos(tick * 0.8),
          y: Math.cos(theta) * ringRadius2,
          z: Math.sin(theta) * ringRadius2,
        };
        const proj = project(ringP, cx, cy);
        if (i === 0) ctx.moveTo(proj.x, proj.y);
        else ctx.lineTo(proj.x, proj.y);
      }
      ctx.strokeStyle = "rgba(56, 189, 248, 0.2)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 5]);
      ctx.stroke();
      ctx.restore();

      // Satellite Data Packets along rings
      const satTheta1 = tick * 1.5;
      const satP1: Point3D = {
        x: Math.cos(satTheta1) * ringRadius1,
        y: Math.sin(satTheta1) * (ringRadius1 * 0.25) * Math.sin(tick),
        z: Math.sin(satTheta1) * ringRadius1,
      };
      const satProj1 = project(satP1, cx, cy);
      ctx.beginPath();
      ctx.arc(satProj1.x, satProj1.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#a78bfa";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#a78bfa";
      ctx.fill();
      ctx.shadowBlur = 0;

      // Project Inner Core Vertices
      const projectedInner = innerVertices.map((v) => project(v, cx, cy));

      // Draw Inner Core Wireframe (Cyan)
      ctx.save();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
      ctx.lineWidth = 1;
      for (const e of innerEdges) {
        const p1 = projectedInner[e.a];
        const p2 = projectedInner[e.b];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      ctx.restore();

      // Project Outer Icosahedron Vertices
      const projectedOuter = coreVertices.map((v) => project(v, cx, cy));

      // Draw Outer Core Laser Edges (Electric Violet with depth shading)
      ctx.save();
      for (const e of coreEdges) {
        const p1 = projectedOuter[e.a];
        const p2 = projectedOuter[e.b];
        const avgZ = (p1.z + p2.z) / 2;
        const normZ = (avgZ + baseScale) / (baseScale * 2); // 0 (far) to 1 (near)
        const alpha = Math.max(0.15, Math.min(0.85, normZ * 0.75 + 0.1));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
        ctx.lineWidth = normZ > 0.5 ? 1.5 : 0.8;
        ctx.shadowBlur = normZ > 0.6 ? 6 : 0;
        ctx.shadowColor = "rgba(167, 139, 250, 0.6)";
        ctx.stroke();
      }
      ctx.restore();

      // Draw Glowing Vertex Nodes
      for (let i = 0; i < projectedOuter.length; i++) {
        const p = projectedOuter[i];
        const normZ = (p.z + baseScale) / (baseScale * 2);
        const radius = Math.max(2, normZ * 4.5);
        const alpha = Math.max(0.3, Math.min(1, normZ * 0.9 + 0.1));

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 243, 255, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(167, 139, 250, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Inner Core Vertices
      for (const p of projectedInner) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      cElem.removeEventListener("mousedown", onPointerDown);
      cElem.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center select-none"
    >
      {/* 3D Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 touch-none"
      />

      {/* Floating HUD Telemetry Badges */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
            Cyber Core Active
          </span>
        </div>
      </div>

      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
          <Activity size={12} className="text-violet-400" />
          <span className="text-[10px] font-mono text-slate-300">
            60 FPS · 3D Engine
          </span>
        </div>
      </div>

      {/* Bottom Floating Telemetry Pills */}
      <div className="absolute bottom-4 inset-x-4 z-20 flex flex-wrap items-center justify-center gap-2 pointer-events-none">
        <div className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/60 backdrop-blur-md text-[10px] font-mono text-violet-200 shadow-md">
          <span className="text-slate-400">Arch:</span> Zero-Debt Cloud
        </div>
        <div className="px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/60 backdrop-blur-md text-[10px] font-mono text-sky-200 shadow-md">
          <span className="text-slate-400">Latency:</span> &lt;120ms
        </div>
        <div className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md text-[10px] font-mono text-emerald-200 shadow-md">
          <span className="text-slate-400">Ownership:</span> 100% Client IP
        </div>
      </div>

      {/* Interactive Drag Hint */}
      <div
        className={`absolute inset-x-0 bottom-16 text-center z-20 transition-opacity duration-300 pointer-events-none ${
          isInteracting ? "opacity-0" : "opacity-60"
        }`}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
          Drag to Rotate 3D Core
        </span>
      </div>
    </div>
  );
}

