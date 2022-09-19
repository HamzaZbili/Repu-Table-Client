import React, { useEffect, useState } from 'react'
import service from '../services/apiHandler'
import PendingApplications from './PendingApplications'

const EateryAdmin = () => {
  const [pendingApplications, setPendingApplications] = useState([])
  useEffect(() => {
    try {
      service
      .get(`/mod/eateries/pending`)
      .then((response) => {
        setPendingApplications(response.data)
      })
    } catch (error) {
      console.log(error)
    }
    }, [])
  return (
    <div>{pendingApplications.map((eatery) => {
      return<PendingApplications eatery={eatery}/>
    })
    }</div>
  )
}

export default EateryAdmin