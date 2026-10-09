import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Videos | Ibrahim Malamiromba",
  description:
    "Watch videos by Ibrahim Malamiromba and connect with him on Facebook, Instagram, TikTok, and YouTube.",
};

const featuredVideo = {
  id: "qq-CMHsjbFQ?si=ZUC9XkGZA5hKsUng",
  title: "Featured video by Ibrahim Malamiromba",
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DQPdYWLko/",
    handle: "Follow on Facebook",
    Icon: SiFacebook,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/malamiromba",
    handle: "Follow on Instagram",
    Icon: SiInstagram,
    color: "#E4405F",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@malamiromba",
    handle: "Follow on TikTok",
    Icon: SiTiktok,
    color: "#111111",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@malam_iromba",
    handle: "Subscribe on YouTube",
    Icon: SiYoutube,
    color: "#FF0000",
  },
];

export default function VideosPage() {
  return (
    <PageShell title="Videos" intro="Ideas, lessons, and conversations on technology,
            professional growth, and the work that matters.
          ">
    {/* Page introduction */}
      /*
      <section className="px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#598f8b]">
            Watch & learn
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Videos
          </h1>

          <p className="mt-4 max-w-xl font-sans text-sm leading-7 text-neutral-600 sm:text-base">
            Ideas, lessons, and conversations on technology,
            professional growth, and the work that matters.
          </p>
        </div>
      </section>*/

      {/* Featured YouTube video */}
      <section className="px-3 sm:px-8">
        <div className="mx-auto max-w-6xl bg-[#d9eeeb] p-3 sm:p-5">
          <div className="aspect-video overflow-hidden bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${featuredVideo.id}`}
              title={featuredVideo.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div
            aria-hidden="true"
            className="flex justify-end overflow-hidden pt-3"
          >
            <span className="font-sans text-xl font-black leading-none tracking-[-0.12em] text-[#598f8b] sm:text-3xl">
              ◉◉◉◉◉◉◉◉◉◉◉◉
            </span>
          </div>
        </div>
      </section>

      {/* Social media links */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Stay connected
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Find me on social media
            </h2>

            <p className="mx-auto mt-3 max-w-lg font-sans text-sm leading-6 text-neutral-600">
              Follow along for more videos, insights, updates, and
              conversations.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {socialLinks.map(({ name, href, handle, Icon, color }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${handle} — opens in a new tab`}
                className="group flex min-h-40 flex-col items-center justify-center border border-neutral-200 bg-white px-3 py-6 transition duration-200 hover:-translate-y-1 hover:border-[#598f8b] hover:bg-[#f0f8f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#598f8b] sm:min-h-48 sm:py-8"
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <Icon
                    size={42}
                    color={color}
                    aria-hidden="true"
                    className="sm:hidden"
                  />
                  <Icon
                    size={54}
                    color={color}
                    aria-hidden="true"
                    className="hidden sm:block"
                  />
                </span>

                <span className="mt-4 font-display text-base font-bold sm:text-lg">
                  {name}
                </span>

                <span className="mt-1 text-center font-sans text-xs text-neutral-500">
                  {handle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube channel CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href={socialLinks[3].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ibrahim's YouTube channel"
            className="inline-flex items-center justify-center transition-transform hover:scale-105"
          >
            <SiYoutube size={76} color="#FF0000" aria-hidden="true" />
          </Link>

          <p className="mt-5 font-sans text-xs uppercase tracking-[0.16em] text-neutral-500">
            Watch more videos at
          </p>

          <Link
            href={socialLinks[3].href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-display text-xl font-bold uppercase transition-colors hover:text-[#598f8b] sm:text-2xl"
          >
            My YouTube Channel
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}


/*
import PageShell from "@/components/PageShell";
import CardGrid from "@/components/CardGrid";
import { getVideos } from "@/lib/data/videos";

export const metadata = {
  title: "Videos | Ibrahim Malamiromba",
};

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <PageShell
      title="Videos"
      intro="Lessons taught on TathSchool, from TechInHausa's YouTube channel."
    >
      <CardGrid
        items={videos.map((v) => ({
          id: v.id,
          label: "Video",
          title: v.title,
          href: v.href,
          imageUrl: v.thumbnailUrl,
          meta: v.duration,
        }))}
      />
    </PageShell>
  );
}
*/
