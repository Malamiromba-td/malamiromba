interface ListItem {
  id: string;
  title: string;
  description: string;
  href: string;
  meta?: string;
}

export default function ContentList({ items }: { items: ListItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.id}>
          <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:py-6">
            <div className="font-display text-lg sm:min-w-[220px] sm:max-w-[220px]">
              {item.title}
            </div>
            <p className="flex-1 font-sans text-sm leading-relaxed text-muted">
              {item.description}
              {item.meta && <span className="ml-2 text-ochre">· {item.meta}</span>}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-indigo-mid underline underline-offset-[3px] transition-opacity hover:opacity-70"
            >
              Visit
            </a>
          </div>
          {i < items.length - 1 && <div className="h-px bg-hairline" />}
        </div>
      ))}
    </div>
  );
}
