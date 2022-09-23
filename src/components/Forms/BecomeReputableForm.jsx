import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import "./becomeReputableForm.css";

const BecomeReputable = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    proofOfLivingWage: "",
    declaration: false,
    noteToUs: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [eatery, setEatery] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    try {
      service
        .get(`/eateries/my/${id}`)
        .then((response) => setEatery(response.data));
    } catch (error) {}
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      data.append("image", file);
      const res = await service.patch(`/eateries/my/${id}`, data);
      navigate("/eateries/my");
      console.log("file", file);
      console.log("res", res);
      console.log("formData", formData);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <>
      <BackButton />
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="becomeReputableForm">
        {eatery.moderatorNotes && (
          <div id="modNotes">
            Your application has been review and a moderator has left the
            following message:
            <br />
            <br />
            <p>{eatery.moderatorNotes}</p>
          </div>
        )}

        <h2 id="becomeReputableApplicationFormTitle">list your eatery</h2>
        <label htmlFor="proofOfLivingWage" id="proofOfLivingWage">
          please attach proof that you are a living wage employer
        </label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            setFile(e.target.files[0]);
          }}
          value={formData.proofOfLivingWage}
          type="file"
          id="proofOfLivingWageButton"
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
          maxLength="140"
        />
        <label htmlFor="declaration" id="declarationLabel">
          Please tick the box below to confirm you have read and understood our
          guidelines. In addition, you declare all the information you have
          provided is accurate and up to date.
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
        <input
          type="submit"
          value="submit application"
          id="becomeReputableSubmit"
        />
      </form>
    </>
  );
};

export default BecomeReputable;
