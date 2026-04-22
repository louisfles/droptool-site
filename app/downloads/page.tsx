import { siteConfig } from "@/lib/site-config";

const downloadCards = [
  {
    title: "Coach Lite",
    text: "Free entry point for players who want to start with the DropTool ecosystem and a lighter coaching-first experience.",
    href: siteConfig.coachLiteDownloadUrl,
    tag: "Free",
  },
  {
    title: "Mod Download",
    text: "Official mod route for supported public versions and the core in-game side of the workflow.",
    href: siteConfig.modDownloadUrl,
    tag: "Core",
  },
  {
    title: "Desktop App",
    text: "Premium-backed app layer for stronger review depth, cleaner progression, and a more serious workflow.",
    href: siteConfig.appDownloadUrl,
    tag: "Premium",
  },
];

const platformCards = [
  {
    title: "Modrinth",
    text: "Approved public release route when the official listing is live.",
    href: siteConfig.modrinthUrl,
  },
  {
    title: "CurseForge",
    text: "Approved public release route when the official listing is live.",
    href: siteConfig.curseforgeUrl,
  },
];

export default function DownloadsPage() {
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
                Downloads
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Official DropTool downloads and trusted install routes.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                This page should be the clean public source for official downloads,
                trusted distribution routes, and version guidance. Keep it simple,
                premium, and clear.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.discordUrl}
                  className="inline-flex items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Join Discord
                </a>

                <a
                  href="/premium"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  View Premium
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Primary support
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    {siteConfig.supportedVersions.primary}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Planned follow-up
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    {siteConfig.supportedVersions.secondaryPlanned}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1728]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Trusted route
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    Official site first
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1627]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Install clarity
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Keep downloads safe and obvious.
              </h2>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
                  Use the official Downloads page first rather than random reposts or third-party mirrors.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
                  Keep public launch messaging focused on 1.21.x first.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
                  Wider version support and final distribution links can expand later without overpromising.
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm leading-6 text-white/75">
                When real links are ready, replace placeholders in site-config so this page becomes the one trusted public source.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Official downloads
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Start in the right place.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Keep the page structured so users instantly understand the difference
              between free entry, core mod access, and the premium-backed app layer.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {downloadCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[26px] border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(34,211,238,0.05)] transition hover:bg-white/[0.07]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                  {card.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  {card.text}
                </p>
                <span className="mt-8 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                  Open
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Approved platforms
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Public distribution routes.
            </h2>

            <div className="mt-8 space-y-4">
              {platformCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="block rounded-2xl border border-white/10 bg-[#0b1728] p-5 transition hover:bg-[#0e1c31]"
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {card.text}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Rollout rules
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Clean messaging beats messy promises.
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Say clearly what is live</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Official site, branded pages, premium ladder, and download structure are live.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Do not overclaim</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Keep future distribution, screenshots, final checkout wiring, and deeper systems separate from what is already available.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <h3 className="text-lg font-semibold">Keep version focus tight</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Public support stays focused on {siteConfig.supportedVersions.primary} first, with {siteConfig.supportedVersions.secondaryPlanned} as a later follow-up.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5 text-sm text-white/75">
              Once your real download URLs are ready, this page becomes much stronger immediately.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
