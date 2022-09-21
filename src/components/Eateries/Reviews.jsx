import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import PostReview from "../Forms/PostReview";
import "./reviews.css";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState();
  const { id } = useParams();
  const updateReviewsList = useCallback(() => {
    try {
      const reviews = service
        .get(`/eateries/reviews/${id}`)
        .then((response) => setAllReviews(response.data));
    } catch (error) {}
  }, []);

  useEffect(() => {
    updateReviewsList();
  }, [updateReviewsList]);

  return (
    <>
      <PostReview updateReviewsList={updateReviewsList} />
      <div className="reviews">
        {allReviews
          ? allReviews.map((review) => {
              return <SingleReview key={review._id} review={review} />;
            })
          : ""}
      </div>
    </>
  );
};

export default Reviews;
