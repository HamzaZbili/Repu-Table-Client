import axios from 'axios'
import React, { useEffect, useState } from 'react'
import service from "../../services/apiHandler"
import EateryCard from '../Eateries/EateryCard'

const Home = () => {
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
      return <EateryCard key={eatery._id} eatery={eatery}/>
    })}
    </>
  )
}

export default Home