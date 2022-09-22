import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ManageEateryLinks from "../components/Eateries/ManageEateryLinks";
import BackButton from "../components/Navbar/BackButton";
import useAuth from "../context/auth/useAuth";
import service from "../services/apiHandler";
import "./eateryAccount.css";

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
    { label: "reputable eateries", status: "repu-table", hasManageLink: false },
    {
      label: "please review",
      status: "review",
      text: "ammend",
    },
    { label: "application sent", status: "pending", text: "amend" },
    { label: "yet to apply", status: "false", text: "apply" },
  ];

  return (
    <>
      <div>
        <BackButton />
        {currentUser && (
          <h3 className="accountWelcomeMessage">Hi {currentUser.username}!</h3>
        )}
        {eateryCollections.map(({ status, ...collectionProps }) => (
          <ManageEateryLinks
            eateries={userEateries.filter(
              ({ isReputable }) => isReputable === status
            )}
            updateEateries={updateEateries}
            {...collectionProps}
            key={status}
          />
        ))}
      </div>
      <Link className="postNewEateryLink" to="/eateries/my/new">
        post a new eatery
      </Link>
    </>
  );
};

export default EateryAccount;
