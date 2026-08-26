"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/biography", label: "Biography" },
  { href: "/theatre", label: "Stage" },
  { href: "/filmography", label: "Film & TV" },
  { href: "/music", label: "Music" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg uppercase tracking-[0.3em] text-gold-soft"
        >
          Tim Curry
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-xs uppercase tracking-[0.15em] sm:text-sm sm:tracking-widest">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-gold-soft ${
                  active ? "text-gold-soft" : "text-paper/65"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
