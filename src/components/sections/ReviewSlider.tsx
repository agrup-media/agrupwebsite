"use client";

import { useEffect, useState } from "react";
import type { Review } from "@data/theBarber/reviews";

type ReviewSliderProps = {
  reviews: ReadonlyArray<Review>;
};

export function ReviewSlider({ reviews }: ReviewSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeReview = reviews[activeIndex];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || isPaused || reviews.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <div
      className="wood-panel overflow-hidden rounded-3xl border border-cream/14 p-5 md:p-7"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        key={`${activeReview.author}-${activeIndex}`}
        className="min-h-52 animate-review-fade"
        aria-live="polite"
      >
        <div className="flex items-center gap-1 text-cognac" aria-label={`${activeReview.rating} von 5 Sternen`}>
          {Array.from({ length: activeReview.rating }).map((_, index) => (
            <span key={index} aria-hidden="true">
              ★
            </span>
          ))}
        </div>
        <blockquote className="mt-5 text-lg leading-8 text-cream md:text-xl">
          „{activeReview.text}“
        </blockquote>
        <p className="mt-5 text-sm font-semibold text-cream/72">
          {activeReview.author}
        </p>
      </div>

      <div className="mt-6 flex gap-2" aria-label="Bewertung auswählen">
        {reviews.map((review, index) => (
          <button
            key={`${review.author}-${index}`}
            type="button"
            className={[
              "h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac",
              index === activeIndex
                ? "w-9 bg-forest"
                : "w-2.5 bg-softblack/20 hover:bg-softblack/35",
            ].join(" ")}
            aria-label={`Bewertung ${index + 1} anzeigen`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
