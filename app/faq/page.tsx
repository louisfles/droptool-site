import { faqs } from "@/lib/faqs";

export default function FAQPage() {
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
                FAQ
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Common questions, answered clearly.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                The FAQ should feel premium, clean, and direct. It should help people
                understand what DropTool is, what each product tier means, what is live,
                and where they should go next.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Open Downloads
                </a>

                <a
                  href="/premium"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Compare Premium
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Quick understanding
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                What visitors should understand fast.
              </h2>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
                  DropTool is a premium PvP performance ecosystem, not just a random stat page.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
                  Coach Lite is the free entry point, Coach is the main paid tier, and Full is the flagship layer.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
                  Public support messaging should stay focused on 1.21.x first.
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm leading-6 text-white/75">
                A good FAQ reduces confusion, makes the site feel more credible, and helps premium conversion.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Questions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Straight answers for serious players.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Keep the language simple and premium. No bloated explanations, no fake promises,
              and no messy wall of text.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-[0_0_35px_rgba(34,211,238,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {item.question}
                    </h3>
                    <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Messaging rules
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Premium tone without fake claims.
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Be clear</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Explain the product ladder, core workflow, and version focus in plain language.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Be honest</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Separate what is available now from what is rolling out later.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Be premium</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Keep the presentation clean, dark, credible, and analytics-first.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-7 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
              Next step
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Still unsure? Move people forward.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
              Good FAQ pages should not be dead ends. They should push people toward
              downloads, premium comparison, or support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/downloads"
                className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Open Downloads
              </a>
              <a
                href="/premium"
                className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Compare Premium
              </a>
              <a
                href="/contact"
                className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
