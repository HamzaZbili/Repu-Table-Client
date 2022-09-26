import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <NavLink to="/guidelines">Guidelines</NavLink>
      <NavLink to="/joinus">Become Reputable</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
    </footer>
  );
};

export default Footer;
