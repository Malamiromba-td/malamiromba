
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
      className={`flex items-end justify-center bg-indigo-deep ${className}`}
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
            <ImagePlaceholder
              label="[ portrait photo ]"
              className="aspect-[4/5] w-full"
            />

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
