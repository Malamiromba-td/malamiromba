import PageShell from "@/components/PageShell";

export const metadata = {
title: "Talks & Media | Ibrahim Malamiromba",
description:
"Watch, listen to, and read Ibrahim Malamiromba's media appearances, interviews, and publications on AI and technology.",
};

const resources = [
  {
outlet: "NTA Hausa",
type: "Video",
title: "Ibrahim Malamiromba NTA Hausa Video Appearance",
description:
"Watch Ibrahim Malamiromba's video appearance on NTA hausa.",
url: "https://youtu.be/buFzgR8T6JI?si=LekEuGaFTKSE3yyx",
action: "Watch Video",
},
{
outlet: "BBC Hausa",
type: "Radio / Interview",
title: "BBC Hausa Interview",
description:
"Listen to Ibrahim Malamiromba's appearance on BBC Hausa.",
url: "https://www.bbc.com/hausa/bbc_hausa_radio/w3ct77jk",
action: "Listen / Read",
},
{
outlet: "BBC Hausa",
type: "Video",
title: "BBC Hausa Video Interview",
description:
"Watch Ibrahim's video appearance shared by BBC Hausa.",
url: "https://www.facebook.com/share/v/1GmdbwFPLE/",
action: "Watch Video",
},
{
outlet: "Daily Trust",
type: "Article",
title: "How AI-powered systems shortchange qualified job applicants",
description:
"An article exploring how AI-powered systems can disadvantage qualified job applicants.",
url: "https://dailytrust.com/how-ai-powered-systems-shortchange-qualified-job-applicants/",
action: "Read Article",
},
{
outlet: "Daily Trust",
type: "Article",
title: "Can AI tools detect machine-generated content?",
description:
"An article examining AI tools and their ability to identify machine-generated content.",
url: "https://dailytrust.com/can-ai-tools-detect-machine-generated-content/",
action: "Read Article",
},
{
outlet: "RFI Hausa",
type: "Video",
title: "RFI Hausa Video Appearance",
description:
"Watch Ibrahim Malamiromba's video appearance shared by RFI Hausa.",
url: "https://www.facebook.com/share/v/1KAZpeerSp/",
action: "Watch Video",
},
];

export default function TalksPage() {
return ( <PageShell
   title="Talks & Media"
   intro="Conversations, interviews, and publications on artificial intelligence, technology, and their impact on society."
 > <section className="space-y-10">
{/* Featured YouTube appearance */} 
    {/*<article className="overflow-hidden rounded-2xl border border-black/10"> 
       <div className="aspect-video w-full bg-black"> 
          <iframe
           className="h-full w-full"
           src="https://www.youtube.com/embed/buFzgR8T6JI"
           title="Ibrahim Malamiromba on NTA Hausa"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerPolicy="strict-origin-when-cross-origin"
           allowFullScreen
         /> 
       </div>
      <div className="space-y-3 p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          NTA Hausa · Video Interview
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">
          Ibrahim Malamiromba on NTA Hausa
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Watch Ibrahim Malamiromba's appearance on NTA Hausa.
        </p>
        <a
          href="https://youtu.be/buFzgR8T6JI?si=LekEuGaFTKSE3yyx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
        >
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>*/}

    {/* Other media resources */}
    <div>
      {/*<div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          More from the media
        </h2>
        <p className="text-sm leading-6 text-muted">
          Interviews, videos, and published articles featuring Ibrahim.
        </p>
      </div>*/}

      <div className="grid gap-4 sm:grid-cols-1">
        {resources.map((resource) => (
          <article
            key={resource.url}
            className="flex h-full flex-col rounded-2xl border-b border-black/10 py-5 transition-colors hover:border-black/30 sm:py-6"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {resource.outlet}
              </span>
              <span className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-muted">
                {resource.type}
              </span>
            </div>

            <h3 className="text-lg font-semibold leading-snug">
              {resource.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              {resource.description}
            </p>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              {resource.action}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
</PageShell>
);
}


/*import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Talks | Ibrahim Malamiromba",
};

export default function TalksPage() {
  return (
    <PageShell
      title="Talks"
      intro="Speaking engagements and community sessions will be listed here."
    >
      <p className="font-sans text-sm text-muted">
        No talks added yet — replace this with a real list (event, date, link to
        video/slides) once details are ready, following the same row-list style
        as Courses and Books.
      </p>
    </PageShell>
  );
}*/
