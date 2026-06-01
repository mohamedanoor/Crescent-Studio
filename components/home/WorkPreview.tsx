import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/projects-data";

export default function WorkPreview() {
  const featured = projects.slice(0, 2);

  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "96px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "56px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "12px" }}>
                Recent Work
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 700, color: "var(--navy-text)" }}>
                Selected Projects
              </h2>
            </div>
            <Link href="/work" style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, color: "var(--navy-text)", textDecoration: "none" }}>
              View all work →
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 100}>
              <div style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border-light)", borderRadius: "12px", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "var(--navy)", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ textAlign: "center", padding: "24px" }}>
                    <p style={{ fontFamily: "var(--font-heading)", fontSize: "30px", fontWeight: 700, color: "var(--gold)", marginBottom: "8px" }}>
                      {project.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {project.category}
                    </p>
                  </div>
                  {project.status && (
                    <div style={{ position: "absolute", top: "16px", right: "16px", backgroundColor: "var(--gold)", color: "var(--navy)", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}>
                      {project.status}
                    </div>
                  )}
                </div>
                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "10px" }}>
                    {project.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "20px", flex: 1, fontWeight: 300 }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ backgroundColor: "var(--gold-light)", color: "var(--gold-dark)", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", fontFamily: "var(--font-body)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-light)" }}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "var(--navy-text)", textDecoration: "none" }}>
                        Live Site →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none" }}>
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
