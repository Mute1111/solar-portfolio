import React from "react";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",       // very transparent glass
        border: "1px solid rgba(255, 255, 255, 0.2)",       // subtle glass edge
        borderRadius: "1.5rem",                              // rounded corners
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",  // depth/frosted shadow
        backdropFilter: "blur(12px)",                        // blur background
        WebkitBackdropFilter: "blur(12px)",                 // Safari support
      }}
      className="absolute top-8 left-1/2 transform -translate-x-1/2
                 w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto"
    >
      {/* Left side: title/logo */}
      <h1 style={{ color: "#FFFFFF", fontSize: "1.25rem", fontWeight: 600 }}>
        My Portfolio
      </h1>

      {/* Right side: navigation */}
      <nav className="flex gap-4">
        <a
          href="#about"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="hover:text-yellow-400 transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="hover:text-yellow-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="hover:text-yellow-400 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}