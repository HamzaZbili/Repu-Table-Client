import React, { useEffect } from "react";
import { useState } from "react";
import "./eateryCard.css";
import StarRating from "./StarRating";
// import StarRating from "./StarRating";

const EateryCard = ({ eatery }) => {
  const [eateryForCard, setEateryForCard] = useState({});
  useEffect(() => {
    setEateryForCard(eatery);
  }, []);
  const { businessName, photo, rating } = eateryForCard;
  return (
    <div className="eateryCard" style={{ backgroundImage: `url(${photo})` }}>
      <div className="shortDetails">
        <h6>{businessName}</h6>
        {rating && <StarRating>{rating}</StarRating>}
      </div>
    </div>
  );
};

export default EateryCard;
