import PageShell from "@/components/PageShell";
import ContentList from "@/components/ContentList";

export const metadata = {
  title: "Ventures | Ibrahim Malamiromba",
};

const ventures = [
  {
    id: "techinhausa",
    title: "TechInHausa",
    description:
      "Tech and AI literacy content, in Hausa — video lessons and a blog.",
    href: "https://techinhausa.org",
  },
  {
    id: "tathschool",
    title: "TathSchool",
    description:
      "The learning platform where lessons and courses live and get taught.",
    href: "https://tath.school",
  },
  {
    id: "malamiromba-ltd",
    title: "Malamiromba Ltd",
    description:
      "The company behind the work — training, partnerships, and production.",
    href: "#",
  },
];

export default function VenturesPage() {
  return (
    <PageShell
      title="Ventures"
      intro="What I've built, and where the work lives."
    >
      <ContentList items={ventures} />
    </PageShell>
  );
}
