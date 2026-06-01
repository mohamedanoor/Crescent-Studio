import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  { title: "One Point of Contact", body: "You work directly with the founder — not an account manager or junior staffer. Clear communication from start to finish." },
  { title: "Business-First Thinking", body: "We don't just build pretty websites. Every decision is made with your business goals in mind." },
  { title: "Transparent Pricing", body: "No hidden fees, no surprises. You know exactly what you're getting and what it costs before we start." },
  { title: "Built to Last", body: "We build with modern, maintainable technology so your site stays fast, secure, and easy to update for years." },
];

export default function WhyUs() {
  return (
    <section style={{ backgroundColor: "var(--cream-mid)", padding: "96px 24px", borderTop: "1px solid var(--border-light)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "12px" }}>
              Why Crescent Studio
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, color: "var(--navy-text)", letterSpacing: "-0.01em", lineHeight: 1.15, marginBottom: "24px" }}>
              What Makes<br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Us Different</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.85 }}>
              We&apos;re a small studio. That&apos;s intentional — it means you get our full attention, honest advice, and real accountability on every project.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gap: "0", paddingTop: "8px" }}>
            {reasons.map(({ title, body }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div style={{ padding: "24px 0", borderBottom: "1px solid var(--border-light)" }}>
                  <div style={{ display: "flex", alignItems: "start", gap: "20px" }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "13px", color: "var(--gold)", fontStyle: "italic", marginTop: "4px", flexShrink: 0 }}>
                      0{i + 1}
                    </span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "19px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "8px" }}>
                        {title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8 }}>
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
