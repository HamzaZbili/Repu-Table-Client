import React from "react";
import { Link } from "react-router-dom";
import DeleteEatery from "../Forms/DeleteEatery";
import "./myEateries.css";

const MyEateryReview = ({
  eatery,
  updateEateries,
  text = "review",
  hasManageLink = true,
}) => {
  const manageEateryLink = `/eateries/join/${eatery._id}`;
  const eateryLink = `/eateries/my/${eatery._id}`;

  return (
    <div className="myEateries">
      <Link to={eateryLink}>{eatery.businessName}</Link>
      <DeleteEatery id={eatery._id} updateEateries={updateEateries} />
      {hasManageLink && <Link to={manageEateryLink}>{text}</Link>}
    </div>
  );
};

export default MyEateryReview;
