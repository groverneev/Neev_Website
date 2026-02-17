"use client";

import { SiSubstack } from "react-icons/si";

export default function BlogSection() {
  return (
    <section
      id="blog"
      style={{
        padding: "6rem 2rem",
        background: "#0f1117",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#f9fafb",
          marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}
      >
        Blog
      </h2>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <a
          href="https://techunpacked.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <div
            style={{
              background: "#161b27",
              borderRadius: "12px",
              padding: "2.5rem",
              color: "#f9fafb",
              textAlign: "left",
              border: "1px solid #252d3d",
              cursor: "pointer",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#374151";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#252d3d";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <SiSubstack size={22} color="#8b949e" />
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: "-0.02em",
                    color: "#f9fafb",
                  }}
                >
                  Tech Unpacked
                </h3>
              </div>

              <span
                style={{
                  background: "#1e2433",
                  color: "#8b949e",
                  borderRadius: "6px",
                  padding: "0.2rem 0.65rem",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}
              >
                Newsletter
              </span>
            </div>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                margin: "0 0 1.25rem 0",
                color: "#8b949e",
                maxWidth: "640px",
              }}
            >
              Guides, deep dives, and explainers on the latest in technology —
              from AI and robotics to software and beyond.
            </p>

            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#f9fafb",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              Read on Substack
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
