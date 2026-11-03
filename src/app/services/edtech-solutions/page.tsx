"use client";

import {
  BookOpen,
  Video,
  FileCheck,
  Award,
  Users,
  LineChart,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import ServiceDetailTemplate from "@/components/sections/services/ServiceDetailTemplate";

const CAPABILITIES = [
  {
    icon: BookOpen,
    title: "Modular LMS Architecture",
    desc: "Hierarchical course modules, video lectures, drip content scheduling, interactive quizzes, and downloadable resources.",
    tags: ["Drip Content", "Video CDN", "Modules"],
  },
  {
    icon: FileCheck,
    title: "Automated Assessment Engine",
    desc: "Multiple choice, subjective grading, live code execution sandboxes, and instant score computation with anti-cheat tracking.",
    tags: ["Code Sandbox", "Anti-Cheat", "Instant Grading"],
  },
  {
    icon: Video,
    title: "Live Classroom & Webinars",
    desc: "Low-latency WebRTC video streaming, interactive whiteboards, attendance logging, and automated recording archives.",
    tags: ["WebRTC", "Whiteboards", "Sub-200ms"],
  },
  {
    icon: Award,
    title: "Verifiable Digital Credentials",
    desc: "Dynamic PDF certificates generated on completion with cryptographic QR verification links for LinkedIn sharing.",
    tags: ["QR Verification", "PDF Gen", "Certificates"],
  },
  {
    icon: Users,
    title: "Cohort & Batch Management",
    desc: "Assign mentors, schedule batch sessions, track assignment submissions, and review student progress heatmaps.",
    tags: ["Cohort Analytics", "Submissions", "Mentors"],
  },
  {
    icon: LineChart,
    title: "Learning Telemetry & Retention",
    desc: "Granular video drop-off heatmaps, quiz difficulty distributions, and dropout risk alerts for instructors.",
    tags: ["Drop-off Analytics", "Retention", "BI"],
  },
];

function EdtechSimulator() {
  return (
    <div className="radiant-card rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-5 sm:p-6 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center font-bold">
            ED
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--text-primary)]">LMS Batch Stream</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">High-Concurrency Gateway Active</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          CONCURRENT
        </span>
      </div>

      <div className="space-y-2.5 py-2">
        <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--text-muted)]">Active Cohort</p>
            <p className="font-bold text-[var(--text-primary)]">Full-Stack Cloud Cohort 04</p>
          </div>
          <span className="text-[11px] font-bold text-[var(--accent)]">Week 6 / 12</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Live Active Students</p>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">1,840 Online</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Quiz Completion Rate</p>
            <p className="text-sm font-bold text-[var(--text-primary)]">94.8%</p>
          </div>
        </div>

        <div className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] flex items-center justify-between text-[10.5px]">
          <span className="text-[var(--text-muted)]">Anti-Cheat Engine:</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">Browser Focus Tracking Active</span>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10.5px] text-[var(--text-muted)]">
        <span>HLS Adaptive Video Streaming</span>
        <span className="font-semibold text-[var(--accent)]">Zero Buffering</span>
      </div>
    </div>
  );
}

export default function EdtechSolutionsPage() {
  return (
    <ServiceDetailTemplate
      serviceId="edtech-solutions"
      tag="EdTech Platforms"
      title="High-concurrency learning portals &"
      titleHighlight="educational software."
      description="We engineer custom learning management systems, proctored assessment engines, interactive code sandboxes, and cohort tracking platforms built to scale to tens of thousands of active learners."
      metrics={[
        { label: "Concurrent Scale", value: "50,000+", sub: "Peak Learner Capacity" },
        { label: "Video Delivery", value: "Adaptive HLS", sub: "Global Edge CDN" },
        { label: "Certificates", value: "Verifiable QR", sub: "Cryptographic Proof" },
      ]}
      capabilities={CAPABILITIES}
      interactiveSimulator={<EdtechSimulator />}
      techStack={["Next.js", "Node.js", "PostgreSQL", "WebRTC", "AWS S3 / CloudFront", "Tailwind CSS", "Redis", "Docker"]}
      deliverables={[
        "Modern student and instructor portal with role-based routing",
        "Video upload, transcode, and adaptive HLS streaming pipeline",
        "Interactive assessment engine with timed submissions and auto-grading",
        "Dynamic verifiable certificate generation system",
        "Full IP ownership, deployment configurations, and documentation",
      ]}
    />
  );
}
