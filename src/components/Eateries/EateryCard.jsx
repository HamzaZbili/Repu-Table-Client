import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/eateryCard.css'

const EateryCard = ({eatery}) => {
    const [eateryForCard, setEateryForCard] = useState({})
    useEffect(() => {
        setEateryForCard(eatery)
      }, []);
    const {businessName, photo, rating} = eateryForCard
  return (
    <div className="eateryCard">{businessName}dffadfd
    <img className="eateryPicture" src={photo} alt="eatery image"/>
    </div>
  )
}

export default EateryCard