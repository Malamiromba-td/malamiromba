"use client";

import SocialRow from "./SocialRow";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
  // { label: "Contact", href: "/contact" },
  { label: "Courses", href: "/courses" },
  { label: "Press Assets", href: "/press-asset" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Talks", href: "/talks" },
  // { label: "Ventures", href: "/ventures" },
  { label: "Videos", href: "/videos" },
];

export default function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-cream px-6 py-8 sm:px-10 sm:py-8
        transition-all duration-[400ms] ease-overlay
        ${open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-2xl text-ink transition-transform duration-200 hover:rotate-90"
        >
          ×
        </button>
        <div className="h-14 w-14 rounded-full border-2 border-dashed border-ochre p-1">
          <img
            src="/malamiromba-headshot.jpg"
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
          {/* <div className="h-full w-full rounded-full bg-indigo-mid" /> */}
        </div>
      </div>

      <nav className="self-end text-right">
        {navLinks.map((link) => (
          <div key={link.label} className="my-2.5">
            <a
              href={link.href}
              className="group relative font-sans text-xl text-ink sm:text-2xl"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-right scale-x-100 bg-hairline transition-colors duration-300 group-hover:bg-ochre" />
            </a>
          </div>
        ))}
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="grid grid-cols-10 gap-1 opacity-35">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full border border-indigo-mid"
            />
          ))}
        </div>
        <SocialRow />
      </div>
    </div>
  );
}
