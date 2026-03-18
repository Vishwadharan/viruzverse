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
  { href: "/products", label: "Products" },
  { href: "/careers",  label: "Careers"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [isOpen,  setIsOpen]  = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY,   setLastY]   = useState(0);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY < 10)           setVisible(true);
    else if (currentY < lastY)   setVisible(true);
    else if (currentY > lastY)   setVisible(false);
    setLastY(currentY);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <style>{`
        /* Underline hover effect */
        .nav-link-underline {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 24px);
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #7c3aed, #a78bfa);
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        .nav-link:hover .nav-link-underline {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-link[data-active="true"] .nav-link-underline {
          transform: translateX(-50%) scaleX(1);
          background: linear-gradient(90deg, #7c3aed, #a78bfa);
        }

        /* Color transition */
        .nav-link {
          color: #4b5563;
          transition: color 0.15s ease;
        }
        .nav-link:hover {
          color: #0a0a0f;
        }
        .nav-link[data-active="true"] {
          color: #7c3aed;
          font-weight: 600;
        }

        /* CTA shimmer */
        @keyframes ctaShimmer {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(300%)  skewX(-12deg); }
        }
      `}</style>

      {/* ── Top Navbar ── */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 ${!isHome ? "hidden md:block" : "block"}`}
        style={{
          backgroundColor: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(196,181,253,0.2)",
          boxShadow: "0 1px 0 rgba(196,181,253,0.15), 0 4px 24px rgba(124,58,237,0.06)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <nav
          className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 h-16
                     flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center
                         transition-all duration-300
                         group-hover:scale-[1.1] group-hover:rotate-[-8deg]"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                boxShadow: "0 4px 12px rgba(124,58,237,0.35)",
              }}
            >
              <Zap size={15} fill="#fff" color="#fff" aria-hidden />
            </div>
            <span
              className="text-[15px] font-extrabold tracking-[-0.03em]
                         transition-colors duration-200 group-hover:text-[#7c3aed]"
              style={{ color: "#0a0a0f" }}
            >
              Viruzverse
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(link => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-active={isActive}
                    className="nav-link relative px-4 py-2 text-[13.5px] inline-block"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span className="nav-link-underline" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-xl
                         text-[13px] font-bold text-white flex items-center
                         transition-all duration-200
                         hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                boxShadow: "0 4px 16px rgba(124,58,237,0.38), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 24px rgba(124,58,237,0.52), inset 0 1px 0 rgba(255,255,255,0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 16px rgba(124,58,237,0.38), inset 0 1px 0 rgba(255,255,255,0.15)";
              }}
            >
              <span className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)",
                width: "60%",
                animation: "ctaShimmer 3s ease-in-out infinite",
              }} />
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>

          {/* Mobile spacer */}
          <div className="md:hidden w-9" />
        </nav>
      </header>

      {/* ── Floating FAB — mobile only ── */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="md:hidden fixed bottom-6 right-5 z-[60] w-12 h-12
                   flex items-center justify-center rounded-2xl"
        style={{
          background: isOpen
            ? "linear-gradient(135deg,#6d28d9,#5b21b6)"
            : "linear-gradient(135deg,#7c3aed,#6d28d9)",
          boxShadow: isOpen
            ? "0 6px 24px rgba(91,33,182,0.55)"
            : "0 6px 24px rgba(124,58,237,0.5), 0 0 0 1px rgba(167,139,250,0.2)",
          border: "1px solid rgba(167,139,250,0.25)",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0,   opacity: 1, scale: 1   }}
              exit={{    rotate: 90,  opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.16 }}>
              <X size={20} color="#fff" aria-hidden />
            </motion.span>
          ) : (
            <motion.span key="dots"
              initial={{ rotate: 90,  opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0,   opacity: 1, scale: 1   }}
              exit={{    rotate: -90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.16 }}>
              <MoreVertical size={20} color="#fff" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              className="md:hidden fixed inset-0 z-[45]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "rgba(7,6,15,0.4)",
                backdropFilter: "blur(8px) saturate(150%)",
                WebkitBackdropFilter: "blur(8px) saturate(150%)",
              }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="menu"
              className="md:hidden fixed left-3 right-3 z-[55]"
              style={{ bottom: "76px" }}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(32px) saturate(200%)",
                WebkitBackdropFilter: "blur(32px) saturate(200%)",
                border: "1px solid rgba(196,181,253,0.3)",
                borderRadius: 24,
                boxShadow: "0 20px 60px rgba(124,58,237,0.14), 0 4px 16px rgba(0,0,0,0.07)",
                overflow: "hidden",
              }}>
                {/* Top accent */}
                <div style={{
                  height: 2,
                  background: "linear-gradient(90deg,#7c3aed,#a78bfa,#7c3aed)",
                }} />

                <nav className="px-3 py-3 flex flex-col gap-0.5">
                  {NAV_LINKS.map((link, i) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0  }}
                        transition={{ delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={link.href}
                          className="relative flex items-center justify-between
                                     px-4 py-3 rounded-2xl text-[15px] font-medium
                                     transition-all duration-150"
                          style={{
                            color: isActive ? "#7c3aed" : "#1f2937",
                            background: isActive ? "rgba(124,58,237,0.07)" : "transparent",
                          }}
                          onMouseEnter={e => {
                            if (!isActive) {
                              (e.currentTarget as HTMLElement).style.background =
                                "rgba(124,58,237,0.04)";
                              (e.currentTarget as HTMLElement).style.transform =
                                "translateX(3px)";
                            }
                          }}
                          onMouseLeave={e => {
                            if (!isActive) {
                              (e.currentTarget as HTMLElement).style.background =
                                "transparent";
                              (e.currentTarget as HTMLElement).style.transform =
                                "translateX(0)";
                            }
                          }}
                        >
                          {isActive && (
                            <span
                              className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                              style={{
                                background: "linear-gradient(to bottom,#7c3aed,#a78bfa)",
                              }}
                            />
                          )}
                          <span className={isActive ? "pl-2" : ""}>{link.label}</span>
                          {isActive && (
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background: "#7c3aed",
                                boxShadow: "0 0 6px rgba(124,58,237,0.6)",
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <div
                    className="mt-2 pt-2 pb-1"
                    style={{ borderTop: "1px solid rgba(196,181,253,0.25)" }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="/contact"
                        className="relative overflow-hidden flex items-center justify-center
                                   px-4 py-3.5 rounded-2xl text-[15px] font-bold text-white
                                   active:scale-[0.98] transition-transform duration-150"
                        style={{
                          background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                          boxShadow: "0 4px 16px rgba(124,58,237,0.38), inset 0 1px 0 rgba(255,255,255,0.15)",
                        }}
                      >
                        <span className="absolute inset-0 pointer-events-none" style={{
                          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)",
                          width: "60%",
                          animation: "ctaShimmer 3s ease-in-out infinite",
                        }} />
                        <span className="relative z-10">Get in Touch</span>
                      </Link>
                    </motion.div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
