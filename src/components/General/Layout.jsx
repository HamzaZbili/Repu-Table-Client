import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { NavLink } from "react-router-dom"
import SearchEateries from '../Forms/SearchEateries'
import "../../styles/layout.css"


const Layout = () => {
  return (
        <>
        <NavLink className="logo" to="/eateries">
				<h1>Repu-Table</h1>
        </NavLink>
               <div className="searchbarAndNav"><SearchEateries/><Navbar/></div> 
        <Outlet/>
        </>
    
  )
}

export default Layout