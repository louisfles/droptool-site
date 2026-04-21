import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Support and contact
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Discord is the primary support route. Email can be used as a fallback once the final support address is live.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href={siteConfig.discordUrl} className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Join the Discord</h2>
            <p className="mt-3 text-sm text-white/70">{siteConfig.discordUrl}</p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Support email</h2>
            <p className="mt-3 text-sm text-white/70">{siteConfig.supportEmail}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
