import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MyEateries = ({eatery}) => {
  return (
    <>
    <div>{eatery.businessName}</div>
    </>
  )
}

export default MyEateries