import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import "./eateryCard.css";

const EateryDetailedOwner = () => {
  const [eateryDetailed, setEateryDetailed] = useState({});
  // const { currentUser} = useAuth()
  const { id } = useParams();
  useEffect(() => {
    try {
      service.get(`/eateries/my/${id}`).then((response) => {
        setEateryDetailed(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { businessName, photo, description } = eateryDetailed;
  return (
    <div className="eateryContainer">
      <BackButton />
      <img src={photo} alt="eatery image" id="eateryImage" />
      <div className="description">
        {" "}
        <h2>{businessName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EateryDetailedOwner;
