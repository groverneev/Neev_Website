"use client";

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "#f5f6fa", fontFamily: "Inter, sans-serif" }}>
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0E1321",
          textAlign: "center",
          minHeight: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#fff",
            marginBottom: "3rem",
            letterSpacing: "-0.02em",
          }}
        >
          Privacy Policy
        </h1>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#fff",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            Your privacy is important to us. We do not collect any personal data
            through this website or through our Weather 360 app. We do not use
            cookies, tracking pixels, or any third-party services that collect
            data.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Any data you voluntarily provide through contact forms or email will
            be used solely for the purpose of responding to your inquiry and
            will not be shared with third parties.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            By using this website or our app, you agree to this privacy policy.
            If you have any questions or concerns about your privacy, please
            contact us.
          </p>
        </div>
      </section>
    </main>
  );
}
