"use client";

import { useEffect, useState } from "react";
import { CONTACT, navItems } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand bg-surface font-heading text-lg font-black uppercase leading-none text-brand">
            F
          </span>
          <span className="font-heading text-2xl font-extrabold uppercase tracking-widest text-white">
            Fried<span className="text-brand">Up</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-neutral-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className="hidden text-sm font-semibold text-neutral-300 transition-colors hover:text-white lg:block"
          >
            {CONTACT.phone}
          </a>
          <a
            href="mailto:hello@friedup.co.uk"
            className="hidden h-10 items-center rounded-full bg-brand px-5 font-heading text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark sm:flex"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="block border-b border-line/60 py-3 text-base font-semibold uppercase tracking-wide text-neutral-200 hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:hello@friedup.co.uk"
            onClick={close}
            className="mt-4 flex h-11 w-full items-center justify-center rounded-full bg-brand font-heading text-lg font-bold uppercase tracking-widest text-white"
          >
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}