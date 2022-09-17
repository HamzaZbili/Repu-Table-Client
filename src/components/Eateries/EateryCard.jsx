import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/eateryCard.css'

const EateryCard = ({eatery}) => {
    const [eateryForCard, setEateryForCard] = useState({})
    useEffect(() => {
        setEateryForCard(eatery)
      }, []);
      console.log(eateryForCard)
  return (
    <div className="eateryCard">{eateryForCard.businessName}
    <img className="eateryPicture" src={eateryForCard.photo} alt="eatery image"/>
    <div className="description">{eateryForCard.description}</div>
    </div>
  )
}

export default EateryCard