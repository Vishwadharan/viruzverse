"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Database, Server, RefreshCw, CheckCircle2, Flame } from "lucide-react";

const TICKER_ITEMS = [
  { icon: Zap, label: "MULTI-TENANT SAAS ARCHITECTURE", highlight: "SUB-100MS P99" },
  { icon: Flame, label: "FLAGSHIP: CAFEAURA RESTAURANT OS", highlight: "v2.4 ACTIVE" },
  { icon: Database, label: "POSTGRESQL ROW-LEVEL SECURITY", highlight: "ZERO LEAKAGE" },
  { icon: RefreshCw, label: "OFFLINE-FIRST SQLITE RECONCILIATION", highlight: "FAIL-SAFE" },
  { icon: Server, label: "HIGH-THROUGHPUT REST & WEBSOCKET APIS", highlight: "99.99% SLA" },
  { icon: ShieldCheck, label: "100% PROPRIETARY CLIENT IP HANDOVER", highlight: "FULL CODEBASE" },
  { icon: Cpu, label: "EVENT-DRIVEN BACKGROUND WORKERS", highlight: "REDIS QUEUES" },
  { icon: CheckCircle2, label: "BI-WEEKLY SPRINT PRODUCTION SHIPMENTS", highlight: "FIXED MILESTONES" },
];

export default function LiveTickerRibbon() {
  return (
    <div className="relative w-full py-3.5 sm:py-4 overflow-hidden border-y border-violet-500/20 bg-[#06060a]/75 backdrop-blur-md">
      {/* Top and Bottom Glowing Accent Beams */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Left and Right Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#06060a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#06060a] to-transparent z-10" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {/* Render 2 sets for seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 sm:px-8 border-r border-violet-500/10 whitespace-nowrap"
            >
              <span className="p-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-violet-400">
                <Icon size={12} strokeWidth={2.2} />
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-semibold tracking-wider text-slate-200">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 font-bold">
                {item.highlight}
              </span>
              <span className="text-violet-500/40 text-xs select-none">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

