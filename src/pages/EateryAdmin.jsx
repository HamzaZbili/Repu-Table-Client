import React, { useCallback, useEffect, useState } from "react";
import BackButton from "../components/Navbar/BackButton";
import service from "../services/apiHandler";
import PendingApplications from "./PendingApplications";
import "./eateryAdmin.css";

const EateryAdmin = () => {
  const [pendingApplications, setPendingApplications] = useState([]);

  const updatePendingApplications = useCallback(() => {
    try {
      service.get(`/mod/eateries/pending`).then((response) => {
        setPendingApplications(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    updatePendingApplications();
  }, [updatePendingApplications]);

  return (
    <>
      <BackButton />
      {pendingApplications.length ? (
        <h2 id="pendingApplications">pending applications</h2>
      ) : (
        <h2 id="pendingApplications">no applications pending</h2>
      )}
      <div>
        {pendingApplications.map((eatery) => {
          return (
            <PendingApplications
              eatery={eatery}
              key={eatery._id}
              updatePendingApplications={updatePendingApplications}
            />
          );
        })}
      </div>
    </>
  );
};

export default EateryAdmin;
