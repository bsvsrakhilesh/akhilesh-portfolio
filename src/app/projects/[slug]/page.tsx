import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import { getProjectBySlug, projects } from "../../../content/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const accentMap = {
  cyan: {
    badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
    title: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  blue: {
    badge: "border-blue-300/20 bg-blue-400/10 text-blue-200",
    title: "text-blue-300",
    dot: "bg-blue-400",
  },
  emerald: {
    badge: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
    title: "text-emerald-300",
    dot: "bg-emerald-400",
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const accent = accentMap[project.accent ?? "cyan"];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="hero-orb hero-orb-cyan -left-40 top-20 h-88 w-88" />
      <div className="hero-orb hero-orb-blue -right-32 top-64 h-72 w-72" />
      <div className="hero-orb hero-orb-emerald bottom-0 left-[25%] h-64 w-64" />

      <main className="relative z-10 pt-32">
        <section className="container-shell">
          <div className="noise-overlay cyber-grid glass-panel-strong panel-outline relative overflow-hidden rounded-4xl px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.10),transparent_26%)]" />

            <div className="relative z-10">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
              >
                Back to Projects
              </Link>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] ${accent.badge}`}
                >
                  {project.category}
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                  {project.year}
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                  {project.status}
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                {project.title}
              </h1>

              <p className={`mt-5 text-lg font-medium ${accent.title}`}>
                {project.tagline}
              </p>

              <p className="mt-6 max-w-4xl text-sm leading-8 text-slate-300 md:text-base">
                {project.overview}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="glass-panel rounded-3xl px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Category
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {project.category}
                  </p>
                </div>

                <div className="glass-panel rounded-3xl px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Timeline
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {project.year}
                  </p>
                </div>

                <div className="glass-panel rounded-3xl px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Access
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {project.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Problem
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                What this work was solving
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-300 md:text-base">
                {project.problem}
              </p>
            </div>

            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Stack
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Tools and systems used
              </h2>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Approach
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                How the system was built
              </h2>

              <div className="mt-6 space-y-4">
                {project.approach.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${accent.badge}`}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Outcome
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Why this case study matters
              </h2>

              <div className="mt-6 space-y-4">
                {project.outcome.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-300/15 bg-cyan-400/8 px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  Note
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Codebase not publicly available. This portfolio presents the
                  work as a private case study focused on architecture,
                  workflow, and technical depth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-10">
          <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
              Next Action
            </p>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Continue exploring the portfolio system
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                  Browse the full registry of experience and project case
                  studies or return to the command center homepage.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
                >
                  View All
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition duration-300 hover:bg-cyan-300/15"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
