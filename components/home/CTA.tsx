import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section style={{ backgroundColor: "var(--navy)", padding: "120px 24px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.07)", pointerEvents: "none" }} />
      <FadeIn className="max-w-3xl mx-auto text-center" style={{ position: "relative" }}>
        <svg width="36" height="36" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto 24px" }}>
          <g transform="rotate(-40, 14, 14)">
            <path d="M14 3A11 11 0 1 1 14 25A7.5 7.5 0 1 0 14 3Z" fill="var(--gold)" opacity="0.6"/>
          </g>
        </svg>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "20px" }}>
          Ready to Build Something Great?
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300 }}>
          Let&apos;s talk about your project. No pressure, no jargon — just an honest conversation about what you need.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
          <Link href="/contact" style={{ backgroundColor: "var(--gold)", color: "var(--navy)", padding: "16px 40px", borderRadius: "6px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", textDecoration: "none", letterSpacing: "0.03em" }}>
            Get in Touch
          </Link>
          <Link href="/services" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "16px 40px", borderRadius: "6px", fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", textDecoration: "none" }}>
            See Our Services
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
