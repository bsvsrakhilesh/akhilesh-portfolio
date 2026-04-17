"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-shell pt-3 md:pt-4">
        <nav className="glass-panel-strong panel-outline relative overflow-hidden rounded-[1.35rem] md:rounded-3xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_30%),linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]" />

          <div className="relative flex min-h-16 items-center justify-between px-3 py-3 sm:px-4 md:min-h-18 md:px-6">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3"
              aria-label="Akhilesh Portfolio Home"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 18px rgba(34,211,238,0.10)",
                    "0 0 30px rgba(34,211,238,0.18)",
                    "0 0 18px rgba(34,211,238,0.10)",
                  ],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-300/15"
              >
                A
                <div className="absolute inset-0 rounded-2xl border border-white/8" />
              </motion.div>

              <div className="min-w-0">
                <p className="hidden text-[11px] uppercase tracking-[0.28em] text-cyan-200/65 sm:block">
                  AI Command Center
                </p>
                <p className="truncate text-sm font-medium text-white sm:text-base">
                  Akhilesh Portfolio
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex xl:gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.08 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white xl:px-4"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.34,
                  ease: [0.22, 1, 0.36, 1],
                }}
                href="/resume/Akhilesh_Resume.pdf"
                className="ml-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15 xl:px-5"
              >
                Resume
              </motion.a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:bg-white/10 lg:hidden"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border-t border-white/8 lg:hidden"
              >
                <div className="px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ delay: index * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:bg-white/10 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ delay: 0.18, duration: 0.2 }}
                      href="/resume/Akhilesh_Resume.pdf"
                      className="block rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition duration-300 hover:bg-cyan-300/15"
                    >
                      Resume
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
