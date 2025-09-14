"use client";

export default function BlogSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        background: "#0E1321",
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
        Blogs
      </h2>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          padding: "0 1rem",
        }}
      >
        {/* DuneBroom Project */}
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
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: "20px",
              padding: "2.5rem",
              color: "#fff",
              textAlign: "left",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(15, 23, 42, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(15, 23, 42, 0.2)";
            }}
          >
            {/* Background Pattern */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                opacity: 0.3,
                zIndex: 0,
              }}
            />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Tech Unpacked
                </h3>
              </div>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.9,
                  maxWidth: "100%",
                }}
              >
                Want to understand the latest in technology? Read my blog for
                guides, tips, and deep dives into all things tech!
              </p>

              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  opacity: 0.8,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <span>Read my Blogs</span>
                <svg
                  width="16"
                  height="16"
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
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
