import React from 'react'
import './PendingApplications.css'

const PendingApplications = ({eatery}) => {
  return (
    <div>
    <h5>{eatery.businessName}</h5>
    <p>{eatery.hasSignedDeclaration}</p>
    <p>{eatery.isReputable}</p>
    <p>{eatery.website}</p>
    </div>
  )
}

export default PendingApplications