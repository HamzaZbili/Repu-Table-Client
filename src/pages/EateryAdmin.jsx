import React, { useEffect, useState } from 'react'
import service from '../services/apiHandler'

const EateryAdmin = () => {
  const [pendingApplications, setPendingApplications] = useState()
  useEffect(() => {
    service
    .get('/mod/eateries/pending')
    .then(({data}) => {
      setPendingApplications(data)
    })
  }, [])
  console.log(pendingApplications)
  return (
    <div></div>
  )
}

export default EateryAdmin