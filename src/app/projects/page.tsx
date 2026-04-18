import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import ProjectCard from "../../components/project/ProjectCard";
import { projects } from "../../content/projects";

export default function ProjectsPage() {
  const experiences = projects.filter((item) => item.category === "Experience");
  const portfolioProjects = projects.filter(
    (item) => item.category === "Project",
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="hero-orb hero-orb-cyan -left-32 top-10 h-72 w-72 sm:-left-36 sm:h-80 sm:w-80 lg:-left-44 lg:h-104 lg:w-104" />
      <div className="hero-orb hero-orb-blue -right-24 top-24 h-64 w-64 sm:-right-28 sm:h-72 sm:w-72 lg:-right-36 lg:h-96 lg:w-96" />
      <div className="hero-orb hero-orb-emerald -bottom-20 left-[24%] h-56 w-56 sm:h-64 sm:w-64 lg:-bottom-28 lg:h-80 lg:w-80" />

      <main className="relative z-10 pt-28 sm:pt-30 md:pt-32">
        <section className="container-shell">
          <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(5,9,18,0.95),rgba(3,7,14,0.92))] shadow-[0_24px_90px_rgba(0,0,0,0.5)]">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_48%_84%,rgba(52,211,153,0.06),transparent_16%)]" />
            <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-25" />

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/45 to-transparent" />

            <div className="relative grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-8">
              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Classified Registry
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                  Experience and project dossiers,
                  <span className="mt-2 block text-cyan-300">
                    organized as a technical registry.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                  A cinematic registry of resume-backed work across AI/ML
                  systems, retrieval engineering, computer vision, IoT,
                  electronics, and embedded problem solving. Each entry opens as
                  a private technical dossier rather than a standard portfolio
                  case study.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    03 Experience Modules
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    02 Project Dossiers
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                    Resume Synced
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Registry Feed
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      code: "EX-03",
                      title: "Professional experience modules loaded",
                      meta: "AI systems + electronics + embedded engineering",
                    },
                    {
                      code: "PJ-02",
                      title: "Major project dossiers indexed",
                      meta: "computer vision + assistive systems",
                    },
                    {
                      code: "RG-01",
                      title: "Architecture-led showcase enabled",
                      meta: "workflow + technical depth + outcomes",
                    },
                  ].map((item) => (
                    <div
                      key={item.code}
                      className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                          {item.code}
                        </p>
                        <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                      </div>
                      <p className="mt-2 text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                        {item.meta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  <span className="text-cyan-200/75">Registry Online</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Experience</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Projects</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Dossiers</span>
                </div>

                <div className="glow-line w-full lg:max-w-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 md:pt-10">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.80),rgba(5,9,19,0.74))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Experience Registry
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Professional experience modules
                </h2>
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                03 Entries
              </div>
            </div>

            <div className="space-y-5">
              {experiences.map((item, index) => (
                <ProjectCard key={item.slug} project={item} index={index + 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.80),rgba(5,9,19,0.74))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Project Registry
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Major project dossiers
                </h2>
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                02 Entries
              </div>
            </div>

            <div className="space-y-5">
              {portfolioProjects.map((item, index) => (
                <ProjectCard
                  key={item.slug}
                  project={item}
                  index={experiences.length + index + 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
