type RegistryHeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  chips?: string[];
  sideTitle: string;
  sideItems: {
    code: string;
    text: string;
  }[];
};

export default function RegistryHero({
  eyebrow,
  title,
  highlight,
  description,
  chips = [],
  sideTitle,
  sideItems,
}: RegistryHeroProps) {
  return (
    <div className="panel-glow-edge relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(5,9,18,0.95),rgba(3,7,14,0.92))] shadow-[0_24px_90px_rgba(0,0,0,0.5)]">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_40%_84%,rgba(52,211,153,0.06),transparent_16%)]" />
      <div className="pointer-events-none absolute inset-0 hero-scanlines opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/35 to-transparent" />

      <div className="pointer-events-none absolute left-5 top-5 z-10 hidden h-10 w-10 rounded-tl-2xl border-l border-t border-cyan-300/25 lg:block" />
      <div className="pointer-events-none absolute bottom-5 right-5 z-10 hidden h-10 w-10 rounded-br-2xl border-b border-r border-cyan-300/20 lg:block" />

      <div className="relative grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-8">
        <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
            {title}
            <span className="mt-2 block text-cyan-300">{highlight}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
            {description}
          </p>

          {chips.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300"
                >
                  {chip}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="rounded-4xl border border-white/8 bg-white/4 px-5 py-5 lg:px-6 lg:py-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/65">
            {sideTitle}
          </p>

          <div className="mt-5 space-y-4">
            {sideItems.map((item) => (
              <div
                key={item.code}
                className="rounded-3xl border border-white/8 bg-white/4 px-4 py-4 transition duration-300 hover:border-cyan-300/18 hover:bg-white/6"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">
                    {item.code}
                  </p>
                  <span className="signal-flicker h-2 w-2 rounded-full bg-cyan-400" />
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
            <span className="text-cyan-200/75">System Header Online</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <span>Resume Synced</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <span>Registry Active</span>
          </div>

          <div className="glow-line w-full lg:max-w-sm" />
        </div>
      </div>
    </div>
  );
}
