import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Contact — Viruzverse",
  description: "Get in touch with Viruzverse Solutions",
};

export default function ContactPage() {
  return (
    <main className="contact-root">
      <style>{`
        .contact-root {
          min-height: 100vh;
          background: #080711;
          color: white;
          font-family: inherit;
          overflow-x: hidden;
        }

        /* ── Subtle noise texture overlay ── */
        .contact-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }

        /* ── Top border accent ── */
        .page-top-border {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #7c3aed 40%, #06b6d4 60%, transparent);
          z-index: 100;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 40px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 120px 24px 60px;
            gap: 48px;
          }
        }

        .hero-left {}

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-family: monospace;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 28px;
        }

        .hero-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: blink 2.5s ease-in-out infinite;
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        .hero-h1 {
          font-size: clamp(40px, 5.5vw, 68px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.04em;
          color: white;
          margin: 0 0 24px;
        }

        .hero-h1 em {
          font-style: normal;
          background: linear-gradient(120deg, #7c3aed, #a78bfa 50%, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.38);
          max-width: 380px;
          margin: 0 0 36px;
        }

        /* ── CTA row ── */
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: #7c3aed;
          color: white;
          font-size: 13px;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 24px rgba(124,58,237,0.35);
        }

        .btn-primary:hover {
          background: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(124,58,237,0.45);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: transparent;
          color: rgba(255,255,255,0.45);
          font-size: 13px;
          font-weight: 600;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, transform 0.2s;
        }

        .btn-ghost:hover {
          color: rgba(255,255,255,0.8);
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }

        /* ── Right: contact cards ── */
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 22px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          left: 0; top: 16px; bottom: 16px;
          width: 2px;
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.25s;
        }

        .contact-card:hover::before { opacity: 1; }

        .contact-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.12);
          transform: translateX(4px);
        }

        .cc-email::before   { background: #06b6d4; }
        .cc-phone::before   { background: #10b981; }
        .cc-location::before{ background: #7c3aed; }

        .cc-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cc-body { flex: 1; min-width: 0; }

        .cc-label {
          font-size: 10px;
          font-family: monospace;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 3px;
        }

        .cc-value {
          font-size: 14px;
          font-weight: 800;
          color: white;
          margin-bottom: 2px;
        }

        .cc-sub {
          font-size: 11px;
          font-family: monospace;
          color: rgba(255,255,255,0.28);
        }

        .cc-arrow {
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .contact-card:hover .cc-arrow {
          opacity: 0.5;
          transform: translate(2px,-2px);
        }

        /* ── Divider ── */
        .divider {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }

        @media (max-width: 860px) {
          .divider { padding: 0 24px; }
        }

        .divider-line {
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        /* ── Stats row ── */
        .stats {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 40px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
        }

        @media (max-width: 860px) {
          .stats { padding: 28px 24px; }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 0;
          border-right: 1px solid rgba(255,255,255,0.06);
        }

        .stat-item:last-child { border-right: none; }

        .stat-val {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: white;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 10px;
          font-family: monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ── Form section ── */
        .form-section {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
          padding: 60px 40px 120px;
        }

        @media (max-width: 860px) {
          .form-section { padding: 48px 24px 80px; }
        }

        .form-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-heading h2 {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: white;
          margin: 0 0 10px;
        }

        .form-heading h2 em {
          font-style: normal;
          background: linear-gradient(120deg, #7c3aed, #a78bfa 50%, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-heading p {
          font-size: 14px;
          color: rgba(255,255,255,0.32);
          margin: 0;
        }

        .form-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
        }

        .form-card-topbar {
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #a78bfa, #06b6d4);
        }

        .form-card-inner {
          padding: 36px;
        }

        @media (max-width: 540px) {
          .form-card-inner { padding: 24px; }
        }
      `}</style>

      {/* Top accent line */}
      <div className="page-top-border" />

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Available for new projects
          </div>

          <h1 className="hero-h1">
            Let&apos;s work<br />
            <em>together</em>
          </h1>

          <p className="hero-desc">
            Have a project in mind? We build exceptional digital products —
            from SaaS platforms to AI automation. Tell us what you need.
          </p>

          <div className="hero-ctas">
            <a href="mailto:contact@viruzverse.in" className="btn-primary">
              <Mail size={14} />
              Send an email
            </a>
            <a href="tel:+918300262005" className="btn-ghost">
              <Phone size={13} />
              +91 83002 62005
            </a>
          </div>
        </div>

        <div className="hero-right">
          {/* Email */}
          <a href="mailto:contact@viruzverse.in" className="contact-card cc-email">
            <div className="cc-icon" style={{ background:"rgba(6,182,212,0.12)" }}>
              <Mail size={17} style={{ color:"#67e8f9" }} strokeWidth={1.6} />
            </div>
            <div className="cc-body">
              <div className="cc-label">Email</div>
              <div className="cc-value">contact@viruzverse.in</div>
              <div className="cc-sub">Reply within 48 hours</div>
            </div>
            <ArrowUpRight size={14} className="cc-arrow" style={{ color:"#67e8f9" }} />
          </a>

          {/* Phone */}
          <a href="tel:+918300262005" className="contact-card cc-phone">
            <div className="cc-icon" style={{ background:"rgba(16,185,129,0.12)" }}>
              <Phone size={17} style={{ color:"#34d399" }} strokeWidth={1.6} />
            </div>
            <div className="cc-body">
              <div className="cc-label">Phone</div>
              <div className="cc-value">+91 83002 62005</div>
              <div className="cc-sub">Mon – Sat, 10am – 7pm IST</div>
            </div>
            <ArrowUpRight size={14} className="cc-arrow" style={{ color:"#34d399" }} />
          </a>

          {/* Location */}
          <div className="contact-card cc-location">
            <div className="cc-icon" style={{ background:"rgba(124,58,237,0.12)" }}>
              <MapPin size={17} style={{ color:"#a78bfa" }} strokeWidth={1.6} />
            </div>
            <div className="cc-body">
              <div className="cc-label">Office</div>
              <div className="cc-value">Coimbatore, Tamil Nadu</div>
              <div className="cc-sub">1274, Mettupalayam Rd, 641038</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="divider">
        <div className="divider-line" />
      </div>
      <div className="stats">
        {[
          { val: "48h",  label: "Avg. Response", color: "#a78bfa" },
          { val: "Free", label: "Consultation",  color: "#06b6d4" },
          { val: "24/7", label: "Support",       color: "#10b981" },
        ].map(({ val, label, color }) => (
          <div key={val} className="stat-item">
            <div className="stat-val" style={{ color }}>{val}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
      <div className="divider">
        <div className="divider-line" />
      </div>

      {/* ── FORM ── */}
      <div className="form-section">
        <div className="form-heading">
          <h2>Start a <em>conversation</em></h2>
          <p>Fill in the details below and we&apos;ll be in touch shortly.</p>
        </div>
        <div className="form-card">
          <div className="form-card-topbar" />
          <div className="form-card-inner">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
