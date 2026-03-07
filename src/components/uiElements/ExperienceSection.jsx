import React, { useState } from "react";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const experiences = [
  {
    role: "IT Specialist & Lab Instructor",
    company: "Future University",
    location: "Khartoum, Sudan",
    period: "2021 – 2023",
    bullets: [
      "Built and maintained faculty web portals using PHP, JavaScript & MySQL — supporting 200+ users and streamlining admin workflows.",
      "Ran end-user training programmes covering Python, C++, HTML and PHP, boosting staff and student adoption rates.",
      "Kept 200+ lab workstations running at 98%+ uptime through proactive maintenance and hands-on troubleshooting.",
      "Managed LAN/Wi-Fi diagnostics, hardware repairs, and asset inventory with minimal downtime.",
    ],
  },
  {
    role: "IT Support Technician",
    company: "IMC Training Center",
    location: "Khartoum, Sudan",
    period: "2018 – 2020",
    bullets: [
      "Installed, configured and maintained desktops, laptops, printers and network infrastructure for daily training operations.",
      "Diagnosed and resolved network connectivity issues (LAN/Wi-Fi), escalating complex cases to keep disruptions minimal.",
      "Coordinated hardware/software deployments and new user onboarding including accounts, permissions and basic training.",
      "Built a knowledge base of support procedures, cutting average resolution time for repeat issues.",
    ],
  },
];

function SkillTag({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(250, 204, 21, 0.2)" : "rgba(255, 255, 255, 0.07)",
        border: hovered ? "1px solid rgba(250, 204, 21, 0.6)" : "1px solid rgba(255, 255, 255, 0.18)",
        color: hovered ? "#facc15" : "rgba(255, 255, 255, 0.85)",
        borderRadius: "9999px",
        padding: "0.3rem 0.85rem",
        fontSize: "0.8rem",
        cursor: "default",
        transition: "all 0.2s",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

export default function ExperienceSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="experience">
      <div style={{ maxWidth: "1000px", width: "100%" }}>

        {/* Section title */}
        <div className="text-center mb-12">
          <span style={{ fontSize: "2rem" }}>💼</span>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Experience
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            Where I've been putting it to work
          </p>
        </div>

        {/* ─── Top row: Experience cards ─── */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {experiences.map((exp) => (
            <div key={exp.role} style={glass} className="p-6 flex-1">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 600 }}>{exp.role}</h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.85rem" }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  style={{
                    background: "rgba(250, 204, 21, 0.1)",
                    border: "1px solid rgba(250, 204, 21, 0.35)",
                    color: "#facc15",
                    borderRadius: "9999px",
                    padding: "0.2rem 0.8rem",
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "0.35rem", listStyleType: "disc" }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── Bottom row: Education & Certifications ─── */}
        <div className="flex flex-col md:flex-row gap-6">
          <div style={glass} className="p-6 flex-1">
            <p style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
              EDUCATION
            </p>
            <div className="flex flex-col gap-2">
              <div>
                <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>
                  Master of Information Systems
                </p>
                <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.8rem" }}>
                  Future University · Thesis Pending
                </p>
              </div>
              <div>
                <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>
                  Bachelor of Information Technology
                </p>
                <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.8rem" }}>
                  Future University · 2021
                </p>
              </div>
            </div>
          </div>

          <div style={glass} className="p-6 flex-1">
            <p style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
              CERTIFICATIONS
            </p>
            <div className="flex gap-2 flex-wrap">
              {["CompTIA", "Google IT Support"].map((c) => (
                <SkillTag key={c} label={c} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}