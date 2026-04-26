import { siteConfig } from "@/lib/site-config";

const contactCards = [
  {
    label: "Primary support",
    title: "Discord",
    text: "Best for install help, release updates, questions, and the official community route.",
    value: siteConfig.discordUrl,
    href: siteConfig.discordUrl,
    cta: "Join Discord",
  },
  {
    label: "Direct support",
    title: "Email",
    text: "Best for account questions, premium interest, support issues, or anything better handled privately.",
    value: siteConfig.supportEmail,
    href: `mailto:${siteConfig.supportEmail}`,
    cta: "Email support",
  },
];

const supportTopics = [
  "Install help",
  "Premium questions",
  "Account issues",
  "Bug reports",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_26%),linear-gradient(to_bottom,#06101c,#040914)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-white/5 px-6 py-10 shadow-[0_0_100px_rgba(34,211,238,0.07)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                Contact
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Get support without friction.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                Keep support direct, trustworthy, and premium. Users should know exactly
                where to go for installs, premium questions, bugs, and account help.
              </p>
            </div>

            <div className="rounded-[30px] border border-cyan-400/20 bg-[#091423]/95 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Support topics
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(34,211,238,0.04)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                {card.label}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                {card.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/70">{card.text}</p>

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

        <section className="mt-16 rounded-[30px] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            Need help fast
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Use Discord first. Use email when it should stay private.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
            That keeps the support route simple and avoids fake complexity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.discordUrl}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Open Discord
            </a>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex rounded-xl border border-cyan-200/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Email Support
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
