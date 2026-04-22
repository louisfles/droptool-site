import { faqs } from "@/lib/faqs";

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_26%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                FAQ
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Clear answers for players checking DropTool before they jump in.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                Keep this page simple, premium, and trustworthy. It should answer the
                obvious questions fast, reinforce the product ladder clearly, and make
                the site feel more complete.
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
                  Contact Support
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Why this page matters
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Reduce doubt. Keep momentum.
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Explain what DropTool is without sounding vague.",
                  "Make the Lite, Coach, and Full ladder easier to understand.",
                  "Keep support, versions, and rollout messaging consistent.",
                  "Push users toward downloads, premium, or Discord without friction.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Common questions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Straight answers, cleaner presentation.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              A premium FAQ should not look like a throwaway support dump. It should
              feel polished, structured, and fast to scan.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(34,211,238,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-xs font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Product ladder
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Lite, Coach, Full
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Coach Lite is the free entry point. Coach is the main paid tier. Full is
              the flagship premium layer.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Version focus
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              1.21.x first
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Public support messaging stays focused on 1.21.x first. Other versions
              can follow later, but should not be oversold early.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Trust
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Honest rollout messaging
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Be clear about what exists now, what premium includes, and what is still
              rolling out later.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Next step
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Still unsure? Start with the official download flow or compare premium.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            This page should close hesitation, not create more of it.
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
        </section>
      </div>
    </main>
  );
}
