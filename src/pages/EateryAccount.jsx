import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MyEateryApply from "../components/Eateries/MyEateryApply";
import MyEateryReview from "../components/Eateries/MyEateryReview";
import MyEateryView from "../components/Eateries/MyEateryView";
import BackButton from "../components/Navbar/BackButton";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";

const EateryAccount = () => {
  const { currentUser } = useAuth();
  const [userEateries, setUserEateries] = useState([]);

  const updateEateries = useCallback(() => {
    service.get("/eateries/my/all").then((response) => {
      setUserEateries(response.data);
    });
  });
  useEffect(() => {
    updateEateries();
  }, [updateEateries]);

  if (!userEateries.length)
    return (
      <div className="accountContainer">
        <BackButton />
        <Link to="/eateries/my/new">post a new eatery</Link>
      </div>
    );

  const reviewEateries = userEateries.filter(
    (eatery) => eatery.isReputable === "review"
  );
  const reputableEateries = userEateries.filter(
    (eatery) => eatery.isReputable === "repu-table"
  );
  const pendingEateries = userEateries.filter(
    (eatery) => eatery.isReputable === "pending"
  );
  const yetToApplyEateries = userEateries.filter(
    (eatery) => eatery.isReputable === "false"
  );

  return (
    <div className="accountContainer">
      <BackButton />
      {currentUser ? <h5>Hi {currentUser.username}!</h5> : <></>}
      <div>
        {reputableEateries.length > 0 ? (
          <div>
            <h3>reputable eateries</h3>
            {reputableEateries.map((eatery) => {
              return (
                <MyEateryView
                  updateEateries={updateEateries}
                  eatery={eatery}
                  key={eatery._id}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {reviewEateries.length > 0 ? (
          <div>
            <h3>please review</h3>
            {reviewEateries.map((eatery) => {
              return (
                <MyEateryReview
                  updateEateries={updateEateries}
                  eatery={eatery}
                  key={eatery._id}
                  moderatorMessage={eatery.moderatorMessage}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {pendingEateries.length > 0 ? (
          <div>
            <h3>application sent</h3>
            {pendingEateries.map((eatery) => {
              return (
                <MyEateryView
                  updateEateries={updateEateries}
                  eatery={eatery}
                  key={eatery._id}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {yetToApplyEateries.length > 0 ? (
          <div>
            <h3>yet to apply</h3>
            {yetToApplyEateries.map((eatery) => {
              return (
                <MyEateryApply
                  updateEateries={updateEateries}
                  eatery={eatery}
                  key={eatery._id}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <Link to="/eateries/my/new">post a new eatery</Link>
    </div>
  );
};

export default EateryAccount;
