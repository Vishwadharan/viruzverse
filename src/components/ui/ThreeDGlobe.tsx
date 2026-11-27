"use client";

import { useEffect, useRef, useState } from "react";
import { Radio, Activity } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface NodePoint {
  lat: number;
  lng: number;
  label: string;
  ping: string;
}

const GLOBAL_HUBS: NodePoint[] = [
  { lat: 11.01, lng: 76.95, label: "Coimbatore (HQ)", ping: "1ms" },
  { lat: 19.07, lng: 72.87, label: "Mumbai Gateway", ping: "5ms" },
  { lat: 12.97, lng: 77.59, label: "Bengaluru Hub", ping: "3ms" },
  { lat: 1.35, lng: 103.81, label: "Singapore", ping: "16ms" },
  { lat: 35.67, lng: 139.65, label: "Tokyo", ping: "28ms" },
  { lat: 50.11, lng: 8.68, label: "Frankfurt", ping: "24ms" },
  { lat: 40.71, lng: -74.0, label: "New York", ping: "22ms" },
  { lat: 37.77, lng: -122.41, label: "San Francisco", ping: "14ms" },
];

// Simplified geographical continent polygons [lat, lng]
const CONTINENTS: Array<Array<[number, number]>> = [
  // North America
  [
    [70, -162], [71, -135], [68, -105], [62, -92], [58, -78], [52, -56],
    [45, -62], [41, -70], [35, -75], [25, -80], [29, -85], [29, -95],
    [21, -97], [16, -93], [14, -84], [9, -79], [8, -83], [15, -93],
    [19, -105], [24, -110], [32, -117], [38, -123], [48, -125], [58, -137],
    [60, -150], [56, -162], [64, -166],
  ],
  // Greenland
  [
    [82, -32], [78, -18], [70, -22], [60, -44], [66, -53], [76, -68], [81, -55],
  ],
  // South America
  [
    [11, -74], [10, -62], [5, -52], [0, -50], [-5, -35], [-13, -38],
    [-23, -42], [-34, -53], [-42, -64], [-53, -68], [-54, -73], [-44, -75],
    [-33, -72], [-18, -71], [-5, -81], [2, -78], [8, -77],
  ],
  // Europe
  [
    [36, -9], [43, -9], [43, -2], [48, -5], [51, 2], [54, 8], [58, 6],
    [63, 6], [70, 20], [70, 31], [66, 42], [60, 60], [50, 55], [45, 42],
    [42, 29], [40, 24], [38, 22], [40, 18], [44, 12], [41, 16], [38, 15],
    [44, 8], [41, 2], [36, -5],
  ],
  // UK & Ireland
  [
    [50, -5], [55, -6], [58, -5], [58, -2], [53, 1], [51, 1],
  ],
  // Africa
  [
    [36, -6], [37, 10], [32, 15], [31, 32], [22, 37], [12, 44], [11, 51],
    [2, 45], [-6, 39], [-15, 41], [-26, 33], [-34, 26], [-34, 18], [-22, 14],
    [-12, 13], [-2, 9], [4, 9], [5, -4], [6, -11], [15, -17], [24, -16], [32, -9],
  ],
  // Madagascar
  [
    [-12, 49], [-18, 49], [-25, 47], [-24, 44], [-16, 44],
  ],
  // Asia (including Middle East, India, SE Asia, China, Siberia)
  [
    [42, 29], [45, 42], [50, 55], [60, 60], [68, 66], [73, 85], [76, 105],
    [72, 135], [68, 175], [60, 165], [53, 141], [44, 135], [39, 128], [35, 129],
    [37, 122], [32, 121], [23, 117], [20, 107], [12, 109], [9, 105], [13, 100],
    [3, 103], [7, 98], [16, 97], [22, 91], [20, 86], [13, 80], [8, 77],
    [15, 74], [22, 69], [25, 62], [26, 56], [29, 49], [25, 51], [22, 59],
    [13, 45], [16, 41], [28, 34], [36, 36], [37, 27],
  ],
  // Japan
  [
    [31, 130], [35, 136], [38, 141], [44, 145], [44, 141], [37, 137], [34, 131],
  ],
  // Indonesia / Maritime SE Asia
  [
    [5, 95], [-6, 105], [-8, 115], [-2, 117], [4, 118], [1, 109],
  ],
  // Australia
  [
    [-12, 130], [-12, 136], [-15, 136], [-12, 142], [-18, 146], [-26, 153],
    [-37, 150], [-38, 142], [-34, 135], [-32, 126], [-34, 115], [-23, 113], [-17, 122],
  ],
];

function isPointInPoly(lat: number, lng: number, poly: Array<[number, number]>): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const yi = poly[i][0];
    const xi = poly[i][1];
    const yj = poly[j][0];
    const xj = poly[j][1];

    const intersect =
      yi > lat !== yj > lat &&
      lng < ((xj - xi) * (lat - yi)) / (yj - yi + 1e-9) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function isLand(lat: number, lng: number): boolean {
  for (let i = 0; i < CONTINENTS.length; i++) {
    if (isPointInPoly(lat, lng, CONTINENTS[i])) return true;
  }
  return false;
}

function latLngTo3D(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: -(radius * Math.cos(phi)), // Negative so North (+lat) is UP on canvas
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

export default function ThreeDGlobe() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeHub, setActiveHub] = useState<NodePoint>(GLOBAL_HUBS[0]);
  // Start rotated so India / Asia / Europe are prominently visible
  const rotationRef = useRef({ rotX: 0.18, rotY: 0.25, targetRotX: 0.18, targetRotY: 0.25 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobile = window.innerWidth < 640;
    const isLaptop = window.innerWidth < 1280;
    const parentWidth = canvas.parentElement?.clientWidth || 480;
    const maxDesktop = isLaptop ? 440 : 500;
    const size = isMobile ? Math.min(parentWidth - 16, 340) : Math.min(parentWidth, maxDesktop);

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const radius = size * (isMobile ? 0.31 : 0.32);
    const cx = size / 2;
    const cy = size / 2;

    // Precompute geographical land points on the sphere
    const landPoints: { x: number; y: number; z: number; isCoastAccent: boolean }[] = [];
    const latStep = 4.2;
    for (let lat = -60; lat <= 82; lat += latStep) {
      const cosLat = Math.max(0.25, Math.cos((lat * Math.PI) / 180));
      const lngStep = latStep / cosLat;
      for (let lng = -180; lng < 180; lng += lngStep) {
        if (isLand(lat, lng)) {
          const pt = latLngTo3D(lat, lng, radius);
          landPoints.push({
            ...pt,
            isCoastAccent: Math.abs(Math.round(lat + lng)) % 7 === 0,
          });
        }
      }
    }

    const hubPoints = GLOBAL_HUBS.map((hub) => ({
      ...hub,
      ...latLngTo3D(hub.lat, hub.lng, radius),
    }));

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) {
        const rect = canvas.getBoundingClientRect();
        const my = (e.clientY - rect.top) / size - 0.5;
        rotationRef.current.targetRotX = 0.18 - my * 0.28;
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

    let hubIndex = 0;
    const hubTimer = setInterval(() => {
      hubIndex = (hubIndex + 1) % GLOBAL_HUBS.length;
      setActiveHub(GLOBAL_HUBS[hubIndex]);
    }, 3500);

    let tick = 0;
    const fov = 520;

    const project = (x: number, y: number, z: number, cosX: number, sinX: number, cosY: number, sinY: number) => {
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      const scale = fov / (fov + z2);
      return { x2d: cx + x1 * scale, y2d: cy + y2 * scale, z2 };
    };

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isVisible || document.hidden) return;
      tick += 0.015;

      if (!isDraggingRef.current) {
        rotationRef.current.targetRotY += 0.0038;
      }

      rotationRef.current.rotX += (rotationRef.current.targetRotX - rotationRef.current.rotX) * 0.08;
      rotationRef.current.rotY += (rotationRef.current.targetRotY - rotationRef.current.rotY) * 0.08;

      const cosX = Math.cos(rotationRef.current.rotX);
      const sinX = Math.sin(rotationRef.current.rotX);
      const cosY = Math.cos(rotationRef.current.rotY);
      const sinY = Math.sin(rotationRef.current.rotY);

      ctx.clearRect(0, 0, size, size);

      // ── Outer Atmosphere Glow ──
      const haloGrad = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.42);
      if (isLight) {
        haloGrad.addColorStop(0, "rgba(124, 58, 237, 0.22)");
        haloGrad.addColorStop(0.5, "rgba(167, 139, 250, 0.1)");
        haloGrad.addColorStop(1, "rgba(248, 250, 252, 0)");
      } else {
        haloGrad.addColorStop(0, "rgba(109, 40, 217, 0.2)");
        haloGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.06)");
        haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      }
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.42, 0, Math.PI * 2);
      ctx.fill();

      // ── 3D Ocean Sphere Base & Fresnel Rim ──
      const sphereGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.05,
        cx,
        cy,
        radius
      );
      if (isLight) {
        sphereGrad.addColorStop(0, "rgba(237, 233, 254, 0.92)");
        sphereGrad.addColorStop(0.55, "rgba(196, 181, 253, 0.55)");
        sphereGrad.addColorStop(0.92, "rgba(139, 92, 246, 0.45)");
        sphereGrad.addColorStop(1, "rgba(109, 40, 217, 0.65)");
      } else {
        sphereGrad.addColorStop(0, "rgba(30, 27, 75, 0.55)");
        sphereGrad.addColorStop(0.65, "rgba(15, 23, 42, 0.72)");
        sphereGrad.addColorStop(0.92, "rgba(9, 9, 20, 0.88)");
        sphereGrad.addColorStop(1, "rgba(139, 92, 246, 0.28)");
      }
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = isLight ? "rgba(109, 40, 217, 0.45)" : "rgba(167, 139, 250, 0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── Geographical Graticule (Latitude & Longitude Lines, front hemisphere) ──
      ctx.strokeStyle = isLight ? "rgba(109, 40, 217, 0.2)" : "rgba(139, 92, 246, 0.1)";
      ctx.lineWidth = 0.65;

      // Latitude parallels
      [-60, -30, 0, 30, 60].forEach((lat) => {
        ctx.beginPath();
        let penDown = false;
        for (let lng = -180; lng <= 180; lng += 8) {
          const p3 = latLngTo3D(lat, lng, radius);
          const p2 = project(p3.x, p3.y, p3.z, cosX, sinX, cosY, sinY);
          if (p2.z2 < 5) {
            if (!penDown) {
              ctx.moveTo(p2.x2d, p2.y2d);
              penDown = true;
            } else {
              ctx.lineTo(p2.x2d, p2.y2d);
            }
          } else {
            penDown = false;
          }
        }
        ctx.stroke();
      });

      // Longitude meridians
      for (let lng = -180; lng < 180; lng += 30) {
        ctx.beginPath();
        let penDown = false;
        for (let lat = -80; lat <= 80; lat += 8) {
          const p3 = latLngTo3D(lat, lng, radius);
          const p2 = project(p3.x, p3.y, p3.z, cosX, sinX, cosY, sinY);
          if (p2.z2 < 5) {
            if (!penDown) {
              ctx.moveTo(p2.x2d, p2.y2d);
              penDown = true;
            } else {
              ctx.lineTo(p2.x2d, p2.y2d);
            }
          } else {
            penDown = false;
          }
        }
        ctx.stroke();
      }

      // ── Project & Render Geographical Continent Dots ──
      const projectedLand: { x2d: number; y2d: number; z2: number; isCoastAccent: boolean }[] = [];
      for (let i = 0; i < landPoints.length; i++) {
        const lp = landPoints[i];
        const p2 = project(lp.x, lp.y, lp.z, cosX, sinX, cosY, sinY);
        projectedLand.push({ ...p2, isCoastAccent: lp.isCoastAccent });
      }

      projectedLand.sort((a, b) => b.z2 - a.z2);

      for (let i = 0; i < projectedLand.length; i++) {
        const p = projectedLand[i];
        const isFront = p.z2 < 8;
        if (!isFront) {
          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, 0.75, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? "rgba(124, 58, 237, 0.16)" : "rgba(99, 102, 241, 0.09)";
          ctx.fill();
          continue;
        }

        const depthNorm = Math.max(0, Math.min(1, -p.z2 / radius));
        const alpha = 0.35 + depthNorm * 0.65;
        const ptSize = p.isCoastAccent ? 1.55 : 1.25;

        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, ptSize, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? p.isCoastAccent
            ? `rgba(91, 33, 182, ${alpha})` // Deep royal purple highlight nodes
            : `rgba(124, 58, 237, ${alpha * 0.92})` // Vibrant purple land mass
          : p.isCoastAccent
            ? `rgba(125, 211, 252, ${alpha})`
            : `rgba(196, 181, 253, ${alpha})`;
        ctx.fill();
      }

      // ── Orbital Satellite Ring ──
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.28 + Math.sin(tick * 0.3) * 0.03);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.22, radius * 0.34, 0, 0, Math.PI * 2);
      ctx.strokeStyle = isLight ? "rgba(109, 40, 217, 0.42)" : "rgba(139, 92, 246, 0.28)";
      ctx.lineWidth = 0.9;
      ctx.stroke();

      const satAngle = tick * 1.1;
      const satX = Math.cos(satAngle) * radius * 1.22;
      const satY = Math.sin(satAngle) * radius * 0.34;
      ctx.beginPath();
      ctx.arc(satX, satY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? "#7c3aed" : "#e0e7ff";
      ctx.shadowBlur = 10;
      ctx.shadowColor = isLight ? "#8b5cf6" : "#38bdf8";
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // ── Render Real-World Hubs & Network Arcs ──
      const visibleHubs: { x2d: number; y2d: number; label: string; ping: string; isCurrentActive: boolean }[] = [];

      hubPoints.forEach((hub) => {
        const p2 = project(hub.x, hub.y, hub.z, cosX, sinX, cosY, sinY);
        if (p2.z2 >= 0) return;
        visibleHubs.push({
          x2d: p2.x2d,
          y2d: p2.y2d,
          label: hub.label,
          ping: hub.ping,
          isCurrentActive: hub.label === activeHub.label,
        });
      });

      if (visibleHubs.length > 1) {
        ctx.strokeStyle = "rgba(52, 211, 153, 0.24)";
        ctx.lineWidth = 0.9;
        for (let i = 0; i < visibleHubs.length - 1; i++) {
          const a = visibleHubs[i];
          const b = visibleHubs[i + 1];
          const midX = (a.x2d + b.x2d) / 2;
          const midY = (a.y2d + b.y2d) / 2 - radius * 0.14;
          ctx.beginPath();
          ctx.moveTo(a.x2d, a.y2d);
          ctx.quadraticCurveTo(midX, midY, b.x2d, b.y2d);
          ctx.stroke();
        }
      }

      visibleHubs.forEach(({ x2d, y2d, label, ping, isCurrentActive }) => {
        ctx.beginPath();
        ctx.arc(x2d, y2d, isCurrentActive ? 4.5 : 2.6, 0, Math.PI * 2);
        ctx.fillStyle = isCurrentActive ? "#34d399" : "#38bdf8";
        ctx.shadowBlur = isCurrentActive ? 14 : 6;
        ctx.shadowColor = isCurrentActive ? "#10b981" : "#38bdf8";
        ctx.fill();
        ctx.shadowBlur = 0;

        if (isCurrentActive) {
          const pulse = (Math.sin(tick * 4) + 1) * 4;
          ctx.beginPath();
          ctx.arc(x2d, y2d, 7 + pulse, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(52, 211, 153, 0.55)";
          ctx.lineWidth = 1.1;
          ctx.stroke();

          ctx.font = "600 10px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = isLight ? "#3b0764" : "#f8fafc";
          ctx.shadowBlur = 6;
          ctx.shadowColor = isLight ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.95)";
          ctx.fillText(`${label} · ${ping}`, x2d + 11, y2d + 3);
          ctx.shadowBlur = 0;
        }
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      clearInterval(hubTimer);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeHub, isLight]);

  return (
    <div className="relative w-full max-w-[500px] mx-auto flex flex-col items-center justify-center select-none">
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto cursor-grab active:cursor-grabbing transition-transform duration-300"
      />

      {/* Floating HUD Telemetry Badge 1: Top Right (Desktop) */}
      <div className="hidden sm:flex absolute top-4 right-2 z-20 items-center gap-2 rounded-xl border border-white/10 bg-[#090912]/85 p-2.5 backdrop-blur-md shadow-xl text-xs font-mono">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/20 text-emerald-400">
          <Activity size={14} className="animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Global Reach</p>
          <p className="font-bold text-white text-[11px]">B2B &amp; B2C Worldwide</p>
        </div>
      </div>

      {/* Floating HUD Telemetry Badge 2: Bottom Left (Desktop) */}
      <div className="hidden sm:flex absolute bottom-4 left-2 z-20 items-center gap-2.5 rounded-xl border border-white/10 bg-[#090912]/85 p-2.5 backdrop-blur-md shadow-xl text-xs font-mono">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/20 text-violet-300">
          <Radio size={14} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white text-[11px]">{activeHub.label}</span>
          </div>
          <p className="text-[10px] text-emerald-400">Edge Latency: {activeHub.ping}</p>
        </div>
      </div>

      {/* Mobile Telemetry Strip */}
      <div className="flex sm:hidden items-center justify-between gap-2 w-full max-w-[320px] mt-2 px-1">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-950/80 text-[10px] font-mono text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>B2B &amp; B2C Worldwide</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-950/80 text-[10px] font-mono text-emerald-400">
          <span>{activeHub.label}: {activeHub.ping}</span>
        </div>
      </div>
    </div>
  );
}
