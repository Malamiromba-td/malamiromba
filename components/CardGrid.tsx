"use client";

interface CardItem {
  id: string;
  label: string;
  title: string;
  href: string;
  imageUrl?: string;
  meta?: string;
  programCode?: string;
}

export default function CardGrid({ items }: { items: CardItem[] }) {
  // console.log(items);
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-lg border border-hairline p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-wide text-ochre">
            {item.label}
          </span>
          <h3 className="mt-2 font-sans text-base font-semibold leading-snug text-ink">
            {item.title}
          </h3>
          {item.meta && (
            <span className="mt-1 font-sans text-xs text-muted">
              {item.meta}
            </span>
          )}
          {item.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl || "placeholder.com"}
              alt={item.title}
              className="mt-4 aspect-video w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}
        </a>
      ))}
    </div>
  );
}
