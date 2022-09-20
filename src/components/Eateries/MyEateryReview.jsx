import React from "react";
import { Link } from "react-router-dom";
import "./myEateries.css";

const MyEateryReview = ({ eatery }) => {
  const manageEateryLink = `/eateries/join/${eatery._id}`;
  const eateryLink = `/eateries/my/${eatery._id}`;

  return (
    <div className="myEateries">
      <Link to={eateryLink}>{eatery.businessName}</Link>
      <Link to={manageEateryLink}>review</Link>
    </div>
  );
};

export default MyEateryReview;
