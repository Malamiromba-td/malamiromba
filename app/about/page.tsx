
import PageShell from "@/components/PageShell";
import { communities } from "@/lib/data/community";

export const metadata = {
  title: "About | Ibrahim Malamiromba",
  description:
    "Learn about Ibrahim Malamiromba's work in technology education, AI literacy, and community building.",
};

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-end justify-center overflow-hidden bg-indigo-deep ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 24px)",
      }}
    >
      <span className="mb-4 font-sans text-xs text-cream/40">
        {label}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell title="About">
      <div className="space-y-20 sm:space-y-24">
        {/* Biography */}
        <section
          aria-label="About Ibrahim Malamiromba"
          className="flex flex-col gap-8 sm:flex-row sm:gap-10"
        >
          <div className="order-2 max-w-xl space-y-6 font-sans text-base leading-relaxed text-ink sm:order-1 sm:flex-1">
            <p>
              Ibrahim Zubairu (Malamiromba) is a Nigerian tech educator and
              community builder focused on making modern technology
              accessible to Hausa-speaking communities. He has taught and
              guided thousands of learners across Northern Nigeria and
              beyond, helping them understand and use digital tools, AI,
              and tech skills in practical, everyday ways.
            </p>

            <p>
              Beyond teaching, Ibrahim advocates for AI literacy and the
              growth of technical capacity in underserved language
              communities. He believes that curiosity about technology is
              universal — what often stands in the way is access and
              understanding. This platform is a reflection of that belief:
              making technology clear, relatable, and usable for more
              people.
            </p>
          </div>

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

            <ImagePlaceholder
              label="[ teaching / community photo ]"
              className="aspect-[4/3] w-full"
            />
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


{/*import PageShell from "@/components/PageShell";

export const metadata = {
  title: "About | Ibrahim Malamiromba",
};

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-end justify-center bg-indigo-deep ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 24px)",
      }}
    >*/}
      {/* Replace with a real next/image once photos are ready */}
  {/*  <span className="mb-4 font-sans text-xs text-cream/40">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell title="About">
      <div className="space-y-16 pb-8 sm:space-y-24">*/}
        {/* Introduction */}
       {/* <section className="grid gap-10 sm:grid-cols-[1fr_280px] sm:items-start sm:gap-14">
          <div className="order-2 space-y-7 sm:order-1">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ochre">
              Educator · AI Advocate · Community Builder
            </p>

            <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Making technology accessible, one learner at a time.
            </h2>

            <div className="max-w-xl space-y-5 font-sans text-base leading-8 text-ink/80">
              <p>
                Ibrahim Zubairu, popularly known as Malamiromba,
                is a Nigerian technology educator and community
                builder committed to making modern technology more
                accessible to Hausa-speaking communities.
              </p>

              <p>
                Through teaching, mentorship, and community
                engagement, he has helped thousands of learners
                across Northern Nigeria and beyond explore digital
                tools, understand artificial intelligence, and
                develop practical technology skills they can apply
                in everyday life.
              </p>

              <p>
                His work goes beyond introducing people to new
                tools. He is passionate about building technical
                capacity, advancing AI literacy, and creating
                learning experiences that connect technology with
                people's languages, experiences, and realities.
              </p>
            </div>
          </div>*/}

          {/* Portrait */}
        /*  <div className="order-1 sm:order-2">
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

            <p className="mt-3 font-sans text-sm text-ink/60">
              Ibrahim Zubairu (Malamiromba)
            </p>
          </div>
        </section>*/

        {/* Philosophy */}
        /*<section className="relative overflow-hidden bg-indigo-deep px-6 py-10 text-cream sm:px-10 sm:py-14">
          <span
            aria-hidden="true"
            className="absolute -right-5 -top-16 font-display text-[12rem] leading-none text-cream/[0.04]"
          >
            “
          </span>

          <div className="relative max-w-3xl space-y-5">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-ochre">
              The belief behind the work
            </p>

            <blockquote className="font-display text-2xl leading-snug sm:text-3xl lg:text-4xl">
              The ability to understand and use technology should
              not be limited by the language you speak or the
              opportunities available to you.
            </blockquote>

            <p className="max-w-xl font-sans text-sm leading-7 text-cream/70 sm:text-base">
              Curiosity is universal. With the right access,
              guidance, and learning resources, more people can
              participate in shaping the digital future.
            </p>
          </div>
        </section>*/

        {/* Mission and community */}
       /* <section className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-12">
          <div className="space-y-5">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ochre">
              The mission
            </p>

            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Technology should make sense to everyone.
            </h2>

            <div className="space-y-4 font-sans text-base leading-8 text-ink/80">
              <p>
                Malamiromba is an ongoing effort to make technology
                clearer, more relatable, and more useful to people
                who are often underserved by mainstream technology
                education.
              </p>

              <p>
                By connecting modern tools and ideas with accessible
                learning, the goal is to help more people move from
                curiosity to understanding, and from understanding
                to meaningful action.
              </p>
            </div>
          </div>*/

          {/*<ImagePlaceholder
            label="Teaching / community photograph"
            className="aspect-[4/3] w-full"
          />*/}
      {/*  </section>
      </div>
    </PageShell>
  );
}
*/}
