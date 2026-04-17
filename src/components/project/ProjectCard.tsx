import Link from "next/link";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

const accentClasses = {
  cyan: {
    badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.10)]",
    dot: "bg-cyan-400",
  },
  blue: {
    badge: "border-blue-300/20 bg-blue-400/10 text-blue-200",
    glow: "shadow-[0_0_30px_rgba(96,165,250,0.10)]",
    dot: "bg-blue-400",
  },
  emerald: {
    badge: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.10)]",
    dot: "bg-emerald-400",
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = accentClasses[project.accent ?? "cyan"];

  return (
    <article
      className={`glass-panel panel-outline relative overflow-hidden rounded-4xl p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 ${accent.glow}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] ${accent.badge}`}
            >
              {project.category}
            </span>
          </div>

          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {project.year}
          </span>
        </div>

        <h3 className="max-w-2xl text-xl font-semibold leading-tight text-white md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[15px]">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
          {project.stack.length > 5 ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
              +{project.stack.length - 5} more
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Access
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              {project.status}
            </p>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/25 hover:bg-white/10"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
