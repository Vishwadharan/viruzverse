import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
  // Base
  bg:           "#ffffff",
  "bg-soft":    "#faf9ff",
  "bg-subtle":  "#f3f0ff",

  // Purple brand
  brand:        "#7c3aed",
  "brand-2":    "#6d28d9",
  "brand-3":    "#5b21b6",
  "brand-light":"#ede9fe",
  "brand-mid":  "#ddd6fe",
  "brand-dim":  "#7c3aed1a",

  // Text
  ink:          "#0a0a0f",
  "ink-2":      "#1e1b2e",
  muted:        "#6b7280",
  dim:          "#9ca3af",

  // Borders
  line:         "#e5e7eb",
  "line-2":     "#d1d5db",
  "line-brand": "#c4b5fd",
},



      // ── Typography ──────────────────────────
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "Menlo", "monospace"],
      },

      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
        "xs":  ["11px", { lineHeight: "16px" }],
        "sm":  ["13px", { lineHeight: "20px" }],
        "base":["15px", { lineHeight: "24px" }],
        "lg":  ["17px", { lineHeight: "28px" }],
        "xl":  ["19px", { lineHeight: "30px" }],
        "2xl": ["22px", { lineHeight: "32px" }],
        "3xl": ["26px", { lineHeight: "36px" }],
        "4xl": ["32px", { lineHeight: "40px" }],
        "5xl": ["40px", { lineHeight: "48px" }],
        "6xl": ["52px", { lineHeight: "58px" }],
        "7xl": ["64px", { lineHeight: "70px" }],
        "8xl": ["80px", { lineHeight: "86px" }],
        "9xl": ["96px", { lineHeight: "100px" }],
      },

      // ── Max widths ───────────────────────────
      maxWidth: {
        site:      "1200px",
        "site-sm": "960px",
        "site-xs": "720px",
        prose:     "68ch",
      },

      // ── Border radius ────────────────────────
      borderRadius: {
        "xs":  "4px",
        "sm":  "6px",
        "md":  "8px",
        "lg":  "12px",
        "xl":  "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        "full":"9999px",
      },

      // ── Shadows ──────────────────────────────
      boxShadow: {
        "xs":          "0 1px 2px rgba(0,0,0,0.05)",
        "sm":          "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        "card":        "0 1px 4px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        "card-hover":  "0 6px 20px rgba(0,0,0,0.1),  0 2px 6px rgba(0,0,0,0.06)",
        "card-lg":     "0 8px 32px rgba(0,0,0,0.1),  0 2px 8px rgba(0,0,0,0.05)",
        "yellow":      "0 4px 20px rgba(245,197,24,0.18), 0 2px 6px rgba(245,197,24,0.1)",
        "yellow-sm":   "0 2px 10px rgba(245,197,24,0.2)",
        "yellow-lg":   "0 8px 40px rgba(245,197,24,0.22)",
        "btn":         "0 1px 2px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
        "btn-yellow":  "0 1px 2px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.35), 0 0 0 1px rgba(245,197,24,0.6)",
        "btn-dark":    "0 1px 2px rgba(0,0,0,0.3),  inset 0 1px 0 rgba(255,255,255,0.06)",
        "inner":       "inset 0 2px 4px rgba(0,0,0,0.06)",
        "none":        "none",
      },

      // ── Keyframes ────────────────────────────
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-down": {
          "0%":   { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)"     },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)"    },
        },
        "slide-in-right": {
          "0%":   { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)"    },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        pulse2: {
          "0%,100%": { opacity: "0.5", transform: "scale(0.9)"  },
          "50%":     { opacity: "1",   transform: "scale(1.15)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)"    },
          "50%":     { transform: "translateY(-6px)" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)"   },
          "100%": { transform: "rotate(360deg)" },
        },
        "border-glow": {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "1"   },
        },
        marquee: {
          "0%":   { transform: "translateX(0)"    },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          "0%":   { height: "0"                                          },
          "100%": { height: "var(--radix-accordion-content-height)"      },
        },
        "accordion-up": {
          "0%":   { height: "var(--radix-accordion-content-height)"      },
          "100%": { height: "0"                                          },
        },
      },

      // ── Animations ───────────────────────────
      animation: {
        "fade-up":        "fade-up        0.5s  cubic-bezier(0.21,0.47,0.32,0.98) forwards",
        "fade-down":      "fade-down      0.5s  cubic-bezier(0.21,0.47,0.32,0.98) forwards",
        "fade-in":        "fade-in        0.4s  ease forwards",
        "scale-in":       "scale-in       0.4s  cubic-bezier(0.21,0.47,0.32,0.98) forwards",
        "slide-in-right": "slide-in-right 0.45s cubic-bezier(0.21,0.47,0.32,0.98) forwards",
        shimmer:          "shimmer        2.5s  linear infinite",
        pulse2:           "pulse2         2.5s  ease-in-out infinite",
        float:            "float          4s    ease-in-out infinite",
        "spin-slow":      "spin-slow      8s    linear infinite",
        "border-glow":    "border-glow    3s    ease-in-out infinite",
        marquee:          "marquee        30s   linear infinite",
        "accordion-down": "accordion-down 0.2s  ease-out",
        "accordion-up":   "accordion-up   0.2s  ease-out",
      },

      // ── Background images ─────────────────────
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(20,20,19,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,19,0.05) 1px, transparent 1px)",
        "dots-light":
          "radial-gradient(circle, rgba(20,20,19,0.08) 1px, transparent 1px)",
        "gradient-yellow":
          "linear-gradient(118deg, #d4a017 0%, #f5c518 45%, #ffe566 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #f2f2f0 0%, #e8e8e5 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(245,197,24,0.1) 0%, transparent 55%)",
      },

      // ── Transitions ───────────────────────────
      transitionTimingFunction: {
        spring: "cubic-bezier(0.21, 0.47, 0.32, 0.98)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // ── Z-index ───────────────────────────────
      zIndex: {
        "0":    "0",
        "10":   "10",
        "20":   "20",
        "30":   "30",
        "40":   "40",
        "50":   "50",
        nav:    "100",
        modal:  "200",
        toast:  "300",
        tip:    "400",
      },
    },
  },
  plugins: [],
};

export default config;
