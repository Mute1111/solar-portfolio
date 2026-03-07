import React, { useState } from "react";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

function ContactRow({ icon, label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: hovered ? "rgba(250, 204, 21, 0.1)" : "rgba(255, 255, 255, 0.05)",
        border: hovered ? "1px solid rgba(250, 204, 21, 0.4)" : "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "9999px",
        padding: "0.55rem 1.4rem",
        fontSize: "0.875rem",
        color: hovered ? "#facc15" : "rgba(255, 255, 255, 0.85)",
        textDecoration: "none",
        transition: "all 0.2s",
        minWidth: "220px",
        justifyContent: "center",
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="contact">
      <div style={{ maxWidth: "640px", width: "100%" }}>

        {/* Section title */}
        <div className="text-center" style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "2rem" }}>✉️</span>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Let's talk
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            I'm actively looking for junior web dev roles
          </p>
        </div>

        <div style={glass} className="p-8 text-center">
          <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            Whether you have a role in mind, want to chat about a project, or just want to say hi —
            my inbox is always open. I'm based in Dubai and available immediately.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <ContactRow icon="📧" label="mug.zuher@gmail.com" href="mailto:mug.zuher@gmail.com?subject=Hello%20Almogdad&body=Hi%2C%20I%20wanted%20to%20reach%20out..." />
            <ContactRow icon="📱" label="+971 50 698 5208" href="tel:+971506985208" />
            <ContactRow icon="🌐" label="LinkedIn" href="https://www.linkedin.com/in/almgdad-hassan-38bb26388/" />
            <ContactRow icon="💻" label="GitHub" href="https://github.com/mute1111" />
          </div>
        </div>

      </div>
    </div>
  );
}
