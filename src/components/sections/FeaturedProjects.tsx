"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { featuredProjects } from "../../content/projects";
import ProjectCard from "../project/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="container-shell pb-10 pt-8 md:pb-14 md:pt-10">
      <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(7,11,22,0.94),rgba(4,8,18,0.90))] shadow-[0_20px_80px_rgba(0,0,0,0.42)]">
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
            <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Classified Registry
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[2.8rem]">
                Experience and project dossiers.
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">
                Resume-backed work organized as active system dossiers across
                retrieval engineering, multi-sensor IoT, embedded systems,
                computer vision, and applied intelligent products.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "03 professional experience modules",
                  "02 major project dossiers",
                  "Private architecture-led showcase",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                        RG-{String(index + 1).padStart(2, "0")}
                      </p>
                      <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/projects"
                className="shine-mask mt-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
              >
                Open Full Registry
              </Link>
            </div>
          </motion.div>

          <div className="space-y-5">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index + 1}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
              <span className="text-cyan-200/75">Registry Online</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <span>Resume Synced</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <span>Dossier Access</span>
            </div>

            <div className="glow-line w-full lg:max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
