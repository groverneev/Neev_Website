"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xnnvbrzq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" style={{ padding: "0 1.5rem", scrollMarginTop: "72px" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#30363d",
            margin: "0 0 0.75rem",
          }}
        >
          Contact
        </p>

        <p
          style={{
            fontSize: 14,
            color: "#7d8590",
            margin: "0 0 2rem",
            lineHeight: 1.5,
          }}
        >
          Have a question or want to chat? Drop me a line.
        </p>

        {status === "success" ? (
          <div
            style={{
              border: "1px solid #1c2333",
              borderRadius: 8,
              padding: "1.5rem",
              textAlign: "center",
              background: "#0d1117",
            }}
          >
            <svg
              width="40"
              height="40"
              fill="none"
              stroke="#22c55e"
              viewBox="0 0 24 24"
              style={{ margin: "0 auto 10px", display: "block" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p style={{ fontWeight: 600, marginBottom: 4, color: "#e6edf3", fontSize: 14 }}>
              Message sent!
            </p>
            <p style={{ fontSize: 13, color: "#7d8590", margin: "0 0 12px" }}>
              I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              style={{
                background: "none",
                border: "none",
                color: "#818cf8",
                textDecoration: "underline",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <div
                style={{
                  background: "#2a1215",
                  border: "1px solid #5c1d1d",
                  color: "#f87171",
                  padding: "10px 14px",
                  borderRadius: 6,
                  fontSize: 13,
                }}
              >
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                background: "#818cf8",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 16px",
                borderRadius: 6,
                border: "none",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                transition: "opacity 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {status === "loading" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  style={{ animation: "spin 1s linear infinite" }}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              )}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14,
  fontWeight: 500,
  color: "#7d8590",
  marginBottom: 4,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 6,
  border: "1px solid #1c2333",
  background: "#0d1117",
  color: "#e6edf3",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};
