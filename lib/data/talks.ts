
export type TalkResource = {
  outlet: string;
  type: string;
  title: string;
  description: string;
  url: string;
  action: string;
  year: number;
  featured?: boolean;
};

export const talks: TalkResource[] = [
  {
    outlet: "NTA Hausa",
    type: "Video",
    title: "Ibrahim Malamiromba on NTA Hausa",
    description:
      "Watch Ibrahim Malamiromba's video appearance on NTA Hausa, discussing technology and its impact on society.",
    url: "https://youtu.be/buFzgR8T6JI?si=LekEuGaFTKSE3yyx",
    action: "Watch Video",
    year: 2026,
    featured: true,
  },
  {
    outlet: "BBC Hausa",
    type: "Radio / Interview",
    title: "BBC Hausa Interview",
    description:
      "Listen to Ibrahim Malamiromba's appearance on BBC Hausa.",
    url: "https://www.bbc.com/hausa/bbc_hausa_radio/w3ct77jk",
    action: "Listen / Read",
    year: 2025,
  },
  {
    outlet: "BBC Hausa",
    type: "Video",
    title: "BBC Hausa Video Interview",
    description:
      "Watch Ibrahim Malamiromba's video appearance shared by BBC Hausa.",
    url: "https://www.facebook.com/share/v/1GmdbwFPLE/",
    action: "Watch Video",
    year: 2025,
  },
  {
    outlet: "Daily Trust",
    type: "Article",
    title: "How AI-powered systems shortchange qualified job applicants",
    description:
      "An article exploring how AI-powered systems can disadvantage qualified job applicants.",
    url: "https://dailytrust.com/how-ai-powered-systems-shortchange-qualified-job-applicants/",
    action: "Read Article",
    year: 2025,
  },
  {
    outlet: "Daily Trust",
    type: "Article",
    title: "Can AI tools detect machine-generated content?",
    description:
      "An article examining AI tools and their ability to identify machine-generated content.",
    url: "https://dailytrust.com/can-ai-tools-detect-machine-generated-content/",
    action: "Read Article",
    year: 2025,
  },
  {
    outlet: "RFI Hausa",
    type: "Video",
    title: "RFI Hausa Video Appearance",
    description:
      "Watch Ibrahim Malamiromba's video appearance shared by RFI Hausa.",
    url: "https://www.facebook.com/share/v/1KAZpeerSp/",
    action: "Watch Video",
    year: 2025,
  },
];

export const featuredTalk = talks.find((talk) => talk.featured);

export const talkYears = [...new Set(talks.map((talk) => talk.year))].sort(
  (a, b) => b - a,
);
    
