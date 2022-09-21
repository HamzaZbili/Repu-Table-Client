import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const DeleteEatery = ({ id, updateEateries }) => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      service.delete(`/eateries/my/delete/${id}`).then(() => {
        updateEateries();
        navigate("/eateries/my");
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>delete</button>;
};

export default DeleteEatery;
