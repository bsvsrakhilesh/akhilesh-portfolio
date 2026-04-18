"use client";

import Link from "next/link";
import { motion } from "motion/react";

const quickLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-8 md:pb-10 md:pt-10">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel-strong panel-outline relative overflow-hidden rounded-4xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.06),transparent_18%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/55 to-transparent" />

          <div className="relative z-10 grid gap-5 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                System Closing Note
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Intelligent systems, designed with intent.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                This portfolio is built to present AI/ML, retrieval, computer
                vision, IoT, and embedded work as a unified engineering system
                rather than a collection of disconnected projects.
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-emerald-300">
                <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
                System Online
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Navigation
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/20 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href="/resume/Akhilesh_Resume.pdf"
                className="shine-mask mt-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
              >
                Download Resume
              </a>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Contact Channel
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:bsvsrakhilesh01@gmail.com"
                  className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:bg-white/10"
                >
                  bsvsrakhilesh01@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/bsvsr-akhilesh"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:bg-white/10"
                >
                  linkedin.com/in/bsvsr-akhilesh
                </a>

                <a
                  href="tel:+918587881462"
                  className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:bg-white/10"
                >
                  +91 8587881462
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-3 border-t border-white/8 pt-5 text-[11px] uppercase tracking-[0.24em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Akhilesh Portfolio</p>
            <p>AI Command Center Interface</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
