"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Trash2,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";

const EMAIL = "helpdesk@viruzverse.in";

const WHAT_GETS_DELETED = [
  "Staff login credentials and personal identifiers",
  "Saved session tokens, device IDs, and push keys",
  "Outlet preferences, custom tags, and local caches",
];

const WHAT_IS_RETAINED = [
  "Anonymized transactional receipts (mandatory for GST tax audits)",
  "Immutable system audit logs for security integrity",
];

export default function DeleteAccountPage() {
  const [method, setMethod] = useState<"app" | "email">("app");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-transparent pt-24 pb-20 transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-6"
        >
          <ArrowLeft size={13} />
          <span>Back to CafeAura</span>
        </Link>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-rose-500/20 bg-rose-500/10 text-rose-500 mb-3">
            <Trash2 size={13} />
            <span>Account & Data Deletion</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3">
            Delete CafeAura Account
          </h1>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Per Google Play &amp; Apple Store privacy guidelines, you can permanently request deletion of your CafeAura account and personal records.
          </p>
        </div>

        {/* Method Toggle */}
        <div className="flex p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-6 text-xs font-mono">
          <button
            onClick={() => setMethod("app")}
            className={`flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
              method === "app"
                ? "bg-[var(--accent)] text-white shadow-xs"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Smartphone size={14} />
            <span>In-App Deletion</span>
          </button>
          <button
            onClick={() => setMethod("email")}
            className={`flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
              method === "email"
                ? "bg-[var(--accent)] text-white shadow-xs"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Mail size={14} />
            <span>Email Request</span>
          </button>
        </div>

        {/* Tab 1: In-App Instructions */}
        {method === "app" ? (
          <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-4 mb-6">
            <h2 className="text-sm font-bold text-[var(--text-primary)]">
              Follow these steps in the mobile app:
            </h2>
            <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[var(--accent-light)]/40 text-[var(--accent)] flex items-center justify-center shrink-0 font-bold text-[11px]">
                  1
                </span>
                <span>Open CafeAura &gt; Go to <strong>Settings</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[var(--accent-light)]/40 text-[var(--accent)] flex items-center justify-center shrink-0 font-bold text-[11px]">
                  2
                </span>
                <span>Tap <strong>Account &amp; Security</strong> &gt; <strong>Delete Account</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[var(--accent-light)]/40 text-[var(--accent)] flex items-center justify-center shrink-0 font-bold text-[11px]">
                  3
                </span>
                <span>Enter your admin PIN to confirm permanent wipe.</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-4 mb-6">
            <h2 className="text-sm font-bold text-[var(--text-primary)]">
              Submit deletion request via email:
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Send an email from your registered account email with subject <code>Delete CafeAura Account</code>:
            </p>
            <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
              <span className="text-[var(--text-primary)] font-bold">{EMAIL}</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors text-[11px]"
              >
                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        )}

        {/* Data Retention Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
            <p className="text-xs font-bold text-rose-500 mb-2 flex items-center gap-1.5">
              <AlertTriangle size={13} />
              <span>Data Deleted Permanently</span>
            </p>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc pl-4">
              {WHAT_GETS_DELETED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
            <p className="text-xs font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[var(--accent)]" />
              <span>Retained for Legal Audits</span>
            </p>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc pl-4">
              {WHAT_IS_RETAINED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
