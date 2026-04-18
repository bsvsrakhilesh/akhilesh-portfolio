import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const stackGroups = [
  {
    title: "Languages",
    code: "LG-01",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "AI / ML",
    code: "AI-02",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Large Language Models",
      "Retrieval Augmented Generation",
      "Semantic Search",
      "Hybrid Retrieval",
      "Embeddings",
    ],
  },
  {
    title: "Frameworks & Libraries",
    code: "FW-03",
    items: [
      "FastAPI",
      "Scikit-Learn",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Plotly",
      "spaCy",
      "sentence-transformers",
      "KeyBERT",
      "YAKE",
    ],
  },
  {
    title: "Backend & Data Systems",
    code: "BD-04",
    items: [
      "Node.js",
      "Express.js",
      "Prisma",
      "REST API",
      "PostgreSQL",
      "pgvector",
      "Celery",
      "Redis Queues",
      "Docker",
      "API Security",
    ],
  },
  {
    title: "Computer Vision / Audio / DSP",
    code: "CV-05",
    items: [
      "Computer Vision",
      "OpenCV",
      "Audio Feature Engineering",
      "Signal Processing with librosa/SciPy",
      "Windowing / Segmentation",
      "Audio Transformers",
    ],
  },
  {
    title: "Electronics / IoT",
    code: "ET-06",
    items: [
      "Internet of Things",
      "Rapid Prototyping",
      "Embedded C",
      "Raspberry Pi",
      "Arduino (ATMega 328P)",
      "Seeed Studio Xiao ESP32S3",
      "PSoC 5LP",
      "Autodesk Fusion",
    ],
  },
];

export default function StackPage() {
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
                  Stack Registry
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                  Tools, frameworks, and systems
                  <span className="mt-2 block text-cyan-300">
                    behind the work.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                  A registry of the technologies shaping this portfolio across
                  AI/ML, backend systems, retrieval, electronics, embedded
                  workflows, and applied engineering.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    AI / ML
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    Backend Systems
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    IoT / Embedded
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Stack View
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    "Breadth across software, AI, backend, data, and electronics",
                    "System thinking beyond isolated tools or models",
                    "Technical stack chosen for practical use, not just familiarity",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                          ST-{String(index + 1).padStart(2, "0")}
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
                  <span className="text-cyan-200/75">Stack Active</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Languages</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Frameworks</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Systems</span>
                </div>

                <div className="glow-line w-full lg:max-w-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                      {group.code}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                      {group.title}
                    </h2>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Active
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/20 hover:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
