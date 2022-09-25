import React from "react";
import BackButton from "../components/Navbar/BackButton";
import "./guidelines.css";

const Guidelines = () => {
  return (
    <>
      <BackButton />
      <div className="guidelines">
        <h3>The Living Wage</h3>
        <div className="whiteBox">
          <p>
            The London Living Wage is an hourly rate of pay, currently set at
            £11.95. It is calculated independently to reflect the high cost of
            living in the capital, giving a worker in London and their family
            enough to afford the essentials and to save.
          </p>
        </div>
        <div className="equalOpportunitiesEmployer">
          <h4>Equal Opportunities Employer</h4>
          <div className="whiteBox">
            <p>
              An Equal Opportunity Employer is an organisation that agrees not
              to discriminate against any employee or job applicant because of
              race, colour, religion, national origin, sex, physical or mental
              disability, or age. In other words, an Equal Eployment Opportunity
              is given to everyone when they'reconsidered for various employment
              decisions and receive fair, unbiased treatment in the workplace.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guidelines;
