import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleReview from "../components/Eateries/SingleReview";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    try {
      service
        .get(`/eateries/reviews/my/${currentUser._id}`)
        .then((response) => setMyReviews(response.data));
    } catch (error) {}
  }, []);
  return (
    <>
      {myReviews
        ? myReviews.map((review) => {
            return <SingleReview key={review._id} review={review} />;
          })
        : ""}
    </>
  );
};

export default MyReviews;
