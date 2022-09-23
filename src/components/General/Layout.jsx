import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import "../../styles/layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="layoutOutletMain">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
