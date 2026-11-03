import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export const metadata: Metadata = { title: "404 — Page Not Found" };

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[var(--bg-canvas)]">
      <div className="max-w-md w-full text-center p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-lg">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 bg-[var(--accent-light)]/30 border border-[var(--accent)]/20 text-[var(--accent)]">
          <Compass size={24} />
        </div>

        <p className="text-5xl font-black font-mono text-[var(--accent)] mb-2">404</p>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Page not found
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been relocated.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-xs transition-all active:scale-98"
          >
            <Home size={14} />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
