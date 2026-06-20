# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build
npm run lint      # ESLint check
npm run start     # Start production server
```

There are no tests in this project.

## Architecture

Single-page Next.js 15 (App Router) portfolio site for actor Guransh Brar. The entire site is one route (`src/app/page.js`) composed of stacked sections rendered top-to-bottom.

**Component hierarchy:**

- `src/app/layout.js` — root layout; mounts Google Analytics (`atoms/GoogleAnalytics`), Vercel Analytics, and Vercel Speed Insights
- `src/app/page.js` — composes all sections: Header → Hero → About → Gallery → SocialMedia → Contact, each section (except Hero/Header) wrapped in `FadeInSection`
- `src/components/cards/` — full-width page sections (Hero, About, Gallery, Contact, FadeInSection)
- `src/components/molecules/` — multi-element components used inside sections (Header, SocialMedia)
- `src/components/atoms/` — primitives (Button, Card, GoogleAnalytics)

**Key design decisions:**

- `FadeInSection` uses `IntersectionObserver` (5% threshold) to fade-in sections on scroll — wrap any new section in it
- `Header` collapses on scroll: hides the name text and centers the logo once `window.scrollY > 0`
- Contact form uses EmailJS (hardcoded service/template/public key in `Contact.js`) — no backend needed
- Tailwind v4 is configured via PostCSS (`@import "tailwindcss"` in globals.css, no `tailwind.config.js`)
- Path alias `@/` maps to `src/` (configured in `jsconfig.json`)
- Google Analytics ID: `G-RRLLCP569G` (initialized in both `layout.js` script tag and `GoogleAnalytics` client component — the client component is the active one)
- All images live in `public/` and are served statically; hero/gallery images are named `Guransh-*.jpg`

## Session Handoff

At the end of every session, write a file to `handoff/<short-session-name>.md` using a kebab-case name that describes what the session was about (e.g. `dark-dramatic-redesign.md`, `gallery-lightbox.md`). Include the date inside the file. The file should cover:

- **Branch** — current branch name
- **What Was Done** — summary of changes made this session, with file names
- **Key design decisions** — anything non-obvious that future Claude should know
- **Current State** — does the build pass, any known issues
- **Pending / Next Steps** — unfinished work or things the user mentioned wanting next

Read the most recent file in `handoff/` at the start of each session to restore context from the previous session.
