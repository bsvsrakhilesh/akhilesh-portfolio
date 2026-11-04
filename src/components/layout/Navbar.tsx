"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { sitePath } from "../../lib/sitePath";

const links = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link href="/" className="wordmark" aria-label="Akhilesh, home">
          <span className="wordmark-mark">A</span>
          <span>
            Akhilesh
            <small>AI / Systems Engineer</small>
          </span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "is-active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a className="nav-status" href="mailto:bsvsrakhilesh01@gmail.com">
          <span /> Available for conversations
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, index) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{link.label}
              </Link>
            ))}
            <a href={sitePath("/resume/akhilesh_resume.pdf")}>Download résumé ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
