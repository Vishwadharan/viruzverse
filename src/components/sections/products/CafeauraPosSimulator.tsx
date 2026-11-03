"use client";

import { useState } from "react";
import {
  Printer,
  CheckCircle2,
  Wifi,
  WifiOff,
  Clock,
  User,
  Coffee,
  Check,
  RotateCw,
} from "lucide-react";

interface TableItem {
  id: number;
  number: string;
  type: string;
  pax: number;
  status: "Dining" | "Ordering" | "Available" | "Billing";
  total: number;
  waiter: string;
  items: Array<{ name: string; qty: number; notes: string; price: number }>;
}

const INITIAL_TABLES: TableItem[] = [
  {
    id: 1,
    number: "T-01",
    type: "Booth",
    pax: 2,
    status: "Dining",
    total: 560,
    waiter: "Arun K.",
    items: [
      { name: "Flat White", qty: 2, notes: "Oat milk · extra hot", price: 320 },
      { name: "Truffle Parmesan Fries", qty: 1, notes: "Garlic aioli dip", price: 240 },
    ],
  },
  {
    id: 2,
    number: "T-02",
    type: "Main Floor",
    pax: 4,
    status: "Ordering",
    total: 1240,
    waiter: "Priya S.",
    items: [
      { name: "Cappuccino", qty: 4, notes: "Regular milk", price: 640 },
      { name: "Sourdough Margherita", qty: 2, notes: "Extra basil", price: 600 },
    ],
  },
  {
    id: 3,
    number: "T-03",
    type: "Window",
    pax: 2,
    status: "Available",
    total: 0,
    waiter: "Unassigned",
    items: [],
  },
  {
    id: 4,
    number: "T-04",
    type: "Patio",
    pax: 3,
    status: "Billing",
    total: 890,
    waiter: "Dev R.",
    items: [
      { name: "Cold Brew Tonic", qty: 3, notes: "Single origin", price: 540 },
      { name: "Burnt Basque Cheesecake", qty: 1, notes: "Berry compote", price: 350 },
    ],
  },
];

export default function CafeauraPosSimulator() {
  const [tables, setTables] = useState<TableItem[]>(INITIAL_TABLES);
  const [activeTableId, setActiveTableId] = useState<number>(1);
  const [isOffline, setIsOffline] = useState(false);
  const [printingKot, setPrintingKot] = useState(false);
  const [kotPrinted, setKotPrinted] = useState(false);

  const activeTable = tables.find((t) => t.id === activeTableId) || tables[0];

  const handlePrintKot = () => {
    if (activeTable.total === 0 || printingKot) return;
    setPrintingKot(true);
    setTimeout(() => {
      setPrintingKot(false);
      setKotPrinted(true);
      // update table status to Kitchen Fired / Dining
      setTables((prev) =>
        prev.map((t) => (t.id === activeTable.id ? { ...t, status: "Dining" } : t))
      );
      setTimeout(() => setKotPrinted(false), 3500);
    }, 1100);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Outer ambient glow behind hardware chassis */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[32px] opacity-40 blur-2xl"
        style={{
          background: "radial-gradient(circle at 50% 30%, var(--accent), transparent 70%)",
        }}
        aria-hidden
      />

      {/* ── Realistic Hardware iPad / POS Terminal Chassis ── */}
      <div
        className="relative overflow-hidden rounded-[26px] border border-slate-800/80 bg-[#0d0f17] text-slate-100 shadow-2xl transition-all"
        style={{
          boxShadow:
            "0 24px 50px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.14)",
        }}
      >
        {/* Top Hardware Status Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#08090e] px-4 py-2 text-[11px] font-sans text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-200">CafeAura Floor POS</span>
            <span className="text-slate-600">·</span>
            <span className="text-[10px] text-slate-400">Terminal #01</span>
          </div>

          {/* Network Switcher Pill (Online vs Offline SQLite) */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsOffline(!isOffline)}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-all ${
                isOffline
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
              }`}
              title="Click to toggle offline local SQLite mode"
            >
              {isOffline ? <WifiOff size={10} /> : <Wifi size={10} />}
              <span>{isOffline ? "Offline SQLite Active" : "Cloud Sync (14ms)"}</span>
            </button>
          </div>
        </div>

        {/* Floor Map Layout & Table Selector */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold tracking-wide text-slate-300">
              Live Dining Tables
            </span>
            <span className="text-[11px] text-slate-400">
              {tables.filter((t) => t.status !== "Available").length} / {tables.length} Occupied
            </span>
          </div>

          {/* Visual Table Grid (2 cols on phone, 4 cols on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {tables.map((t) => {
              const isSelected = t.id === activeTableId;
              const isAvailable = t.status === "Available";
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTableId(t.id)}
                  className={`relative flex flex-col justify-between rounded-xl p-2.5 sm:p-3 text-left transition-all ${
                    isSelected
                      ? "bg-violet-600/25 border-violet-500 shadow-md ring-1 ring-violet-500/50"
                      : "bg-[#141724] border-slate-800/90 hover:bg-[#1a1e30] hover:border-slate-700"
                  } border`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-bold text-white">{t.number}</span>
                    <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                      <User size={9} />
                      {t.pax}
                    </span>
                  </div>

                  <span
                    className={`inline-block rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                      t.status === "Dining"
                        ? "bg-amber-500/20 text-amber-300"
                        : t.status === "Ordering"
                        ? "bg-violet-500/20 text-violet-300"
                        : t.status === "Billing"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    {t.status}
                  </span>

                  <span className="mt-1.5 text-[11px] font-semibold text-slate-300">
                    {isAvailable ? "—" : `₹${t.total}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Table Order Ticket Card */}
          <div className="rounded-xl border border-slate-800/80 bg-[#121420] p-3.5 sm:p-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-2.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    {activeTable.number} Active Ticket
                  </span>
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                    {activeTable.type}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Server: <strong className="text-slate-200">{activeTable.waiter}</strong> · Station 01
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase text-slate-400 tracking-wider">Subtotal</span>
                <p className="text-base font-extrabold text-white">₹{activeTable.total}</p>
              </div>
            </div>

            {/* Itemized Dish List */}
            {activeTable.items.length > 0 ? (
              <div className="space-y-2 mb-3.5">
                {activeTable.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-[#181b2a] px-2.5 py-1.5 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-500/20 font-bold text-violet-300 text-[11px]">
                        {item.qty}×
                      </span>
                      <div>
                        <span className="font-medium text-slate-200">{item.name}</span>
                        <p className="text-[10px] text-slate-400">{item.notes}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-slate-300">₹{item.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center text-slate-400">
                <Coffee size={22} className="text-slate-600 mb-1" />
                <p className="text-xs font-medium">Table is currently free &amp; sanitized</p>
                <p className="text-[10px] text-slate-500">Tap to seat new guests or scan QR</p>
              </div>
            )}

            {/* Actions Bar: Print KOT / Fire to Kitchen */}
            <div className="flex items-center justify-between pt-2.5 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock size={11} className="text-slate-500" />
                <span>Zero duplicate ticket guarantee</span>
              </span>

              <button
                onClick={handlePrintKot}
                disabled={activeTable.total === 0 || printingKot}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white transition-all shadow-md ${
                  activeTable.total === 0
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-95 shadow-violet-500/25"
                }`}
              >
                {printingKot ? (
                  <>
                    <RotateCw size={12} className="animate-spin text-white" />
                    <span>Routing to Kitchen...</span>
                  </>
                ) : (
                  <>
                    <Printer size={12} />
                    <span>Fire to Kitchen (Print KOT)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Animated Thermal Ticket Ejection Banner */}
          {kotPrinted && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-xs text-emerald-300 animate-fadeIn">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
              <span>
                <strong>KOT #204 Dispatched!</strong> Routed to Bar (1x) and Hot Line (1x) in 118ms.
              </span>
            </div>
          )}
        </div>

        {/* Terminal Bottom Specifications */}
        <div className="border-t border-slate-800/80 bg-[#08090e] px-4 py-2 flex items-center justify-between text-[10.5px] text-slate-400 font-sans">
          <span>Esc/Pos Thermal Printers · Bluetooth &amp; LAN</span>
          <span className="text-emerald-400 font-medium">Sub-150ms WebSocket Dispatch</span>
        </div>
      </div>
    </div>
  );
}

