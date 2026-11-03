"use client";

import {
  Utensils,
  Truck,
  Layers,
  Factory,
  HeartPulse,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface SectorItem {
  icon: LucideIcon;
  name: string;
  desc: string;
}

const SECTORS: SectorItem[] = [
  { icon: Utensils, name: "Food & Beverage", desc: "High-volume restaurant POS, kitchen ticketing & recipe inventory" },
  { icon: Layers, name: "B2B SaaS Platforms", desc: "Multi-tenant cloud architectures with Row-Level Security & billing" },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Multi-location inventory tracking, dispatch, and shipment manifests" },
  { icon: Factory, name: "Manufacturing Operations", desc: "Custom shop-floor ERP, bill of materials & procurement workflows" },
  { icon: HeartPulse, name: "Healthcare Operations", desc: "Patient scheduling, clinical workflows & secure record management" },
  { icon: Landmark, name: "Billing & Financial Tools", desc: "Invoicing engines, automated reconciliation & payment gateways" },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-3 shadow-xs backdrop-blur-md">
              <span>Enterprise Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight mb-3">
              Engineered for specific operational models.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We adapt our core B2B architectures to match strict compliance and industry requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Clean Enterprise Sector 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SECTORS.map(({ icon: Icon, name, desc }, idx) => (
            <ScrollReveal key={name} delay={idx * 80}>
              <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10 border border-violet-500/30 text-violet-400 mb-4">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {desc}
                  </p>
                </div>
              </TiltCard3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
