"use client";

import {
  Puzzle,
  Network,
  Cpu,
  ShieldCheck,
  Server,
  Zap,
  Terminal,
  Activity,
} from "lucide-react";
import ServiceDetailTemplate from "@/components/sections/services/ServiceDetailTemplate";

const CAPABILITIES = [
  {
    icon: Network,
    title: "High-Throughput API Gateways",
    desc: "Bespoke REST, gRPC, and GraphQL gateways with rate limiting, payload validation, token caching, and circuit breakers.",
    tags: ["gRPC", "GraphQL", "Rate Limiting", "Go / Node"],
  },
  {
    icon: Cpu,
    title: "Hardware & IoT Integrations",
    desc: "MQTT broker infrastructure, embedded sensor telemetry streaming, ESC/POS thermal printer bridges, and POS hardware drivers.",
    tags: ["MQTT", "Hardware Bridges", "WebSockets"],
  },
  {
    icon: Server,
    title: "Legacy System Modernization",
    desc: "Refactor legacy PHP, monolithic architectures, or outdated databases into high-performance containerized microservices.",
    tags: ["Docker", "Refactoring", "Zero Downtime"],
  },
  {
    icon: ShieldCheck,
    title: "Bespoke Security & Auth Bridges",
    desc: "Custom OAuth2 providers, reverse proxy authorization, automated credential rotation, and compliance-ready audit trails.",
    tags: ["OAuth2", "Proxies", "Compliance"],
  },
  {
    icon: Zap,
    title: "Event Streaming Architectures",
    desc: "Kafka and RabbitMQ pub/sub clusters processing millions of asynchronous events with guaranteed delivery semantics.",
    tags: ["Kafka", "RabbitMQ", "Event-Driven"],
  },
  {
    icon: Puzzle,
    title: "Complex Domain Engineering",
    desc: "Specialized algorithmic calculators, bespoke mathematical simulation engines, and custom domain-specific software tools.",
    tags: ["Algorithms", "Simulations", "Custom Math"],
  },
];

function CustomSimulator() {
  return (
    <div className="radiant-card rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-5 sm:p-6 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center font-bold">
            CP
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--text-primary)]">Custom Microservices Fabric</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Zero-Downtime Gateway Active</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          STABLE
        </span>
      </div>

      <div className="space-y-2.5 py-2">
        <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--text-muted)]">Active Protocol</p>
            <p className="font-bold text-[var(--text-primary)]">gRPC + WebSocket Ingestion</p>
          </div>
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Sub-10ms Dispatch</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Event Ingestion Rate</p>
            <p className="text-sm font-bold text-[var(--text-primary)]">14,200 msg/s</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
            <p className="text-[9.5px] text-[var(--text-muted)]">Dropped Packets</p>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">0.00%</p>
          </div>
        </div>

        <div className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] flex items-center justify-between text-[10.5px]">
          <span className="text-[var(--text-muted)]">Circuit Breaker:</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">Normal (Closed State)</span>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10.5px] text-[var(--text-muted)]">
        <span>Clean code, test coverage &gt; 90%</span>
        <span className="font-semibold text-[var(--accent)]">Enterprise SLA</span>
      </div>
    </div>
  );
}

export default function CustomProjectsPage() {
  return (
    <ServiceDetailTemplate
      serviceId="custom-projects"
      tag="Custom Engineering"
      title="Bespoke backend architectures &"
      titleHighlight="complex technical solutions."
      description="When off-the-shelf software and standard templates cannot solve your technical challenges, we engineer custom backend architectures, high-speed API gateways, and hardware integrations tailored to your requirements."
      metrics={[
        { label: "Code Coverage", value: "> 90%", sub: "Strict Unit & E2E" },
        { label: "IP Ownership", value: "100%", sub: "Full Source Handover" },
        { label: "Architecture", value: "Custom Fit", sub: "Engineered for Scale" },
      ]}
      capabilities={CAPABILITIES}
      interactiveSimulator={<CustomSimulator />}
      techStack={["Go", "Node.js", "Python", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "AWS / GCP"]}
      deliverables={[
        "Targeted software architecture specification and API contract",
        "Tested, production-ready codebase with &gt; 90% test coverage",
        "Dockerized microservices and automated CI/CD pipelines",
        "Performance benchmarks and load testing documentation",
        "Complete technical transfer and post-launch maintenance window",
      ]}
    />
  );
}
