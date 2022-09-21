import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
            return <div key={review._id}>{review.content}</div>;
          })
        : ""}
    </>
  );
};

export default MyReviews;
