import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const setupSteps = [
  {
    step: "01",
    title: "Install DropTool",
    text: "Start from the official route so the product feels trustworthy from the first click.",
  },
  {
    step: "02",
    title: "Play a mace session",
    text: "Use it around real play so the review loop reflects actual fights instead of empty setup screens.",
  },
  {
    step: "03",
    title: "Review what happened",
    text: "Look back at recent play and find the patterns that keep costing you fights.",
  },
  {
    step: "04",
    title: "Know what to fix next",
    text: "Leave the session with a clearer next focus instead of vague ideas.",
  },
];

const requirementCards = [
  {
    title: "Version focus",
    text: "Public messaging is focused on 1.21.x first.",
  },
  {
    title: "Product direction",
    text: "This release is mace-first, not a broad all-modes platform.",
  },
  {
    title: "Support route",
    text: "Discord is the primary route for current install help and release guidance.",
  },
];

export default function DownloadsPage() {
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
                Downloads
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Start cleanly and get to your first useful review fast.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                Install DropTool, play a mace session, return to review, and leave with a clearer
                idea of what to improve next.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.discordUrl}
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Open Official Discord
                </a>

                <Link
                  href="/faq"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Read FAQ First
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-cyan-400/20 bg-[#091423]/95 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Requirements
              </p>

              <div className="mt-6 space-y-3">
                {requirementCards.map((item) => (
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

        <section className="mt-16 rounded-[30px] border border-white/10 bg-white/5 p-8 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            Get started flow
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {setupSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-[#0b1728] p-5"
              >
                <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  {item.step}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Current access
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Keep the route trustworthy.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              If public release links are still being finalized, do not fake a polished install route.
              Use the official Discord and support channels until the final download flow is fully ready.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              First-use promise
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              The first review should already feel useful.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              The product promise is not “look at a dashboard”. It is “play, review,
              understand what happened, and leave with a clearer next focus”.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Next step
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Install, play, review, and find what to work on next.
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.discordUrl}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Go to Official Discord
            </a>
            <Link
              href="/premium"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Compare Premium
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
