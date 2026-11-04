import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import ProjectVisual from "../../../components/project/ProjectVisual";
import { getProjectBySlug, projects } from "../../../content/projects";
import { sitePath } from "../../../lib/sitePath";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const accentMap = {
  cyan: {
    badge: "border-cyan-300 bg-cyan-400/10 text-cyan-800",
    text: "text-cyan-700",
    dot: "bg-cyan-400",
    line: "from-cyan-300/75 via-cyan-300/20 to-transparent",
  },
  blue: {
    badge: "border-blue-300 bg-blue-400/10 text-blue-800",
    text: "text-blue-800",
    dot: "bg-blue-400",
    line: "from-blue-300/75 via-blue-300/20 to-transparent",
  },
  emerald: {
    badge: "border-emerald-300 bg-emerald-400/10 text-emerald-800",
    text: "text-emerald-800",
    dot: "bg-emerald-400",
    line: "from-emerald-300/75 via-emerald-300/20 to-transparent",
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.shortTitle,
    description: project.tagline,
    openGraph: {
      title: `${project.shortTitle} | Akhilesh`,
      description: project.tagline,
      type: "article",
      images: [{ url: sitePath("/opengraph-image.png"), width: 1200, height: 630, alt: "Akhilesh — AI and systems engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.shortTitle} | Akhilesh`,
      description: project.tagline,
      images: [sitePath("/opengraph-image.png")],
    },
  };
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
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="hero-orb hero-orb-cyan -left-32 top-10 h-72 w-72 sm:-left-36 sm:h-80 sm:w-80 lg:-left-44 lg:h-104 lg:w-104" />
      <div className="hero-orb hero-orb-blue -right-24 top-24 h-64 w-64 sm:-right-28 sm:h-72 sm:w-72 lg:-right-36 lg:h-96 lg:w-96" />
      <div className="hero-orb hero-orb-emerald -bottom-20 left-[24%] h-56 w-56 sm:h-64 sm:w-64 lg:-bottom-28 lg:h-80 lg:w-80" />

      <main id="main-content" className="relative z-10 pt-28 sm:pt-30 md:pt-32">
        <section className="container-shell">
          <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] shadow-[0_24px_90px_rgba(26,54,93,0.08)]">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_48%_84%,rgba(52,211,153,0.06),transparent_16%)]" />
            <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-25" />

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/45 to-transparent" />

            <div className="relative grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-8">
              <div className="rounded-4xl border border-slate-200 bg-white/65 px-5 py-5 lg:px-6 lg:py-6">
                <Link
                  href="/projects"
                  className="inline-flex rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
                >
                  Back to all work
                </Link>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] ${accent.badge}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                    {project.category}
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600">
                    {project.year}
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600">
                    {project.status}
                  </span>
                </div>

                <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl xl:text-6xl">
                  {project.title}
                </h1>

                <p className={`mt-5 text-lg font-medium ${accent.text}`}>
                  {project.tagline}
                </p>

                <p className="mt-6 max-w-4xl text-sm leading-8 text-slate-600 md:text-base">
                  {project.overview}
                </p>

                <ProjectVisual project={project} />

                <div className="mt-8 rounded-4xl border border-slate-200 bg-white/65 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                    Case study summary
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        Category
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {project.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        Timeline
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        Format
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-4xl border border-slate-200 bg-white/65 px-5 py-5 lg:px-6 lg:py-6">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                    At a glance
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      {
                        label: "Focus areas",
                        value: project.focus.join(" · "),
                      },
                      {
                        label: "Core methods",
                        value: project.stack.slice(0, 3).join(" · "),
                      },
                      {
                        label: "This case study",
                        value: "Problem, approach and outcomes",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-slate-200 bg-white/65 px-4 py-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-2 text-base font-medium text-slate-900">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-4xl border border-slate-200 bg-white/65 px-5 py-5 lg:px-6 lg:py-6">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                    Tools &amp; methods
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-xs text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-slate-200 px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  <span className="text-cyan-800">Case study</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Problem</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Approach</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Outcome</span>
                </div>

                <div className="glow-line w-full lg:max-w-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                  Problem Frame
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                What this work was solving
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
                {project.problem}
              </p>

              <div className="mt-8 rounded-4xl border border-slate-200 bg-white/65 px-5 py-5">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                  Technical Framing
                </p>
                <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                  This case study is structured around engineering clarity: what
                  the system was trying to solve, how it was approached, and why
                  the work matters. The emphasis is on technical reasoning,
                  architecture, and use-oriented execution.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Approach Timeline
              </p>

              <div className="mt-6 space-y-4">
                {project.approach.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <div className="hidden w-12 shrink-0 flex-col items-center sm:flex">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-semibold ${accent.badge}`}
                      >
                        {index + 1}
                      </div>
                      {index !== project.approach.length - 1 ? (
                        <div
                          className={`mt-3 h-full min-h-16 w-px bg-linear-to-b ${accent.line}`}
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1 rounded-3xl border border-slate-200 bg-white/65 px-4 py-4">
                      <div className="mb-3 flex items-center gap-3 sm:hidden">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-xl border text-xs font-semibold ${accent.badge}`}
                        >
                          {index + 1}
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                          Phase {index + 1}
                        </div>
                      </div>

                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Outcome
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                What the work delivered
              </h2>

              <div className="mt-6 space-y-4">
                {project.outcome.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-200 bg-white/65 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-cyan-400/8 px-5 py-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-800">
                  Case Study Note
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  This page summarizes the workflow at a high level. The diagram
                  is illustrative and leaves out implementation details and data.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Related work
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Continue through the system
              </h2>

              <div className="mt-6 space-y-4">
                {relatedProjects.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="block rounded-3xl border border-slate-200 bg-white/65 px-4 py-4 transition duration-300 hover:border-cyan-300 hover:bg-white/90"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/75 text-xs font-semibold text-slate-900">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-slate-900">
                            {item.shortTitle}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                            {item.category} · {item.year}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        Open
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-medium text-slate-900 transition duration-300 hover:bg-slate-50"
                >
                  View all work
                </Link>

                <Link
                  href="/"
                  className="shine-mask inline-flex rounded-full border border-cyan-300 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-900 transition duration-300 hover:bg-cyan-300/15"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                  Next steps
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  Interested in how this work could apply to your team?
                </h2>
              </div>

              <Link href="/contact" className="inline-flex w-fit rounded-full border border-cyan-300 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-900 transition-colors hover:bg-cyan-300/20">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
