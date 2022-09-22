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
      {eateries.length ? <h3 className="eateryStatusTitles">{label}</h3> : ""}
      <div className="eateryManageOwnerContainer">
        {eateries?.map((eatery) => {
          return (
            <div key={eatery._id} className="eateryManageOwner">
              <Link to={`/eateries/my/${eatery._id}`}>
                {eatery.businessName}
              </Link>
              <div className="deleteAndManageButtons">
                <DeleteEatery id={eatery._id} updateEateries={updateEateries} />
                {hasManageLink && (
                  <Link
                    className="manageButton"
                    to={`/eateries/join/${eatery._id}`}
                  >
                    {text}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyEateryLinks;
