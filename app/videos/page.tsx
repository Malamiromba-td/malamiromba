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
