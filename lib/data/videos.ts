import { Video } from "@/lib/types";

const FALLBACK_VIDEOS: Video[] = [
  {
    id: "fallback-1",
    title: "Menene Artificial Intelligence? (What is AI?)",
    description: "A short lesson introducing AI concepts in Hausa.",
    href: "https://www.youtube.com/@TechInHausa",
    duration: "8 min",
  },
];

/**
 * The videos themselves live on TechInHausa's YouTube channel — TathSchool's
 * API is expected to return each lesson with a YouTube video ID (or a full
 * YouTube URL). This builds the watch link and thumbnail straight from
 * YouTube's CDN when a video ID is present, and falls back to whatever
 * link/thumbnail fields the API provides otherwise.
 */
function normalizeVideo(raw: Record<string, unknown>, index: number): Video {
  const get = (...keys: string[]) =>
    keys.map((k) => raw[k]).find((v) => v !== undefined && v !== null);

  const videoId = get("videoId", "youtubeId", "ytId") as string | undefined;
  const href = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : String(
        get("url", "href", "link") ?? "https://www.youtube.com/@TechInHausa",
      );
  const thumbnailUrl = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : (get("thumbnailUrl", "thumbnail", "imageUrl", "cover") as
        | string
        | undefined);

  return {
    id: String(get("id", "slug", "_id") ?? `video-${index}`),
    title: String(get("title", "name") ?? "Untitled video"),
    description: String(get("description", "summary", "excerpt") ?? ""),
    href,
    duration: get("duration", "length") as string | undefined,
    thumbnailUrl,
    videoId,
  };
}

export async function getVideos(): Promise<Video[]> {
  const apiUrl = process.env.TATHSCHOOL_VIDEOS_API_URL;

  if (!apiUrl) {
    return FALLBACK_VIDEOS;
  }

  try {
    const res = await fetch(apiUrl, {
      headers: process.env.TATHSCHOOL_API_KEY
        ? { Authorization: `Bearer ${process.env.TATHSCHOOL_API_KEY}` }
        : undefined,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`TathSchool videos API responded with ${res.status}`);
      return FALLBACK_VIDEOS;
    }

    const data = await res.json();
    const list: unknown[] = Array.isArray(data)
      ? data
      : (data.data ?? data.videos ?? []);

    if (!Array.isArray(list) || list.length === 0) {
      return FALLBACK_VIDEOS;
    }

    return list.map((item, i) =>
      normalizeVideo(item as Record<string, unknown>, i),
    );
  } catch (err) {
    console.error("Failed to fetch videos from TathSchool:", err);
    return FALLBACK_VIDEOS;
  }
}
