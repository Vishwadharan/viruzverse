export type ServiceIconKey = "Server" | "Layers" | "Users" | "BookOpen" | "Puzzle";

export type Service = {
  iconKey: ServiceIconKey;
  name: string;
  href: string;
  tags: string[];
  desc: string;
  num: string;
};

export const SERVICES: Service[] = [
  {
    iconKey: "Layers",
    name: "Custom Multi-Tenant SaaS",
    href: "/services/custom-saas",
    tags: ["Multi-Tenant", "Stripe Billing", "PostgreSQL RLS", "Role-Based Auth"],
    desc: "Complete multi-tenant SaaS architecture from schema design to production. Strict tenant data isolation and high-velocity onboarding.",
    num: "01",
  },
  {
    iconKey: "Users",
    name: "Enterprise CRM & ERP",
    href: "/services/crm-erp",
    tags: ["Supply Chain", "Inventory Engines", "Granular RBAC", "Audit Logs"],
    desc: "Custom operational software engineered specifically for your business processes, eliminating clunky off-the-shelf bloat.",
    num: "02",
  },
  {
    iconKey: "Server",
    name: "High-Throughput APIs & Cloud",
    href: "/services/ai-automation",
    tags: ["Redis Queues", "WebSockets", "Sub-120ms P99", "Distributed Microservices"],
    desc: "Mission-critical cloud infrastructure, real-time event-driven message brokers, and sub-120ms API architectures.",
    num: "03",
  },
  {
    iconKey: "BookOpen",
    name: "Enterprise Edtech & LMS",
    href: "/services/edtech-solutions",
    tags: ["LMS Architecture", "Assessment Engines", "Student Portals", "Real-Time Telemetry"],
    desc: "High-concurrency learning management systems, automated evaluation engines, and secure portals built for scale.",
    num: "04",
  },
  {
    iconKey: "Puzzle",
    name: "Bespoke Enterprise Engineering",
    href: "/services/custom-projects",
    tags: ["Legacy Monolith Refactoring", "Custom Hardware Bridges", "100% Client IP"],
    desc: "Direct engineering for complex technical challenges that no standard off-the-shelf commercial package can solve.",
    num: "05",
  },
];
