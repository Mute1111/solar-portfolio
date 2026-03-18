import React from "react";
import { motion } from "framer-motion";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

// ── Fill in your projects here ──────────────────────────────────────────────
const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does, the problem it solves, and who it's for.",
    screenshot: "/screenshots/project1.png",
    tags: ["React", "Tailwind", "PHP"],
    github: "https://github.com/mute1111/",
    demo: "https://your-live-demo.com",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does, the problem it solves, and who it's for.",
    screenshot: "/screenshots/project2.png",
    tags: ["JavaScript", "MySQL", "CSS"],
    github: "https://github.com/mute1111/",
    demo: "https://your-live-demo.com",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does, the problem it solves, and who it's for.",
    screenshot: "/screenshots/project3.png",
    tags: ["Python", "Docker", "PostgreSQL"],
    github: "https://github.com/mute1111/",
    demo: null, // set to null to hide demo link for a specific project
  },
];
// ────────────────────────────────────────────────────────────────────────────

// Cards stagger in
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { y: 44, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 13,
    },
  },
};

// Tags pop in
const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const tagVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
};

function SkillTag({ label }) {
  return (
    <motion.span
      variants={tagVariants}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{
        background: "rgba(255, 255, 255, 0.07)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        color: "rgba(255, 255, 255, 0.85)",
        borderRadius: "9999px",
        padding: "0.3rem 0.85rem",
        fontSize: "0.8rem",
        cursor: "default",
        display: "inline-block",
        transition: "background 0.2s, border 0.2s, color 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(250, 204, 21, 0.2)";
        e.currentTarget.style.border = "1px solid rgba(250, 204, 21, 0.6)";
        e.currentTarget.style.color = "#facc15";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
        e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.18)";
        e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
      }}
    >
      {label}
    </motion.span>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      style={{
        ...glass,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        flex: "1 1 300px",
        minWidth: 0,
      }}
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 56px 0 rgba(31, 38, 135, 0.55)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      {/* Screenshot with zoom-on-hover */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden", borderRadius: "1.5rem 1.5rem 0 0" }}>
        <motion.img
          src={project.screenshot}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        />
        {/* Bottom gradient so card body bleeds in cleanly */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(to bottom, transparent, rgba(5, 5, 20, 0.85))",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1 }}>

        {/* Title */}
        <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
          {project.description}
        </p>

        {/* Tags */}
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
          variants={tagContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {project.tags.map(tag => <SkillTag key={tag} label={tag} />)}
        </motion.div>

        {/* Spacer pushes buttons to bottom */}
        <div style={{ flex: 1 }} />

        {/* Link buttons */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {/* GitHub */}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                borderRadius: "9999px",
                padding: "0.45rem 1.1rem",
                fontSize: "0.8rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                transition: "background 0.2s, border 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
            >
              💻 GitHub
            </motion.a>
          )}

          {/* Live demo — yellow accent, matches "Get in touch" button */}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                background: "rgba(250,204,21,0.15)",
                border: "1px solid rgba(250,204,21,0.5)",
                color: "#facc15",
                borderRadius: "9999px",
                padding: "0.45rem 1.1rem",
                fontSize: "0.8rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                transition: "background 0.2s, border 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(250,204,21,0.25)";
                e.currentTarget.style.border = "1px solid rgba(250,204,21,0.75)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(250,204,21,0.15)";
                e.currentTarget.style.border = "1px solid rgba(250,204,21,0.5)";
              }}
            >
              🚀 Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="portfolio">
      <div style={{ maxWidth: "1000px", width: "100%" }}>

        {/* Section title — same pattern as every other section */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "2.5rem" }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
        >
          <motion.span
            style={{ fontSize: "2rem", display: "inline-block" }}
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          >
            🚀
          </motion.span>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Projects
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
            Things I've built
          </p>
        </motion.div>

        {/* Cards grid — stagger in */}
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "stretch" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}