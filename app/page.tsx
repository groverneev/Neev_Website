"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const iconStyle: React.CSSProperties = {
  color: "#30363d",
  transition: "color 0.15s",
  display: "flex",
};

export default function Home() {
  return (
    <main style={{ background: "#080b12" }}>
      {/* ───────── HERO ───────── */}
      <section
        id="hero"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "96px 1.5rem 80px",
        }}
      >
        <Image
          src="/profile.png"
          alt="Neev Grover"
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            display: "block",
          }}
        />

        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#e6edf3",
            margin: "14px 0 6px",
          }}
        >
          Neev Grover
        </h1>

        <p
          style={{
            fontSize: 16,
            color: "#7d8590",
            margin: "0 0 10px",
            fontWeight: 400,
          }}
        >
          Sophomore at Harker School · building things I care about
        </p>

        <p
          style={{
            fontSize: 15,
            color: "#7d8590",
            maxWidth: 460,
            margin: "0 auto 28px",
            lineHeight: 1.65,
          }}
        >
          I&apos;m passionate about computer science, chess, and the environment.
          I build projects that sit at the intersection of all three.
        </p>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a
            href="https://x.com/groverneev01"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e6edf3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#30363d")}
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://github.com/groverneev"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e6edf3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#30363d")}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://techunpacked.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e6edf3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#30363d")}
          >
            <SiSubstack size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/neevgrover/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e6edf3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#30363d")}
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </section>

      {/* ───────── SECTIONS ───────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          paddingBottom: "7rem",
        }}
      >
        <BlogSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
