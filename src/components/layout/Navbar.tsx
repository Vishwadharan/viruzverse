"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import ViruzverseLogo from "../ui/ViruzverseLogo";
import ThemeToggle from "../theme/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 sm:py-3"
            : "py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-[#090912]/85 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
            {/* ── Brand Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-200 active:scale-95"
              aria-label="Viruzverse Home"
            >
              <ViruzverseLogo size={34} />
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/5">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-1.5 text-xs lg:text-[13px] font-mono tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-violet-600/30 border border-violet-500/50 shadow-[0_0_12px_rgba(167,139,250,0.35)] font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop Actions (Status Pill & CTA) ── */}
            <div className="hidden md:flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>P99 &lt;120ms</span>
              </div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-200 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight
                  size={13}
                  className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* ── Mobile Actions (Hamburger) ── */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-slate-200 transition-all duration-200 active:scale-95"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed top-[65px] left-0 right-0 bottom-0 bg-[#090912] border-t border-white/10 flex flex-col p-6 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 px-3">
                Navigation
              </p>
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "text-violet-300 bg-violet-950/40 border border-violet-500/30 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{label}</span>
                    <ArrowRight size={16} className="opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg transition-all active:scale-98"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
              <p className="text-center text-xs text-slate-500 font-mono">
                Coimbatore · Engineered for Scale
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
