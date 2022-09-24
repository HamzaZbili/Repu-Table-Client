import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import "./eateryCard.css";
import Reviews from "./Reviews";
import { useSpring, animated } from "react-spring";

const EateryDetailed = () => {
  const [eateryDetailed, setEateryDetailed] = useState({});
  const { id } = useParams();
  const styles = useSpring({
    from: {
      y: 800,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 250 },
  });
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
      <animated.div style={styles}>
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
      </animated.div>
    </div>
  );
};

export default EateryDetailed;
