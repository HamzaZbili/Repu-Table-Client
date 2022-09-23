import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const DeleteEatery = ({ id, updateEateries }) => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("deleted");
      service.delete(`/eateries/my/delete/${id}`).then(() => {
        updateEateries();
        navigate("/eateries/my");
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <button
      className="deleteEateryButton"
      onClick={(e) => {
        if (window.confirm("Are you sure you wish to delete this eatery?"))
          handleClick(e);
      }}
    >
      delete
    </button>
  );
};

export default DeleteEatery;
