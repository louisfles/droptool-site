import Link from "next/link";
import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

const improvementCards = [
  {
    title: "Review fights",
    text: "Turn recent mace sessions into something clearer than vague memory or slow replay digging.",
  },
  {
    title: "Spot repeated mistakes",
    text: "See the issues that keep costing you fights so your review changes what you do next.",
  },
  {
    title: "Know your next focus",
    text: "Leave a session with a clearer next step instead of guessing what to practice.",
  },
];

const whyCards = [
  {
    title: "Replay alone is too slow",
    text: "Watching footage helps, but it still leaves too much interpretation work on the player.",
  },
  {
    title: "Generic stats stay shallow",
    text: "Basic numbers rarely explain why the fight went wrong or what should change next.",
  },
  {
    title: "Focused beats broad",
    text: "A mace-first product feels stronger because it is disciplined, understandable, and built around a specific loop.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Play",
    text: "Use it around real mace sessions instead of fake demo flows or empty dashboards.",
  },
  {
    step: "02",
    title: "Review",
    text: "Look back at recent fights and understand where sessions start to break down.",
  },
  {
    step: "03",
    title: "Improve",
    text: "Turn review into a next focus so improvement becomes more structured over time.",
  },
];

const surfacePanels = [
  {
    label: "Recent session",
    value: "8 fights reviewed",
    sub: "Mace session flow",
  },
  {
    label: "Repeated issue",
    value: "Late punish timing",
    sub: "Worth revisiting",
  },
  {
    label: "Next focus",
    value: "Cleaner session review",
    sub: "Actionable direction",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_24%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_110px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-140px] left-[-100px] h-[280px] w-[280px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
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

            <div className="relative rounded-[30px] border border-cyan-400/20 bg-[#091423]/95 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    Product surface
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Built for review, not noise.
                  </h2>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                  Mace
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {surfacePanels.map((panel) => (
                  <div
                    key={panel.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                      {panel.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{panel.value}</p>
                    <p className="mt-1 text-sm text-white/60">{panel.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4 text-sm leading-6 text-white/75">
                Narrow scope is a strength here. The product feels more credible because the
                public release is focused on one clear improvement loop.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {improvementCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_0_40px_rgba(34,211,238,0.03)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                What it does
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Why it helps
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Most players know they lost. Fewer know exactly why.
            </h2>
            <div className="mt-8 grid gap-4">
              {whyCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0b1728] p-5"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Improvement loop
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Play, review, and leave with a clearer next focus.
            </h2>
            <div className="mt-8 space-y-4">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-[#0b1728] p-5"
                >
                  <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
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
              Lite proves value. Coach is the main offer for most serious mace players.
              Full is the deepest premium layer for stronger review depth and longer-term edge.
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
            Objections
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
                Replays help, but they still do not automatically create a cleaner review loop.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <h3 className="text-lg font-semibold">Does it support 1.21.x?</h3>
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
