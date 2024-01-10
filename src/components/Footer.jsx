import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faDiscord,
  faEbay,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white pb-48 text-center">
      {/* Add Font Awesome Icons */}
      <div className="flex flex-col md:flex-row md:justify-left md:space-x-4">
        <a href="https://www.instagram.com/royaltygamingpokemon/">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://www.youtube.com/@RoyaltyGamingPokemon">
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        <a href="https://discord.com/invite/qTH96J7">
          <FontAwesomeIcon icon={faDiscord} size="3x" />
        </a>
        <a href="https://www.ebay.com/str/sscollectiblesgames">
          <FontAwesomeIcon icon={faEbay} size="3x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

