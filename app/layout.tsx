import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Crescent Studio — Web Design, Development & Marketing",
    template: "%s | Crescent Studio",
  },
  description:
    "Crescent Studio helps small businesses grow with professional web design, development, SEO, graphic design, and digital marketing. Based in Portland, Maine.",
  openGraph: {
    title: "Crescent Studio",
    description: "Your vision. Our craft. Real results.",
    url: "https://crescentstudio.co",
    siteName: "Crescent Studio",
    locale: "en_US",
    type: "website",
  },
};

const themeScript = `
  try {
    var stored = localStorage.getItem('cs-theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
