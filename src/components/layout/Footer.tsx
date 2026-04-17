import Link from "next/link";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-8 pt-16">
      <div className="container-shell">
        <div className="glass-panel-strong panel-outline noise-overlay relative overflow-hidden rounded-4xl px-6 py-8 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.08),transparent_24%)]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                System Status
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Open for AI, ML, and intelligent systems opportunities.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                Built to showcase engineering depth across AI systems, retrieval
                workflows, computer vision, IoT platforms, and embedded
                intelligence.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]" />
                System Online
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:min-w-105">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Navigation
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/25 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Resume
                </p>

                <div className="mt-4">
                  <a
                    href="/resume/Akhilesh_Resume.pdf"
                    className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8">
            <div className="glow-line" />
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-3 text-xs uppercase tracking-[0.24em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Akhilesh Portfolio</p>
            <p>AI Command Center Interface</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
