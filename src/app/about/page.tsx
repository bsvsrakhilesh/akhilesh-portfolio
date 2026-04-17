import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="hero-orb hero-orb-cyan -left-40 top-24 h-88 w-88" />
      <div className="hero-orb hero-orb-blue -right-32 top-72 h-72 w-72" />
      <div className="hero-orb hero-orb-emerald bottom-10 left-[20%] h-64 w-64" />

      <main className="relative z-10 pt-32">
        <section className="container-shell">
          <div className="noise-overlay cyber-grid glass-panel-strong panel-outline relative overflow-hidden rounded-4xl px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.10),transparent_26%)]" />

            <div className="relative z-10 max-w-5xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Identity Module
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                Engineer first.
                <span className="mt-2 block text-cyan-300">
                  Building AI systems with real-world intent.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                I am Akhilesh, an AI/ML-focused engineer with work spanning
                LLM-enabled retrieval systems, computer vision, multi-sensor IoT
                platforms, embedded systems, and assistive technology. My
                approach combines system design, applied intelligence, and
                practical engineering execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  AI / ML
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  Retrieval Systems
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  Computer Vision
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  IoT / Embedded
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                What I Do
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Building systems, not just models
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Design and build AI workflows that move beyond notebooks into usable systems.",
                  "Work across ingestion, retrieval, model logic, interfaces, and engineering structure.",
                  "Combine software, sensors, electronics, and data analysis when the problem demands it.",
                  "Focus on practical architecture, clarity of implementation, and strong technical communication.",
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

            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Current Direction
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                The kind of engineer I am becoming
              </h2>

              <div className="mt-6 grid gap-4">
                <div className="glass-panel rounded-3xl px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Core Goal
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    Grow into an AI/ML engineer who can design intelligent
                    products from data and models all the way to deployment and
                    user-facing systems.
                  </p>
                </div>

                <div className="glass-panel rounded-3xl px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Strength
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    A rare mix of AI, backend/system thinking, electronics,
                    sensors, and applied engineering execution.
                  </p>
                </div>

                <div className="glass-panel rounded-3xl px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Design Mindset
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    Premium systems should feel both technically deep and
                    cleanly understandable. That same principle drives this
                    portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-10">
          <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
              Working Style
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
              How I approach technical problems
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="glass-panel rounded-3xl px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  01
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Understand the system
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I break down the workflow, constraints, data flow, and failure
                  points before rushing into implementation.
                </p>
              </div>

              <div className="glass-panel rounded-3xl px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  02
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Build for clarity
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I prefer structured architecture, readable implementation, and
                  outputs that are easy to explain and maintain.
                </p>
              </div>

              <div className="glass-panel rounded-3xl px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  03
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Make it useful
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  The final goal is not just a working model, but a usable
                  intelligent system with real purpose.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
