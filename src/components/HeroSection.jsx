import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../style.css";

const HeroSection = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch image data from the API endpoint
    axios
      .get("http://localhost:3001/api/images")
      .then((response) => {
        setImageData(response.data.slice(0, 3)); // Limit to the first three images
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  }, []);

  return (
    <div className="bg-blue-950 py-16 text-center">
      <h1 className="text-5xl text-white font-bold mb-4 animate-breathing">
        Welcome to Royalty Gaming Pokémon Shop
      </h1>
      <p className="text-xl text-white pt-6">
        Find the rarest Pokémon cards and accessories here!
      </p>
      <div className="text-white pt-6">
        <div className="flex flex-wrap justify-center items-center">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="mb-4 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center"
            >
              <img
                src={`data:${image.contentType};base64,${image.data}`}
                alt={image.name}
                className="max-w-xs h-auto inline-block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
