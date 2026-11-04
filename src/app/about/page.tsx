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

      <main id="main-content" className="relative z-10 pt-28 sm:pt-30 md:pt-32">
        <section className="container-shell">
          <RegistryHero
            eyebrow="About me"
            title="AI/ML engineer. Data scientist."
            highlight="I connect rigorous analysis with dependable systems."
            description="I am Akhilesh. My work spans grounded retrieval and RAG, Python-based sensor calibration, audio ML, computer vision, and embedded prototypes. I enjoy taking a problem from raw data and model evaluation through to a system people can inspect and use."
            chips={["Retrieval & RAG", "Data science", "Computer vision"]}
            sideTitle="Experience snapshot"
            sideItems={[
              {
                code: "ID-01",
                text: "Project Scientist at IIT Delhi: document ingestion, hybrid retrieval, grounded RAG and audio ML",
              },
              {
                code: "ID-02",
                text: "Research Intern at IIT Delhi: Python calibration across 17 logger nodes and three reference datasets",
              },
              {
                code: "ID-03",
                text: "Applied projects: YOLOv10 traffic vision and sensor-based assistive technology",
              },
            ]}
          />
        </section>

        <section className="container-shell pt-8 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                How I work
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                From data to useful systems.
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "I start with the quality, provenance and limits of the data before choosing a model or architecture.",
                  "I connect analysis to practical workflows: retrieval APIs, calibration pipelines, interfaces and sensor systems.",
                  "I make outputs inspectable through evaluation, source links, clear assumptions and visible failure cases.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-200 bg-white/65 px-4 py-4 transition duration-300 hover:border-cyan-300 hover:bg-white/90"
                  >
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Where I work
              </p>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: "Machine learning",
                    text: "RAG, semantic search, embeddings, audio ML and computer vision workflows.",
                  },
                  {
                    label: "Data science",
                    text: "Python analysis, sensor calibration, feature engineering, regression and model evaluation.",
                  },
                  {
                    label: "Applied systems",
                    text: "APIs, queues, databases, IoT sensors and embedded prototypes that carry insights into use.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-white/65 px-5 py-5 transition duration-300 hover:border-cyan-300 hover:bg-white/90"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
              Operating Principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              How I approach technical work.
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {operatingPrinciples.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white/65 px-5 py-5 transition duration-300 hover:border-cyan-300 hover:bg-white/90"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-lg font-medium text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
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
