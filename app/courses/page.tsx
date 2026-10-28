
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CardGrid from "@/components/CardGrid";
import { getCourses } from "@/lib/data/courses";
import { Course } from "@/lib/types";
import { COURSE_IMAGES } from "@/lib/data/course-images";

export const metadata = {
  title: "AI Courses | Ibrahim Malamiromba",
  description:
    "Explore technology and artificial intelligence courses taught through TathSchool.",
};

const LMS_URL = "https://tath.school";

function getCourseHref(course: Course) {
  switch (course.programCode) {
    case "ai-courses":
      return `https://tath.school/ai-courses/${course.id}`;

    case "tech-courses":
      return `https://tath.school/tech-courses/${course.id}`;

    default:
      return `https://tath.school/courses/${course.id}`;
  }
}


function normalizeImageName(value: string): string {
  return value
    .replace(/\.jpg$/i, "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const imageLookup = new Map(
  COURSE_IMAGES.map((filename) => [
    normalizeImageName(filename),
    `/${encodeURIComponent(filename)}`,
  ]),
);

export default async function CoursesPage() {
  const courses = await getCourses();

  // Display every course belonging to the AI courses programme.
  const aiCourses = courses.filter(
    (course) => course.programCode === "ai-courses",
  );

  return (
    <PageShell
      title="AI Courses"
      intro="Explore courses on artificial intelligence and learn practical skills through TathSchool."
    >
      <div className="space-y-12">
        <section>
          {aiCourses.length > 0 ? (
            <CardGrid
              items={aiCourses.map((course) => ({
                id: course.id,
                label: "",
                title: course.title,
                href: getCourseHref(course),
               // imageUrl: course.imageUrl || "/malamiromba-headshot.jpg",
                imageUrl:
  imageLookup.get(normalizeImageName(course.title)) ??
  "/malamiromba-headshot.jpg",
                meta:
                  [course.level, course.duration]
                    .filter(Boolean)
                    .join(" · ") || undefined,
                programCode: course.programCode,
              }))}
            />
          ) : (
            <div className="space-y-4">
              <p className="font-sans text-sm text-muted">
                No AI courses are available right now.
              </p>

              <Link
                href={LMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ochre underline"
              >
                Explore TathSchool
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          )}
        </section>

        <section>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Continue learning
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Explore the full course catalogue.
          </h2>

          <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-muted">
            Discover more courses and programmes on TathSchool.
          </p>

          <Link
            href={LMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-3 border border-ochre px-5 py-3 font-sans text-sm font-medium text-ochre transition-colors hover:bg-ochre hover:text-[#171109]"
          >
            Explore TathSchool
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
