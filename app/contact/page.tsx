import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Crescent Studio. We'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--navy)", paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Get in Touch</p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>
              Let&apos;s Work Together
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "rgba(255,255,255,0.65)", maxWidth: "520px", lineHeight: 1.8, fontWeight: 300 }}>
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "96px 24px" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16">
          <FadeIn className="md:col-span-3">
            <ContactForm />
          </FadeIn>
          <FadeIn delay={150} className="md:col-span-2">
            <div className="space-y-10">
              {[
                { label: "Email", content: <a href="mailto:mohamed@crescentstudio.co" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--navy-text)", fontWeight: 600, textDecoration: "none" }}>mohamed@crescentstudio.co</a> },
                { label: "Location", content: <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", fontWeight: 300 }}>Portland, Maine</p> },
                { label: "Response Time", content: <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", fontWeight: 300 }}>Within one business day</p> },
              ].map(({ label, content }) => (
                <div key={label}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "10px" }}>{label}</p>
                  {content}
                </div>
              ))}
              <div style={{ backgroundColor: "var(--gold-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "10px" }}>Not sure what you need?</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300 }}>
                  Just tell us about your business and what you&apos;re trying to accomplish — we&apos;ll figure out the rest together.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
