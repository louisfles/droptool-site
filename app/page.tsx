import Link from "next/link";
import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

const coreCards = [
  {
    title: "Review fights",
    text: "Turn recent mace sessions into something clearer than vague memory or slow replay digging.",
  },
  {
    title: "Spot repeated mistakes",
    text: "See the problems that keep costing you fights so your review actually changes what you do next.",
  },
  {
    title: "Know your next focus",
    text: "Use a more structured improvement loop instead of guessing what to practice after each session.",
  },
];

const valueCards = [
  {
    title: "Generic stats stay shallow",
    text: "Numbers alone rarely tell you what actually cost you the fight.",
  },
  {
    title: "Replay review is slow",
    text: "Watching footage helps, but it is still easy to miss patterns or waste time without a cleaner review structure.",
  },
  {
    title: "Focused beats broad",
    text: "A mace-first product feels stronger because it is narrow, honest, and built around a specific improvement loop.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_24%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                {siteConfig.publicOffer}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Improve faster at Mace PvP.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                Review fights, spot repeated mistakes, and know what to work on next
                with a premium mace-first improvement system built for 1.21.x players.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Start with Coach Lite
                </Link>

                <Link
                  href="/premium"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Compare Plans
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Focus</p>
                  <p className="mt-2 text-sm font-medium text-white/90">Mace-first release</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Support</p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    {siteConfig.supportedVersions.primary} first
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Model</p>
                  <p className="mt-2 text-sm font-medium text-white/90">Lite, Coach, Full</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                What it is
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                A focused mace improvement system.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/70">
                DropTool Mace is not trying to look like a broad unfinished PvP platform.
                The public offer is narrow on purpose: help mace players review recent play,
                understand what went wrong, and improve with more structure.
              </p>

              <div className="mt-6 space-y-3">
                {coreCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {valueCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Why it helps
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Product ladder
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Start free. Upgrade when you want more depth.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Lite proves the value. Coach is the main offer for most serious players.
              Full is the deepest premium layer for stronger review depth and long-term edge.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[28px] border p-6 shadow-[0_0_40px_rgba(34,211,238,0.05)] ${
                  tier.highlight
                    ? "border-cyan-300/35 bg-cyan-400/10"
                    : "border-cyan-400/20 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>
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
            Common objections
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Is this for all PvP modes?</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                No. The public release is intentionally mace-first.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Why not just watch replays?</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Replays help, but they do not automatically give you a cleaner review loop.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Does it work for 1.21.x?</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Yes. Public support messaging is focused on 1.21.x first.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Final CTA
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Stop guessing what went wrong in your fights.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            Start with Lite, play a mace session, and review what to improve next.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/downloads"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Start with Coach Lite
            </Link>
            <Link
              href="/premium"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Compare Plans
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
