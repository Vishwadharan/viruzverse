"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Sparkles, Clock } from "lucide-react";
import { JOBS } from "@/lib/careers";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CareersHero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/30 bg-violet-950/40 text-violet-300 mb-4 shadow-xs">
              <Sparkles size={13} />
              <span>We are hiring builders · Coimbatore &amp; Remote</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Build high-impact software <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                with a high-velocity team.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              We are looking for engineers and designers who care about craft, clean architecture, and delivering software that real businesses rely on every single day.
            </p>
          </div>

          {/* Open Positions List */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
              <h2 className="text-base sm:text-lg font-bold text-white">
                Open Positions ({JOBS.length})
              </h2>
              <span className="text-xs font-mono text-slate-400">
                Coimbatore HQ · Hybrid / Remote Friendly
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {JOBS.map((job) => (
                <Link key={job.slug} href={`/careers/${job.slug}`} className="block h-full">
                  <TiltCard3D className="p-5 sm:p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {job.department}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-300 transition-colors flex items-center justify-between">
                        <span>{job.title}</span>
                        <ArrowRight
                          size={14}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-violet-400"
                        />
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {job.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-violet-400" />
                        <span>{job.location}</span>
                      </span>
                      <span className="text-emerald-400 font-semibold">{job.experience}</span>
                    </div>
                  </TiltCard3D>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
