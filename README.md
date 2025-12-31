# Tim Miller Recruiting Landing Page

Modern, lead-focused marketing site for Tim Miller Recruiting. Built with Next.js 16, TypeScript, and Tailwind CSS 4 to showcase services, proof points, and contact funnels for fleet operators and logistics hiring teams.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion for micro-interactions
- Optional integrations: GA4, Meta Pixel, Calendly, Formspree/Resend

## Getting Started
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

Lint the project:
```bash
npm run lint
```

## Environment Variables
Create a `.env.local` file to enable analytics or form delivery.

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890
FORMSPREE_ENDPOINT=https://formspree.io/f/example
RESEND_API_KEY=your_resend_api_key
EMAIL_TO=contact@timmillerrecruiting.com
```

Only the GA and Meta IDs are optional; form variables will be wired in the contact form implementation step.

## Project Structure
```
src/
  app/
    api/og/route.tsx     # Dynamic Open Graph image
    layout.tsx           # Global metadata, fonts, analytics
    page.tsx             # Landing page composition
    robots.ts, sitemap.ts
  components/            # Reusable UI + sectional components
  data/site.ts           # Centralized marketing content
public/
  logo-horizontal.svg
  logo-mark.svg
```

## Content & Branding
- Colors: Navy `#0A2540`, Sky `#2E8BFF`, Gray `#F5F6FA`, Charcoal `#2C2C2C`, Lime accent `#A3E635`.
- Typography: Poppins for headings, Inter for body, optional Playfair accents.
- Brand reference: `docs/brand-style.md`.

## Next Steps
- Hook up the contact form with validation and email delivery.
- Add CMS or data hooks if content needs to be editable by non-technical users.
- Configure deployment (Vercel/Netlify) with environment secrets once ready.
