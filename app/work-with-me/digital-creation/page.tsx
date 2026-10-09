
import Link from "next/link";

export const metadata = {
  title: "Digital Creation — Ibrahim Malamiromba",
  description:
    "Explore digital content creation services and request a quote for your project with Ibrahim Malamiromba.",
};

const serviceGroups = [
  {
    id: "design",
    number: "01",
    title: "Graphic & Visual Design",
    intro:
      "Visuals that make your message clear and consistent across platforms.",
    services: [
      {
        name: "Social Media Graphics",
        description:
          "Branded posts, announcements, quote cards, and promotional designs.",
        price: "Quote on request",
      },
      {
        name: "Flyer & Poster Design",
        description:
          "Digital flyers and posters for events, campaigns, and announcements.",
        price: "Quote on request",
      },
      {
        name: "YouTube Thumbnail",
        description:
          "A clear, engaging thumbnail designed around your video topic and brand.",
        price: "Quote on request",
      },
      {
        name: "Presentation Design",
        description:
          "Well-structured slides for pitches, workshops, reports, and learning sessions.",
        price: "Quote on request",
      },
    ],
  },
  {
    id: "video",
    number: "02",
    title: "Video & Motion Content",
    intro:
      "Help people stop scrolling, understand your message, and keep watching.",
    services: [
      {
        name: "Short-form Video Editing",
        description:
          "Editing for Reels, TikTok, and YouTube Shorts, including captions and pacing.",
        price: "Quote on request",
      },
      {
        name: "Educational Video Editing",
        description:
          "Editing and polishing lessons, explainers, tutorials, and training content.",
        price: "Quote on request",
      },
      {
        name: "Video Repurposing",
        description:
          "Turn longer recordings into shorter clips for multiple digital platforms.",
        price: "Quote on request",
      },
    ],
  },
  {
    id: "writing",
    number: "03",
    title: "Writing & Content",
    intro:
      "Useful, audience-aware writing for your platform, campaign, or learning project.",
    services: [
      {
        name: "Social Media Captions",
        description:
          "Platform-ready captions shaped around your voice, audience, and goal.",
        price: "Quote on request",
      },
      {
        name: "Articles & Blog Posts",
        description:
          "Readable, structured articles and educational blog content.",
        price: "Quote on request",
      },
      {
        name: "Video Scripts",
        description:
          "Scripts for explainers, educational videos, short-form content, and presentations.",
        price: "Quote on request",
      },
      {
        name: "Content Planning",
        description:
          "A practical content outline or calendar built around your priorities.",
        price: "Quote on request",
      },
    ],
  },
];

export default function DigitalCreationPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="px-6 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/work-with-me"
            className="font-sans text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink"
          >
            ← Back to Work With Me
          </Link>

          <div className="mt-14 max-w-3xl sm:mt-20">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
              Digital creation
            </p>

            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-7xl">
              Good ideas,{" "}
              <span className="font-medium italic">
                beautifully made.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-muted sm:text-lg sm:leading-8">
              From graphics and video to writing and educational
              content, explore the kinds of digital work available.
              Tell me what you need and I&rsquo;ll follow up with a
              scope and quote.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact?inquiry=digital-creation"
                className="inline-flex min-h-12 items-center gap-3 bg-indigo-deep px-5 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-indigo-mid"
              >
                Request a quote
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center border border-hairline px-5 py-3 font-sans text-sm font-medium text-ink transition-colors hover:border-ochre"
              >
                Browse services
                <span className="ml-3" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services catalogue */}
      <section
        id="services"
        className="px-6 pb-16 sm:px-10 sm:pb-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 border-b border-hairline pb-5 sm:mb-10 sm:flex sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
                Service menu
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                What can we create?
              </h2>
            </div>

            <p className="mt-3 max-w-sm font-sans text-xs leading-5 text-muted sm:mt-0 sm:text-right">
              Final pricing depends on the scope, quantity,
              turnaround, and deliverables.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {serviceGroups.map((group) => (
              <section
                key={group.id}
                aria-labelledby={`heading-${group.id}`}
              >
                <div className="mb-2 flex items-start gap-4 sm:gap-6">
                  <span className="pt-1 font-display text-sm font-bold text-ochre">
                    {group.number}
                  </span>

                  <div>
                    <h3
                      id={`heading-${group.id}`}
                      className="font-display text-2xl font-bold text-ink sm:text-3xl"
                    >
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-2xl font-sans text-sm leading-6 text-muted">
                      {group.intro}
                    </p>
                  </div>
                </div>

                <div className="ml-0 sm:ml-10">
                  {group.services.map((service, index) => (
                    <article
                      key={service.name}
                      className={`grid gap-3 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-6 ${
                        index < group.services.length - 1
                          ? "border-b border-hairline"
                          : ""
                      }`}
                    >
                      <div>
                        <h4 className="font-display text-lg font-medium text-ink">
                          {service.name}
                        </h4>

                        <p className="mt-1 max-w-2xl font-sans text-sm leading-6 text-muted">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
                        <span className="font-sans text-sm font-medium text-ochre sm:text-right">
                          {service.price}
                        </span>

                        <Link
                          href={`/contact?inquiry=digital-creation&service=${encodeURIComponent(
                            service.name
                          )}`}
                          className="inline-flex items-center gap-2 font-sans text-sm text-indigo-mid underline underline-offset-4 transition-opacity hover:opacity-70"
                        >
                          Enquire
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#171109] px-6 py-14 text-cream sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
              Have a specific brief?
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Let&rsquo;s shape it together.
            </h2>

            <p className="mt-3 font-sans text-sm leading-6 text-cream/60">
              Share your idea, expected deliverables, timeline, and
              budget. I&rsquo;ll get back to you about the next step.
            </p>
          </div>

          <Link
            href="/contact?inquiry=digital-creation"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-ochre px-5 py-3 font-sans text-sm font-medium text-ochre transition-colors hover:bg-ochre hover:text-[#171109]"
          >
            Start a project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
      }
