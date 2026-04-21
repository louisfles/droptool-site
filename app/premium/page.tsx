import { pricingTiers } from "@/lib/pricing";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
          Premium
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Upgrade from Lite to a deeper coaching workflow
        </h1>
        <p className="mt-4 max-w-3xl text-white/70">
          DropTool Coach Lite is the free entry point. Coach is the main paid tier.
          Full is the flagship layer for the deepest analytics, strongest review tools,
          and the most premium long-term experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <h2 className="text-2xl font-semibold">{tier.name}</h2>
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

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p>
            Monthly pricing is the standard model. Founder lifetime pricing should be
            treated as an early-stage offer, not a forever-cheap assumption.
          </p>
          <p className="mt-3">
            Premium copy should stay honest about what is available now, what is
            included in premium, what is rolling out, and what is future direction.
          </p>
        </div>
      </div>
    </main>
  );
}
