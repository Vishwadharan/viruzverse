export interface Service {
  slug: string; emoji: string; name: string; tagline: string;
  description: string; accent: string; features: string[];
  useCases: string[]; deliverables: string[];
  metaTitle?: string; metaDescription?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "ai-automation", emoji: "🤖", name: "AI Automation", accent: "#7C3AED",
    tagline: "Replace repetitive work with intelligent systems.",
    description: "We build AI-powered automation pipelines that connect your tools, process your data, and execute business workflows without human intervention.",
    metaTitle: "AI Automation Services | Viruzverse",
    metaDescription: "Custom AI automation pipelines — LLM integration, RAG systems, document processing, and intelligent workflow automation for B2B businesses.",
    features: ["LLM integration (OpenAI, Anthropic)", "RAG & knowledge base systems", "Document processing & extraction", "Workflow orchestration", "Custom chatbots & agents", "API + webhook integrations"],
    useCases: ["Auto-generate reports from raw data", "Intelligent lead qualification", "Document summarization & Q&A", "Email drafting & CRM updates", "Invoice processing & data entry"],
    deliverables: ["Working automation pipeline", "Admin dashboard", "API documentation", "Deployment & monitoring setup"],
  },
  {
    slug: "custom-saas", emoji: "🚀", name: "Custom SaaS", accent: "#06B6D4",
    tagline: "Build your product. We handle the engineering.",
    description: "Full-stack SaaS development from idea to production. Multi-tenant platforms, subscription billing, dashboards, and everything in between.",
    metaTitle: "Custom SaaS Development | Viruzverse",
    metaDescription: "Full-stack B2B SaaS development — multi-tenant architecture, Stripe/Razorpay billing, admin dashboards, and cloud deployment.",
    features: ["Multi-tenant architecture", "Subscription & billing (Stripe/Razorpay)", "Auth (email, Google, SSO)", "Admin & analytics dashboards", "API design & documentation", "CI/CD & cloud deployment"],
    useCases: ["B2B SaaS MVPs", "Internal tools & portals", "Client-facing dashboards", "Marketplace platforms", "Workflow management tools"],
    deliverables: ["Production-ready codebase", "Admin panel", "API documentation", "Deployment on your infra", "1 month post-launch support"],
  },
  {
    slug: "crm-erp", emoji: "🏢", name: "CRM / ERP", accent: "#10B981",
    tagline: "Software that fits how your business actually works.",
    description: "Custom CRMs and ERPs tailored to your exact workflows — not generic off-the-shelf software that forces you to adapt.",
    metaTitle: "Custom CRM & ERP Development | Viruzverse",
    metaDescription: "Custom CRM and ERP systems built for your workflows — sales pipelines, inventory, HR, procurement, and role-based access.",
    features: ["Custom pipeline & deal management", "Contact & lead management", "Task & activity tracking", "Inventory & procurement", "HR & payroll modules", "Role-based access control"],
    useCases: ["Sales team CRM", "Manufacturing ERP", "Service business ops", "Real estate CRM", "Field force management"],
    deliverables: ["Custom CRM/ERP application", "Role-based access setup", "Data migration support", "Training documentation", "Ongoing support plan"],
  },
  {
    slug: "edtech-solutions", emoji: "🎓", name: "Edtech Solutions", accent: "#F59E0B",
    tagline: "Platforms that make learning effective and scalable.",
    description: "Edtech platforms for schools, coaching institutes, and online educators — LMS systems, assessment platforms, and student portals.",
    metaTitle: "Edtech Platform Development | Viruzverse",
    metaDescription: "Custom edtech and LMS platforms — course management, live class integration, assessments, student portals, and payment systems.",
    features: ["Course & curriculum management", "Live class & video integration", "Assessment & quiz engine", "Student & teacher portals", "Progress tracking & certificates", "Payment & enrollment system"],
    useCases: ["Online coaching platforms", "School management systems", "Corporate L&D portals", "Test prep platforms", "Skill assessment tools"],
    deliverables: ["Full LMS/edtech platform", "Student & admin portals", "Payment integration", "Mobile-responsive design", "Deployment & support"],
  },
  {
    slug: "custom-projects", emoji: "⚙️", name: "Custom Projects", accent: "#A855F7",
    tagline: "If it doesn't exist, we build it.",
    description: "Have a unique problem no off-the-shelf software solves? We build exactly what you need — from desktop apps to complex backend systems.",
    metaTitle: "Custom Software Development | Viruzverse",
    metaDescription: "Custom software development for unique business problems — web apps, backend systems, API integrations, and legacy modernization.",
    features: ["Requirement analysis & scoping", "Custom web & desktop apps", "Complex backend systems", "Third-party API integrations", "Legacy system modernization", "Performance optimization"],
    useCases: ["Industry-specific tools", "Internal automation tools", "Data processing systems", "Integration middleware", "Anything custom & complex"],
    deliverables: ["Custom software product", "Source code & documentation", "Deployment support", "Post-launch maintenance"],
  },
];
