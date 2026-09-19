import { JUST_EAT_URL, UBER_EATS_URL } from "@/lib/site";

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 font-heading text-lg font-bold uppercase tracking-wider text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-95";

export default function OrderButtons({ size = "md" }: { size?: "md" | "lg" }) {
  const height = size === "lg" ? "h-14 px-8 text-xl" : "";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={JUST_EAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-justeat ${height} shadow-lg shadow-justeat/20`}
      >
        <JustEatsIcon />
        Order on Just Eat
      </a>
      <a
        href={UBER_EATS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-uber ${height} shadow-lg shadow-uber/20`}
      >
        <UberEatsIcon />
        Order on Uber Eats
      </a>
    </div>
  );
}

function JustEatsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm2.5 4.5l-1 1a5 5 0 00-5 5 4.98 4.98 0 001.02 3l-1 1-.1-.06A6 6 0 0011 7.44l1.5-1.5-1.06-1.06L12 3.82l3.56 3.56zM12 7.5a4.5 4.5 0 014.5 4.5c0 2.11-1.33 3.6-3.5 3.95z" />
    </svg>
  );
}

function UberEatsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h6l-3 6a4 4 0 001.2 5.6 4 4 0 005.6-1.2L16 8" />
      <path d="M15 6l1-2M18 4h.01" />
    </svg>
  );
}