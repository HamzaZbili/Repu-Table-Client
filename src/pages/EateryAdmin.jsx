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
    <><h2>pending applications</h2>
    <div>{pendingApplications.map((eatery) => {
      return<PendingApplications eatery={eatery} key={eatery.id}/>
    })
    }</div>
  </>)
}

export default EateryAdmin