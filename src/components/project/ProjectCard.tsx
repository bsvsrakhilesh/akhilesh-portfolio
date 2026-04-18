"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const accentMap = {
  cyan: {
    badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
    dot: "bg-cyan-400",
    line: "from-cyan-300/80 via-cyan-300/20 to-transparent",
    glow: "shadow-[0_0_34px_rgba(34,211,238,0.10)]",
  },
  blue: {
    badge: "border-blue-300/20 bg-blue-400/10 text-blue-200",
    dot: "bg-blue-400",
    line: "from-blue-300/80 via-blue-300/20 to-transparent",
    glow: "shadow-[0_0_34px_rgba(96,165,250,0.10)]",
  },
  emerald: {
    badge: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
    dot: "bg-emerald-400",
    line: "from-emerald-300/80 via-emerald-300/20 to-transparent",
    glow: "shadow-[0_0_34px_rgba(52,211,153,0.10)]",
  },
};

export default function ProjectCard({ project, index = 1 }: ProjectCardProps) {
  const accent = accentMap[project.accent ?? "cyan"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4, scale: 1.002 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`panel-glow-edge relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,28,0.94),rgba(6,10,20,0.88))] p-4 sm:p-5 lg:p-6 ${accent.glow}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="hidden w-18 shrink-0 lg:flex lg:flex-col lg:items-center">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
            {String(index).padStart(2, "0")}
          </div>
          <div
            className={`mt-3 h-full min-h-28 w-px bg-linear-to-b ${accent.line}`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <span
              className={`signal-flicker h-2.5 w-2.5 rounded-full ${accent.dot}`}
            />
            <span
              className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] sm:text-[11px] ${accent.badge}`}
            >
              {project.category}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-400 sm:text-[11px]">
              {project.year}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-400 sm:text-[11px]">
              {project.status}
            </span>
          </div>

          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <h3 className="max-w-4xl text-xl font-semibold leading-tight text-white sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                {project.tagline}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 xl:flex-col xl:items-end">
              <div className="rounded-full border border-cyan-300/14 bg-cyan-400/8 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">
                Dossier Active
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="shine-mask inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/25 hover:bg-white/10"
              >
                Open Dossier
              </Link>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Overview
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {project.overview}
              </p>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Stack Snapshot
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
                {project.stack.length > 4 ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    +{project.stack.length - 4} more
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
