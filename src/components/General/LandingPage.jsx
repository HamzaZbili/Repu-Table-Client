import React from "react";
import { NavLink } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div id="landingPage">
      <NavLink to="/eateries">
        <h1>Welcome</h1>
      </NavLink>
    </div>
  );
};

export default LandingPage;
