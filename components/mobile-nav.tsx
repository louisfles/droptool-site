"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/premium", label: "Premium" },
  { href: "/downloads", label: "Downloads" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
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
