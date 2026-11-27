import type { Metadata } from "next";
import {
  ArrowRight,
  Briefcase,
  Globe,
  TrendingUp,
} from "lucide-react";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/constants";
import TiltCard3D from "@/components/ui/TiltCard3D";
import Magnetic3DButton from "@/components/ui/Magnetic3DButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — B2B & B2C Solutions",
  description: `${SITE_NAME} solves B2B & B2C business problems using emerging technologies and offers a free consultation for business owners.`,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    url: `${SITE_URL}/services`,
    title: `Services — B2B & B2C Solutions | ${SITE_NAME}`,
    description: `${SITE_NAME} solves B2B & B2C business problems using emerging technologies with a free consultation for business owners.`,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
};

const SOLUTIONS = [
  {
    badge: "B2B",
    icon: Briefcase,
    title: "B2B Business Solutions",
    desc: "Eliminate manual friction with custom systems and workflows built using emerging technologies.",
  },
  {
    badge: "B2C",
    icon: Globe,
    title: "B2C Customer Platforms",
    desc: "Fast, reliable web and mobile products designed for real customer traffic and growth.",
  },
  {
    badge: "SCALE",
    icon: TrendingUp,
    title: "Scale Your Business",
    desc: "Free consultation for business owners to turn bottlenecks into scalable, owned software.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 bg-transparent min-h-[85vh] flex flex-col justify-center">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact Header */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Solve business problems. <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Scale B2B &amp; B2C.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
              We use emerging technologies to solve real B2B &amp; B2C problems—starting with a free consultation for business owners.
            </p>

            <Magnetic3DButton variant="primary" href="/contact">
              <span>Connect With Us</span>
              <ArrowRight size={14} />
            </Magnetic3DButton>
          </div>
        </ScrollReveal>

        {/* Single-Row 3-Card Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SOLUTIONS.map(({ badge, icon: Icon, title, desc }, idx) => (
            <ScrollReveal key={title} delay={idx * 80}>
              <TiltCard3D className="p-5 sm:p-6 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-950/60 text-violet-300 border border-violet-500/30">
                      {badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </TiltCard3D>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
