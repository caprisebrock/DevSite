# Day One Devs Site

Public repository for the Day One Devs marketing and portfolio website.

- Live site: `https://dev-site-gold.vercel.app`
- Brand domain: `https://dayonedevs.com`
- Primary route: `/` renders the Upwork-focused portfolio flow

## What this project is

This is a Next.js App Router application used as a portfolio hub and client-intake surface. It highlights selected case studies, explains engineering workflows, and routes qualified inquiries to pre-qualification and booking flows.

## Tech stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Cal.com embed for booking flow

## Key routes

- `/` - Upwork-focused landing page
- `/projects` - case study index
- `/projects/[slug]` - project detail pages
- `/how-we-build` - process and delivery model
- `/pricing` - packaging and FAQs
- `/book-call` - pre-qualification and booking flow

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Repository notes

- This repo includes historical planning docs from earlier phases. Current production behavior lives under `src/`.
- Case-study content and screenshots in this public repo are treated as portfolio material only; client-sensitive implementation details remain in private product repositories.

