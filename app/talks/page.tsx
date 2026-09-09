import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Talks | Ibrahim Malamiromba",
};

export default function TalksPage() {
  return (
    <PageShell
      title="Talks"
      intro="Speaking engagements and community sessions will be listed here."
    >
      <p className="font-sans text-sm text-muted">
        No talks added yet — replace this with a real list (event, date, link to
        video/slides) once details are ready, following the same row-list style
        as Courses and Books.
      </p>
    </PageShell>
  );
}
