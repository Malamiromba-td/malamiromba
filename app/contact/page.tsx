import PageShell from "@/components/PageShell";
import SocialRow from "@/components/SocialRow";

export const metadata = {
  title: "Contact | Ibrahim Malamiromba",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="For speaking engagements, partnerships, or press."
    >
      <div className="space-y-8">
        <a
          href="mailto:hello@malamiromba.com"
          className="inline-block font-display text-2xl text-ink underline decoration-ochre underline-offset-[6px] sm:text-3xl"
        >
          hello@malamiromba.com
        </a>
        <p className="max-w-md font-sans text-sm text-muted">
          Replace with Ibrahim&rsquo;s real contact email before launch.
        </p>
        <SocialRow />
      </div>
    </PageShell>
  );
}
