"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import HeroCanvas from "../components/hero/HeroCanvas";

const leftStats = [
  { label: "Experience", value: "03" },
  { label: "Projects", value: "02" },
  { label: "Focus", value: "AI / ML" },
];

const telemetry = [
  {
    label: "Retrieval",
    status: "Hybrid Search",
    percent: "92%",
  },
  {
    label: "Vision",
    status: "Edge Inference",
    percent: "84%",
  },
  {
    label: "IoT Systems",
    status: "Monitoring Active",
    percent: "88%",
  },
];

const rightFeed = [
  {
    code: "RG-01",
    title: "Hybrid retrieval pipeline synced",
    meta: "vector + keyword registry",
  },
  {
    code: "IO-07",
    title: "Multi-sensor monitoring workflows active",
    meta: "live sensing + analytics",
  },
  {
    code: "CV-04",
    title: "Vision and embedded systems registered",
    meta: "edge pipeline indexed",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-cyan -left-32 top-8 h-72 w-72 sm:-left-36 sm:h-80 sm:w-80 lg:-left-44 lg:top-10 lg:h-104 lg:w-104"
      />
      <motion.div
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-blue -right-24 top-16 h-64 w-64 sm:-right-28 sm:h-72 sm:w-72 lg:-right-36 lg:top-20 lg:h-96 lg:w-96"
      />
      <motion.div
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-emerald -bottom-20 left-[22%] h-56 w-56 sm:h-64 sm:w-64 lg:-bottom-28 lg:left-[32%] lg:h-80 lg:w-80"
      />

      <main className="relative z-10">
        <section className="container-shell relative min-h-screen pt-28 sm:pt-30 md:pt-32">
          <div className="panel-glow-edge relative min-h-[calc(100vh-8rem)] overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(7,11,22,0.92),rgba(4,8,18,0.88))] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.10),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_15%_82%,rgba(52,211,153,0.06),transparent_20%)]" />
            <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-30" />

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/50 to-transparent" />

            <div className="pointer-events-none absolute left-5 top-5 z-10 hidden h-10 w-10 rounded-tl-2xl border-l border-t border-cyan-300/25 lg:block" />
            <div className="pointer-events-none absolute bottom-5 right-5 z-10 hidden h-10 w-10 rounded-br-2xl border-b border-r border-cyan-300/20 lg:block" />

            <div className="relative grid min-h-[calc(100vh-8rem)] grid-cols-1 lg:grid-cols-[1.02fr_1.18fr_0.8fr]">
              <div className="relative z-10 flex flex-col justify-between px-5 pb-6 pt-6 sm:px-6 md:px-8 lg:border-r lg:border-white/8 lg:px-8 lg:pb-8 lg:pt-8 xl:px-10">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-cyan-200 sm:text-[11px]"
                  >
                    <span className="status-pulse h-2 w-2 rounded-full bg-cyan-400" />
                    AI Command Center
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-6 text-[11px] uppercase tracking-[0.38em] text-cyan-200/70 sm:text-xs"
                  >
                    Akhilesh Portfolio System
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-5 max-w-[16ch] text-4xl font-semibold leading-[0.92] text-white sm:text-5xl lg:text-[3.6rem] xl:text-[4.3rem]"
                  >
                    Building intelligent systems
                    <span className="mt-2 block text-cyan-300">
                      from data to deployment.
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
                  >
                    AI/ML engineer focused on retrieval systems, computer
                    vision, multi-sensor IoT, embedded intelligence, and
                    production-grade engineering workflows.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                  >
                    <Link
                      href="/projects"
                      className="shine-mask inline-flex justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
                    >
                      Open Registry
                    </Link>

                    <a
                      href="/resume/Akhilesh_Resume.pdf"
                      className="inline-flex justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Resume
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
                >
                  {leftStats.map((item) => (
                    <div
                      key={item.label}
                      className="glass-panel rounded-2xl px-4 py-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="relative flex min-h-104 items-center justify-center px-4 py-6 sm:px-6 lg:min-h-full lg:px-6 lg:py-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative w-full max-w-2xl"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_42%)] blur-2xl" />
                  <HeroCanvas />
                </motion.div>
              </div>

              <div className="relative z-10 border-t border-white/8 px-4 py-5 sm:px-5 lg:border-l lg:border-t-0 lg:px-5 lg:py-8 xl:px-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="space-y-4"
                >
                  <div className="glass-panel-strong telemetry-grid rounded-3xl p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/65">
                          Status
                        </p>
                        <h2 className="mt-2 text-lg font-semibold text-white">
                          Mission Dashboard
                        </h2>
                      </div>

                      <div className="status-pulse rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        Online
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        Active Module
                      </p>
                      <p className="mt-2 text-base font-medium text-white">
                        Retrieval Intelligence
                      </p>
                      <div className="mt-3 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        Hybrid Search
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel telemetry-grid rounded-3xl p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        Telemetry Rail
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        Live
                      </span>
                    </div>

                    <div className="mt-4 space-y-4">
                      {telemetry.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-xs text-slate-400">
                                {item.label}
                              </p>
                              <p className="mt-1 text-sm font-medium text-white">
                                {item.status}
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-cyan-300">
                              {item.percent}
                            </p>
                          </div>

                          <div className="mt-3 h-1.5 rounded-full bg-white/8">
                            <div
                              className="h-1.5 rounded-full bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-400"
                              style={{ width: item.percent }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel telemetry-grid rounded-3xl p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      System Feed
                    </p>

                    <div className="mt-4 space-y-3">
                      {rightFeed.map((item, index) => (
                        <motion.div
                          key={item.code}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.38,
                            delay: 0.5 + index * 0.08,
                          }}
                          className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                              {item.code}
                            </p>
                            <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-200">
                            {item.title}
                          </p>
                          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                            {item.meta}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.62,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  <span className="text-cyan-200/75">Registry Ready</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>AI / ML</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Computer Vision</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>IoT / Embedded</span>
                </div>

                <div className="glow-line w-full lg:max-w-sm" />
              </div>
            </motion.div>
          </div>
        </section>

        <FeaturedProjects />
        <Footer />
      </main>
    </div>
  );
}
