"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { featuredProjects } from "../../content/projects";
import ProjectCard from "../project/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="container-shell pb-10 pt-8 md:pb-14 md:pt-10">
      <div className="glass-panel-strong panel-outline relative overflow-hidden rounded-4xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.06),transparent_18%)]" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Classified Registry
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-[2.8rem]">
                Experience and project dossiers.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                A command-style registry of professional experience and major
                project work, presented as private technical dossiers rather
                than ordinary portfolio cards.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                03 Experiences
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                02 Projects
              </div>
              <Link
                href="/projects"
                className="shine-mask inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
              >
                Open Full Registry
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-8 space-y-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
