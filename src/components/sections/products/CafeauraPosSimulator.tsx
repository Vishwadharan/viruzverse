"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  BellRing,
  CreditCard,
  Clock,
  Wifi,
  BatteryCharging,
  Search,
  Flame,
  Heart,
  Plus,
  Home,
  ReceiptText,
  User,
  RotateCw,
  QrCode,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

const SCREENS = [
  { id: 0, label: "Browse & Order", time: "10:15" },
  { id: 1, label: "Skip the Queue", time: "10:30" },
  { id: 2, label: "Parent Alert", time: "10:31" },
];

const MENU_ITEMS = [
  { name: "Brownie", price: "₹45", image: "/images/menu/brownie.jpg" },
  { name: "Chilly Parotta", price: "₹70", image: "/images/menu/chilly-parotta.jpg" },
  { name: "Filter Coffee", price: "₹25", image: "/images/menu/filter-coffee.jpg" },
  { name: "Cream Bun", price: "₹30", image: "/images/menu/cream-bun.jpg" },
];

export default function CafeauraPosSimulator() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreen((prev) => (prev + 1) % SCREENS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md flex flex-col items-center justify-center py-2">
      {/* Ambient Warm Coral-Violet Aura */}
      <div
        className="pointer-events-none absolute w-80 h-80 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(139,92,246,0.25) 55%, transparent 75%)",
        }}
        aria-hidden
      />

      {/* Floating Glass Badge Left */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`hidden sm:flex absolute -left-2 top-20 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl text-xs font-mono ${
          isLight
            ? "bg-white/95 border-slate-200/90 text-slate-900"
            : "bg-[#090912]/90 border-white/15 text-white"
        }`}
      >
        <span
          className={`w-7 h-7 rounded-xl border flex items-center justify-center ${
            isLight
              ? "bg-orange-50 border-orange-200 text-orange-500"
              : "bg-orange-500/20 border-orange-500/30 text-orange-400"
          }`}
        >
          <CreditCard size={14} />
        </span>
        <div>
          <p className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Checkout</p>
          <p className={`font-bold text-[11px] ${isLight ? "text-slate-900" : "text-white"}`}>
            Instant UPI
          </p>
        </div>
      </motion.div>

      {/* Floating Glass Badge Right */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className={`hidden sm:flex absolute -right-2 bottom-20 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl text-xs font-mono ${
          isLight
            ? "bg-white/95 border-slate-200/90 text-slate-900"
            : "bg-[#090912]/90 border-white/15 text-white"
        }`}
      >
        <span
          className={`w-7 h-7 rounded-xl border flex items-center justify-center ${
            isLight
              ? "bg-emerald-50 border-emerald-200 text-emerald-600"
              : "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
          }`}
        >
          <BellRing size={14} />
        </span>
        <div>
          <p className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Live Alert</p>
          <p className={`font-bold text-[11px] ${isLight ? "text-slate-900" : "text-white"}`}>
            Parent Notified
          </p>
        </div>
      </motion.div>

      {/* ── iPhone 17 Pro Max (19.5:9 Proportions) ── */}
      <div className="relative z-10 w-[262px] sm:w-[276px] aspect-[9/19.5]">
        {/* Left Hardware Buttons */}
        <div className="pointer-events-none absolute -left-[3px] top-[18%] w-[3px] h-5 rounded-l-sm bg-slate-400/80" />
        <div className="pointer-events-none absolute -left-[3px] top-[25%] w-[3px] h-9 rounded-l-sm bg-slate-400/80" />
        <div className="pointer-events-none absolute -left-[3px] top-[34%] w-[3px] h-9 rounded-l-sm bg-slate-400/80" />

        {/* Right Hardware Buttons */}
        <div className="pointer-events-none absolute -right-[3px] top-[26%] w-[3px] h-14 rounded-r-sm bg-slate-400/80" />
        <div className="pointer-events-none absolute -right-[3px] top-[58%] w-[3px] h-8 rounded-r-sm bg-slate-400/70" />

        {/* Outer Titanium Frame (Adapts to Light/Dark Theme) */}
        <div
          className="w-full h-full rounded-[46px] p-[4px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65)]"
          style={{
            background: isLight
              ? "linear-gradient(145deg, #e2e8f0 0%, #94a3b8 50%, #cbd5e1 100%)"
              : "linear-gradient(145deg, rgba(148,163,184,0.55) 0%, rgba(30,41,59,0.95) 45%, rgba(100,116,139,0.5) 100%)",
          }}
        >
          {/* Thin Black Display Bezel */}
          <div className="w-full h-full rounded-[42px] bg-black p-[5px]">
            {/* Theme-Adaptive CafeAura App Screen (Light Peach-Cream / Dark Espresso-Obsidian) */}
            <div
              className="relative w-full h-full rounded-[37px] overflow-hidden flex flex-col justify-between transition-colors duration-300"
              style={{
                background: isLight
                  ? "linear-gradient(180deg, #fff5ee 0%, #fffaf7 45%, #ffffff 100%)"
                  : "linear-gradient(180deg, #17131e 0%, #100d16 50%, #09080e 100%)",
              }}
            >
              {/* iOS Status Bar + Dynamic Island */}
              <div
                className={`relative z-10 flex items-center justify-between text-[9.5px] font-sans font-semibold px-4 pt-2.5 pb-1 ${
                  isLight ? "text-slate-900" : "text-slate-100"
                }`}
              >
                <span>{SCREENS[screen].time}</span>

                <div className="w-[78px] h-[20px] rounded-full bg-black border border-white/10 flex items-center justify-end pr-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 35%, #38bdf8 0%, #1e1b4b 55%, #000 100%)",
                    }}
                  />
                </div>

                <div className={`flex items-center gap-1 ${isLight ? "text-slate-900" : "text-slate-100"}`}>
                  <Wifi size={10} />
                  <BatteryCharging size={12} className={isLight ? "text-emerald-600" : "text-emerald-400"} />
                </div>
              </div>

              {/* Animated CafeAura App Screens */}
              <div className="relative z-10 flex-1 overflow-hidden px-3 py-1.5 flex flex-col">
                <AnimatePresence mode="wait">
                  {/* Screen 0: CafeAura Menu UI */}
                  {screen === 0 && (
                    <motion.div
                      key="s0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.28 }}
                      className="flex-1 flex flex-col gap-2 font-sans"
                    >
                      {/* Search + Streak Pill */}
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`flex-1 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border shadow-xs text-[10px] ${
                            isLight
                              ? "bg-white border-orange-100 text-slate-400"
                              : "bg-[#1e1a28] border-white/10 text-slate-400"
                          }`}
                        >
                          <Search size={11} className="text-slate-400 shrink-0" />
                          <span className="truncate">What are you craving?</span>
                        </div>
                        <div className="px-2 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold flex items-center gap-0.5 shadow-xs">
                          <Flame size={10} />
                          <span>1</span>
                        </div>
                      </div>

                      {/* Category Tabs */}
                      <div className="flex items-center gap-1.5 overflow-hidden text-[9.5px] font-semibold">
                        <span className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-xs">
                          All
                        </span>
                        <span
                          className={`px-2 py-1 rounded-xl border ${
                            isLight
                              ? "bg-white border-slate-200/80 text-slate-600"
                              : "bg-[#1e1a28] border-white/10 text-slate-300"
                          }`}
                        >
                          Bakery
                        </span>
                        <span
                          className={`px-2 py-1 rounded-xl border ${
                            isLight
                              ? "bg-white border-slate-200/80 text-slate-600"
                              : "bg-[#1e1a28] border-white/10 text-slate-300"
                          }`}
                        >
                          Breakfast
                        </span>
                      </div>

                      {/* Section Title */}
                      <div className="flex items-center justify-between pt-0.5">
                        <span
                          className={`text-[11px] font-extrabold ${
                            isLight ? "text-slate-900" : "text-white"
                          }`}
                        >
                          All Items
                        </span>
                        <span
                          className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                            isLight
                              ? "bg-orange-50 border-orange-100 text-orange-500"
                              : "bg-orange-500/15 border-orange-500/30 text-orange-400"
                          }`}
                        >
                          <RotateCw size={10} />
                        </span>
                      </div>

                      {/* 2-Column Food Card Grid */}
                      <div className="grid grid-cols-2 gap-2 flex-1">
                        {MENU_ITEMS.map((item) => (
                          <div
                            key={item.name}
                            className={`rounded-2xl border p-1.5 shadow-xs flex flex-col justify-between transition-colors ${
                              isLight
                                ? "bg-white border-orange-100/90 hover:border-orange-300"
                                : "bg-[#1b1724] border-white/10 hover:border-orange-400/40"
                            }`}
                          >
                            <div>
                              <div
                                className={`relative h-14 rounded-xl overflow-hidden mb-1 ${
                                  isLight ? "bg-orange-50" : "bg-[#252030]"
                                }`}
                              >
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  sizes="120px"
                                  unoptimized
                                  className="object-cover"
                                />
                                <span
                                  className={`absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center shadow-xs ${
                                    isLight
                                      ? "bg-white/90 text-slate-400"
                                      : "bg-black/60 text-slate-200"
                                  }`}
                                >
                                  <Heart size={8} />
                                </span>
                              </div>
                              <p
                                className={`text-[10px] font-bold truncate px-0.5 ${
                                  isLight ? "text-slate-900" : "text-slate-100"
                                }`}
                              >
                                {item.name}
                              </p>
                            </div>

                            <div className="flex items-center justify-between px-0.5 pt-1">
                              <span
                                className={`text-[10px] font-extrabold ${
                                  isLight ? "text-orange-500" : "text-orange-400"
                                }`}
                              >
                                {item.price}
                              </span>
                              <button
                                type="button"
                                onClick={() => setScreen(1)}
                                aria-label={`Order ${item.name}`}
                                className="w-5 h-5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform cursor-pointer"
                              >
                                <Plus size={11} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mini Express UPI Cart Strip */}
                      <button
                        type="button"
                        onClick={() => setScreen(1)}
                        className="w-full px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white text-[10px] font-bold flex items-center justify-between shadow-sm cursor-pointer"
                      >
                        <span>2 items · ₹115</span>
                        <span>Pay by UPI →</span>
                      </button>
                    </motion.div>
                  )}

                  {/* Screen 1: Express Pickup Token */}
                  {screen === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.28 }}
                      className="flex-1 flex flex-col justify-center items-center text-center gap-3 font-sans"
                    >
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold ${
                          isLight
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        }`}
                      >
                        <Sparkles size={11} />
                        READY FOR PICKUP
                      </span>

                      <div
                        className={`w-full p-4 rounded-3xl border shadow-md space-y-2 ${
                          isLight
                            ? "bg-white border-orange-200/80"
                            : "bg-[#1b1724] border-orange-500/30"
                        }`}
                      >
                        <p className="text-[9.5px] font-mono uppercase tracking-widest text-slate-400">
                          Express Token
                        </p>
                        <p
                          className={`text-3xl font-black tracking-wider ${
                            isLight ? "text-slate-900" : "text-white"
                          }`}
                        >
                          #CA-104
                        </p>
                        <div
                          className={`mx-auto w-12 h-12 rounded-xl border flex items-center justify-center ${
                            isLight
                              ? "bg-orange-50 border-orange-200 text-orange-500"
                              : "bg-orange-500/15 border-orange-500/30 text-orange-400"
                          }`}
                        >
                          <QrCode size={26} />
                        </div>
                        <p
                          className={`text-[11px] font-bold ${
                            isLight ? "text-orange-500" : "text-orange-400"
                          }`}
                        >
                          Skip the queue · Counter 2
                        </p>
                      </div>

                      <div
                        className={`w-full p-2.5 rounded-2xl border flex items-center justify-center gap-1.5 text-[10.5px] font-semibold ${
                          isLight
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
                        }`}
                      >
                        <CheckCircle2 size={13} />
                        <span>Paid ₹115 via UPI · Zero Wait</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Screen 2: Parent Alert */}
                  {screen === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.28 }}
                      className="flex-1 flex flex-col justify-center gap-3 font-sans"
                    >
                      <div className="text-center">
                        <p
                          className={`text-3xl font-light ${
                            isLight ? "text-slate-900" : "text-white"
                          }`}
                        >
                          10:31
                        </p>
                        <p
                          className={`text-[10px] font-medium ${
                            isLight ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          Parent Lock Screen
                        </p>
                      </div>

                      <div
                        className={`p-3.5 rounded-2xl border shadow-md space-y-1.5 ${
                          isLight
                            ? "bg-white border-orange-200/80"
                            : "bg-[#1b1724] border-white/15"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px]">
                          <span
                            className={`inline-flex items-center gap-1.5 font-bold ${
                              isLight ? "text-orange-600" : "text-orange-400"
                            }`}
                          >
                            <BellRing size={12} />
                            CafeAura
                          </span>
                          <span className="text-slate-400">now</span>
                        </div>
                        <p
                          className={`text-[11px] leading-relaxed ${
                            isLight ? "text-slate-700" : "text-slate-200"
                          }`}
                        >
                          <strong>Viha</strong> picked up Order <strong>#CA-104</strong> from the campus canteen.
                        </p>
                      </div>

                      <div
                        className={`p-2.5 rounded-xl border text-center text-[10px] font-semibold flex items-center justify-center gap-1.5 ${
                          isLight
                            ? "bg-orange-50 border-orange-200 text-orange-600"
                            : "bg-orange-500/15 border-orange-500/30 text-orange-300"
                        }`}
                      >
                        <Clock size={11} />
                        <span>Daily Canteen Report Updated</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom CafeAura App Navigation Bar */}
              <div
                className={`relative z-10 border-t px-4 pt-2 pb-2 flex flex-col items-center gap-2 transition-colors duration-300 ${
                  isLight
                    ? "bg-white border-orange-100/80"
                    : "bg-[#121018] border-white/10"
                }`}
              >
                <div className="w-full grid grid-cols-4 text-[9px] font-sans font-semibold">
                  <button
                    type="button"
                    onClick={() => setScreen(0)}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                      screen === 0 ? "text-orange-500" : "text-slate-400"
                    }`}
                  >
                    <Home size={13} />
                    <span>Home</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setScreen(1)}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                      screen === 1 ? "text-orange-500" : "text-slate-400"
                    }`}
                  >
                    <ReceiptText size={13} />
                    <span>Orders</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setScreen(2)}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                      screen === 2 ? "text-orange-500" : "text-slate-400"
                    }`}
                  >
                    <Heart size={13} />
                    <span>Alerts</span>
                  </button>
                  <div className="flex flex-col items-center gap-0.5 text-slate-400">
                    <User size={13} />
                    <span>Profile</span>
                  </div>
                </div>
                <div
                  className={`w-20 h-1 rounded-full ${
                    isLight ? "bg-slate-900/20" : "bg-white/25"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Stage Pills Below Device */}
      <div className="relative z-10 mt-4 flex items-center gap-2">
        {SCREENS.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setScreen(idx)}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border transition-all cursor-pointer ${
              screen === idx
                ? "bg-orange-500/15 border-orange-400/50 text-orange-400"
                : "bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
