import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../../context/auth/useAuth'
import service from '../../services/apiHandler'
import '../../styles/eateryCard.css'

const EateryDetailedOwner = () => {
    const [eateryDetailed, setEateryDetailed] = useState({})
    const { currentUser} = useAuth()
    const { id } = useParams()
    useEffect(() => {
      try {
        service
        .get(`/eateries/my/${id}`)
        .then((response) => {
            setEateryDetailed(response.data)
        })
      } catch (error) {
        console.log(error)
      }

      }, [])
    const {businessName, photo, description} = eateryDetailed
  return (
    <div className="eateryContainer">
        <img src={photo} alt="eatery image"/>
          <h2>{businessName}</h2>
          <p>{description}</p>
    </div>
  )
}

export default EateryDetailedOwner