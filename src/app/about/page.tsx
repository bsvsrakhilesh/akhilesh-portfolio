import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const identityPoints = [
  "AI/ML engineering with a systems-first mindset",
  "Retrieval, computer vision, IoT, and embedded workflow exposure",
  "Architecture-led approach rather than notebook-only presentation",
  "Focus on turning technical work into usable intelligent systems",
];

const operatingPrinciples = [
  {
    title: "Understand the system",
    text: "Break down the full workflow, constraints, interfaces, dependencies, and failure points before building.",
  },
  {
    title: "Design for clarity",
    text: "Prefer architecture that is explainable, structured, maintainable, and grounded in technical intent.",
  },
  {
    title: "Build for use",
    text: "The goal is not just a working model, but a system that can actually be used, extended, and trusted.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="hero-orb hero-orb-cyan -left-32 top-10 h-72 w-72 sm:-left-36 sm:h-80 sm:w-80 lg:-left-44 lg:h-104 lg:w-104" />
      <div className="hero-orb hero-orb-blue -right-24 top-24 h-64 w-64 sm:-right-28 sm:h-72 sm:w-72 lg:-right-36 lg:h-96 lg:w-96" />
      <div className="hero-orb hero-orb-emerald -bottom-20 left-[24%] h-56 w-56 sm:h-64 sm:w-64 lg:-bottom-28 lg:h-80 lg:w-80" />

      <main className="relative z-10 pt-28 sm:pt-30 md:pt-32">
        <section className="container-shell">
          <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(7,11,22,0.94),rgba(4,8,18,0.90))] shadow-[0_20px_80px_rgba(0,0,0,0.42)]">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_40%_84%,rgba(52,211,153,0.06),transparent_16%)]" />
            <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-30" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/65 to-transparent" />

            <div className="relative grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-8">
              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Identity Module
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                  Engineer first.
                  <span className="mt-2 block text-cyan-300">
                    Building intelligent systems with real-world intent.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                  I am Akhilesh, an AI/ML-focused engineer working across
                  retrieval systems, computer vision, multi-sensor IoT, embedded
                  workflows, and architecture-led technical problem solving. I
                  am interested in building systems that are not only
                  technically strong, but also usable, explainable, and
                  engineered with purpose.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    AI / ML
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    Retrieval Systems
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    CV / IoT / Embedded
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Identity Feed
                </p>

                <div className="mt-5 space-y-4">
                  {identityPoints.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                          ID-{String(index + 1).padStart(2, "0")}
                        </p>
                        <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  <span className="text-cyan-200/75">Profile Online</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Systems Mindset</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Applied Engineering</span>
                </div>

                <div className="glow-line w-full lg:max-w-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                What I Build Toward
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Systems, not isolated artifacts.
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "I am drawn to problems where AI models interact with real pipelines, interfaces, data flows, or physical systems.",
                  "I want to grow as an engineer who can move from data and model logic to architecture, integration, and deployment.",
                  "My strongest interest is in technical work that feels useful, structured, and grounded in a real application context.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Current Direction
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Core Goal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Develop into an AI/ML engineer who can design and ship
                    intelligent systems from data and model logic all the way to
                    architecture and use.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Strength Mix
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    A combination of AI/ML, system thinking, backend exposure,
                    sensors, electronics, and applied engineering execution.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Design View
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Good systems should feel both technically deep and clearly
                    structured. That same principle drives this portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
              Operating Principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              How I approach technical work.
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {operatingPrinciples.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
