"use client";

import { useState } from "react";
import SocialRow from "./SocialRow";
import NavOverlay from "./NavOverlay";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      <div className="flex min-h-screen flex-col md:flex-row">
       // {/* Left: content */}
        <div className="flex basis-auto flex-col justify-between gap-6 px-6 py-7 sm:px-10 sm:py-8 md:basis-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="group w-7"
          >
            <span className="block h-0.5 bg-ink mb-[5px] transition-transform duration-200 group-hover:translate-y-px" />
            <span className="block h-0.5 bg-ink mb-[5px]" />
            <span className="block h-0.5 w-[70%] bg-ink transition-transform duration-200 group-hover:-translate-y-px" />
          </button>

          <div>
            <h1 className="font-display text-[15vw] leading-[0.95] tracking-tight text-ink sm:text-[64px] md:text-[clamp(48px,7vw,96px)]">
              IBRAHIM
            </h1>
            <div className="mt-6 max-w-[440px] space-y-4">
              <p className="font-sans text-base leading-relaxed text-ink">
                Hi, I&rsquo;m Ibrahim Zubairu, but everyone calls me
                Malamiromba.
              </p>
              <p className="font-sans text-base leading-relaxed text-ink">
                I&rsquo;m a former software engineer and technical PM turned digital creator, educator, growth lead and independent advisor. Today, I consult for companies, development organizations, and international donors.
                <br/>
                {/*
                I&rsquo;m making modern technology accessible to Hausa-speaking communities through
                {" "}
                
                <a
                  href="https://techinhausa.org"
                  className="underline decoration-ochre underline-offset-[3px] transition-colors"
                >
                  TechInHausa
                </a>
                ,{" "}
                <a
                  href="https://tath.school"
                  className="underline decoration-ochre underline-offset-[3px] transition-colors"
                >
                  TathSchool
                </a>
                , and Malamiromba Ltd.
                */}
              </p>
              <p className="font-sans text-base leading-relaxed text-muted">
                Watch my{" "}
                <a href="/videos" className="underline underline-offset-[3px]">
                  latest lesson
                </a>{" "}
                or read my{" "}
                <a href="/blog" className="underline underline-offset-[3px]">
                  latest post
                </a>
                .
              </p>
            </div>
          </div>

          <SocialRow />
        </div>

        {/* Right: full-bleed portrait */}
        <div
          className="flex min-h-[60vw] items-end justify-center bg-indigo-deep md:min-h-screen md:basis-1/2 border-t-right border-b-left border-t-2 border-b-2 border-ink md:border-t-0 md:border-b-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 24px)",
          }}
        >
          {/* Replace with next/image once the real portrait is ready */}
          {/* <span className="mb-6 font-sans text-sm text-cream/40">
            [ portrait photo placeholder ]
          </span>*/}
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(max-width: 767px)"
              srcSet="/IMG_1832.jpeg"
            />

            <img
              src="/001.JPG"
              alt="Ibrahim Malamiromba"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
