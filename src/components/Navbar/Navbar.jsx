import { Link, NavLink } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../context/auth/useAuth"
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
				<div className="homeLogo">
					<Link to="/eateries">
						<img src="../../images/logo.png" alt="logo"/>
     				 </Link>
				</div>
		<nav className="Navbar" ref={navRef}>
				<>
				{currentUser? <>
				{currentUser.role === 'super'?
				<NavLink to="/mod/users" onClick={toggleNavbar}>
					users</NavLink> &&
				<NavLink to="/mod/eateries" onClick={toggleNavbar}>
					eateries</NavLink>
				:
				currentUser.role === 'moderator'?
				<NavLink to="/mod/eateries" onClick={toggleNavbar}>
					eateries</NavLink>:
				currentUser.role === 'user'?
				<NavLink to="/account" onClick={toggleNavbar}>
					account</NavLink>:
				<>
				</>}
				</>:
				
				
				<></>}
				</>
					{isLoggedIn && (
				<>
					{/* <NavLink to="/profile" onClick={toggleNavbar}>{currentUser.username}</NavLink> */}
					<NavLink to="/eateries" onClick={toggleNavbar}><div onClick={removeUser}>logout</div></NavLink>
					<div></div>
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
