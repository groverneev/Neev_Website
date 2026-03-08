"use client";

import { FaBroom, FaLeaf, FaChartBar, FaHandshake } from "react-icons/fa6";

const projects = [
  {
    href: "https://earthdayartcontest.vercel.app",
    tag: "Art + Environment",
    icon: <FaLeaf size={15} color="#30363d" />,
    title: "Earth Day Art Contest",
    description:
      "An art competition for ages 5–17 celebrating Earth Day 2026, with prizes across two age groups.",
  },
  {
    href: "https://collegestatistics.org",
    tag: "Data Analytics",
    icon: <FaChartBar size={15} color="#30363d" />,
    title: "College Statistics",
    description:
      "A data visualization dashboard comparing universities using Common Data Set metrics over time.",
  },
  {
    href: "https://dunebroom.com",
    tag: "Robotics + AI",
    icon: <FaBroom size={15} color="#30363d" />,
    title: "DuneBroom",
    description:
      "An autonomous beach-cleaning robot using edge AI and computer vision to remove litter.",
  },
  {
    href: "https://buddybridge.us",
    tag: "Community",
    icon: <FaHandshake size={15} color="#30363d" />,
    title: "BuddyBridge",
    description:
      "A platform connecting elderly adults with teen volunteers for free, everyday task assistance.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "0 1.5rem", scrollMarginTop: "72px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#30363d",
            margin: "0 0 1rem",
          }}
        >
          Projects
        </p>

        {/* Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.75rem",
          }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                style={{
                  background: "#0d1117",
                  borderRadius: 8,
                  padding: "1.5rem",
                  border: "1px solid #1c2333",
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                  height: "100%",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#30363d")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1c2333")
                }
              >
                {/* Tag + icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#30363d",
                      border: "1px solid #1c2333",
                      borderRadius: 4,
                      padding: "0.15rem 0.5rem",
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
                    fontSize: 16,
                    fontWeight: 600,
                    margin: "0 0 0.5rem",
                    letterSpacing: "-0.01em",
                    color: "#e6edf3",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: "0 0 1rem",
                    color: "#7d8590",
                  }}
                >
                  {project.description}
                </p>

                {/* CTA */}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#7d8590",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    transition: "color 0.15s",
                  }}
                >
                  Visit
                  <svg
                    width="12"
                    height="12"
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
      </div>

      <style>{`
        @media (max-width: 540px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
