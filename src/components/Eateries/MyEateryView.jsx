import React from "react";
import { Link } from "react-router-dom";
import DeleteEatery from "../Forms/DeleteEatery";
import "./myEateries.css";

const MyEateryView = ({ eatery }) => {
  const eateryLink = `/eateries/my/${eatery._id}`;

  return (
    <div className="myEateries">
      <Link to={eateryLink}>{eatery.businessName}</Link>
      <DeleteEatery id={eatery._id} />
      <Link to={eateryLink}>view</Link>
    </div>
  );
};

export default MyEateryView;
