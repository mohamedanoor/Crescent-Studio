# Crescent Studio — crescentstudio.co

Agency website for Crescent Studio — a Portland, Maine based creative studio offering web design, development, graphic design, SEO, digital marketing, and website maintenance.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Cormorant Garamond / Inter** fonts. Contact form powered by **Resend**. Deployed on **Vercel**.

## Quick Start

```bash
npm install resend react-hook-form zod @hookform/resolvers clsx tailwind-merge
cp .env.local.example .env.local
# Add your Resend API key
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key from resend.com |

## Pages

- **Home** — Hero, Services preview, Why Us, Work preview, CTA
- **Services** — Full service listings
- **Work** — Project portfolio
- **About** — Studio story, values, founder profile
- **Contact** — Project inquiry form

## Adding Projects

Edit `lib/projects-data.ts` and add to the array.

## Deployment

Push to GitHub → import on Vercel → add `RESEND_API_KEY` → deploy.
