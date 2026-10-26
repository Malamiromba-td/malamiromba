import Link from "next/link";

export default function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-cream px-6 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-between">
          <Link
            href="/"
            className="font-sans text-sm text-muted underline underline-offset-[3px] transition-opacity hover:opacity-70"
          >
          ← Back home
        </Link>
        <div className="h-14 w-14 rounded-full border-2 border-dashed border-ochre p-1">
            <img
              src="/malamiromba-headshot.jpg"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
            {/* <div className="h-full w-full rounded-full bg-indigo-mid" /> */}
          </div>
      </div>

        <h1 className="mt-8 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink">
            {intro}
          </p>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}
