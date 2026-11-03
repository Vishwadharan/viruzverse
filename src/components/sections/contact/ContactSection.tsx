"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FormState = "idle" | "loading" | "success" | "error";

const SERVICES = [
  "Custom SaaS Engineering",
  "Enterprise CRM / ERP Systems",
  "High-Throughput APIs & Cloud",
  "Edtech Solutions",
  "Cafeaura Restaurant OS",
  "Other Inquiry",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <section className="pb-16 sm:pb-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form container */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
                {state === "success" ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message received</h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                      Thank you for reaching out. We will review your project details and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setState("idle");
                        setForm({ name: "", email: "", company: "", service: "", message: "" });
                      }}
                      className="mt-3 text-xs font-semibold text-violet-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Arun Kumar"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="arun@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                          Company / Project
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Technologies"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090912] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-violet-500 transition-all"
                        >
                          <option value="">Select a service category</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your platform requirements, technical stack constraints, and estimated launch timeline..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all resize-none"
                      />
                    </div>

                    {state === "error" && (
                      <div className="flex items-center gap-2 text-xs text-rose-400 font-medium">
                        <AlertCircle size={14} />
                        <span>Failed to submit. Please email us directly at {CONTACT_EMAIL}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg transition-all active:scale-98 disabled:opacity-50"
                    >
                      <span>{state === "loading" ? "Submitting Inquiry..." : "Send Technical Inquiry"}</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Details sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl">
                <h3 className="text-sm font-bold text-white mb-4">Direct Communication</h3>
                <div className="space-y-4 text-xs sm:text-sm font-mono">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-500 text-[10px]">Email</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-violet-300 transition-colors">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-500 text-[10px]">Phone</p>
                      <a href={`tel:${CONTACT_PHONE}`} className="text-white hover:text-violet-300 transition-colors">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-500 text-[10px]">Engineering HQ</p>
                      <p className="text-white">Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl">
                <h3 className="text-sm font-bold text-white mb-2">Prefer instant chat?</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Connect directly with our engineering founders on WhatsApp for immediate scoping inquiries.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300 hover:underline"
                >
                  <span>Open WhatsApp Chat</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
