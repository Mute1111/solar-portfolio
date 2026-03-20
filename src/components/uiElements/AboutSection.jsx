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

// Parent container — staggers children one by one
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

// Each child springs up from below
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
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

// Avatar gets its own scale+rotate spring
const avatarVariants = {
  hidden: { scale: 0, rotate: -12, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function AboutSection() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      id="about"
    >
      {/* Card bounces in as a whole when it enters the viewport */}
      <motion.div
        style={{ ...glass, maxWidth: "720px", width: "100%" }}
        className="p-10 text-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 70, damping: 14 }}
      >
        {/* Children stagger inside the card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Avatar — scale + rotate spring */}
          <motion.div
            variants={avatarVariants}
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              background:
                "rgba(250, 204, 21, 0.15) url('/avatar/me.jpg') center/cover no-repeat",
              border: "2px solid rgba(250, 204, 21, 0.5)",
              margin: "0 auto 1.5rem",
            }}
          />

          {/* "HI, I'M" label */}
          <motion.p
            variants={itemVariants}
            style={{
              color: "#facc15",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            HI, I'M
          </motion.p>

          {/* Name */}
          <motion.h2
            variants={itemVariants}
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            Almgdad Hassan
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            Tech Enjoyer , Developer 
          </motion.p>

         
          <motion.p
            variants={itemVariants}
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
           I like building stuff. what i lack in experince i make up for in caffine and willingness to learn.
          </motion.p>

        <motion.p
          variants={itemVariants}
          style={{
          color: "rgba(255, 255, 255, 0.35)",
          fontSize: "0.8rem",
          fontStyle: "italic",
          marginBottom: "1.5rem",
           }}
            >
           Saturn is cool.. keep a lookout for Cassini
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 justify-center flex-wrap"
          >
            {/* Get in touch */}
            <motion.a
              href="mailto:mug.zuher@gmail.com?subject=Hello%20Almogdad&body=Hi%2C%20I%20wanted%20to%20reach%20out..."
              style={{
                background: "rgba(250, 204, 21, 0.15)",
                border: "1px solid rgba(250, 204, 21, 0.5)",
                color: "#facc15",
                borderRadius: "9999px",
                padding: "0.5rem 1.4rem",
                fontSize: "0.875rem",
                textDecoration: "none",
                display: "inline-block",
              }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Get in touch
            </motion.a>

            {/* See my skills */}
            <motion.a
              href="#skills"
              style={{
                background: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.85)",
                borderRadius: "9999px",
                padding: "0.5rem 1.4rem",
                fontSize: "0.875rem",
                textDecoration: "none",
                display: "inline-block",
              }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              See my skills ↓
            </motion.a>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}