import React, { useState } from "react";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const skillGroups = [
  {
    label: "Languages",
    skills: ["PHP", "Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "Tools & FrameWorks",
    skills: ["React","Tailwind","MySQL", "Git"],
  },
  {
    label: "Infrastructure",
    skills: ["LAN / Wi-Fi Admin", "Hardware Support", "System Config", "Asset Management"],
  },
  {
    label: "Soft Skills",
    skills: ["End-User Training", "Technical Writing", "Team Collaboration", "Problem Solving"],
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

export default function SkillsSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="skills">
      <div style={{ maxWidth: "800px", width: "100%" }}>

        {/* Section title */}
        <div className="text-center" style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "2rem" }}>🛠️</span>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Skills & Tech
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            Things I work with day-to-day
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {skillGroups.map((group) => (
            <div key={group.label} style={glass} className="p-6">
              <p style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "1rem" }}>
                {group.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => <SkillTag key={s} label={s} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
