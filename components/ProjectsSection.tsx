"use client";

import { FaBroom, FaLeaf, FaChartBar, FaHandshake } from "react-icons/fa6";

const projects = [
  {
    href: "https://earthdayartcontest.vercel.app",
    tag: "Art + Environment",
    icon: <FaLeaf size={18} color="#8b949e" />,
    title: "Earth Day Art Contest",
    description:
      "An art competition for ages 5–17 celebrating Earth Day 2026, with prizes across two age groups. Encouraging young artists to connect creativity with environmental awareness.",
  },
  {
    href: "https://collegestatistics.org",
    tag: "Data Analytics",
    icon: <FaChartBar size={18} color="#8b949e" />,
    title: "College Statistics",
    description:
      "A data visualization dashboard comparing universities using Common Data Set metrics — acceptance rates, costs, SAT scores, financial aid, and demographics over time.",
  },
  {
    href: "https://dunebroom.com",
    tag: "Robotics + AI",
    icon: <FaBroom size={18} color="#8b949e" />,
    title: "DuneBroom",
    description:
      "An autonomous beach-cleaning robot powered by edge AI. Uses ML-based computer vision to distinguish litter from natural material and remove it without disturbing the environment.",
  },
  {
    href: "https://buddybridge.us",
    tag: "Community",
    icon: <FaHandshake size={18} color="#8b949e" />,
    title: "BuddyBridge",
    description:
      "A platform connecting elderly adults with teen and college volunteers for free, everyday task assistance — bridging generations through community service.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
        Projects
      </h2>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.25rem",
          padding: "0 1rem",
        }}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
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
                padding: "2rem",
                color: "#f9fafb",
                textAlign: "left",
                border: "1px solid #252d3d",
                cursor: "pointer",
                transition: "border-color 0.2s ease",
                height: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#374151";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#252d3d";
              }}
            >
              {/* Tag + icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
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
                  {project.tag}
                </span>
                {project.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  margin: "0 0 0.75rem 0",
                  letterSpacing: "-0.01em",
                  color: "#f9fafb",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: "0 0 1.25rem 0",
                  color: "#8b949e",
                }}
              >
                {project.description}
              </p>

              {/* CTA */}
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
                Visit
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
        ))}
      </div>
    </section>
  );
}
