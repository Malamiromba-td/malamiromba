
import Link from "next/link";

export const metadata = {
  title: "Work With Me — Ibrahim Malamiromba",
  description:
    "Explore consulting, development partnerships, and digital creation with Ibrahim Malamiromba.",
};

const waysToWork = [
  {
    number: "01",
    eyebrow: "Expertise & implementation",
    title: "Consulting & Advisory",
    description:
      "Work directly with Ibrahim on AI literacy, digital strategy, program design, communications, social media management, training, and implementation support.",
    details: [
      "Training & advisory",
      "Program design",
      "Digital communications",
      "Social media management",
    ],
    action: "Discuss consulting",
    href: "/contact?inquiry=consulting",
  },
  {
    number: "02",
    eyebrow: "Shared goals, lasting impact",
    title: "Funders & Development Partners",
    description:
      "Partner through Ibrahim's initiatives when a project needs local context, community access, digital reach, or experience working with international development partners.",
    details: [
      "Community engagement",
      "Project co-design",
      "Concept development",
      "Joint funding applications",
    ],
    action: "Start a conversation",
    href: "/contact?inquiry=partnership",
  },
  {
    number: "03",
    eyebrow: "Creative services",
    title: "Digital Creation",
    description:
      "Bring your ideas to life with digital content for your brand, campaign, learning program, or online community. Explore content types and pricing to find the right fit.",
    details: [
      "Graphics & visual design",
      "Video and short-form content",
      "Writing & scripts",
      "Presentations and digital assets",
    ],
    action: "Explore digital services",
    href: "/work-with-me/digital-creation",
  },
];

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="px-6 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="font-sans text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink"
          >
            ← Back home
          </Link>

          <div className="mt-14 max-w-3xl sm:mt-20">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
              Collaboration
            </p>

            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-7xl">
              Let&rsquo;s do work{" "}
              <span className="font-medium italic">
                that matters.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Whether you need specialist support, want to build a
              development partnership, or have a creative project in
              mind, there is a clear way for us to work together.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration options */}
      <section className="bg-[#171109] px-6 py-16 text-cream sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
              Three ways to work together
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
              Find the right{" "}
              <span className="font-medium italic">
                kind of collaboration.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {waysToWork.map((way) => (
              <article
                key={way.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] p-6 transition-colors duration-200 hover:border-ochre/60 hover:bg-white/[0.045] sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-0 font-display text-7xl font-bold leading-none text-white/[0.035] sm:text-8xl"
                >
                  {way.number}
                </span>

                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ochre">
                  {way.eyebrow}
                </p>

                <h3 className="relative mt-5 max-w-xs font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">
                  {way.title}
                </h3>

                <p className="mt-4 font-sans text-sm leading-6 text-cream/60">
                  {way.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 font-sans text-xs leading-5 text-cream/45">
                  {way.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span aria-hidden="true" className="text-ochre">
                        —
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Link
                    href={way.href}
                    className="inline-flex min-h-11 items-center gap-3 border border-ochre px-4 py-3 font-sans text-xs font-medium capitalize tracking-wide text-ochre transition-colors hover:bg-ochre hover:text-[#171109] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre"
                  >
                    {way.action}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
              Have something in mind?
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Tell me what you&rsquo;re working on.
            </h2>

            <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Share a little about your goals, your team, or the
              project you want to create. We can work out the best
              next step together.
            </p>
          </div>

          <Link
            href="/contact?inquiry=general"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start border border-ink px-5 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream sm:self-auto"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
              }
