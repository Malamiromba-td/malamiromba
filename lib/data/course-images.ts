
const COURSE_IMAGES: Record<string, string> = {
  "AI WORKSFORCE ACCELERATOR": "Al Workforce Accelerator.jpg",
  "CYBER SECURITY WITH AI": "Cyber security.jpg",
  "DATA ANALYSIS WITH AI & POWER BI": "Data Analysis.jpg",
  "CONTENT CREATION WITH Gen AI": "Content Creation with GenAl.jpg",
  "YOUTUBE MONETIZATION": "YouTube Monetization.jpg",
  "AI AUTOMATION": "AI AUTOMATION.jpg",
  "AI LAB (LOCAL LLM, PRODUCT & AGENTS)": "Al Lab.jpg",
  "GENAI FOR ACADEMIC": "Gen Al for Academic.jpg",
  "VIBE CODING & APP BUILDING": "Vibe Coding & App Building.jpg",
  "CREATIVE AI EDUCATION": "Creative Al Education.jpg",
  "AI LITERACY": "AI LITERACY2.jpg",
  "AI LITERACY / KANO, PHYSICAL CLASS": "AI LITERACY2.jpg",
};

export function getCourseImage(title: string): string {
  const filename = COURSE_IMAGES[title.trim()];

  return filename ? `/${encodeURIComponent(filename)}` : "/malamiromba-headshot.jpg";
    }
