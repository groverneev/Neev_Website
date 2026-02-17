"use client";

import { SiSubstack } from "react-icons/si";

export default function BlogSection() {
  return (
    <section
      id="blog"
      style={{
        padding: "6rem 2rem",
        background: "#0a0e1a",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#fff",
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
              background:
                "linear-gradient(135deg, #0f0a00 0%, #1a1005 50%, #0f1520 100%)",
              borderRadius: "20px",
              padding: "3rem",
              color: "#fff",
              textAlign: "left",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(255, 103, 25, 0.08)",
              border: "1px solid rgba(255, 103, 25, 0.2)",
              borderTop: "4px solid #ff6719",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(255, 103, 25, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(255, 103, 25, 0.08)";
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(255, 103, 25, 0.12) 0%, transparent 70%)",
                zIndex: 0,
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Top row: icon + newsletter tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255, 103, 25, 0.15)",
                      borderRadius: "12px",
                      padding: "0.6rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SiSubstack size={28} color="#ff6719" />
                  </div>
                  <h3
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Tech Unpacked
                  </h3>
                </div>

                {/* Newsletter tag */}
                <span
                  style={{
                    background: "rgba(255, 103, 25, 0.15)",
                    border: "1px solid rgba(255, 103, 25, 0.4)",
                    color: "#ff6719",
                    borderRadius: "999px",
                    padding: "0.3rem 0.9rem",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Newsletter
                </span>
              </div>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  margin: 0,
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "680px",
                }}
              >
                Guides, deep dives, and explainers on the latest in technology —
                from AI and robotics to software and beyond.
              </p>

              {/* CTA button */}
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#ff6719",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 15,
                    borderRadius: "10px",
                    padding: "0.65rem 1.4rem",
                    marginTop: "0.5rem",
                    transition: "background 0.2s ease",
                  }}
                >
                  Read on Substack
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
