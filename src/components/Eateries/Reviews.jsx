import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import PostReview from "../Forms/PostReview";
import "./reviews.css";
import SingleReview from "./SingleReview";
import StarRating from "./StarRating";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  const updateReviewsList = useCallback(() => {
    try {
      const reviews = service
        .get(`/eateries/reviews/${id}`)
        .then((response) => setAllReviews(response.data));
    } catch (error) {
      setError(error.data.message);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    updateReviewsList();
  }, [updateReviewsList]);

  let rating = 0;
  allReviews?.forEach((review) => (rating += review.rating));
  const average = rating / allReviews?.length;
  console.log(rating, allReviews?.length);
  return (
    <>
      <div id="averageRating">
        <StarRating>{isNaN(average) ? 0 : average}</StarRating>
      </div>

      <PostReview updateReviewsList={updateReviewsList} />
      <div className="reviews">
        {allReviews?.map((review) => {
          return (
            <SingleReview key={review._id} review={review} average={average} />
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
