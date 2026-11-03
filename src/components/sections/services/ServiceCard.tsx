"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Server,
  Layers,
  Users,
  BookOpen,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceIconKey } from "@/lib/services";

const ICON_MAP: Record<ServiceIconKey, LucideIcon> = {
  Server,
  Layers,
  Users,
  BookOpen,
  Puzzle,
};

export function ServiceCard({ s }: { s: Service; i?: number }) {
  const Icon = ICON_MAP[s.iconKey] || Server;

  return (
    <Link
      href={s.href}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200"
    >
      <div>
        {/* Top bar: Icon and Ghost number */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--accent-light)]/30 border border-[var(--accent)]/20 text-[var(--accent)] transition-transform duration-200 group-hover:scale-105">
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span className="text-xs font-mono font-bold text-[var(--text-muted)] opacity-60 group-hover:text-[var(--accent)] transition-colors">
            {s.num}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
          <span>{s.name}</span>
          <ArrowUpRight
            size={16}
            className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[var(--accent)]"
          />
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] mb-6">
          {s.desc}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-subtle)]">
        {s.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
