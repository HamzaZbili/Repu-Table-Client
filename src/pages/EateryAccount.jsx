import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ManageEateryLinks from "../components/Eateries/ManageEateryLinks";
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
  }, []);
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

  const eateryCollections = [
    { label: "reputable eateries", status: "repu-table" },
    {
      label: "please review",
      status: "review",
      text: "review",
      hasManageLink: false,
    },
    { label: "application sent", status: "pending" },
    { label: "yet to apply", status: "false" },
  ];

  return (
    <div className="accountContainer">
      <BackButton />
      {currentUser && <h5>Hi {currentUser.username}!</h5>}
      {eateryCollections.map(({ status, ...collectionProps }) => (
        <ManageEateryLinks
          eateries={userEateries.filter(
            ({ isReputable }) => isReputable === status
          )}
          updateEateries={updateEateries}
          {...collectionProps}
        />
      ))}
      <Link to="/eateries/my/new">post a new eatery</Link>
    </div>
  );
};

export default EateryAccount;
