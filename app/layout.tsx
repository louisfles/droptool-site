"use client";

import { useState } from "react";
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

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </div>
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[72px] rounded-2xl border border-white/10 bg-[#091423]/98 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/downloads"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Start with Lite
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040914]/78 backdrop-blur-2xl">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
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

            <div className="hidden md:block">
              <Link
                href="/downloads"
                className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
              >
                Start with Lite
              </Link>
            </div>

            <MobileNav />
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 bg-[#040914]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-10">
            <div>
              <p className="text-lg font-semibold text-white">{siteConfig.publicOffer}</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                Premium mace fight review for players who want clearer sessions,
                fewer repeated mistakes, and a stronger improvement loop.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                  {siteConfig.supportedVersions.primary} first
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Mace-first release
                </span>
              </div>
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
