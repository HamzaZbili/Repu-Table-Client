import React from "react";
import ReputableModeratorForm from "../components/Forms/ReputableModeratorForm";
import ReputableApplicationForm from "../components/Forms/ReputableModeratorForm";
import "./PendingApplications.css";

const PendingApplications = ({ eatery }) => {
  const { businessName, website, address, phoneNumber, proofOfLivingWage } =
    eatery;

  return (
    <div>
      <h4>{businessName}</h4>
      <p>
        {address}
        <br />
        {phoneNumber}
        <br />
        {website}
      </p>
      <img src={proofOfLivingWage} alt="proof of livingwage" />
      <ReputableModeratorForm eatery={eatery} />
    </div>
  );
};

export default PendingApplications;
