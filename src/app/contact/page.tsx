import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import RegistryHero from "../../components/ui/RegistryHero";

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
    value: "linkedin.com/in/bsvsr-akhilesh",
    href: "https://www.linkedin.com/in/bsvsr-akhilesh",
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

      <main className="relative z-10 pt-28 sm:pt-30 md:pt-32">
        <section className="container-shell">
          <RegistryHero
            eyebrow="Communication Channel"
            title="Let’s connect and build"
            highlight="intelligent systems that matter."
            description="Open to AI/ML engineering roles, intelligent product opportunities, applied technical discussions, and collaborations around retrieval, computer vision, IoT, embedded systems, and system design."
            chips={["Email", "LinkedIn", "Phone"]}
            sideTitle="Channel Feed"
            sideItems={[
              {
                code: "CN-01",
                text: "Open to AI/ML engineering and applied systems opportunities",
              },
              {
                code: "CN-02",
                text: "Best suited for technical discussions and architecture-led roles",
              },
              {
                code: "CN-03",
                text: "Fastest contact path is direct email or LinkedIn",
              },
            ]}
          />
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Contact Registry
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
                    className="block rounded-3xl border border-white/8 bg-white/4 px-4 py-4 transition duration-300 hover:border-cyan-300/18 hover:bg-white/6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                        {item.code}
                      </p>
                      <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-white">
                      {item.label}
                    </p>
                    <p className="mt-2 break-all text-sm leading-7 text-slate-300">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Inquiry Terminal
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Send a direct message.
              </h2>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/25 focus:bg-white/8"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/25 focus:bg-white/8"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/25 focus:bg-white/8"
                />

                <textarea
                  placeholder="Tell me about the opportunity or collaboration..."
                  rows={7}
                  className="resize-none rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/25 focus:bg-white/8"
                />

                <button
                  type="button"
                  className="shine-mask w-fit rounded-full border border-cyan-300/25 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
                >
                  Send Inquiry
                </button>
              </form>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                This is currently a visual inquiry terminal. Functional delivery
                can be connected later through Formspree, Resend, or a custom
                backend.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
