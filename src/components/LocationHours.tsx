import OrderButtons from "@/components/OrderButtons";
import { CONTACT, HOURS, MAP_EMBED_URL } from "@/lib/site";

export default function LocationHours() {
  return (
    <section id="location" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand">
            Find Us
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
            At West Ruislip <span className="text-brand">Station</span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Right by the station — grab a box on your way home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-line lg:col-span-3">
            <iframe
              title="Fried Up location map"
              src={MAP_EMBED_URL}
              className="h-[380px] w-full grayscale-[0.2] invert transition-transform duration-500 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-3xl border border-line bg-ink p-7">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                Address &amp; Contact
              </h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-neutral-300">
                <p className="flex items-start gap-3">
                  <svg className="mt-0.5 shrink-0 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span>
                    {CONTACT.address.line1}
                    <br />
                    {CONTACT.address.line2}
                  </span>
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 font-semibold text-white transition-colors hover:text-brand"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {CONTACT.phone}
                </a>
              </address>
            </div>

            <div className="rounded-3xl border border-line bg-ink p-7">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                Opening Hours
              </h3>
              <ul className="mt-4 divide-y divide-line/60">
                {HOURS.map((day) => {
                  const isToday = new Date()
                    .toLocaleDateString("en-GB", { weekday: "long" })
                    .includes(day.days);
                  return (
                    <li
                      key={day.days}
                      className={`flex items-center justify-between py-2.5 text-sm ${
                        isToday ? "text-brand-soft" : "text-neutral-300"
                      }`}
                    >
                      <span className={isToday ? "font-bold" : ""}>{day.days}</span>
                      <span className={isToday ? "font-bold" : "text-neutral-400"}>
                        {day.open} – {day.close}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-brand/30 bg-ink px-6 py-10 text-center">
          <h3 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            Hungry? Order now.
          </h3>
          <OrderButtons />
        </div>
      </div>
    </section>
  );
}