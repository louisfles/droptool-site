import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

const statCards = [
  {
    label: "Identity",
    value: "PvP Performance Intelligence",
  },
  {
    label: "Launch focus",
    value: `${siteConfig.supportedVersions.primary} first`,
  },
  {
    label: "Model",
    value: "Lite, Coach, Full",
  },
];

const featureBlocks = [
  {
    title: "Evaluate performance",
    text: "Turn sessions into something readable, structured, and useful instead of relying on surface-level stats alone.",
  },
  {
    title: "Improve with intent",
    text: "Build around coaching-first review, stronger insight layers, and a cleaner workflow for real progression.",
  },
  {
    title: "Scale into premium depth",
    text: "Move from free entry into deeper review and analytics without fragmenting the product into disconnected tools.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Play",
    text: "DropTool starts with actual play instead of noisy dashboards and empty marketing claims.",
  },
  {
    step: "02",
    title: "Review",
    text: "Use the mod plus app workflow to turn fights, sessions, and performance into clearer feedback.",
  },
  {
    step: "03",
    title: "Progress",
    text: "Track improvement over time with a more premium review layer and stronger long-term structure.",
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

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                {siteConfig.tagline}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Evaluate better. Improve faster. Build real PvP progress.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                DropTool is a premium Minecraft PvP performance ecosystem built
                for players who want serious improvement software, not a cluttered
                mod page. Clean review flow, stronger analytics, coaching-first
                structure, and a premium path from Lite to Full.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/downloads"
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Download DropTool
                </a>

                <a
                  href="/premium"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Compare Premium
                </a>

                <a
                  href={siteConfig.discordUrl}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Join Discord
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Core philosophy
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Evaluate - Improve - Then Rank
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/70">
                The brand should feel like serious performance software for PvP
                players who care about progression, credibility, and clean review
                tooling.
              </p>

              <div className="mt-6 space-y-3">
                {featureBlocks.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Product ladder
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              One ecosystem. Three levels of depth.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              DropTool Coach Lite is the free entry point. DropTool Coach is the
              main paid tier. DropTool Full is the flagship layer for the deepest
              analytics and strongest long-term review experience.
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
                  <p className="mt-1 text-sm text-white/45">
                    {tier.lifetimePrice}
                  </p>
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

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Built around play, review, and progress.
            </h2>

            <div className="mt-8 space-y-4">
              {workflowSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-[#0b1728] p-5"
                >
                  <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Launch clarity
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Premium presentation without fake claims.
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Available now</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Official site, product ladder, trusted downloads flow,
                  premium structure, Discord funnel, and clean brand direction.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Included in premium</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Stronger review depth, app-backed workflow, longer history,
                  progress tracking, and clearer premium positioning.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Rolling out later</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Final checkout wiring, real download links, screenshots,
                  stronger polish, and deeper long-term premium systems.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm text-white/75">
              Public support messaging stays focused on{" "}
              <span className="font-medium text-cyan-200">
                {siteConfig.supportedVersions.primary}
              </span>
              . {siteConfig.supportedVersions.secondaryPlanned} may follow later.
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Official next step
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Join the community, download safely, and upgrade when you want more
            depth.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            Keep the public message simple: official downloads, premium upgrade
            path, trustworthy positioning, and a product built to help players
            improve.
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
              href={siteConfig.discordUrl}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Join Discord
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
