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
        headers: {
          "Content-Type": "application/json",
        },
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0E1321",
        padding: "4rem 1rem 5rem",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2
          style={{
            fontWeight: 700,
            fontSize: 36,
            marginBottom: 8,
            letterSpacing: "-0.03em",
            color: "#fff",
          }}
        >
          Contact
        </h2>
        <p
          style={{
            color: "#828893",
            fontSize: 18,
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          Have any questions or suggestions? Get in touch!
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#151a2b",
            border: "1px solid #1a2035",
            borderRadius: 12,
            padding: "2rem",
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 24,
              marginTop: 0,
            }}
          >
            Send a Message
          </h3>

          {status === "success" ? (
            <div
              style={{
                background: "#1a2035",
                border: "1px solid #1a2035",
                borderRadius: 8,
                padding: "1.5rem 1rem",
                textAlign: "center",
              }}
            >
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#22c55e"
                viewBox="0 0 24 24"
                style={{ margin: "0 auto 12px auto", display: "block" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p
                style={{
                  fontWeight: 600,
                  marginBottom: 4,
                  color: "#fff",
                }}
              >
                Message sent!
              </p>
              <p style={{ fontSize: 14, color: "#828893" }}>
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{
                  marginTop: 16,
                  background: "none",
                  border: "none",
                  color: "#2563eb",
                  textDecoration: "underline",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#a0a6b2",
                    marginBottom: 4,
                  }}
                >
                  Name
                </label>
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
                <label
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#a0a6b2",
                    marginBottom: 4,
                  }}
                >
                  Email
                </label>
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
                <label
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#a0a6b2",
                    marginBottom: 4,
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
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
                    padding: "12px 16px",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                >
                  Something went wrong. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 16,
                  padding: "12px 16px",
                  borderRadius: 8,
                  border: "none",
                  cursor:
                    status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                  transition: "opacity 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {status === "loading" && (
                  <svg
                    width="16"
                    height="16"
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

      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #1a2035",
  background: "#1a2035",
  color: "#f3f4f6",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};
