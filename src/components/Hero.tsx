import OrderButtons from "@/components/OrderButtons";
import { CONTACT } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, rgba(225,37,27,0.22), transparent 70%), radial-gradient(40% 40% at 85% 20%, rgba(225,37,27,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <span className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-soft">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Fresh Fried Chicken · West Ruislip
        </span>

        <h1 className="animate-fade-up font-heading text-6xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-8xl md:text-9xl">
          Fried
          <span className="text-brand">Up</span>
        </h1>

        <p className="animate-fade-up mt-4 font-heading text-2xl font-bold uppercase tracking-[0.3em] text-neutral-300 sm:text-3xl">
          Crispy. Bold. Fresh.
        </p>

        <p className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Hand-breaded fried chicken, sticky hot honey wings, stacked burgers,
          wraps and loaded sides — cooked fresh to order and ready when you
          are.
        </p>

        <div className="animate-fade-up mt-9 w-full sm:w-auto">
          <OrderButtons size="lg" />
        </div>

        <div className="animate-fade-up mt-10 flex flex-col items-center gap-2 text-sm text-neutral-500">
          <a
            href="#location"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <svg
              className="text-brand"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {CONTACT.address.line1}, {CONTACT.address.line2}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="font-semibold transition-colors hover:text-brand"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}