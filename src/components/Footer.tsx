import OrderButtons from "@/components/OrderButtons";
import { CONTACT, navItems } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm text-center md:text-left">
            <span className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand bg-surface font-heading text-lg font-black uppercase text-brand">
                F
              </span>
              <span className="font-heading text-2xl font-extrabold uppercase tracking-widest text-white">
                Fried<span className="text-brand">Up</span>
              </span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              {CONTACT.tagline}. Fresh fried chicken, wings, burgers, wraps and
              sides in West Ruislip.
            </p>
          </div>

          <nav className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-neutral-300 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
              Get In Touch
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="font-semibold text-neutral-300 transition-colors hover:text-brand"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-neutral-400">
                {CONTACT.address.line1}, {CONTACT.address.line2}
              </li>
            </ul>
            <div className="mt-5 flex justify-center gap-3 md:justify-end">
              <OrderButtons />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-neutral-600 sm:flex-row">
          <p>
            © {year} {CONTACT.name}. All rights reserved.
          </p>
          <p>
            Just Eat and Uber Eats are trademarks of their respective owners.
            Ordering via third-party apps may include delivery fees.
          </p>
        </div>
      </div>
    </footer>
  );
}