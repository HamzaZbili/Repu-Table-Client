import React from "react";
import { Link } from "react-router-dom";
import "./myEateries.css";

const MyEateryApply = ({ eatery }) => {
  const manageEateryLink = `/eateries/join/${eatery._id}`;
  const eateryLink = `/eateries/my/${eatery._id}`;

  return (
    <div className="myEateries">
      <Link to={eateryLink}>{eatery.businessName}</Link>
      <Link to={manageEateryLink}>apply</Link>
    </div>
  );
};

export default MyEateryApply;
