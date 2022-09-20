import React from 'react'
import './PendingApplications.css'

const PendingApplications = ({eatery}) => {
  const {businessName, website, address, phoneNumber} = eatery


  return (
    <div>
    <h4>{businessName}</h4>
    <p>{address}<br/>{phoneNumber}<br/>{website}</p>
    </div>
  )
}

export default PendingApplications