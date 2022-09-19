import React, { useEffect, useState } from 'react'
import service from "../../services/apiHandler"
import EateryCard from '../Eateries/EateryCard'
import { Link } from 'react-router-dom'
import SearchEateries from '../Forms/SearchEateries'

const HomeFeed = () => {
  const [allEateries, setAllEateries] = useState([])
  const [searchQuery, setSearchQuery] = useState(``);
  useEffect(() => {
    service
    .get('/eateries')
    .then((response) => {
      setAllEateries(response.data)
    })
  }, [])
  return (
    <>
      <SearchEateries setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
    {allEateries
    .map((eatery) => {
      const eateryLink = `/eateries/${eatery._id}`
      return <Link to={eateryLink} key={eatery._id}>
      <EateryCard eatery={eatery}/>
      </Link>
    })}
    </>
  )
}

export default HomeFeed