import React, { useState, useEffect, useRef } from "react";
import SaturnScene from "./components/SaturnScene";

import Header from "./components/uiElements/Header";
import Footer from "./components/uiElements/Footer";

import AboutSection     from "./components/uiElements/AboutSection";
import ExperienceSection from "./components/uiElements/ExperienceSection";
import ContactSection   from "./components/uiElements/ContactSection";
import SkillSection     from "./components/uiElements/SkillsSection";
import PortfolioSection from "./components/uiElements/Portfolio";

// Map scroll index → section id used by Header active state
const SECTION_IDS = ["about", "skills", "experience", "portfolio", "contact"];

export default function App() {
  const [section, setSection]   = useState(0);
  const [loading, setLoading]   = useState(true);
  const scrollRef               = useRef(null);

  // ── Loading screen ────────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // ── Track active section via IntersectionObserver ─────────────────────────
  // Replaces the brittle onWheel counter — works with both scroll AND
  // programmatic navigation without double-counting
  useEffect(() => {
    if (loading) return;

    const sectionEls = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx !== -1) setSection(idx);
          }
        });
      },
      {
        root: scrollRef.current,
        // Fire when section is at least 40% visible
        threshold: 0.4,
      }
    );

    sectionEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  // ── Nav handler passed to Header ─────────────────────────────────────────
  const handleNav = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ── Loading screen ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#0a0a1e] text-white">
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl tracking-widest text-white/70">Hi There!</p>
          <div className="w-14 h-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    // Root: full viewport, dark bg, no overflow leak
    <div
      className="relative w-screen overflow-hidden"
      style={{ height: "100dvh", backgroundColor: "rgba(10, 10, 30, 1)" }}
    >
      {/* ── 3D scene sits behind everything ── */}
      <SaturnScene section={section} />

      {/* ── Fixed header — outside scroll container so it never scrolls away ── */}
      <Header active={SECTION_IDS[section]} onNav={handleNav} />

      {/* ── Scrollable UI overlay ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={scrollRef}
          className="h-full overflow-y-scroll pointer-events-auto"
          style={{
            // Native smooth snap — no JS wheel hacks
            scrollSnapType: "y mandatory",
            WebkitOverflowScrolling: "touch",
            // Hide scrollbar visually but keep it functional
            scrollbarWidth: "none",        // Firefox
            msOverflowStyle: "none",       // IE/Edge
          }}
        >
          {/* Hide scrollbar on webkit */}
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {/* ── About ── */}
          <section
            id="about"
            style={{ scrollSnapAlign: "start", minHeight: "100dvh" }}
            className="flex flex-col items-center justify-center px-4 md:px-8 py-20"
          >
            <div className="w-full max-w-3xl">
              <AboutSection />
            </div>
          </section>

          {/* ── Skills ── */}
          <section
            id="skills"
            style={{ scrollSnapAlign: "start", minHeight: "100dvh" }}
            className="flex flex-col items-center justify-center px-4 md:px-8 py-20"
          >
            <div className="w-full max-w-3xl">
              <SkillSection />
            </div>
          </section>

          {/* ── Experience ── */}
          <section
            id="experience"
            style={{ scrollSnapAlign: "start", minHeight: "100dvh" }}
            className="flex flex-col items-center justify-center px-4 md:px-8 py-20"
          >
            <div className="w-full max-w-5xl">
              <ExperienceSection />
            </div>
          </section>

          {/* ── Portfolio ── */}
          <section
            id="portfolio"
            style={{ scrollSnapAlign: "start", minHeight: "100dvh" }}
            className="flex flex-col items-center justify-center px-4 md:px-8 py-20"
          >
            <div className="w-full max-w-5xl">
              <PortfolioSection />
            </div>
          </section>

          {/* ── Contact ── */}
          <section
            id="contact"
            style={{ scrollSnapAlign: "start", minHeight: "100dvh" }}
            className="flex flex-col items-center justify-center px-4 md:px-8 py-20"
          >
            <div className="w-full max-w-2xl">
              <ContactSection />
            </div>
          </section>

          {/* ── Footer snaps with contact, sits below it ── */}
          <div
            style={{ scrollSnapAlign: "none" }}
            className="flex justify-center px-4 pb-10"
          >
            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
}