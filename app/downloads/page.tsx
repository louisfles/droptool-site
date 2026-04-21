import { siteConfig } from "@/lib/site-config";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
          Downloads
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Official DropTool downloads
        </h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Use this page as the official source for DropTool downloads, approved links,
          and installation guidance.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a href={siteConfig.coachLiteDownloadUrl} className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Coach Lite</h2>
            <p className="mt-3 text-sm text-white/70">
              Free entry point with a lighter coaching-first experience.
            </p>
          </a>

          <a href={siteConfig.modDownloadUrl} className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Mod Download</h2>
            <p className="mt-3 text-sm text-white/70">
              Official mod route for supported public versions.
            </p>
          </a>

          <a href={siteConfig.appDownloadUrl} className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">App Download</h2>
            <p className="mt-3 text-sm text-white/70">
              Desktop app layer for the premium-backed experience.
            </p>
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href={siteConfig.modrinthUrl} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Modrinth</h3>
            <p className="mt-2 text-sm text-white/65">Approved public release route when live.</p>
          </a>

          <a href={siteConfig.curseforgeUrl} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">CurseForge</h3>
            <p className="mt-2 text-sm text-white/65">Approved public release route when live.</p>
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p>Launch messaging should stay focused on <span className="text-cyan-300">1.21.x first</span>.</p>
          <p className="mt-2">1.20.1 may follow later. Wider version support should not be overpromised early.</p>
        </div>
      </div>
    </main>
  );
}
