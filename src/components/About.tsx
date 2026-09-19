import { signatureItems } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand">
              About Us
            </p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
              Fried fresh.
              <br />
              Served <span className="text-brand">bold</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Fried Up is the new face of fried chicken in West Ruislip. We
              bread everything to order, fry it fresh, and pile it high — from
              buttermilk-style fried chicken and dripping-hot wings to
              double-stacked burgers, wraps and loaded sides.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Right at West Ruislip Station, we&apos;re the grab-and-go spot for
              commuters, local families and everyone who believes good chicken
              should never be boring. Order ahead on Just Eat or Uber Eats,
              or pop in for a fresh box.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "Fresh", label: "Cooked to order" },
                { value: "Crispy", label: "Breaded in house" },
                { value: "Fast", label: "Ready in minutes" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-line bg-ink p-4 text-center"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-3xl font-extrabold uppercase text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-neutral-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-500">
              Customer Favourites
            </h3>
            <ul className="mt-5 space-y-4">
              {signatureItems.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-ink p-5 transition-colors hover:border-brand/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/15 font-heading text-lg font-black text-brand">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}