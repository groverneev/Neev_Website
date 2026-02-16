"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "https://techunpacked.substack.com", label: "Blog", external: true },
  { href: "/#projects", label: "Projects", external: false },
  { href: "/#contact", label: "Contact", external: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo/title */}
          <a
            href="/"
            style={{
              fontWeight: 800,
              fontSize: 28,
              color: "#111",
              textDecoration: "none",
            }}
          >
            Neev Grover
          </a>

          {/* Desktop nav links */}
          <ul
            className="navbar-desktop"
            style={{
              listStyle: "none",
              display: "flex",
              gap: 32,
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  style={{
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 18,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger / close button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              padding: 8,
              borderRadius: 6,
              background: "none",
              border: "none",
              color: "#111",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            className="navbar-mobile-menu"
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: 16,
              paddingBottom: 16,
              display: "none",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 16,
                    padding: "8px 8px",
                    borderRadius: 6,
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f5f6fa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-mobile-toggle {
            display: flex !important;
          }
          .navbar-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
