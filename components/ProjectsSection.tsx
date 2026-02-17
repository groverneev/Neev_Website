"use client";

import { FaBroom, FaLeaf, FaChartBar, FaHandshake } from "react-icons/fa6";

const projects = [
  {
    href: "https://earthdayartcontest.vercel.app",
    accent: "#22c55e",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 100%)",
    shadowColor: "rgba(34, 197, 94, 0.12)",
    shadowHoverColor: "rgba(34, 197, 94, 0.22)",
    tag: "Art + Environment",
    icon: <FaLeaf size={22} color="#22c55e" />,
    title: "Earth Day Art Contest",
    description:
      "An art competition for ages 5–17 celebrating Earth Day 2026, with prizes across two age groups. Encouraging young artists to connect creativity with environmental awareness.",
    cta: "Visit →",
  },
  {
    href: "https://collegestatistics.org",
    accent: "#3b82f6",
    gradient: "linear-gradient(135deg, #0c1a3a 0%, #1e3a5f 100%)",
    shadowColor: "rgba(59, 130, 246, 0.12)",
    shadowHoverColor: "rgba(59, 130, 246, 0.22)",
    tag: "Data Analytics",
    icon: <FaChartBar size={22} color="#3b82f6" />,
    title: "College Statistics",
    description:
      "A data visualization dashboard comparing universities using Common Data Set metrics — acceptance rates, costs, SAT scores, financial aid, and demographics over time.",
    cta: "Visit →",
  },
  {
    href: "https://dunebroom.com",
    accent: "#f59e0b",
    gradient: "linear-gradient(135deg, #1c1203 0%, #2d1f05 100%)",
    shadowColor: "rgba(245, 158, 11, 0.12)",
    shadowHoverColor: "rgba(245, 158, 11, 0.22)",
    tag: "Robotics + AI",
    icon: <FaBroom size={22} color="#f59e0b" />,
    title: "DuneBroom",
    description:
      "An autonomous beach-cleaning robot powered by edge AI. Uses ML-based computer vision to distinguish litter from natural material and remove it without disturbing the environment.",
    cta: "Visit →",
  },
  {
    href: "https://buddybridge.us",
    accent: "#8b5cf6",
    gradient: "linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 100%)",
    shadowColor: "rgba(139, 92, 246, 0.12)",
    shadowHoverColor: "rgba(139, 92, 246, 0.22)",
    tag: "Community",
    icon: <FaHandshake size={22} color="#8b5cf6" />,
    title: "BuddyBridge",
    description:
      "A platform connecting elderly adults with teen and college volunteers for free, everyday task assistance — bridging generations through community service.",
    cta: "Visit →",
  },
];

export default function ProjectsSection() {
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
        Projects
      </h2>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
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
                background: project.gradient,
                borderRadius: "20px",
                padding: "2.5rem",
                color: "#fff",
                textAlign: "left",
                transition: "all 0.3s ease",
                boxShadow: `0 10px 30px ${project.shadowColor}`,
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderTop: `4px solid ${project.accent}`,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                height: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${project.shadowHoverColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 10px 30px ${project.shadowColor}`;
              }}
            >
              {/* Subtle glow in corner */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle, ${project.accent}22 0%, transparent 70%)`,
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Tag + icon row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      background: `${project.accent}22`,
                      border: `1px solid ${project.accent}55`,
                      color: project.accent,
                      borderRadius: "999px",
                      padding: "0.25rem 0.75rem",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.tag}
                  </span>
                  <div
                    style={{
                      background: `${project.accent}22`,
                      borderRadius: "10px",
                      padding: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {project.description}
                </p>

                {/* CTA */}
                <div
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: project.accent,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {project.cta}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
