import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <NavLink to="/guidelines">guidelines</NavLink>
        <NavLink to="/joinus">become reputable</NavLink>
        <NavLink to="/contactus">contact us</NavLink>
    </footer>
  )
}

export default Footer