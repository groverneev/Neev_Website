"use client";

export default function PrivacyPolicy() {
  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: 22,
    fontWeight: 700,
    color: "#fff",
    marginTop: 40,
    marginBottom: 12,
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: 16,
    lineHeight: 1.75,
    color: "#a0a6b2",
    marginBottom: 16,
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: 17,
    fontWeight: 600,
    color: "#cdd1da",
    marginBottom: 8,
    marginTop: 20,
  };

  return (
    <main style={{ background: "#0f1117", fontFamily: "Inter, sans-serif" }}>
      {/* Hero Banner */}
      <section
        style={{
          padding: "5rem 2rem 3rem",
          background: "#0f1117",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            color: "#828893",
            fontSize: 14,
            marginTop: 12,
          }}
        >
          Last updated: February 15, 2026
        </p>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 2rem 80px",
        }}
      >
        <div
          style={{
            background: "#161b27",
            borderRadius: 12,
            padding: "48px 40px",
            border: "1px solid #252d3d",
          }}
        >
          {/* Introduction */}
          <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Introduction</h2>
          <p style={paragraphStyle}>
            This Privacy Policy explains how Neev Grover (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) handles information in connection
            with the personal website located at neevgrover.com (the
            &quot;Website&quot;) and the Weather 365 iOS application (the
            &quot;App&quot;). Your privacy matters to us, and we are committed to
            being transparent about our practices.
          </p>

          {/* Information We Collect */}
          <h2 style={sectionHeadingStyle}>Information We Collect</h2>
          <h3 style={subHeadingStyle}>Website</h3>
          <p style={paragraphStyle}>
            The Website does not require you to create an account or provide any
            personal information to browse its content. If you choose to use the
            contact form, we collect the information you voluntarily submit, such
            as your name, email address, and message. This data is processed
            through Formspree, a third-party form handling service.
          </p>
          <h3 style={subHeadingStyle}>Weather 365 App</h3>
          <p style={paragraphStyle}>
            Weather 365 does not collect, store, or transmit any personal data.
            The App fetches weather data based on your device&apos;s location to
            display forecasts. Location data is used solely on-device to request
            weather information and is never sent to our servers or stored by us.
          </p>

          {/* How We Use Your Information */}
          <h2 style={sectionHeadingStyle}>How We Use Your Information</h2>
          <p style={paragraphStyle}>
            Any information you provide through the Website&apos;s contact form
            is used exclusively to respond to your inquiry. We do not use your
            information for marketing, sell it, or share it with third parties
            for their own purposes.
          </p>

          {/* Third-Party Services */}
          <h2 style={sectionHeadingStyle}>Third-Party Services</h2>
          <p style={paragraphStyle}>
            We use the following third-party services that may process limited
            data in the course of operating the Website and App:
          </p>
          <ul
            style={{
              ...paragraphStyle,
              paddingLeft: 24,
              marginBottom: 20,
            }}
          >
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "#cdd1da" }}>Formspree</strong> — Handles
              contact form submissions on the Website. Formspree may store your
              submitted data in accordance with their own privacy policy.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "#cdd1da" }}>Vercel</strong> — Hosts the
              Website. Vercel may collect standard server logs (such as IP
              addresses and access times) as part of normal web hosting
              operations.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "#cdd1da" }}>Weather Data Provider</strong>{" "}
              — Weather 365 fetches forecast data from a third-party weather
              API. Only your approximate location is sent to retrieve local
              weather information; no personally identifiable information is
              transmitted.
            </li>
          </ul>

          {/* Cookies & Tracking */}
          <h2 style={sectionHeadingStyle}>Cookies &amp; Tracking</h2>
          <p style={paragraphStyle}>
            The Website does not use cookies, tracking pixels, analytics
            services, or any other tracking technologies. The Weather 365 App
            also does not include any analytics or tracking SDKs.
          </p>

          {/* Data Retention */}
          <h2 style={sectionHeadingStyle}>Data Retention</h2>
          <p style={paragraphStyle}>
            We do not maintain our own database or servers for storing user data.
            Contact form submissions are retained by Formspree according to
            their data retention policies. We may retain copies of
            correspondence for as long as necessary to address your inquiry.
          </p>

          {/* Children's Privacy */}
          <h2 style={sectionHeadingStyle}>Children&apos;s Privacy</h2>
          <p style={paragraphStyle}>
            The Website and App are not directed at children under the age of
            13. We do not knowingly collect personal information from children.
            If you believe a child has provided us with personal information,
            please contact us and we will take steps to delete it.
          </p>

          {/* Changes to This Policy */}
          <h2 style={sectionHeadingStyle}>Changes to This Policy</h2>
          <p style={paragraphStyle}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Any changes will be posted on this page with an
            updated revision date. We encourage you to review this policy
            periodically.
          </p>

          {/* Contact Us */}
          <h2 style={sectionHeadingStyle}>Contact Us</h2>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us.
          </p>
        </div>
      </section>
    </main>
  );
}
