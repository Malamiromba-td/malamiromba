
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CardGrid from "@/components/CardGrid";
import { getCourses } from "@/lib/data/courses";
import { Course } from "@/lib/types";

export const metadata = {
  title: "Courses | Ibrahim Malamiromba",
  description:
    "Explore selected technology and AI courses taught through TathSchool.",
};

const LMS_URL = "https://tath.school";

export default async function CoursesPage() {
  const courses = await getCourses();

  const featuredCourses = courses.slice(0, 1);

  const getCourseHref = (course: Course) => {
    switch (course.programCode) {
      case "ai-courses":
        return `https://tath.school/ai-courses/${course.id}`;

      case "tech-courses":
        return `https://tath.school/tech-courses/${course.id}`;

      default:
        return `https://tath.school/courses/${course.id}`;
    }
  };

  return (
    <PageShell
      title="Courses"
      intro="Lessons taught through TathSchool, on tech and AI in plain Hausa."
    >
      <div className="space-y-12">
        {/* Featured courses */}
        <section>
          <div className="mb-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
              Selected learning
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
              Start learning
            </h2>

            <p className="mt-2 max-w-xl font-sans text-sm leading-6 text-muted">
              A selection of courses available through TathSchool.
              Visit the learning platform to explore more courses
              and access the full learning experience.
            </p>
          </div>

          {featuredCourses.length > 0 ? (
            <CardGrid
              items={featuredCourses.map((course) => ({
                id: course.id,
                label: "Featured course",
                title: course.title,
                href: getCourseHref(course),
                imageUrl: "/malamiromba-headshot.jpg",
                meta:
                  [course.level, course.duration]
                    .filter(Boolean)
                    .join(" · ") || undefined,
                programCode: course.programCode,
              }))}
            />
          ) : (
            <p className="font-sans text-sm text-muted">
              No featured courses are available right now. Visit
              TathSchool to explore its learning programmes.
            </p>
          )}
        </section>

        {/* LMS CTA */}
        <section className="bg-[#171109] px-6 py-10 text-cream sm:px-8 sm:py-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Continue learning
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Explore the full course catalogue.
          </h2>

          <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-cream/65">
            Discover more courses, view programme details, and
            continue to TathSchool for the full learning experience.
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

/*
import PageShell from "@/components/PageShell";
import CardGrid from "@/components/CardGrid";
import { getCourses } from "@/lib/data/courses";
import { Course } from "@/lib/types";

export const metadata = {
  title: "Courses | Ibrahim Malamiromba",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  const getCourseHref = (course: Course) => {
    switch (course.programCode) {
      case "ai-courses":
        return `https://tath.school/ai-courses/${course.id}`;

      case "tech-courses":
        return `https://tath.school/tech-courses/${course.id}`;

      default:
        return `https://tath.school/courses/${course.id}`;
    }
  };

  return (
    <PageShell
      title="Courses"
      intro="Lessons taught through TathSchool, on tech and AI in plain Hausa."
    >
      <CardGrid
        items={courses.map((c) => ({
          id: c.id,
          label: "Course",
          title: c.title,
          href: getCourseHref(c),
          // imageUrl: c.imageUrl,
          imageUrl: "/malamiromba-headshot.jpg",
          meta: [c.level, c.duration].filter(Boolean).join(" · ") || undefined,
          programCode: c.programCode,
        }))}
      />
    </PageShell>
  );
}
*/
