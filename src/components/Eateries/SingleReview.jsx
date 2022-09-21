import React from "react";
import "./reviews.css";

const SingleReview = ({ review }) => {
  return (
    <div className="singleReview">
      {review.author.username}
      <br />
      {review.rating}
      <br />
      {review.content}
      <br />
    </div>
  );
};

export default SingleReview;
