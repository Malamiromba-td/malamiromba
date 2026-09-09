import { BlogPost } from "@/lib/types";
import { sanityFetch } from "@/lib/sanity";

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "fallback-1",
    title: "Me yasa AI ke da mahimmanci a yau (Why AI matters today)",
    description: "An introductory post on why AI literacy matters for Hausa-speaking communities.",
    href: "https://techinhausa.org",
    publishedDate: "2026",
  },
];

/**
 * The exact schema of TechInHausa's Sanity "post" documents isn't confirmed
 * yet. This query covers the common field names for a blog post schema —
 * adjust the query (or override entirely with SANITY_BLOG_QUERY) once the
 * real schema is known.
 */
const DEFAULT_BLOG_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  "description": coalesce(excerpt, description, summary),
  publishedAt,
  "imageUrl": mainImage.asset->url
}`;

function normalizePost(raw: Record<string, unknown>, index: number): BlogPost {
  const get = (...keys: string[]) => keys.map((k) => raw[k]).find((v) => v !== undefined && v !== null);
  const slug = get("slug") as string | undefined;
  const baseUrl = process.env.TECHINHAUSA_BLOG_BASE_URL || "https://techinhausa.org/blog";

  return {
    id: String(get("_id", "id") ?? `post-${index}`),
    title: String(get("title", "name") ?? "Untitled post"),
    description: String(get("description", "excerpt", "summary") ?? ""),
    href: slug ? `${baseUrl}/${slug}` : String(get("url", "href") ?? "https://techinhausa.org"),
    publishedDate: get("publishedAt", "date") as string | undefined,
    imageUrl: get("imageUrl", "image") as string | undefined,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = process.env.SANITY_BLOG_QUERY || DEFAULT_BLOG_QUERY;

  try {
    const result = await sanityFetch<Record<string, unknown>[]>(query);

    if (!result || !Array.isArray(result) || result.length === 0) {
      return FALLBACK_POSTS;
    }

    return result.map((item, i) => normalizePost(item, i));
  } catch (err) {
    console.error("Failed to fetch blog posts from Sanity:", err);
    return FALLBACK_POSTS;
  }
}
