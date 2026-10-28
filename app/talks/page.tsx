import PageShell from "@/components/PageShell";
import TalksArchive from "@/components/TalksArchive";

export const metadata = {
  title: "Talks & Media | Ibrahim Malamiromba",
  description:
    "Explore Ibrahim Malamiromba's interviews, media appearances, and publications on artificial intelligence and technology.",
};

export default function TalksPage() {
  return (
    <PageShell
      title="Talks & Media"
      intro="Conversations, interviews, and publications on artificial intelligence, technology, and their impact on society."
    >
      <TalksArchive />
    </PageShell>
  );
}
