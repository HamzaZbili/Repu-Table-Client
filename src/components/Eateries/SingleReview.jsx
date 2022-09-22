import React from "react";
import "./singleReview.css";
import StarRating from "./StarRating";

const SingleReview = ({ review }) => {
  return (
    <div className="singleReview">
      <div className="reviewTitle">
        <h5>{review.author.username}</h5>
        <div>
          <StarRating>{review.rating}</StarRating>
        </div>
      </div>
      <div className="reviewContent">{review.content}</div>
    </div>
  );
};

export default SingleReview;
