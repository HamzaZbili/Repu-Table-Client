import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MyEatery from '../components/Eateries/MyEatery'
import useAuth from '../context/auth/useAuth'
import service from '../services/apiHandler'


const UserAccount = () => {
  const { currentUser} = useAuth()
  const [userEateries, setUserEateries] = useState([])
  useEffect(() => {
    service
    .get('/eateries/my/all')
    .then((response) => {
      setUserEateries(response.data)
    })
  }, [])
  return (
    <div className="accountContainer">
    {currentUser? <h5>Hi {currentUser.username}!</h5>:
    <></>}
    <div>
    <>{userEateries? <h3>my eateries</h3>: ''}</>
    <>
    {userEateries
    .map((eatery) => {
      return <MyEatery eatery={eatery} key={eatery._id}/>
    })}
    </>
    </div>
    </div>
  )
}

export default UserAccount