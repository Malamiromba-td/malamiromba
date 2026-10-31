import Image from "next/image";
import PageShell from "@/components/PageShell";
import { communities } from "@/lib/data/community";

export const metadata = {
  title: "About | Ibrahim Malamiromba",
  description:
    "Learn about Ibrahim Zubairu (Malamiromba), a technology and growth strategist, digital creator, educator, entrepreneur, and independent consultant.",
};

export default function AboutPage() {
  return (
    <PageShell title="About">
      <div className="space-y-20 sm:space-y-24">
        {/* Biography */}
        <section
          aria-label="About Ibrahim Zubairu"
          className="flex flex-col gap-8 sm:flex-row sm:gap-10"
        >
          <div className="order-2 max-w-xl space-y-6 font-sans text-base leading-relaxed text-ink sm:order-1 sm:flex-1">
            <p>
              I'm Ibrahim Zubairu, a technology and growth strategist,
              digital creator, educator, entrepreneur, and independent
              consultant working at the intersection of technology,
              business, and people.
            </p>

            <p>
              My career began in software engineering and technical
              product management, where I developed an understanding
              of how technology is built, how products evolve, and
              what it takes to turn ideas into working solutions.
              Over time, my interests expanded beyond building
              products to understanding something equally important:
              how those products reach the right people, create
              value, and grow into sustainable businesses.
            </p>

            <p>That journey has shaped the work I do today.</p>

            <p>
              I work across product strategy, growth and business
              development, technology education, digital adoption,
              and community engagement, drawing on my technical
              background and entrepreneurial experience to help
              organizations connect their solutions with the people
              they are designed to serve.
            </p>

            <p>
              As an independent consultant and advisor, I work with
              companies, development organizations, and international
              donors on initiatives involving technology adoption,
              digital education, product communication, growth, and
              community development. I'm particularly interested in
              opportunities where business objectives, emerging
              technology, and meaningful social impact intersect.
            </p>

            <p>
              I'm also a technology educator, AI literacy advocate,
              and digital storyteller. Through my personal brand,
              Malamiromba, I create content in English and Hausa,
              making artificial intelligence, digital tools,
              business concepts, and emerging opportunities easier
              to understand and apply.
            </p>

            <p>
              For me, content creation is more than communication.
              It is a practical way to build awareness, earn trust,
              understand audiences, encourage product adoption, and
              connect people with opportunities.
            </p>
          </div>

          {/* Portrait */}
          <div className="order-1 flex flex-col gap-4 sm:order-2 sm:w-64 sm:shrink-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-indigo-deep">
              <Image
                src="/001.JPG"
                alt="Ibrahim Zubairu, popularly known as Malamiromba"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 280px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Community */}
        <section
          id="community"
          aria-labelledby="community-heading"
          className="scroll-mt-24 border-t border-black/10 pt-10 sm:pt-14"
        >
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Beyond the individual
            </p>

            <h2
              id="community-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Community
            </h2>

            <p className="mt-4 font-sans text-base leading-relaxed text-muted">
              Building spaces where people can learn, develop practical
              skills, and participate in the future of technology.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {communities.map((community, index) => (
              <article
                key={community.name}
                className="flex h-full flex-col border border-black/10 p-6 transition-colors hover:border-black/30 sm:p-7"
              >
                <span className="font-sans text-xs font-medium tracking-[0.14em] text-muted">
                  0{index + 1} / INITIATIVE
                </span>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {community.name}
                </h3>

                <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {community.label}
                </p>

                <p className="mt-4 flex-1 font-sans text-sm leading-7 text-muted">
                  {community.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
