import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faDiscord,
  faEbay,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import BannerImage from "../images/Banner.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white pt-4 pb-20"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Stay Up to Date Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left text-pink-300">
              Stay Up to Date
            </h2>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/royaltygamingpokemon/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-cyan-300 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
              <a
                href="https://www.youtube.com/@RoyaltyGamingPokemon"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-cyan-200 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faYoutube} size="3x" />
              </a>
              <a
                href="https://discord.com/invite/qTH96J7"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-cyan-300 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faDiscord} size="3x" />
              </a>
              <a
                href="https://www.ebay.com/str/sscollectiblesgames"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-cyan-300 hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faEbay} size="3x" />
              </a>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-center md:text-left text-pink-300 pt-12">
              We accept
            </h2>

            <div className="flex justify-center md:justify-start">
              <a className="mx-2 text-cyan-300 text-5xl">
                <Icon icon="simple-icons:cashapp" />
              </a>

              <a className="mx-2 text-cyan-200 text-5xl">
                <Icon icon="fa6-brands:cc-paypal" />
              </a>
              <a
                href="https://discord.com/invite/qTH96J7"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-cyan-300 text-5xl"
              >
                <Icon icon="ion:logo-venmo" />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mt-80 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-yellow-500">
              Contact Us
            </h2>
            <div className="text-lg font-bold text-emerald-300">
              <p className="mb-2">Phone: 626-577-6699</p>
              <p className="mb-2">Email: sales@royaltygaming.com</p>
              <p className="mb-2">Hours: Mon, Tue, Th, F, Sat</p>
              <p className="text-right">6 p.m - 1 a.m EST</p>
              <p>770 South Arroyo Parkway #110</p>
              <p>Pasadena, CA 91105</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
