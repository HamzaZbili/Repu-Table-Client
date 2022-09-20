import React from "react";
import ReputableApplicationForm from "../components/Forms/ReputableApplicationForm";
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
      <ReputableApplicationForm eatery={eatery} />
    </div>
  );
};

export default PendingApplications;
