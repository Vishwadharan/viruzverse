"use client";

import Link from "next/link";
import { MapPin, Mail, ArrowUpRight, Heart } from "lucide-react";
import ViruzverseLogo from "../ui/ViruzverseLogo";
import { WHATSAPP_URL, LINKEDIN_URL, INSTAGRAM_URL } from "../../lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/services/custom-saas", label: "Multi-Tenant SaaS" },
  { href: "/services/crm-erp", label: "CRM / ERP Platforms" },
  { href: "/services/custom-projects", label: "Custom Architecture & APIs" },
  { href: "/services/edtech-solutions", label: "Enterprise LMS Systems" },
];

const PRODUCTS = [
  { href: "/products/cafeaura", label: "Cafeaura — Restaurant OS" },
];

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
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedInIcon },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#06060a] text-slate-400 overflow-hidden">
      {/* Genesis FX Giant Background Watermark */}
      <div
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/[0.022] text-[15vw] font-black tracking-[-0.06em] select-none uppercase whitespace-nowrap z-0"
        aria-hidden="true"
      >
        VIRUZVERSE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center group w-fit">
              <ViruzverseLogo size={38} />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Architecting next-generation B2B SaaS platforms and enterprise operations software. Engineered for sub-120ms latency, zero legacy debt, and 100% proprietary client IP ownership.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono text-slate-500 mt-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-violet-400" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-violet-400" />
                <a href="mailto:viruzverse@gmail.com" className="hover:text-violet-300 transition-colors">
                  viruzverse@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-violet-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Engineering
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {SERVICES.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-violet-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Social */}
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Proprietary OS
            </p>
            <ul className="flex flex-col gap-2.5 text-sm mb-6">
              {PRODUCTS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-violet-400 transition-colors inline-flex items-center gap-1 group font-semibold text-violet-300"
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-3">
              Network
            </p>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-violet-300 hover:border-violet-500/40 hover:bg-violet-950/30 transition-all shadow-xs"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Viruzverse Technologies. B2B Enterprise Software Systems.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>All Global Systems Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
