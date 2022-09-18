import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../../services/apiHandler'
import '../../styles/eateryCard.css'

const EateryDetailed = () => {
    const [eateryDetailed, setEateryDetailed] = useState({})
    const { id } = useParams()
    useEffect(() => {
        service
        .get(`/eateries/${id}`)
        .then((response) => {
            setEateryDetailed(response.data[0])
        })
      }, [])
    const {businessName, photo, description} = eateryDetailed
  return (
    <div className="eateryCard">
        <img src={photo} alt="eatery image"/>
        <h2>{businessName}</h2>

        <p>{description}</p>
    </div>
  )
}

export default EateryDetailed