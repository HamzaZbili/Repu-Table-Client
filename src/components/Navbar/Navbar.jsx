import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../context/auth/useAuth";
import "./navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  // We are getting the user and some functions from the context
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="homeLogo">
        <Link to="/eateries">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="Navbar" ref={navRef}>
        <>
          {currentUser ? (
            <>
              {currentUser.role === "super" ? (
                <>
                  <NavLink to="/mod/users" onClick={toggleNavbar}>
                    <div>users</div>
                  </NavLink>
                  <NavLink to="/mod/eateries" onClick={toggleNavbar}>
                    <div>pending</div>
                  </NavLink>
                </>
              ) : currentUser.role === "moderator" ? (
                <NavLink to="/mod/eateries" onClick={toggleNavbar}>
                  <div>pending</div>
                </NavLink>
              ) : currentUser.role === "eateryAccount" ? (
                <NavLink to="/eateries/my" onClick={toggleNavbar}>
                  <div>my eateries</div>
                </NavLink>
              ) : currentUser.role === "user" ? (
                <>
                  <NavLink to="/eateries/my" onClick={toggleNavbar}>
                    <div>join us!</div>
                  </NavLink>
                  <NavLink
                    to={`/eateries/reviews/my/${currentUser._id}`}
                    onClick={toggleNavbar}
                  >
                    <div>my reviews</div>
                  </NavLink>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </>
        {isLoggedIn && (
          <>
            <NavLink to="/eateries" onClick={toggleNavbar}>
              <div onClick={removeUser}>logout</div>
            </NavLink>
          </>
        )}
        {!isLoggedIn && (
          <>
            <NavLink to="/signin" onClick={toggleNavbar}>
              <div>login</div>
            </NavLink>
            <NavLink to="/signup" onClick={toggleNavbar}>
              <div>sign up</div>
            </NavLink>
          </>
        )}
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
