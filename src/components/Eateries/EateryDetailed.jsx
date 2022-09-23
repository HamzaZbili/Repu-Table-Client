import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import "./eateryCard.css";
import Reviews from "./Reviews";
import StarRating from "./StarRating";

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
  const {
    businessName,
    photo,
    description,
    address,
    email,
    phoneNumber,
    website,
  } = eateryDetailed;
  return (
    <div className="eateryContainer">
      <BackButton />
      <img src={photo} alt="eatery image" id="eateryImage" />
      <div className="detailContainer">
        <div className="description">
          <h3>{businessName}</h3>
          {description}
        </div>
        <div className="eateryContactDetails">
          <p>{address}</p>
          <p>{website?.slice(0, 40)}...</p>
          <p>{phoneNumber}</p>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default EateryDetailed;
