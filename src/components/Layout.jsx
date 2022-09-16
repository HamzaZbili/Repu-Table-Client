import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { NavLink } from "react-router-dom"


const Layout = () => {
  return (
        <>
        <NavLink className="logo" to="/">
				<h1>Repu-Table</h1>
		</NavLink>
        <Navbar/>
        <Outlet/>
        </>
    
  )
}

export default Layout