import React, { useEffect, useState } from 'react'
import service from "../../services/apiHandler"
import EateryCard from '../Eateries/EateryCard'
import { Link } from 'react-router-dom'

const HomeFeed = () => {
  const [allEateries, setAllEateries] = useState([])
  useEffect(() => {
    service
    .get('/eateries')
    .then((response) => {
      setAllEateries(response.data)
    })
  }, [])
  return (
    <>
    {allEateries.map((eatery) => {
      const eateryLink = `/eateries/${eatery._id}`
      return <Link to={eateryLink} key={eatery._id}>
      <EateryCard className="" eatery={eatery}/>
      </Link>
    })}
    </>
  )
}

export default HomeFeed