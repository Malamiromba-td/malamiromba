import { Book } from "@/lib/types";

/**
 * Placeholder books shown until BOOKS_API_URL is configured, or if the live
 * fetch fails for any reason (so the page never breaks).
 */
const FALLBACK_BOOKS: Book[] = [
  {
    id: "fallback-1",
    title: "Fahimtar AI (Understanding AI)",
    description: "A plain-language introduction to artificial intelligence, written in Hausa.",
    href: "#",
    publishedYear: "2026",
  },
];

/**
 * Normalizes a single record from the books API (e.g. Selar, Nestuge, or
 * whatever storefront ends up hosting these) into our Book shape. Field
 * names aren't confirmed yet — this maps the common variants so it's a
 * one-place fix once the real response shape is known.
 */
function normalizeBook(raw: Record<string, unknown>, index: number): Book {
  const get = (...keys: string[]) => keys.map((k) => raw[k]).find((v) => v !== undefined && v !== null);

  return {
    id: String(get("id", "slug", "_id") ?? `book-${index}`),
    title: String(get("title", "name") ?? "Untitled book"),
    description: String(get("description", "summary", "excerpt") ?? ""),
    href: String(get("url", "href", "link") ?? "#"),
    coverUrl: get("coverUrl", "cover", "image", "thumbnail") as string | undefined,
    publishedYear: get("publishedYear", "year", "publishedAt") as string | undefined,
  };
}

export async function getBooks(): Promise<Book[]> {
  const apiUrl = process.env.BOOKS_API_URL;

  if (!apiUrl) {
    return FALLBACK_BOOKS;
  }

  try {
    const res = await fetch(apiUrl, {
      headers: process.env.BOOKS_API_KEY
        ? { Authorization: `Bearer ${process.env.BOOKS_API_KEY}` }
        : undefined,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Books API responded with ${res.status}`);
      return FALLBACK_BOOKS;
    }

    const data = await res.json();
    const list: unknown[] = Array.isArray(data) ? data : data.data ?? data.books ?? [];

    if (!Array.isArray(list) || list.length === 0) {
      return FALLBACK_BOOKS;
    }

    return list.map((item, i) => normalizeBook(item as Record<string, unknown>, i));
  } catch (err) {
    console.error("Failed to fetch books:", err);
    return FALLBACK_BOOKS;
  }
}
