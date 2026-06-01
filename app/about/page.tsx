import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Crescent Studio is a Portland, Maine based creative studio founded by Mohamed Noor.",
};

const values = [
  { title: "Dedication", body: "We treat every project like it's our own business. Full attention, full effort, every time." },
  { title: "Honesty", body: "No jargon, no inflated timelines, no surprise costs. You always know exactly where things stand." },
  { title: "Excellence", body: "Good enough is never enough. We hold ourselves to a high standard in everything we deliver." },
  { title: "Partnership", body: "We're not just vendors — we're invested in your success. When you grow, we grow." },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--navy)", paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Our Story</p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>About Crescent Studio</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.8, fontWeight: 300 }}>
              A Portland, Maine based creative studio built on dedication, honesty, and a genuine desire to help small businesses thrive.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "96px 24px" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--navy-text)", marginBottom: "24px", lineHeight: 1.2 }}>
              Built on Real <em style={{ fontStyle: "italic", fontWeight: 400 }}>Experience</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "18px", fontWeight: 300 }}>
              Crescent Studio was founded by Mohamed Noor — a General Manager, software engineer, and web developer based in Portland, Maine. With a background spanning healthcare operations, financial services, and software engineering, Mohamed brings a rare combination of business acumen and technical skill to every project.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "18px", fontWeight: 300 }}>
              The studio was born from a simple observation: most small businesses deserve a strong digital presence but don&apos;t have access to the right expertise or a team they can genuinely trust to deliver it.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.85, fontWeight: 300 }}>
              Crescent Studio exists to change that — offering professional web design, development, marketing, and creative services that are honest, affordable, and built to last.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div style={{ backgroundColor: "var(--navy)", borderRadius: "16px", padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              {[
                { number: "2+", label: "Years Experience" },
                { number: "3+", label: "Projects Delivered" },
                { number: "3", label: "Languages Spoken" },
                { number: "100%", label: "Client Focused" },
              ].map(({ number, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "40px", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{number}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "8px", fontWeight: 300 }}>{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream-mid)", padding: "96px 24px", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn style={{ marginBottom: "56px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--navy-text)" }}>What We Stand For</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ title, body }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border-light)", borderRadius: "12px", padding: "36px" }}>
                  <div style={{ width: "36px", height: "3px", backgroundColor: "var(--gold)", borderRadius: "2px", marginBottom: "20px" }} />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "12px" }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300 }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "96px 24px" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "16px" }}>The Founder</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 700, color: "var(--navy-text)", marginBottom: "24px", lineHeight: 1.15 }}>Mohamed Noor</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "18px", fontWeight: 300 }}>
              Mohamed holds dual degrees in Computer Science and Political Science from the University of Southern Maine. He currently serves as General Manager of Holding Care, LLC while building Crescent Studio into a full-service creative agency.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "36px", fontWeight: 300 }}>
              Trilingual in English, Arabic, and Somali, Mohamed brings a unique perspective to every project — combining technical expertise with cultural awareness and a deep commitment to doing things right.
            </p>
            <Link href="/contact" style={{ display: "inline-block", backgroundColor: "var(--navy)", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Work With Us
            </Link>
          </FadeIn>
          <FadeIn delay={150}>
            <div style={{ backgroundColor: "var(--gold-light)", border: "1px solid var(--border)", padding: "48px", borderRadius: "12px" }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "64px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "12px" }}>MN</p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "4px" }}>Mohamed Noor</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--gold-dark)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "24px" }}>Founder & Lead Developer</p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "grid", gap: "16px" }}>
                {[
                  { label: "Education", value: "B.S. Computer Science & B.A. Political Science — USM" },
                  { label: "Location", value: "Portland, Maine" },
                  { label: "Languages", value: "English, Arabic, Somali" },
                  { label: "Also Running", value: "Holding Care, LLC" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "4px" }}>{label}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 300 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
