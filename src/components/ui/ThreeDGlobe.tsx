"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Radio, Shield, Activity } from "lucide-react";

interface NodePoint {
  lat: number;
  lng: number;
  label: string;
  ping: string;
}

const GLOBAL_HUBS: NodePoint[] = [
  { lat: 20.59, lng: 78.96, label: "India (National Core)", ping: "2ms" },
  { lat: 11.01, lng: 76.95, label: "Coimbatore (HQ)", ping: "1ms" },
  { lat: 19.07, lng: 72.87, label: "Mumbai Gateway", ping: "5ms" },
  { lat: 12.97, lng: 77.59, label: "Bengaluru Hub", ping: "3ms" },
  { lat: 37.77, lng: -122.41, label: "San Francisco", ping: "14ms" },
  { lat: 40.71, lng: -74.0, label: "New York", ping: "22ms" },
  { lat: 50.11, lng: 8.68, label: "Frankfurt", ping: "24ms" },
  { lat: 1.35, lng: 103.81, label: "Singapore", ping: "16ms" },
  { lat: 35.67, lng: 139.65, label: "Tokyo", ping: "28ms" },
];

export default function ThreeDGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeHub, setActiveHub] = useState<NodePoint>(GLOBAL_HUBS[0]); // Default to India
  const rotationRef = useRef({ rotX: 0.22, rotY: 1.45, targetRotX: 0.22, targetRotY: 1.45 }); // Initial focus on India
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    // Grand 3D Globe Dimensions (Commanding Presence like Genesis FX)
    const isMobile = window.innerWidth < 640;
    const parentWidth = canvas.parentElement?.clientWidth || 550;
    let size = isMobile ? Math.min(parentWidth - 16, 380) : Math.min(parentWidth, 680);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const radius = size * (isMobile ? 0.38 : 0.43);
    const cx = size / 2;
    const cy = size / 2;

    // Precompute 3D sphere points (Denser 460-point Fibonacci sphere)
    const POINT_COUNT = 460;
    const points: { x: number; y: number; z: number; isMajor?: boolean }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        isMajor: i % 5 === 0,
      });
    }

    // Convert lat/lng to 3D Cartesian coordinates
    const hubPoints = GLOBAL_HUBS.map((hub) => {
      const phi = (90 - hub.lat) * (Math.PI / 180);
      const theta = (hub.lng + 180) * (Math.PI / 180);
      return {
        ...hub,
        x: -(radius * Math.sin(phi) * Math.cos(theta)),
        y: radius * Math.cos(phi),
        z: radius * Math.sin(phi) * Math.sin(theta),
      };
    });

    // Mouse drag handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) {
        // Subtle tilt with mouse move
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / size - 0.5;
        const my = (e.clientY - rect.top) / size - 0.5;
        rotationRef.current.targetRotX = 0.25 - my * 0.35;
        return;
      }
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      rotationRef.current.targetRotY += dx * 0.008;
      rotationRef.current.targetRotX += dy * 0.008;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Auto switch highlighted hub every 3.5s
    let hubIndex = 0;
    const hubTimer = setInterval(() => {
      hubIndex = (hubIndex + 1) % GLOBAL_HUBS.length;
      setActiveHub(GLOBAL_HUBS[hubIndex]);
    }, 3500);

    // Render loop
    let tick = 0;
    const render = () => {
      tick += 0.015;

      // Auto rotation
      if (!isDraggingRef.current) {
        rotationRef.current.targetRotY += 0.0045;
      }

      // Smooth dampening
      rotationRef.current.rotX += (rotationRef.current.targetRotX - rotationRef.current.rotX) * 0.08;
      rotationRef.current.rotY += (rotationRef.current.targetRotY - rotationRef.current.rotY) * 0.08;

      const cosX = Math.cos(rotationRef.current.rotX);
      const sinX = Math.sin(rotationRef.current.rotX);
      const cosY = Math.cos(rotationRef.current.rotY);
      const sinY = Math.sin(rotationRef.current.rotY);

      ctx.clearRect(0, 0, size, size);

      // ── Outer Glowing Atmosphere Halo ──
      const haloGrad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.25);
      haloGrad.addColorStop(0, "rgba(124, 58, 237, 0.16)");
      haloGrad.addColorStop(0.5, "rgba(167, 139, 250, 0.06)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // ── 3D Orbital Energy Ring ──
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.35 + Math.sin(tick * 0.4) * 0.05);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.28, radius * 0.42, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(124, 58, 237, 0.35)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Traveling satellite on orbital ring
      const satAngle = tick * 1.2;
      const satX = Math.cos(satAngle) * radius * 1.28;
      const satY = Math.sin(satAngle) * radius * 0.42;
      ctx.beginPath();
      ctx.arc(satX, satY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#a78bfa";
      ctx.fill();
      ctx.restore();

      // ── Transform and Project Points ──
      const projectedPoints: { x2d: number; y2d: number; z: number; isMajor?: boolean }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective scale
        const fov = 420;
        const scale = fov / (fov + z2);
        const x2d = cx + x1 * scale;
        const y2d = cy + y2 * scale;

        projectedPoints.push({ x2d, y2d, z: z2, isMajor: p.isMajor });
      }

      // Sort by Z for proper depth
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw wireframe latitude rings
      ctx.strokeStyle = "rgba(124, 58, 237, 0.12)";
      ctx.lineWidth = 0.8;
      [-0.6, -0.3, 0, 0.3, 0.6].forEach((ringY) => {
        const rY = ringY * radius;
        const ringRad = Math.sqrt(radius * radius - rY * rY);
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.2) {
          const rx = Math.cos(a) * ringRad;
          const rz = Math.sin(a) * ringRad;
          const x1 = rx * cosY + rz * sinY;
          const z1 = -rx * sinY + rz * cosY;
          const y2 = rY * cosX - z1 * sinX;
          const z2 = rY * sinX + z1 * cosX;
          const scale = 420 / (420 + z2);
          const px = cx + x1 * scale;
          const py = cy + y2 * scale;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      });

      // Render 3D Sphere Particles
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const isFront = p.z > -10;
        const alpha = isFront ? Math.min(1, (p.z + radius) / (2 * radius) + 0.25) : 0.08;
        const ptSize = p.isMajor ? (isFront ? 2.2 : 1.2) : isFront ? 1.4 : 0.8;

        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, ptSize, 0, Math.PI * 2);
        ctx.fillStyle = isFront
          ? p.isMajor
            ? `rgba(255, 255, 255, ${alpha})`
            : `rgba(167, 139, 250, ${alpha * 0.9})`
          : `rgba(124, 58, 237, ${alpha})`;
        if (p.isMajor && isFront) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#a78bfa";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // ── Render Global Hubs & Connection Arcs ──
      hubPoints.forEach((hub) => {
        const x1 = hub.x * cosY + hub.z * sinY;
        const z1 = -hub.x * sinY + hub.z * cosY;
        const y2 = hub.y * cosX - z1 * sinX;
        const z2 = hub.y * sinX + z1 * cosX;

        const isFront = z2 > 0;
        if (!isFront) return;

        const scale = 420 / (420 + z2);
        const x2d = cx + x1 * scale;
        const y2d = cy + y2 * scale;

        const isCurrentActive = hub.label === activeHub.label;

        // Pulsing rings on active hub
        ctx.beginPath();
        ctx.arc(x2d, y2d, isCurrentActive ? 6 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isCurrentActive ? "#10b981" : "#a78bfa";
        ctx.shadowBlur = 12;
        ctx.shadowColor = isCurrentActive ? "#10b981" : "#a78bfa";
        ctx.fill();

        if (isCurrentActive) {
          const pulse = (Math.sin(tick * 4) + 1) * 4;
          ctx.beginPath();
          ctx.arc(x2d, y2d, 8 + pulse, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Text label
          ctx.font = "bold 10px sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 4;
          ctx.shadowColor = "#000";
          ctx.fillText(`${hub.label} (${hub.ping})`, x2d + 12, y2d + 3);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(hubTimer);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeHub]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing transition-transform duration-300"
      />

      {/* Floating HUD Telemetry Badge 1: Top Right (Desktop) */}
      <div className="hidden sm:flex absolute top-2 right-4 z-20 items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-2.5 backdrop-blur-md shadow-xl text-xs font-mono">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
          <Activity size={14} className="animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Global Mesh</p>
          <p className="font-bold text-white text-[11px]">8 Edge Regions Active</p>
        </div>
      </div>

      {/* Floating HUD Telemetry Badge 2: Bottom Left (Desktop) */}
      <div className="hidden sm:flex absolute bottom-2 left-4 z-20 items-center gap-2.5 rounded-xl border border-white/10 bg-slate-950/80 p-2.5 backdrop-blur-md shadow-xl text-xs font-mono">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
          <Radio size={14} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white text-[11px]">{activeHub.label}</span>
          </div>
          <p className="text-[10px] text-emerald-400">P99 Latency: {activeHub.ping}</p>
        </div>
      </div>

      {/* Mobile Telemetry Strip (Stacked cleanly below canvas on phone) */}
      <div className="flex sm:hidden items-center justify-between gap-2 w-full max-w-[320px] mt-2 px-1">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-950/80 text-[10px] font-mono text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>8 Global Regions</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-950/80 text-[10px] font-mono text-emerald-400">
          <span>{activeHub.label}: {activeHub.ping}</span>
        </div>
      </div>
    </div>
  );
}

