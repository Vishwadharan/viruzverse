export interface Job {
  slug: string; title: string; department: string; location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string; posted: string; description: string;
  responsibilities: string[]; requirements: string[];
  niceToHave?: string[]; perks: string[];
}

export const JOBS: Job[] = [];

export const DEPARTMENTS = [...new Set(JOBS.map((j) => j.department))];
