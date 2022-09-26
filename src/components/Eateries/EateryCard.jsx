import React, { useEffect } from "react";
import { useState } from "react";
import service from "../../services/apiHandler";
import "./eateryCard.css";
import StarRating from "./StarRating";
// import StarRating from "./StarRating";

const EateryCard = ({ eatery }) => {
  const [eateryForCard, setEateryForCard] = useState({});
  const [eateryReviews, setEeateryReviews] = useState([]);

  useEffect(() => {
    setEateryForCard(eatery);
  }, []);

  useEffect(() => {
    try {
      const reviews = service
        .get(`/eateries/reviews/${eatery._id}`)
        .then((response) => setEeateryReviews(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  let rating = 0;
  eateryReviews?.forEach((review) => (rating += review.rating));
  const average = rating / eateryReviews?.length;

  const { businessName, photo } = eateryForCard;
  return (
    <div className="eateryCard" style={{ backgroundImage: `url(${photo})` }}>
      <div className="shortDetails">
        <h6 className="eateryNameEateryCard">{businessName}</h6>
        {rating && <StarRating key={1}>{average}</StarRating>}
      </div>
    </div>
  );
};

export default EateryCard;
