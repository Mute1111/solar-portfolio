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

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "HTML", "CSS", "Python", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Three.js / R3F", "Vite"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", " And learning Docker! and more"],
  },
  {
    label: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Technical Writing", "Self-Learning"],
  },
];

// Cards stagger in one by one
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
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

// Tags stagger inside each card
const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

const tagVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
    },
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

export default function SkillsSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="skills">
      <div style={{ maxWidth: "800px", width: "100%" }}>

        {/* Section title */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "2rem" }}
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
            🛠️
          </motion.span>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Skills & Tech
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            Things I work with day-to-day
          </p>
        </motion.div>

        {/* Cards stagger in */}
        <motion.div
          className="grid grid-cols-1 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              style={glass}
              className="p-6"
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.5)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <motion.p
                style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "1rem" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.1 }}
              >
                {group.label.toUpperCase()}
              </motion.p>

              {/* Tags pop in with scale spring */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={tagContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {group.skills.map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}