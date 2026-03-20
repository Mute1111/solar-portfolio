import React from "react";

function Stars() {
  const stars = React.useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: "#fff",
            opacity: 0,
            animation: `fadeIn 1s ease forwards ${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        backgroundColor: "#0a0a1e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Stars />

      {/* Name */}
      <h1
        style={{
          color: "#fff",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 300,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          opacity: 0,
          animation: "fadeIn 0.8s ease forwards 0.3s",
          position: "relative",
          zIndex: 1,
        }}
      >
        Almgdad Hassan
      </h1>

      {/* Tagline */}
      <p
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          opacity: 0,
          animation: "fadeIn 0.8s ease forwards 0.8s",
          position: "relative",
          zIndex: 1,
        }}
      >
        Frontend Developer
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: "160px",
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "9999px",
          overflow: "hidden",
          opacity: 0,
          animation: "fadeIn 0.5s ease forwards 1.1s",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "0%",
            background: "#facc15",
            borderRadius: "9999px",
            animation: "progress 1.8s ease forwards 1.1s",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes progress {
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}