import Link from "next/link";
import { featuredProjects } from "../../content/projects";
import ProjectCard from "../project/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="container-shell pb-8 pt-6 md:pb-12">
      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Experience and projects worth highlighting.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
            A curated view of your three core experiences and two major
            projects, presented as private case studies with architecture,
            workflows, and key outcomes.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
        >
          View All
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
