import Link from "next/link";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Work With Me | Ibrahim Malamiromba",
  description:
    "Work with Ibrahim Zubairu (Malamiromba) on technology strategy, product growth, development partnerships, bilingual content, and digital education.",
};

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
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

function ArrowUpRightIcon({
  className = "",
}: {
  className?: string;
}) {
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
      "Helping organizations connect technology, products, and business objectives through product strategy, growth planning, digital adoption, and business development.",
    tags: [
      "Product Strategy",
      "Business Growth",
      "Technology Adoption",
    ],
    action: "Discuss consulting",
    href: "/contact?inquiry=consulting",
  },
  {
    number: "02",
    label: "Partnerships",
    icon: <HandshakeIcon />,
    title: "Development Partnerships",
    description:
      "Collaborating with development organizations, companies, and international partners on digital education, capacity building, inclusive technology, and community-led initiatives.",
    tags: [
      "Programme Design",
      "Community Engagement",
      "Strategic Partnerships",
    ],
    action: "Explore partnerships",
    href: "/contact?inquiry=partnership",
  },
  {
    number: "03",
    label: "Communication",
    icon: <ClapperIcon />,
    title: "Content & Campaigns",
    description:
      "Helping brands and organizations reach the right audiences through English and Hausa storytelling, educational content, product demonstrations, and digital campaigns.",
    tags: [
      "Bilingual Content",
      "Product Communication",
      "Campaigns",
    ],
    action: "Request the media kit",
    href: "https://drive.google.com/drive/folders/1JkQAmYrwE4OqGRPe-ymvb2GTF_Uld7DU?usp=sharing",
    external: true,
  },
  {
    number: "04",
    label: "Learning",
    icon: <BookIcon />,
    title: "Digital Products & Education",
    description:
      "Creating practical learning experiences and resources that make artificial intelligence, digital tools, and emerging opportunities easier to understand and apply.",
    tags: [
      "Courses",
      "Digital Guides",
      "AI Literacy",
    ],
    action: "Explore resources",
    href: "https://nestuge.me/malamiromba",
    external: true,
  },
];

export default function WorkWithMePage() {
  return (
    <PageShell title="Work With Me">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-ochre">
            Collaboration / 01—04
          </p>

          <h1 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Let&rsquo;s build something meaningful.
          </h1>

          <p className="mt-4 font-sans text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I work with businesses, development organizations,
            brands, and learning communities to turn ideas into
            practical solutions, connect with audiences, and
            create sustainable growth.
          </p>
        </header>

        {/* Collaboration cards */}
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
                <Link
                  href={way.href}
                  {...(way.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
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

        {/* Final call to action */}
        <section className="mt-10 border-t border-[#e3d7bd] pt-8 sm:mt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                Open to select opportunities
              </p>

              <h2 className="mt-3 font-sans text-xl font-semibold text-ink sm:text-2xl">
                Looking for a growth or product leader?
              </h2>

              <p className="mt-2 font-sans text-base leading-7 text-muted">
                Let&rsquo;s discuss your organization&rsquo;s goals,
                an advisory engagement, a consulting project, or
                a potential leadership opportunity.
              </p>
            </div>

            <Link
              href="/contact?inquiry=leadership"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start border border-ink px-5 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre sm:self-center"
            >
              Start a conversation
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
