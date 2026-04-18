import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import RegistryHero from "../../components/ui/RegistryHero";

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
          <RegistryHero
            eyebrow="Stack Registry"
            title="Tools, frameworks, and systems"
            highlight="behind the work."
            description="A registry of the technologies shaping this portfolio across AI/ML, backend systems, retrieval, electronics, embedded workflows, and applied engineering."
            chips={["AI / ML", "Backend Systems", "IoT / Embedded"]}
            sideTitle="Stack View"
            sideItems={[
              {
                code: "ST-01",
                text: "Breadth across software, AI, backend, data, and electronics",
              },
              {
                code: "ST-02",
                text: "System thinking beyond isolated tools or models",
              },
              {
                code: "ST-03",
                text: "Technical stack chosen for practical use, not just familiarity",
              },
            ]}
          />
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
