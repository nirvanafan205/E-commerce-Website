import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="h-1 bg-gradient-to-r from-black via-yellow-400 to-black"></div>
      <HeroSection />
    </div>
  );
};

export default LandingPage;
