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
