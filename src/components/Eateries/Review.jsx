import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Review = () => {
  return (
    <div>
        <ReactStars
    count={5}
    value={rating}
    size={24}
    activeColor="#00d7ff"
  />
  </div>
  )
}

export default Review