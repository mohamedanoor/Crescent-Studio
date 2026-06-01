import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/services-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Crescent Studio offers web design, development, SEO, graphic design, digital marketing, and website maintenance for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--navy)", paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
              What We Do
            </p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>
              Our Services
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.8 }}>
              Everything your business needs to build a strong digital presence — under one roof.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "0 24px 120px" }}>
        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 60}>
              <div style={{ borderTop: "1px solid var(--border-light)", padding: "64px 0", display: "grid", gridTemplateColumns: "64px 1fr 1fr", gap: "48px", alignItems: "start" }} className="block md:grid">
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "13px", color: "var(--gold)", fontStyle: "italic", paddingTop: "6px" }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, color: "var(--navy-text)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--gold-dark)", fontWeight: 600, letterSpacing: "0.04em", marginBottom: "20px" }}>
                    {service.tagline}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.85 }}>
                    {service.description}
                  </p>
                </div>
                <div style={{ paddingTop: "6px" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "16px" }}>
                    Includes
                  </p>
                  <ul style={{ display: "grid", gap: "10px", marginBottom: "32px" }}>
                    {service.includes.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--gold)", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "var(--navy)", color: "#fff", padding: "11px 24px", borderRadius: "6px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "13px", textDecoration: "none" }}>
                    Get a Quote
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
          <div style={{ borderTop: "1px solid var(--border-light)" }} />
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy)", padding: "80px 24px" }}>
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "rgba(255,255,255,0.65)", marginBottom: "36px", lineHeight: 1.8 }}>
            We&apos;ll help you figure out exactly what your business needs. No pressure, no jargon.
          </p>
          <Link href="/contact" style={{ display: "inline-block", backgroundColor: "var(--gold)", color: "var(--navy)", padding: "16px 40px", borderRadius: "6px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            Let&apos;s Talk
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
