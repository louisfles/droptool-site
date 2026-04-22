import { siteConfig } from "@/lib/site-config";

const contactCards = [
  {
    label: "Primary support",
    title: "Discord",
    text: "Fastest route for community support, updates, and official DropTool activity.",
    value: siteConfig.discordUrl,
    href: siteConfig.discordUrl,
    cta: "Join Discord",
  },
  {
    label: "Direct contact",
    title: "Support email",
    text: "Use email for direct support, account issues, or anything that should not sit in Discord.",
    value: siteConfig.supportEmail,
    href: `mailto:${siteConfig.supportEmail}`,
    cta: "Email support",
  },
];

const supportTopics = [
  "Downloads and install help",
  "Premium questions and access",
  "Bug reports and product issues",
  "General support and account help",
];

export default function ContactPage() {
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
                Contact
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Reach the DropTool team without friction.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                This page should feel direct, premium, and trustworthy. Give users a
                clear place to go for support, premium questions, account issues, and
                general product help.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.discordUrl}
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Join Discord
                </a>

                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Email Support
                </a>

                <a
                  href="/faq"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  View FAQ
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Support focus
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Clear routes. Fast decisions.
              </h2>

              <div className="mt-6 space-y-3">
                {supportTopics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_0_40px_rgba(34,211,238,0.04)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                {card.label}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                {card.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/70">
                {card.text}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <p className="break-all text-sm text-white/85">{card.value}</p>
              </div>

              <a
                href={card.href}
                className="mt-6 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Best for
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Discord
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Fast questions, community interaction, announcements, and direct product
              visibility.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Best for
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Email
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              More formal support, account problems, premium issues, or anything that
              needs a cleaner one-to-one thread.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Trust
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Official routes only
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Keep users on official support paths so the brand feels real, safe, and
              properly maintained.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Need help now
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Join Discord first, then use email when you need a direct support trail.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            This page should make support feel active and easy to reach.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.discordUrl}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Join Discord
            </a>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Email Support
            </a>
            <a
              href="/faq"
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              View FAQ
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
