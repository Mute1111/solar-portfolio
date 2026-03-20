import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const glass = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "9999px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const navItems = ["About", "Skills", "Experience", "Portfolio", "Contact"];

const COMPACT_BREAKPOINT = 768;

export default function Header({ active, onNav }) {
  const [isCompact, setIsCompact] = useState(
    () => window.innerWidth < COMPACT_BREAKPOINT
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const compact = window.innerWidth < COMPACT_BREAKPOINT;
      setIsCompact(compact);
      if (!compact) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleNav = (section) => {
    setMenuOpen(false);
    if (onNav) {
      onNav(section);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isCompact ? (
        // ─── MOBILE: compact pill + dropdown ───────────────────────────
        <div style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 50 }}>
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              ...glass,
              pointerEvents: "auto",
              padding: "0.6rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: menuOpen ? "#facc15" : "rgba(255,255,255,0.85)",
              background: "none",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontFamily: "inherit",
              transition: "color 0.2s",
            }}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.93 }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: "4px", width: "16px" }}>
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                style={{ display: "block", height: "2px", borderRadius: "2px", background: menuOpen ? "#facc15" : "rgba(255,255,255,0.85)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                style={{ display: "block", height: "2px", borderRadius: "2px", background: menuOpen ? "#facc15" : "rgba(255,255,255,0.85)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                style={{ display: "block", height: "2px", borderRadius: "2px", background: menuOpen ? "#facc15" : "rgba(255,255,255,0.85)" }}
              />
            </span>
            <span>Menu</span>
          </motion.button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                style={{
                  ...glass,
                  borderRadius: "1.25rem",
                  marginTop: "0.5rem",
                  padding: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  pointerEvents: "auto",
                  transformOrigin: "top right",
                }}
                initial={{ opacity: 0, scale: 0.88, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                {navItems.map((item, i) => {
                  const isActive = active === item.toLowerCase();
                  return (
                    <motion.button
                      key={item}
                      onClick={() => handleNav(item.toLowerCase())}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 14, delay: i * 0.05 }}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.96 }}
                      style={{
                        color: isActive ? "#facc15" : "rgba(255,255,255,0.85)",
                        background: isActive ? "rgba(250,204,21,0.1)" : "none",
                        border: isActive ? "1px solid rgba(250,204,21,0.3)" : "1px solid transparent",
                        borderRadius: "9999px",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        fontFamily: "inherit",
                        padding: "0.4rem 1.1rem",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        transition: "color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "#facc15";
                          e.currentTarget.style.background = "rgba(250,204,21,0.08)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                          e.currentTarget.style.background = "none";
                        }
                      }}
                    >
                      {item}
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // ─── DESKTOP: right nav bubble ──────────────────────────────────
        <motion.nav
          style={{
            ...glass,
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            padding: "0.6rem 1.2rem",
            zIndex: 50,
            pointerEvents: "auto",
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
          }}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
        >
          {navItems.map((item, i) => {
            const isActive = active === item.toLowerCase();
            return (
              <motion.button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 14,
                  delay: 0.2 + i * 0.07,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.93 }}
                style={{
                  position: "relative",
                  color: isActive ? "#facc15" : "rgba(255, 255, 255, 0.8)",
                  background: isActive ? "rgba(250, 204, 21, 0.1)" : "none",
                  border: isActive ? "1px solid rgba(250, 204, 21, 0.3)" : "1px solid transparent",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontFamily: "inherit",
                  padding: "0.3rem 0.85rem",
                  transition: "color 0.2s, background 0.2s, border 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#facc15";
                    e.currentTarget.style.background = "rgba(250, 204, 21, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    e.currentTarget.style.background = "none";
                  }
                }}
              >
                {item}
              </motion.button>
            );
          })}
        </motion.nav>
      )}
    </>
  );
}