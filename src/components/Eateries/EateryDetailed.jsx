import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import "./eateryCard.css";

const EateryDetailed = () => {
  const [eateryDetailed, setEateryDetailed] = useState({});
  const { id } = useParams();
  useEffect(() => {
    try {
      service.get(`/eateries/${id}`).then((response) => {
        setEateryDetailed(response.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { businessName, photo, description } = eateryDetailed;
  return (
    <div className="eateryContainer">
      <BackButton />
      <img src={photo} alt="eatery image" />
      <h2>{businessName}</h2>
      <p>{description}</p>
    </div>
  );
};

export default EateryDetailed;
