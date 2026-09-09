import PageShell from "@/components/PageShell";
import ContentList from "@/components/ContentList";
import { getBlogPosts } from "@/lib/data/blog";

export const metadata = {
  title: "Blog | Ibrahim Malamiromba",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <PageShell
      title="Blog"
      intro="Writing from TechInHausa, on tech and AI in Hausa."
    >
      <ContentList
        items={posts.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          href: p.href,
          meta: p.publishedDate,
        }))}
      />
    </PageShell>
  );
}
