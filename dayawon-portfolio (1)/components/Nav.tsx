"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-ink/15 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide">J. Dayawon, CE</Link>
        <button className="rounded-sm border border-ink/30 px-3 py-1 text-sm md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-ink/15 bg-paper px-5 py-3 md:static md:flex md:flex-row md:gap-6 md:border-0 md:p-0`}>
          {links.map((l) => {
            const active = path === l.href;
            return (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}
                  className={`block py-1 text-[15px] ${active ? "border-b-2 border-mark font-semibold" : "text-ink/75 hover:text-ink"}`}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
