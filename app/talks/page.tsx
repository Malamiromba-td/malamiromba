
import PageShell from "@/components/PageShell";
import { talks, featuredTalk, talkYears } from "@/lib/data/talks";

export const metadata = {
  title: "Talks & Media | Ibrahim Malamiromba",
  description:
    "Explore Ibrahim Malamiromba's interviews, media appearances, and publications on artificial intelligence and technology.",
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-65"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function TalksPage() {
  const archiveYears = talkYears.filter(
    (year) => year !== featuredTalk?.year,
  );

  return (
    <PageShell
      title="Talks & Media"
      intro="Conversations, interviews, and publications exploring artificial intelligence, technology, and their impact on society."
    >
      <div className="space-y-16">
        {/* Featured appearance */}
        {featuredTalk && (
          <section aria-labelledby="featured-talk-heading">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-current" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Featured appearance · {featuredTalk.year}
              </p>
            </div>

            <article className="grid overflow-hidden rounded-2xl border border-black/10 md:grid-cols-2">
              <a
                href={featuredTalk.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${featuredTalk.title} on YouTube`}
                className="group relative block aspect-video overflow-hidden bg-black md:aspect-auto md:min-h-72"
              >
                <img
                  src="https://img.youtube.com/vi/buFzgR8T6JI/hqdefault.jpg"
                  alt="Preview of Ibrahim Malamiromba's NTA Hausa appearance"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition-transform group-hover:scale-110">
                    <span aria-hidden="true">▶</span>
                  </span>
                </div>

                <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
                  NTA Hausa · Video
                </span>
              </a>

              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {featuredTalk.outlet}
                </p>

                <h2
                  id="featured-talk-heading"
                  className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                >
                  {featuredTalk.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {featuredTalk.description}
                </p>

                <div className="mt-8">
                  <ExternalLink href={featuredTalk.url}>
                    {featuredTalk.action}
                  </ExternalLink>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* Previous media appearances */}
        {archiveYears.map((year) => {
          const yearTalks = talks.filter(
            (talk) => talk.year === year && !talk.featured,
          );

          if (yearTalks.length === 0) return null;

          return (
            <section key={year} aria-labelledby={`year-${year}`}>
              <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-black/10 pb-4">
                <h2
                  id={`year-${year}`}
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  {year}
                </h2>

                <p className="text-xs text-muted sm:text-sm">
                  {yearTalks.length}{" "}
                  {yearTalks.length === 1 ? "appearance" : "appearances"}
                </p>
              </div>

              <div className="divide-y divide-black/10">
                {yearTalks.map((talk) => (
                  <article
                    key={talk.url}
                    className="group py-6 sm:py-8"
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

                      <div className="shrink-0 sm:pt-1">
                        <ExternalLink href={talk.url}>
                          {talk.action}
                        </ExternalLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageShell>
  );
            }
              
