"use client";

import Link from "next/link";
import { motion } from "motion/react";

const RESUME_HREF = "/resume/akhilesh_resume.pdf";

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
          className="panel-glow-edge relative overflow-hidden rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 shadow-[0_18px_60px_rgba(26,54,93,0.08)] sm:px-6 sm:py-6 lg:px-8 lg:py-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.06),transparent_18%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/55 to-transparent" />

          <div className="relative z-10 grid gap-5 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white/65 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                System Closing Note
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                Intelligent systems, designed with intent.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                This portfolio presents AI/ML, retrieval, computer vision, IoT,
                and embedded work as one connected engineering system rather
                than a collection of unrelated projects.
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-emerald-800">
                <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/65 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Navigation
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm text-slate-700 transition duration-300 hover:border-cyan-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href={RESUME_HREF}
                className="shine-mask mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-900 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Download Resume
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/65 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Contact Channel
              </p>

              <div className="mt-4 space-y-3">
                {[
                  {
                    href: "mailto:bsvsrakhilesh01@gmail.com",
                    text: "bsvsrakhilesh01@gmail.com",
                  },
                  {
                    href: "https://www.linkedin.com/in/boddu-sesha-venkata-sai-ranga-akhilesh-5971b31b4",
                    text: "Akhilesh on LinkedIn",
                    external: true,
                  },
                  {
                    href: "tel:+918587881462",
                    text: "+91 8587881462",
                  },
                ].map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="block rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 text-sm text-slate-700 transition duration-300 hover:bg-slate-50"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 text-[11px] uppercase tracking-[0.24em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Akhilesh Portfolio</p>
            <p>Inference Reactor Interface</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
