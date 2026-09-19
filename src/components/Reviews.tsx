"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import StarRating from "@/components/StarRating";
import { reviews } from "@/lib/site";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const visible = reviews.slice(index, index + 2);
  if (visible.length < 2) visible.push(reviews[0]);

  return (
    <section id="reviews" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand">
              Reviews
            </p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
              Loved in <span className="text-brand">Ruislip</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-heading text-4xl font-black text-white">4.5</span>
            <div>
              <StarRating rating={5} size={18} />
              <p className="mt-1 text-xs text-neutral-500">
                Based on Google reviews
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="grid gap-6 transition-transform duration-500 sm:grid-cols-2"
            key={index}
          >
            {visible.map((review, i) => (
              <figure
                key={`${review.name}-${index}-${i}`}
                className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-7"
                style={{ animation: `fade-up 0.5s ${i * 0.1}s ease-out both` }}
              >
                <div>
                  <StarRating rating={review.rating} />
                  <blockquote className="mt-4 text-base leading-relaxed text-neutral-300">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 font-heading text-lg font-black uppercase text-brand">
                    {review.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{review.name}</span>
                    <span className="block text-xs text-neutral-500">{review.source}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous reviews"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-neutral-300 transition-colors hover:border-brand hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i * 2)}
                  aria-label={`Go to reviews page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(index / 2) === i
                      ? "w-6 bg-brand"
                      : "w-2 bg-line hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next reviews"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-neutral-300 transition-colors hover:border-brand hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}