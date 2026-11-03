"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[var(--bg-canvas)]">
      <div className="max-w-md w-full text-center p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-lg">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 bg-rose-500/10 border border-rose-500/20 text-rose-500">
          <AlertTriangle size={24} />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-xs transition-all active:scale-98"
          >
            <RotateCcw size={14} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-all"
          >
            <Home size={14} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
