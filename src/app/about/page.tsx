import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import RegistryHero from "../../components/ui/RegistryHero";

const operatingPrinciples = [
  {
    title: "Understand the system",
    text: "I prefer to understand the full workflow first: the interfaces, constraints, data movement, and possible failure points before implementation begins.",
  },
  {
    title: "Design for clarity",
    text: "I value engineering that is readable, explainable, and structured well enough to be extended, discussed, and trusted.",
  },
  {
    title: "Build for use",
    text: "The final goal is not only a working model, but a system that can operate in a meaningful real-world context.",
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
          <RegistryHero
            eyebrow="Identity Module"
            title="Engineer first."
            highlight="Building intelligent systems with real-world intent."
            description="I am Akhilesh, an AI/ML-focused engineer with experience across LLM-enabled retrieval systems, semantic search, computer vision, multi-sensor IoT, electronics, and embedded workflows. I am most interested in technical work that connects models, systems, and real use."
            chips={["AI / ML", "Retrieval Systems", "CV / IoT / Embedded"]}
            sideTitle="Identity Feed"
            sideItems={[
              {
                code: "ID-01",
                text: "Project Scientist experience in LLM ingestion, retrieval, and RAG workflows",
              },
              {
                code: "ID-02",
                text: "Research internship experience in multi-sensor IoT, monitoring, and analytics",
              },
              {
                code: "ID-03",
                text: "Electronics and embedded foundation through C-DOT and applied hardware projects",
              },
            ]}
          />
        </section>

        <section className="container-shell pt-8 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Engineering Direction
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Systems, not isolated artifacts.
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "I am drawn to AI work that moves beyond experiments into usable engineering systems.",
                  "My strongest interest is in architecture-led workflows where models, software, interfaces, or physical systems connect meaningfully.",
                  "I want to keep growing as an engineer who can move from data and model logic to integration, deployment, and system behavior.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4 transition duration-300 hover:border-cyan-300/18 hover:bg-white/6"
                  >
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Current Strength Mix
              </p>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: "AI / ML",
                    text: "LLM-enabled retrieval, semantic search, embeddings, and architecture-oriented AI workflows.",
                  },
                  {
                    label: "Systems",
                    text: "Backend integration, APIs, queues, metadata handling, and engineering structure around AI functionality.",
                  },
                  {
                    label: "Applied Engineering",
                    text: "IoT systems, sensors, embedded workflows, electronics exposure, and real-world implementation thinking.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5 transition duration-300 hover:border-cyan-300/18 hover:bg-white/6"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {item.text}
                    </p>
                  </div>
                ))}
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
                  className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5 transition duration-300 hover:border-cyan-300/18 hover:bg-white/6"
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
