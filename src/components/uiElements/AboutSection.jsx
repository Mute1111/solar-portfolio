import React from "react";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4" id="about">
      <div style={{ ...glass, maxWidth: "720px", width: "100%" }} className="p-10 text-center">

        {/* Avatar */}
        <div
  style={{
    width: "88px",
    height: "88px",
    borderRadius: "50%",
    background: "rgba(250, 204, 21, 0.15) url('/avatar/me.jpg') center/cover no-repeat",
    border: "2px solid rgba(250, 204, 21, 0.5)",
    margin: "0 auto 1.5rem",
  }}
></div>

        <p style={{ color: "#facc15", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
          HI, I'M
        </p>
        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Almgdad Hassan
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1rem", marginBottom: "1.5rem" }}>
          IT Support Specialist → Aspiring Junior Web Developer
        </p>

        <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
          I've spent 5+ years keeping systems running and helping people use technology — and along the way
          I caught the bug for building things on the web. I've worked with PHP, MySQL, JavaScript and Python
          in real production environments, and now I'm channelling all of that hands-on experience into becoming
          a full-time developer. Based in Dubai 🇦🇪 and open to junior roles.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="mailto:mug.zuher@gmail.com"
            style={{
              background: "rgba(250, 204, 21, 0.15)",
              border: "1px solid rgba(250, 204, 21, 0.5)",
              color: "#facc15",
              borderRadius: "9999px",
              padding: "0.5rem 1.4rem",
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            Get in touch
          </a>
          <a
            href="#skills"
            style={{
              background: "rgba(255, 255, 255, 0.07)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.85)",
              borderRadius: "9999px",
              padding: "0.5rem 1.4rem",
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            See my skills ↓
          </a>
        </div>
      </div>
    </div>
  );
}
