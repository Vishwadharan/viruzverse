"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { JOBS } from "@/lib/careers";

const DEPT_COLORS: Record<string, string> = {
  Engineering: "#7C3AED", Design: "#06B6D4", Marketing: "#F59E0B", Operations: "#10B981",
};

export default function JobListings() {
  return (
    <section id="open-roles" className="section-pad relative overflow-hidden bg-surface/40 scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="max-w-site container-pad mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-glow text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              {JOBS.length} open role{JOBS.length !== 1 ? "s" : ""}
            </span>
            <h2 className="text-3xl font-extrabold text-text-primary">Open Positions</h2>
          </div>
        </div>
        <div className="space-y-4">
          {JOBS.map((job, i) => {
            const accentColor = DEPT_COLORS[job.department] ?? "#7C3AED";
            return (
              <motion.div key={job.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                <Link href={`/careers/${job.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-brand-violet/30 hover:bg-brand-violet/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}28` }}>
                      <Briefcase size={16} style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary group-hover:text-brand-glow transition-colors mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary">
                        <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
                        <span className="px-2 py-0.5 rounded-full font-mono"
                          style={{ background: `${accentColor}15`, color: accentColor }}>{job.department}</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 text-xs font-semibold text-brand-glow group-hover:gap-3 transition-all">
                    View role <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
