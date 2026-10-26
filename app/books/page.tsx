
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Books | Ibrahim Malamiromba",
  description:
    "Explore technology and AI learning resources on Nestuge by Malamiromba.",
};

export default function BooksPage() {
  return (
    <PageShell
      title="Books"
      intro="Learn technology and AI skills in Hausa."
    >
      <Link
        href="https://malamiromba.nestuge.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore courses on Nestuge"
        className="group block overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-4"
      >
        <Image
          src="/books.png"
          alt="Nestuge by Malamiromba — learn tech and build your future. Explore technology, AI, programming, productivity, and career skills."
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>
    </PageShell>
  );
}


/*import PageShell from "@/components/PageShell";
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
*/
