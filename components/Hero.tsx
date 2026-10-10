"use client";

import { useState } from "react";
import SocialRow from "./SocialRow";
import NavOverlay from "./NavOverlay";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-cream">
      <div className="flex flex-col md:min-h-screen md:flex-row">
        {/* Left: content */}
        <div className="flex flex-col justify-between gap-10 px-6 py-7 sm:px-10 sm:py-8 md:w-1/2 md:gap-12 md:px-12 md:py-10 lg:px-16">
          {/* Keep the existing menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="group w-7"
          >
            <span className="mb-[5px] block h-0.5 bg-ink transition-transform duration-200 group-hover:translate-y-px" />
            <span className="mb-[5px] block h-0.5 bg-ink" />
            <span className="block h-0.5 w-[70%] bg-ink transition-transform duration-200 group-hover:-translate-y-px" />
          </button>

          <div className="flex-1 md:flex md:flex-col md:justify-center md:py-10">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-ochre sm:text-sm">
              Creator · Educator · Advisor
            </p>

            <h1 className="font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.82] tracking-[-0.055em] text-ink md:text-[clamp(3.5rem,6vw,6.5rem)]">
              IBRAHIM
            </h1>

            <div className="mt-8 max-w-[440px] space-y-5">
              <p className="font-sans text-lg leading-8 text-ink sm:text-xl sm:leading-8">
                Hi, I’m Ibrahim Zubairu, but everyone calls me{" "}
                <span className="decoration-ochre decoration-2 underline underline-offset-4">
                  Malamiromba.
                </span>
              </p>

              <p className="font-sans text-sm leading-7 text-ink/80 sm:text-base sm:leading-7">
                I’m a former software engineer and technical PM turned digital
                creator, educator, growth lead and independent advisor. Today,
                I consult for companies, development organizations, and
                international donors.
              </p>

              <p className="font-sans text-sm leading-7 text-muted sm:text-base">
                Watch my{" "}
                <a
                  href="/videos"
                  className="text-ink underline decoration-ochre underline-offset-4 transition-colors hover:text-ochre"
                >
                  latest lesson
                </a>{" "}
                or read my{" "}
                <a
                  href="/blog"
                  className="text-ink underline decoration-ochre underline-offset-4 transition-colors hover:text-ochre"
                >
                  latest post
                </a>
                .
              </p>
            </div>
          </div>

          <SocialRow />
        </div>

        {/* Right: portrait */}
        <div
          className="relative h-[78vw] min-h-[280px] max-h-[460px] overflow-hidden border-y-2 border-ink bg-indigo-deep sm:h-[65vw] sm:max-h-[520px] md:h-auto md:min-h-screen md:max-h-none md:w-1/2 md:self-stretch md:border-y-0 md:border-l-2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 24px)",
          }}
        >
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(max-width: 767px)"
              srcSet="/IMG_1832.jpeg"
            />
            <img
              src="/001.JPG"
              alt="Ibrahim Malamiromba"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
