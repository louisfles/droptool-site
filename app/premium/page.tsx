import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

const comparisonPoints = [
  {
    label: "Best for",
    lite: "Trying DropTool",
    coach: "Serious improvement",
    full: "Deepest premium workflow",
  },
  {
    label: "Review depth",
    lite: "Light",
    coach: "Stronger",
    full: "Deepest",
  },
  {
    label: "History",
    lite: "Limited",
    coach: "Extended",
    full: "Longest-term",
  },
  {
    label: "Positioning",
    lite: "Free entry point",
    coach: "Core premium tier",
    full: "Flagship tier",
  },
];

const premiumNotes = [
  "Coach Lite is the free funnel into the ecosystem.",
  "Coach is the main paid tier for players who want stronger review and progression tools.",
  "Full is the flagship premium layer for the deepest analytics and strongest long-term experience.",
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_26%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                Premium
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Premium depth for players who actually want to improve.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                DropTool is built as a coaching-first PvP performance ecosystem.
                Lite gets players in. Coach becomes the main serious upgrade.
                Full is the flagship layer for the deepest analytics, strongest
                review tools, and best long-term premium experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Start with Lite
                </a>

                <a
                  href={siteConfig.discordUrl}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Join Discord
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Entry
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    Coach Lite
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Core paid tier
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    DropTool Coach
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Flagship
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    DropTool Full
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Premium structure
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Built to scale with the player.
              </h2>

              <div className="mt-6 space-y-3">
                {premiumNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70"
                  >
                    {note}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm leading-6 text-white/75">
                Keep premium messaging honest: show what is available now, what is
                included in premium, what is still rolling out, and what remains
                future direction.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Plans
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Three levels. One premium ecosystem.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              The product ladder should feel clean and deliberate rather than messy
              or fragmented. Each level increases depth without confusing the brand.
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
                  <p className="mt-1 text-sm text-white/45">{tier.lifetimePrice}</p>
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

        <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Comparison
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              What changes as you move up.
            </h2>

            <div className="mt-8 space-y-4">
              {comparisonPoints.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-white/10 bg-[#0b1728] p-5"
                >
                  <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                    {row.label}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Lite
                      </p>
                      <p className="mt-2 text-sm text-white/80">{row.lite}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Coach
                      </p>
                      <p className="mt-2 text-sm text-white/80">{row.coach}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Full
                      </p>
                      <p className="mt-2 text-sm text-white/80">{row.full}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Trust
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Premium presentation without overclaiming.
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Available now</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Official site, plan structure, Discord funnel, version-first public
                  messaging, and a cleaner premium-facing brand.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Included in premium direction</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Stronger review depth, app-backed workflow, longer history,
                  progress tracking, and a more serious long-term player experience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Still to wire properly</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Real checkout links, real download destinations, screenshots,
                  richer media, and deeper flagship systems over time.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm text-white/75">
              Public launch support messaging should stay focused on{" "}
              <span className="font-medium text-cyan-200">
                {siteConfig.supportedVersions.primary}
              </span>
              . Wider support can come later without overpromising.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
