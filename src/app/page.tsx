"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import HeroCanvas from "../components/hero/HeroCanvas";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <motion.div
        animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-cyan -left-40 -top-24 h-72 w-72 sm:h-80 sm:w-80 lg:h-88 lg:w-88"
      />
      <motion.div
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-blue -right-24 top-24 h-60 w-60 sm:-right-28 sm:top-28 sm:h-72 sm:w-72 lg:-right-32 lg:top-32"
      />
      <motion.div
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-emerald -bottom-24 left-[20%] h-52 w-52 sm:-bottom-28 sm:left-[24%] sm:h-60 sm:w-60 lg:-bottom-32 lg:left-[30%] lg:h-64 lg:w-64"
      />

      <section className="container-shell relative flex min-h-screen items-center justify-center px-0 pb-6 pt-28 sm:pb-8 sm:pt-30 md:pt-32">
        <div className="noise-overlay cyber-grid glass-panel-strong panel-outline relative w-full overflow-hidden px-4 py-6 shadow-2xl sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.10),transparent_26%)]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-cyan-200/80 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.3em]"
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.12, 0.9] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]"
                />
                AI Command Center
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/70 sm:mb-4 sm:text-sm sm:tracking-[0.38em]"
              >
                Akhilesh Portfolio System
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.72,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-glow max-w-4xl text-4xl font-semibold leading-[0.96] text-white sm:text-5xl md:text-6xl xl:text-7xl"
              >
                Building intelligent systems
                <span className="mt-2 block text-cyan-300">
                  from data to deployment.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg"
              >
                AI/ML engineer portfolio focused on retrieval systems, computer
                vision, IoT platforms, embedded intelligence, and
                production-grade engineering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <Link
                  href="/projects"
                  className="shine-mask inline-flex justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
                >
                  View Projects
                </Link>

                <a
                  href="/resume/Akhilesh_Resume.pdf"
                  className="inline-flex justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.46,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:mt-12"
              >
                {[
                  { label: "Focus", value: "AI / ML Systems" },
                  { label: "Core", value: "RAG · CV · IoT" },
                  { label: "Mode", value: "System Online" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.54 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="glass-panel rounded-2xl px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs sm:tracking-[0.24em]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative space-y-4 sm:space-y-5"
            >
              <HeroCanvas />

              <div className="glass-panel-strong panel-outline relative overflow-hidden rounded-4xl p-4 sm:p-5">
                <motion.div
                  animate={{ opacity: [0.22, 0.42, 0.22] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_24%)]"
                />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70 sm:tracking-[0.3em]">
                        Live System View
                      </p>
                      <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                        Mission Dashboard
                      </h2>
                    </div>

                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(52,211,153,0)",
                          "0 0 18px rgba(52,211,153,0.25)",
                          "0 0 0 rgba(52,211,153,0)",
                        ],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="status-pulse rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
                    >
                      Online
                    </motion.div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.5 }}
                      className="glass-panel rounded-2xl p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-400 sm:tracking-[0.24em]">
                            Active Module
                          </p>
                          <p className="mt-2 text-sm font-medium text-white sm:text-base">
                            Retrieval Intelligence
                          </p>
                        </div>
                        <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                          Hybrid Search
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.58 }}
                      className="glass-panel rounded-2xl p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400 sm:tracking-[0.24em]">
                        Current Metrics
                      </p>

                      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[
                          { label: "Experience", value: "03" },
                          { label: "Projects", value: "02" },
                          {
                            label: "State",
                            value: "Stable",
                            valueClass: "text-cyan-300",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-white/8 bg-white/4 px-3 py-3"
                          >
                            <p className="text-xs text-slate-400">
                              {item.label}
                            </p>
                            <p
                              className={`mt-2 text-lg font-semibold text-white sm:text-xl ${item.valueClass ?? ""}`}
                            >
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.66 }}
                      className="glass-panel rounded-2xl p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400 sm:tracking-[0.24em]">
                        System Feed
                      </p>

                      <div className="mt-4 space-y-3">
                        {[
                          "LLM-enabled document ingestion and tagging pipeline indexed.",
                          "Multi-sensor IoT monitoring and calibration workflows synchronized.",
                          "Traffic control and assistive embedded systems queued for showcase.",
                        ].map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.36,
                              delay: 0.76 + index * 0.08,
                            }}
                            className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-slate-200"
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-5">
                    <div className="glow-line" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <Footer />
    </div>
  );
}
