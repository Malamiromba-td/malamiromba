import PageShell from "@/components/PageShell";
import CardGrid from "@/components/CardGrid";
import { getBooks } from "@/lib/data/books";

export const metadata = {
  title: "Books | Ibrahim Malamiromba",
};

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <PageShell
      title="Books"
      intro="Books written on tech and AI literacy, in Hausa."
    >
      <CardGrid
        items={books.map((b) => ({
          id: b.id,
          label: "Book",
          title: b.title,
          href: b.href,
          imageUrl: b.coverUrl,
          meta: b.publishedYear,
        }))}
      />
    </PageShell>
  );
}
