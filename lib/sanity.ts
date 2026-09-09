/**
 * Minimal Sanity query client — talks to Sanity's hosted Query API directly
 * over fetch, so we don't need the @sanity/client dependency for a single
 * read-only query.
 *
 * Needs SANITY_PROJECT_ID (and optionally SANITY_DATASET, default
 * "production") pointed at TechInHausa's Sanity project.
 */
export async function sanityFetch<T = unknown>(query: string): Promise<T | null> {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || "production";
  const apiVersion = process.env.SANITY_API_VERSION || "2023-01-01";

  if (!projectId) {
    return null;
  }

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(
    query
  )}`;

  const headers: Record<string, string> = {};
  if (process.env.SANITY_API_TOKEN) {
    headers.Authorization = `Bearer ${process.env.SANITY_API_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Sanity query failed with ${res.status}`);
  }

  const json = await res.json();
  return json.result as T;
}
