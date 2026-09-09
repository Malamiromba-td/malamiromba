import PageShell from "@/components/PageShell";

export const metadata = {
  title: "About | Ibrahim Malamiromba",
};

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-end justify-center bg-indigo-deep ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 24px)",
      }}
    >
      {/* Replace with a real next/image once photos are ready */}
      <span className="mb-4 font-sans text-xs text-cream/40">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell title="About">
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-10">
        <div className="order-2 max-w-xl space-y-6 font-sans text-base leading-relaxed text-ink sm:order-1 sm:flex-1">
          <p>
            Ibrahim Zubairu (Malamiromba) is a Nigerian tech educator and
            community builder focused on making modern technology accessible to
            Hausa-speaking communities. He has taught and guided thousands of
            learners across Northern Nigeria and beyond, helping them understand
            and use digital tools, AI, and tech skills in practical, everyday
            ways.
          </p>
          <p>
            Beyond teaching, Ibrahim advocates for AI literacy and the growth of
            technical capacity in underserved language communities. He believes
            that curiosity about technology is universal — what often stands in
            the way is access and understanding. This platform is a reflection
            of that belief: making technology clear, relatable, and usable for
            more people.
          </p>
        </div>

        <div className="order-1 flex flex-col gap-4 sm:order-2 sm:w-64 sm:shrink-0">
          <ImagePlaceholder
            label="[ portrait photo ]"
            className="aspect-[4/5] w-full"
          />
          <ImagePlaceholder
            label="[ teaching / community photo ]"
            className="aspect-[4/3] w-full"
          />
        </div>
      </div>
    </PageShell>
  );
}
