import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/services-data";

export default function ServicesPreview() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "96px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "56px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "12px" }}>
                What We Offer
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 700, color: "var(--navy-text)" }}>
                Our Services
              </h2>
            </div>
            <Link href="/services" style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, color: "var(--navy-text)", textDecoration: "none" }}>
              View all services →
            </Link>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gap: "0" }}>
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 60}>
              <div style={{ display: "grid", gridTemplateColumns: "48px 1fr auto", alignItems: "center", gap: "28px", padding: "24px 0", borderBottom: "1px solid var(--border-light)" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "13px", color: "var(--gold-dark)", fontWeight: 400, fontStyle: "italic" }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700, color: "var(--navy-text)", marginBottom: "4px" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)" }}>
                    {service.tagline}
                  </p>
                </div>
                <div style={{ width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-dark)" }}>
                  {service.icon}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
