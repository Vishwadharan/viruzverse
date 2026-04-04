"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ShoppingCart,
  Package,
  Users2,
  BarChart3,
  ChevronRight,
  Wifi,
  Zap,
  Star,
  Shield,
  Coffee,
  Salad,
  GlassWater,
  Croissant,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const A = "#f97316"; // amber
const A2 = "#fbbf24"; // gold

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: EASE } satisfies Transition,
});

/* ── Marquee strip ────────────────────────────── */
const MARQUEE_ITEMS = [
  { icon: ShoppingCart, label: "POS & Orders" },
  { icon: Package, label: "Live Inventory" },
  { icon: Users2, label: "Staff & RBAC" },
  { icon: BarChart3, label: "Revenue Analytics" },
  { icon: Wifi, label: "Real-time Sync" },
  { icon: Zap, label: "Auto KOT Print" },
  { icon: Star, label: "Loyalty & Offers" },
  { icon: Shield, label: "Multi-tenant" },
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#05040b,transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg,#05040b,transparent)" }}
      />
      <div
        className="flex gap-6"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {items.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2 rounded-full shrink-0"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Icon size={13} style={{ color: A }} strokeWidth={1.7} />
            <span
              className="text-[12px] font-mono font-semibold whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }`}</style>
    </div>
  );
}

/* ── Phone mockup ─────────────────────────────── */
const MENU = [
  {
    name: "Cappuccino",
    price: "₹180",
    tag: "Coffee",
    grad: `linear-gradient(135deg,${A},#ea580c)`,
    qty: 2,
    Icon: Coffee,
  },
  {
    name: "Avocado Toast",
    price: "₹240",
    tag: "Food",
    grad: "linear-gradient(135deg,#10b981,#059669)",
    qty: 0,
    Icon: Salad,
  },
  {
    name: "Cold Brew",
    price: "₹160",
    tag: "Coffee",
    grad: "linear-gradient(135deg,#6366f1,#4f46e5)",
    qty: 1,
    Icon: GlassWater,
  },
  {
    name: "Croissant",
    price: "₹120",
    tag: "Food",
    grad: "linear-gradient(135deg,#f59e0b,#d97706)",
    qty: 0,
    Icon: Croissant,
  },
];

function PhoneMockup() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: "285px" }}>
      {/* Outer ambient glow rings */}
      <div
        className="absolute inset-0 rounded-[48px] pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px ${A}15, 0 0 60px ${A}18, 0 60px 120px rgba(0,0,0,0.7)`,
        }}
      />
      {/* Animated gradient ring */}
      <div
        className="absolute -inset-[2px] rounded-[50px] pointer-events-none"
        style={{
          background: `conic-gradient(from ${tick * 30}deg, ${A}40, transparent 40%, ${A2}30, transparent 80%, ${A}30)`,
          transition: "background 0.5s ease",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />

      {/* Side buttons */}
      <div
        className="absolute -left-[3px] rounded-l-sm"
        style={{
          top: "88px",
          height: "30px",
          width: "3px",
          background: `${A}20`,
        }}
      />
      <div
        className="absolute -left-[3px] rounded-l-sm"
        style={{
          top: "130px",
          height: "30px",
          width: "3px",
          background: `${A}20`,
        }}
      />
      <div
        className="absolute -right-[3px] rounded-r-sm"
        style={{
          top: "108px",
          height: "56px",
          width: "3px",
          background: `${A}20`,
        }}
      />

      {/* Shell */}
      <div
        className="rounded-[46px] overflow-hidden"
        style={{
          background: "linear-gradient(160deg,#1a0f06,#0c0916)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          padding: "14px",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Screen */}
        <div
          className="rounded-[34px] overflow-hidden relative"
          style={{ background: "#07060f" }}
        >
          {/* Screen top ambient */}
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% -20%,${A}15,transparent 70%)`,
            }}
          />

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1">
            <span
              className="text-[10px] font-black"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              9:41
            </span>
            <div
              className="flex items-center justify-center px-4 py-[3px] rounded-full"
              style={{ background: "#000", minWidth: "96px" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#1c1c1e" }}
              />
              <div
                className="w-3.5 h-3.5 rounded-full ml-1"
                style={{ background: "#141414" }}
              />
            </div>
            <div className="flex items-center gap-1">
              <div
                className="w-3.5 h-2 rounded-sm relative flex items-center"
                style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
              >
                <div
                  className="absolute inset-[1.5px] right-[2px] rounded-[1px]"
                  style={{ background: "rgba(255,255,255,0.35)" }}
                />
              </div>
            </div>
          </div>

          {/* App nav */}
          <div className="flex items-start justify-between px-4 pt-3 pb-2">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10b981" }}
                />
                <span
                  className="text-[10px] font-mono"
                  style={{ color: `${A}70` }}
                >
                  Table 04 · Dine-in
                </span>
              </div>
              <p className="text-[17px] font-black leading-tight text-white">
                What would you
                <br />
                like to order?
              </p>
            </div>
            <div className="relative mt-1 shrink-0">
              <div
                className="w-9 h-9 rounded-[14px] flex items-center justify-center"
                style={{ background: `${A}15`, border: `1px solid ${A}22` }}
              >
                <ShoppingCart size={15} style={{ color: A }} />
              </div>
              <div
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white
                             flex items-center justify-center text-[9px] font-black"
                style={{ background: A }}
              >
                3
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1.5 px-4 pb-3 overflow-x-auto scrollbar-none">
            {["All", "Coffee", "Food", "Drinks"].map((c, i) => (
              <div
                key={c}
                className="px-3 py-1 rounded-full text-[10px] font-bold shrink-0"
                style={{
                  background:
                    i === 0
                      ? `linear-gradient(135deg,${A},#ea580c)`
                      : "rgba(255,255,255,0.05)",
                  color: i === 0 ? "white" : "rgba(255,255,255,0.3)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: i === 0 ? `0 4px 12px ${A}35` : "none",
                }}
              >
                {c}
              </div>
            ))}
          </div>

          {/* Menu items */}
          <div className="px-3 flex flex-col gap-2 pb-3">
            {MENU.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={
                  {
                    duration: 0.35,
                    delay: 0.45 + i * 0.09,
                    ease: EASE,
                  } satisfies Transition
                }
                className="flex items-center gap-3 p-2.5 rounded-[18px]"
                style={{
                  background: i === 0 ? `${A}0d` : "rgba(255,255,255,0.03)",
                  border:
                    i === 0
                      ? `1px solid ${A}22`
                      : "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Artwork */}
                <div
                  className="w-11 h-11 rounded-[14px] shrink-0 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: item.grad,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Sheen overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(255,255,255,0.18),transparent 60%)",
                    }}
                  />
                  {/* Bottom rim */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-3"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(0,0,0,0.18),transparent)",
                    }}
                  />
                  {/* Icon */}
                  <item.Icon
                    size={20}
                    strokeWidth={1.6}
                    className="relative z-10"
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-bold text-white leading-tight">
                    {item.name}
                  </p>
                  <p
                    className="text-[10px] font-mono mt-0.5"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {item.tag}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span
                    className="text-[12px] font-black"
                    style={{ color: i === 0 ? A : "rgba(255,255,255,0.5)" }}
                  >
                    {item.price}
                  </span>
                  {item.qty > 0 ? (
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-lg flex items-center justify-center text-[11px]
                                     font-black text-white"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      >
                        −
                      </div>
                      <span className="text-[11px] font-black text-white w-3 text-center">
                        {item.qty}
                      </span>
                      <div
                        className="w-5 h-5 rounded-lg flex items-center justify-center text-[11px]
                                     font-black text-white"
                        style={{ background: A }}
                      >
                        +
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-[14px]
                                   font-black text-white"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    >
                      +
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Checkout bar */}
          <div className="px-3 pb-5 pt-1">
            <div
              className="w-full py-3.5 rounded-2xl flex items-center justify-between px-4"
              style={{
                background: `linear-gradient(135deg,${A},#ea580c)`,
                boxShadow: `0 10px 28px ${A}35`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center">
                  <ShoppingCart size={11} className="text-white" />
                </div>
                <span className="text-[12px] font-black text-white">
                  View Cart
                </span>
              </div>
              <span className="text-[12px] font-black text-white/80">₹520</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 rounded-b-[46px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,transparent,rgba(249,115,22,0.03))",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}

/* ── POS visual ───────────────────────────────── */
function POSVisual() {
  const orders = [
    {
      table: "04",
      items: "Cappuccino × 2, Cold Brew × 1",
      status: "ready",
      c: A,
    },
    {
      table: "07",
      items: "Avocado Toast × 1",
      status: "preparing",
      c: "#6366f1",
    },
    {
      table: "02",
      items: "Croissant × 2, OJ × 1",
      status: "served",
      c: "#10b981",
    },
  ];
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#0f0b1a,#0c0916)",
        border: `1px solid rgba(249,115,22,0.12)`,
        boxShadow: `0 0 60px ${A}08`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg,transparent,${A}80,${A2}60,transparent)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -30%,${A}10,transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p
              className="text-[10px] font-mono mb-1"
              style={{ color: `${A}60` }}
            >
              KITCHEN DISPLAY
            </p>
            <p className="text-[18px] font-black text-white">Live Orders</p>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
            style={{ background: `${A}0f`, border: `1px solid ${A}18` }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#10b981" }}
              />
              <span className="relative flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span
              className="text-[10px] font-mono font-bold"
              style={{ color: "#10b981" }}
            >
              3 active
            </span>
          </div>
        </div>

        {orders.map((o, i) => (
          <motion.div
            key={o.table}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              { duration: 0.4, delay: i * 0.1, ease: EASE } satisfies Transition
            }
            className="flex items-start gap-4 p-4 rounded-2xl mb-3 last:mb-0"
            style={{
              background: i === 0 ? `${A}0a` : "rgba(255,255,255,0.03)",
              border:
                i === 0
                  ? `1px solid ${A}18`
                  : "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-[13px] font-black text-white"
              style={{ background: `${o.c}18`, border: `1px solid ${o.c}22` }}
            >
              {o.table}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-white leading-tight mb-1">
                Table {o.table}
              </p>
              <p
                className="text-[10px] font-mono truncate"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {o.items}
              </p>
            </div>
            <div
              className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-xl"
              style={{ background: `${o.c}10`, border: `1px solid ${o.c}18` }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: o.c }}
              />
              <span
                className="text-[9px] font-mono font-bold"
                style={{ color: o.c }}
              >
                {o.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Inventory visual ─────────────────────────── */
function InventoryVisual() {
  const C = "#22d3ee";
  const rows = [
    { name: "Coffee Beans", val: 72, unit: "kg", alert: false },
    { name: "Oat Milk", val: 38, unit: "L", alert: false },
    { name: "Avocado", val: 14, unit: "pcs", alert: true },
    { name: "Sourdough", val: 55, unit: "pcs", alert: false },
  ];
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#060e12,#0c0916)",
        border: `1px solid rgba(34,211,238,0.1)`,
        boxShadow: `0 0 60px rgba(34,211,238,0.04)`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg,transparent,${C}80,transparent)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -30%,${C}10,transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p
              className="text-[10px] font-mono mb-1"
              style={{ color: `${C}60` }}
            >
              INVENTORY
            </p>
            <p className="text-[18px] font-black text-white">Stock Levels</p>
          </div>
          <span
            className="px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold"
            style={{
              background: "rgba(239,68,68,0.08)",
              color: "#f87171",
              border: "1px solid rgba(239,68,68,0.16)",
            }}
          >
            ⚠ 1 low
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={
                {
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: EASE,
                } satisfies Transition
              }
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-semibold text-white">
                  {row.name}
                </span>
                <span
                  className="text-[10px] font-mono"
                  style={{
                    color: row.alert ? "#f87171" : "rgba(255,255,255,0.35)",
                  }}
                >
                  {row.val} {row.unit}
                </span>
              </div>
              <div
                className="h-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${row.val}%` }}
                  viewport={{ once: true }}
                  transition={
                    {
                      duration: 1,
                      delay: 0.2 + i * 0.1,
                      ease: EASE,
                    } satisfies Transition
                  }
                  className="h-full rounded-full"
                  style={{
                    background: row.alert
                      ? "linear-gradient(90deg,#f87171,#ef4444)"
                      : `linear-gradient(90deg,${C},${C}80)`,
                    boxShadow: row.alert
                      ? "0 0 8px rgba(248,113,113,0.4)"
                      : `0 0 8px ${C}30`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Analytics visual ─────────────────────────── */
function AnalyticsVisual() {
  const C = "#a78bfa";
  const bars = [42, 68, 47, 83, 58, 94, 72];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const top = [
    { name: "Cappuccino", pct: 34 },
    { name: "Cold Brew", pct: 22 },
    { name: "Avocado Toast", pct: 18 },
  ];
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#0a0614,#0c0916)",
        border: `1px solid rgba(167,139,250,0.1)`,
        boxShadow: `0 0 60px rgba(167,139,250,0.04)`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg,transparent,${C}80,transparent)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -30%,${C}10,transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p
              className="text-[10px] font-mono mb-1"
              style={{ color: `${C}60` }}
            >
              ANALYTICS
            </p>
            <p className="text-[18px] font-black text-white">This Week</p>
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <span
              className="text-[10px] font-mono font-bold"
              style={{ color: "#10b981" }}
            >
              ↑ +12%
            </span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-1.5 h-20 mb-5">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={
                  {
                    duration: 0.8,
                    delay: 0.1 + i * 0.06,
                    ease: EASE,
                  } satisfies Transition
                }
                className="w-full rounded-t-lg"
                style={{
                  background:
                    i === 5 ? `linear-gradient(to top,${C},${C}60)` : `${C}18`,
                  minHeight: "4px",
                  boxShadow: i === 5 ? `0 0 12px ${C}40` : "none",
                }}
              />
              <span
                className="text-[9px] font-mono"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {days[i]}
              </span>
            </div>
          ))}
        </div>

        {/* Top items */}
        <div
          className="pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-[10px] font-mono mb-3"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            TOP SELLERS
          </p>
          {top.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center gap-3 mb-2 last:mb-0"
            >
              <span className="text-[11px] text-white flex-1">{item.name}</span>
              <div
                className="flex-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.pct * 2}%`, background: C }}
                />
              </div>
              <span
                className="text-[10px] font-mono w-7 text-right"
                style={{ color: C }}
              >
                {item.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Features data ────────────────────────────── */
const FEATURES = [
  {
    icon: ShoppingCart,
    tag: "Orders & POS",
    headline: ["Every ticket,", "always on time."],
    body: "Table orders, KOTs and status updates flow in real time between the ordering app, kitchen display and admin dashboard — no missed tickets, no re-keying.",
    bullets: [
      "Table-level KOT with auto-print",
      "Status: placed → preparing → served",
      "Walk-in and QR scan pre-orders",
    ],
    color: A,
    Visual: POSVisual,
  },
  {
    icon: Package,
    tag: "Inventory",
    headline: ["Stock that", "watches itself."],
    body: "Every confirmed order auto-deducts from stock. Low-stock alerts fire before you run out — supplier tracking and COGS calculated per item.",
    bullets: [
      "Auto-deduction on every confirmed order",
      "Per-item low-stock threshold alerts",
      "Supplier tracking · COGS per item",
    ],
    color: "#22d3ee",
    Visual: InventoryVisual,
  },
  {
    icon: BarChart3,
    tag: "Analytics",
    headline: ["Revenue you", "can act on."],
    body: "Daily and weekly breakdowns by item, category and time slot — visible to the owner in real time and exportable for your accountant.",
    bullets: [
      "Item-level revenue & margin",
      "Peak hour visibility",
      "Staff performance & order accuracy",
    ],
    color: "#a78bfa",
    Visual: AnalyticsVisual,
  },
];

/* ══ Page ════════════════════════════════════════ */
export default function CafeAuraPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#05040b" }}
    >
      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${A}04 1px,transparent 1px),` +
              `linear-gradient(90deg,${A}04 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        {/* Orbs */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% 0%,${A}12,transparent 60%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%,rgba(99,102,241,0.08),transparent 65%)",
          }}
        />
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span
            className="font-black tracking-[-0.05em] select-none"
            style={{
              fontSize: "clamp(120px,20vw,280px)",
              color: "transparent",
              WebkitTextStroke: `1px ${A}06`,
              letterSpacing: "-0.05em",
              whiteSpace: "nowrap",
            }}
          >
            CafeAura
          </span>
        </div>
        {/* Sep */}
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,${A2}70 40%,${A} 50%,${A2}70 60%,transparent)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-12 items-center min-h-[85vh]">
            {/* ── Left ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="flex items-center gap-2 mb-8"
              >
                <Link
                  href="/products"
                  className="text-[11px] font-mono hover:opacity-70 transition-opacity"
                  style={{ color: "#6b7280" }}
                >
                  Products
                </Link>
                <span style={{ color: "#374151" }}>/</span>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                   text-[11px] font-mono font-semibold"
                  style={{
                    color: A,
                    background: `${A}0f`,
                    border: `1px solid ${A}25`,
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: A }}
                    />
                    <span
                      className="relative flex h-1.5 w-1.5 rounded-full"
                      style={{ background: A }}
                    />
                  </span>
                  Live · SaaS Platform
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
                className="font-black tracking-[-0.055em] leading-[0.93] text-white mb-6"
                style={{ fontSize: "clamp(56px,8.5vw,108px)" }}
              >
                Cafe
                <span
                  style={{
                    backgroundImage: `linear-gradient(118deg,${A} 10%,${A2} 55%,#fef08a)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Aura
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
                className="text-[15px] font-semibold mb-3 max-w-lg"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Smart Cafe Management, Reimagined
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
                className="text-[14px] leading-[1.9] mb-10 max-w-lg"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Orders, inventory, staff and analytics — unified in one
                real-time platform with a Flutter mobile app for your floor
                staff.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                   text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${A},#ea580c)`,
                    boxShadow: `0 12px 32px ${A}45, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  }}
                >
                  Request a demo
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 rounded-2xl
                   text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  All products
                </Link>
              </motion.div>

              {/* Stack tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {["Flutter", "React", "Supabase", "PostgreSQL", "Realtime"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-[10px] font-mono"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {t}
                    </span>
                  ),
                )}
              </motion.div>

              {/* ✅ Fix: moved Privacy/Terms INSIDE the left column — was a rogue 3rd grid child */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="flex items-center gap-4"
              >
                <Link
                  href="/products/cafeaura/privacy-policy"
                  className="text-[11px] font-mono transition-colors duration-200 hover:underline underline-offset-2"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.22)")
                  }
                >
                  Privacy Policy
                </Link>
                <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>
                  ·
                </span>
                <Link
                  href="/products/cafeaura/terms-of-service"
                  className="text-[11px] font-mono transition-colors duration-200 hover:underline underline-offset-2"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.22)")
                  }
                >
                  Terms of Service
                </Link>
                <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>
                  ·
                </span>
                {/* ✅ Added: Delete Account link — required by Apple & Google Play store guidelines */}
                <Link
                  href="/products/cafeaura/delete-account"
                  className="text-[11px] font-mono transition-colors duration-200 hover:underline underline-offset-2"
                  style={{ color: "rgba(239,68,68,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(239,68,68,0.75)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(239,68,68,0.45)")
                  }
                >
                  Delete Account
                </Link>
              </motion.div>
            </div>

            {/* ── Right: Phone — now correctly the 2nd grid child ── */}
            <motion.div
              initial={{ opacity: 0, y: 48, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.16, ease: EASE }}
              className="flex justify-center pb-8"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <Marquee />

      {/* ══ FEATURES ══ */}
      <section className="relative py-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${A}03 1px,transparent 1px),` +
              `linear-gradient(90deg,${A}03 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          {FEATURES.map(
            (
              { icon: Icon, tag, headline, body, bullets, color, Visual },
              idx,
            ) => (
              <motion.div
                key={tag}
                {...fade(0)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24
                          ${idx < FEATURES.length - 1 ? "border-b border-white/[0.04]" : ""}`}
              >
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-2.5 mb-6">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${color}12`,
                        border: `1px solid ${color}20`,
                      }}
                    >
                      <Icon size={15} style={{ color }} strokeWidth={1.7} />
                    </div>
                    <span
                      className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em]"
                      style={{ color }}
                    >
                      {tag}
                    </span>
                  </div>

                  <h2
                    className="font-black tracking-[-0.04em] leading-[1.04] text-white mb-5"
                    style={{ fontSize: "clamp(30px,3.5vw,48px)" }}
                  >
                    {headline[0]}
                    <br />
                    <span
                      style={{
                        backgroundImage: `linear-gradient(118deg,${color} 10%,${color}90)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {headline[1]}
                    </span>
                  </h2>

                  <p
                    className="text-[14px] leading-[1.9] mb-8 max-w-md"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {body}
                  </p>

                  <div className="flex flex-col gap-3">
                    {bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <ChevronRight
                          size={13}
                          style={{ color }}
                          className="shrink-0"
                        />
                        <span
                          className="text-[13px]"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                  <Visual />
                </div>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* ══ STAFF ══ */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%,${A}05,transparent 60%)`,
          }}
        />
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,${A2}70 40%,${A} 50%,${A2}70 60%,transparent)`,
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,${A2}70 40%,${A} 50%,${A2}70 60%,transparent)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade(0)}>
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: `${A}12`, border: `1px solid ${A}20` }}
                >
                  <Users2 size={15} style={{ color: A }} strokeWidth={1.7} />
                </div>
                <span
                  className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em]"
                  style={{ color: A }}
                >
                  Staff & Roles
                </span>
              </div>

              <h2
                className="font-black tracking-[-0.04em] leading-[1.04] text-white mb-5"
                style={{ fontSize: "clamp(30px,3.5vw,48px)" }}
              >
                Everyone sees
                <br />
                <span
                  style={{
                    backgroundImage: `linear-gradient(118deg,${A} 10%,${A2})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  exactly enough.
                </span>
              </h2>

              <p
                className="text-[14px] leading-[1.9] mb-8 max-w-md"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                RBAC means every staff member sees only their screen. Shift
                scheduling, attendance and per-staff activity logs in one place.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Role-based screens per staff type",
                  "Shift scheduling & attendance",
                  "Per-staff order & activity logs",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <ChevronRight
                      size={13}
                      style={{ color: A }}
                      className="shrink-0"
                    />
                    <span
                      className="text-[13px]"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.15)} className="flex flex-col gap-3">
              {[
                {
                  role: "Owner",
                  desc: "Full access — all modules & analytics",
                  color: A,
                  accent: "#fbbf24",
                },
                {
                  role: "Manager",
                  desc: "Orders · Inventory · Staff scheduling",
                  color: "#22d3ee",
                  accent: "#67e8f9",
                },
                {
                  role: "Cashier",
                  desc: "POS & order management only",
                  color: "#a78bfa",
                  accent: "#c4b5fd",
                },
                {
                  role: "Cook",
                  desc: "Kitchen display & order status only",
                  color: "#10b981",
                  accent: "#34d399",
                },
              ].map(({ role, desc, color, accent }, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={
                    {
                      duration: 0.4,
                      delay: i * 0.1,
                      ease: EASE,
                    } satisfies Transition
                  }
                  className="group flex items-center gap-4 px-5 py-4 rounded-2xl
                             transition-all duration-200 cursor-default"
                  style={{
                    background:
                      i === 0 ? `${color}0a` : "rgba(255,255,255,0.03)",
                    border:
                      i === 0
                        ? `1px solid ${color}20`
                        : "1px solid rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      `${color}0a`;
                    (e.currentTarget as HTMLElement).style.border =
                      `1px solid ${color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      i === 0 ? `${color}0a` : "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.border =
                      i === 0
                        ? `1px solid ${color}20`
                        : "1px solid rgba(255,255,255,0.05)";
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}22`,
                    }}
                  >
                    <Users2 size={15} style={{ color }} strokeWidth={1.7} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[13px] font-bold leading-tight"
                      style={{ color: accent }}
                    >
                      {role}
                    </p>
                    <p
                      className="text-[11px] font-mono mt-0.5 truncate"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {desc}
                    </p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: i === 0 ? "#10b981" : `${color}50` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%,${A}08,transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(${A}04 1px,transparent 1px),` +
              `linear-gradient(90deg,${A}04 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        {/* Watermark */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none overflow-hidden">
          <span
            className="font-black select-none"
            style={{
              fontSize: "clamp(80px,14vw,200px)",
              color: "transparent",
              WebkitTextStroke: `1px ${A}05`,
              letterSpacing: "-0.05em",
              whiteSpace: "nowrap",
            }}
          >
            CafeAura
          </span>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.div {...fade(0)}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
              style={{ background: `${A}0f`, border: `1px solid ${A}22` }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: A }}
                />
                <span
                  className="relative flex h-1.5 w-1.5 rounded-full"
                  style={{ background: A }}
                />
              </span>
              <span
                className="text-[11px] font-mono font-semibold uppercase tracking-[0.14em]"
                style={{ color: A }}
              >
                Free walkthrough
              </span>
            </div>

            <h2
              className="font-black tracking-[-0.04em] leading-[1.03] text-white mb-5"
              style={{ fontSize: "clamp(38px,5.5vw,68px)" }}
            >
              Ready to run your
              <br />
              <span
                style={{
                  backgroundImage: `linear-gradient(118deg,${A} 10%,${A2} 55%,#fef08a)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                cafe smarter?
              </span>
            </h2>

            <p
              className="text-[14px] leading-[1.9] mb-10"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Get a personalised walkthrough of CafeAura — we&apos;ll show you
              how it fits your setup before any commitment.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-2xl
                           text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg,${A},#ea580c)`,
                  boxShadow: `0 14px 40px ${A}45, inset 0 1px 0 rgba(255,255,255,0.2)`,
                }}
              >
                Request a demo
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-10 py-4 rounded-2xl
                           text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                Back to products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
