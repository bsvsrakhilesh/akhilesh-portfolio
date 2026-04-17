export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="hero-orb hero-orb-cyan -left-40 -top-24 h-88 w-88" />
      <div className="hero-orb hero-orb-blue -right-32 top-32 h-72 w-72" />
      <div className="hero-orb hero-orb-emerald -bottom-32 left-[30%] h-64 w-64" />

      <section className="container-shell relative flex min-h-screen items-center justify-center py-20">
        <div className="noise-overlay cyber-grid glass-panel-strong panel-outline relative w-full overflow-hidden px-6 py-10 shadow-2xl md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.10),transparent_26%)]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
                AI Command Center
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.38em] text-cyan-200/70">
                Akhilesh Portfolio System
              </p>

              <h1 className="text-glow max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Building intelligent systems
                <span className="mt-2 block text-cyan-300">
                  from data to deployment.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Premium AI/ML engineer portfolio experience focused on
                intelligent products, retrieval systems, computer vision, IoT
                platforms, and production-grade engineering thinking.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15">
                  View Projects
                </button>

                <button className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Resume
                </button>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="glass-panel rounded-2xl px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    RAG / Search Systems
                  </p>
                </div>

                <div className="glass-panel rounded-2xl px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Stack
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    FastAPI · Next.js · AI/ML
                  </p>
                </div>

                <div className="glass-panel rounded-2xl px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Mode
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    System Online
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel-strong panel-outline relative overflow-hidden rounded-4xl p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                      Live System View
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      Mission Dashboard
                    </h2>
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Online
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-panel rounded-2xl p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          Active Module
                        </p>
                        <p className="mt-2 text-base font-medium text-white">
                          Retrieval Intelligence
                        </p>
                      </div>
                      <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        Hybrid Search
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Current Metrics
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-3">
                        <p className="text-xs text-slate-400">Projects</p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          04
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-3">
                        <p className="text-xs text-slate-400">Systems</p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          AI + IoT
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-3">
                        <p className="text-xs text-slate-400">State</p>
                        <p className="mt-2 text-xl font-semibold text-cyan-300">
                          Stable
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      System Feed
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-200">
                        LLM document ingestion workflow ready for deployment
                        layer.
                      </div>
                      <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-200">
                        Computer vision traffic-control module indexed in
                        portfolio registry.
                      </div>
                      <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-200">
                        Sensor systems and embedded intelligence showcase
                        synchronized.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="glow-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
