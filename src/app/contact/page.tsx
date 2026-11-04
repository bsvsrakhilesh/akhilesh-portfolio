import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import RegistryHero from "../../components/ui/RegistryHero";
import ContactForm from "../../components/contact/ContactForm";

const contactCards = [
  {
    code: "CH-01",
    label: "Email",
    value: "bsvsrakhilesh01@gmail.com",
    href: "mailto:bsvsrakhilesh01@gmail.com",
  },
  {
    code: "CH-02",
    label: "LinkedIn",
    value: "linkedin.com/in/boddu-sesha-venkata-sai-ranga-akhilesh-5971b31b4",
    href: "https://www.linkedin.com/in/boddu-sesha-venkata-sai-ranga-akhilesh-5971b31b4",
  },
  {
    code: "CH-03",
    label: "Phone",
    value: "+91 8587881462",
    href: "tel:+918587881462",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="hero-orb hero-orb-cyan -left-32 top-10 h-72 w-72 sm:-left-36 sm:h-80 sm:w-80 lg:-left-44 lg:h-104 lg:w-104" />
      <div className="hero-orb hero-orb-blue -right-24 top-24 h-64 w-64 sm:-right-28 sm:h-72 sm:w-72 lg:-right-36 lg:h-96 lg:w-96" />
      <div className="hero-orb hero-orb-emerald -bottom-20 left-[24%] h-56 w-56 sm:h-64 sm:w-64 lg:-bottom-28 lg:h-80 lg:w-80" />

      <main id="main-content" className="relative z-10 pt-28 sm:pt-30 md:pt-32">
        <section className="container-shell">
          <RegistryHero
            eyebrow="Get in touch"
            title="Let’s work on"
            highlight="useful AI and data problems."
            description="Open to AI/ML engineering and data science roles, and conversations about retrieval, sensor analytics, audio ML, computer vision and applied systems."
            chips={["Email", "LinkedIn", "Phone"]}
            sideTitle="Good conversations"
            sideItems={[
              {
                code: "CN-01",
                text: "AI/ML engineering, data science, retrieval and applied research roles.",
              },
              {
                code: "CN-02",
                text: "Problems that connect careful analysis, models and software to real use.",
              },
              {
                code: "CN-03",
                text: "Email and LinkedIn are direct ways to start a conversation.",
              },
            ]}
          />
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Contact options
              </p>

              <div className="mt-6 space-y-4">
                {contactCards.map((item) => (
                  <a
                    key={item.code}
                    href={item.href}
                    target={
                      item.href.startsWith("https") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https") ? "noreferrer" : undefined
                    }
                    className="block rounded-3xl border border-slate-200 bg-white/65 px-4 py-4 transition duration-300 hover:border-cyan-300 hover:bg-white/90"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-800">
                        {item.code}
                      </p>
                      <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      {item.label}
                    </p>
                    <p className="mt-2 break-all text-sm leading-7 text-slate-600">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f5f9fc)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-800">
                Send a message
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Send a direct message.
              </h2>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
