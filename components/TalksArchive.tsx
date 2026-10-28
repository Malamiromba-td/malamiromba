
"use client";

import { useState } from "react";
import { talks, talkYears } from "@/lib/data/talks";

export default function TalksArchive() {
  const [openYear, setOpenYear] = useState<number | null>(null);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {talkYears.map((year) => {
        const yearTalks = talks.filter((talk) => talk.year === year);
        const isOpen = openYear === year;

        return (
          <section key={year}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`talks-${year}`}
              onClick={() =>
                setOpenYear((current) =>
                  current === year ? null : year,
                )
              }
              className="flex w-full items-center justify-between gap-4 py-6 text-left sm:py-8"
            >
              <span className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {year}
                </span>

                <span className="text-xs text-muted sm:text-sm">
                  {yearTalks.length}{" "}
                  {yearTalks.length === 1 ? "appearance" : "appearances"}
                </span>
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                id={`talks-${year}`}
                className="pb-4 sm:pb-6"
              >
                <div className="divide-y divide-black/10">
                  {yearTalks.map((talk) => (
                    <article
                      key={talk.url}
                      className="py-6 first:border-t first:border-black/10 sm:py-7"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                        <div className="min-w-0 flex-1">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                              {talk.outlet}
                            </span>

                            <span className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-muted">
                              {talk.type}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                            {talk.title}
                          </h3>

                          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                            {talk.description}
                          </p>
                        </div>

                        <a
                          href={talk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60 sm:pt-1"
                        >
                          {talk.action}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
                          }
          
