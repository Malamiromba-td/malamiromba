
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const topics = [
  "Consulting/Advisory",
  "Platform Sponsorship/Partnership",
  "Funding/Development Partnership",
  "Media/Speaking/Interview",
  "Collaboration Proposal",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Contact form email environment variables are missing.");

      return NextResponse.json(
        { error: "The contact form is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const organization =
      typeof body.organization === "string"
        ? body.organization.trim()
        : "";
    const topic = typeof body.topic === "string" ? body.topic : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const website =
      typeof body.website === "string" ? body.website.trim() : "";

    // Silently accept simple bot submissions without sending email.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !isValidEmail(email) ||
      email.length > 254 ||
      organization.length > 150 ||
      !topics.includes(topic) ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check your details and try again." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `Website inquiry: ${topic}`,
      text: [
        "You have received a new message through the website contact form.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "Not provided"}`,
        `Topic: ${topic}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Your message could not be sent. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
