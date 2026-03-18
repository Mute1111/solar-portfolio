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

// Stagger wrapper
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Card / row spring up
const itemVariants = {
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

// Bullet lines stagger inside each card
const bulletContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const bulletVariants = {
  hidden: { x: -12, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

function SkillTag({ label }) {
  return (
    <motion.span
      variants={itemVariants}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.96 }}
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

export default function ExperienceSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="experience">
      <div style={{ maxWidth: "1000px", width: "100%" }}>

        {/* Section title */}
        <motion.div
          className="text-center mb-12"
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
            💼
          </motion.span>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Experience
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            Where I've been putting it to work
          </p>
        </motion.div>

        {/* ─── Top row: Experience cards stagger in ─── */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              style={glass}
              className="p-6 flex-1"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.5)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 600 }}>{exp.role}</h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.85rem" }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  style={{
                    background: "rgba(250, 204, 21, 0.1)",
                    border: "1px solid rgba(250, 204, 21, 0.35)",
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

              {/* Bullet points stagger in left-to-right */}
              <motion.ul
                style={{ paddingLeft: "1rem", margin: 0 }}
                variants={bulletContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={bulletVariants}
                    style={{
                      color: "rgba(255, 255, 255, 0.75)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      marginBottom: "0.35rem",
                      listStyleType: "disc",
                    }}
                  >
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Bottom row: Education & Certifications stagger in ─── */}
        <motion.div
          className="flex flex-col md:flex-row gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Education card */}
          <motion.div
            style={glass}
            className="p-6 flex-1"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.5)" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <p style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
              EDUCATION
            </p>
            <motion.div
              className="flex flex-col gap-2"
              variants={bulletContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { degree: "Master of Information Systems", detail: "Future University · Thesis Pending" },
                { degree: "Bachelor of Information Technology", detail: "Future University · 2021" },
              ].map(({ degree, detail }) => (
                <motion.div key={degree} variants={bulletVariants}>
                  <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>{degree}</p>
                  <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.8rem" }}>{detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            style={glass}
            className="p-6 flex-1"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.5)" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <p style={{ color: "#facc15", fontSize: "0.75rem", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
              CERTIFICATIONS
            </p>
            <motion.div
              className="flex gap-2 flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["CompTIA", "Google IT Support"].map((c) => (
                <SkillTag key={c} label={c} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}