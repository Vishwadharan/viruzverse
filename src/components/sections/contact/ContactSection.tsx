"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_NUMBER } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

const SERVICES = [
  "AI Automation", "Custom SaaS", "CRM / ERP",
  "Edtech Solution", "Custom Project", "Cafeaura / Cafeaura OS", "Other",
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
      // 🔧 Replace with Resend / Formspree / your API route
      await new Promise((r) => setTimeout(r, 1200));
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <section className="pb-24 relative overflow-hidden">
      <div className="max-w-site container-pad mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="rounded-2xl bg-surface border border-border p-8 lg:p-10">
              {state === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle2 size={48} className="text-green-400" />
                  <h3 className="text-xl font-bold text-text-primary">Message sent!</h3>
                  <p className="text-text-secondary text-sm max-w-xs">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setState("idle"); setForm({ name:"",email:"",company:"",service:"",message:"" }); }}
                    className="mt-2 text-xs font-semibold text-brand-glow hover:underline underline-offset-2">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",    label: "Your name *",      placeholder: "John Doe",          type: "text"  },
                      { name: "email",   label: "Email address *",   placeholder: "john@company.com",  type: "email" },
                      { name: "company", label: "Company / Project", placeholder: "Acme Corp",         type: "text"  },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-text-secondary mb-1.5 font-mono">{field.label}</label>
                        <input name={field.name} type={field.type} placeholder={field.placeholder}
                          value={(form as any)[field.name]} onChange={handleChange}
                          required={field.label.includes("*")}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5 font-mono">I'm interested in</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-primary focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all">
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 font-mono">Tell us about your project *</label>
                    <textarea name="message" placeholder="Describe your project, problem, or idea..."
                      value={form.message} onChange={handleChange} required rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all resize-none" />
                  </div>
                  {state === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-xs p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle size={14} /> Something went wrong. Please email us directly.
                    </div>
                  )}
                  <button type="submit" disabled={state === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                    {state === "loading" ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-surface border border-border p-6 space-y-4">
              <h3 className="text-sm font-bold text-text-primary">Direct contact</h3>
              {[
                { icon: Mail,   label: "Email",    value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: Phone,  label: "Phone",    value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
                { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu, India", href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-brand-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-secondary mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-text-primary hover:text-brand-glow transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm text-text-primary">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href={`https://wa.me/8300262005?text=Hi, I'd like to discuss a project with Viruzverse.`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-green-500/10 border border-green-500/20 hover:border-green-500/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare size={18} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">Chat on WhatsApp</p>
                <p className="text-xs text-text-secondary">Quickest way to reach us</p>
              </div>
            </a>

            <div className="rounded-2xl bg-surface border border-border p-6">
              <h3 className="text-sm font-bold text-text-primary mb-3">What happens next?</h3>
              <ol className="space-y-3">
                {["We read every message personally","You get a response within 24 hours","We set up a quick discovery call","We scope your project together"].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-text-secondary">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-violet/15 border border-brand-violet/25 flex items-center justify-center text-[10px] font-black text-brand-violet">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
