import React from "react";
import BackButton from "../components/Navbar/BackButton";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <BackButton />
      <h3 className="contactTitle">contact us</h3>
      <div className="whiteBox">
        <p>
          If you have any questions about us or this project, please do no
          hesitate to get in touch using the email address below
        </p>
        <p>
          Should you know of any changes to the standards of a listed employer;
          we would greatly appreciate you notifying us
        </p>
      </div>
      <div className="contactDetails">
        <h5>&nbsp;&nbsp;&nbsp;&nbsp; Hamza Zbili</h5>
        <h5>hamza.zbili.92@gmail.com</h5>
      </div>
    </div>
  );
};

export default ContactUs;
