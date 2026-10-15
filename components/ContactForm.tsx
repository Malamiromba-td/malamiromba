
"use client";

import { FormEvent, useState } from "react";

const topics = [
  "Consulting/Advisory",
  "Platform Sponsorship/Partnership",
  "Funding/Development Partnership",
  "Media/Speaking/Interview",
  "Collaboration Proposal",
  "Other",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message. Please try again."
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition focus:border-ochre focus:ring-1 focus:ring-ochre";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="font-sans text-sm font-medium text-ink"
          >
            Full name <span className="text-ochre">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            minLength={2}
            maxLength={100}
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="font-sans text-sm font-medium text-ink"
          >
            Email address <span className="text-ochre">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-organization"
          className="font-sans text-sm font-medium text-ink"
        >
          Organization{" "}
          <span className="text-muted">(optional)</span>
        </label>
        <input
          id="contact-organization"
          name="organization"
          type="text"
          autoComplete="organization"
          placeholder="Company or organization"
          maxLength={150}
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="font-sans text-sm font-medium text-ink"
        >
          What would you like to discuss?{" "}
          <span className="text-ochre">*</span>
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="font-sans text-sm font-medium text-ink"
        >
          Your message <span className="text-ochre">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Tell Ibrahim a little about your project, idea, or inquiry..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot field to discourage simple automated spam. */}
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-sm border p-4 font-sans text-sm leading-6 ${
            status.type === "success"
              ? "border-green-700/20 bg-green-50 text-green-800"
              : "border-red-700/20 bg-red-50 text-red-800"
          }`}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-3 bg-ink px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-indigo-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending message..." : "Send message"}
        {!isSubmitting && <span aria-hidden="true">→</span>}
      </button>

      <p className="font-sans text-xs leading-5 text-muted">
        Your details will only be used to respond to your inquiry.
      </p>
    </form>
  );
                   }
