
export type CommunityInitiative = {
  name: string;
  label: string;
  description: string;
  href?: string;
};

export const communities: CommunityInitiative[] = [
  {
    name: "TechInHausa",
    label: "Nonprofit · Technology & AI Education",
    description:
      "A nonprofit initiative making technology and AI education accessible to Hausa-speaking communities through Hausa-first learning resources and technical education.",
    href: "https://techinhausa.org",
  },
  {
    name: "Skills Arewa",
    label: "Community · Mentorship · Opportunity",
    description:
      "A growing network of more than 80,000 virtual community members, connecting people with mentors, access, and opportunities.",
  },
];
