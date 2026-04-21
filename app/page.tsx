import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            {siteConfig.tagline}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Evaluate performance. Improve faster. Build real PvP progress.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            DropTool is a premium Minecraft PvP performance ecosystem designed for
            players who want more than a generic stats mod. It is built around
            analytics, coaching-first improvement, clean UX, and long-term progress.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/downloads"
              className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Download DropTool
            </a>

            <a
              href={siteConfig.discordUrl}
              className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
            >
              Join the Discord
            </a>

            <a
              href="/premium"
              className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
            >
              View Premium
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <p className="text-sm text-white/50">Positioning</p>
              <p className="mt-2 font-medium">PvP Performance Intelligence</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <p className="text-sm text-white/50">Launch support</p>
              <p className="mt-2 font-medium">{siteConfig.supportedVersions.primary} first</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
              <p className="text-sm text-white/50">Community</p>
              <p className="mt-2 font-medium">{siteConfig.discordUrl}</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Product ladder
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              One ecosystem. Different depth levels.
            </h2>
            <p className="mt-4 text-white/70">
              DropTool Coach Lite is the free funnel. DropTool Coach is the main
              serious paid tier. DropTool Full is the flagship premium layer for the
              deepest analytics and strongest long-term review experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-3 text-cyan-300">{tier.price}</p>
                {"lifetimePrice" in tier && tier.lifetimePrice ? (
                  <p className="mt-1 text-sm text-white/50">{tier.lifetimePrice}</p>
                ) : null}
                <p className="mt-4 text-sm text-white/70">{tier.description}</p>

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

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Mod plus app workflow
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Built for improvement, not empty surface-level stats
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              DropTool is meant to feel like serious software for players who want to
              evaluate sessions, review progress, compare performance, and improve
              with more confidence over time.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Honest rollout messaging
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Clear about what is live, what is premium, and what is still rolling out
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              The site should present the full polished direction confidently, while
              still separating what is available now, what is included in premium,
              what is rolling out, and what remains future direction.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Version focus
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Public support messaging stays focused
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Launch messaging should stay focused on {siteConfig.supportedVersions.primary}.
            {` `}{siteConfig.supportedVersions.secondaryPlanned} can follow later if it
            makes sense. Wider version support should not be overpromised too early.
          </p>
        </section>

        <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
            Official next steps
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Join the community, download safely, and upgrade when you want more depth
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.discordUrl}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Join Discord
            </a>
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
          </div>
        </section>
      </div>
    </main>
  );
}
