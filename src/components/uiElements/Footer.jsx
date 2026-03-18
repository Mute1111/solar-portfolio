import React from "react";
import { motion } from "framer-motion";

// Link springs up one by one
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

const links = [
  {
    label: "GitHub",
    href: "https://github.com/mute1111/",
  },
  {
    label: "LinkedIn",
    // FIX: was "https://linkedin.comhttps://www.linkedin.com/..." (doubled URL)
    href: "https://www.linkedin.com/in/almgdad-hassan-38bb26388/",
  },
  {
    label: "Email",
    href: "mailto:mug.zuher@gmail.com?subject=Hello%20Almogdad&body=Hi%2C%20I%20wanted%20to%20reach%20out...",
  },
];

export default function Footer() {
  return (
    <motion.div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                 w-11/12 max-w-5xl p-4 flex justify-between items-center
                 pointer-events-auto"
      // Whole footer slides up from below on mount
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.2 }}
    >
      {/* Left: copyright fades in */}
      <motion.span
        style={{ color: "#FFFFFF", fontSize: "0.875rem" }}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.35 }}
      >
        © 2026 Almgdad Hassan
      </motion.span>

      {/* Right: links stagger in */}
      <motion.div
        className="flex gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map(({ label, href }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#facc15"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)"}
          >
            {label}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}