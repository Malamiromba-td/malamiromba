const icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.05 0h9.9A7.05 7.05 0 0 1 24 7.05v9.9A7.05 7.05 0 0 1 16.95 24h-9.9A7.05 7.05 0 0 1 0 16.95v-9.9A7.05 7.05 0 0 1 7.05 0zm0 2.16A4.89 4.89 0 0 0 2.16 7.05v9.9a4.89 4.89 0 0 0 4.89 4.89h9.9a4.89 4.89 0 0 0 4.89-4.89v-9.9a4.89 4.89 0 0 0-4.89-4.89h-9.9zM12 5.84A6.16 6.16 0 1 1 5.84 12 6.16 6.16 0 0 1 12 5.84zm0 2.16a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.41-3.04a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
    </svg>
  ),

  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.4 3.6z" />
    </svg>
  ),

  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V14h2.7v8h3.1z" />
    </svg>
  ),

  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.77v13.4a2.92 2.92 0 1 1-2.92-2.92c.3 0 .59.05.86.13V8.77a6.7 6.7 0 0 0-.86-.06A6.69 6.69 0 1 0 15.82 15V8.88a8.5 8.5 0 0 0 3.77.88V6.69z" />
    </svg>
  ),

  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
    </svg>
  ),

  X: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),

  Email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3 7 9 6 9-6"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  ),
};

const socials = [
  {
    key: "Instagram",
    href: "https://instagram.com/malamiromba",
  },
  {
    key: "YouTube",
    href: "https://youtube.com/@malamiromba",
  },
  {
    key: "Facebook",
    href: "https://facebook.com/malamiromba",
  },
  {
    key: "TikTok",
    href: "https://tiktok.com/@malamiromba",
  },
  {
    key: "LinkedIn",
    href: "https://linkedin.com/in/ibrahimbaba",
  },
  {
    key: "X",
    href: "https://twitter.com/malamiromba",
  },
  {
    key: "Email",
    href: "mailto:ibrahim@malamiromba.com",
  },
  {
    key: "GitHub",
    href: "https://github.com/ibbaba",
  },
] as const;

export default function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map(({ key, href }) => (
        <a
          key={key}
          href={href}
          target={key === "Email" ? undefined : "_blank"}
          rel={key === "Email" ? undefined : "noopener noreferrer"}
          aria-label={key}
          className="flex h-[18px] w-[18px] text-ink/75 transition-all duration-200 hover:-translate-y-0.5 hover:text-ink"
        >
          {icons[key]}
        </a>
      ))}
    </div>
  );
}

// import {
//   Twitter,
//   Youtube,
//   Linkedin,
//   Github,
//   Instagram,
//   Facebook,
//   Mail,
// } from "lucide-react";

// const socials = [
//   {
//     icon: Instagram,
//     label: "Instagram",
//     href: "https://instagram.com/malamiromba",
//   },
//   {
//     icon: Youtube,
//     label: "YouTube",
//     href: "https://youtube.com/@malamiromba",
//   },
//   {
//     icon: Facebook,
//     label: "Facebook",
//     href: "https://facebook.com/malamiromba",
//   },
//   {
//     icon: "/tiktok-logo-thin-svgrepo-com.svg",
//     label: "TikTok",
//     href: "https://tiktok.com/@malamiromba",
//   },
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     href: "https://linkedin.com/in/ibrahimbaba",
//   },
//   {
//     icon: Twitter,
//     label: "X",
//     href: "https://twitter.com/malamiromba",
//   },
//   {
//     icon: Mail,
//     label: "Email",
//     href: "mailto:ibrahim@malamiromba.com",
//   },
//   {
//     icon: Github,
//     label: "GitHub",
//     href: "https://github.com/ibbaba",
//   },
// ];

// export default function SocialRow({ className = "" }: { className?: string }) {
//   return (
//     <div className={`flex gap-4 ${className}`}>
//       {socials.map(({ icon: Icon, label, href }) => (
//         <a
//           key={label}
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={label}
//           className="flex text-ink/75 transition-all duration-200 hover:text-ink hover:-translate-y-0.5"
//         >
//           {typeof Icon === "string" ? (
//             <img src={Icon} alt="" className="h-[18px] w-[18px]" />
//           ) : (
//             <Icon size={18} strokeWidth={1.75} />
//           )}
//         </a>
//       ))}
//     </div>
//   );
// }
