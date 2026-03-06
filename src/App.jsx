import React from "react";
import SaturnScene from "./components/SaturnScene";
import Header from "./components/uiElements/Header";
import Footer from "./components/uiElements/Footer";
import FloatingWindow from "./components/uiElements/FloatingWindow";
export default function App() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundColor: "rgba(10, 10, 30, 1)" }} // dark scene background
    >
      {/* 3D scene in the background */}
      <SaturnScene />

      {/* UI overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col gap-6">
        {/* Floating Header */}
        <Header />
        <Footer />
        <FloatingWindow />
        {/* Future floating panels (About, Footer, Projects) */}
        {/* They will use the same frosted glass design */}
      </div>
    </div>
  );
}