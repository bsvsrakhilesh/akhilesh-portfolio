"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { featuredProjects } from "../../content/projects";
import ProjectCard from "../project/ProjectCard";

const focuses = ["All", "AI / ML", "Data science", "Applied systems"] as const;

export default function FeaturedProjects() {
  const [focus, setFocus] = useState<(typeof focuses)[number]>("All");
  const visibleProjects = focus === "All"
    ? featuredProjects
    : featuredProjects.filter((project) => project.focus.includes(focus));

  return (
    <section className="container-shell pb-10 pt-8 md:pb-14 md:pt-10" aria-labelledby="featured-title">
      <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] shadow-[0_20px_80px_rgba(26,54,93,0.08)]">
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_50%_85%,rgba(52,211,153,0.05),transparent_16%)]" />
        <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="relative z-10 grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-4xl border border-slate-200 bg-white/65 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Selected work
              </p>

              <h2 id="featured-title" className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl lg:text-[2.8rem]">
                Explore by focus.
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                See how I approach machine learning, data analysis and applied
                engineering through real research and project work.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "03 professional roles",
                  "02 applied projects",
                  "Methods, constraints and outcomes",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-200 bg-white/65 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-800">
                        RG-{String(index + 1).padStart(2, "0")}
                      </p>
                      <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/projects"
                className="shine-mask mt-6 inline-flex rounded-full border border-cyan-300 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-900 shadow-[0_0_24px_rgba(34,211,238,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
              >
                View all case studies
              </Link>
            </div>
          </motion.div>

          <div>
            <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white/70 p-2" role="group" aria-label="Filter work by focus">
              {focuses.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFocus(option)}
                  aria-pressed={focus === option}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${focus === option ? "bg-[#103a4a] text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="my-4 text-xs font-medium text-slate-500" aria-live="polite">
              Showing {visibleProjects.length} {visibleProjects.length === 1 ? "case study" : "case studies"} in {focus === "All" ? "all focus areas" : focus}.
            </p>
            <div className="space-y-5">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index + 1}
              />
            ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-slate-200 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-500">
              <span className="text-cyan-800">Explore the work</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <span>Research and projects</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <span>Methods and outcomes</span>
            </div>

            <div className="glow-line w-full lg:max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
