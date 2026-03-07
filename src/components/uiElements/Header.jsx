import React from "react";

export default function Header({ active, onNav }) {

  const handleNav = (section) => {
    if (onNav) {
      onNav(section);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      className="w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto mx-auto"
    >
      {/* Left side: name */}
      <h1
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          color: "#FFFFFF",
          fontSize: "1.25rem",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Almgdad Hassan
      </h1>

      {/* Navigation */}
      <nav className="flex gap-4">
        {["About", "Skills", "Experience", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item.toLowerCase())}
            style={{
              color:
                active === item.toLowerCase()
                  ? "#facc15"
                  : "rgba(255, 255, 255, 0.8)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              transition: "color 0.2s",
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}