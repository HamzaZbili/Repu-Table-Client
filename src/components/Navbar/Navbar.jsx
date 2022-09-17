import { NavLink } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../context/auth/useAuth"
import "./Navbar.css"

const Navbar = () => {
	// We are getting the user and some functions from the context
	const { isLoggedIn, currentUser, removeUser } = useAuth()

	const navRef = useRef();

	const toggleNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	
	return (
		<header>
		<nav className="Navbar" ref={navRef}>
							{isLoggedIn && (
				<>
					<NavLink to="/profile" onClick={toggleNavbar}>{currentUser.username}</NavLink>
					<NavLink to="/eateries" onClick={toggleNavbar}><div onClick={removeUser}>Log-Out</div></NavLink>
				</>
			)}
			{!isLoggedIn && (
				<>
					<NavLink to="/signin" onClick={toggleNavbar}>Log in</NavLink>
					<NavLink to="/signup" onClick={toggleNavbar}>Sign Up</NavLink>
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
