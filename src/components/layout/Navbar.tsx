"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <nav className="glass-panel-strong panel-outline relative overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_30%),linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]" />

          <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Akhilesh Portfolio Home"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)] transition duration-300 group-hover:scale-105 group-hover:bg-cyan-300/15">
                A
                <div className="absolute inset-0 rounded-2xl border border-white/8" />
              </div>

              <div className="hidden min-w-0 sm:block">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  AI Command Center
                </p>
                <p className="truncate font-medium text-white">
                  Akhilesh Portfolio
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="/resume/Akhilesh_Resume.pdf"
                className="ml-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
              >
                Resume
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:bg-white/10 md:hidden"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isOpen ? (
            <div className="border-t border-white/8 px-4 pb-4 pt-2 md:hidden">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="/resume/Akhilesh_Resume.pdf"
                  className="block rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition duration-300 hover:bg-cyan-300/15"
                >
                  Resume
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
