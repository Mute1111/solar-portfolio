import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",       // transparent glass
        border: "1px solid rgba(255, 255, 255, 0.2)",       // subtle edge
        borderRadius: "1.5rem",                              // rounded corners
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",  // frosted shadow
        backdropFilter: "blur(12px)",                        // glass blur
        WebkitBackdropFilter: "blur(12px)",                 // Safari support
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                 w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto"
    >
      {/* Left side: copyright */}
      <span style={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
        © 2026 My Portfolio
      </span>

      {/* Right side: social links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="hover:text-yellow-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="hover:text-yellow-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}