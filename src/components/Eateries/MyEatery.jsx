import React from 'react'
import { NavLink } from 'react-router-dom'
import './myEateries.css'

const MyEatery = ({eatery}) => {
    const manageEateryLink = `/eateries/join/${eatery._id}`
    const eateryLink = `/eateries/my/${eatery._id}`
    
  return (
    <div className='myEateries'>
        <NavLink to={eateryLink}>{eatery.businessName}</NavLink>
        <NavLink to={manageEateryLink}>manage</NavLink>
    </div>
  )
}

export default MyEatery