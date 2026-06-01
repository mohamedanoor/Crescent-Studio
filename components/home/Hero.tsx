import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "var(--navy)", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 96px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "-120px", right: "-120px", width: "500px", height: "500px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", top: "-60px", right: "-60px", width: "380px", height: "380px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)", pointerEvents: "none" }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "var(--gold)" }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>
                Portland, Maine
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "28px"
            }}>
              Your<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>Vision.</em><br />
              Our Craft.<br />
              <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>Real Results.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: "40px", maxWidth: "440px", fontWeight: 300 }}>
              Crescent Studio helps small businesses grow with professional web design, development, graphic design, SEO, and digital marketing.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "56px" }}>
              <Link href="/contact" style={{
                backgroundColor: "var(--gold)", color: "var(--navy)",
                padding: "15px 36px", borderRadius: "6px",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px",
                textDecoration: "none", letterSpacing: "0.03em"
              }}>
                Start a Project
              </Link>
              <Link href="/work" style={{
                border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)",
                padding: "15px 36px", borderRadius: "6px",
                fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px",
                textDecoration: "none"
              }}>
                View Our Work
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { number: "3+", label: "Projects Delivered" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "3", label: "Languages" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "26px", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{number}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "6px", fontWeight: 300 }}>{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Crescent visual */}
        <FadeIn delay={200} className="hidden md:flex items-center justify-center">
          <div style={{ position: "relative", width: "380px", height: "380px" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)" }} />
            <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.18)" }} />
            <div style={{ position: "absolute", inset: "80px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.28)" }} />
            <div style={{ position: "absolute", inset: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="110" height="110" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M60 15a45 45 0 1 0 45 45 8.4 8.4 0 0 1-45-45z" fill="var(--gold)" opacity="0.85"/>
</svg>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
