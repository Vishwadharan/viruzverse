"use client";

import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Mail,
} from "lucide-react";
import type { Job } from "@/lib/careers";

interface Props {
  job: Job;
}

export default function JobDetailPage({ job }: Props) {
  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Back button */}
      <Link
        href="/careers"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-violet-300 transition-colors mb-8 group"
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-200 group-hover:-translate-x-1 text-violet-400"
        />
        <span>Back to all positions</span>
      </Link>

      {/* Header */}
      <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl mb-10 shadow-xl">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
            {job.department}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/10">
            {job.type}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          {job.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-violet-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={15} className="text-violet-400" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-violet-400" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={15} className="text-violet-400" />
            <span>Posted {job.posted}</span>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left column: Overview, responsibilities, requirements */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Role Overview
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {job.description}
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              What You Will Do
            </h2>
            <ul className="flex flex-col gap-3">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-violet-400 shrink-0 mt-1"
                  />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              What We Look For
            </h2>
            <ul className="flex flex-col gap-3">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400 shrink-0 mt-1"
                  />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nice to have */}
          {job.niceToHave && job.niceToHave.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white mb-4">
                Bonus Points
              </h2>
              <ul className="flex flex-col gap-3">
                {job.niceToHave.map((nth, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sparkles
                      size={16}
                      className="text-violet-400 shrink-0 mt-1"
                    />
                    <span className="text-xs sm:text-sm text-slate-300">
                      {nth}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Perks */}
          {job.perks && job.perks.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white mb-4">
                Perks &amp; Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.perks.map((p, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-white/10 bg-[#0d0d17]/80 text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column: Sticky apply card */}
        <div className="lg:col-span-1 sticky top-28">
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0d0d17]/80 backdrop-blur-xl shadow-xl flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Apply for this Role
              </h3>
              <p className="text-xs text-slate-400">
                Direct founder conversation. No automated HR rejections.
              </p>
            </div>

            <a
              href={`mailto:viruzverse@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg transition-all active:scale-98"
            >
              <Mail size={16} />
              <span>Email Your Resume</span>
              <ArrowRight size={14} />
            </a>

            <div className="text-[11px] font-mono text-slate-400 space-y-1.5 border-t border-white/10 pt-4">
              <p>• Include portfolio or GitHub profile</p>
              <p>• Typical response: 24–48 hours</p>
              <p>• Hybrid in Coimbatore or Remote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
