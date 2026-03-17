// lib/services.ts

export type ServiceIconKey = "Bot" | "Layers" | "Users" | "BookOpen" | "Puzzle";

export type Service = {
  iconKey: ServiceIconKey;   // ← string, not LucideIcon
  name: string;
  href: string;
  tags: string[];
  desc: string;
  color: string;
  num: string;
};

export const SERVICES: Service[] = [
  {
    iconKey: "Bot",
    name: "AI Automation",
    href: "/services/ai-automation",
    tags: ["LLM", "RAG", "Agents", "Pipelines"],
    desc: "LLM pipelines, RAG systems and intelligent automation that eliminates repetitive work at scale.",
    color: "#7c3aed",
    num: "01",
  },
  {
    iconKey: "Layers",
    name: "Custom SaaS",
    href: "/services/custom-saas",
    tags: ["Multi-tenant", "Billing", "Auth"],
    desc: "Full-stack SaaS from zero to production. Auth, Stripe, dashboards, CI/CD — built right the first time.",
    color: "#2563eb",
    num: "02",
  },
  {
    iconKey: "Users",
    name: "CRM / ERP",
    href: "/services/crm-erp",
    tags: ["Pipelines", "Inventory", "RBAC"],
    desc: "Custom CRMs and ERPs tailored to your exact workflows — not generic software you adapt to.",
    color: "#0891b2",
    num: "03",
  },
  {
    iconKey: "BookOpen",
    name: "Edtech Platforms",
    href: "/services/edtech-solutions",
    tags: ["LMS", "Assessments", "Portals"],
    desc: "Course management, live classes, assessments and student portals built for real scale.",
    color: "#059669",
    num: "04",
  },
  {
    iconKey: "Puzzle",
    name: "Custom Projects",
    href: "/services/custom-projects",
    tags: ["APIs", "Integrations", "Systems"],
    desc: "Unique problems no off-the-shelf product solves. We scope, design, and engineer from scratch.",
    color: "#d97706",
    num: "05",
  },
];
