import React from "react";
import { Link } from "react-router-dom";
import "./myEateries.css";

const MyEateryView = ({ eatery }) => {
  const eateryLink = `/eateries/my/${eatery._id}`;

  return (
    <div className="myEateries">
      <Link to={eateryLink}>{eatery.businessName}</Link>
      <Link to={eateryLink}>view</Link>
    </div>
  );
};

export default MyEateryView;
