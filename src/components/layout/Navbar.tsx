"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-shell pt-3 md:pt-4">
        <nav className="glass-panel-strong panel-outline relative overflow-hidden rounded-4xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_30%),linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/55 to-transparent" />

          <div className="relative flex min-h-16 items-center justify-between px-3 py-3 sm:px-4 md:min-h-18 md:px-6">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 18px rgba(34,211,238,0.08)",
                    "0 0 28px rgba(34,211,238,0.16)",
                    "0 0 18px rgba(34,211,238,0.08)",
                  ],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200"
              >
                A
                <div className="absolute inset-0 rounded-2xl border border-white/8" />
              </motion.div>

              <div className="min-w-0">
                <p className="hidden text-[11px] uppercase tracking-[0.3em] text-cyan-200/65 sm:block">
                  AI Command Center
                </p>
                <p className="truncate text-sm font-medium text-white sm:text-base">
                  Akhilesh Portfolio
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex xl:gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.38,
                      delay: 0.08 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                        isActive
                          ? "border border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                          : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.a
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.38,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                href="/resume/Akhilesh_Resume.pdf"
                className="shine-mask ml-2 inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
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

          <div className="pointer-events-none hidden h-px bg-linear-to-r from-transparent via-cyan-300/18 to-transparent lg:block" />

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border-t border-white/8 lg:hidden"
              >
                <div className="space-y-2 px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
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
                          className={`block rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${
                            isActive
                              ? "border border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                              : "border border-white/8 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    href="/resume/Akhilesh_Resume.pdf"
                    className="shine-mask block rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition duration-300 hover:bg-cyan-300/15"
                  >
                    Resume
                  </motion.a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
