import React from "react";
import "./reviews.css";

const SingleReview = ({ review }) => {
  return (
    <div className="singleReview">
      <div className="reviewTitle">
        <h5>{review.author.username}</h5>
        <h5>{review.rating}</h5>
      </div>
      <div className="reviewContent">{review.content}</div>
    </div>
  );
};

export default SingleReview;
