import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

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
          <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(7,11,22,0.94),rgba(4,8,18,0.90))] shadow-[0_20px_80px_rgba(0,0,0,0.42)]">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_40%_84%,rgba(52,211,153,0.06),transparent_16%)]" />
            <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-30" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/65 to-transparent" />

            <div className="relative grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-8">
              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Communication Channel
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                  Let’s connect and build
                  <span className="mt-2 block text-cyan-300">
                    intelligent systems that matter.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                  Open to AI/ML engineering roles, intelligent product
                  opportunities, applied technical discussions, and
                  collaborations around retrieval, computer vision, IoT,
                  embedded systems, and system design.
                </p>

                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-emerald-300">
                  <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
                  Communication Active
                </div>
              </div>

              <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                  Contact Channels
                </p>

                <div className="mt-5 space-y-4">
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
            </div>

            <div className="relative z-10 border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  <span className="text-cyan-200/75">Contact Ready</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Email</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>LinkedIn</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Phone</span>
                </div>

                <div className="glow-line w-full lg:max-w-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.78),rgba(5,9,19,0.72))] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Availability
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Open To
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    AI/ML engineering roles, intelligent product systems,
                    applied RAG, computer vision, IoT-driven workflows, and
                    architecture-heavy technical work.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/4 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Conversation Style
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Best suited for technical discussions that value engineering
                    depth, problem framing, workflow clarity, and practical
                    system thinking.
                  </p>
                </div>
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
