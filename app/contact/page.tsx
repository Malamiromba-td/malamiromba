
import PageShell from "@/components/PageShell";
import SocialRow from "@/components/SocialRow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Ibrahim Malamiromba",
  description:
    "Contact Ibrahim Malamiromba for consulting, partnerships, speaking engagements, and digital creation.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Get in touch"
      intro="For speaking engagements, partnerships, consulting, or creative projects. Tell me what you're working on."
    >
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Email
          </p>

          <a
            href="mailto:hello@malamiromba.com"
            className="inline-block break-all font-display text-2xl font-bold text-ink underline decoration-ochre underline-offset-[6px] transition-opacity hover:opacity-70 sm:text-3xl"
          >
            hello@malamiromba.com
          </a>
        </div>

        <div className="border-t border-hairline pt-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Contact form
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            What would you like to discuss?
          </h2>

          <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-muted">
            Complete the form below and your message will be sent
            directly to Ibrahim&rsquo;s inbox.
          </p>

          <div className="mt-8 rounded-sm border border-hairline bg-white p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>

        <div className="border-t border-hairline pt-8">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Find me online
          </p>
          <SocialRow />
        </div>
      </div>
    </PageShell>
  );
      }

/*
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
*/
