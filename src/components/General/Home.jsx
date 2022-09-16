import axios from 'axios'
import React, { useEffect, useState } from 'react'
import service from "../../services/apiHandler"
import EateryCard from '../Eateries/EateryCard'

const homeAPIURL = `${process.env.REACT_APP_API_URL}/eateries`

const Home = () => {
  const [allEateries, setAllEateries] = useState([])
  useEffect(() => {
    service
    .get('/eateries')
    .then((response) => {
      setAllEateries(response.data)
    })
  }, [])
  console.log(allEateries)

  return (
    <>
    <h1>Home</h1>
    </>
  )
}

export default Home