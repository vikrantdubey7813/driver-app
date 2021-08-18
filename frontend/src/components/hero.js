import React from "react";
import LoginButton from "./login-button";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Driver App</h1>
    <p className="lead">
      <LoginButton />
    </p>
  </div>
);

export default Hero;
