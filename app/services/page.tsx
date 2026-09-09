import PageShell from "@/components/PageShell";
import ServiceList from "@/components/ServiceList";

export const metadata = {
  title: "Services & Pricing | Ibrahim Malamiromba",
};

const services = [
  {
    id: "community-workshop",
    title: "AI Literacy Workshop (Community)",
    description:
      "A hands-on group session introducing AI and digital tools, taught in Hausa. Format and group size to be confirmed.",
    price: "₦XX,000",
  },
  {
    id: "corporate-training",
    title: "Corporate / Team Training",
    description:
      "Custom AI and tech literacy training for organizations and teams. Scope and duration set per engagement.",
    price: "Custom quote",
  },
  {
    id: "speaking",
    title: "Speaking Engagement",
    description:
      "Talks and keynotes on AI literacy, tech education, and building for underserved language communities.",
    price: "Custom quote",
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      title="Services & Pricing"
      intro="Placeholder services below — replace with Ibrahim's real offerings and rates before launch."
    >
      <ServiceList services={services} />
    </PageShell>
  );
}
