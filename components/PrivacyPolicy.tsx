"use client";

export default function PrivacyPolicy() {
  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 700,
    color: "#e6edf3",
    marginTop: 40,
    marginBottom: 12,
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#7d8590",
    marginBottom: 16,
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 600,
    color: "#e6edf3",
    marginBottom: 8,
    marginTop: 20,
  };

  return (
    <main style={{ background: "#080b12" }}>
      {/* Hero Banner */}
      <section
        style={{
          padding: "64px 1.5rem 48px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#e6edf3",
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            color: "#7d8590",
            fontSize: 14,
            marginTop: 10,
          }}
        >
          Last updated: February 15, 2026
        </p>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        <div
          style={{
            background: "#0d1117",
            borderRadius: 8,
            padding: "2rem",
            border: "1px solid #1c2333",
          }}
        >
          {/* App name badge */}
          <div style={{ marginBottom: 32 }}>
            <span
              style={{
                display: "inline-block",
                background: "#0d1117",
                border: "1px solid #1c2333",
                borderRadius: 6,
                padding: "4px 14px",
                fontSize: 13,
                fontWeight: 600,
                color: "#818cf8",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Dice Flipper
            </span>
          </div>

          {/* Summary */}
          <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Overview</h2>
          <p style={paragraphStyle}>
            Dice Flipper does not collect, store, transmit, or share any
            personal data. The app operates entirely on your device with no
            internet connection required.
          </p>

          {/* What we don't collect */}
          <h2 style={sectionHeadingStyle}>What We Don&apos;t Collect</h2>
          <p style={paragraphStyle}>
            Dice Flipper has absolutely none of the following:
          </p>
          <ul
            style={{
              ...paragraphStyle,
              paddingLeft: 0,
              listStyle: "none",
              display: "grid",
              gap: 10,
              marginBottom: 24,
            }}
          >
            {[
              "Analytics or usage tracking",
              "Crash reporting",
              "Advertising SDKs",
              "User accounts or login",
              "Internet connection",
              "Data collection of any kind",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#7d8590",
                  fontSize: 14,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#1a2a1a",
                    border: "1px solid #2a4a2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 11,
                    color: "#4caf72",
                    fontWeight: 700,
                  }}
                >
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Commitment */}
          <h2 style={sectionHeadingStyle}>Our Commitment</h2>
          <div
            style={{
              background: "#0e1a0e",
              border: "1px solid #1e3a1e",
              borderRadius: 8,
              padding: "20px 24px",
              marginBottom: 24,
            }}
          >
            <p
              style={{
                ...paragraphStyle,
                marginBottom: 0,
                color: "#7fc896",
              }}
            >
              Nothing you do in the app is sent anywhere. No data is collected.
              No data is shared. No data is sold. <strong>Ever.</strong>
            </p>
          </div>

          {/* Contact */}
          <h2 style={sectionHeadingStyle}>Contact</h2>
          <p style={paragraphStyle}>
            If you have any questions about this privacy policy, feel free to
            reach out: groverneev at gmail dot com
          </p>
        </div>
      </section>
    </main>
  );
}
