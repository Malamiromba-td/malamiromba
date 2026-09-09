import { Course } from "@/lib/types";

/**
 * Placeholder courses shown until TATHSCHOOL_API_URL is configured, or if
 * the live fetch fails for any reason (so the page never breaks).
 */
const FALLBACK_COURSES: Course[] = [
  {
    id: "fallback-1",
    title: "Intro to AI for Beginners (Hausa)",
    description:
      "A first course on what AI is and how to start using it, taught in Hausa.",
    href: "https://tath.school",
    level: "Beginner",
    duration: "4 weeks",
  },
  {
    id: "fallback-2",
    title: "Practical Tech Skills for Everyday Life",
    description:
      "Digital literacy fundamentals — devices, the internet, and staying safe online.",
    href: "https://tath.school",
    level: "Beginner",
    duration: "3 weeks",
  },
];

/**
 * Normalizes a single record from the TathSchool API into our Course shape.
 * TathSchool's exact field names aren't confirmed yet — this maps the
 * common variants so it's a one-place fix once the real response shape
 * is known.
 */
function normalizeCourse(raw: Record<string, unknown>, index: number): Course {
  const get = (...keys: string[]) =>
    keys.map((k) => raw[k]).find((v) => v !== undefined && v !== null);

  return {
    id: String(get("id", "slug", "_id") ?? `course-${index}`),
    title: String(get("title", "name") ?? "Untitled course"),
    description: String(get("description", "summary", "excerpt") ?? ""),
    href: String(get("url", "href", "link") ?? "https://tath.school"),
    level: get("level", "difficulty") as string | undefined,
    duration: get("duration", "length") as string | undefined,
    imageUrl: get("imageUrl", "image", "thumbnail", "cover") as
      | string
      | undefined,
    programCode: String(get("programCode", "program_code") ?? ""),
  };
}

export async function getCourses(): Promise<Course[]> {
  const apiUrl = process.env.TATHSCHOOL_API_URL;

  if (!apiUrl) {
    return FALLBACK_COURSES;
  }

  try {
    const res = await fetch(apiUrl, {
      headers: process.env.TATHSCHOOL_API_KEY
        ? { Authorization: `Bearer ${process.env.TATHSCHOOL_API_KEY}` }
        : undefined,
      // Revalidate hourly so new courses show up without a redeploy.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`TathSchool API responded with ${res.status}`);
      return FALLBACK_COURSES;
    }

    const data = await res.json();
    // Handle either a bare array or a { data: [...] } / { courses: [...] } envelope.
    const list: unknown[] = Array.isArray(data)
      ? data
      : (data.data ?? data.courses ?? []);

    if (!Array.isArray(list) || list.length === 0) {
      return FALLBACK_COURSES;
    }

    return list.map((item, i) =>
      normalizeCourse(item as Record<string, unknown>, i),
    );
  } catch (err) {
    console.error("Failed to fetch courses from TathSchool:", err);
    return FALLBACK_COURSES;
  }
}
