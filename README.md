# Ibrahim Malamiromba — Personal Site

Personal brand hub for Ibrahim Zubairu ("Malamiromba"), replacing the current
redirect from malamiromba.com into TechInHausa. Built to the scope in the
project proposal (Malamiromba Personal Site).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's here

- `app/layout.tsx` — fonts (Archivo Black for the display wordmark, Inter for
  body text) and page metadata.
- `app/page.tsx` — homepage entry point.
- `components/Hero.tsx` — the 50/50 split-screen hero: bio + social row on the
  left, full-bleed portrait placeholder on the right. Stacks full-width on
  mobile (content first, portrait below), per the responsive requirement.
- `components/NavOverlay.tsx` — the full-screen nav menu, triggered by the
  hamburger button in the hero. Slides down/fades in — the one deliberate
  motion moment on the page.
- `components/SocialRow.tsx` — shared social icon row (X, YouTube, LinkedIn,
  GitHub, Instagram) used in both the hero and the nav overlay.
- `tailwind.config.ts` — the project's color tokens (`indigo-deep`,
  `indigo-mid`, `ochre`, `cream`, `ink`, `muted`, `hairline`).

## Still placeholder / not yet wired up

- **Portrait photo** — swap the placeholder block in `Hero.tsx` for a real
  `next/image` once Ibrahim's photo is ready.
- **About, Ventures, Blog, Videos, Talks, Contact** — the nav links to these
  currently point at in-page anchors or external placeholders. These become
  real pages/sections in the next build pass.
- **TathSchool video + TechInHausa blog integration** — per the proposal,
  this is the lightweight API layer that pulls the latest video from the
  TathSchool DB and the latest post from TechInHausa. Not started yet.
- **Newsletter signup** — not yet added to this pass; can slot into the
  footer once ventures/about are built out.

## Deploying

Designed for Vercel (per the proposal). Connect the repo and it deploys with
no extra config — `next/font` needs outbound access to Google Fonts at build
time, which Vercel's build environment has by default.
