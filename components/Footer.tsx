"use client";

export default function Footer() {
  const quickLinks = [
    { href: "https://techunpacked.substack.com", label: "Blog", external: true },
    { href: "/#projects", label: "Projects", external: false },
    { href: "/#contact", label: "Contact", external: false },
    { href: "/privacy-policy", label: "Privacy Policy", external: false },
  ];

  const socialLinks = [
    {
      href: "https://x.com/groverneev01",
      label: "Twitter",
      icon: (
        <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/groverneev",
      label: "GitHub",
      icon: (
        <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: "https://techunpacked.substack.com",
      label: "Substack",
      icon: (
        <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/neevgrover/",
      label: "LinkedIn",
      icon: (
        <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{
        background: "#0f1117",
        borderTop: "1px solid #252d3d",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
          }}
          className="footer-grid"
        >
          {/* Site Info */}
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 8,
                color: "#fff",
              }}
            >
              Neev Grover
            </h3>
            <p
              style={{
                color: "#828893",
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Student, developer, and chess player exploring the intersection of
              computer science and real-world problem solving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#828893",
                marginBottom: 16,
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                justifyContent: "start",
                gap: "8px 32px",
              }}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{
                    color: "#a0a6b2",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a0a6b2")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#828893",
                marginBottom: 16,
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: 16 }}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    color: "#828893",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#828893")
                  }
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p
              style={{
                color: "#828893",
                fontSize: 14,
                marginTop: 16,
              }}
            >
              groverneev at gmail dot com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #252d3d",
            marginTop: 32,
            paddingTop: 32,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p style={{ color: "#828893", fontSize: 14, margin: 0 }}>
            &copy; {new Date().getFullYear()} Neev Grover. All rights reserved.
          </p>
          <p
            style={{
              color: "#828893",
              fontSize: 12,
              margin: 0,
              opacity: 0.7,
            }}
          >
            Crafted with curiosity and too much caffeine.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
