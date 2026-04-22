import { pricingTiers } from "@/lib/pricing";

const highlights = [
  {
    label: "Free entry",
    value: "Coach Lite",
  },
  {
    label: "Main paid tier",
    value: "DropTool Coach",
  },
  {
    label: "Flagship layer",
    value: "DropTool Full",
  },
];

const premiumNotes = [
  {
    title: "Coach Lite",
    text: "Free starting point for players who want a cleaner improvement path without jumping straight into the deepest premium layer.",
  },
  {
    title: "DropTool Coach",
    text: "The main paid tier for serious players who want stronger review depth, better workflow, and a more complete app-backed experience.",
  },
  {
    title: "DropTool Full",
    text: "The flagship premium direction with the deepest analytics, strongest review layer, and highest long-term ceiling.",
  },
];

const trustPoints = [
  "Premium positioning should feel credible, not exaggerated.",
  "Coach is the main paid recommendation for most serious users.",
  "Full should feel like the flagship layer, not just a slightly bigger plan.",
  "Copy should stay clear about what exists now versus what is still rolling out.",
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_26%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                Premium
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Premium depth for players who actually want to improve.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                DropTool Coach Lite is the free entry point. DropTool Coach is the
                main paid tier. DropTool Full is the flagship premium layer for the
                deepest analytics, strongest review systems, and most complete
                long-term progression experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Start with Lite
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Contact Support
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Premium philosophy
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                More depth. Better structure. Cleaner progression.
              </h2>

              <div className="mt-6 space-y-3">
                {premiumNotes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Compare tiers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              One ecosystem. Three levels of access.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              The page should make the ladder feel obvious: free entry, serious paid
              tier, and flagship premium destination.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-[26px] border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(34,211,238,0.05)]"
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {tier.name}
                </h3>

                <p className="mt-3 text-cyan-300">{tier.price}</p>

                {"lifetimePrice" in tier && tier.lifetimePrice ? (
                  <p className="mt-1 text-sm text-white/45">
                    {tier.lifetimePrice}
                  </p>
                ) : null}

                <p className="mt-4 text-sm leading-6 text-white/70">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-white/75">
                  {tier.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  className="mt-8 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  {tier.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Why upgrade
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Premium should feel useful, not forced.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Better review depth</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Upgrade from surface-level visibility into a more structured
                  performance workflow.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Longer-term progression</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Build around history, comparisons, and improvement over time
                  instead of one-off sessions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Premium workflow</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Make the product feel like serious software with better structure,
                  clearer signals, and stronger identity.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Positioning
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Premium presentation should stay honest.
            </h2>

            <div className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-[#0b1728] p-4 text-sm leading-6 text-white/70"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm leading-6 text-white/75">
              Founder lifetime pricing should feel like an early-stage offer, not
              cheap throwaway pricing. Keep the tone premium.
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Next step
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Start free, compare the ladder, then move up when you want more depth.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            The premium page should feel premium enough to convert, while still
            being clear about what the user is actually getting.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/downloads"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Open Downloads
            </a>
            <a
              href="/contact"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
