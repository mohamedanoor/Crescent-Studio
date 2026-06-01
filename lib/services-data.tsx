import { type ReactNode } from "react";

export interface Service {
  id: number;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  includes: string[];
  icon: ReactNode;
}

const icon = (path: ReactNode) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    {path}
  </svg>
);

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    tagline: "Fast, modern, built to last",
    summary: "Custom websites built with modern technology — fast, mobile-friendly, and designed to convert visitors into customers.",
    description: "We build professional websites from the ground up using Next.js and React — no bloated page builders, no cookie-cutter templates. Every site is designed specifically for your business, optimized for speed, and built to be easy to update and maintain long-term.",
    includes: ["Custom design", "Mobile responsive", "Fast load times", "SEO foundation", "Contact forms", "CMS integration", "Analytics setup", "Launch support"],
    icon: icon(<><rect x="3" y="3" width="18" height="18" rx="2"/><path strokeLinecap="round" d="M3 9h18M9 21V9"/></>),
  },
  {
    id: 2,
    title: "Graphic Design",
    tagline: "Visual identity that stands out",
    summary: "Logos, branding, flyers, social graphics, and more — cohesive design that makes your business look professional everywhere.",
    description: "First impressions matter. We create visual assets that represent your brand consistently across every touchpoint — from your logo to your business cards to your social media. Clean, professional design that tells your story at a glance.",
    includes: ["Logo design", "Brand identity", "Business cards", "Flyers & posters", "Social media graphics", "Email templates", "Presentation design", "Print-ready files"],
    icon: icon(<><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/></>),
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    tagline: "Get found on Google",
    summary: "Help your business show up when potential customers search for what you offer — locally and beyond.",
    description: "SEO is how people find you online. We handle the technical setup, keyword research, on-page optimization, and Google Business Profile to make sure your business appears in front of the right people at the right time.",
    includes: ["Keyword research", "On-page optimization", "Google Business Profile", "Local SEO", "Site speed optimization", "Meta tags & structure", "Monthly reporting", "Competitor analysis"],
    icon: icon(<><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z"/></>),
  },
  {
    id: 4,
    title: "Digital Marketing",
    tagline: "Reach more customers",
    summary: "Strategic digital marketing that drives real business results — email campaigns, social media, and paid advertising.",
    description: "Having a great website is just the start. We help you reach your target audience through smart digital marketing — email campaigns, social media strategy, and targeted advertising that puts your business in front of the people most likely to become customers.",
    includes: ["Email marketing", "Social media strategy", "Content creation", "Paid advertising", "Campaign management", "Audience targeting", "Performance tracking", "Monthly reports"],
    icon: icon(<><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/></>),
  },
  {
    id: 5,
    title: "Website Maintenance",
    tagline: "Keep your site running smoothly",
    summary: "Monthly maintenance plans to keep your website fast, secure, updated, and performing at its best.",
    description: "A website isn't a one-time project — it needs regular care. Our maintenance plans cover security updates, performance monitoring, content updates, backups, and technical support so you never have to worry about your site going down or falling behind.",
    includes: ["Security updates", "Performance monitoring", "Content updates", "Daily backups", "Uptime monitoring", "Technical support", "Speed optimization", "Monthly reports"],
    icon: icon(<><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></>),
  },
  {
    id: 6,
    title: "Google Business & Local Presence",
    tagline: "Own your local market",
    summary: "Get your business properly set up and optimized across Google, Maps, and local directories so customers can find you.",
    description: "For most small businesses, local visibility is everything. We set up and optimize your Google Business Profile, ensure you appear correctly on Google Maps, and get your business listed consistently across the web — so when someone nearby searches for what you do, you show up.",
    includes: ["Google Business Profile", "Google Maps optimization", "Review management", "Local citations", "NAP consistency", "Photo optimization", "Q&A management", "Competitor research"],
    icon: icon(<><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></>),
  },
];
