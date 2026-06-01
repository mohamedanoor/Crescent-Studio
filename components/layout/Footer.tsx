import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <svg width="20" height="20" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(-40, 14, 14)">
                <path d="M14 3A11 11 0 1 1 14 25A7.5 7.5 0 1 0 14 3Z" fill="var(--gold)"/>
              </g>
            </svg>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: 700, color: "#fff" }}>
              Crescent Studio
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "16px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "240px" }}>
            Your vision. Our craft. Real results.
          </p>
        </div>

        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "15px", fontWeight: 700, color: "var(--gold)", marginBottom: "20px" }}>
            Navigation
          </h3>
          <ul className="space-y-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "15px", fontWeight: 700, color: "var(--gold)", marginBottom: "20px" }}>
            Contact
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="mailto:mohamed@crescentstudio.co" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "block" }}>
                mohamed@crescentstudio.co
              </a>
            </li>
            <li style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>
              Portland, Maine
            </li>
            <li style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <a href="https://github.com/mohamedanoorr" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>GitHub</a>
              <a href="https://www.linkedin.com/in/mohamedanoor/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Crescent Studio. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            crescentstudio.co
          </p>
        </div>
      </div>
    </footer>
  );
}
