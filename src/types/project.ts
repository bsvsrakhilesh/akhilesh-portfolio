export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  featured: boolean;
  status: string;
  overview: string;
  problem: string;
  approach: string[];
  outcome: string[];
  accent?: "cyan" | "blue" | "emerald";
  image?: string;
};
