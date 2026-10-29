import Link from "next/link";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Work With Me | Ibrahim Malamiromba",
  description:
    "Explore consulting, development partnerships, content creation, and digital products with Ibrahim Malamiromba.",
};

/* ---------- Icons (inline SVG, no extra dependency) ---------- */

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "h-5 w-5",
};

function TrendingUpIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M11 17l2 2a1.4 1.4 0 0 0 2-2" />
      <path d="M14 14l2.5 2.5a1.4 1.4 0 0 0 2-2L15 11" />
      <path d="M15 11l-2.2-2.2a2 2 0 0 0-2.8 0L7.5 11.3a2 2 0 0 0 0 2.8" />
      <path d="M2 11l3-3 5-1 3 1" />
      <path d="M22 11l-3-3-3.5-.5" />
      <path d="M9 17l1.5 1.5a1.4 1.4 0 0 0 2-2" />
    </svg>
  );
}

function ClapperIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="9" width="18" height="12" rx="2" />
      <path d="M3 9l2.5-5 4 1.2L7 9" />
      <path d="M9.5 5.2L14 6.4 11.5 9" />
      <path d="M14 6.4l4-1.2L20.5 9" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 6.5C10.5 5 8 4.5 3 4.5v14c5 0 7.5.5 9 2 1.5-1.5 4-2 9-2v-14c-5 0-7.5.5-9 2z" />
      <path d="M12 6.5v14" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/* ---------- Content ---------- */

type Way = {
  number: string;
  label: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  action: string;
  href: string;
  external?: boolean;
};

const waysToWork: Way[] = [
  {
    number: "01",
    label: "Strategy",
    icon: <TrendingUpIcon />,
    title: "Consulting & Growth",
    description:
      "Helping teams improve products, find growth opportunities, build partnerships, and adopt technology.",
    tags: ["Product Strategy", "Business Growth", "AI Adoption"],
    action: "Explore consulting",
    href: "/contact?inquiry=consulting",
  },
  {
    number: "02",
    label: "Impact",
    icon: <HandshakeIcon />,
    title: "Development Partnerships",
    description:
      "Partnering on inclusive digital education, capacity building, and community-led development programmes.",
    tags: ["Programme Design", "Community Engagement", "Partnerships"],
    action: "Explore partnerships",
    href: "/contact?inquiry=partnership",
  },
  {
    number: "03",
    label: "Creative",
    icon: <ClapperIcon />,
    title: "Content & Campaigns",
    description:
      "Helping brands connect with audiences through English and Hausa storytelling, product demos, and campaigns.",
    tags: ["Sponsored Content", "Bilingual Campaigns", "Tutorials"],
    action: "View media kit",
    href: "https://drive.google.com/drive/folders/1JkQAmYrwE4OqGRPe-ymvb2GTF_Uld7DU?usp=sharing",
  },
  {
    number: "04",
    label: "Resources",
    icon: <BookIcon />,
    title: "Digital Products",
    description:
      "Practical courses, guides, templates, and tools to help you learn faster and work smarter.",
    tags: ["Courses", "Guides", "AI Tools"],
    action: "Browse resources",
    href: "https://nestuge.me/malamiromba",
    external: true,
  },
];

/* ---------- Page ---------- */

export default function WorkWithMePage() {
  return (
    {/*<main className="min-h-screen bg-cream px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">*/}
     <PageShell title="Work With Me">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-ochre">
            Work with me / 01&mdash;04
          </p>

          <h1 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Let&rsquo;s build something meaningful.
          </h1>

          <p className="mt-3 font-sans text-base leading-7 text-muted sm:text-lg">
            Four ways I can help you grow, build, communicate, and create
            impact.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-5">
          {waysToWork.map((way) => (
            <article
              key={way.number}
              className="group relative flex h-full flex-col rounded-2xl border border-[#eadfc8] bg-[#fffdf8] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ochre hover:shadow-[0_10px_30px_-12px_rgba(166,116,30,0.35)] focus-within:border-ochre motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6 lg:p-7"
            >
              <div className="flex items-center justify-between text-ochre">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] sm:text-sm">
                  {way.number} / {way.label}
                </p>
                <span className="transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transform-none">
                  {way.icon}
                </span>
              </div>

              <h2 className="mt-5 font-sans text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
                {way.title}
              </h2>

              <p className="mt-3 font-sans text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {way.description}
              </p>

              <p className="mt-4 font-sans text-sm leading-6 text-muted sm:text-base">
                {way.tags.join(" · ")}
              </p>

              <div className="mt-auto pt-6">
                {/* after:absolute makes the whole card clickable */}
                <Link
                  href={way.href}
                  {...(way.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1.5 font-sans text-base font-medium text-ochre underline-offset-4 after:absolute after:inset-0 after:rounded-2xl after:content-[''] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre sm:text-lg"
                >
                  {way.action}
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-1 motion-reduce:transform-none" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom row */}
        <Link
          href="/contact?inquiry=leadership"
          className="group mt-10 flex items-center justify-between gap-6 border-t border-[#e3d7bd] pt-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ochre sm:mt-12"
        >
          <div className="max-w-2xl">
            <h2 className="font-sans text-xl font-medium text-ink sm:text-2xl">
              Looking for a growth or product leader?
            </h2>
            <p className="mt-2 font-sans text-base leading-7 text-muted">
              Open to select advisory, consulting, and leadership
              opportunities.
            </p>
          </div>

          <ArrowUpRightIcon className="h-6 w-6 shrink-0 text-ochre transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
        </Link>
      </div>
    </PageShell>
  {/*</main>*/}
  );
}


{/*
import Link from "next/link";

export const metadata = {
  title: "Work With Me | Ibrahim Malamiromba",
  description:
    "Explore consulting, development partnerships, and digital creation with Ibrahim Malamiromba.",
};

const waysToWork = [
  {
    number: "01",
    eyebrow: "Expertise & implementation",
    title: "Consulting & Advisory",
    description:
      "Hire Ibrahim for specialized consulting in AI adoption, ecosystem and community building, digital strategy, talent & capacity training, and full-cycle product & software development.",
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
      "Partner Ibrahim’s ecosystem initiatives to ground your projects in authentic local context, high-trust community networks, and measurable digital reach alongside international development agencies.",
    details: [
      "Community engagement",
      "Project co-design",
      "Concept development",
      "Joint funding applications",
    ],
    action: "Start a conversation",
    href: "/contact?inquiry=partnership",
  },{
    number: "03",
    eyebrow: "Creative services",
    title: "Content creation & Storytelling",
    description:
      "I help brands connect with their audiences through creative storytelling and community-first content. Whether you're launching a campaign, building an educational curriculum, or growing a digital community, explore available content types and pricing below to get started..",
    details: [
      "Graphics & visual design",
      "Video and short-form content",
      "Writing & scripts",
      "Presentations and digital assets",
    ],
    action: "Discuss content creation and storytelling",
    href: "/contact?inquiry=content&storytelling",
  },
  
{
  number: "04",
  eyebrow: "Digital products",
  title: "Digital Products",
  description:
    "Explore and purchase my digital products, designed to help you work smarter, learn faster, and bring your ideas to life.",
  details: [
    "Ready-to-use digital resources",
    "Practical tools and templates",
    "Digital guides and learning materials",
    "Products designed to simplify your workflow",
  ],
  action: "Explore digital products",
  href: "https://nestuge.me/malamiromba",
},
];

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
{/*<section className="px-6 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10">
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
      </section>*/}

      {/* Collaboration options */}
      {  /* <section className="bg-[#171109] px-6 py-16 text-cream sm:px-10 sm:py-20">*/}
      {/* <section className=" px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ochre">
              Four ways to work together
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
                </span>*/}

                {/*  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ochre">
                  {way.eyebrow}
                </p>*/}

                {/*  <h3 className="relative mt-5 max-w-xs font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">
                  {way.title}
                </h3>

                <p className="mt-4 font-sans text-sm leading-6 text-muted">
                  {way.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 font-sans text-xs leading-5 text-muted">
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
      </section>*/}

      {/* Final CTA */}
      { /*   <section className="px-6 py-16 sm:px-10 sm:py-20">
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
            Get in touch*/}
            {/*<span aria-hidden="true">↗</span>*/}
            {/* </Link>
        </div>
      </section>
    </main>
  );
              }
*/}
