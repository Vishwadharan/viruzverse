"use client";

import { useState } from "react";
import { ArrowRight, Mail, Sparkles, CheckCircle2, Copy, Check } from "lucide-react";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CAREERS_EMAIL } from "@/lib/constants";

export default function OpenApplicationCTA() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", portfolio: "", note: "" });

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(CAREERS_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError(`Could not send right now. Please email ${CAREERS_EMAIL} directly.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 border-t border-white/10 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-5 shadow-xs">
            <Sparkles size={13} />
            <span>Open Application</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            No open positions right now
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto mb-7">
            Send us your portfolio, GitHub, or resume and we&apos;ll reach out when a matching opportunity opens up.
          </p>

          {!showForm && !submitted && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Magnetic3DButton
                variant="primary"
                onClick={() => setShowForm(true)}
              >
                <Mail size={15} />
                <span>Send Open Application</span>
                <ArrowRight size={14} />
              </Magnetic3DButton>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono border border-white/10 bg-white/[0.04] hover:border-violet-400/50 text-slate-300 transition-all cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : CAREERS_EMAIL}</span>
              </button>
            </div>
          )}

          {showForm && !submitted && (
            <form
              onSubmit={handleSubmit}
              className="mt-4 text-left p-6 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl shadow-xl space-y-4"
            >
              {/* Honeypot anti-spam field */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Good Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Portfolio / GitHub / LinkedIn URL *
                </label>
                <input
                  type="url"
                  required
                  value={form.portfolio}
                  onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                  placeholder="https://github.com/username"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Short Note *
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Tell us what you love building..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 font-medium">{error}</p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Open Application — ${form.name || "Candidate"}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPortfolio: ${form.portfolio}\n\n${form.note}`)}`}
                  className="text-xs font-mono text-violet-400 hover:underline"
                >
                  Or open in email app ({CAREERS_EMAIL})
                </a>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white shadow-lg transition-all cursor-pointer"
                >
                  <span>{loading ? "Sending..." : "Submit Application"}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          )}

          {submitted && (
            <div className="mt-4 p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex flex-col items-center gap-2">
              <CheckCircle2 size={24} className="text-emerald-400" />
              <h3 className="text-base font-bold text-white">Application received</h3>
              <p className="text-xs text-slate-400 max-w-md">
                Thanks {form.name}! We&apos;ve noted your profile and will reach out if a matching role opens up.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(false);
                  setForm({ name: "", email: "", portfolio: "", note: "" });
                }}
                className="mt-2 text-xs font-mono text-violet-400 hover:underline cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
