import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../style.css";

const HeroSection = () => {
  const [imageData, setImageData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch random image data from the API endpoint
    axios
      .get("http://localhost:3001/api/random-images")
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random image data:", error);
      });
  }, []);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      // Clicking on the currently enlarged image again closes the modal
      closeModal();
    } else {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-950 py-4 text-center">
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
                className="max-w-sm h-auto inline-block rounded-xl cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-5/6 h-5/6 max-w-screen-lg max-h-screen-md relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={`data:${selectedImage.contentType};base64,${selectedImage.data}`}
                alt={selectedImage.name}
                className="max-w-full max-h-full rounded-lg"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
