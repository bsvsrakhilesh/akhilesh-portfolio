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

      <div className="hero-orb hero-orb-cyan -left-40 top-20 h-88 w-88" />
      <div className="hero-orb hero-orb-blue -right-32 top-64 h-72 w-72" />
      <div className="hero-orb hero-orb-emerald bottom-10 left-[20%] h-64 w-64" />

      <main className="relative z-10 pt-32">
        <section className="container-shell">
          <div className="noise-overlay cyber-grid glass-panel-strong panel-outline relative overflow-hidden rounded-4xl px-6 py-10 md:px-10 md:py-14 lg:px-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.10),transparent_26%)]" />

            <div className="relative z-10 max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Project Registry
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                Experience and projects,
                <span className="mt-2 block text-cyan-300">
                  organized as private case studies.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                This portfolio section highlights your professional experience
                and major projects using architecture-led storytelling,
                technical stack visibility, and outcome-focused summaries
                without exposing private source code.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  03 Experiences
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  02 Projects
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Private Implementation
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-10">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Professional experience highlights
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Roles that show your progression across AI systems, data analysis,
              electronics, embedded workflows, and production-minded
              engineering.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {experiences.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>

        <section className="container-shell pb-8 pt-14">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Major project showcases
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Applied systems work spanning computer vision, embedded
              intelligence, assistive technology, and real-world deployment
              thinking.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {portfolioProjects.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
