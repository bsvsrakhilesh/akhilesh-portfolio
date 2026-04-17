import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const contactCards = [
  {
    label: "Email",
    value: "bsvsrakhilesh01@gmail.com",
    href: "mailto:bsvsrakhilesh01@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bsvsr-akhilesh",
    href: "https://www.linkedin.com/in/bsvsr-akhilesh",
  },
  {
    label: "Phone",
    value: "+91 8587881462",
    href: "tel:+918587881462",
  },
];

export default function ContactPage() {
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
                Communication Channel
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                Let’s connect and build
                <span className="mt-2 block text-cyan-300">
                  intelligent systems that matter.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                Open to AI/ML engineering roles, intelligent product
                opportunities, applied research collaborations, and technical
                conversations around retrieval, computer vision, IoT, embedded
                systems, and real-world AI workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="container-shell pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Contact Points
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Reach out through the channels below
              </h2>

              <div className="mt-6 space-y-4">
                {contactCards.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("https") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https") ? "noreferrer" : undefined
                    }
                    className="glass-panel block rounded-3xl px-5 py-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 break-all text-sm font-medium text-white md:text-base">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">
                  Availability
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Open to roles and discussions in AI/ML engineering,
                  intelligent systems, backend-integrated AI products, computer
                  vision, and applied technical problem solving.
                </p>
              </div>
            </div>

            <div className="glass-panel-strong panel-outline rounded-4xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
                Quick Message
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                A simple outreach form
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
                  className="w-fit rounded-full border border-cyan-300/25 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15"
                >
                  Send Inquiry
                </button>
              </form>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                This is currently a visual contact form for the portfolio
                interface. Functional email delivery can be added later with
                Formspree, Resend, or a custom backend.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
