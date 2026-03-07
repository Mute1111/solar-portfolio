import React, { useState, useEffect } from "react";

// ─── Glassmorphism style (matches existing components exactly) ───────────────
const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

// ─── Header ──────────────────────────────────────────────────────────────────
function Header({ active, onNav }) {
  return (
    <div
      style={glass}
      className="absolute top-8 left-1/2 transform -translate-x-1/2
                 w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto z-50"
    >
      <h1 style={{ color: "#FFFFFF", fontSize: "1.25rem", fontWeight: 600 }}>
        Almgdad Hassan
      </h1>
      <nav className="flex gap-4">
        {["About", "Skills", "Experience", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => onNav(item.toLowerCase())}
            style={{
              color: active === item.toLowerCase()
                ? "#facc15"
                : "rgba(255,255,255,0.8)",
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

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <div
      style={glass}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                 w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto z-50"
    >
      <span style={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
        © 2026 Almgdad Hassan
      </span>
      <div className="flex gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.875rem" }}
          onMouseOver={e => e.target.style.color = "#facc15"}
          onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.8)"}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.875rem" }}
          onMouseOver={e => e.target.style.color = "#facc15"}
          onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.8)"}
        >
          LinkedIn
        </a>
        <a
          href="mailto:mug.zuher@gmail.com"
          style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.875rem" }}
          onMouseOver={e => e.target.style.color = "#facc15"}
          onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.8)"}
        >
          Email
        </a>
      </div>
    </div>
  );
}

// ─── Section: Hero / About ────────────────────────────────────────────────────
function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4" id="about">
      <div style={{ ...glass, maxWidth: "720px", width: "100%" }} className="p-10 text-center">
        {/* Avatar placeholder */}
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: "rgba(250,204,21,0.15)",
            border: "2px solid rgba(250,204,21,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            fontSize: "2rem",
          }}
        >
          👨‍💻
        </div>

        <p style={{ color: "#facc15", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
          HI, I'M
        </p>
        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Almgdad Hassan
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginBottom: "1.5rem" }}>
          IT Support Specialist → Aspiring Junior Web Developer
        </p>

        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
          I've spent 5+ years keeping systems running and helping people use technology — and along the way
          I caught the bug for building things on the web. I've worked with PHP, MySQL, JavaScript and Python
          in real production environments, and now I'm channelling all of that hands-on experience into becoming
          a full-time developer. Based in Dubai 🇦🇪 and open to junior roles.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="mailto:mug.zuher@gmail.com"
            style={{
              background: "rgba(250,204,21,0.15)",
              border: "1px solid rgba(250,204,21,0.5)",
              color: "#facc15",
              borderRadius: "9999px",
              padding: "0.5rem 1.4rem",
              fontSize: "0.875rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Get in touch
          </a>
          <a
            href="#skills"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)",
              borderRadius: "9999px",
              padding: "0.5rem 1.4rem",
              fontSize: "0.875rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            See my skills ↓
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section: Skills ──────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: "Languages",
    skills: ["PHP", "Python", "JavaScript", "HTML", "CSS", "SQL", "C++"],
  },
  {
    label: "Databases & Tools",
    skills: ["MySQL", "Git", "VS Code"],
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
        background: hovered ? "rgba(250,204,21,0.2)" : "rgba(255,255,255,0.07)",
        border: hovered ? "1px solid rgba(250,204,21,0.6)" : "1px solid rgba(255,255,255,0.18)",
        color: hovered ? "#facc15" : "rgba(255,255,255,0.85)",
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

function SkillsSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="skills">
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <SectionTitle emoji="🛠️" title="Skills & Tech" subtitle="Things I work with day-to-day" />
        <div className="grid grid-cols-1 gap-5" style={{ marginTop: "2rem" }}>
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

// ─── Section: Experience ──────────────────────────────────────────────────────
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

function ExperienceSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="experience">
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <SectionTitle emoji="💼" title="Experience" subtitle="Where I've been putting it to work" />
        <div className="flex flex-col gap-6" style={{ marginTop: "2rem" }}>
          {experiences.map((exp) => (
            <div key={exp.role} style={glass} className="p-7">
              <div className="flex justify-between items-start flex-wrap gap-2" style={{ marginBottom: "0.75rem" }}>
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 600 }}>{exp.role}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  style={{
                    background: "rgba(250,204,21,0.1)",
                    border: "1px solid rgba(250,204,21,0.35)",
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
                  <li
                    key={i}
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      marginBottom: "0.35rem",
                      listStyleType: "disc",
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div style={{ ...glass, marginTop: "1.5rem" }} className="p-6">
          <p style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
            EDUCATION
          </p>
          <div className="flex flex-col gap-2">
            <div>
              <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>Master of Information Systems</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem" }}>Future University · Thesis Pending</p>
            </div>
            <div>
              <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>Bachelor of Information Technology</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem" }}>Future University · 2021</p>
            </div>
          </div>
          <div style={{ marginTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem" }}>
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

// ─── Section: Contact ─────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="contact">
      <div style={{ maxWidth: "640px", width: "100%" }}>
        <SectionTitle emoji="✉️" title="Let's talk" subtitle="I'm actively looking for junior web dev roles" />
        <div style={{ ...glass, marginTop: "2rem" }} className="p-8 text-center">
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            Whether you have a role in mind, want to chat about a project, or just want to say hi —
            my inbox is always open. I'm based in Dubai and available immediately.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <ContactRow icon="📧" label="mug.zuher@gmail.com" href="mailto:mug.zuher@gmail.com" />
            <ContactRow icon="📱" label="+971 50 698 5208" href="tel:+971506985208" />
            <ContactRow icon="🌐" label="LinkedIn" href="https://linkedin.com/" />
            <ContactRow icon="💻" label="GitHub" href="https://github.com/" />
          </div>
        </div>
      </div>
    </div>
  );
}

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
        background: hovered ? "rgba(250,204,21,0.1)" : "rgba(255,255,255,0.05)",
        border: hovered ? "1px solid rgba(250,204,21,0.4)" : "1px solid rgba(255,255,255,0.15)",
        borderRadius: "9999px",
        padding: "0.55rem 1.4rem",
        fontSize: "0.875rem",
        color: hovered ? "#facc15" : "rgba(255,255,255,0.85)",
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

// ─── Shared helpers ───────────────────────────────────────────────────────────
function SectionTitle({ emoji, title, subtitle }) {
  return (
    <div className="text-center" style={{ marginBottom: "0.5rem" }}>
      <span style={{ fontSize: "2rem" }}>{emoji}</span>
      <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>{title}</h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>{subtitle}</p>
    </div>
  );
}

// ─── Animated background orbs ────────────────────────────────────────────────
function BackgroundOrbs() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Deep background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1330 50%, #0a0a1a 100%)",
      }} />
      {/* Orb 1 – blue */}
      <div style={{
        position: "absolute", top: "-15%", left: "-10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
        animation: "drift1 18s ease-in-out infinite",
      }} />
      {/* Orb 2 – purple */}
      <div style={{
        position: "absolute", bottom: "5%", right: "-10%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        animation: "drift2 22s ease-in-out infinite",
      }} />
      {/* Orb 3 – gold accent */}
      <div style={{
        position: "absolute", top: "45%", left: "30%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)",
        animation: "drift1 28s ease-in-out infinite reverse",
      }} />
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.05); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-35px, -25px) scale(1.08); }
        }
      `}</style>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      position: "relative",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <BackgroundOrbs />

      {/* Fixed Header */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, pointerEvents: "none" }}>
        <Header active={activeSection} onNav={handleNav} />
      </div>

      {/* Scrollable content */}
      <div style={{ position: "relative", zIndex: 10, paddingTop: "6rem", paddingBottom: "8rem" }}>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>

      {/* Fixed Footer */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, pointerEvents: "none" }}>
        <Footer />
      </div>
    </div>
  );
}
