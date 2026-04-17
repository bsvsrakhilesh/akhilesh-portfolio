"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

const accentClasses = {
  cyan: {
    badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.10)]",
    dot: "bg-cyan-400",
    halo: "from-cyan-400/18 via-cyan-300/4 to-transparent",
  },
  blue: {
    badge: "border-blue-300/20 bg-blue-400/10 text-blue-200",
    glow: "shadow-[0_0_30px_rgba(96,165,250,0.10)]",
    dot: "bg-blue-400",
    halo: "from-blue-400/18 via-blue-300/4 to-transparent",
  },
  emerald: {
    badge: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.10)]",
    dot: "bg-emerald-400",
    halo: "from-emerald-400/18 via-emerald-300/4 to-transparent",
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = accentClasses[project.accent ?? "cyan"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel panel-outline group relative overflow-hidden rounded-4xl p-4 sm:p-5 ${accent.glow}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br ${accent.halo} blur-3xl transition duration-500 group-hover:scale-110 sm:h-44 sm:w-44`}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative z-10">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.08, 0.9] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`h-2.5 w-2.5 rounded-full ${accent.dot}`}
            />
            <span
              className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px] sm:tracking-[0.24em] ${accent.badge}`}
            >
              {project.category}
            </span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            {project.year}
          </span>
        </div>

        <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[15px]">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition duration-300 group-hover:border-white/14 group-hover:bg-white/8"
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

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Access
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              {project.status}
            </p>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex w-full justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/25 hover:bg-white/10 sm:w-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
