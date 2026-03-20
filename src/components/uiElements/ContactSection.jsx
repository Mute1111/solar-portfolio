import React, { useState } from "react";
import { motion } from "framer-motion";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

// Stagger container for contact rows
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Each row springs up from below
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

function ContactRow({ icon, label, href }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      variants={itemVariants}
      // Hover: lift + glow, Tap: press down
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "9999px",
        padding: "0.55rem 1.4rem",
        fontSize: "0.875rem",
        color: "rgba(255, 255, 255, 0.85)",
        textDecoration: "none",
        minWidth: "220px",
        justifyContent: "center",
        // CSS transition handles color/bg since Framer handles transform
        transition: "background 0.2s, border 0.2s, color 0.2s",
      }}
      // Inline style swap on hover via CSS vars isn't possible with motion.a,
      // so we use a CSS class approach with onMouseEnter/Leave kept minimal
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(250, 204, 21, 0.1)";
        e.currentTarget.style.border = "1px solid rgba(250, 204, 21, 0.4)";
        e.currentTarget.style.color = "#facc15";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
        e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.15)";
        e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center px-4 py-24" id="contact">
      <div style={{ maxWidth: "640px", width: "100%" }}>

        {/* Section title springs in first */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "2rem" }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
        >
          {/* Emoji bounces in independently */}
          <motion.span
            style={{ fontSize: "2rem", display: "inline-block" }}
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          >
            ✉️
          </motion.span>

          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0.25rem 0 0.3rem" }}>
            Let's talk
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            I'm actively looking for junior web dev roles
          </p>
        </motion.div>

        {/* Glass card springs in after title */}
        <motion.div
          style={glass}
          className="p-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.1 }}
        >
          <motion.p
            style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
          >
            Whether you have a role in mind, want to chat about a project, or just want to say hi —
            my inbox is always open. I'm open for remote work full time or if you just need help dont feel shy.
          </motion.p>

          {/* Rows stagger in one by one */}
          <motion.div
            className="flex flex-col gap-3 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactRow icon="📧" label="mug.zuher@gmail.com"  href="mailto:mug.zuher@gmail.com?subject=Hello%20Almogdad&body=Hi%2C%20I%20wanted%20to%20reach%20out..." />
            <ContactRow icon="📱" label="+971 50 698 5208"     href="tel:+971506985208" />
            <ContactRow icon="🌐" label="LinkedIn"             href="https://www.linkedin.com/in/almgdad-hassan-38bb26388/" />
            <ContactRow icon="💻" label="GitHub"               href="https://github.com/mute1111" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}