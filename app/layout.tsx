import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://droptool-site.vercel.app"),
  title: {
    default: "DropTool Mace",
    template: "%s | DropTool Mace",
  },
  description: siteConfig.description,
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/premium", label: "Premium" },
  { href: "/downloads", label: "Downloads" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#040914]/78 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/5">
                <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.95)]" />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-[0.12em] text-white">
                  {siteConfig.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">
                  Mace
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/68 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/downloads"
              className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Start with Lite
            </Link>
          </div>
        </div>

        {children}

        <footer className="border-t border-white/10 bg-[#040914]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
            <div>
              <p className="text-lg font-semibold text-white">{siteConfig.publicOffer}</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                Premium mace fight review for players who want clearer sessions,
                fewer repeated mistakes, and a stronger improvement loop.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-cyan-300">
                {siteConfig.supportedVersions.primary} first
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Navigate</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Support</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
                <a href={siteConfig.discordUrl} className="transition hover:text-white">
                  Official Discord
                </a>
                <a href={`mailto:${siteConfig.supportEmail}`} className="transition hover:text-white">
                  {siteConfig.supportEmail}
                </a>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy
                </Link>
                <Link href="/tos" className="transition hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
