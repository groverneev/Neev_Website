"use client";

import { SiSubstack } from "react-icons/si";

export default function BlogSection() {
  return (
    <section style={{ padding: "0 1.5rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#30363d",
            margin: "0 0 1rem",
          }}
        >
          Writing
        </p>

        {/* Slim card */}
        <a
          href="https://techunpacked.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              border: "1px solid #1c2333",
              borderRadius: 8,
              padding: "1.25rem 1.5rem",
              background: "#0d1117",
              cursor: "pointer",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#30363d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#1c2333")
            }
          >
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
              <SiSubstack size={16} color="#30363d" style={{ flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#e6edf3",
                    display: "block",
                  }}
                >
                  Tech Unpacked
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "#7d8590",
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Guides and deep dives on AI, robotics, and software.
                </span>
              </div>
            </div>

            {/* Right: badge + arrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#30363d",
                  border: "1px solid #1c2333",
                  borderRadius: 4,
                  padding: "0.15rem 0.5rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Newsletter
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#30363d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
