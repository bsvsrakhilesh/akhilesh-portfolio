export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  focus: ("AI / ML" | "Data science" | "Applied systems")[];
  featured: boolean;
  status: string;
  overview: string;
  problem: string;
  approach: string[];
  outcome: string[];
  accent?: "cyan" | "blue" | "emerald";
  visual: {
    label: string;
    steps: [string, string, string, string];
    caption: string;
  };
};
