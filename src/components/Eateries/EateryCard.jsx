import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/eateryCard.css'

const EateryCard = ({eatery}) => {
    const [eateryForCard, setEateryForCard] = useState({})
    useEffect(() => {
        setEateryForCard(eatery)
      }, []);
    const {businessName, photo, description} = eateryForCard
  return (
    <div className="eateryCard">{businessName}
    <img className="eateryPicture" src={photo} alt="eatery image"/>
    <div className="description">{description? description.slice(0,80): ""}...</div>
    </div>
  )
}

export default EateryCard