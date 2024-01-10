import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react"; // Import Auth0Provider
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";



const App = () => {
  return (
    <Auth0Provider
      domain="dev-x4x5nr2uoalbcupx.us.auth0.com"
      clientId="AFy9I7SfmDIohugaFRPrMMmoB2nyVTKF"
      redirectUri={window.location.origin + "/login"} // Set the correct redirectUri
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
