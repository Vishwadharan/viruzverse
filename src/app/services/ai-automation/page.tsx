"use client";

import {
  Server,
  Zap,
  Cpu,
  Database,
  ShieldCheck,
  Activity,
  Layers,
  GitMerge,
  Network,
} from "lucide-react";
import ServiceDetailTemplate from "@/components/sections/services/ServiceDetailTemplate";

const CAPABILITIES = [
  {
    icon: Server,
    title: "High-Throughput Distributed APIs",
    desc: "Microservices and REST/GraphQL backends engineered for sub-120ms P99 latency and continuous zero-downtime rolling deploys.",
    tags: ["Go", "Node.js", "FastAPI", "gRPC"],
  },
  {
    icon: Database,
    title: "PostgreSQL Multi-Tenant Isolation",
    desc: "Row-Level Security (RLS) policies and sharded database clusters ensuring absolute tenant boundary isolation with zero data cross-talk.",
    tags: ["PostgreSQL", "RLS", "Prisma", "Connection Pooling"],
  },
  {
    icon: Zap,
    title: "Real-Time WebSocket Engines",
    desc: "Bi-directional event dispatchers for live dashboard synchronization, notification pipelines, and millisecond POS ticket updates.",
    tags: ["WebSockets", "Socket.io", "Sub-50ms Sync"],
  },
  {
    icon: GitMerge,
    title: "Event-Driven Background Queues",
    desc: "Asynchronous task execution and distributed job scheduling with automatic retries, dead-letter queues, and Redis cluster backends.",
    tags: ["Redis", "BullMQ", "Celery", "Kafka"],
  },
  {
    icon: Network,
    title: "Enterprise Webhook Integrations",
    desc: "Hardened external API integrations with cryptographic HMAC signature verification, idempotent retry engines, and rate limiting.",
    tags: ["HMAC Verification", "Idempotency", "Rate Limiting"],
  },
  {
    icon: ShieldCheck,
    title: "Automated CI/CD & Cloud Orchestration",
    desc: "Containerized deployments via Docker, Kubernetes, and automated GitHub Actions pipelines with zero manual server touchpoints.",
    tags: ["Docker", "Kubernetes", "AWS / GCP", "Terraform"],
  },
];

function ApiSimulator() {
  return (
    <div className="radiant-card rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-5 sm:p-6 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center font-bold">
            API
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--text-primary)]">Distributed Gateway Cluster</p>
            <p className="text-[10px] text-emerald-400">P99 Latency: 42ms · Edge Cache HIT</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          HEALTHY
        </span>
      </div>

      <div className="space-y-3 py-2">
        <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-[var(--text-muted)]">Inbound Request:</span>
            <span className="text-[var(--accent)]">POST /api/v2/orders/dispatch</span>
          </div>
          <p className="text-[11.5px] font-semibold text-[var(--text-primary)]">
            &quot;Tenant auth verified (Bearer JWT) · Shard #04 assigned&quot;
          </p>
        </div>

        <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] space-y-2">
          <div className="flex items-center justify-between text-[10.5px]">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              1. PostgreSQL RLS Tenant Verification
            </span>
            <span className="text-emerald-400">6ms</span>
          </div>
          <div className="flex items-center justify-between text-[10.5px]">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              2. Redis Queue Job Enqueue (FIFO)
            </span>
            <span className="text-emerald-400">4ms</span>
          </div>
          <div className="flex items-center justify-between text-[10.5px]">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              3. WebSocket Broadcast to Connected Floor Nodes
            </span>
            <span className="text-emerald-400">14ms</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-2 text-center text-[10.5px]">
        <div>
          <p className="text-[9.5px] text-[var(--text-muted)]">Roundtrip P99</p>
          <p className="font-bold text-emerald-400">24ms</p>
        </div>
        <div>
          <p className="text-[9.5px] text-[var(--text-muted)]">Availability</p>
          <p className="font-bold text-[var(--text-primary)]">99.99%</p>
        </div>
        <div>
          <p className="text-[9.5px] text-[var(--text-muted)]">Data Isolation</p>
          <p className="font-bold text-[var(--accent)]">100% RLS</p>
        </div>
      </div>
    </div>
  );
}

export default function ApiCloudPage() {
  return (
    <ServiceDetailTemplate
      serviceId="ai-automation"
      tag="High-Throughput APIs & Cloud"
      title="Mission-critical cloud infrastructure &"
      titleHighlight="high-throughput API backends."
      description="We architect and build distributed microservices, low-latency WebSocket channels, and resilient database architectures engineered for heavy multi-tenant enterprise scale."
      metrics={[
        { label: "P99 Latency", value: "< 50ms", sub: "Global Edge Benchmark" },
        { label: "Data Isolation", value: "PostgreSQL RLS", sub: "Row-Level Security" },
        { label: "Availability SLA", value: "99.99%", sub: "High-Availability Clusters" },
      ]}
      capabilities={CAPABILITIES}
      interactiveSimulator={<ApiSimulator />}
      techStack={["Node.js", "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes", "WebSockets", "Prisma", "AWS / GCP"]}
      deliverables={[
        "Complete source code repository with GitHub Actions CI/CD pipelines",
        "PostgreSQL schema with strict Row-Level Security isolation",
        "Redis asynchronous queue workers and dead-letter handling",
        "OpenAPI / Swagger documentation and Postman collections",
        "100% intellectual property and infrastructure credentials handover",
      ]}
    />
  );
}
