import { NavLink } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../context/auth/useAuth"
import SearchEateries from "../Forms/SearchEateries";
import "../../styles/navbar.css"

const Navbar = () => {
	// We are getting the user and some functions from the context
	const { isLoggedIn, currentUser, removeUser } = useAuth()

	const navRef = useRef();

	const toggleNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	
	return (
		<header>
				<div className="homeLogoAndSearchBar">
		        <NavLink to="/eateries">
				<h1>repuTable</h1>
				<h6>great employers, great food</h6>
        		</NavLink>
				<SearchEateries/>
				</div>
		<nav className="Navbar" ref={navRef}>
							{isLoggedIn && (
				<>
					<NavLink to="/profile" onClick={toggleNavbar}>{currentUser.username}</NavLink>
					<NavLink to="/eateries" onClick={toggleNavbar}><div onClick={removeUser}>logout</div></NavLink>
				</>
			)}
			{!isLoggedIn && (
				<>
					<NavLink to="/signin" onClick={toggleNavbar}>login</NavLink>
					<NavLink to="/signup" onClick={toggleNavbar}>sign up</NavLink>
				</>
			)}
				<button
					className="nav-btn nav-close-btn"
					onClick={toggleNavbar}>
					<FaTimes />
				</button>
				</nav>
			<button className="nav-btn" onClick={toggleNavbar}>
				<FaBars />
			</button>
		</header>
	)
}

export default Navbar
