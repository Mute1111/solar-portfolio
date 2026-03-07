import React, { useState, useEffect } from "react";
import SaturnScene from "./components/SaturnScene";

import Header from "./components/uiElements/Header";
import Footer from "./components/uiElements/Footer";

import AboutSection from "./components/uiElements/AboutSection";
import ExperienceSection from "./components/uiElements/ExperienceSection";
import ContactSection from "./components/uiElements/ContactSection";
import SkillSection from "./components/uiElements/SkillsSection";

export default function App() {
  const [section, setSection] = useState(0);
  const [loading, setLoading] = useState(true); // <-- loading state

  const sections = [
    <>
      <Header />
      <AboutSection />
    </>,
    <ExperienceSection />,
    <SkillSection />,
    <ContactSection />,
    <Footer />,
  ];

  // Simulate loading delay or wait for resources to load
  useEffect(() => {
    // You can replace this with actual resource loading if needed
    const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#0a0a1e] text-white">
        <div className="flex flex-col items-center">
          <p className="text-xl mb-4">Hi There!</p>
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "rgba(10, 10, 30, 1)" }}>
      {/* 3D Scene */}
      <SaturnScene section={section} />

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scroll Container */}
        <div className="overflow-y-scroll snap-y snap-mandatory h-full pointer-events-auto">
          {sections.map((Component, index) => (
            <div
              key={index}
              className={`snap-start flex flex-col items-center justify-start min-h-screen px-6 py-12 md:py-24`}
              onWheel={(e) => {
                if (e.deltaY > 0) {
                  setSection((s) => Math.min(s + 1, sections.length - 1));
                } else {
                  setSection((s) => Math.max(s - 1, 0));
                }
              }}
            >
              <div className="w-full max-w-5xl">{Component}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}