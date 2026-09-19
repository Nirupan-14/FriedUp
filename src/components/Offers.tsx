import { offers } from "@/lib/site";

export default function Offers() {
  return (
    <section id="offers" className="scroll-mt-16 border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand">
            Current Offers
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
            Big value, <span className="text-brand">big flavour</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-brand/30 bg-ink p-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 blur-2xl"
              />
              <span className="inline-flex w-fit rounded-full border border-brand bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-soft">
                {offer.badge}
              </span>
              {offer.price && (
                <span className="mt-5 font-heading text-6xl font-black text-white">
                  {offer.price}
                </span>
              )}
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide text-white">
                {offer.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                {offer.description}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-neutral-600">
                While stocks last
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}