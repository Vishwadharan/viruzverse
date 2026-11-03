"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Magnetic3DButton({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  target,
  rel,
}: Props) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-98 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses: Record<string, string> = {
    primary:
      "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 border border-transparent",
    outline:
      "bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent)] shadow-xs hover:-translate-y-0.5",
    ghost:
      "bg-transparent hover:bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
