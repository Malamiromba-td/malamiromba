import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";

const displayFont = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

// const displayFont = Archivo_Black({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-display",
// });

const sansFont = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ibrahim Malamiromba",
  description:
    "Ibrahim Zubairu (Malamiromba) — Nigerian tech educator and community builder making modern technology accessible to Hausa-speaking communities.",
  icons: {
    icon: "/malamiromba-headshot.jpg",
  },
  metadataBase: new URL("https://malamiromba.com"),
  openGraph: {
    title: "Ibrahim Malamiromba",
    description:
      "Nigerian tech educator and community builder making modern technology accessible to Hausa-speaking communities.",
    url: "https://malamiromba.com",
    siteName: "Ibrahim Malamiromba",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${sansFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
