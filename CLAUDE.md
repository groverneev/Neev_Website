# CLAUDE.md

> This file provides context for Claude Code when working on this codebase.

**IMPORTANT:** When you make major changes to this codebase (adding/removing pages, components, or dependencies; changing architecture or conventions), you MUST update this file to reflect those changes before finishing the task.

## Project Overview

Personal website for Neev Grover — live at [neevgrover.com](https://neevgrover.com). Built with Next.js (App Router) and deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Inline styles + Tailwind CSS v4 (via PostCSS plugin), Inter font from Google Fonts
- **Icons:** react-icons (FontAwesome, Simple Icons)
- **Blog:** RSS feed from Substack (`rss-parser`), server-side fetched with ISR (1h revalidation)
- **Contact form:** Formspree (`https://formspree.io/f/xnnvbrzq`)
- **Deployment:** Vercel

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

```
app/
  layout.tsx          — Root layout (Navbar + Footer wrapper)
  page.tsx            — Homepage (Hero, Blog, Projects, Contact sections)
  globals.css         — Global styles, CSS variables, Inter font import
  not-found.tsx       — Custom 404 page
  blog/page.tsx       — Blog page (server component, fetches Substack RSS)
  privacy-policy/page.tsx — Privacy policy page

components/
  Navbar.tsx          — Sticky navbar with mobile hamburger drawer
  Footer.tsx          — Footer with social links and privacy policy link
  BlogSection.tsx     — Homepage blog preview card (links to Substack)
  ProjectsSection.tsx — Homepage projects grid (Earth Day Art Contest, College Statistics, DuneBroom, BuddyBridge)
  ContactSection.tsx  — Contact form using Formspree
  PrivacyPolicy.tsx   — Privacy policy content

public/
  favicon.svg         — Site favicon
  profile.png         — Profile photo
```

## Architecture & Patterns

- **Styling approach:** Primarily inline React styles (not CSS modules or Tailwind utility classes). The dark theme uses `#0E1321` as the primary background color.
- **Client vs Server components:** Components using interactivity (`useState`, event handlers) are marked `"use client"`. The blog page (`app/blog/page.tsx`) is an async server component.
- **No API routes** — contact form submits directly to Formspree.
- **No database** — static site with ISR for blog content.

## Key URLs & Social Links

- GitHub: https://github.com/groverneev
- Substack: https://techunpacked.substack.com
- X/Twitter: https://x.com/groverneev01
- LinkedIn: https://www.linkedin.com/in/neevgrover/
- College Statistics project: https://collegestatistics.org
- DuneBroom project: https://dunebroom.com
- BuddyBridge project: https://buddybridge.us
- Earth Day Art Contest: https://earthdayartcontest.vercel.app

## Important Notes

- `ProjectsSection.tsx` shows 4 projects: Earth Day Art Contest, College Statistics, DuneBroom, BuddyBridge — each with a unique accent color and gradient.
- `BlogSection.tsx` uses an editorial hero card with Substack orange (`#ff6719`) accent and a distinct background (`#0a0e1a`) to differentiate from the Projects section.
- The blog page background color has a TODO comment: `//this needs to be changed`.
- Social links appear in both `page.tsx` (hero section) and `Footer.tsx` — keep them in sync when updating.

## When Making Major Changes

After significant updates to the codebase (new pages, new components, dependency changes, architectural changes), update this CLAUDE.md file to reflect the current state. Specifically update:
- The **Project Structure** section if files are added/removed/renamed
- The **Tech Stack** section if dependencies change
- The **Architecture & Patterns** section if conventions change
- The **Important Notes** section for any new caveats or TODOs
