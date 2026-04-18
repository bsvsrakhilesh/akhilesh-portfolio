import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import RegistryHero from "../../components/ui/RegistryHero";

const stackGroups = [
  {
    title: "Programming",
    code: "PG-01",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend & Backend",
    code: "FS-02",
    items: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Data & Infrastructure",
    code: "DI-03",
    items: ["PostgreSQL", "Prisma ORM", "Celery", "Redis Queue", "Docker"],
  },
  {
    title: "AI / NLP / Retrieval",
    code: "AI-04",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Large Language Models",
      "OpenAI API",
      "RAG Pipelines",
      "Embeddings",
      "Semantic Search",
      "Hybrid Search",
      "KeyBERT",
      "YAKE",
      "spaCy",
      "sentence-transformers",
    ],
  },
  {
    title: "Computer Vision / Audio",
    code: "CV-05",
    items: [
      "Computer Vision",
      "OpenCV",
      "librosa",
      "Signal Processing",
      "Audio Transformers",
    ],
  },
  {
    title: "IoT / Embedded / Electronics",
    code: "HW-06",
    items: [
      "IoT Systems",
      "Arduino",
      "Raspberry Pi",
      "PSoC 5LP",
      "Embedded C",
      "Rapid Prototyping",
      "Sensor Integration",
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
            eyebrow="Systems Stack"
            title="Tools, frameworks, and systems"
            highlight="behind the work."
            description="This stack reflects the actual technologies behind my work in AI/ML engineering, retrieval systems, APIs, data workflows, computer vision, IoT, and embedded applications."
            chips={["AI / ML", "Retrieval", "APIs", "IoT / Embedded"]}
            sideTitle="Stack Feed"
            sideItems={[
              {
                code: "ST-01",
                text: "Built around Python, AI workflows, APIs, and architecture-oriented engineering.",
              },
              {
                code: "ST-02",
                text: "Combines software systems with sensing, monitoring, and embedded device work.",
              },
              {
                code: "ST-03",
                text: "Focused on practical tools that support deployment, integration, and system clarity.",
              },
            ]}
          />
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.80),rgba(5,9,19,0.74))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
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
