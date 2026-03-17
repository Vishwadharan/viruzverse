"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../../lib/constants";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about",    label: "About"    },
  { href: "/careers",  label: "Careers"  },
  { href: "/contact",  label: "Contact"  },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/viruzverse", icon: "in" },
  { label: "X",        href: "https://x.com/viruzverse",                icon: "𝕏"  },
  { label: "GitHub",   href: "https://github.com/viruzverse",            icon: "gh" },
  { label: "WhatsApp", href: WHATSAPP_URL,                               icon: "wa" },
];

const SERVICES = [
  "AI Automation",
  "SaaS Platforms",
  "CRM / ERP",
  "Edtech Solutions",
  "Mobile Apps",
  "API Integrations",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#0a0a0f" }}>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, #7c3aed, #a78bfa, #7c3aed, transparent)" }}
      />

      {/* Orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-8">

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-12 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-4 w-fit">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 16px rgba(124,58,237,0.4)" }}
              >
                <Zap size={16} fill="#ffffff" color="#ffffff" />
              </div>
              <span className="text-[16px] font-extrabold tracking-[-0.03em]" style={{ color: "#ffffff" }}>
                Viruzverse
              </span>
            </Link>

            <p className="text-[13px] leading-[1.8] mb-4" style={{ color: "#6b7280" }}>
              B2B software company building AI-powered products for the real world.
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#a78bfa", boxShadow: "0 0 6px rgba(167,139,250,0.8)" }}
              />
              <span className="text-[11px] font-mono" style={{ color: "#a78bfa" }}>Accepting projects</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={12} style={{ color: "#6b7280", flexShrink: 0 }} />
                <span className="text-[12px] font-mono" style={{ color: "#6b7280" }}>Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} style={{ color: "#6b7280", flexShrink: 0 }} />
                {/* ✅ plain text — no markdown */}
                <a
                  href="mailto:hello@viruzverse.com"
                  className="text-[12px] font-mono transition-colors duration-200"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "#a78bfa")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "#6b7280")}
                >
                  hello@viruzverse.com
                </a>
              </div>
            </div>
          </div>

          {/* Company + Services */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:gap-12">

            {/* Company */}
            <div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#4b5563" }}>
                Company
              </p>
              <ul className="flex flex-col gap-2.5">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-[13px] font-medium transition-all duration-200 flex items-center gap-1 group w-fit"
                      style={{ color: "#9ca3af" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#4b5563" }}>
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {SERVICES.map(s => (
                  <li key={s}>
                    <span className="text-[13px] font-medium" style={{ color: "#9ca3af" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA + Socials */}
          <div className="lg:col-span-1">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#4b5563" }}>
              Start a project
            </p>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-2xl p-5 mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(109,40,217,0.08) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <p className="text-[13px] leading-[1.7] mb-4" style={{ color: "#9ca3af" }}>
                Have a project in mind? We respond within 24 hours.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[12px] font-bold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,0.4)" }}
              >
                Get in Touch <ArrowUpRight size={12} />
              </Link>
            </motion.div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-bold font-mono transition-all duration-200"
                  style={{ color: "#6b7280", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#a78bfa";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124,58,237,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "#6b7280";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] mb-5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-mono" style={{ color: "#4b5563" }}>
            © 2026 Viruzverse. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map(item => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[11px] font-mono transition-colors duration-200"
                style={{ color: "#4b5563" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "#9ca3af")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "#4b5563")}
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-[11px] font-mono" style={{ color: "#4b5563" }}>
            Made with ♥ in Coimbatore
          </p>
        </div>

      </div>
    </footer>
  );
}
