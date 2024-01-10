import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate(); // Use useNavigate hook

  if (isAuthenticated) {
    navigate("/"); // Redirect to the homepage if authenticated
  }

  return (
    <div>
      <h1 className="text-blue-500">Hello</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default LoginPage;
