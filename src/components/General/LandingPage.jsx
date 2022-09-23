import React from "react";
import "./landingPage.css";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div id="landingPage">
      <NavLink to="/eateries">
        <h1>welcome</h1>
      </NavLink>
    </div>
  );
};

export default LandingPage;
