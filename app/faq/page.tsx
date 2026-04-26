import Link from "next/link";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_26%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
            FAQ
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Clear answers for players deciding whether this is worth using.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            The site should reduce buying friction and explain the product without broadening it.
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
        </section>

        <section className="mt-16 grid gap-4">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(34,211,238,0.03)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{item.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
