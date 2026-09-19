import { menuData } from "@/lib/site";

export default function Menu() {
  return (
    <section id="menu" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand">
            The Menu
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
            Picked fresh, <span className="text-brand">fried quick</span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Full menu available on Just Eat &amp; Uber Eats. Wraps come with a
            meal upgrade option for the full experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {menuData.map((category) => (
            <div
              key={category.title}
              className="flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7"
            >
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white">
                  {category.title}
                </h3>
                {category.note && (
                  <span className="text-xs font-semibold text-neutral-500">
                    {category.note}
                  </span>
                )}
              </div>
              <ul className="divide-y divide-line/70">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 py-3.5">
                    <span className="flex-1 text-sm font-medium text-neutral-200 sm:text-base">
                      {item.name}
                    </span>
                    {item.priceLarge && (
                      <span className="text-right text-xs text-neutral-500">
                        {item.price}
                        <span className="mx-1 text-line">|</span>
                        <span className="text-neutral-400">{item.priceLarge}</span>
                      </span>
                    )}
                    {!item.priceLarge && (
                      <span className="font-heading text-xl font-bold text-brand">
                        {item.price}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          Allergen and price details available in store and on our delivery
          partners. Prices may vary on delivery apps.
        </p>
      </div>
    </section>
  );
}