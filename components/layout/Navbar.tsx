'use client';

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, MoreVertical, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" }, // ✅ Fix this line
  { href: "/careers",  label: "Careers"  },
  { href: "/contact",  label: "Contact"  },
];


export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY]     = useState(0);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    if (currentY < 10) {
      setVisible(true);
    } else if (currentY < lastY) {
      setVisible(true);   // scrolling up
    } else if (currentY > lastY) {
      setVisible(false);  // scrolling down
    }

    setLastY(currentY);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Top Navbar ── */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 ${!isHome ? "hidden md:block" : "block"}`}
        style={{
          backgroundColor: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(196,181,253,0.25)",
          boxShadow: "0 4px 30px rgba(124,58,237,0.08)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <nav
          className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center
                         transition-all duration-200 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                boxShadow: "0 4px 12px rgba(124,58,237,0.35)",
              }}
            >
              <Zap size={15} fill="#ffffff" color="#ffffff" aria-hidden />
            </div>
            <span
              className="text-[15px] font-extrabold tracking-[-0.03em]"
              style={{ color: "#0a0a0f" }}
            >
              Viruzverse
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map(link => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 rounded-xl text-[13.5px]
                               font-medium transition-all duration-200 inline-block"
                    style={{
                      color: isActive ? "#7c3aed" : "#4b5563",
                      backgroundColor: isActive
                        ? "rgba(124,58,237,0.08)"
                        : "transparent",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "#0a0a0f";
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "rgba(124,58,237,0.05)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "#4b5563";
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "transparent";
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "#7c3aed" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-white
                         transition-all duration-200 hover:opacity-90
                         hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Spacer to keep layout balanced on mobile */}
          <div className="md:hidden w-9" />
        </nav>
      </header>

      {/* ── Floating ⋮ button — mobile only, all pages ── */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="md:hidden fixed bottom-6 right-5 z-[60] w-12 h-12
                   flex items-center justify-center rounded-2xl"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #6d28d9, #5b21b6)"
            : "linear-gradient(135deg, #7c3aed, #6d28d9)",
          boxShadow: "0 6px 24px rgba(124,58,237,0.5)",
          border: "1px solid rgba(167,139,250,0.3)",
        }}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.08 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} color="#ffffff" aria-hidden />
            </motion.span>
          ) : (
            <motion.span
              key="dots"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MoreVertical size={20} color="#ffffff" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-[45]"
              style={{
                backgroundColor: "rgba(124,58,237,0.08)",
                backdropFilter: "blur(8px) saturate(150%)",
                WebkitBackdropFilter: "blur(8px) saturate(150%)",
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="md:hidden fixed left-3 right-3 z-[55] rounded-3xl overflow-hidden"
              style={{
                bottom: "76px",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(32px) saturate(200%)",
                WebkitBackdropFilter: "blur(32px) saturate(200%)",
                border: "1px solid rgba(196,181,253,0.35)",
                boxShadow:
                  "0 20px 60px rgba(124,58,237,0.15), 0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center px-4 py-3 rounded-2xl
                                   text-[15px] font-medium transition-all duration-150"
                        style={{
                          color: isActive ? "#7c3aed" : "#1f2937",
                          backgroundColor: isActive
                            ? "rgba(124,58,237,0.08)"
                            : "transparent",
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.backgroundColor =
                              "rgba(124,58,237,0.05)";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.backgroundColor =
                              "transparent";
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Divider + CTA */}
                <div
                  className="mt-2 pt-3 pb-1"
                  style={{ borderTop: "1px solid rgba(196,181,253,0.3)" }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-3
                               rounded-2xl text-[15px] font-bold text-white
                               active:scale-[0.98] transition-all duration-150"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                      boxShadow: "0 4px 16px rgba(124,58,237,0.35)",
                    }}
                  >
                    Get in Touch
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
