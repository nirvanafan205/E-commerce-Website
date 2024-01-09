import React from "react";
import "./../style.css";

const HeroSection = () => {
  return (
    // Reduced the padding on the y-axis to py-40 as an example. You can adjust the number as needed.
    <div className="bg-blue-950 py-16 text-center">
      <div className="pb-96">
        <h1 className="text-5xl text-white font-bold mb-4 animate-breathing">
          Welcome to Royalty Gaming Pokémon Shop
        </h1>
        <p className="text-xl text-white pt-6">
          Find the rarest Pokémon cards and accessories here!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
