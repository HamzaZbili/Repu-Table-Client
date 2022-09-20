import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import service from "../../services/apiHandler";
import "./becomeReputableForm.css";

const BecomeReputable = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    proofOfLivingWage: "",
    declaration: false,
    noteToUs: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      data.append("image", file);
      const res = await service.patch(`/eateries/my/${id}`, data);
      console.log(res);
      navigate("/my/eateries");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <h4>become reputable</h4>
        <label htmlFor="proofOfLivingWage">
          please attach proof that you are a living wage employer
        </label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            setFile(e.target.files[0]);
          }}
          value={formData.proofOfLivingWage}
          type="file"
          id="proofOfLivingWage"
          name="proofOfLivingWage"
          accept="png jpeg"
          required
        />
        <label htmlFor="noteToUs">additional information (optional)</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.noteToUs}
          type="text"
          id="noteToUs"
          name="noteToUs"
        />
        <label htmlFor="declaration">
          Please tick the box below to declare all the information you have
          provided is accurate.
        </label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.declaration}
          type="checkbox"
          id="declaration"
          name="declaration"
          required
        />
        <input type="submit" value="submit application" />
      </form>
    </>
  );
};

export default BecomeReputable;