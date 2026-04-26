import Link from "next/link";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  {
    title: "Focused scope",
    text: "The product is intentionally mace-first. That makes the message cleaner and the value easier to understand.",
  },
  {
    title: "No fake claims",
    text: "The site should not rely on invented proof, inflated AI language, or broad unsupported promises.",
  },
  {
    title: "Built for real review",
    text: "The value is in helping players understand recent sessions and leave with a clearer next focus.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_26%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                FAQ
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Questions before you start?
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                Everything here is meant to answer the main buying questions quickly:
                what DropTool Mace does, who it is for, and whether it is worth trying.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Open Downloads
                </Link>
                <a
                  href={siteConfig.discordUrl}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Join Discord
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-cyan-400/20 bg-[#091423]/95 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Trust signals
              </p>

              <div className="mt-6 space-y-3">
                {trustPoints.map((item) => (
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

        <section className="mt-16 grid gap-4">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(34,211,238,0.03)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{item.question}</h2>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Still deciding
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Start with Lite and judge the value from real use.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            The cleanest path is still the same: install it, play a mace session,
            and see whether the review loop feels useful.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/downloads"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Start Free
            </Link>
            <Link
              href="/premium"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              See Plans
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
