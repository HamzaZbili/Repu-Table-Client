import React from 'react'
import { NavLink } from 'react-router-dom'

const MyEatery = ({eatery}) => {
    const manageEateryLink = `/eateries/my/${eatery._id}`
    const eateryLink = `/eateries/${eatery._id}`
  return (
    <div>
        <NavLink to={eateryLink}>{eatery.businessName}</NavLink>
        <NavLink to={manageEateryLink}>manage</NavLink>
    </div>
  )
}

export default MyEatery