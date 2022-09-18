import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar' 
import "../../styles/layout.css"


const Layout = () => {
  return (
        <>
        <Navbar/> 
        <Outlet/>
        </>
    
  )
}

export default Layout