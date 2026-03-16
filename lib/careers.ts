export interface Job {
  slug: string; title: string; department: string; location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string; posted: string; description: string;
  responsibilities: string[]; requirements: string[];
  niceToHave?: string[]; perks: string[];
}

export const JOBS: Job[] = [
  {
    slug: "full-stack-developer", title: "Full Stack Developer",
    department: "Engineering", location: "Coimbatore (Hybrid)",
    type: "Full-time", experience: "1–3 years", posted: "2026-03-01",
    description: "Own features end-to-end across our products and client projects using Next.js, Node.js, and PostgreSQL.",
    responsibilities: ["Build full-stack features across products and client projects", "Design and optimize database schemas and APIs", "Collaborate with founders on product decisions", "Write clean, maintainable, well-tested code", "Participate in code reviews and architecture discussions"],
    requirements: ["1–3 years with React/Next.js", "Node.js and REST API experience", "PostgreSQL or similar RDBMS", "TypeScript proficiency", "Strong async communication skills"],
    niceToHave: ["Prisma or Drizzle ORM", "Docker and CI/CD pipelines", "Prior startup experience"],
    perks: ["Flexible hours", "Hybrid work", "Learning budget", "Direct founder access", "Equity discussion"],
  },
  {
    slug: "ui-ux-designer", title: "UI/UX Designer",
    department: "Design", location: "Coimbatore (Hybrid)",
    type: "Full-time", experience: "1–2 years", posted: "2026-03-01",
    description: "Design beautiful, usable interfaces for our SaaS products and client projects from wireframe to production.",
    responsibilities: ["Design web and mobile application interfaces", "Create wireframes, prototypes, and hi-fi mockups in Figma", "Collaborate with developers for accurate implementation", "Conduct user research and translate findings into decisions", "Maintain and evolve design systems"],
    requirements: ["1–2 years product/UI design experience", "Strong Figma skills (auto layout, components, prototyping)", "Eye for typography, spacing, and visual hierarchy", "Portfolio of real product design work"],
    niceToHave: ["Design systems experience", "Basic HTML/CSS understanding", "Motion design or micro-interaction skills"],
    perks: ["Flexible hours", "Hybrid work", "Learning budget", "Direct founder access", "Work on real products"],
  },
  {
    slug: "ai-ml-engineer", title: "AI/ML Engineer",
    department: "Engineering", location: "Remote / Coimbatore",
    type: "Full-time", experience: "1–3 years", posted: "2026-03-01",
    description: "Build AI automation products — integrate LLMs, design RAG systems, and turn AI capabilities into real business value.",
    responsibilities: ["Integrate LLMs into business workflows", "Build AI-powered automation pipelines", "Design prompt engineering and RAG architectures", "Evaluate and benchmark model performance", "Collaborate with product team on AI feature design"],
    requirements: ["LLM API experience (OpenAI, Anthropic)", "Python proficiency for ML tasks", "RAG, embeddings, and vector database knowledge", "Ability to map business problems to AI solutions"],
    niceToHave: ["LangChain or LlamaIndex", "Fine-tuning or model training", "MLOps and deployment experience"],
    perks: ["Remote-friendly", "Learning budget", "Cutting-edge AI projects", "Direct founder access"],
  },
];

export const DEPARTMENTS = [...new Set(JOBS.map((j) => j.department))];
