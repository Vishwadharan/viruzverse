"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    // ← No <html> or <body> — layout already provides them
    <div className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "#faf9ff" }}
    >
      <div className="max-w-md w-full text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-3xl mb-6"
          style={{ background: "rgba(124,58,237,0.1)", border: "1.5px solid rgba(124,58,237,0.2)" }}
        >
          <span className="text-2xl">⚠</span>
        </div>

        <h2 className="text-[24px] font-black mb-3" style={{ color: "#0a0a0f" }}>
          Something went wrong
        </h2>
        <p className="text-[14px] mb-8" style={{ color: "#6b7280" }}>
          {error.message ?? "An unexpected error occurred."}
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-2xl text-[13px] font-bold text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-2xl text-[13px] font-semibold"
            style={{
              color: "#374151",
              background: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.95)",
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
