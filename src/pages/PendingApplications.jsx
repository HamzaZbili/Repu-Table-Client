import React from "react";
import ReputableModeratorForm from "../components/Forms/ReputableModeratorForm";
import "./PendingApplications.css";

const PendingApplications = ({ eatery, updatePendingApplications }) => {
  const {
    businessName,
    website,
    address,
    phoneNumber,
    proofOfLivingWage,
    noteToUs,
  } = eatery;

  return (
    <div id="pendingApplicationsContainer">
      <h4>{businessName}</h4>
      <p>
        {address}
        <br />
        {phoneNumber}
        <br />
        {website}
      </p>
      {noteToUs && (
        <article>
          The eatery owner has left the following message: {noteToUs}
        </article>
      )}
      <img src={proofOfLivingWage} alt="proof of livingwage" />
      <ReputableModeratorForm
        eatery={eatery}
        updatePendingApplications={updatePendingApplications}
      />
    </div>
  );
};

export default PendingApplications;
