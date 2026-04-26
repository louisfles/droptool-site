import Link from "next/link";
import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

const comparisonPoints = [
  {
    title: "Coach Lite",
    text: "Free entry point for players who want to prove the value before paying.",
  },
  {
    title: "Coach",
    text: "The main paid offer and the strongest value point for most serious mace players.",
  },
  {
    title: "Full",
    text: "The deepest premium layer for richer review depth and stronger long-term edge.",
  },
];

const comparisonRows = [
  {
    label: "Entry point",
    values: ["Free", "Paid core plan", "Highest-depth premium"],
  },
  {
    label: "Session review depth",
    values: ["Starter", "Deeper", "Deepest"],
  },
  {
    label: "Fight breakdown clarity",
    values: ["Basic", "Stronger", "Strongest"],
  },
  {
    label: "Progress context",
    values: ["Light", "Expanded", "Richest"],
  },
  {
    label: "Best fit",
    values: ["First-time users", "Most serious players", "Hardcore grinders"],
  },
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_24%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                Premium
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Clear pricing for a focused mace-first product.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                Lite gets players in. Coach should feel like the obvious main offer.
                Full is the deepest premium layer for players who want the strongest review depth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Start Free
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Contact for Premium
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-cyan-400/20 bg-[#091423]/95 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Plan logic
              </p>

              <div className="mt-6 space-y-3">
                {comparisonPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[30px] border p-6 shadow-[0_0_40px_rgba(34,211,238,0.05)] ${
                  tier.highlight
                    ? "border-cyan-300/35 bg-cyan-400/10"
                    : "border-cyan-400/20 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight">{tier.name}</h2>
                  {tier.badge ? (
                    <span className="rounded-full border border-cyan-300/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-cyan-300">{tier.price}</p>
                {tier.lifetimePrice ? (
                  <p className="mt-1 text-sm text-white/45">{tier.lifetimePrice}</p>
                ) : null}

                <p className="mt-4 text-sm font-medium text-white">{tier.summary}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{tier.description}</p>

                <ul className="mt-6 space-y-2 text-sm text-white/75">
                  {tier.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  className="mt-8 inline-flex rounded-xl border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {tier.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-white/10 bg-white/5 p-8 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            Comparison
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Pick based on depth, not marketing noise.
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-4 border-b border-white/10 bg-[#0b1728] text-sm">
              <div className="p-4 text-white/55">Category</div>
              <div className="p-4 font-medium text-white">Coach Lite</div>
              <div className="p-4 font-medium text-cyan-200">Coach</div>
              <div className="p-4 font-medium text-white">Full</div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 text-sm ${
                  index !== comparisonRows.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="bg-white/[0.03] p-4 text-white/60">{row.label}</div>
                <div className="p-4 text-white/80">{row.values[0]}</div>
                <div className="bg-cyan-400/[0.04] p-4 text-cyan-100">{row.values[1]}</div>
                <div className="p-4 text-white/80">{row.values[2]}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-white/10 bg-white/5 p-8 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            Pricing discipline
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Lite proves value</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Free should feel useful enough to try, not fake enough to frustrate instantly.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Coach is the main offer</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Most serious players should land here. That needs to be visually and commercially obvious.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Full is the premium ceiling</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                It should feel deeper, not inflated with fake claims or broad unsupported promises.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Next step
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Start free, then upgrade when you want deeper review.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            Keep the value obvious, the scope honest, and the upgrade path clean.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/downloads"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Start Free
            </Link>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Ask about Premium
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
