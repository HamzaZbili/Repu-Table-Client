import React from "react";
import { Link } from "react-router-dom";
import DeleteEatery from "../Forms/DeleteEatery";
import "./myEateries.css";

const MyEateryLinks = ({
  label,
  eateries,
  updateEateries,
  text,
  hasManageLink = true,
}) => {
  return (
    <>
      {eateries.length ? <h3>{label}</h3> : ""}
      <div className="myEateries">
        {eateries?.map((eatery) => {
          return (
            <div key={eatery._id}>
              <Link to={`/eateries/my/${eatery._id}`}>
                {eatery.businessName}
              </Link>
              <DeleteEatery id={eatery._id} updateEateries={updateEateries} />
              {hasManageLink && (
                <Link to={`/eateries/join/${eatery._id}`}>{text}</Link>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyEateryLinks;
