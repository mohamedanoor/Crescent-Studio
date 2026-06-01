"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: scrolled ? "rgba(13,27,46,0.97)" : "var(--navy)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      transition: "all 0.3s ease"
    }}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <path d="M10 2a8 8 0 1 0 8 8 1.5 1.5 0 0 1-8-8z" fill="var(--gold)"/>
  </svg>
  <span style={{ fontFamily: "var(--font-heading)", fontSize: "19px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
    Crescent Studio
  </span>
</Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400,
                color: pathname === href ? "var(--gold)" : "rgba(255,255,255,0.6)",
                textDecoration: "none", transition: "color 0.2s"
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <Link href="/contact" className="hidden md:inline-flex" style={{
          backgroundColor: "var(--gold)", color: "var(--navy)",
          padding: "10px 24px", borderRadius: "6px",
          fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "13px",
          textDecoration: "none", letterSpacing: "0.03em"
        }}>
          Start a Project
        </Link>

        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]" style={{ color: "#fff" }} onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
          <span className={clsx("block w-5 h-0.5 bg-current transition-all duration-300", mobileOpen && "rotate-45 translate-y-[6px]")} />
          <span className={clsx("block w-5 h-0.5 bg-current transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={clsx("block w-5 h-0.5 bg-current transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[6px]")} />
        </button>
      </nav>

      <div className={clsx("md:hidden overflow-hidden transition-all duration-300", mobileOpen ? "max-h-96" : "max-h-0")} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "var(--navy)" }}>
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, color: pathname === href ? "var(--gold)" : "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ padding: "8px 24px 20px" }}>
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ display: "block", textAlign: "center", backgroundColor: "var(--gold)", color: "var(--navy)", padding: "14px", borderRadius: "6px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
