import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const stackGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "AI / ML",
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

      <div className="hero-orb hero-orb-cyan -left-40 top-24 h-88 w-88" />
      <div className="hero-orb hero-orb-blue -right-32 top-72 h-72 w-72" />
      <div className="hero-orb hero-orb-emerald bottom-10 left-[22%] h-64 w-64" />

      <main className="relative z-10 pt-32">
        <section className="container-shell">
          <div className="noise-overlay cyber-grid glass-panel-strong panel-outline relative overflow-hidden rounded-4xl px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.10),transparent_26%)]" />

            <div className="relative z-10 max-w-5xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                System Stack
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                Tools, frameworks, and systems
                <span className="mt-2 block text-cyan-300">
                  behind the work.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                A structured view of the technologies shaping this portfolio
                across AI/ML, backend engineering, retrieval systems,
                electronics, embedded workflows, and applied intelligent
                systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  AI / ML
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  Backend Systems
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  IoT / Embedded
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Engineering Depth
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8"
              >
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  {group.title}
                </p>

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

        <section className="container-shell pb-8 pt-10">
          <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
              Philosophy
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
              The stack matters, but system thinking matters more.
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="glass-panel rounded-3xl px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Breadth
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Comfortable across software, AI, backend, data pipelines,
                  electronics, and deployment-oriented thinking.
                </p>
              </div>

              <div className="glass-panel rounded-3xl px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Depth
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Interested in how systems behave end-to-end, not just how
                  isolated models perform.
                </p>
              </div>

              <div className="glass-panel rounded-3xl px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Direction
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Building toward AI/ML engineering that is practical,
                  deployable, and grounded in real-world use.
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
