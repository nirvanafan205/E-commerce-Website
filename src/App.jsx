import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage"; // Import the LandingPage component
import "./style.css";

const App = () => {
  return (
    <div>
      <LandingPage /> {/* Render the LandingPage component */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
