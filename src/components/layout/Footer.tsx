"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, LINKEDIN_URL, INSTAGRAM_URL } from "../../lib/constants";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about",    label: "About"    },
  { href: "/careers",  label: "Careers"  },
  { href: "/contact",  label: "Contact"  },
];

const SERVICES = [
  "AI Automation",
  "SaaS Platforms",
  "CRM / ERP",
  "Edtech Solutions",
  "Mobile Apps",
  "API Integrations",
];

/* ── SVG icon components ── */
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn",  href: LINKEDIN_URL,  Icon: LinkedInIcon,  hoverColor: "#0A66C2" },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon, hoverColor: "#E1306C" },
  { label: "WhatsApp",  href: WHATSAPP_URL,  Icon: WhatsAppIcon,  hoverColor: "#25D366" },
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
                <span className="text-[12px] font-mono" style={{ color: "#6b7280" }}>1274, Metupalayam Road, KK pudur, Coimbatore, 641038</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} style={{ color: "#6b7280", flexShrink: 0 }} />
                <a
                  href="mailto:contact@viruzverse.in"
                  className="text-[12px] font-mono transition-colors duration-200"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "#a78bfa")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "#6b7280")}
                >
                  contact@viruzverse.in
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
              {SOCIALS.map(({ label, href, Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    color: "#6b7280",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = hoverColor;
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${hoverColor}18`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${hoverColor}40`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "#6b7280";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Icon />
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
          <p className="text-[11px] font-mono" style={{ color: "#4b5563" }}>
            Made with ♥ in Coimbatore
          </p>
        </div>

      </div>
    </footer>
  );
}
