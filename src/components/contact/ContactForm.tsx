"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { Send, CheckCircle, RotateCcw } from "lucide-react";

type FieldName = "name" | "email" | "phone" | "service" | "message";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState<FieldName | null>(null);

  const inputStyle = (name: FieldName): CSSProperties => ({
    width: "100%",
    padding: "12px 14px",
    fontSize: "13px",
    fontFamily: "inherit",
    color: "white",
    background: focused === name ? "rgba(124,58,237,0.06)" : "rgba(255,255,255,0.03)",
    border: focused === name
      ? "1px solid rgba(124,58,237,0.4)"
      : "1px solid rgba(255,255,255,0.07)",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.18s ease",
    boxShadow: focused === name ? "0 0 0 3px rgba(124,58,237,0.08)" : "none",
  });

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontFamily: "monospace",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.32)",
    marginBottom: "7px",
  };

  /* ── Success ── */
  if (submitted) {
    return (
      <>
        <style>{`
          @keyframes pop { 0%{transform:scale(.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
        `}</style>
        <div style={{ textAlign:"center", padding:"40px 0" }}>
          <div style={{
            width:64, height:64, borderRadius:"50%",
            background:"linear-gradient(135deg,#10b981,#059669)",
            display:"flex", alignItems:"center", justifyContent:"center",
            margin:"0 auto 20px",
            animation:"pop .5s cubic-bezier(.22,1,.36,1) forwards",
            boxShadow:"0 12px 40px rgba(16,185,129,0.35)",
          }}>
            <CheckCircle size={28} color="white" strokeWidth={2} />
          </div>
          <h3 style={{ fontSize:20, fontWeight:900, color:"white", marginBottom:8 }}>
            Message sent!
          </h3>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", marginBottom:24 }}>
            We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              display:"inline-flex", alignItems:"center", gap:7,
              padding:"10px 20px", borderRadius:10,
              background:"rgba(124,58,237,0.12)",
              border:"1px solid rgba(124,58,237,0.22)",
              color:"#a78bfa", fontSize:13, fontWeight:600,
              cursor:"pointer", transition:"all .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(124,58,237,0.2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(124,58,237,0.12)")}
          >
            <RotateCcw size={12} />
            Send another
          </button>
        </div>
      </>
    );
  }

  /* ── Form ── */
  return (
    <>
      <style>{`
        .cf-placeholder::placeholder { color: rgba(255,255,255,0.18); }
        select option { background: #0f0b1a; color: white; }
      `}</style>

      <form
        onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
        style={{ display:"flex", flexDirection:"column", gap:18 }}
      >
        {/* Name + Email */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <div>
            <label style={labelStyle}>Name <span style={{ color:"#a78bfa" }}>*</span></label>
            <input
              type="text" required placeholder="Your name"
              className="cf-placeholder"
              style={inputStyle("name")}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label style={labelStyle}>Email <span style={{ color:"#a78bfa" }}>*</span></label>
            <input
              type="email" required placeholder="your@email.com"
              className="cf-placeholder"
              style={inputStyle("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        {/* Phone + Service */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <div>
            <label style={labelStyle}>Phone</label>
            <input
              type="tel" placeholder="+91 00000 00000"
              className="cf-placeholder"
              style={inputStyle("phone")}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label style={labelStyle}>Service</label>
            <div style={{ position:"relative" }}>
              <select
                className="cf-placeholder"
                style={{ ...inputStyle("service"), appearance:"none", cursor:"pointer", paddingRight:36 }}
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused(null)}
              >
                <option value="">Select…</option>
                <option>AI Automation</option>
                <option>CRM &amp; ERP Systems</option>
                <option>Custom Projects</option>
                <option>Custom SaaS</option>
                <option>EdTech Solutions</option>
              </select>
              <svg
                style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)",
                         pointerEvents:"none", color:"rgba(255,255,255,0.25)" }}
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>Message <span style={{ color:"#a78bfa" }}>*</span></label>
          <textarea
            required rows={5}
            placeholder="Tell us about your project, timeline, and budget…"
            className="cf-placeholder"
            style={{ ...inputStyle("message"), resize:"none" }}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>

        {/* Divider */}
        <div style={{ height:1, background:"rgba(255,255,255,0.05)" }} />

        {/* Submit */}
        <button
          type="submit"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            width:"100%", padding:"13px 24px",
            background:"#7c3aed", color:"white",
            fontSize:14, fontWeight:800,
            borderRadius:12, border:"none", cursor:"pointer",
            transition:"background 0.2s, transform 0.2s, box-shadow 0.2s",
            boxShadow:"0 8px 28px rgba(124,58,237,0.4)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#6d28d9";
            e.currentTarget.style.transform  = "translateY(-2px)";
            e.currentTarget.style.boxShadow  = "0 12px 36px rgba(124,58,237,0.5)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#7c3aed";
            e.currentTarget.style.transform  = "translateY(0)";
            e.currentTarget.style.boxShadow  = "0 8px 28px rgba(124,58,237,0.4)";
          }}
        >
          <Send size={14} strokeWidth={2} />
          Send Message
        </button>

        <p style={{ textAlign:"center", fontSize:11, fontFamily:"monospace",
                    color:"rgba(255,255,255,0.18)", margin:0 }}>
          No spam · We reply within 24 hours
        </p>
      </form>
    </>
  );
}
