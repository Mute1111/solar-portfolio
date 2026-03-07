import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                 w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto"
    >
      {/* Left side: copyright */}
      <span style={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
        © 2026 Almgdad Hassan
      </span>

      {/* Right side: social links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/mute1111/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none", fontSize: "0.875rem" }}
          className="hover:text-yellow-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.comhttps://www.linkedin.com/in/almgdad-hassan-38bb26388/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none", fontSize: "0.875rem" }}
          className="hover:text-yellow-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mug.zuher@gmail.com?subject=Hello%20Almogdad&body=Hi%2C%20I%20wanted%20to%20reach%20out..."
          style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none", fontSize: "0.875rem" }}
          className="hover:text-yellow-400 transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}
