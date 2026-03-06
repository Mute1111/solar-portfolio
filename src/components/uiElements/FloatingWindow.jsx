import React from "react";

export default function FloatingWindow() {
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
      className="absolute top-1/4 right-8 w-80 h-96 p-4 flex flex-col pointer-events-auto"
    >
      {/* Header/title of the window */}
      <h2 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 600 }} className="mb-2">
        Notes
      </h2>

      {/* Text area */}
      <textarea
        placeholder="Write your thoughts..."
        className="flex-1 w-full bg-transparent text-white placeholder-white/50 border-none outline-none resize-none"
        style={{ fontSize: "0.875rem" }}
      />
    </div>
  );
}