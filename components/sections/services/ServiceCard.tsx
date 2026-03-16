"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: index * 0.07 }}>
      <Link href={`/services/${service.slug}`}
        className="group relative flex flex-col h-full rounded-2xl bg-surface border border-border overflow-hidden hover:border-brand-violet/30 transition-all duration-300">
        <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg,${service.accent},transparent)` }} />
        <div className="p-7 flex flex-col h-full">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}25` }}>
              {service.emoji}
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary group-hover:text-brand-glow transition-colors">{service.name}</h3>
              <p className="text-xs text-text-secondary font-mono mt-0.5">{service.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">{service.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {service.features.slice(0, 4).map((f) => (
              <span key={f} className="px-2.5 py-1 text-xs font-mono rounded-full border border-border text-text-secondary">{f}</span>
            ))}
            {service.features.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-mono rounded-full border border-border text-text-secondary">
                +{service.features.length - 4} more
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
            style={{ color: service.accent }}>
            Learn more <ArrowRight size={13} />
          </span>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 10% 10%, ${service.accent}07 0%, transparent 50%)` }} />
      </Link>
    </motion.div>
  );
}
