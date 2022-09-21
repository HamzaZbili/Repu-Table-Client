import React from "react";
import { Link } from "react-router-dom";
import DeleteEatery from "../Forms/DeleteEatery";
import "./myEateries.css";

const MyEateryApply = ({ eatery, updateEateries }) => {
  const manageEateryLink = `/eateries/join/${eatery._id}`;
  const eateryLink = `/eateries/my/${eatery._id}`;

  return (
    <div className="myEateries">
      <Link to={eateryLink}>{eatery.businessName}</Link>
      <DeleteEatery id={eatery._id} onClick={updateEateries} />
      <Link to={manageEateryLink}>apply</Link>
    </div>
  );
};

export default MyEateryApply;
