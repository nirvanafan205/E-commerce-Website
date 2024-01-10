import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ContactModal from "./ContactModal";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const svgCode = `
    <!-- Paste your SVG code here -->
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" id="pokemon"><g transform="translate(-35.277 -1696.17)"><ellipse cx="68.713" cy="1749.805" fill="#ececec" rx="23.155" ry="4.478"></ellipse><path fill="#ffcc80" fill-rule="evenodd" stroke="#000" d="m77.95 1726.472 5.82-4.007-1.013-2.828 8.478-4.478 4.301 7.07-8.73.118 1.012 3.182-11.008 2.593z"></path><path fill="#ffcc80" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M54.796 1709.65a9.604 7.64 42.394 0 0 2.491 7.727 9.604 7.64 42.394 0 0 3.212 2.621 10.468 8.12 0 0 0-1.733 4.46 10.468 8.12 0 0 0 10.47 8.12 10.468 8.12 0 0 0 10.466-8.12 10.468 8.12 0 0 0-1.757-4.492 7.64 9.604 47.606 0 0 2.735-2.34 7.64 9.604 47.606 0 0 2.491-7.726 7.64 9.604 47.606 0 0-7.13 3.935 7.64 9.604 47.606 0 0-2.014 3.415 10.468 8.12 0 0 0-4.791-.91 10.468 8.12 0 0 0-5.164 1.066 9.604 7.64 42.394 0 0-2.147-3.821 9.604 7.64 42.394 0 0-7.13-3.934z"></path><path d="M82.342 1710.843c.677 1.881-1.085 4.669-1.085 4.669l-3.174-2.701s2.424-1.955 4.259-1.968z"></path><path fill="#333" d="M54.795 1709.65c-.95 2.64 1.524 6.554 1.524 6.554l4.454-3.792s-3.402-2.745-5.978-2.762z"></path><ellipse cx="-1165.101" cy="1356.338" rx="1.727" ry="1.716" transform="matrix(.76075 -.64905 .70121 .71295 0 0)"></ellipse><ellipse cx="-1164.525" cy="1355.766" fill="#fff" rx=".576" ry=".572" transform="matrix(.76075 -.64905 .70121 .71295 0 0)"></ellipse><ellipse cx="-1207.99" cy="1319.224" rx="1.722" ry="1.721" transform="matrix(.73498 -.67809 .72854 .685 0 0)"></ellipse><circle cx="-1207.416" cy="1318.65" r=".574" fill="#fff" transform="matrix(.73498 -.67809 .72854 .685 0 0)"></circle><g transform="matrix(1.7815 0 0 1.3434 73.717 305.956)"><ellipse cx="-2.511" cy="1058.688" rx="1.666" ry=".662"></ellipse><path d="M-4.414 1057.207a.555.555 0 0 0-.518.537c-.035.744.55 1.315 1.272 1.586a3.4 3.4 0 0 0 2.285.022c.731-.257 1.332-.802 1.332-1.547.012-.752-1.123-.752-1.111 0 0 .103-.822.123-1.279.283-.456.16.475.184.03.017-.445-.167-1.424-.204-1.42-.308a.556.556 0 0 0-.591-.59z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"></path><ellipse cx="-2.528" cy="1058.972" rx=".972" ry=".397"></ellipse></g><ellipse cx="473.377" cy="1574.411" fill="#ff2a2a" rx="2.173" ry="1.144" transform="matrix(.9087 .41745 -.23336 .9724 0 0)"></ellipse><ellipse cx="1994.135" cy="-1445.732" fill="#ff2a2a" rx="1.945" ry="1.481" transform="matrix(-.67545 .7374 -.9839 -.17869 0 0)"></ellipse><ellipse cx="69.142" cy="1725.524" rx="1.225" ry=".308"></ellipse><path fill="#ff2a2a" stroke="#000" stroke-linecap="round" d="M45.95 1705.35a19.714 18.297.784 0 0-4.249 8.14 19.714 18.297.784 0 0 6.293 17.398l10.07-10.603a4.553 4.227 0 0 1-.536-.828 4.553 4.227 0 0 1 2.308-5.585 4.553 4.227 0 0 1 4.16.224l10.167-10.529a19.714 18.297.784 0 0-19.346-3.77 19.714 18.297.784 0 0-8.866 5.552z"></path><path fill="#f2f2f2" stroke="#000" stroke-linecap="round" d="M91.862 1731.474a19.69 18.318 0 0 1-9.892 15.889 19.69 18.318 0 0 1-19.737-.075 19.69 18.318 0 0 1-9.752-15.963l19.69.149z" transform="rotate(.079) skewX(-.013)"></path><path fill="#fff" d="M83.104 1733.023a15.325 14.257-.002 0 1-7.716 12.356 15.325 14.257-.002 0 1-15.36-.076 15.325 14.257-.002 0 1-7.573-12.433l15.324.134z"></path><ellipse cx="809.816" cy="1577.778" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.001" rx="4.501" ry="4.282" transform="matrix(.92483 .3804 -.4307 .9025 0 0)"></ellipse><ellipse cx="810.61" cy="1578.18" rx="1.5" ry="1.426" transform="matrix(.925 .37998 -.43113 .90229 0 0)"></ellipse><rect width="5.366" height="3.319" x="57.088" y="1729.935" fill="#ffcc80" stroke="#000" stroke-linecap="round" stroke-linejoin="round" ry="1.267"></rect><rect width="5.366" height="3.319" x="76.324" y="1729.602" fill="#ffcc80" stroke="#000" stroke-linecap="round" stroke-linejoin="round" ry="1.267"></rect><path fill="red" fill-rule="evenodd" d="m88.043 1717.789-.451 1.195 1.892.384-2.027 2.135 6.578-.085-3.109-5.166z"></path></g></svg>
  `; // Replace with the actual SVG code you provided

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin }); // Redirect to home page after logout
    navigate("/"); // Use navigate function for navigation
  };

  return (
    <header className="bg-purple-950 py-4">
      <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4 lg:mb-0">
          <div dangerouslySetInnerHTML={{ __html: svgCode }} />
          <div className="text-white text-2xl font-bold">
            Royalty Gaming Pokémon Shop
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-8">
          <a href="/" className="text-white text-lg hover:text-red-500">
            Home
          </a>
          <a href="/shop" className="text-white text-lg hover:text-red-500">
            Shop
          </a>
          <a href="/about" className="text-white text-lg hover:text-red-500">
            About Us
          </a>
          <button
            onClick={openModal}
            className="text-white text-lg hover:text-red-500 cursor-pointer"
          >
            Contact
          </button>

          {/* Conditionally render "Login" or "Logout" based on authentication status */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout} // Use handleLogout function for logout
              className="text-white text-lg hover:text-red-500 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="text-white text-lg hover:text-red-500 cursor-pointer"
            >
              Login
            </button>
          )}
        </nav>
      </div>

      {/* Contact Modal */}
      {isModalOpen && <ContactModal closeModal={closeModal} />}
    </header>
  );
};

export default Header;
